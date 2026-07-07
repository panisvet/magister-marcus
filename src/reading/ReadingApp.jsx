import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
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

// TTS pronunciation overrides for English homographs whose spelling does not
// tell the synthesizer which reading to use. Keyed by lowercase word; value is a
// respelling sent to TTS only (clip filenames still use the real spelling). A
// per-word `speakAs` field in the data takes precedence over this map.
const SPEAK_AS = {
  read: "reed",
};

// Fisher–Yates shuffle (returns a new array; never mutates the source).
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Sounds introduced per lesson (drives the lessons 1-8 sound-practice cards).
const INV = data.phonemeInventory
  .filter((p) => p.lesson != null)
  .map((p) => ({ sym: p.symbol, say: p.say, key: p.asIn, lesson: p.lesson }));

function useTts() {
  const cache = useRef(new Map()); // base -> blob URL | "miss"
  const audioRef = useRef(null);

  const playUrl = (url) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(url);
    audioRef.current = a;
    return a.play();
  };

  // Server TTS fallback (used only when no static clip exists). Voice (leo) is
  // configured server-side in functions/api/tts.js.
  const tts = useCallback(async (text, slow) => {
    const key = `tts:${slow ? "s" : "f"}:${text}`;
    try {
      let url = cache.current.get(key);
      if (!url || url === "miss") {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, slow }),
        });
        if (!res.ok) throw new Error(`tts ${res.status}`);
        url = URL.createObjectURL(await res.blob());
        cache.current.set(key, url);
      }
      await playUrl(url);
    } catch (e) {
      console.warn("Pronunciation unavailable:", e.message);
    }
  }, []);

  // Resolve a static clip at /audio/<base>.(mp3|m4a) to a playable blob URL, or
  // null if none exists. We fetch and check the content-type instead of trusting
  // <audio>: a missing file on Cloudflare Pages returns the SPA index.html with
  // HTTP 200, which <audio>.play() can falsely report as success (silently
  // skipping TTS). Anything that is HTML (or not OK) is treated as a miss.
  // Results are cached: blob URL on hit, "miss" on miss.
  const clipUrl = useCallback(async (base) => {
    const cached = cache.current.get(`clip:${base}`);
    if (cached === "miss") return null;
    if (cached) return cached;
    for (const ext of ["mp3", "m4a"]) {
      try {
        const res = await fetch(`/audio/${base}.${ext}`);
        const type = res.headers.get("content-type") || "";
        if (res.ok && !/text\/html/i.test(type)) {
          const url = URL.createObjectURL(await res.blob());
          cache.current.set(`clip:${base}`, url);
          return url;
        }
      } catch (e) { /* network error: try next ext */ }
    }
    cache.current.set(`clip:${base}`, "miss");
    return null;
  }, []);

  // Play a static clip. Resolves true if a real clip played, false otherwise
  // (so callers fall through to TTS).
  const playClip = useCallback(async (base) => {
    const url = await clipUrl(base);
    if (!url) return false;
    try { await playUrl(url); return true; }
    catch (err) { return !!(err && err.name === "AbortError"); } // interrupted: clip is fine
  }, [clipUrl]);

  // Whole word: prefer baked clip (f-<word> fast / s-<word> slow); else TTS.
  // This avoids xAI spelling short words (e.g. "am" -> "ay em"). Sentences (with
  // spaces) skip the clip lookup and go straight to TTS.
  // `as` is a pronunciation override for the TTS fallback only (the clip filename
  // still uses the real spelling). Needed for homographs like "read" (/reed/ vs
  // /red/), which xAI otherwise guesses wrong. Source: word.speakAs in the data,
  // falling back to the small SPEAK_AS map below.
  const speak = useCallback(async (text, { slow = false, as } = {}) => {
    if (!text) return;
    if (!/\s/.test(text)) {
      const ok = await playClip(`${slow ? "s" : "f"}-${text}`);
      if (ok) return;
    }
    const spoken = as || SPEAK_AS[text.toLowerCase()] || text;
    await tts(spoken, slow);
  }, [playClip, tts]);

  // Single phoneme: human recording at /audio/s-<say>; else TTS (slow).
  const playSound = useCallback(async (say) => {
    if (!say) return;
    const ok = await playClip(`s-${say}`);
    if (!ok) await tts(say, true);
  }, [playClip, tts]);

  // "Say it slow": play each phoneme clip in order, waiting for each to finish
  // (e.g. sat -> /sss/ /aaa/ /t/). Uses the same content-type-aware lookup as
  // playClip; falls back to TTS for any missing clip.
  const playSequence = useCallback(async (says, gap = 140) => {
    for (const say of says) {
      if (!say) continue;
      const url = await clipUrl(`s-${say}`);
      if (url) {
        await new Promise((resolve) => {
          if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
          const a = new Audio(url);
          audioRef.current = a;
          const done = () => setTimeout(resolve, gap);
          a.onended = done;
          a.onerror = done;
          a.play().catch(done);
        });
      } else {
        await tts(say, true);
        await new Promise((r) => setTimeout(r, gap));
      }
    }
  }, [clipUrl, tts]);

  useEffect(
    () => () =>
      cache.current.forEach((u) => typeof u === "string" && u.startsWith("blob:") && URL.revokeObjectURL(u)),
    []
  );
  return { speak, playSound, playSequence };
}

export default function ReadingApp() {
  const playable = useMemo(
    () =>
      data.lessons.filter(
        (l) => l.decodableWords.length || l.story || l.newSound || l.lesson <= 8
      ),
    []
  );
  const [li, setLi] = useState(0);
  const [wi, setWi] = useState(0);
  const [step, setStep] = useState(0); // sounds revealed so far
  const [soundOrder, setSoundOrder] = useState(null); // shuffled sound syms, or null = book order
  const [wordOrder, setWordOrder] = useState(null);   // shuffled word indices, or null = book order
  const { speak, playSound, playSequence } = useTts();

  const lesson = playable[li];
  const words = lesson.decodableWords;
  const isSound = words.length === 0;                 // lessons 1-8: sounds only
  const learned = INV.filter((p) => p.lesson <= lesson.lesson);
  const newSyms = new Set(
    INV.filter((p) => p.lesson === lesson.lesson).map((p) => p.sym)
  );
  // Apply shuffle if active; fall back to book order. filter(Boolean) guards a
  // stale order after a lesson change (reset in goLesson keeps this clean).
  const orderedSounds = soundOrder
    ? soundOrder.map((s) => learned.find((p) => p.sym === s)).filter(Boolean)
    : learned;
  const orderedWords = wordOrder
    ? wordOrder.map((i) => words[i]).filter(Boolean)
    : words;
  const word = orderedWords[wi];
  // Render from per-word `units` when present (grapheme display + silent/ck/double/long
  // styling); fall back to raw `sounds` for any word that has no units yet.
  const units = word ? (word.units ?? word.sounds.map((s) => ({ g: glyph(s), s }))) : [];
  const taps = units.filter((u) => u.s != null); // tappable sounds (silent e excluded)
  const sounds = taps.map((u) => u.s);           // audio / blend / step source
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
    setSoundOrder(null);
    setWordOrder(null);
  };

  const shuffleSounds = () => setSoundOrder(shuffle(learned.map((p) => p.sym)));
  const shuffleWords = () => {
    setWordOrder(shuffle(words.map((_, i) => i)));
    setWi(0);
    reset();
  };

  // Tap: reveal next sound and say it; after the last, blend the word.
  const tap = () => {
    if (step < sounds.length) {
      const next = step + 1;
      setStep(next);
      playSound(SAY[sounds[next - 1]] ?? glyph(sounds[next - 1]));
    } else if (!blended) {
      setStep(sounds.length + 1);
      speak(word.word, { slow: false, as: word.speakAs });
    } else {
      reset();
    }
  };

  const activeIdx = blended ? -1 : step - 1;

  return (
    <div className="lr">
      <style>{css}</style>

      <header className="lr-head">
        <nav className="lr-nav">
          <Link to="/sounds">Sounds &rsaquo;</Link>
          <Link to="/">Home</Link>
        </nav>
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

      <section className={"lr-soundcard" + (isSound ? "" : " lr-soundcard--mini")}>
          <div className="lr-soundtop">
            <p className="lr-soundhead">
              {newSyms.size ? (
                <>New sound{newSyms.size > 1 ? "s" : ""}: <strong>{lesson.newSound}</strong> — tap any letter to hear it</>
              ) : (
                "Sounds so far — tap each to hear it"
              )}
            </p>
            {orderedSounds.length > 1 && (
              <button className="lr-shuf" onClick={shuffleSounds} aria-label="Shuffle the letters">
                ⤮ Mix letters
              </button>
            )}
          </div>
          <div className="lr-soundgrid">
            {orderedSounds.map((p) => (
              <button
                key={p.sym}
                className={"lr-stile" + (newSyms.has(p.sym) ? " is-new" : "")}
                onClick={() => playSound(p.say)}
                aria-label={`Sound ${glyph(p.sym)}${p.key ? ` as in ${p.key}` : ""}. Tap to hear it.`}
              >
                <span className="lr-sglyph">{glyph(p.sym)}</span>
                {p.key && <span className="lr-skey">{p.key}</span>}
              </button>
            ))}
          </div>
        </section>

      {!isSound && (
        <>
      <div className="lr-readrow">
        <p className="lr-readlabel">Now read these words</p>
        {words.length > 1 && (
          <button className="lr-shuf" onClick={shuffleWords} aria-label="Shuffle the words">
            ⤮ Mix words
          </button>
        )}
      </div>
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
          {(() => {
            let t = -1; // index among tappable sounds
            return units.map((u, i) => {
              const tappable = u.s != null;
              if (tappable) t += 1;
              const shown = tappable ? t < step : true; // silent letters always visible
              const active = tappable && t === activeIdx;
              return (
                <span
                  key={i}
                  className={
                    "lr-sound" +
                    (u.style ? ` lr-${u.style}` : "") +
                    (shown ? " is-shown" : "") +
                    (active ? " is-active" : "") +
                    (blended ? " is-joined" : "")
                  }
                >
                  {u.style === "ck" ? (
                    <>
                      c<span className="lr-ck-k">k</span>
                    </>
                  ) : (
                    u.g
                  )}
                  {tappable && (
                    <svg className="lr-arrow" viewBox="0 0 100 24" aria-hidden>
                      <line x1="4" y1="12" x2="86" y2="12" />
                      <polyline points="78,5 90,12 78,19" />
                    </svg>
                  )}
                </span>
              );
            });
          })()}
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
          onClick={() => playSequence(sounds.map((s) => SAY[s] ?? glyph(s)))}
        >
          Say it slow
        </button>
        <button
          className="lr-btn lr-btn--ghost"
          onClick={() => speak(word.word, { slow: false, as: word.speakAs })}
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
          <p className="lr-storytext">{lesson.story.text}</p>
          <button
            className="lr-btn lr-btn--ghost lr-story-read"
            onClick={() => speak(lesson.story.text, { slow: false })}
          >
            Read story
          </button>
        </section>
      )}
        </>
      )}
    </div>
  );
}

const css = `
.lr{
  --g:var(--gold,#c9902a); --g2:var(--gold2,#e8b84b);
  --p:var(--parch,#f7edcc); --bg:#0e0b07;  /* literal: must not self-reference / inherit page --bg */
  max-width:48rem;margin:0 auto;padding:1.5rem 1.25rem 3rem;
  color:var(--p);font-family:"Crimson Pro",Georgia,serif;
}
.lr-head{text-align:center;margin-bottom:1.5rem;position:relative}
.lr-nav{display:flex;justify-content:center;gap:1.25rem;margin-bottom:.75rem}
.lr-nav a{font-family:"Cinzel",serif;font-size:.8rem;letter-spacing:.04em;color:var(--g2);text-decoration:none;border:1px solid var(--g);border-radius:.5rem;padding:.35rem .8rem}
.lr-nav a:hover{background:var(--g2);color:var(--bg)}
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
.lr-sound{position:relative;opacity:.4;transition:opacity .25s ease,transform .25s ease}
.lr-sound.is-shown{opacity:1}
.lr-sound.is-active{color:var(--g);transform:translateY(-2px)}
.lr-sound.is-joined{opacity:1;color:var(--bg)}
/* TYC orthography */
.lr-silent{font-size:.5em;align-self:flex-end;opacity:.45;margin-left:-.6rem}     /* silent e: small, dropped, no arrow */
.lr-silent.is-shown{opacity:.55}
.lr-ck-k{font-size:.62em;vertical-align:.12em}                                    /* ck: diminutive k = single /k/ */

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

.lr-story{margin-top:2.5rem;text-align:center}
.lr-story h2{font-family:"Cinzel",serif;color:var(--g2);font-size:1.1rem;margin:0 0 .75rem}
.lr-storytext{
  font-family:"IM Fell English",serif;font-size:1.4rem;line-height:1.95;
  color:#2a2008;            /* dark ink, high contrast on white */
  text-align:left;max-width:34rem;margin:0 auto;
}
.lr-story-read{margin-top:1.25rem}
.lr-storyword:hover,.lr-storyword:focus-visible{color:var(--g2);border-bottom-color:var(--g);outline:none}

.lr-soundcard{
  background:var(--p);color:var(--bg);border:2px solid var(--g);border-radius:1rem;
  padding:1.75rem 1.25rem 2rem;box-shadow:0 10px 30px rgba(0,0,0,.45);text-align:center;
}
.lr-soundhead{margin:0 0 1.25rem;font-size:1.05rem;color:#6b5320}
.lr-soundhead strong{color:var(--g);font-family:"Cinzel",serif}
.lr-soundgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(5.5rem,1fr));gap:.9rem}
.lr-stile{
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35rem;
  aspect-ratio:1/1;cursor:pointer;background:#fff7e0;color:var(--bg);
  border:2px solid var(--g);border-radius:.9rem;box-shadow:0 4px 12px rgba(0,0,0,.25);
  transition:transform .12s ease;-webkit-tap-highlight-color:transparent;
}
.lr-stile:hover{transform:translateY(-3px)}
.lr-stile:focus-visible{outline:3px solid var(--g2);outline-offset:3px}
.lr-stile.is-new{border-color:var(--g2);box-shadow:0 0 0 3px rgba(232,184,75,.4),0 4px 12px rgba(0,0,0,.25)}
.lr-sglyph{font-family:"IM Fell English","Crimson Pro",serif;font-size:clamp(2rem,8vw,2.8rem);line-height:1}
.lr-skey{font-size:.85rem;color:#6b5320}
.lr-soundcard--mini{padding:1rem 1rem 1.1rem;margin-bottom:1.25rem;box-shadow:0 6px 18px rgba(0,0,0,.3)}
.lr-soundcard--mini .lr-soundhead{margin:0 0 .8rem;font-size:.95rem}
.lr-soundcard--mini .lr-soundgrid{grid-template-columns:repeat(auto-fill,minmax(3.4rem,1fr));gap:.5rem}
.lr-soundcard--mini .lr-stile{border-radius:.6rem;border-width:1.5px;box-shadow:0 2px 6px rgba(0,0,0,.2);gap:.15rem}
.lr-soundcard--mini .lr-sglyph{font-size:1.6rem}
.lr-soundcard--mini .lr-skey{font-size:.62rem}
.lr-readlabel{text-align:center;font-family:"Cinzel",serif;color:var(--g);font-size:.8rem;letter-spacing:.04em;margin:0 0 .6rem}

/* shuffle / mix controls */
.lr-soundtop{display:flex;align-items:center;justify-content:space-between;gap:.75rem;flex-wrap:wrap;margin-bottom:.4rem}
.lr-soundtop .lr-soundhead{margin:0;text-align:left;flex:1 1 auto}
.lr-readrow{display:flex;align-items:center;justify-content:center;gap:.75rem;flex-wrap:wrap;margin:0 0 .6rem}
.lr-readrow .lr-readlabel{margin:0}
.lr-shuf{
  flex:0 0 auto;font-family:"Cinzel",serif;font-size:.72rem;letter-spacing:.03em;cursor:pointer;
  color:var(--bg);background:var(--g2);border:none;border-radius:.5rem;padding:.4rem .7rem;white-space:nowrap;
}
.lr-shuf:hover{background:var(--g)}
.lr-shuf:focus-visible{outline:2px solid var(--g2);outline-offset:2px}
.lr-soundcard--mini .lr-shuf{font-size:.66rem;padding:.3rem .55rem}

@media (prefers-reduced-motion:reduce){
  .lr-sound,.lr-arrow,.lr-stile{transition:none}
}
`;
