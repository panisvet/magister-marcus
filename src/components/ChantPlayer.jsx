// src/components/ChantPlayer.jsx
// Harp sampler chant melody player using Tone.js

import { useState, useRef, useEffect, useCallback } from "react";
import * as Tone from "tone";
import { TONES } from "../data/tones.js";

const BEAT_DURATION = 0.55;

const HARP_SAMPLES = {
  "C5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/C5.mp3",
  "D5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/D5.mp3",
  "E5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/E5.mp3",
  "F5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/F5.mp3",
  "G5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/G5.mp3",
  "A5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/A5.mp3",
  "B5": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/B5.mp3",
  "C6": "https://nbrosowsky.github.io/tonejs-instruments/samples/harp/C6.mp3",
};

// Module-level sampler — created once, shared across all instances
let globalSampler = null;
let globalSamplerLoaded = false;
let globalSamplerLoading = false;
const loadCallbacks = [];

function getOrCreateSampler(onReady) {
  if (globalSamplerLoaded && globalSampler) {
    onReady(globalSampler);
    return;
  }
  loadCallbacks.push(onReady);
  if (globalSamplerLoading) return;
  globalSamplerLoading = true;
  globalSampler = new Tone.Sampler({
    urls: HARP_SAMPLES,
    onload: () => {
      console.log("Harp samples ready");
      globalSamplerLoaded = true;
      loadCallbacks.forEach(cb => cb(globalSampler));
      loadCallbacks.length = 0;
    },
    onerror: (e) => console.warn("Harp load error:", e),
  }).toDestination();
}

function midiToNote(midi) {
  const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  return notes[midi % 12] + (Math.floor(midi / 12) - 1);
}

export function useChantPlayer() {
  const [playing, setPlaying] = useState(false);
  const [noteIndex, setNoteIndex] = useState(-1);
  const [loaded, setLoaded] = useState(globalSamplerLoaded);
  const timeoutsRef = useRef([]);
  const partRef = useRef(null);

  useEffect(() => {
    if (!globalSamplerLoaded) {
      getOrCreateSampler(() => setLoaded(true));
    }
  }, []);

  function stop() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (partRef.current) {
      partRef.current.stop();
      partRef.current.dispose();
      partRef.current = null;
    }
    Tone.getTransport().stop();
    Tone.getTransport().cancel();
    setPlaying(false);
    setNoteIndex(-1);
  }

  async function play(sing, tone) {
    stop();
    const toneData = TONES[parseInt(tone)];
    if (!toneData || !toneData[sing] || !globalSampler) return;

    await Tone.start();

    const melody = toneData[sing];
    const { midi, rhythm } = melody;

    setPlaying(true);
    setNoteIndex(0);

    Tone.getTransport().bpm.value = 60;

    let timeAccum = 0;
    const events = midi.map((m, i) => {
      const dur = (rhythm[i] || 1) * BEAT_DURATION;
      const t = timeAccum;
      timeAccum += dur;
      return { time: t, midi: m, dur, index: i };
    });

    const part = new Tone.Part((time, event) => {
      const note = midiToNote(event.midi);
      globalSampler.triggerAttackRelease(note, event.dur * 0.85, time);
      const delay = Math.max(0, (time - Tone.now()) * 1000);
      timeoutsRef.current.push(
        setTimeout(() => setNoteIndex(event.index), delay)
      );
    }, events);

    part.start(0);
    partRef.current = part;
    Tone.getTransport().start();

    timeoutsRef.current.push(setTimeout(() => stop(), timeAccum * 1000 + 800));
  }

  return { play, stop, playing, noteIndex, loaded };
}

export default function ChantPlayer({ sing, tone, onClose }) {
  const { play, stop, playing, noteIndex, loaded } = useChantPlayer();
  const toneData = TONES[parseInt(tone)];
  const melody = toneData?.[sing];
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (melody && loaded && !hasPlayed.current) {
      hasPlayed.current = true;
      play(sing, tone);
    }
    return () => stop();
  }, [loaded]);

  if (!melody) return null;

  const catLabel = sing === "tropar" ? "Troparion"
    : sing === "stichera" ? "Stichera" : "Prokeimenon";

  return (
    <div className="cp-panel">
      <div className="cp-header">
        <span className="cp-title">Tone {tone} — {catLabel}</span>
        <button className="cp-close" onClick={() => { stop(); onClose && onClose(); }}>✕</button>
      </div>
      {!loaded && <div className="cp-loading">Loading harp samples…</div>}
      <div className="cp-notes">
        {melody.solfege.map((s, i) => (
          <span key={i} className={"cp-note" + (i === noteIndex && playing ? " cp-active" : "")}>
            {s}
          </span>
        ))}
      </div>
      <div className="cp-controls">
        <button className="cp-btn" onClick={() => playing ? stop() : play(sing, tone)} disabled={!loaded}>
          {!loaded ? "Loading…" : playing ? "■ Stop" : "▶ Play"}
        </button>
        <span className="cp-desc">{melody.desc}</span>
      </div>
    </div>
  );
}
