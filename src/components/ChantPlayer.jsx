// src/components/ChantPlayer.jsx
// Bell-tone chant melody player for Schola Cantorum

import { useState, useRef, useEffect } from "react";
import { TONES } from "../data/tones.js";

const BEAT_DURATION = 0.55;

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playBellNote(ctx, freq, duration, startTime) {
  const gain = ctx.createGain();
  gain.connect(ctx.destination);

  // Bell has multiple harmonics
  const harmonics = [1, 2, 3, 4.2, 5.4, 6.8];
  const gains     = [1, 0.5, 0.25, 0.12, 0.06, 0.03];

  harmonics.forEach((h, i) => {
    const osc = ctx.createOscillator();
    const hGain = ctx.createGain();
    osc.connect(hGain);
    hGain.connect(gain);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq * h, startTime);
    hGain.gain.setValueAtTime(gains[i] * 0.4, startTime);
    hGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 2.5);
    osc.start(startTime);
    osc.stop(startTime + duration * 2.5);
  });

  // Overall envelope — bell attack + long decay
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.6, startTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 2.5);
}

export function useChantPlayer() {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(null);
  const [noteIndex, setNoteIndex] = useState(-1);
  const ctxRef = useRef(null);
  const timeoutsRef = useRef([]);

  function stop() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setPlaying(false);
    setNoteIndex(-1);
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

    let time = ctx.currentTime + 0.15;
    const newTimeouts = [];

    midi.forEach((m, i) => {
      const dur = (rhythm[i] || 1) * BEAT_DURATION;
      const freq = midiToFreq(m);
      playBellNote(ctx, freq, dur, time);

      const delay = Math.max(0, (time - ctx.currentTime) * 1000);
      const idx = i;
      newTimeouts.push(setTimeout(() => setNoteIndex(idx), delay));
      time += dur;
    });

    const totalDur = (time - ctx.currentTime) * 1000;
    newTimeouts.push(setTimeout(() => {
      setPlaying(false);
      setNoteIndex(-1);
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
