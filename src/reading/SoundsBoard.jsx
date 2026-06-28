import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/**
 * Schola Domestica - Sounds Practice
 * Phoneme + spelling reference for the reader (lessons 1-100), filled out to
 * cover the real English sounds TYC's word lists use or gloss over. Tap a tile
 * to hear it in the recorded voice.
 *
 * Organized by SOUND: each vowel sound shows every spelling that makes it, so a
 * child sees "all the ways to write long A," etc. Spellings not drilled in the
 * reader are still real English and play the correct recorded clip.
 *
 * say = clip key -> /audio/s-<say>.(m4a|mp3); falls back to server TTS.
 */
const SOUNDS = [
  // ---- Consonants ----
  { glyph: "m",  say: "mmm",    keyword: "man",   type: "cons" },
  { glyph: "s",  say: "sss",    keyword: "sat",   type: "cons" },
  { glyph: "t",  say: "t",      keyword: "ten",   type: "cons" },
  { glyph: "r",  say: "rrr",    keyword: "run",   type: "cons" },
  { glyph: "d",  say: "d",      keyword: "mad",   type: "cons" },
  { glyph: "c",  say: "c",      keyword: "cat",   type: "cons" },
  { glyph: "n",  say: "nnn",    keyword: "no",    type: "cons" },
  { glyph: "f",  say: "fff",    keyword: "fun",   type: "cons" },
  { glyph: "l",  say: "lll",    keyword: "late",  type: "cons" },
  { glyph: "w",  say: "wuh",    keyword: "we",    type: "cons" },
  { glyph: "g",  say: "g",      keyword: "tag",   type: "cons" },
  { glyph: "h",  say: "h",      keyword: "hat",   type: "cons" },
  { glyph: "k",  say: "k",      keyword: "tack",  type: "cons" },
  { glyph: "v",  say: "vvv",    keyword: "very",  type: "cons" },
  { glyph: "p",  say: "p",      keyword: "tap",   type: "cons" },
  { glyph: "b",  say: "b",      keyword: "grab",  type: "cons" },
  { glyph: "j",  say: "j",      keyword: "judge", type: "cons" },
  { glyph: "x",  say: "ksss",   keyword: "fox",   type: "cons" },
  { glyph: "z",  say: "zzz",    keyword: "buzz",  type: "cons" },
  { glyph: "th", say: "ththth", keyword: "this",  type: "cons" }, // voiced
  { glyph: "th", say: "thh",    keyword: "thin",  type: "cons" }, // voiceless
  { glyph: "sh", say: "shshsh", keyword: "she",   type: "cons" },
  { glyph: "ch", say: "ch",     keyword: "touch", type: "cons" },
  { glyph: "ing",say: "iiing",  keyword: "sing",  type: "cons" },
  { glyph: "wh", say: "wuh",    keyword: "why",   type: "cons" },
  { glyph: "qu", say: "kooo",   keyword: "quick", type: "cons" },

  // ---- Short vowels (a e i o u, and sometimes y) ----
  { glyph: "a", say: "aaa", keyword: "and", type: "short" },
  { glyph: "e", say: "ehh", keyword: "end", type: "short" },
  { glyph: "i", say: "iii", keyword: "if",  type: "short" },
  { glyph: "o", say: "ooo", keyword: "ox",  type: "short" },
  { glyph: "u", say: "uuu", keyword: "up",  type: "short" },
  { glyph: "y", say: "yuh", keyword: "yes", type: "short" },

  // ---- Long A ----
  { glyph: "\u0101", say: "ay", keyword: "ate",  type: "longA" }, // a-e
  { glyph: "ai",     say: "ay", keyword: "rain", type: "longA" },
  { glyph: "ay",     say: "ay", keyword: "play", type: "longA" },

  // ---- Long E ----
  { glyph: "\u0113", say: "eee", keyword: "me",   type: "longE" }, // e
  { glyph: "ee",     say: "eee", keyword: "see",  type: "longE" },
  { glyph: "ea",     say: "eee", keyword: "eat",  type: "longE" },
  { glyph: "y",      say: "eee", keyword: "very", type: "longE" }, // final y

  // ---- Long I ----
  { glyph: "\u012b", say: "I", keyword: "bite", type: "longI" }, // i-e
  { glyph: "ie",     say: "I", keyword: "pie",  type: "longI" },
  { glyph: "\u0233", say: "I", keyword: "my",   type: "longI" }, // y
  { glyph: "I",      say: "I", keyword: "I",     type: "longI" },

  // ---- Long O ----
  { glyph: "\u014d", say: "oh", keyword: "nose", type: "longO" }, // o-e
  { glyph: "oa",     say: "oh", keyword: "boat", type: "longO" },
  { glyph: "o",      say: "oh", keyword: "go",   type: "longO" },

  // ---- Long U ----
  { glyph: "\u016b", say: "yoo", keyword: "use", type: "longU" }, // u-e

  // ---- /ou/ ----
  { glyph: "ou", say: "owww", keyword: "loud", type: "ou" },
  { glyph: "ow", say: "owww", keyword: "cow",  type: "ou" },

  // ---- /oy/ ----
  { glyph: "oy", say: "oy", keyword: "boy",  type: "oy" },
  { glyph: "oi", say: "oy", keyword: "coin", type: "oy" },

  // ---- /aw/ ----
  { glyph: "aw", say: "aw", keyword: "saw",  type: "aw" },
  { glyph: "au", say: "aw", keyword: "haul", type: "aw" },

  // ---- /ar/ ----
  { glyph: "ar", say: "arrr", keyword: "arm", type: "ar" },

  // ---- /er/ ----
  { glyph: "er", say: "urrr", keyword: "her",  type: "er" },
  { glyph: "ir", say: "urrr", keyword: "girl", type: "er" },
  { glyph: "ur", say: "urrr", keyword: "turn", type: "er" },

  // ---- /or/ ----
  { glyph: "or",  say: "or", keyword: "corn", type: "or" },
  { glyph: "ore", say: "or", keyword: "more", type: "or" },

  // ---- /air/ ----
  { glyph: "air", say: "air", keyword: "hair", type: "air" },
  { glyph: "are", say: "air", keyword: "care", type: "air" },
  { glyph: "ear", say: "air", keyword: "bear",  type: "air" },
  { glyph: "ere", say: "air", keyword: "there", type: "air" },

  // ---- /eer/ ----
  { glyph: "ear", say: "eer", keyword: "hear", type: "eer" },
  { glyph: "eer", say: "eer", keyword: "deer", type: "eer" },
  { glyph: "ere", say: "eer", keyword: "here", type: "eer" },

  // ---- oo ----
  { glyph: "oo", say: "uu",     keyword: "book", type: "ooShort" },
  { glyph: "oo", say: "oooooo", keyword: "moon", type: "ooLong" },
];

const GROUPS = [
  { id: "cons",    label: "Consonants" },
  { id: "short",   label: "Short vowels" },
  { id: "longA",   label: "Long A" },
  { id: "longE",   label: "Long E" },
  { id: "longI",   label: "Long I" },
  { id: "longO",   label: "Long O" },
  { id: "longU",   label: "Long U" },
  { id: "ou",      label: "/ou/ (loud)" },
  { id: "oy",      label: "/oy/ (boy)" },
  { id: "aw",      label: "/aw/ (saw)" },
  { id: "ar",      label: "ar (arm)" },
  { id: "er",      label: "er (her)" },
  { id: "or",      label: "or (corn)" },
  { id: "air",     label: "air (hair)" },
  { id: "eer",     label: "eer (hear)" },
  { id: "ooShort", label: "oo (book)" },
  { id: "ooLong",  label: "oo (moon)" },
];

// Convenience super-views so the dropdown isn't overwhelming.
const VOWEL_SOUND_IDS = ["longA","longE","longI","longO","longU","ou","oy","aw","ar","er","or","air","eer","ooShort","ooLong"];
const VIEWS = [
  { id: "all",    label: "All sounds" },
  { id: "cons",   label: "Consonants" },
  { id: "short",  label: "Short vowels" },
  { id: "vowels", label: "Vowel sounds (all)" },
  ...GROUPS.filter((g) => VOWEL_SOUND_IDS.includes(g.id)),
];

// Self-contained player: /audio/s-<say>.m4a -> .mp3 -> server TTS.
function usePhoneme() {
  const audioRef = useRef(null);
  const stop = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
  };
  return useCallback((say) => {
    if (!say) return;
    const exts = ["m4a", "mp3"];
    let i = 0;
    const tts = () => {
      fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: say, slow: true }),
      })
        .then((r) => (r.ok ? r.blob() : Promise.reject(new Error("tts"))))
        .then((b) => { stop(); const a = new Audio(URL.createObjectURL(b)); audioRef.current = a; a.play().catch(() => {}); })
        .catch(() => console.warn("No audio for", say));
    };
    const tryNext = () => {
      if (i >= exts.length) return tts();
      stop();
      const a = new Audio(`/audio/s-${say}.${exts[i]}`);
      audioRef.current = a;
      a.onerror = () => { i += 1; tryNext(); };
      a.play().catch(() => {});
    };
    tryNext();
  }, []);
}

export default function SoundsBoard() {
  const play = usePhoneme();
  const [view, setView] = useState("all");

  const Tile = (s, k) => (
    <button
      key={`${s.type}-${s.glyph}-${k}`}
      className="sb-tile"
      onClick={() => play(s.say)}
      aria-label={`${s.glyph} as in ${s.keyword}. Tap to hear it.`}
    >
      <span className="sb-glyph">{s.glyph}</span>
      <span className="sb-key">{s.keyword}</span>
    </button>
  );

  let groupsToShow;
  if (view === "all") groupsToShow = GROUPS;
  else if (view === "vowels") groupsToShow = GROUPS.filter((g) => VOWEL_SOUND_IDS.includes(g.id));
  else groupsToShow = GROUPS.filter((g) => g.id === view);

  const showHeaders = view === "all" || view === "vowels";

  return (
    <div className="sb">
      <style>{css}</style>

      <header className="sb-head">
        <nav className="sb-nav">
          <Link to="/read">&lsaquo; Reading</Link>
          <Link to="/">Home</Link>
        </nav>
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
      </header>

      <main>
        {groupsToShow.map((g) => {
          const items = SOUNDS.filter((s) => s.type === g.id);
          if (!items.length) return null;
          return (
            <section className="sb-section" key={g.id}>
              {showHeaders && <h2>{g.label}</h2>}
              <div className="sb-grid">{items.map((s, k) => Tile(s, k))}</div>
            </section>
          );
        })}
      </main>

      <p className="sb-hint">Tap a letter to hear its sound.</p>
    </div>
  );
}

const css = `
.sb{
  --g:#c9902a; --g2:#e8b84b; --p:#f7edcc; --bg:#0e0b07;
  max-width:60rem;margin:0 auto;padding:1.5rem 1.25rem 3rem;
  color:var(--p);font-family:"Crimson Pro",Georgia,serif;
}
.sb-head{text-align:center;margin-bottom:1.5rem;position:relative}
.sb-nav{display:flex;justify-content:center;gap:1.25rem;margin-bottom:.75rem}
.sb-nav a{
  font-family:"Cinzel",serif;font-size:.8rem;letter-spacing:.04em;
  color:var(--g2);text-decoration:none;border:1px solid var(--g);
  border-radius:.5rem;padding:.35rem .8rem;
}
.sb-nav a:hover{background:var(--g2);color:var(--bg)}
.sb-eyebrow{margin:0;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--g)}
.sb-title{margin:.15rem 0 1rem;font-family:"Cinzel",serif;font-weight:600;font-size:2rem;color:var(--g2)}
.sb-pick{display:inline-flex;align-items:center;gap:.5rem;font-size:.95rem;color:var(--p)}
.sb-pick select{font-family:inherit;font-size:.95rem;color:#0e0b07;background:var(--p);border:1px solid var(--g);border-radius:.4rem;padding:.3rem .5rem}

.sb-section{margin-top:1.75rem}
.sb-section h2{
  font-family:"Cinzel",serif;color:var(--g2);font-size:1.05rem;font-weight:600;
  text-align:left;margin:0 0 .85rem;padding-bottom:.3rem;
  border-bottom:1px solid rgba(201,144,42,.4);
}
.sb-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(6.5rem,1fr));
  gap:1rem;
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

.sb-glyph{font-family:"IM Fell English","Crimson Pro",serif;font-size:clamp(2.2rem,6.5vw,3.2rem);line-height:1}
.sb-key{font-size:.95rem;color:#6b5320}

.sb-hint{text-align:center;margin-top:2rem;font-size:1rem;color:var(--g)}

@media (prefers-reduced-motion:reduce){ .sb-tile{transition:none} }
`;
