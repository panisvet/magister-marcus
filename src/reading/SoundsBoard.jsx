import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/**
 * Schola Domestica - Sounds Practice
 * Phoneme drill covering every sound in the reader (lessons 1-100). Tap a big
 * letter to hear it in your recorded voice.
 *
 * "Show" filters by type: Consonants, Short vowels, Long vowels, Digraphs,
 * Vowel teams, R-controlled - or "All sounds".
 *
 * Audio: self-contained resolver tries /audio/s-<say>.m4a, then .mp3, then the
 * server TTS proxy. say = clip key -> /audio/s-<say>.(m4a|mp3)
 */
const SOUNDS = [
  // --- Consonants ---
  { glyph: "m", say: "mmm",  keyword: "man",   type: "cons" },
  { glyph: "s", say: "sss",  keyword: "sat",   type: "cons" },
  { glyph: "t", say: "t",    keyword: "ten",   type: "cons" },
  { glyph: "r", say: "rrr",  keyword: "run",   type: "cons" },
  { glyph: "d", say: "d",    keyword: "mad",   type: "cons" },
  { glyph: "c", say: "c",    keyword: "cat",   type: "cons" },
  { glyph: "n", say: "nnn",  keyword: "no",    type: "cons" },
  { glyph: "f", say: "fff",  keyword: "fun",   type: "cons" },
  { glyph: "l", say: "lll",  keyword: "late",  type: "cons" },
  { glyph: "w", say: "wuh",  keyword: "we",    type: "cons" },
  { glyph: "g", say: "g",    keyword: "tag",   type: "cons" },
  { glyph: "h", say: "h",    keyword: "hat",   type: "cons" },
  { glyph: "k", say: "k",    keyword: "tack",  type: "cons" },
  { glyph: "v", say: "vvv",  keyword: "very",  type: "cons" },
  { glyph: "p", say: "p",    keyword: "tap",   type: "cons" },
  { glyph: "b", say: "b",    keyword: "grab",  type: "cons" },
  { glyph: "j", say: "j",    keyword: "judge", type: "cons" },
  { glyph: "x", say: "ksss", keyword: "fox",   type: "cons" },
  { glyph: "z", say: "zzz",  keyword: "buzz",  type: "cons" },

  // --- Short vowels (a e i o u, and sometimes y) ---
  { glyph: "a", say: "aaa", keyword: "and", type: "short" },
  { glyph: "e", say: "ehh", keyword: "end", type: "short" },
  { glyph: "i", say: "iii", keyword: "if",  type: "short" },
  { glyph: "o", say: "ooo", keyword: "ox",  type: "short" },
  { glyph: "u", say: "uuu", keyword: "up",  type: "short" },
  { glyph: "y", say: "yuh", keyword: "yes", type: "short" }, // y plays its /y/ clip

  // --- Long vowels (macron) ---
  { glyph: "\u0113", say: "eee", keyword: "eat",  type: "long" },  // e-macron
  { glyph: "\u0101", say: "ay",  keyword: "ate",  type: "long" },  // a-macron
  { glyph: "\u012b", say: "I",   keyword: "ice",  type: "long" },  // i-macron
  { glyph: "\u014d", say: "oh",  keyword: "over", type: "long" },  // o-macron
  { glyph: "\u016b", say: "yoo", keyword: "use",  type: "long" },  // u-macron
  { glyph: "\u0233", say: "I",   keyword: "my",   type: "long" },  // y-macron
  { glyph: "I",      say: "I",   keyword: "I",     type: "long" },  // the word "I"

  // --- Digraphs (two letters, one sound) ---
  { glyph: "th",  say: "ththth", keyword: "this",  type: "digraphs" },
  { glyph: "sh",  say: "shshsh", keyword: "she",   type: "digraphs" },
  { glyph: "ch",  say: "ch",     keyword: "touch", type: "digraphs" },
  { glyph: "ing", say: "iiing",  keyword: "sing",  type: "digraphs" },
  { glyph: "wh",  say: "wuh",    keyword: "why",   type: "digraphs" },
  { glyph: "qu",  say: "kooo",   keyword: "quick", type: "digraphs" },

  // --- Vowel teams / diphthongs ---
  { glyph: "ee", say: "eee",    keyword: "see",  type: "teams" },
  { glyph: "ea", say: "eee",    keyword: "leaf", type: "teams" },
  { glyph: "oo", say: "oooooo", keyword: "moon", type: "teams" },
  { glyph: "oo", say: "uu",     keyword: "book", type: "teams" },  // short oo
  { glyph: "ai", say: "ay",     keyword: "rain", type: "teams" },
  { glyph: "oa", say: "oh",     keyword: "boat", type: "teams" },
  { glyph: "ou", say: "owww",   keyword: "loud", type: "teams" },
  { glyph: "ow", say: "owww",   keyword: "cow",  type: "teams" },  // ow = /ou/
  { glyph: "oy", say: "oy",     keyword: "boy",  type: "teams" },
  { glyph: "oi", say: "oy",     keyword: "coin", type: "teams" },  // oi = /oy/

  // --- R-controlled ---
  { glyph: "ar",  say: "arrr", keyword: "arm",     type: "r" },
  { glyph: "er",  say: "urrr", keyword: "brother", type: "r" },
  { glyph: "ir",  say: "urrr", keyword: "girl",    type: "r" },  // ir = /er/
  { glyph: "or",  say: "or",   keyword: "corn",    type: "r" },
  { glyph: "ear", say: "eer",  keyword: "ear",     type: "r" },
];

const GROUPS = [
  { id: "cons",     label: "Consonants" },
  { id: "short",    label: "Short vowels" },
  { id: "long",     label: "Long vowels" },
  { id: "digraphs", label: "Digraphs" },
  { id: "teams",    label: "Vowel teams" },
  { id: "r",        label: "R-controlled" },
];

const VIEWS = [{ id: "all", label: "All sounds" }, ...GROUPS];

// Self-contained phoneme player: /audio/s-<say>.m4a -> .mp3 -> server TTS.
function usePhoneme() {
  const audioRef = useRef(null);
  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
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
        .then((b) => {
          stop();
          const a = new Audio(URL.createObjectURL(b));
          audioRef.current = a;
          a.play().catch(() => {});
        })
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

  const Tile = (s) => (
    <button
      key={`${s.type}-${s.glyph}-${s.keyword}`}
      className="sb-tile"
      onClick={() => play(s.say)}
      aria-label={`Sound ${s.glyph} as in ${s.keyword}. Tap to hear it.`}
    >
      <span className="sb-glyph">{s.glyph}</span>
      <span className="sb-key">{s.keyword}</span>
    </button>
  );

  const groupsToShow =
    view === "all" ? GROUPS : GROUPS.filter((g) => g.id === view);

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
          return (
            <section className="sb-section" key={g.id}>
              {view === "all" && <h2>{g.label}</h2>}
              <div className="sb-grid">{items.map(Tile)}</div>
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
