// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ScholaCantorum.jsx
//
// Lesson Viewer for Schola Cantorum Domestica — Sacred Music & Solfège.
// Reads UNITS from src/data/schola-cantorum.js
//
// Route: /schola-cantorum
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { UNITS } from "../data/schola-cantorum.js";

export default function ScholaCantorum() {
  const [selectedId, setSelectedId] = useState(UNITS[0]?.lessons[0]?.id ?? null);
  const [form, setForm] = useState("both");
  const [collapsed, setCollapsed] = useState({});

  const found = useMemo(() => {
    for (const u of UNITS) {
      for (const l of u.lessons) if (l.id === selectedId) return { unit: u, lesson: l };
    }
    return null;
  }, [selectedId]);

  function toggleUnit(uid) {
    setCollapsed((prev) => ({ ...prev, [uid]: !prev[uid] }));
  }

  const typeClass = (t) => "sc-type-" + (t || "").replace(/[^A-Z]/g, "");

  return (
    <div className={`sc-app sc-show-${form}`}>
      <style>{SC_STYLES}</style>

      {/* ── Top bar ─────────────────────────────────────────────────── */}
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
              >
                {label}
              </button>
            ))}
          </div>
          <button className="sc-btn" onClick={() => window.print()}>PRINT</button>
        </div>
      </header>

      {/* ── Body: sidebar + main ───────────────────────────────────── */}
      <div className="sc-body">

        <aside className="sc-sidebar">
          {UNITS.map((u) => (
            <div
              key={u.id}
              className={`sc-unit ${collapsed[u.id] ? "sc-collapsed" : ""}`}
            >
              <div className="sc-unit-head" onClick={() => toggleUnit(u.id)}>
                <span className="sc-unit-icon">{u.icon}</span>
                <div className="sc-unit-text">
                  <div className="sc-unit-title">{u.title}</div>
                  <div className="sc-unit-sub">{u.subtitle}</div>
                </div>
                <span className="sc-chev">▼</span>
              </div>
              <ul className="sc-lesson-list">
                {u.lessons.map((l) => (
                  <li
                    key={l.id}
                    className={`sc-lesson-item ${selectedId === l.id ? "sc-active" : ""}`}
                    onClick={() => setSelectedId(l.id)}
                  >
                    <span className="sc-lesson-id">{l.id}</span>
                    <span className="sc-lesson-title">
                      {l.title}
                      <span className={`sc-lesson-type ${typeClass(l.type)}`}>{l.type}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="sc-main">
          {!found && (
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
          {found && <Lesson unit={found.unit} l={found.lesson} typeClass={typeClass} />}
        </main>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Lesson — renders one lesson
// ─────────────────────────────────────────────────────────────────────────────
function Lesson({ unit, l, typeClass }) {
  return (
    <article className="sc-lesson">

      <div className="sc-lesson-meta">
        <span>{unit.icon} {unit.title}</span>
        <span className="sc-dot">·</span>
        <span>WEEK {l.week}</span>
        <span className="sc-dot">·</span>
        <span>SESSION {l.id}</span>
        <span className="sc-dot">·</span>
        <span className={`sc-lesson-type ${typeClass(l.type)}`}>{l.type}</span>
      </div>

      <h1>{l.title}</h1>
      {l.tagline ? (
        <div className="sc-tagline">{l.tagline}</div>
      ) : (
        <div style={{ height: 14 }} />
      )}

      {l.teacherPrep && (
        <div className="sc-teacher-prep">
          <div className="sc-label">Teacher Prep</div>
          <div>{l.teacherPrep}</div>
        </div>
      )}

      {l.opening && (
        <>
          <h2>Opening Ritual</h2>
          <div className="sc-opening">{l.opening}</div>
        </>
      )}

      {l.story && (
        <>
          <h2>{l.storyLabel || "Story"}</h2>
          <div className="sc-story">{l.story}</div>
        </>
      )}

      {l.drill && (
        <>
          <h2>{l.drillLabel || "Solfège Drill"}</h2>
          <div className="sc-activity">
            <div className="sc-activity-text">{l.drill}</div>
          </div>
        </>
      )}

      {l.sacredMusic && (
        <>
          <h2>Sacred Music Listening</h2>
          <div className="sc-sacred-block">
            <div className="sc-sacred-label">YouTube Search</div>
            <div className="sc-sacred-query">"{l.sacredMusic}"</div>
            {l.sacredPrompt && (
              <div className="sc-sacred-prompt">{l.sacredPrompt}</div>
            )}
          </div>
        </>
      )}

      {(l.narrationI || l.narrationII) && <h2>Narration</h2>}
      {l.narrationI && (
        <div className="sc-form-block sc-form-I">
          <div className="sc-form-label">Form I A</div>
          <div>{l.narrationI}</div>
        </div>
      )}
      {l.narrationII && (
        <div className="sc-form-block sc-form-II">
          <div className="sc-form-label">Form II A</div>
          <div>{l.narrationII}</div>
        </div>
      )}

      {(l.journalI || l.journalII) && <h2>Music Journal</h2>}
      {l.journalI && (
        <div className="sc-form-block sc-form-I">
          <div className="sc-form-label">Form I A</div>
          <div>{l.journalI}</div>
        </div>
      )}
      {l.journalII && (
        <div className="sc-form-block sc-form-II">
          <div className="sc-form-label">Form II A</div>
          <div>{l.journalII}</div>
        </div>
      )}

      {l.closing && (
        <>
          <h2>Closing Ritual</h2>
          <div className="sc-closing">{l.closing}</div>
        </>
      )}

      {l.vocab && l.vocab.length > 0 && (
        <>
          <h2>Vocabulary</h2>
          <div className="sc-vocab-list">
            {l.vocab.map((v, i) => (
              <span key={i} className="sc-vocab-pill">{v}</span>
            ))}
          </div>
        </>
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
// Styles — scoped to .sc-app
// ─────────────────────────────────────────────────────────────────────────────
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
.sc-form-toggle {
  display: inline-flex;
  border: 1px solid var(--sc-rule-strong);
  border-radius: 4px; overflow: hidden;
}
.sc-form-toggle button {
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
.sc-form-toggle button:last-child { border-right: none; }
.sc-form-toggle button:hover { background: var(--sc-bg-3); color: var(--sc-parch); }
.sc-form-toggle button.sc-active { background: var(--sc-gold); color: var(--sc-bg); }

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

.sc-unit-head {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 20px 8px;
  cursor: pointer; user-select: none;
  border-top: 1px solid var(--sc-rule);
}
.sc-unit:first-child .sc-unit-head { border-top: none; }
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
.sc-lesson-type {
  display: inline-block;
  font-family: "Cinzel", serif;
  font-size: 9px; letter-spacing: 0.10em;
  padding: 1px 5px; border-radius: 2px;
  margin-left: 6px;
  vertical-align: middle;
  border: 1px solid;
}
.sc-type-SING   { color: var(--sc-sing);   border-color: var(--sc-sing); }
.sc-type-LISTEN { color: var(--sc-listen); border-color: var(--sc-listen); }
.sc-type-DRILL  { color: var(--sc-drill);  border-color: var(--sc-drill); }
.sc-type-REVIEW { color: var(--sc-gold);   border-color: var(--sc-gold); }
.sc-type-FEAST  { color: var(--sc-gold-2); border-color: var(--sc-gold-2); }

.sc-main { overflow-y: auto; padding: 0 56px 80px; }
.sc-main::-webkit-scrollbar { width: 10px; }
.sc-main::-webkit-scrollbar-track { background: var(--sc-bg); }
.sc-main::-webkit-scrollbar-thumb { background: var(--sc-rule-strong); border-radius: 5px; }

.sc-lesson { max-width: 780px; margin: 0 auto; padding: 50px 0 40px; }
.sc-lesson-meta {
  display: flex; gap: 14px; align-items: center;
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
.sc-tagline {
  font-family: "IM Fell English", serif;
  font-style: italic;
  color: var(--sc-gold-2);
  font-size: 18px; margin-bottom: 28px;
  border-bottom: 1px solid var(--sc-rule);
  padding-bottom: 22px;
}

.sc-opening {
  font-size: 18px; color: var(--sc-parch); line-height: 1.6;
  padding-left: 20px; border-left: 3px solid var(--sc-gold);
  margin-bottom: 26px;
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
.sc-activity-text { color: var(--sc-parch); white-space: pre-wrap; }

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
  margin-bottom: 6px;
}
.sc-sacred-query {
  font-family: "IM Fell English", serif;
  font-size: 17px; color: var(--sc-parch);
  font-style: italic; line-height: 1.35;
  margin-bottom: 8px;
}
.sc-sacred-prompt {
  font-size: 14px; color: var(--sc-parch-dim);
  margin-top: 8px;
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
}

.sc-vocab-list { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0; }
.sc-vocab-pill {
  background: var(--sc-bg-3);
  border: 1px solid var(--sc-rule-strong);
  color: var(--sc-parch-dim);
  padding: 4px 12px; border-radius: 2px;
  font-family: "IM Fell English", serif;
  font-size: 14px; letter-spacing: 0.02em;
}

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

.sc-empty {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  height: 100%;
  color: var(--sc-parch-mute);
  text-align: center; padding: 40px;
}
.sc-clef {
  font-size: 64px;
  color: var(--sc-gold);
  margin-bottom: 18px; opacity: 0.5;
  line-height: 1;
}
.sc-empty h2 {
  color: var(--sc-gold-2);
  border: none; margin: 0 0 8px;
  font-family: "Cinzel", serif;
  font-size: 14px; letter-spacing: 0.18em;
  text-transform: uppercase;
}
.sc-empty p {
  font-style: italic;
  color: var(--sc-parch-dim);
  max-width: 480px;
}

@media print {
  .sc-app {
    position: static;
    background: white; color: black;
    display: block; height: auto;
  }
  .sc-topbar, .sc-sidebar, .sc-form-toggle, .sc-btn { display: none !important; }
  .sc-body { display: block; }
  .sc-main { overflow: visible; padding: 0; }
  .sc-lesson { padding: 0; max-width: 100%; }
  .sc-lesson h1, .sc-lesson h2 { color: #1a1a1a; }
  .sc-lesson h2 { border-bottom: 1.5px solid #8b6914; color: #8b6914; }
  .sc-tagline { color: #555; border-bottom-color: #ccc; }
  .sc-opening { border-left-color: #8b6914; color: #1a1a1a; }
  .sc-story { background: #f5f1e6; border-color: #ccc; color: #1a1a1a; }
  .sc-sacred-block, .sc-activity, .sc-form-block { background: #fafafa; border-color: #ccc; color: #1a1a1a; }
  .sc-watchfor, .sc-adapt, .sc-teacher-prep { background: #f5f1e6; color: #1a1a1a; }
  .sc-vocab-pill { background: white; border-color: #888; color: #1a1a1a; }
  @page { margin: 0.7in; }
}
`;
