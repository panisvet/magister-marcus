// src/components/ChantPlayer.jsx
// Web Audio API chant melody player for Schola Cantorum

import { useState, useRef, useEffect } from "react";
import { TONES } from "../data/tones.js";

const BEAT_DURATION = 0.45; // seconds per beat unit

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export function useChantPlayer() {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(null); // { tone, sing }
  const [noteIndex, setNoteIndex] = useState(0);
  const ctxRef = useRef(null);
  const timeoutsRef = useRef([]);

  function stop() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setPlaying(false);
    setNoteIndex(0);
  }

  function play(sing, tone) {
    stop();
    const toneData = TONES[parseInt(tone)];
    if (!toneData || !toneData[sing]) return;

    const melody = toneData[sing];
    const { midi, rhythm } = melody;

    if (!ctxRef.current || ctxRef.current.state === "closed") {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    setCurrent({ tone, sing });
    setPlaying(true);
    setNoteIndex(0);

    let time = ctx.currentTime + 0.1;
    const newTimeouts = [];

    midi.forEach((m, i) => {
      const dur = (rhythm[i] || 1) * BEAT_DURATION;
      const freq = midiToFreq(m);

      // Schedule oscillator note
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.3, time + 0.02);
      gain.gain.setValueAtTime(0.3, time + dur - 0.06);
      gain.gain.linearRampToValueAtTime(0, time + dur);

      osc.start(time);
      osc.stop(time + dur);

      // Update note index for UI highlighting
      const t = time;
      const idx = i;
      const delay = (t - ctx.currentTime) * 1000;
      newTimeouts.push(setTimeout(() => setNoteIndex(idx), delay));

      time += dur;
    });

    // Done
    const totalDur = (time - ctx.currentTime) * 1000;
    newTimeouts.push(setTimeout(() => {
      setPlaying(false);
      setNoteIndex(0);
    }, totalDur));

    timeoutsRef.current = newTimeouts;
  }

  useEffect(() => () => stop(), []);

  return { play, stop, playing, current, noteIndex };
}

export default function ChantPlayer({ sing, tone, onClose }) {
  const { play, stop, playing, noteIndex } = useChantPlayer();
  const toneData = TONES[parseInt(tone)];
  const melody = toneData?.[sing];

  useEffect(() => {
    if (melody) play(sing, tone);
    return () => stop();
  }, [sing, tone]);

  if (!melody) return null;

  const catLabel = sing === "tropar" ? "Troparion" : sing === "stichera" ? "Stichera" : "Prokeimenon";

  return (
    <div className="cp-panel">
      <div className="cp-header">
        <span className="cp-title">Tone {tone} — {catLabel}</span>
        <button className="cp-close" onClick={() => { stop(); onClose && onClose(); }}>✕</button>
      </div>
      <div className="cp-notes">
        {melody.solfege.map((s, i) => (
          <span key={i} className={"cp-note" + (i === noteIndex && playing ? " cp-active" : "")}>
            {s}
          </span>
        ))}
      </div>
      <div className="cp-controls">
        <button className="cp-btn" onClick={() => playing ? stop() : play(sing, tone)}>
          {playing ? "■ Stop" : "▶ Play"}
        </button>
        <span className="cp-desc">{melody.desc}</span>
      </div>
    </div>
  );
}
