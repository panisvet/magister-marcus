// ─────────────────────────────────────────────────────────────────────────────
// src/pages/MagisterHistoria.jsx
// Lesson Viewer for Magister Historia — Units 1 & 2
// Route: /history
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { HISTORIA_UNITS, NOTEBOOKING_PAGES } from "../data/historia.js";

export default function MagisterHistoria() {
  const [tab, setTab] = useState("lessons");        // "lessons" | "notebooking"
  const [selectedId, setSelectedId] = useState("1.1");
  const [form, setForm] = useState("both");
  const [collapsed, setCollapsed] = useState({});
  const [nbUnit, setNbUnit] = useState("u1");       // notebooking unit filter

  const found = useMemo(() => {
    for (const u of HISTORIA_UNITS) {
      for (const l of u.lessons) if (l.id === selectedId) return { unit: u, lesson: l };
    }
    return null;
  }, [selectedId]);

  function toggleUnit(uid) {
    setCollapsed((prev) => ({ ...prev, [uid]: !prev[uid] }));
  }

  const typeClass = (t) => "mh-type-" + (t || "").replace(/[^A-Z]/g, "");

  const nbPages = NOTEBOOKING_PAGES.filter((p) => p.unit === nbUnit);

  return (
    <div className={`mh-app mh-show-${form}`}>
      <style>{MH_STYLES}</style>

      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header className="mh-topbar">
        <div className="mh-brand">
          <Link to="/" className="mh-brand-mark">SCHOLA · DOMESTICA</Link>
          <div>
            <span className="mh-brand-title">Magister Historia</span>
            <span className="mh-brand-sub">— American History & Civics</span>
          </div>
        </div>
        <div className="mh-controls">
          <div className="mh-tab-toggle">
            <button className={tab === "lessons" ? "mh-active" : ""} onClick={() => setTab("lessons")}>LESSONS</button>
            <button className={tab === "notebooking" ? "mh-active" : ""} onClick={() => setTab("notebooking")}>NOTEBOOK</button>
          </div>
          {tab === "lessons" && (
            <div className="mh-form-toggle">
              {[{ key: "both", label: "BOTH" }, { key: "IA", label: "FORM IA" }, { key: "IIA", label: "FORM IIA" }].map(({ key, label }) => (
                <button key={key} className={form === key ? "mh-active" : ""} onClick={() => setForm(key)}>{label}</button>
              ))}
            </div>
          )}
          <button className="mh-btn" onClick={() => window.print()}>PRINT</button>
        </div>
      </header>

      {/* ── Lessons view ─────────────────────────────────────────────── */}
      {tab === "lessons" && (
        <div className="mh-body">
          <aside className="mh-sidebar">
            {HISTORIA_UNITS.map((u) => (
              <div key={u.id} className={`mh-unit ${collapsed[u.id] ? "mh-collapsed" : ""}`}>
                <div className="mh-unit-head" onClick={() => toggleUnit(u.id)}>
                  <span className="mh-unit-icon">{u.icon}</span>
                  <div className="mh-unit-text">
                    <div className="mh-unit-title">{u.title}</div>
                    <div className="mh-unit-sub">{u.subtitle}</div>
                  </div>
                  <span className="mh-chev">▼</span>
                </div>
                <ul className="mh-lesson-list">
                  {u.lessons.map((l) => (
                    <li key={l.id} className={`mh-lesson-item ${selectedId === l.id ? "mh-active" : ""}`} onClick={() => setSelectedId(l.id)}>
                      <span className="mh-lesson-id">{l.id}</span>
                      <span className="mh-lesson-title">
                        {l.title}
                        <span className={`mh-lesson-type ${typeClass(l.type)}`}>{l.type}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <main className="mh-main">
            {!found && (
              <div className="mh-empty">
                <div className="mh-quill">✦</div>
                <h2>Choose a lesson</h2>
                <p>Pick a lesson on the left. Both students hear the same stories — differentiation lives at the narration step.</p>
              </div>
            )}
            {found && <Lesson unit={found.unit} l={found.lesson} form={form} typeClass={typeClass} />}
          </main>
        </div>
      )}

      {/* ── Notebooking view ─────────────────────────────────────────── */}
      {tab === "notebooking" && (
        <div className="mh-nb-view">
          <div className="mh-nb-topbar">
            <div className="mh-nb-unit-toggle">
              {HISTORIA_UNITS.map((u) => (
                <button key={u.id} className={nbUnit === u.id ? "mh-active" : ""} onClick={() => setNbUnit(u.id)}>
                  {u.icon} {u.title}
                </button>
              ))}
            </div>
            <div className="mh-form-toggle">
              {[{ key: "both", label: "BOTH" }, { key: "IA", label: "FORM IA" }, { key: "IIA", label: "FORM IIA" }].map(({ key, label }) => (
                <button key={key} className={form === key ? "mh-active" : ""} onClick={() => setForm(key)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="mh-nb-grid">
            {nbPages.map((p) => (
              <div key={p.id} className="mh-nb-card">
                <div className="mh-nb-img-wrap">
                  <img src={`/images/notebooking/${p.file}`} alt={p.title} className="mh-nb-img" />
                </div>
                <div className="mh-nb-body">
                  <div className="mh-nb-title">{p.title}</div>
                  {(form === "both" || form === "IA") && (
                    <div className="mh-age-block mh-age-ia">
                      <div className="mh-age-label">Form IA — Oral</div>
                      <div>{p.narrationIA}</div>
                    </div>
                  )}
                  {(form === "both" || form === "IIA") && (
                    <div className="mh-age-block mh-age-iia">
                      <div className="mh-age-label">Form IIA — Written</div>
                      <div>{p.narrationIIA}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Lesson component
// ─────────────────────────────────────────────────────────────────────────────
function Lesson({ unit, l, form, typeClass }) {
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [vocabOpen, setVocabOpen] = useState(false);
  const [discussOpen, setDiscussOpen] = useState(false);

  return (
    <article className="mh-lesson">
      <div className="mh-lesson-meta">
        <span>{unit.icon} {unit.title}</span>
        <span className="mh-dot">·</span>
        <span>WEEK {l.week}</span>
        <span className="mh-dot">·</span>
        <span>LESSON {l.id}</span>
        <span className="mh-dot">·</span>
        <span className={`mh-lesson-type ${typeClass(l.type)}`}>{l.type}</span>
      </div>

      <h1>{l.title}</h1>
      <div className="mh-dates">{l.dates}</div>
      {l.tagline && <div className="mh-tagline">{l.tagline}</div>}

      {l.objective && (
        <div className="mh-objective">
          <div className="mh-label">Lesson Objective</div>
          <div>{l.objective}</div>
        </div>
      )}

      {l.teacherPrep && (
        <div className="mh-teacher-prep">
          <div className="mh-label">Teacher Prep</div>
          <div>{l.teacherPrep}</div>
        </div>
      )}

      {l.opening && (
        <>
          <h2>Opening</h2>
          <div className="mh-opening">{l.opening}</div>
        </>
      )}

      {l.storiesForHeart && l.storiesForHeart.length > 0 && (
        <>
          <h2 className="mh-collapsible-head" onClick={() => setStoriesOpen((v) => !v)}>
            Stories for the Heart
            <span className={`mh-toggle-icon ${storiesOpen ? "mh-open" : ""}`}>▼</span>
          </h2>
          {storiesOpen ? (
            <ol className="mh-stories-list">{l.storiesForHeart.map((s, i) => <li key={i}>{s}</li>)}</ol>
          ) : (
            <div className="mh-collapsed-hint" onClick={() => setStoriesOpen(true)}>{l.storiesForHeart.length} stories to tell — click to expand</div>
          )}
        </>
      )}

      {l.readAloud && l.readAloud.length > 0 && (
        <>
          <h2>Read Aloud</h2>
          {l.readAloud.map((r, i) => (
            <div key={i} className="mh-spine-block">
              <div className="mh-spine-label">{r.label}</div>
              <div className="mh-spine-title">{r.title}</div>
              {r.pages && <div className="mh-spine-pages">{r.pages}</div>}
              {r.link && <div className="mh-spine-link"><a href={r.link} target="_blank" rel="noopener noreferrer">Open free text ↗</a></div>}
            </div>
          ))}
        </>
      )}

      {l.primarySource && (
        <div className="mh-primary-source">
          <div className="mh-label">Primary Source</div>
          <div className="mh-ps-title">{l.primarySource.title}</div>
          {l.primarySource.link && <a href={l.primarySource.link} target="_blank" rel="noopener noreferrer">Read online ↗</a>}
        </div>
      )}

      <h2>Narration</h2>
      {(form === "both" || form === "IA") && l.narrationIA && (
        <div className="mh-age-block mh-age-ia">
          <div className="mh-age-label">Form IA — Oral (1–3 sentences)</div>
          <div>{l.narrationIA}</div>
        </div>
      )}
      {(form === "both" || form === "IIA") && l.narrationIIA && (
        <div className="mh-age-block mh-age-iia">
          <div className="mh-age-label">Form IIA — Written Paragraph (5–8 sentences)</div>
          <div>{l.narrationIIA}</div>
        </div>
      )}

      {(l.copyworkIA || l.dictationIIA) && <h2>Copywork & Dictation</h2>}
      {(form === "both" || form === "IA") && l.copyworkIA && (
        <div className="mh-age-block mh-age-ia">
          <div className="mh-age-label">Form IA — Copy by hand</div>
          <blockquote className="mh-copywork">{l.copyworkIA}</blockquote>
        </div>
      )}
      {(form === "both" || form === "IIA") && l.dictationIIA && (
        <div className="mh-age-block mh-age-iia">
          <div className="mh-age-label">Form IIA — Dictation (write from memory)</div>
          <blockquote className="mh-copywork">{l.dictationIIA}</blockquote>
        </div>
      )}

      {l.memorize && (
        <div className="mh-memory">
          <div className="mh-label">To Know by Heart</div>
          <pre className="mh-memory-text">{l.memorize}</pre>
        </div>
      )}

      {l.notebooking && (
        <div className="mh-notebooking">
          <div className="mh-label">Notebooking</div>
          <div>{l.notebooking}</div>
        </div>
      )}

      {l.persons && l.persons.length > 0 && (
        <>
          <h2>Persons</h2>
          <div className="mh-pill-row">{l.persons.map((p, i) => <span key={i} className="mh-pill mh-pill-person">{p}</span>)}</div>
        </>
      )}

      {l.geography && l.geography.length > 0 && (
        <>
          <h2>Geography</h2>
          <div className="mh-pill-row">{l.geography.map((g, i) => <span key={i} className="mh-pill mh-pill-geo">{g}</span>)}</div>
        </>
      )}

      {l.vocab && l.vocab.length > 0 && (
        <>
          <h2 className="mh-collapsible-head" onClick={() => setVocabOpen((v) => !v)}>
            Vocabulary
            <span className={`mh-toggle-icon ${vocabOpen ? "mh-open" : ""}`}>▼</span>
          </h2>
          {vocabOpen ? (
            <div className="mh-pill-row">{l.vocab.map((v, i) => <span key={i} className="mh-pill mh-pill-vocab">{v}</span>)}</div>
          ) : (
            <div className="mh-collapsed-hint" onClick={() => setVocabOpen(true)}>{l.vocab.length} terms — click to expand</div>
          )}
        </>
      )}

      {l.discussion && l.discussion.length > 0 && (
        <>
          <h2 className="mh-collapsible-head" onClick={() => setDiscussOpen((v) => !v)}>
            Questions for the American Mind
            <span className={`mh-toggle-icon ${discussOpen ? "mh-open" : ""}`}>▼</span>
          </h2>
          {discussOpen ? (
            <ul className="mh-discussion-list">{l.discussion.map((q, i) => <li key={i}>{q}</li>)}</ul>
          ) : (
            <div className="mh-collapsed-hint" onClick={() => setDiscussOpen(true)}>{l.discussion.length} discussion questions — click to expand</div>
          )}
        </>
      )}

      {l.civicsLinks && l.civicsLinks.length > 0 && (
        <div className="mh-civics">
          <div className="mh-label">U.S. Civics Test Connections</div>
          <ul>{l.civicsLinks.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
      )}

      {l.watchFor && (
        <div className="mh-watchfor">
          <div className="mh-label">Watch For — Teacher Note</div>
          <div>{l.watchFor}</div>
        </div>
      )}
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────
const MH_STYLES = `
.mh-app {
  --mh-bg: #0a0906;
  --mh-bg-2: #13100a;
  --mh-bg-3: #1c1710;
  --mh-parch: #f5e9c8;
  --mh-parch-dim: #d0c49e;
  --mh-parch-mute: #8a7d62;
  --mh-gold: #c08a20;
  --mh-gold-2: #e4b040;
  --mh-rule: #332b1f;
  --mh-rule-strong: #504232;
  --mh-blue: #5e7aa0;
  --mh-red: #a05048;
  --mh-green: #5a8c58;
  --mh-ia: #b87830;
  --mh-iia: #6880a8;

  position: fixed; inset: 0;
  display: grid; grid-template-rows: auto 1fr;
  background: var(--mh-bg); color: var(--mh-parch);
  font-family: "Crimson Pro", "EB Garamond", Georgia, serif;
  font-size: 17px; line-height: 1.55; z-index: 1;
}
.mh-app *, .mh-app *::before, .mh-app *::after { box-sizing: border-box; }
.mh-app a { color: var(--mh-gold-2); text-decoration: none; border-bottom: 1px dotted var(--mh-gold); }
.mh-app a:hover { color: var(--mh-parch); border-bottom-color: var(--mh-parch); }

.mh-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 28px; border-bottom: 1px solid var(--mh-rule); background: var(--mh-bg-2);
}
.mh-brand { display: flex; align-items: center; gap: 14px; }
.mh-brand-mark {
  font-family: "Cinzel", serif; font-size: 12px; letter-spacing: 0.18em;
  color: var(--mh-gold); border: 1px solid var(--mh-gold); padding: 4px 10px; border-radius: 2px;
  text-decoration: none; border-bottom: none;
}
.mh-brand-mark:hover { background: rgba(192,138,32,0.1); }
.mh-brand-title { font-family: "Cinzel", serif; font-size: 18px; font-weight: 600; color: var(--mh-parch); letter-spacing: 0.04em; }
.mh-brand-sub { font-family: "IM Fell English", serif; font-style: italic; color: var(--mh-parch-dim); font-size: 14px; margin-left: 6px; }
.mh-controls { display: flex; align-items: center; gap: 12px; }

.mh-tab-toggle, .mh-form-toggle {
  display: inline-flex; border: 1px solid var(--mh-rule-strong); border-radius: 4px; overflow: hidden;
}
.mh-tab-toggle button, .mh-form-toggle button {
  background: transparent; color: var(--mh-parch-dim); border: none;
  border-right: 1px solid var(--mh-rule-strong);
  padding: 7px 14px; font-family: "Cinzel", serif; font-size: 11px; letter-spacing: 0.12em; cursor: pointer; transition: all 0.15s ease;
}
.mh-tab-toggle button:last-child, .mh-form-toggle button:last-child { border-right: none; }
.mh-tab-toggle button:hover, .mh-form-toggle button:hover { background: var(--mh-bg-3); color: var(--mh-parch); }
.mh-tab-toggle button.mh-active, .mh-form-toggle button.mh-active { background: var(--mh-gold); color: var(--mh-bg); }

.mh-btn {
  background: transparent; color: var(--mh-parch-dim); border: 1px solid var(--mh-rule-strong); border-radius: 4px;
  padding: 7px 14px; font-family: "Cinzel", serif; font-size: 11px; letter-spacing: 0.12em; cursor: pointer; transition: all 0.15s ease;
}
.mh-btn:hover { background: var(--mh-bg-3); color: var(--mh-parch); border-color: var(--mh-gold); }

/* ── Lessons layout ── */
.mh-body { display: grid; grid-template-columns: 300px 1fr; min-height: 0; }

.mh-sidebar { background: var(--mh-bg-2); border-right: 1px solid var(--mh-rule); overflow-y: auto; padding: 10px 0 30px; }
.mh-sidebar::-webkit-scrollbar { width: 8px; }
.mh-sidebar::-webkit-scrollbar-track { background: var(--mh-bg-2); }
.mh-sidebar::-webkit-scrollbar-thumb { background: var(--mh-rule-strong); border-radius: 4px; }

.mh-unit-head { display: flex; align-items: center; gap: 10px; padding: 14px 20px 8px; cursor: pointer; user-select: none; border-top: 1px solid var(--mh-rule); }
.mh-unit:first-child .mh-unit-head { border-top: none; }
.mh-unit-icon { font-size: 22px; line-height: 1; }
.mh-unit-text { flex: 1; }
.mh-unit-title { font-family: "Cinzel", serif; font-size: 13px; color: var(--mh-gold-2); letter-spacing: 0.06em; }
.mh-unit-sub { font-family: "IM Fell English", serif; font-style: italic; font-size: 12px; color: var(--mh-parch-mute); margin-top: 2px; }
.mh-chev { color: var(--mh-parch-mute); transition: transform 0.2s; font-size: 11px; }
.mh-collapsed .mh-chev { transform: rotate(-90deg); }
.mh-collapsed .mh-lesson-list { display: none; }

.mh-lesson-list { list-style: none; margin: 0; padding: 0 0 8px; }
.mh-lesson-item { display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: baseline; padding: 7px 20px 7px 30px; cursor: pointer; color: var(--mh-parch-dim); font-size: 14px; border-left: 2px solid transparent; }
.mh-lesson-item:hover { background: var(--mh-bg-3); color: var(--mh-parch); }
.mh-lesson-item.mh-active { background: linear-gradient(to right, rgba(192,138,32,0.18), transparent); border-left-color: var(--mh-gold); color: var(--mh-parch); }
.mh-lesson-id { font-family: "Cinzel", serif; font-size: 11px; color: var(--mh-gold); letter-spacing: 0.08em; min-width: 28px; }
.mh-lesson-type { display: inline-block; font-family: "Cinzel", serif; font-size: 9px; letter-spacing: 0.10em; padding: 1px 5px; border-radius: 2px; margin-left: 6px; vertical-align: middle; border: 1px solid; }
.mh-type-OBSERVE { color: #6a9a60; border-color: #6a9a60; }
.mh-type-STORY { color: var(--mh-gold); border-color: var(--mh-gold); }
.mh-type-SEMINAR { color: var(--mh-iia); border-color: var(--mh-iia); }
.mh-type-NARRATE { color: var(--mh-green); border-color: var(--mh-green); }
.mh-type-ASSESS { color: var(--mh-red); border-color: var(--mh-red); }

.mh-main { overflow-y: auto; padding: 0 56px 80px; }
.mh-main::-webkit-scrollbar { width: 10px; }
.mh-main::-webkit-scrollbar-track { background: var(--mh-bg); }
.mh-main::-webkit-scrollbar-thumb { background: var(--mh-rule-strong); border-radius: 5px; }

.mh-lesson { max-width: 780px; margin: 0 auto; padding: 50px 0 40px; }
.mh-lesson-meta { display: flex; gap: 14px; align-items: center; margin-bottom: 14px; color: var(--mh-parch-mute); font-family: "Cinzel", serif; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; }
.mh-lesson-meta .mh-dot { color: var(--mh-rule-strong); }
.mh-lesson h1 { font-family: "Cinzel", serif; font-size: 36px; font-weight: 600; color: var(--mh-parch); margin: 0 0 4px; line-height: 1.15; letter-spacing: 0.02em; }
.mh-dates { font-family: "Cinzel", serif; font-size: 12px; color: var(--mh-gold); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px; }
.mh-tagline { font-family: "IM Fell English", serif; font-style: italic; color: var(--mh-gold-2); font-size: 18px; margin-bottom: 28px; border-bottom: 1px solid var(--mh-rule); padding-bottom: 22px; }
.mh-lesson h2 { font-family: "Cinzel", serif; font-size: 13px; color: var(--mh-gold); letter-spacing: 0.18em; text-transform: uppercase; margin: 36px 0 12px; padding-bottom: 6px; border-bottom: 1px solid var(--mh-rule); }
.mh-label { font-family: "Cinzel", serif; font-size: 10px; color: var(--mh-gold); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; }

.mh-collapsible-head { cursor: pointer; user-select: none; display: flex; align-items: center; justify-content: space-between; }
.mh-collapsible-head:hover { color: var(--mh-gold-2); }
.mh-toggle-icon { font-size: 10px; color: var(--mh-parch-mute); transition: transform 0.2s; margin-left: 8px; }
.mh-toggle-icon.mh-open { transform: rotate(180deg); }
.mh-collapsed-hint { font-family: "IM Fell English", serif; font-style: italic; color: var(--mh-parch-mute); font-size: 14px; margin: 4px 0 20px; cursor: pointer; }

.mh-objective { background: rgba(192,138,32,0.06); border-left: 3px solid var(--mh-gold); padding: 12px 16px; margin: 18px 0; color: var(--mh-parch-dim); font-size: 15px; }
.mh-teacher-prep { background: rgba(192,138,32,0.08); border-left: 3px solid var(--mh-gold); padding: 12px 16px; margin: 18px 0; font-size: 14px; color: var(--mh-parch-dim); }
.mh-opening { font-size: 18px; color: var(--mh-parch); line-height: 1.6; padding-left: 20px; border-left: 3px solid var(--mh-gold); margin-bottom: 26px; }

.mh-stories-list { margin: 8px 0 18px; padding-left: 24px; }
.mh-stories-list li { margin-bottom: 10px; color: var(--mh-parch); line-height: 1.5; }

.mh-spine-block { background: linear-gradient(135deg, var(--mh-bg-2), var(--mh-bg-3)); border: 1px solid var(--mh-gold); border-radius: 4px; padding: 14px 18px; margin: 14px 0; }
.mh-spine-label { font-family: "Cinzel", serif; font-size: 10px; color: var(--mh-gold); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 4px; }
.mh-spine-title { font-family: "IM Fell English", serif; font-size: 17px; color: var(--mh-parch); font-style: italic; line-height: 1.35; }
.mh-spine-pages { font-size: 13px; color: var(--mh-parch-mute); margin-top: 4px; }
.mh-spine-link { margin-top: 6px; font-size: 13px; }

.mh-primary-source { background: rgba(94,122,160,0.08); border: 1px solid rgba(94,122,160,0.4); border-radius: 4px; padding: 14px 18px; margin: 18px 0; }
.mh-primary-source .mh-label { color: var(--mh-blue); }
.mh-ps-title { font-family: "IM Fell English", serif; font-style: italic; font-size: 16px; color: var(--mh-parch); margin-bottom: 6px; }

.mh-age-block { background: var(--mh-bg-2); border-left: 3px solid; padding: 14px 18px; margin: 12px 0; border-radius: 0 3px 3px 0; }
.mh-age-block.mh-age-ia { border-left-color: var(--mh-ia); }
.mh-age-block.mh-age-iia { border-left-color: var(--mh-iia); }
.mh-age-label { font-family: "Cinzel", serif; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 6px; }
.mh-age-block.mh-age-ia .mh-age-label { color: var(--mh-ia); }
.mh-age-block.mh-age-iia .mh-age-label { color: var(--mh-iia); }

.mh-copywork { font-family: "IM Fell English", serif; font-style: italic; font-size: 16px; color: var(--mh-parch); line-height: 1.6; margin: 10px 0 0; padding: 0; border: none; }
.mh-memory { background: rgba(192,138,32,0.06); border: 1px solid rgba(192,138,32,0.3); border-radius: 4px; padding: 16px 20px; margin: 18px 0; }
.mh-memory-text { font-family: "IM Fell English", serif; font-style: italic; font-size: 15px; color: var(--mh-parch); line-height: 1.7; white-space: pre-wrap; margin: 0; }
.mh-notebooking { background: rgba(90,140,88,0.07); border: 1px solid rgba(90,140,88,0.35); border-radius: 4px; padding: 14px 18px; margin: 18px 0; }
.mh-notebooking .mh-label { color: var(--mh-green); }

.mh-pill-row { display: flex; flex-wrap: wrap; gap: 7px; margin: 8px 0 4px; }
.mh-pill { padding: 4px 12px; border-radius: 2px; font-size: 13px; font-family: "IM Fell English", serif; letter-spacing: 0.02em; }
.mh-pill-person { background: rgba(192,138,32,0.08); border: 1px solid rgba(192,138,32,0.35); color: var(--mh-parch-dim); }
.mh-pill-geo { background: rgba(94,122,160,0.08); border: 1px solid rgba(94,122,160,0.35); color: var(--mh-parch-dim); }
.mh-pill-vocab { background: var(--mh-bg-3); border: 1px solid var(--mh-rule-strong); color: var(--mh-parch-mute); }

.mh-discussion-list { margin: 8px 0 18px; padding-left: 22px; }
.mh-discussion-list li { margin-bottom: 9px; color: var(--mh-parch); }

.mh-civics { background: var(--mh-bg-2); border: 1px solid var(--mh-rule); border-radius: 4px; padding: 14px 18px; margin: 18px 0; font-size: 13px; }
.mh-civics ul { margin: 6px 0 0; padding-left: 20px; }
.mh-civics li { color: var(--mh-parch-mute); margin-bottom: 4px; }

.mh-watchfor { background: rgba(160,80,72,0.07); border: 1px solid rgba(160,80,72,0.35); border-radius: 4px; padding: 14px 18px; margin: 18px 0; color: var(--mh-parch-dim); }
.mh-watchfor .mh-label { color: var(--mh-red); }

.mh-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--mh-parch-mute); text-align: center; padding: 40px; }
.mh-quill { font-size: 48px; color: var(--mh-gold); margin-bottom: 18px; opacity: 0.6; }
.mh-empty h2 { color: var(--mh-gold-2); border: none; margin: 0 0 8px; font-family: "Cinzel", serif; font-size: 14px; letter-spacing: 0.18em; text-transform: uppercase; }
.mh-empty p { font-style: italic; color: var(--mh-parch-dim); max-width: 480px; }

/* ── Notebooking view ── */
.mh-nb-view { display: flex; flex-direction: column; min-height: 0; overflow: hidden; }
.mh-nb-topbar { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px; border-bottom: 1px solid var(--mh-rule); background: var(--mh-bg-2); flex-shrink: 0; }
.mh-nb-unit-toggle { display: inline-flex; border: 1px solid var(--mh-rule-strong); border-radius: 4px; overflow: hidden; }
.mh-nb-unit-toggle button { background: transparent; color: var(--mh-parch-dim); border: none; border-right: 1px solid var(--mh-rule-strong); padding: 7px 18px; font-family: "Cinzel", serif; font-size: 11px; letter-spacing: 0.10em; cursor: pointer; transition: all 0.15s; }
.mh-nb-unit-toggle button:last-child { border-right: none; }
.mh-nb-unit-toggle button:hover { background: var(--mh-bg-3); color: var(--mh-parch); }
.mh-nb-unit-toggle button.mh-active { background: var(--mh-gold); color: var(--mh-bg); }

.mh-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; padding: 28px 32px; overflow-y: auto; }
.mh-nb-grid::-webkit-scrollbar { width: 10px; }
.mh-nb-grid::-webkit-scrollbar-track { background: var(--mh-bg); }
.mh-nb-grid::-webkit-scrollbar-thumb { background: var(--mh-rule-strong); border-radius: 5px; }

.mh-nb-card { background: var(--mh-bg-2); border: 1px solid var(--mh-rule-strong); border-radius: 4px; overflow: hidden; display: flex; flex-direction: column; }
.mh-nb-img-wrap { background: #0a0804; display: flex; align-items: center; justify-content: center; height: 220px; overflow: hidden; border-bottom: 1px solid var(--mh-rule); }
.mh-nb-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.3s ease; }
.mh-nb-card:hover .mh-nb-img { transform: scale(1.02); }
.mh-nb-body { padding: 16px 18px 20px; flex: 1; }
.mh-nb-title { font-family: "Cinzel", serif; font-size: 12px; color: var(--mh-gold-2); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; line-height: 1.4; }

/* ── Print ── */
@media print {
  .mh-app { position: static; background: white; color: black; display: block; height: auto; }
  .mh-topbar, .mh-sidebar, .mh-form-toggle, .mh-tab-toggle, .mh-btn, .mh-nb-topbar { display: none !important; }
  .mh-body { display: block; }
  .mh-main { overflow: visible; padding: 0; }
  .mh-lesson { padding: 0; max-width: 100%; }
  .mh-lesson h1, .mh-lesson h2 { color: #1a1a1a; }
  .mh-lesson h2 { border-bottom: 1.5px solid #7a5c1e; color: #7a5c1e; }
  .mh-tagline { color: #555; border-bottom-color: #ccc; }
  .mh-opening { border-left-color: #7a5c1e; color: #1a1a1a; }
  .mh-spine-block { background: #f8f4ea; border: 1px solid #7a5c1e; }
  .mh-spine-title, .mh-ps-title { color: #1a1a1a; }
  .mh-age-block { background: #fafafa; color: #1a1a1a; }
  .mh-copywork { color: #1a1a1a; }
  .mh-memory, .mh-notebooking, .mh-objective, .mh-teacher-prep { background: #f8f4ea; color: #1a1a1a; }
  .mh-memory-text { color: #1a1a1a; }
  .mh-pill { background: white; color: #333; border-color: #999; }
  .mh-civics, .mh-watchfor { background: #f8f4ea; color: #1a1a1a; }
  .mh-civics li { color: #333; }
  .mh-app a { color: #7a5c1e; }
  .mh-collapsed-hint { display: none; }
  .mh-stories-list, .mh-discussion-list { display: block !important; }
  .mh-nb-grid { grid-template-columns: 1fr 1fr; gap: 16px; padding: 0; overflow: visible; }
  .mh-nb-img-wrap { height: 160px; }
  @page { margin: 0.7in; }
}

@media (max-width: 700px) {
  .mh-body { grid-template-columns: 1fr; }
  .mh-sidebar { display: none; }
  .mh-nb-grid { grid-template-columns: 1fr; padding: 16px; }
  .mh-brand-sub { display: none; }
}
`;
