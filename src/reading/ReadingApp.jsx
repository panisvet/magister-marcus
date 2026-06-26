import { useAudio } from "./useAudio.js";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import data from "./tyc_reading_data.json";

/**
 * Schola Domestica — Learn to Read
 * Sound-segmentation reader. A child taps once per sound; an arrow slides
 * beneath the active sound (the book's own "sound out" device). The final
 * tap blends the whole word. Audio is pronounced via the server TTS proxy
 * at /api/tts (xAI Grok TTS — key stays server-side).
 *
 * Design tokens (defined globally in Schola Domestica):
 *   --gold #c9902a  --gold2 #e8b84b  --parch #f7edcc  --bg #0e0b07
 * Fonts: Cinzel (display), Crimson Pro (body), IM Fell English (word card)
 */

const SAY = Object.fromEntries(
  data.phonemeInventory.map((p) => [p.symbol, p.say])
);
// Display glyph for a sound symbol (macron vowels etc.)
const GLYPH = {
  e: "\u0113", "a-": "\u0101", "o-": "\u014d", "i-": "\u012b",
  "y-": "\u0233", "u-": "\u016b", "e-short": "e",
};
const glyph = (s) => GLYPH[s] || s;


export default function ReadingApp() {
  const playable = useMemo(
    () => data.lessons.filter((l) => l.decodableWords.length || l.story),
    []
  );
  const [li, setLi] = useState(0);
  const [wi, setWi] = useState(0);
  const [step, setStep] = useState(0); // sounds revealed so far
  const speak = useAudio();

  const lesson = playable[li];
  const words = lesson.decodableWords;
  const word = words[wi];
  const sounds = word.sounds;
  const blended = step > sounds.length; // past the last sound = whole word

  const reset = () => setStep(0);
  const goWord = (n) => {
    setWi((p) => (p + n + words.length) % words.length);
    reset();
  };
  const goLesson = (i) => {
    setLi(i);
    setWi(0);
    reset();
  };

  // Tap: reveal next sound and say it; after the last, blend the word.
  const tap = () => {
    if (step < sounds.length) {
      const next = step + 1;
      setStep(next);
      speak(SAY[sounds[next - 1]] ?? glyph(sounds[next - 1]), { slow: true });
    } else if (!blended) {
      setStep(sounds.length + 1);
      speak(word.word, { slow: false });
    } else {
      reset();
    }
  };

  const activeIdx = blended ? -1 : step - 1;

  return (
    <div className="lr">
      <style>{css}</style>

      <header className="lr-head">
        <p className="lr-eyebrow">Schola Domestica</p>
        <h1 className="lr-title">Learn to Read</h1>
        <label className="lr-lesson">
          Lesson
          <select
            value={li}
            onChange={(e) => goLesson(Number(e.target.value))}
          >
            {playable.map((l, i) => (
              <option key={l.lesson} value={i}>
                {l.lesson}
                {l.newSound ? ` — new sound ${l.newSound}` : ""}
              </option>
            ))}
          </select>
        </label>
      </header>

      <main
        className="lr-card"
        role="button"
        tabIndex={0}
        aria-label={`Sound out the word ${word.word}. Tap to reveal the next sound.`}
        onClick={tap}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            tap();
          }
        }}
      >
        <div className={`lr-word${blended ? " is-blended" : ""}`}>
          {sounds.map((s, i) => {
            const shown = i < step;
            const active = i === activeIdx;
            return (
              <span
                key={i}
                className={
                  "lr-sound" +
                  (shown ? " is-shown" : "") +
                  (active ? " is-active" : "") +
                  (blended ? " is-joined" : "")
                }
              >
                {glyph(s)}
                <svg className="lr-arrow" viewBox="0 0 100 24" aria-hidden>
                  <line x1="4" y1="12" x2="86" y2="12" />
                  <polyline points="78,5 90,12 78,19" />
                </svg>
              </span>
            );
          })}
        </div>

        <p className="lr-hint">
          {blended
            ? `“${word.word}”`
            : step === 0
            ? "Tap to sound it out"
            : step < sounds.length
            ? "Keep tapping"
            : "Tap once more to say it fast"}
        </p>
      </main>

      <div className="lr-controls">
        <button className="lr-btn" onClick={() => goWord(-1)}>
          ‹ Back
        </button>
        <button
          className="lr-btn lr-btn--ghost"
          onClick={async () => { for (const s of sounds) { speak(SAY[s] ?? glyph(s), { slow: true }); await new Promise(r => setTimeout(r, 700)); } }}
        >
          Say it slow
        </button>
        <button
          className="lr-btn lr-btn--ghost"
          onClick={() => speak(word.word, { slow: false })}
        >
          Say it fast
        </button>
        <button className="lr-btn" onClick={() => goWord(1)}>
          Next ›
        </button>
      </div>

      <p className="lr-progress">
        Word {wi + 1} of {words.length}
      </p>

      {lesson.story && (
        <section className="lr-story">
          <h2>Story</h2>
          <p>
            {lesson.story.words.map((w, i) => (
              <button
                key={i}
                className="lr-storyword"
                onClick={() => speak(w, { slow: false })}
              >
                {w}
              </button>
            ))}
          </p>
        </section>
      )}
    </div>
  );
}

const css = `
.lr{
  --g:#c9902a; --g2:#e8b84b;
  --p:#f7edcc; --bg:#0e0b07;
  max-width:48rem;margin:0 auto;padding:1.5rem 1.25rem 3rem;
  color:var(--p);font-family:"Crimson Pro",Georgia,serif;
}
.lr-head{text-align:center;margin-bottom:1.5rem}
.lr-eyebrow{margin:0;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--g)}
.lr-title{margin:.15rem 0 1rem;font-family:"Cinzel",serif;font-weight:600;font-size:2rem;color:var(--g2)}
.lr-lesson{display:inline-flex;align-items:center;gap:.5rem;font-size:.95rem;color:var(--p)}
.lr-lesson select{
  font-family:inherit;font-size:.95rem;color:var(--bg);background:var(--p);
  border:1px solid var(--g);border-radius:.4rem;padding:.3rem .5rem;
}

.lr-card{
  display:block;width:100%;text-align:center;cursor:pointer;
  background:var(--p);color:var(--bg);
  border:2px solid var(--g);border-radius:1rem;
  padding:3rem 1rem 2.25rem;box-shadow:0 10px 30px rgba(0,0,0,.45);
  -webkit-tap-highlight-color:transparent;
}
.lr-card:focus-visible{outline:3px solid var(--g2);outline-offset:3px}

.lr-word{
  display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;
  gap:1.1rem;font-family:"IM Fell English","Crimson Pro",serif;
  font-size:clamp(3rem,14vw,5.5rem);line-height:1;
}
.lr-word.is-blended{gap:0}
.lr-sound{position:relative;opacity:.22;transition:opacity .25s ease,transform .25s ease}
.lr-sound.is-shown{opacity:1}
.lr-sound.is-active{color:var(--g);transform:translateY(-2px)}
.lr-sound.is-joined{opacity:1;color:var(--bg)}

.lr-arrow{
  position:absolute;left:50%;bottom:-1.4rem;transform:translateX(-50%) scaleX(0);
  transform-origin:left center;width:2.2em;height:.5em;
  opacity:0;transition:transform .28s ease,opacity .2s ease;
}
.lr-sound.is-active .lr-arrow{transform:translateX(-50%) scaleX(1);opacity:1}
.lr-sound.is-joined .lr-arrow{opacity:0}
.lr-arrow line,.lr-arrow polyline{
  fill:none;stroke:var(--g);stroke-width:6;stroke-linecap:round;stroke-linejoin:round;
}

.lr-hint{margin:2.2rem 0 0;font-size:1.1rem;color:#6b5320;min-height:1.4em}
.lr-word.is-blended + .lr-hint{font-family:"Cinzel",serif;font-size:1.5rem;color:var(--bg)}

.lr-controls{display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem;margin:1.25rem 0 .5rem}
.lr-btn{
  font-family:"Cinzel",serif;font-size:.85rem;letter-spacing:.04em;cursor:pointer;
  color:var(--bg);background:var(--g2);border:none;border-radius:.5rem;padding:.6rem 1rem;
}
.lr-btn--ghost{background:transparent;color:var(--g2);border:1px solid var(--g)}
.lr-btn:focus-visible{outline:2px solid var(--g2);outline-offset:2px}
.lr-progress{text-align:center;font-size:.85rem;color:var(--g);margin:.25rem 0 0}

.lr-story{margin-top:2rem;text-align:center}
.lr-story h2{font-family:"Cinzel",serif;color:var(--g2);font-size:1.1rem;margin:0 0 .5rem}
.lr-storyword{
  font-family:"IM Fell English",serif;font-size:1.5rem;color:var(--p);
  background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;
  margin:0 .15rem;padding:0 .1rem;
}
.lr-storyword:hover,.lr-storyword:focus-visible{color:var(--g2);border-bottom-color:var(--g);outline:none}

@media (prefers-reduced-motion:reduce){
  .lr-sound,.lr-arrow{transition:none}
}
`;
