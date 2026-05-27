// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ScholaCantorum.jsx
//
// Lesson Viewer for Schola Cantorum Domestica — Sacred Music & Solfège.
// Reads YEARS / ALL_LESSONS from src/data/schola-cantorum.js (real data shape).
// Reads CLOSING_EXERCISES from src/data/closingExercises.js.
//
// Route: /schola-cantorum
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { YEARS, ALL_LESSONS } from "../data/schola-cantorum.js";
import { CLOSING_EXERCISES } from "../data/closingExercises.js";

// ── Saint icons keyed by unit id (matches the ids in schola-cantorum.js) ────
const UNIT_ICONS = {
  u1:    { src: "/icons/icon-romanos.jpg",       saint: "St. Romanos the Melodist" },
  u2:    { src: "/icons/icon-ambrose.jpg",        saint: "St. Ambrose of Milan" },
  unit3: { src: "/icons/icon-kassiani.jpg",       saint: "St. Kassiani the Hymnographer" },
  unit4: { src: "/icons/icon-john-damascus.jpg",  saint: "St. John of Damascus" },
  unit5: { src: "/icons/icon-akathist.jpg",       saint: "Akathist — Theotokos Enthroned" },
};

// closingExercises.js uses Y1U* keys; schola-cantorum.js uses u1/u2/unit3-5.
const CLOSING_KEY = {
  u1: "Y1U1", u2: "Y1U2", unit3: "Y1U3", unit4: "Y1U4", unit5: "Y1U5",
};

// ── Score PDFs keyed by unit id ─────────────────────────────────────────────
// File names match the slugified copies in public/scores/
const UNIT_SCORES = {
  u1: [
    { label: "C Major Solfège Table",                       file: "/scores/C_Major_solfege_table.pdf" },
    { label: "Pitch Supplement 5.2–1 (Intervals in C Major)", file: "/scores/Pitch_Supplement_5.2-1_-_Intervals_in_C_Major.pdf" },
    { label: "Pitch Supplement 5.2–2 (Intervals in C Major)", file: "/scores/Pitch_Supplement_5.2-2_-_Intervals_in_C_Major.pdf" },
    { label: "Pitch Supplement 5.2–3 (Intervals in C Major)", file: "/scores/Pitch_Supplement_5.2-3_-_Intervals_in_C_Major.pdf" },
  ],
  u2: [
    { label: "C Major Solfège Table",                       file: "/scores/C_Major_solfege_table.pdf" },
    { label: "Pitch Supplement 5.2–4 (Intervals in C Major)", file: "/scores/Pitch_Supplement_5.2-4_-_Intervals_in_C_Major.pdf" },
    { label: "Pitch Supplement 5.2–5 (Intervals in C Major)", file: "/scores/Pitch_Supplement_5.2-5_-_Intervals_in_C_Major.pdf" },
  ],
  unit3: [
    { label: "A Minor Solfège Table",                       file: "/scores/A_minor_solfege_table.pdf" },
    { label: "E Minor Solfège Table",                       file: "/scores/E_minor_solfege_table.pdf" },
    { label: "D Minor Solfège Table",                       file: "/scores/D_minor_solfege_table.pdf" },
  ],
  unit4: [
    { label: "G Major Solfège Table",                       file: "/scores/G_Major_solfege_table.pdf" },
    { label: "F Major Solfège Table",                       file: "/scores/F_Major_solfege_table.pdf" },
    { label: "Pitch Supplement 7.1–1 (F Major, with SOL-FA)", file: "/scores/Pitch_Supplement_7.1_1_-_Intervals_in_F_Major_with_SOL-FA.pdf" },
    { label: "Pitch Supplement 7.1–2 (F Major, no SOL-FA)",   file: "/scores/Pitch_Supplement_7.1_2_Intervals_in_F_Major_no_SOL-FA.pdf" },
  ],
  unit5: [
    { label: "C Major Solfège Table",                       file: "/scores/C_Major_solfege_table.pdf" },
    { label: "G Major Solfège Table",                       file: "/scores/G_Major_solfege_table.pdf" },
    { label: "F Major Solfège Table",                       file: "/scores/F_Major_solfege_table.pdf" },
    { label: "A Minor Solfège Table",                       file: "/scores/A_minor_solfege_table.pdf" },
    { label: "Pitch Supplements 8.1.1–4 (Review)",          file: "/scores/Pitch_Supplements_8.1.1-4.pdf" },
    { label: "Pitch Supplements 9.1.1–4 (Review)",          file: "/scores/Pitch_Supplements_9.1.1_thru_4.pdf" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
export default function ScholaCantorum() {
  const firstId = ALL_LESSONS[0]?.id ?? null;
  const [selectedId, setSelectedId] = useState(firstId);
  const [form, setForm]             = useState("both");      // "both" | "I" | "II"
  const [collapsed, setCollapsed]   = useState({});
  const [activeTab, setActiveTab]   = useState("lesson");    // "lesson" | "scores"
  const [iconModal, setIconModal]   = useState(null);        // iconData object or null

  const lesson = useMemo(
    () => ALL_LESSONS.find(l => l.id === selectedId) || null,
    [selectedId]
  );
  const unit = lesson?._unit ?? null;

  function toggleUnit(uid) {
    setCollapsed(prev => ({ ...prev, [uid]: !prev[uid] }));
  }
  function selectLesson(id) {
    setSelectedId(id);
    setActiveTab("lesson");
  }

  return (
    <div className={`sc-app sc-show-${form}`}>
      <style>{SC_STYLES}</style>

      <header className="sc-topbar">
        <div className="sc-brand">
          <Link to="/" className="sc-brand-mark">SCHOLA · DOMESTICA</Link>
          <div>
            <span className="sc-brand-title">Schola Cantorum Domestica</span>
            <span className="sc-brand-sub">— Sacred Music &amp; Solfège</span>
          </div>
        </div>
        <div className="sc-controls">
          <div className="sc-form-toggle">
            {[
              { key: "both", label: "BOTH" },
              { key: "I",    label: "FORM I A" },
              { key: "II",   label: "FORM II A" },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={form === key ? "sc-active" : ""}
                onClick={() => setForm(key)}
              >{label}</button>
            ))}
          </div>
          <div className="sc-tab-toggle">
            {lesson && (<>
              <button
                className={activeTab === "lesson" ? "sc-active" : ""}
                onClick={() => setActiveTab("lesson")}
              >LESSON</button>
              <button
                className={activeTab === "scores" ? "sc-active" : ""}
                onClick={() => setActiveTab("scores")}
              >SCORES</button>
            </>)}
            <button
              className={activeTab === "nikolay" ? "sc-active sc-nikolay-active" : "sc-nikolay-tab"}
              onClick={() => setActiveTab("nikolay")}
            >&#10013; REGENT</button>
          </div>
          <button
            className="sc-btn"
            onClick={() => {
              if (activeTab === "scores" && unit) {
                const scores = UNIT_SCORES[unit.id];
                if (scores?.[0]) { window.open(scores[0].file, "_blank"); return; }
              }
              window.print();
            }}
          >PRINT</button>
        </div>
      </header>

      <div className="sc-body">

        <aside className="sc-sidebar">
          {YEARS.map(year => (
            <div key={year.id} className="sc-year">
              {YEARS.length > 1 && (
                <div className="sc-year-head">{year.title}</div>
              )}
              {year.units.map(u => {
                const iconData = UNIT_ICONS[u.id];
                return (
                  <div
                    key={u.id}
                    className={`sc-unit ${collapsed[u.id] ? "sc-collapsed" : ""}`}
                  >
                    <div className="sc-unit-head" onClick={() => toggleUnit(u.id)}>
                      {iconData ? (
                        <img
                          src={iconData.src}
                          alt={iconData.saint}
                          className="sc-unit-icon-img"
                          title={`${iconData.saint} — click to enlarge`}
                          onClick={(e) => { e.stopPropagation(); setIconModal(iconData); }}
                        />
                      ) : (
                        <span className="sc-unit-icon">{u.icon}</span>
                      )}
                      <div className="sc-unit-text">
                        <div className="sc-unit-title">{u.title}</div>
                        <div className="sc-unit-sub">{u.subtitle}</div>
                      </div>
                      <span className="sc-chev">▼</span>
                    </div>
                    <ul className="sc-lesson-list">
                      {u.lessons.map(l => (
                        <li
                          key={l.id}
                          className={`sc-lesson-item ${selectedId === l.id ? "sc-active" : ""}`}
                          onClick={() => selectLesson(l.id)}
                        >
                          <span className="sc-lesson-id">{l.id}</span>
                          <span className="sc-lesson-title">
                            {l.title}
                            <span className={`sc-lesson-session sc-session-${l.session}`}>
                              {l.session}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </aside>

        <main className="sc-main">
          {!lesson && (
            <div className="sc-empty">
              <div className="sc-clef">𝄞</div>
              <h2>Choose a lesson</h2>
              <p>
                Pick a unit on the left, then a session. Both students begin together —
                differentiation lives in the Form I A and Form II A sections.
                Use the form toggle to print only what each student needs.
              </p>
            </div>
          )}
          {lesson && activeTab === "lesson" && (
            <Lesson
              unit={unit}
              l={lesson}
              closing={unit ? CLOSING_EXERCISES[CLOSING_KEY[unit.id]] : null}
            />
          )}
          {lesson && activeTab === "scores" && unit && (
            <Scores unit={unit} />
          )}
          {activeTab === "nikolay" && (
            <NikolayChat context={lesson && unit ? { unit, lesson } : null} />
          )}
        </main>

      </div>

      {iconModal && (
        <IconModal iconData={iconModal} onClose={() => setIconModal(null)} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function IconModal({ iconData, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const printIcon = () => {
    const html = document.documentElement;
    html.classList.add("sc-printing-icon");
    const cleanup = () => {
      html.classList.remove("sc-printing-icon");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  };

  return (
    <div className="sc-icon-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="sc-icon-modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={iconData.src}
          alt={iconData.saint}
          className="sc-icon-modal-img"
        />
        <div className="sc-icon-modal-name">{iconData.saint}</div>
        <button className="sc-icon-modal-print-btn" onClick={printIcon}>
          PRINT
        </button>
        <button
          className="sc-icon-modal-close"
          onClick={onClose}
          aria-label="Close"
        >✕</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Lesson({ unit, l, closing }) {
  return (
    <article className="sc-lesson">

      <div className="sc-lesson-meta">
        <span>{unit.title}</span>
        <span className="sc-dot">·</span>
        <span>WEEK {l.week}</span>
        <span className="sc-dot">·</span>
        <span className={`sc-lesson-session sc-session-${l.session}`}>SESSION {l.session}</span>
        {l.duration && <><span className="sc-dot">·</span><span>{l.duration}</span></>}
        {l.ladukhin && <><span className="sc-dot">·</span><span>{l.ladukhin}</span></>}
      </div>

      <h1>{l.title}</h1>
      <div style={{ height: 14 }} />

      {l.materials?.length > 0 && (
        <div className="sc-teacher-prep">
          <div className="sc-label">Materials</div>
          <ul className="sc-materials-list">
            {l.materials.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      )}

      {l.openingRitual && (
        <>
          <h2>Opening Ritual</h2>
          <div className="sc-opening">{l.openingRitual}</div>
        </>
      )}

      {l.story && (
        <>
          <h2>{l.story.title || "Story"}</h2>
          <div className="sc-story">{l.story.text}</div>
        </>
      )}

      {l.drill && (
        <>
          <h2>{l.drill.title || "Solfège Drill"}</h2>
          <div className="sc-activity">
            <ol className="sc-drill-steps">
              {(l.drill.steps || []).map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        </>
      )}

      {(l.formIA || l.formIIA) && <h2>Differentiation</h2>}
      {l.formIA && (
        <div className="sc-form-block sc-form-I">
          <div className="sc-form-label">Form I A</div>
          <div>{l.formIA}</div>
        </div>
      )}
      {l.formIIA && (
        <div className="sc-form-block sc-form-II">
          <div className="sc-form-label">Form II A</div>
          <div>{l.formIIA}</div>
        </div>
      )}

      {l.sacredMusic && (
        <>
          <h2>Sacred Music Listening</h2>
          <div className="sc-sacred-block">
            {l.sacredMusic.label && (
              <div className="sc-sacred-query">{l.sacredMusic.label}</div>
            )}
            {l.sacredMusic.searchTerm && (
              <>
                <div className="sc-sacred-label">YouTube Search</div>
                <a
                  className="sc-sacred-link"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(l.sacredMusic.searchTerm)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >▶ "{l.sacredMusic.searchTerm}"</a>
              </>
            )}
            {l.sacredMusic.listenFor && (
              <div className="sc-sacred-prompt">{l.sacredMusic.listenFor}</div>
            )}
          </div>
        </>
      )}

      {l.journal && (l.journal.formIA || l.journal.formIIA) && <h2>Music Journal</h2>}
      {l.journal?.formIA && (
        <div className="sc-form-block sc-form-I">
          <div className="sc-form-label">Form I A</div>
          <div>{l.journal.formIA}</div>
        </div>
      )}
      {l.journal?.formIIA && (
        <div className="sc-form-block sc-form-II">
          <div className="sc-form-label">Form II A</div>
          <div>{l.journal.formIIA}</div>
        </div>
      )}

      {l.closingRitual && (
        <>
          <h2>Closing Ritual</h2>
          <div className="sc-closing">{l.closingRitual}</div>
        </>
      )}

      {closing && <ClosingExercise exercise={closing} />}

      {l.teacherNotes && (
        <div className="sc-teacher-prep">
          <div className="sc-label">Teacher Notes</div>
          <div>{l.teacherNotes}</div>
        </div>
      )}

      {l.watchFor && (
        <div className="sc-watchfor">
          <div className="sc-label">Watch For</div>
          <div>{l.watchFor}</div>
        </div>
      )}

      {l.shortenIt && (
        <div className="sc-adapt sc-shorten">
          <div className="sc-label">Shorten It</div>
          <div>{l.shortenIt}</div>
        </div>
      )}

      {l.stretchIt && (
        <div className="sc-adapt sc-stretch">
          <div className="sc-label">Stretch It</div>
          <div>{l.stretchIt}</div>
        </div>
      )}

    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ClosingExercise({ exercise }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sc-closing-exercise">
      <div className="sc-closing-exercise-header" onClick={() => setOpen(o => !o)}>
        <div className="sc-closing-exercise-title-row">
          <span className="sc-closing-exercise-badge">3 MIN</span>
          <h2 className="sc-closing-exercise-h2">Closing Exercise — {exercise.title}</h2>
        </div>
        <span className="sc-closing-exercise-chev">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div className="sc-closing-exercise-body">
          <p className="sc-closing-exercise-desc">{exercise.description}</p>
          <ol className="sc-closing-steps">
            {exercise.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
          <div className="sc-form-block sc-form-I">
            <div className="sc-form-label">Form I A</div>
            <div>{exercise.formIA}</div>
          </div>
          <div className="sc-form-block sc-form-II">
            <div className="sc-form-label">Form II A</div>
            <div>{exercise.formIIA}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Scores({ unit }) {
  const scores = UNIT_SCORES[unit.id] || [];
  const [activeScore, setActiveScore] = useState(scores[0]?.file ?? null);
  const iconData = UNIT_ICONS[unit.id];

  if (scores.length === 0) {
    return (
      <div className="sc-scores-empty">
        <div className="sc-clef">𝄞</div>
        <h2>No scores yet for this unit</h2>
        <p>Add PDFs to <code>public/scores/</code> and update <code>UNIT_SCORES</code> in ScholaCantorum.jsx.</p>
      </div>
    );
  }

  return (
    <div className="sc-scores">
      <div className="sc-scores-header">
        {iconData && (
          <div className="sc-scores-saint">
            <img src={iconData.src} alt={iconData.saint} className="sc-scores-saint-img" />
            <div className="sc-scores-saint-name">{iconData.saint}</div>
          </div>
        )}
        <div className="sc-scores-unit-info">
          <div className="sc-scores-unit-title">{unit.title}</div>
          <div className="sc-scores-unit-sub">{unit.subtitle}</div>
          <div className="sc-scores-moveable-note">
            Note: These scores use moveable-do. When using with fixed-do students, tell them:
            "In this sheet, DO means [starting note]. In our system that note is [Sol / Fa / La / etc.]."
            The notation and intervals are correct — only the starting syllable label differs.
          </div>
        </div>
      </div>

      <div className="sc-scores-tabs">
        {scores.map(s => (
          <button
            key={s.file}
            className={`sc-score-tab ${activeScore === s.file ? "sc-active" : ""}`}
            onClick={() => setActiveScore(s.file)}
          >{s.label}</button>
        ))}
      </div>

      {activeScore && (
        <div className="sc-scores-viewer">
          <div className="sc-scores-actions">
            <button
              className="sc-btn"
              onClick={() => window.open(activeScore, "_blank")}
            >OPEN IN NEW TAB</button>
            <button
              className="sc-btn"
              onClick={() => {
                const w = window.open(activeScore, "_blank");
                w?.addEventListener("load", () => w.print());
              }}
            >PRINT THIS SCORE</button>
          </div>
          <iframe
            key={activeScore}
            src={activeScore}
            className="sc-pdf-frame"
            title="Score"
          />
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// NikolayChat
// ─────────────────────────────────────────────────────────────────────────────
const NIKOLAY_SYSTEM = `You are Regent Nikolay Ladukhin, wise, patient, and reverent choir director of the imperial conservatory tradition. You are teaching Schola Cantorum Domestica - the two-year sacred music and solfege course for the Christian home based on my own Ladukhin exercises, Fixed-Do method, Kodaly rhythm, and Charlotte Mason principles.
You have full knowledge of the entire curriculum:
- Year 1: Foundation (Do is Home, Minor, New Keys, First Synthesis)
- Year 2: Chromatics, The Eight Tones (Octoechos), Gregorian Chant, Two Voices, Final Synthesis
When the student asks you to sing, demonstrate, play, show, or teach any Troparion, Stichera, Prokeimenon, or exercise, you MUST:
1. Give a short warm encouraging introduction in character.
2. End your reply with EXACTLY this JSON on its own line and nothing else after it:
{ "sing": "tropar", "tone": 1 }
(where sing is tropar, stichera, or prok, and tone is 1-8)
You are NEVER allowed to say imagine it or describe the melody instead of the JSON.
Stay in character. Tie everything back to prayer and the beauty of the Church song.`;

function parseSingCommand(text) {
  const match = text.match(/\{[\s\S]*?"sing"[\s\S]*?\}/);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[0]);
    if (parsed.sing && parsed.tone) return parsed;
  } catch(e) {}
  return null;
}

function stripSingJson(text) {
  return text.replace(/\{[\s\S]*?"sing"[\s\S]*?\}/, "").trimEnd();
}

function NikolayChat({ context }) {
  const [history, setHistory] = React.useState([{
    role: "assistant",
    content: "Glory to God! Welcome, dear young singers. I am Regent Nikolay. We shall work together in the tradition of the holy Obikhod, using the Fixed-Do method where Do is always C.\n\nChoose a lesson on the left and come to me with any questions.\n\nChrist is in our midst.",
    singCmd: null,
  }]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [apiKey, setApiKey] = React.useState(() => localStorage.getItem("grok_api_key") || "");
  const [showSettings, setShowSettings] = React.useState(!localStorage.getItem("grok_api_key"));
  const chatEndRef = React.useRef(null);

  React.useEffect(() => {
    chatEndRef.current && chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  function saveKey() {
    localStorage.setItem("grok_api_key", apiKey);
    setShowSettings(false);
  }

  async function send(overrideMsg) {
    const msg = overrideMsg || input.trim();
    if (!msg) return;
    if (!apiKey) { setShowSettings(true); return; }
    const contextNote = context
      ? "[Current lesson: " + context.unit.title + " - " + context.lesson.title + " (" + context.lesson.id + ")]"
      : "[No lesson selected]";
    const userContent = contextNote + "\n\n" + msg;
    const newHistory = [...history, { role: "user", content: msg, singCmd: null }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);
    const apiMessages = newHistory.map((m, i) => ({
      role: m.role,
      content: i === newHistory.length - 1 && m.role === "user" ? userContent : m.content,
    }));
    try {
      const resp = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + apiKey },
        body: JSON.stringify({ model: "grok-3-mini", max_tokens: 600, system: NIKOLAY_SYSTEM, messages: apiMessages }),
      });
      if (!resp.ok) { const e = await resp.json().catch(() => ({})); throw new Error(e.error && e.error.message ? e.error.message : "HTTP " + resp.status); }
      const data = await resp.json();
      const raw = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "(No response)";
      const singCmd = parseSingCommand(raw);
      const displayText = singCmd ? stripSingJson(raw) : raw;
      setHistory(function(h) { return [...h, { role: "assistant", content: displayText, singCmd: singCmd }]; });
    } catch(e) {
      setHistory(function(h) { return [...h, { role: "assistant", content: "Connection interrupted. (" + e.message + ") Check your API key in Settings above.", singCmd: null }]; });
    } finally {
      setLoading(false);
    }
  }

  const quickPrompts = context ? [
    "Introduce today\'s lesson: " + context.lesson.title,
    "Sing the Troparion of Tone 1.",
    "Sing the Stichera of Tone 5.",
    "What is the spiritual significance of what we are learning?",
  ] : [
    "Sing the Troparion of Tone 1.",
    "Sing the Troparion of Tone 5.",
    "Tell us about the eight tones of the Octoechos.",
    "What is Fixed-Do solfege?",
  ];

  return (
    <div className="sc-nikolay">
      <div className="sc-nik-settings-bar">
        <button className="sc-nik-settings-toggle" onClick={() => setShowSettings(s => !s)}>
          Settings {showSettings ? "▲" : "▼"}
        </button>
        {!apiKey && <span className="sc-nik-no-key">No API key — enter your xAI key to activate Regent Nikolay</span>}
        {apiKey && !showSettings && <span className="sc-nik-key-ok">✓ API key set</span>}
      </div>
      {showSettings && (
        <div className="sc-nik-settings-panel">
          <label className="sc-nik-settings-label">xAI API Key — get yours at console.x.ai</label>
          <div className="sc-nik-settings-row">
            <input
              type="password"
              className="sc-nik-key-input"
              placeholder="xai-..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              onKeyDown={e => e.key === "Enter" && saveKey()}
            />
            <button className="sc-btn" onClick={saveKey}>SAVE</button>
          </div>
        </div>
      )}
      <div className="sc-nik-chat">
        {history.map((m, i) => (
          <div key={i} className={`sc-nik-bubble sc-nik-${m.role}`}>
            <div className="sc-nik-bubble-label">{m.role === "assistant" ? "Regent Nikolay" : "You"}</div>
            <div className="sc-nik-bubble-text">
              {m.content.split("\n").map((line, j, arr) => (
                <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
              ))}
            </div>
            {m.singCmd && (
              <button className="sc-nik-play-btn" onClick={() => console.log("Play:", m.singCmd)}>
                ▶ Play Tone {m.singCmd.tone} {m.singCmd.sing === "tropar" ? "Troparion" : m.singCmd.sing === "stichera" ? "Stichera" : "Prokeimenon"}
              </button>
            )}
          </div>
        ))}
        {loading && (
          <div className="sc-nik-bubble sc-nik-assistant sc-nik-thinking">
            <div className="sc-nik-bubble-label">Regent Nikolay</div>
            <div className="sc-nik-bubble-text sc-nik-dots">
              <span>·</span><span>·</span><span>·</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="sc-nik-quick">
        {quickPrompts.map((p, i) => (
          <button key={i} className="sc-nik-quick-btn" onClick={() => send(p)}>{p}</button>
        ))}
      </div>
      <div className="sc-nik-input-area">
        <textarea
          className="sc-nik-textarea"
          placeholder="Ask Regent Nikolay..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          rows={3}
        />
        <div className="sc-nik-input-row">
          <button className="sc-btn" onClick={() => send()} disabled={loading || !input.trim()}>
            {loading ? "..." : "SEND ✝"}
          </button>
          <button className="sc-nik-clear" onClick={() => setHistory([{
            role: "assistant", content: "Glory to God. What would you ask?", singCmd: null
          }])}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

const SC_STYLES = `
.sc-app {
  --sc-bg: #0e0b07;
  --sc-bg-2: #16110a;
  --sc-bg-3: #1f1810;
  --sc-parch: #f7edcc;
  --sc-parch-dim: #d6c9a3;
  --sc-parch-mute: #8e8167;
  --sc-gold: #c9902a;
  --sc-gold-2: #e8b84b;
  --sc-rule: #3d342a;
  --sc-rule-strong: #5a4d3a;
  --sc-sing: #7691b8;
  --sc-listen: #6ea864;
  --sc-drill: #c97a3f;

  position: fixed;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--sc-bg);
  color: var(--sc-parch);
  font-family: "Crimson Pro", "EB Garamond", Georgia, serif;
  font-size: 17px;
  line-height: 1.55;
  z-index: 1;
}
.sc-app *, .sc-app *::before, .sc-app *::after { box-sizing: border-box; }
.sc-app a { color: var(--sc-gold-2); text-decoration: none; border-bottom: 1px dotted var(--sc-gold); }
.sc-app a:hover { color: var(--sc-parch); border-bottom-color: var(--sc-parch); }

.sc-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 28px;
  border-bottom: 1px solid var(--sc-rule);
  background: var(--sc-bg-2);
}
.sc-brand { display: flex; align-items: center; gap: 14px; }
.sc-brand-mark {
  font-family: "Cinzel", serif;
  font-size: 12px; letter-spacing: 0.18em;
  color: var(--sc-gold);
  border: 1px solid var(--sc-gold);
  padding: 4px 10px; border-radius: 2px;
  text-decoration: none; border-bottom: 1px solid var(--sc-gold);
}
.sc-brand-mark:hover { background: rgba(201,144,42,0.1); }
.sc-brand-title {
  font-family: "Cinzel", serif;
  font-size: 18px; font-weight: 600;
  color: var(--sc-parch); letter-spacing: 0.04em;
}
.sc-brand-sub {
  font-family: "IM Fell English", serif;
  font-style: italic;
  color: var(--sc-parch-dim);
  font-size: 14px; margin-left: 6px;
}
.sc-controls { display: flex; align-items: center; gap: 12px; }
.sc-form-toggle, .sc-tab-toggle {
  display: inline-flex;
  border: 1px solid var(--sc-rule-strong);
  border-radius: 4px; overflow: hidden;
}
.sc-form-toggle button, .sc-tab-toggle button {
  background: transparent;
  color: var(--sc-parch-dim);
  border: none;
  border-right: 1px solid var(--sc-rule-strong);
  padding: 7px 14px;
  font-family: "Cinzel", serif;
  font-size: 11px; letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.15s ease;
}
.sc-form-toggle button:last-child,
.sc-tab-toggle button:last-child { border-right: none; }
.sc-form-toggle button:hover,
.sc-tab-toggle button:hover { background: var(--sc-bg-3); color: var(--sc-parch); }
.sc-form-toggle button.sc-active { background: var(--sc-gold); color: var(--sc-bg); }
.sc-tab-toggle button.sc-active { background: var(--sc-sing); color: var(--sc-bg); }

.sc-btn {
  background: transparent;
  color: var(--sc-parch-dim);
  border: 1px solid var(--sc-rule-strong);
  border-radius: 4px;
  padding: 7px 14px;
  font-family: "Cinzel", serif;
  font-size: 11px; letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.15s ease;
}
.sc-btn:hover { background: var(--sc-bg-3); color: var(--sc-parch); border-color: var(--sc-gold); }

.sc-body { display: grid; grid-template-columns: 320px 1fr; min-height: 0; }

.sc-sidebar {
  background: var(--sc-bg-2);
  border-right: 1px solid var(--sc-rule);
  overflow-y: auto;
  padding: 10px 0 30px;
}
.sc-sidebar::-webkit-scrollbar { width: 8px; }
.sc-sidebar::-webkit-scrollbar-track { background: var(--sc-bg-2); }
.sc-sidebar::-webkit-scrollbar-thumb { background: var(--sc-rule-strong); border-radius: 4px; }

.sc-year-head {
  padding: 16px 20px 6px;
  font-family: "Cinzel", serif;
  font-size: 11px; letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--sc-gold);
}

.sc-unit-head {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 20px 8px;
  cursor: pointer; user-select: none;
  border-top: 1px solid var(--sc-rule);
}
.sc-year:first-child .sc-unit:first-child .sc-unit-head { border-top: none; }
.sc-unit-icon-img {
  width: 36px; height: 36px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid var(--sc-rule-strong);
  flex-shrink: 0;
  cursor: zoom-in;
  transition: border-color 0.15s, transform 0.15s;
}
.sc-unit-icon-img:hover {
  border-color: var(--sc-gold);
  transform: scale(1.06);
}
.sc-unit-icon { font-size: 22px; line-height: 1; }
.sc-unit-text { flex: 1; }
.sc-unit-title {
  font-family: "Cinzel", serif;
  font-size: 13px; color: var(--sc-gold-2);
  letter-spacing: 0.06em;
}
.sc-unit-sub {
  font-family: "IM Fell English", serif;
  font-style: italic; font-size: 12px;
  color: var(--sc-parch-mute); margin-top: 2px;
}
.sc-chev { color: var(--sc-parch-mute); transition: transform 0.2s; font-size: 11px; }
.sc-collapsed .sc-chev { transform: rotate(-90deg); }
.sc-collapsed .sc-lesson-list { display: none; }

.sc-lesson-list { list-style: none; margin: 0; padding: 0 0 8px; }
.sc-lesson-item {
  display: grid; grid-template-columns: auto 1fr;
  gap: 10px; align-items: baseline;
  padding: 6px 20px 6px 30px;
  cursor: pointer;
  color: var(--sc-parch-dim);
  font-size: 14px;
  border-left: 2px solid transparent;
}
.sc-lesson-item:hover { background: var(--sc-bg-3); color: var(--sc-parch); }
.sc-lesson-item.sc-active {
  background: linear-gradient(to right, rgba(201,144,42,0.18), transparent);
  border-left-color: var(--sc-gold);
  color: var(--sc-parch);
}
.sc-lesson-id {
  font-family: "Cinzel", serif;
  font-size: 11px; color: var(--sc-gold);
  letter-spacing: 0.08em; min-width: 28px;
}
.sc-lesson-session {
  display: inline-block;
  font-family: "Cinzel", serif;
  font-size: 9px; letter-spacing: 0.10em;
  padding: 1px 5px; border-radius: 2px;
  margin-left: 6px;
  vertical-align: middle;
  border: 1px solid;
}
.sc-session-A { color: var(--sc-sing);  border-color: var(--sc-sing); }
.sc-session-B { color: var(--sc-drill); border-color: var(--sc-drill); }

.sc-main { overflow-y: auto; padding: 0 56px 80px; }
.sc-main::-webkit-scrollbar { width: 10px; }
.sc-main::-webkit-scrollbar-track { background: var(--sc-bg); }
.sc-main::-webkit-scrollbar-thumb { background: var(--sc-rule-strong); border-radius: 5px; }

.sc-lesson { max-width: 780px; margin: 0 auto; padding: 50px 0 40px; }
.sc-lesson-meta {
  display: flex; gap: 14px; align-items: center; flex-wrap: wrap;
  margin-bottom: 14px;
  color: var(--sc-parch-mute);
  font-family: "Cinzel", serif;
  font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase;
}
.sc-lesson-meta .sc-dot { color: var(--sc-rule-strong); }
.sc-lesson h1 {
  font-family: "Cinzel", serif;
  font-size: 38px; font-weight: 600;
  color: var(--sc-parch);
  margin: 0 0 6px;
  line-height: 1.15; letter-spacing: 0.02em;
}
.sc-lesson h2 {
  font-family: "Cinzel", serif;
  font-size: 14px; color: var(--sc-gold);
  letter-spacing: 0.18em; text-transform: uppercase;
  margin: 36px 0 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--sc-rule);
}
.sc-opening {
  font-size: 18px; color: var(--sc-parch); line-height: 1.6;
  padding-left: 20px; border-left: 3px solid var(--sc-gold);
  margin-bottom: 26px;
  white-space: pre-wrap;
}
.sc-story {
  background: var(--sc-bg-2);
  border: 1px solid var(--sc-rule);
  border-left: 3px solid var(--sc-gold-2);
  border-radius: 0 4px 4px 0;
  padding: 18px 22px; margin: 20px 0;
  color: var(--sc-parch); line-height: 1.7;
  font-family: "IM Fell English", serif;
  font-size: 17px;
  white-space: pre-wrap;
}
.sc-activity {
  background: var(--sc-bg-2);
  border: 1px solid var(--sc-rule);
  border-radius: 4px;
  padding: 18px 22px; margin: 20px 0;
}
.sc-drill-steps {
  margin: 0; padding-left: 22px;
  color: var(--sc-parch); line-height: 1.7;
}
.sc-drill-steps li { margin-bottom: 8px; white-space: pre-wrap; }

.sc-sacred-block {
  background: linear-gradient(135deg, rgba(118,145,184,0.08), rgba(118,145,184,0.03));
  border: 1px solid rgba(118,145,184,0.4);
  border-radius: 4px;
  padding: 16px 20px; margin: 18px 0;
}
.sc-sacred-label {
  font-family: "Cinzel", serif;
  font-size: 10px; color: var(--sc-sing);
  letter-spacing: 0.18em; text-transform: uppercase;
  margin: 10px 0 6px;
}
.sc-sacred-query {
  font-family: "IM Fell English", serif;
  font-size: 17px; color: var(--sc-parch);
  font-style: italic; line-height: 1.4;
}
.sc-sacred-link {
  display: inline-block;
  margin-top: 4px;
  color: var(--sc-sing);
  border-bottom: 1px dotted var(--sc-sing);
  font-family: "Cinzel", serif;
  font-size: 12px; letter-spacing: 0.06em;
}
.sc-sacred-link:hover { color: var(--sc-parch); border-bottom-color: var(--sc-parch); }
.sc-sacred-prompt {
  font-size: 14px; color: var(--sc-parch-dim);
  margin-top: 12px; line-height: 1.6;
}
.sc-teacher-prep {
  background: rgba(201,144,42,0.08);
  border-left: 3px solid var(--sc-gold);
  padding: 12px 16px; margin: 18px 0;
  font-size: 14px; color: var(--sc-parch-dim);
}
.sc-teacher-prep .sc-label {
  font-family: "Cinzel", serif;
  font-size: 10px; color: var(--sc-gold);
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-bottom: 4px;
}
.sc-materials-list { margin: 6px 0 0 18px; padding: 0; }
.sc-materials-list li { margin: 2px 0; }

.sc-form-block {
  background: var(--sc-bg-2);
  border-left: 3px solid;
  padding: 14px 18px; margin: 12px 0;
  border-radius: 0 3px 3px 0;
}
.sc-form-block.sc-form-I  { border-left-color: var(--sc-drill); }
.sc-form-block.sc-form-II { border-left-color: var(--sc-sing); }
.sc-form-label {
  font-family: "Cinzel", serif;
  font-size: 10px; letter-spacing: 0.16em;
  text-transform: uppercase; margin-bottom: 5px;
}
.sc-form-block.sc-form-I  .sc-form-label { color: var(--sc-drill); }
.sc-form-block.sc-form-II .sc-form-label { color: var(--sc-sing); }
.sc-app.sc-show-I  .sc-form-block.sc-form-II { display: none; }
.sc-app.sc-show-II .sc-form-block.sc-form-I  { display: none; }

.sc-closing {
  font-size: 16px; color: var(--sc-parch-dim); line-height: 1.6;
  padding-left: 20px; border-left: 3px solid var(--sc-rule-strong);
  font-style: italic;
  white-space: pre-wrap;
}

.sc-closing-exercise {
  margin: 32px 0 24px;
  border: 1px solid rgba(110,168,100,0.35);
  border-radius: 4px;
  overflow: hidden;
}
.sc-closing-exercise-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 18px;
  background: rgba(110,168,100,0.07);
  cursor: pointer;
  user-select: none;
}
.sc-closing-exercise-header:hover { background: rgba(110,168,100,0.12); }
.sc-closing-exercise-title-row { display: flex; align-items: center; gap: 12px; }
.sc-closing-exercise-badge {
  font-family: "Cinzel", serif;
  font-size: 9px; letter-spacing: 0.16em;
  color: var(--sc-listen);
  border: 1px solid var(--sc-listen);
  padding: 2px 7px; border-radius: 2px;
  flex-shrink: 0;
}
.sc-closing-exercise-h2 {
  font-family: "Cinzel", serif;
  font-size: 13px; color: var(--sc-listen);
  letter-spacing: 0.14em; text-transform: uppercase;
  margin: 0; border: none; padding: 0;
}
.sc-closing-exercise-chev { color: var(--sc-listen); font-size: 10px; }
.sc-closing-exercise-body {
  padding: 18px 20px;
  border-top: 1px solid rgba(110,168,100,0.25);
}
.sc-closing-exercise-desc {
  color: var(--sc-parch-dim);
  font-style: italic;
  margin: 0 0 18px;
  font-size: 15px;
}
.sc-closing-steps {
  margin: 0 0 18px; padding-left: 22px;
  color: var(--sc-parch); line-height: 1.7;
}
.sc-closing-steps li { margin-bottom: 8px; }

.sc-watchfor {
  background: rgba(201,122,63,0.08);
  border: 1px solid rgba(201,122,63,0.4);
  border-radius: 4px;
  padding: 14px 18px; margin: 18px 0;
  color: var(--sc-parch-dim);
}
.sc-watchfor .sc-label {
  font-family: "Cinzel", serif;
  font-size: 10px; color: var(--sc-drill);
  letter-spacing: 0.18em; text-transform: uppercase;
  margin-bottom: 6px;
}
.sc-adapt {
  border-radius: 4px;
  padding: 14px 18px; margin: 10px 0;
  color: var(--sc-parch-dim);
}
.sc-shorten {
  background: rgba(110,168,100,0.06);
  border: 1px solid rgba(110,168,100,0.3);
}
.sc-stretch {
  background: rgba(118,145,184,0.06);
  border: 1px solid rgba(118,145,184,0.3);
}
.sc-adapt .sc-label {
  font-family: "Cinzel", serif;
  font-size: 10px; letter-spacing: 0.18em;
  text-transform: uppercase; margin-bottom: 6px;
}
.sc-shorten .sc-label { color: var(--sc-listen); }
.sc-stretch .sc-label { color: var(--sc-sing); }

.sc-scores {
  max-width: 900px; margin: 0 auto;
  padding: 40px 0 60px;
  display: flex; flex-direction: column; gap: 24px;
}
.sc-scores-header {
  display: flex; gap: 28px; align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--sc-rule);
}
.sc-scores-saint {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  flex-shrink: 0;
}
.sc-scores-saint-img {
  width: 90px; height: 110px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid var(--sc-rule-strong);
  box-shadow: 0 4px 18px rgba(0,0,0,0.5);
}
.sc-scores-saint-name {
  font-family: "IM Fell English", serif;
  font-style: italic;
  font-size: 12px; color: var(--sc-parch-mute);
  text-align: center; max-width: 90px;
}
.sc-scores-unit-info { flex: 1; }
.sc-scores-unit-title {
  font-family: "Cinzel", serif;
  font-size: 26px; font-weight: 600;
  color: var(--sc-parch); letter-spacing: 0.04em;
  margin-bottom: 4px;
}
.sc-scores-unit-sub {
  font-family: "IM Fell English", serif;
  font-style: italic;
  font-size: 16px; color: var(--sc-gold-2);
  margin-bottom: 14px;
}
.sc-scores-moveable-note {
  background: rgba(201,144,42,0.07);
  border-left: 3px solid var(--sc-gold);
  padding: 10px 14px;
  font-size: 13px; color: var(--sc-parch-dim);
  line-height: 1.55;
  border-radius: 0 3px 3px 0;
}
.sc-scores-tabs { display: flex; flex-wrap: wrap; gap: 8px; }
.sc-score-tab {
  background: var(--sc-bg-2);
  color: var(--sc-parch-dim);
  border: 1px solid var(--sc-rule-strong);
  border-radius: 3px;
  padding: 8px 14px;
  font-family: "Cinzel", serif;
  font-size: 11px; letter-spacing: 0.10em;
  cursor: pointer;
  transition: all 0.15s ease;
}
.sc-score-tab:hover { background: var(--sc-bg-3); color: var(--sc-parch); }
.sc-score-tab.sc-active {
  background: var(--sc-gold); color: var(--sc-bg);
  border-color: var(--sc-gold);
}
.sc-scores-actions { display: flex; gap: 10px; margin-bottom: 14px; }
.sc-pdf-frame {
  width: 100%; height: 72vh;
  border: 1px solid var(--sc-rule);
  border-radius: 3px;
  background: #fff;
}
.sc-scores-empty {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  height: 100%;
  color: var(--sc-parch-mute);
  text-align: center; padding: 40px;
}

.sc-empty {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  height: 100%;
  color: var(--sc-parch-mute);
  text-align: center; padding: 40px;
}
.sc-clef {
  font-size: 64px; color: var(--sc-gold);
  margin-bottom: 18px; opacity: 0.5; line-height: 1;
}
.sc-empty h2 {
  color: var(--sc-gold-2); border: none; margin: 0 0 8px;
  font-family: "Cinzel", serif;
  font-size: 14px; letter-spacing: 0.18em; text-transform: uppercase;
}
.sc-empty p {
  font-style: italic; color: var(--sc-parch-dim); max-width: 480px;
}

.sc-icon-modal {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  padding: 32px;
  cursor: pointer;
  backdrop-filter: blur(4px);
}
.sc-icon-modal-content {
  position: relative;
  display: flex; flex-direction: column; align-items: center;
  gap: 18px;
  cursor: default;
  max-width: 100%;
}
.sc-icon-modal-img {
  max-width: min(80vw, 640px);
  max-height: 75vh;
  object-fit: contain;
  border: 2px solid var(--sc-gold);
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  background: var(--sc-bg);
}
.sc-icon-modal-name {
  font-family: "Cinzel", serif;
  font-size: 18px;
  color: var(--sc-gold-2);
  letter-spacing: 0.08em;
  text-align: center;
  padding: 0 12px;
}
.sc-icon-modal-print-btn {
  background: transparent;
  color: var(--sc-parch);
  border: 1px solid var(--sc-gold);
  padding: 8px 22px;
  font-family: "Cinzel", serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.15s;
}
.sc-icon-modal-print-btn:hover {
  background: var(--sc-gold);
  color: var(--sc-bg);
}
.sc-icon-modal-close {
  position: absolute;
  top: -10px; right: -10px;
  background: var(--sc-bg);
  color: var(--sc-parch-mute);
  border: 1px solid var(--sc-rule-strong);
  border-radius: 50%;
  width: 32px; height: 32px;
  font-size: 16px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.sc-icon-modal-close:hover {
  color: var(--sc-parch);
  border-color: var(--sc-gold);
}

@media print {
  .sc-app {
    position: static; background: white; color: black;
    display: block; height: auto;
  }
  .sc-topbar, .sc-sidebar, .sc-form-toggle, .sc-tab-toggle, .sc-btn { display: none !important; }
  .sc-body { display: block; }
  .sc-main { overflow: visible; padding: 0; }
  .sc-lesson { padding: 0; max-width: 100%; }
  .sc-lesson h1, .sc-lesson h2 { color: #1a1a1a; }
  .sc-lesson h2 { border-bottom: 1.5px solid #8b6914; color: #8b6914; }
  .sc-opening { border-left-color: #8b6914; color: #1a1a1a; }
  .sc-story { background: #f5f1e6; border-color: #ccc; color: #1a1a1a; }
  .sc-sacred-block, .sc-activity, .sc-form-block { background: #fafafa; border-color: #ccc; color: #1a1a1a; }
  .sc-watchfor, .sc-adapt, .sc-teacher-prep { background: #f5f1e6; color: #1a1a1a; }
  .sc-closing-exercise { border-color: #888; }
  .sc-closing-exercise-header { background: #f0f7ee; }
  .sc-closing-exercise-h2, .sc-closing-exercise-badge { color: #3a7a30; border-color: #3a7a30; }
  .sc-scores, .sc-pdf-frame { display: none !important; }
  .sc-icon-modal { display: none !important; }
  @page { margin: 0.7in; }

  /* When the modal's own Print button is used, root gets .sc-printing-icon:
     hide the lesson, show only the saint icon + name. */
  html.sc-printing-icon .sc-app > .sc-body,
  html.sc-printing-icon .sc-app > .sc-topbar { display: none !important; }
  html.sc-printing-icon .sc-icon-modal {
    display: flex !important;
    position: static;
    background: white !important;
    backdrop-filter: none;
    padding: 0;
  }
  html.sc-printing-icon .sc-icon-modal-img {
    border: 1px solid #888;
    box-shadow: none;
    background: white;
    max-height: 8in;
    max-width: 6.5in;
  }
  html.sc-printing-icon .sc-icon-modal-name { color: #1a1a1a !important; }
  html.sc-printing-icon .sc-icon-modal-print-btn,
  html.sc-printing-icon .sc-icon-modal-close { display: none !important; }
}
.sc-nikolay-tab { color: var(--sc-parch-dim); }
.sc-nikolay-active { background: var(--sc-gold); color: var(--sc-bg); }
.sc-nikolay { display: flex; flex-direction: column; height: 100%; background: var(--sc-bg-2); }
.sc-nik-settings-bar { flex-shrink:0; display:flex; align-items:center; gap:12px; padding:8px 24px; background:var(--sc-bg-3); border-bottom:1px solid var(--sc-rule); font-size:13px; }
.sc-nik-settings-toggle { background:transparent; border:1px solid var(--sc-rule-strong); border-radius:3px; padding:4px 10px; font-size:11px; letter-spacing:0.10em; color:var(--sc-parch-dim); cursor:pointer; }
.sc-nik-settings-toggle:hover { color:var(--sc-parch); border-color:var(--sc-gold); }
.sc-nik-no-key { color:#c97a3f; font-style:italic; }
.sc-nik-key-ok { color:var(--sc-listen); }
.sc-nik-settings-panel { flex-shrink:0; padding:12px 24px 14px; background:var(--sc-bg-3); border-bottom:1px solid var(--sc-rule); }
.sc-nik-settings-label { display:block; font-size:13px; color:var(--sc-parch-dim); margin-bottom:8px; font-style:italic; }
.sc-nik-settings-row { display:flex; gap:10px; align-items:center; }
.sc-nik-key-input { flex:1; max-width:440px; font-family:monospace; font-size:13px; padding:6px 10px; background:var(--sc-bg); border:1px solid var(--sc-rule-strong); border-radius:3px; color:var(--sc-parch); outline:none; }
.sc-nik-key-input:focus { border-color:var(--sc-gold); }
.sc-nik-chat { flex:1; overflow-y:auto; padding:20px 28px; display:flex; flex-direction:column; gap:16px; }
.sc-nik-bubble { max-width:780px; border-radius:6px; padding:14px 18px; }
.sc-nik-assistant { background:rgba(201,144,42,0.08); border:1px solid rgba(201,144,42,0.2); align-self:flex-start; }
.sc-nik-user { background:rgba(118,145,184,0.10); border:1px solid rgba(118,145,184,0.2); align-self:flex-end; }
.sc-nik-bubble-label { font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:var(--sc-parch-mute); margin-bottom:6px; }
.sc-nik-user .sc-nik-bubble-label { color:var(--sc-sing); }
.sc-nik-bubble-text { font-size:16px; line-height:1.6; color:var(--sc-parch); }
.sc-nik-thinking .sc-nik-dots span { display:inline-block; animation:sc-nik-pulse 1.2s ease-in-out infinite; font-size:22px; color:var(--sc-gold); margin:0 2px; }
.sc-nik-thinking .sc-nik-dots span:nth-child(2) { animation-delay:0.2s; }
.sc-nik-thinking .sc-nik-dots span:nth-child(3) { animation-delay:0.4s; }
@keyframes sc-nik-pulse { 0%,100%{opacity:0.2} 50%{opacity:1} }
.sc-nik-play-btn { display:inline-block; margin-top:10px; background:rgba(201,144,42,0.15); border:1px solid var(--sc-gold); border-radius:4px; padding:6px 14px; font-size:12px; letter-spacing:0.10em; color:var(--sc-gold); cursor:pointer; }
.sc-nik-play-btn:hover { background:var(--sc-gold); color:var(--sc-bg); }
.sc-nik-quick { flex-shrink:0; display:flex; flex-wrap:wrap; gap:8px; padding:10px 24px; border-top:1px solid var(--sc-rule); background:var(--sc-bg-3); }
.sc-nik-quick-btn { background:transparent; border:1px solid var(--sc-rule-strong); border-radius:20px; padding:5px 12px; font-size:13px; color:var(--sc-parch-dim); cursor:pointer; }
.sc-nik-quick-btn:hover { border-color:var(--sc-gold); color:var(--sc-gold); }
.sc-nik-input-area { flex-shrink:0; padding:12px 24px 16px; border-top:1px solid var(--sc-rule); background:var(--sc-bg-3); display:flex; flex-direction:column; gap:8px; }
.sc-nik-textarea { width:100%; resize:vertical; font-size:15px; color:var(--sc-parch); background:var(--sc-bg); border:1px solid var(--sc-rule-strong); border-radius:4px; padding:10px 12px; outline:none; min-height:64px; box-sizing:border-box; }
.sc-nik-textarea:focus { border-color:var(--sc-gold); }
.sc-nik-input-row { display:flex; gap:10px; align-items:center; }
.sc-nik-clear { background:transparent; border:1px solid var(--sc-rule-strong); border-radius:3px; padding:7px 14px; font-size:11px; letter-spacing:0.10em; color:var(--sc-parch-mute); cursor:pointer; }
.sc-nik-clear:hover { border-color:#c97a3f; color:#c97a3f; }

`;
