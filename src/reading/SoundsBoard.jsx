import { useState } from "react";
import { useAudio } from "./useAudio.js";

/**
 * Schola Domestica — Sounds Practice
 * Pre-reading phoneme drill for lessons 1-8 (and review of all sounds through
 * the photographed range). Tap a big letter to hear it in your recorded voice.
 *
 * Two modes:
 *   • Lesson sets — each set shows that lesson's NEW sound highlighted plus the
 *     earlier sounds for review, following the book's introduction order.
 *   • Free board — every sound learned so far, in one grid.
 *
 * Plays the same recorded clips as the reader via useAudio (key "s:<say>").
 */

// The 13 recorded sounds, in the book's introduction order.
// say = the stretched string that maps to your recorded clip (s-<say>.mp3)
const SOUNDS = [
  { glyph: "m",  say: "mmm",    keyword: "man",  lesson: 1 },
  { glyph: "s",  say: "sss",    keyword: "sat",  lesson: 1 },
  { glyph: "a",  say: "aaa",    keyword: "and",  lesson: 3, short: true },
  { glyph: "\u0113", say: "eee", keyword: "eat", lesson: 5, long: true },  // ē
  { glyph: "t",  say: "t",      keyword: "cat",  lesson: 7 },
  { glyph: "r",  say: "rrr",    keyword: "run",  lesson: 9 },
  { glyph: "d",  say: "d",      keyword: "mad",  lesson: 12 },
  { glyph: "i",  say: "iii",    keyword: "if",   lesson: 14, short: true },
  { glyph: "th", say: "ththth", keyword: "this", lesson: 16 },
  { glyph: "c",  say: "c",      keyword: "cat",  lesson: 19 },
  { glyph: "o",  say: "ooo",    keyword: "ox",   lesson: 21, short: true },
  { glyph: "k",  say: "k",      keyword: "tack", lesson: 41 },
  { glyph: "ar", say: "arrr",   keyword: "arm",  lesson: 49 },
];

// Lesson sets: the new sound(s) introduced, with all earlier ones for review.
// Only lessons that introduce a recorded sound get a set.
const INTRO_LESSONS = [1, 3, 5, 7, 9, 12, 14, 16, 19, 21];
const SETS = INTRO_LESSONS.map((ln) => {
  const upto = SOUNDS.filter((s) => s.lesson <= ln);
  const isNew = (s) => s.lesson === ln;
  const newOnes = upto.filter(isNew).map((s) => s.glyph).join(", ");
  return { lesson: ln, sounds: upto, newOnes };
});

const VIEWS = [{ id: "board", label: "All sounds" }, ...SETS.map((s) => ({ id: `L${s.lesson}`, label: `Lesson ${s.lesson}` }))];

export default function SoundsBoard() {
  const speak = useAudio();
  const [view, setView] = useState("board");

  const set = SETS.find((s) => `L${s.lesson}` === view);
  const sounds = set ? set.sounds : SOUNDS;
  const newGlyphs = set ? new Set(set.sounds.filter((x) => x.lesson === set.lesson).map((x) => x.glyph)) : new Set();

  const play = (s) => speak(s.say, { slow: true });

  return (
    <div className="sb">
      <style>{css}</style>

      <header className="sb-head">
        <p className="sb-eyebrow">Schola Domestica</p>
        <h1 className="sb-title">Sounds</h1>
        <label className="sb-pick">
          Show
          <select value={view} onChange={(e) => setView(e.target.value)}>
            {VIEWS.map((v) => (
              <option key={v.id} value={v.id}>{v.label}</option>
            ))}
          </select>
        </label>
        {set && (
          <p className="sb-note">
            New this lesson: <strong>{set.newOnes}</strong> — the rest are review.
          </p>
        )}
      </header>

      <main className="sb-grid">
        {sounds.map((s) => (
          <button
            key={s.glyph}
            className={"sb-tile" + (newGlyphs.has(s.glyph) ? " is-new" : "")}
            onClick={() => play(s)}
            aria-label={`Sound ${s.glyph} as in ${s.keyword}. Tap to hear it.`}
          >
            <span className="sb-glyph">{s.glyph}</span>
            <span className="sb-key">{s.keyword}</span>
          </button>
        ))}
      </main>

      <p className="sb-hint">Tap a letter to hear its sound.</p>
    </div>
  );
}

const css = `
.sb{
  --g:#c9902a; --g2:#e8b84b; --p:#f7edcc; --bg:#0e0b07;
  max-width:52rem;margin:0 auto;padding:1.5rem 1.25rem 3rem;
  color:var(--p);font-family:"Crimson Pro",Georgia,serif;
}
.sb-head{text-align:center;margin-bottom:1.5rem}
.sb-eyebrow{margin:0;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--g)}
.sb-title{margin:.15rem 0 1rem;font-family:"Cinzel",serif;font-weight:600;font-size:2rem;color:var(--g2)}
.sb-pick{display:inline-flex;align-items:center;gap:.5rem;font-size:.95rem;color:var(--p)}
.sb-pick select{font-family:inherit;font-size:.95rem;color:#0e0b07;background:var(--p);border:1px solid var(--g);border-radius:.4rem;padding:.3rem .5rem}
.sb-note{margin:.8rem 0 0;font-size:.95rem;color:var(--g)}
.sb-note strong{color:var(--g2)}

.sb-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(7rem,1fr));
  gap:1rem;margin-top:.5rem;
}
.sb-tile{
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;
  aspect-ratio:1/1;cursor:pointer;
  background:var(--p);color:#0e0b07;
  border:2px solid var(--g);border-radius:1rem;
  box-shadow:0 6px 18px rgba(0,0,0,.35);
  transition:transform .12s ease, box-shadow .12s ease;
  -webkit-tap-highlight-color:transparent;
}
.sb-tile:hover{transform:translateY(-3px)}
.sb-tile:active{transform:translateY(0)}
.sb-tile:focus-visible{outline:3px solid var(--g2);outline-offset:3px}
.sb-tile.is-new{border-color:var(--g2);box-shadow:0 0 0 3px rgba(232,184,75,.35),0 6px 18px rgba(0,0,0,.35)}

.sb-glyph{font-family:"IM Fell English","Crimson Pro",serif;font-size:clamp(2.4rem,7vw,3.4rem);line-height:1}
.sb-key{font-size:.95rem;color:#6b5320}

.sb-hint{text-align:center;margin-top:1.5rem;font-size:1rem;color:var(--g)}

@media (prefers-reduced-motion:reduce){ .sb-tile{transition:none} }
`;
