// src/components/ChantPlayer.jsx
// Harp sampler chant melody player using Tone.js

import { useState, useRef, useEffect } from "react";
import * as Tone from "tone";
import { TONES } from "../data/tones.js";

const BEAT_DURATION = 0.55; // seconds per beat unit

// Harp samples from nbrosowsky/tonejs-instruments (CC0)
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

// MIDI to Tone.js note name
function midiToNote(midi) {
  const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  const oct = Math.floor(midi / 12) - 1;
  const note = notes[midi % 12];
  return note + oct;
}

export function useChantPlayer() {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(null);
  const [noteIndex, setNoteIndex] = useState(-1);
  const [loaded, setLoaded] = useState(false);
  const samplerRef = useRef(null);
  const timeoutsRef = useRef([]);
  const partRef = useRef(null);

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: HARP_SAMPLES,
      onload: () => setLoaded(true),
      onerror: (err) => console.warn("Harp sample load error:", err),
    }).toDestination();
    samplerRef.current = sampler;
    return () => {
      stop();
      sampler.dispose();
    };
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
    if (!toneData || !toneData[sing]) return;

    await Tone.start();

    const melody = toneData[sing];
    const { midi, rhythm } = melody;

    setCurrent({ tone, sing });
    setPlaying(true);
    setNoteIndex(0);

    const transport = Tone.getTransport();
    transport.bpm.value = 60;

    let timeAccum = 0;
    const events = midi.map((m, i) => {
      const dur = (rhythm[i] || 1) * BEAT_DURATION;
      const t = timeAccum;
      timeAccum += dur;
      return { time: t, midi: m, dur, index: i };
    });

    const part = new Tone.Part((time, event) => {
      if (samplerRef.current) {
        const note = midiToNote(event.midi);
        samplerRef.current.triggerAttackRelease(note, event.dur * 0.9, time);
      }
      const delay = Math.max(0, (time - Tone.now()) * 1000);
      timeoutsRef.current.push(
        setTimeout(() => setNoteIndex(event.index), delay)
      );
    }, events);

    part.start(0);
    partRef.current = part;

    transport.start();

    const totalDur = timeAccum * 1000;
    timeoutsRef.current.push(setTimeout(() => {
      stop();
    }, totalDur + 500));
  }

  return { play, stop, playing, current, noteIndex, loaded };
}

export default function ChantPlayer({ sing, tone, onClose }) {
  const { play, stop, playing, noteIndex, loaded } = useChantPlayer();
  const toneData = TONES[parseInt(tone)];
  const melody = toneData?.[sing];

  useEffect(() => {
    if (melody && loaded) play(sing, tone);
    return () => stop();
  }, [sing, tone, loaded]);

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
