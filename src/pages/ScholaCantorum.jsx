import { useState, useEffect } from 'react'
import { YEARS, ALL_LESSONS } from '../data/schola-cantorum.js'
import { OPENING_EXERCISES } from '../data/openingExercises.js'
import TopNav from '../components/TopNav.jsx'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=IM+Fell+English:ital@0;1&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}

.sc-root{
  display:flex;flex-direction:column;height:100vh;
  background:#09080a;color:#e8dfc8;
  font-family:'Crimson Pro',Georgia,serif;overflow:hidden;
}
.sc-body{display:flex;flex:1;overflow:hidden;margin-top:40px;}
.sc-sidebar{
  width:210px;flex-shrink:0;background:#100d14;
  border-right:1px solid #2e1f40;
  overflow-y:auto;display:flex;flex-direction:column;
}
.sc-year-hdr{
  padding:9px 12px 5px;font-family:'Cinzel',serif;font-size:9px;
  letter-spacing:.2em;text-transform:uppercase;color:#a070d0;
  border-top:1px solid #1e1428;margin-top:2px;
}
.sc-year-hdr:first-child{border-top:none;margin-top:0;}
.sc-unit-hdr{
  padding:5px 12px 3px 14px;font-family:'Cinzel',serif;font-size:8px;
  letter-spacing:.15em;text-transform:uppercase;color:#7a5a9e;margin-top:1px;
}
.sc-lbtn{
  width:100%;text-align:left;padding:6px 10px 6px 14px;
  background:transparent;border:none;border-left:3px solid transparent;
  color:#7a6a80;cursor:pointer;font-size:13px;
  font-family:'Crimson Pro',Georgia,serif;line-height:1.4;
}
.sc-lbtn:hover{background:#1c1428;color:#c8b8d8;}
.sc-lbtn.on{background:#1c1428;border-left-color:#a070d0;color:#f0e8f8;}
.sc-lbtn .sc-stype{
  font-size:8px;color:#5a3a7e;margin-bottom:1px;
  font-family:'Cinzel',serif;letter-spacing:.1em;text-transform:uppercase;
}
.sc-lbtn.on .sc-stype{color:#9060c0;}
.sc-unit-divider{margin:3px 10px 2px;border:none;border-top:1px solid #1e1428;}
.sc-content{flex:1;overflow-y:auto;display:flex;flex-direction:column;}
.sc-lhdr{padding:14px 22px;border-bottom:2px solid rgba(0,0,0,.4);}
.sc-lhdr .sc-meta{
  font-family:'Cinzel',serif;font-size:9px;letter-spacing:.18em;
  text-transform:uppercase;opacity:.6;margin-bottom:4px;
}
.sc-lhdr h1{font-family:'Cinzel',serif;font-size:18px;font-weight:600;margin-bottom:3px;}
.sc-lhdr .sc-unit-tag{font-style:italic;font-size:12px;opacity:.7;margin-bottom:6px;}
.sc-form-btns{display:flex;gap:4px;margin-top:6px;}
.sc-fbtn{
  padding:3px 11px;border-radius:12px;border:1px solid #2e1f40;
  background:transparent;color:#7a5a9e;cursor:pointer;font-size:11px;
  font-family:'Crimson Pro',Georgia,serif;transition:all .18s;
}
.sc-fbtn.on{background:#a070d0;border-color:#a070d0;color:#fff;}
.sc-ladukhin-bar{
  background:#14101c;border-bottom:1px solid #2e1f40;
  padding:4px 22px;display:flex;align-items:center;gap:8px;min-height:26px;
}
.sc-lbl{font-family:'Cinzel',serif;font-size:7.5px;letter-spacing:.18em;text-transform:uppercase;color:#6a5080;}
.sc-pill{
  background:#0d0a14;border:1px solid #2e1f40;border-radius:2px;
  padding:1px 7px;font-size:10px;color:#9e8cb8;font-style:italic;
}
.sc-dur-pill{
  background:#1a0e28;border:1px solid #3a1f50;border-radius:2px;
  padding:1px 7px;font-size:10px;color:#c8a0e8;
  font-family:'Cinzel',serif;letter-spacing:.06em;
}
.sc-oe-wrap{margin:10px 22px 0;}
.sc-oe-toggle{
  width:100%;display:flex;align-items:center;justify-content:space-between;
  background:#0e0c18;border:1px solid #3a2050;border-radius:3px;
  padding:7px 13px;cursor:pointer;transition:background .15s;
}
.sc-oe-toggle:hover{background:#14102a;}
.sc-oe-toggle-left{display:flex;align-items:center;gap:10px;}
.sc-oe-icon{font-size:13px;}
.sc-oe-title{
  font-family:'Cinzel',serif;font-size:8px;letter-spacing:.18em;
  text-transform:uppercase;color:#c090f0;
}
.sc-oe-dur{font-size:10px;color:#6a4a8a;font-style:italic;font-family:'Crimson Pro',Georgia,serif;}
.sc-oe-arrow{font-size:10px;color:#6a4a8a;transition:transform .2s;}
.sc-oe-arrow.open{transform:rotate(180deg);}
.sc-oe-body{
  border:1px solid #3a2050;border-top:none;border-radius:0 0 3px 3px;
  background:#0a0814;overflow:hidden;
}
.sc-oe-tabs{display:flex;border-bottom:1px solid #2a1840;overflow-x:auto;}
.sc-oe-tab{
  padding:5px 13px;font-family:'Cinzel',serif;font-size:7.5px;
  letter-spacing:.12em;text-transform:uppercase;color:#5a4070;
  cursor:pointer;border:none;background:transparent;
  border-bottom:2px solid transparent;white-space:nowrap;
  transition:all .15s;flex-shrink:0;
}
.sc-oe-tab:hover{color:#a070d0;}
.sc-oe-tab.on{color:#c090f0;border-bottom-color:#a070d0;background:#0e0c18;}
.sc-oe-panel{padding:12px 14px;}
.sc-oe-panel-title{
  font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;
  text-transform:uppercase;color:#8050b0;margin-bottom:8px;
}
.sc-oe-step{
  padding:6px 10px 6px 12px;border-left:2px solid #3a1a60;
  margin-bottom:5px;font-size:12px;color:#b090c8;line-height:1.7;
}
.sc-oe-step:last-child{margin-bottom:0;}
.sc-oe-syllables{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;}
.sc-oe-syl{
  background:#1a0e28;border:1px solid #4a2060;border-radius:2px;
  padding:2px 8px;font-size:11px;color:#d0a0f0;
  font-family:'Cinzel',serif;letter-spacing:.06em;
}
.sc-oe-signs{display:flex;flex-direction:column;gap:6px;margin-bottom:8px;}
.sc-oe-sign{background:#120e1c;border:1px solid #2a1840;border-radius:3px;padding:7px 10px;}
.sc-oe-sign-name{font-family:'Cinzel',serif;font-size:9px;letter-spacing:.1em;color:#c090f0;margin-bottom:3px;}
.sc-oe-sign-gesture{font-size:11px;color:#8060a0;line-height:1.6;}
.sc-oe-note{
  margin-top:8px;padding:7px 10px;background:#140a1c;
  border-left:3px solid #5a2a80;font-size:11px;color:#8060a0;
  line-height:1.6;font-style:italic;
}
.sc-prep{
  background:#120e1a;border-left:3px solid #7040a0;
  margin:10px 22px 0;padding:9px 13px;border-radius:0 3px 3px 0;
}
.sc-prep-lbl{
  font-family:'Cinzel',serif;font-size:7.5px;letter-spacing:.15em;
  text-transform:uppercase;color:#9060c0;margin-bottom:3px;
}
.sc-prep-txt{font-size:12px;color:#b890d8;line-height:1.6;white-space:pre-line;}
.sc-cols{padding:12px 22px;display:flex;gap:16px;flex:1;}
.sc-lcol{flex:1;min-width:0;}
.sc-rcol{width:240px;flex-shrink:0;}
.sc-card{
  background:#120e1a;border:1px solid #2e1f40;border-radius:3px;
  margin-bottom:10px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.35);
}
.sc-chard{
  padding:5px 12px;font-family:'Cinzel',serif;font-size:8px;
  letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;
}
.sc-cbody{padding:10px 13px;font-size:13px;line-height:1.75;color:#c0a8d0;}
.sc-cbody p{white-space:pre-line;}
.sc-story-card{background:#1a0e0a;border:1px solid #4a1f10;border-radius:3px;margin-bottom:10px;overflow:hidden;}
.sc-story-hdr{
  padding:6px 12px;font-family:'Cinzel',serif;font-size:8px;
  letter-spacing:.15em;text-transform:uppercase;
  color:#e8dfc8;background:#2a1208;border-bottom:1px solid #4a1f10;
}
.sc-story-body{padding:10px 13px;font-size:13px;line-height:1.8;color:#c8a870;white-space:pre-line;}
.sc-steps{padding:10px 13px;}
.sc-step{
  padding:7px 10px 7px 14px;border-left:2px solid #3a2a50;
  margin-bottom:6px;font-size:13px;color:#b8a0c8;line-height:1.7;
}
.sc-step:last-child{margin-bottom:0;}
.sc-step-num{
  font-family:'Cinzel',serif;font-size:8px;letter-spacing:.12em;
  color:#7040a0;text-transform:uppercase;margin-bottom:2px;
}
.sc-badge{
  display:inline-block;border-radius:10px;font-size:8.5px;
  padding:2px 8px;margin-bottom:4px;letter-spacing:.8px;font-family:'Cinzel',serif;
}
.sc-badge-ia{background:#1a1a3a;color:#80a0e8;border:1px solid #3a4a7a;}
.sc-badge-iia{background:#1a2a1a;color:#80d890;border:1px solid #3a6a3a;}
.sc-music-card{background:#0e1418;border:1px solid #1e3040;border-radius:3px;margin-bottom:10px;overflow:hidden;}
.sc-music-hdr{
  padding:5px 12px;font-family:'Cinzel',serif;font-size:8px;
  letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;background:#162030;
}
.sc-music-body{padding:10px 13px;}
.sc-search-chip{
  display:inline-flex;align-items:center;gap:6px;
  background:#0a1820;border:1px solid #204050;border-radius:3px;
  padding:5px 11px;font-size:11px;color:#60b0d0;text-decoration:none;
  cursor:pointer;margin-bottom:8px;font-family:'Cinzel',serif;
  letter-spacing:.06em;transition:all .18s;
}
.sc-search-chip:hover{background:#102030;border-color:#3070a0;color:#90d0f0;}
.sc-search-chip .sc-yt-icon{font-size:.9rem;}
.sc-listen-for{font-size:12px;color:#7090a0;line-height:1.65;margin-top:4px;white-space:pre-line;}
.sc-jcard{background:#0a1410;border:1px solid #1a3020;border-radius:3px;margin-bottom:10px;overflow:hidden;}
.sc-jcard-hdr{
  padding:5px 12px;font-family:'Cinzel',serif;font-size:8px;
  letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;background:#102018;
}
.sc-sbitem{padding:8px 12px;border-bottom:1px solid #1e1428;}
.sc-sbitem:last-child{border-bottom:none;}
.sc-sblbl{font-family:'Cinzel',serif;font-size:7.5px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:2px;}
.sc-sbitem p{font-size:12px;line-height:1.6;color:#8a7a9a;}
.sc-mat-item{padding:3px 0;font-size:12px;color:#9a8aaa;display:flex;align-items:baseline;gap:6px;line-height:1.5;}
.sc-mat-dot{color:#5a3a7e;font-size:.7rem;}
.sc-bnav{
  display:flex;justify-content:space-between;align-items:center;
  padding:10px 22px 14px;border-top:1px solid #2e1f40;margin-top:4px;
}
.sc-nbtn{
  padding:6px 16px;background:#120e1a;color:#e8dfc8;
  border:1px solid #2e1f40;border-radius:3px;cursor:pointer;
  font-size:12px;font-family:'Crimson Pro',Georgia,serif;transition:all .18s;
}
.sc-nbtn:hover:not(:disabled){background:#1c1428;border-color:#a070d0;}
.sc-nbtn:disabled{opacity:.3;cursor:default;}
.sc-ncnt{font-size:11px;color:#6a5a7a;}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:rgba(10,8,12,.5);}
::-webkit-scrollbar-thumb{background:rgba(130,80,180,.25);border-radius:3px;}
::-webkit-scrollbar-thumb:hover{background:rgba(130,80,180,.5);}
`
const SESSION_COLORS = { A: '#2a1a3a', B: '#1a2a1a' }
const SESSION_ACCENT = { A: '#a070d0', B: '#70c090' }

const OE_TABS = [
  { key: 'breathing',   label: '🫁 Breathing' },
  { key: 'vocalWarmUp', label: '🎤 Voice' },
  { key: 'pitchAnchor', label: '🎹 Pitch' },
  { key: 'handSigns',   label: '✋ Hand Signs' },
  { key: 'rhythm',      label: '🥁 Rhythm' },
]

function OpeningExercises({ unitId }) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('breathing')
  const oe = OPENING_EXERCISES[unitId]
  if (!oe) return null
  const panel = oe[tab]
  return (
    <div className="sc-oe-wrap">
      <button className="sc-oe-toggle" onClick={() => setOpen(o => !o)}>
        <div className="sc-oe-toggle-left">
          <span className="sc-oe-icon">♩</span>
          <span className="sc-oe-title">Opening Exercises</span>
          <span className="sc-oe-dur">{oe.duration}</span>
        </div>
        <span className={`sc-oe-arrow${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="sc-oe-body">
          <div className="sc-oe-tabs">
            {OE_TABS.map(t => (
              <button
                key={t.key}
                className={`sc-oe-tab${tab === t.key ? ' on' : ''}`}
                onClick={() => setTab(t.key)}
              >{t.label}</button>
            ))}
          </div>
          <div className="sc-oe-panel">
            {panel && (
              <>
                <div className="sc-oe-panel-title">{panel.title}</div>
                {tab === 'rhythm' && panel.syllables && (
                  <div className="sc-oe-syllables">
                    {panel.syllables.map((s, i) => (
                      <span key={i} className="sc-oe-syl">{s}</span>
                    ))}
                  </div>
                )}
                {tab === 'handSigns' && panel.signs && (
                  <div className="sc-oe-signs">
                    {panel.signs.map((s, i) => (
                      <div key={i} className="sc-oe-sign">
                        <div className="sc-oe-sign-name">{s.name} — {s.syllable}</div>
                        <div className="sc-oe-sign-gesture">{s.gesture}</div>
                      </div>
                    ))}
                  </div>
                )}
                {panel.steps && panel.steps.map((step, i) => (
                  <div key={i} className="sc-oe-step">{step}</div>
                ))}
                {tab === 'breathing' && oe.teacherNote && (
                  <div className="sc-oe-note">{oe.teacherNote}</div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Sidebar({ ci, setCi }) {
  return (
    <div className="sc-sidebar">
      {YEARS.map(year => (
        <div key={year.id}>
          <div className="sc-year-hdr">♪ {year.title}</div>
          {year.units.map(unit => {
            const unitLessons = ALL_LESSONS.filter(l => l.unit === unit.id)
            if (!unitLessons.length) return null
            return (
              <div key={unit.id}>
                <div className="sc-unit-hdr">{unit.icon} {unit.title}</div>
                {unitLessons.map(lesson => {
                  const i = ALL_LESSONS.findIndex(l => l.id === lesson.id)
                  const accent = SESSION_ACCENT[lesson.session]
                  return (
                    <button
                      key={lesson.id}
                      className={`sc-lbtn${i === ci ? ' on' : ''}`}
                      onClick={() => setCi(i)}
                      style={i === ci ? { borderLeftColor: accent } : {}}
                    >
                      <div className="sc-stype">Wk {lesson.week} · Session {lesson.session}</div>
                      <div>{lesson.id} · {lesson.title.length > 28 ? lesson.title.slice(0, 28) + '…' : lesson.title}</div>
                    </button>
                  )
                })}
                <div className="sc-unit-divider" />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
export default function ScholaCantorum() {
  const [ci, setCi] = useState(0)
  const [form, setForm] = useState('both')

  const l = ALL_LESSONS[ci]
  const accent = SESSION_ACCENT[l.session]
  const headerBg = SESSION_COLORS[l.session]

  useEffect(() => {
    const el = document.getElementById('sc-scroll')
    if (el) el.scrollTop = 0
  }, [ci])

  const showIA  = form === 'both' || form === 'ia'
  const showIIA = form === 'both' || form === 'iia'

  return (
    <>
      <style>{CSS}</style>
      <div className="sc-root">
        <TopNav current="/schola-cantorum" />
        <div className="sc-body">
          <Sidebar ci={ci} setCi={setCi} />
          <div className="sc-content" id="sc-scroll">

            <div className="sc-lhdr" style={{ background: headerBg, borderBottom: `2px solid ${accent}22` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div className="sc-meta">Session {l.session} · Week {l.week} · {l._unit.title}</div>
                  <h1 style={{ color: accent }}>{l.title}</h1>
                  <div className="sc-unit-tag">{l._unit.subtitle}</div>
                </div>
                <div>
                  <div className="sc-form-btns">
                    {[['both', 'Both'], ['ia', 'Form IA'], ['iia', 'Form IIA']].map(([val, lbl]) => (
                      <button
                        key={val}
                        className={`sc-fbtn${form === val ? ' on' : ''}`}
                        onClick={() => setForm(val)}
                        style={form === val ? { background: accent, borderColor: accent } : {}}
                      >{lbl}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="sc-ladukhin-bar">
              <span className="sc-lbl">Ladukhin:</span>
              <span className="sc-pill">{l.ladukhin}</span>
              <span className="sc-lbl" style={{ marginLeft: '8px' }}>Duration:</span>
              <span className="sc-dur-pill">{l.duration}</span>
            </div>

            {l.materials && l.materials.length > 0 && (
              <div style={{ margin: '10px 22px 0' }}>
                <div className="sc-card">
                  <div className="sc-chard" style={{ background: '#16101e', color: '#7a6090', fontSize: '7.5px', letterSpacing: '.15em' }}>
                    Materials Needed
                  </div>
                  <div className="sc-cbody" style={{ padding: '8px 13px' }}>
                    {l.materials.map((m, i) => (
                      <div key={i} className="sc-mat-item">
                        <span className="sc-mat-dot">◆</span> {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <OpeningExercises unitId={l.unit} />

            <div className="sc-cols">
              <div className="sc-lcol">

                {l.story && (
                  <div className="sc-story-card">
                    <div className="sc-story-hdr">☩ {l.story.title}</div>
                    <div className="sc-story-body">{l.story.text}</div>
                  </div>
                )}

                {l.drill && (
                  <div className="sc-card">
                    <div className="sc-chard" style={{ background: headerBg, borderBottom: `1px solid ${accent}22` }}>
                      {l.drill.title}
                    </div>
                    <div className="sc-steps">
                      {l.drill.steps.map((step, i) => (
                        <div key={i} className="sc-step">
                          <div className="sc-step-num">Step {i + 1}</div>
                          <div>{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {l.closingRitual && (
                  <div className="sc-prep" style={{ borderLeftColor: '#4a2a60', marginBottom: '0' }}>
                    <div className="sc-prep-lbl" style={{ color: '#8050b0' }}>Closing</div>
                    <div className="sc-prep-txt">{l.closingRitual}</div>
                  </div>
                )}

              </div>

              <div className="sc-rcol">

                {(showIA || showIIA) && (l.formIA || l.formIIA) && (
                  <div className="sc-card">
                    <div className="sc-chard" style={{ background: '#12101e', borderBottom: '1px solid #2a1f40' }}>
                      Student Instructions
                    </div>
                    {showIA && l.formIA && (
                      <div style={{ padding: '9px 12px', borderBottom: showIIA && l.formIIA ? '1px solid #1e1428' : 'none' }}>
                        <span className="sc-badge sc-badge-ia">Form IA</span>
                        <p style={{ fontSize: '12px', color: '#8090b8', lineHeight: 1.65 }}>{l.formIA}</p>
                      </div>
                    )}
                    {showIIA && l.formIIA && (
                      <div style={{ padding: '9px 12px' }}>
                        <span className="sc-badge sc-badge-iia">Form IIA</span>
                        <p style={{ fontSize: '12px', color: '#70b880', lineHeight: 1.65 }}>{l.formIIA}</p>
                      </div>
                    )}
                  </div>
                )}

                {l.sacredMusic && (
                  <div className="sc-music-card">
                    <div className="sc-music-hdr">♬ Sacred Music Listening</div>
                    <div className="sc-music-body">
                      <div style={{ marginBottom: '6px', fontSize: '12px', fontStyle: 'italic', color: '#b0c8d8' }}>
                        {l.sacredMusic.label}
                      </div>
                      
                        className="sc-search-chip"
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(l.sacredMusic.searchTerm)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sc-yt-icon">▶</span>
                        Search: "{l.sacredMusic.searchTerm}"
                      </a>
                      <div className="sc-listen-for">{l.sacredMusic.listenFor}</div>
                    </div>
                  </div>
                )}

                {l.journal && (showIA || showIIA) && (
                  <div className="sc-jcard">
                    <div className="sc-jcard-hdr">✦ Music Journal</div>
                    {showIA && l.journal.formIA && (
                      <div style={{ padding: '9px 12px', borderBottom: showIIA && l.journal.formIIA ? '1px solid #1a3020' : 'none' }}>
                        <span className="sc-badge sc-badge-ia">Form IA</span>
                        <p style={{ fontSize: '12px', color: '#8090b8', lineHeight: 1.6 }}>{l.journal.formIA}</p>
                      </div>
                    )}
                    {showIIA && l.journal.formIIA && (
                      <div style={{ padding: '9px 12px' }}>
                        <span className="sc-badge sc-badge-iia">Form IIA</span>
                        <p style={{ fontSize: '12px', color: '#70b880', lineHeight: 1.6 }}>{l.journal.formIIA}</p>
                      </div>
                    )}
                  </div>
                )}

                {(l.teacherNotes || l.watchFor || l.shortenIt || l.stretchIt) && (
                  <div className="sc-card">
                    <div className="sc-chard" style={{ background: '#1a0e10' }}>Teacher Notes</div>
                    {l.teacherNotes && (
                      <div className="sc-sbitem">
                        <div className="sc-sblbl" style={{ color: '#806070' }}>Notes</div>
                        <p>{l.teacherNotes}</p>
                      </div>
                    )}
                    {l.watchFor && (
                      <div className="sc-sbitem" style={{ background: '#140a0c' }}>
                        <div className="sc-sblbl" style={{ color: '#a04040' }}>Watch For</div>
                        <p>{l.watchFor}</p>
                      </div>
                    )}
                    {l.shortenIt && (
                      <div className="sc-sbitem" style={{ background: '#0e140a' }}>
                        <div className="sc-sblbl" style={{ color: '#507030' }}>Shorten It</div>
                        <p>{l.shortenIt}</p>
                      </div>
                    )}
                    {l.stretchIt && (
                      <div className="sc-sbitem" style={{ background: '#0a0e18' }}>
                        <div className="sc-sblbl" style={{ color: '#304870' }}>Stretch It</div>
                        <p>{l.stretchIt}</p>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

            <div className="sc-bnav">
              <button className="sc-nbtn" disabled={ci === 0} onClick={() => setCi(ci - 1)}>← Previous</button>
              <span className="sc-ncnt">Lesson {ci + 1} of {ALL_LESSONS.length}</span>
              <button className="sc-nbtn" disabled={ci === ALL_LESSONS.length - 1} onClick={() => setCi(ci + 1)}>Next →</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
