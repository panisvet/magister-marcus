import { useState, useEffect, useMemo } from 'react'
import TeacherGuide, { ageToForm } from '../components/TeacherGuide.jsx'
import { UNITS } from '../data/lessons.js'
import TopNav from '../components/TopNav.jsx'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=IM+Fell+English:ital@0;1&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
.lv-root{display:flex;flex-direction:column;height:100vh;background:#0e0b07;color:#e8dfc8;font-family:'Crimson Pro',Georgia,serif;overflow:hidden;}
.lv-body{display:flex;flex:1;overflow:hidden;margin-top:40px;}

/* ── Sidebar ── */
.lv-sidebar{width:200px;flex-shrink:0;background:#1a1208;border-right:1px solid #3d2e1e;overflow-y:auto;display:flex;flex-direction:column;}
.lv-unit-hdr{padding:8px 12px 4px;font-family:'Cinzel',serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c9902a;border-top:1px solid #2a1e10;margin-top:2px;}
.lv-unit-hdr:first-child{border-top:none;margin-top:0;}
.lv-lbtn{width:100%;text-align:left;padding:7px 12px;background:transparent;border:none;border-left:3px solid transparent;color:#7a6a55;cursor:pointer;font-size:14px;font-family:'Crimson Pro',Georgia,serif;line-height:1.4;}
.lv-lbtn:hover{background:#2a1e10;color:#c8b48a;}
.lv-lbtn.on{background:#2a1e10;border-left-color:#c9902a;color:#f7edcc;}
.lv-lbtn .lv-tp{font-size:9px;color:#4a6741;margin-bottom:1px;font-family:'Cinzel',serif;letter-spacing:.1em;}
.lv-lbtn.on .lv-tp{color:#8ab870;}
.lv-ws-btn{display:flex;align-items:center;gap:5px;margin:3px 8px 8px;padding:5px 10px;background:#1c2e1a;border:1px solid #3a5a30;border-radius:3px;color:#8ab870;cursor:pointer;font-size:10px;font-family:'Crimson Pro',Georgia,serif;text-align:left;text-decoration:none;}
.lv-ws-btn:hover{background:#2a4a20;color:#b8d4a8;}
.lv-divider{margin:2px 8px 4px;border:none;border-top:1px solid #2a1e10;}

/* ── Content area ── */
.lv-content{flex:1;overflow-y:auto;display:flex;flex-direction:column;}
.lv-lhdr{padding:16px 24px;border-bottom:2px solid rgba(0,0,0,.3);}
.lv-lhdr .lv-meta{font-family:'Cinzel',serif;font-size:9px;letter-spacing:.18em;text-transform:uppercase;opacity:.65;margin-bottom:4px;}
.lv-lhdr h1{font-family:'Cinzel',serif;font-size:19px;font-weight:600;margin-bottom:3px;}
.lv-lhdr .lv-tag{font-style:italic;font-size:13px;opacity:.82;}
.lv-lhdr .lv-tdesc{margin-top:5px;font-size:11px;opacity:.55;}
.lv-spbar{background:#1e1810;border-bottom:1px solid #3d2e1e;padding:5px 24px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;min-height:28px;}
.lv-splbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#7a6a45;}
.lv-sptag{background:#0e0b07;border:1px solid #3d2e1e;border-radius:2px;padding:2px 7px;font-size:10px;color:#9e8c72;font-style:italic;}
.lv-prep{background:#1a1508;border-left:4px solid #c9902a;margin:12px 24px 0;padding:9px 13px;border-radius:0 4px 4px 0;}
.lv-prep-lbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#c9902a;margin-bottom:3px;}
.lv-prep-txt{font-size:12px;color:#c8a870;}
.lv-cols{padding:14px 24px;display:flex;gap:18px;flex:1;}
.lv-lcol{flex:1;}
.lv-rcol{width:250px;flex-shrink:0;}

/* Cards */
.lv-card{background:#1a1208;border:1px solid #3d2e1e;border-radius:4px;margin-bottom:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.3);}
.lv-chard{padding:6px 12px;font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;}
.lv-cbody{padding:11px 13px;font-size:13px;line-height:1.7;color:#c8b48a;}
.lv-cbody p{white-space:pre-line;}
.lv-cbody ul{padding-left:16px;}
.lv-cbody li{margin-bottom:3px;}
.lv-kq{background:#1c2e1a;border-radius:6px;padding:13px 17px;margin-bottom:12px;}
.lv-kqlbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:#8ab870;margin-bottom:5px;}
.lv-kqtxt{font-size:14px;font-style:italic;line-height:1.6;margin-bottom:4px;color:#e8dfc8;}
.lv-kqnote{font-size:11px;color:#8ab870;font-style:italic;}
.lv-badge{display:inline-block;border-radius:10px;font-size:9px;padding:2px 7px;margin-bottom:5px;letter-spacing:1px;font-family:'Cinzel',serif;}
.lv-a8{background:#1a3a18;color:#8ab870;border:1px solid #3a6a30;}
.lv-a11{background:#1a2a3a;color:#7ab0d0;border:1px solid #2a4a6a;}
.lv-rdbox{background:#1e1810;border:1px solid #3d2e1e;border-radius:4px;padding:11px 13px;margin-bottom:10px;}
.lv-rdtitle{font-size:12px;font-style:italic;font-weight:600;color:#e8dfc8;margin-bottom:5px;}
.lv-rdnote{font-size:12px;color:#9e8c72;line-height:1.6;margin-bottom:9px;}
.lv-rdlink{display:inline-flex;align-items:center;gap:5px;background:#1c2e1a;color:#8ab870;text-decoration:none;padding:5px 13px;border-radius:3px;font-size:11px;border:1px solid #2a4a2a;}
.lv-rdlink:hover{background:#2a4a2a;color:#b8d4a8;}
.lv-vchip{display:inline-block;background:#1a1028;border:1px solid #3a2848;border-radius:2px;padding:3px 8px;font-size:11px;color:#b898c8;font-style:italic;margin:2px;}
.lv-sbitem{padding:9px 12px;border-bottom:1px solid #2a1e10;}
.lv-sbitem:last-child{border-bottom:none;}
.lv-sblbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:3px;}
.lv-sbitem p{font-size:12px;line-height:1.6;color:#9e8c72;}

/* Resources card */
.lv-res-hdr{padding:8px 14px;font-family:'Cinzel',serif;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;background:#2d4a6a;}
.lv-res-item{padding:10px 14px;border-bottom:1px solid #2a1e10;}
.lv-res-item:last-child{border-bottom:none;}
.lv-res-link{font-size:13px;color:#7ab0d0;text-decoration:none;font-style:italic;display:block;margin-bottom:3px;}
.lv-res-link:hover{color:#b0d4f0;text-decoration:underline;}
.lv-res-note{font-size:12px;color:#9e8c72;}

/* Bottom nav */
.lv-bnav{display:flex;justify-content:space-between;align-items:center;padding:12px 24px 16px;border-top:1px solid #3d2e1e;margin-top:6px;}
.lv-nbtn{padding:7px 18px;background:#1a1208;color:#e8dfc8;border:1px solid #3d2e1e;border-radius:4px;cursor:pointer;font-size:12px;font-family:'Crimson Pro',Georgia,serif;}
.lv-nbtn:hover:not(:disabled){background:#2a1e10;border-color:#c9902a;}
.lv-nbtn:disabled{opacity:.35;cursor:default;}
.lv-ncnt{font-size:11px;color:#7a6a55;}

/* Age toggle in top bar */
.lv-age-btns{display:flex;gap:4px;}
.lv-abtn{padding:4px 11px;border-radius:12px;border:1px solid #3d2e1e;background:transparent;color:#8ab870;cursor:pointer;font-size:11px;font-family:'Crimson Pro',Georgia,serif;}
.lv-abtn.on{background:#c9902a;border-color:#c9902a;color:#fff;}
`

// ── Flatten all lessons into one array ──────────────────────────────────────
function buildViews(units) {
  const ALL = []
  const UNIT_LAST_WK = {}
  units.forEach(u => {
    u.lessons.forEach(l => { ALL.push({ ...l, _unit: u }) })
    const lastLesson = u.lessons[u.lessons.length - 1]
    if (lastLesson) UNIT_LAST_WK[u.id] = lastLesson.week
  })
  return { ALL, UNIT_LAST_WK }
}

// ── Group by week for sidebar ────────────────────────────────────────────────
function groupByWeek(lessons) {
  const map = {}
  lessons.forEach(l => {
    if (!map[l.week]) map[l.week] = []
    map[l.week].push(l)
  })
  return map
}

const TYPE_COLORS = {
  'OBSERVE':       '#2d5a27',
  'READ & NARRATE':'#3a2a18',
  'RECORD':        '#1a3a5c',
  'RECORD & EXTEND':'#1a3a5c',
}

function card(color, heading, body) {
  return { color, heading, body }
}

export default function LessonViewer({ units = UNITS }) {
  const [ci, setCi] = useState(0)
  const [age, setAge] = useState('both')

  const { ALL, UNIT_LAST_WK } = useMemo(() => buildViews(units), [units])
  const l = ALL[ci]
  const tc = TYPE_COLORS[l.type] || '#2a1f14'
  const weekGroups = groupByWeek(ALL)

  // Scroll content to top on lesson change
  useEffect(() => {
    const el = document.getElementById('lv-content-scroll')
    if (el) el.scrollTop = 0
  }, [ci])

  // ── Sidebar ────────────────────────────────────────────────────────────────
  function Sidebar() {
    const weeks = Object.keys(weekGroups).map(Number).sort((a, b) => a - b)
    let lastUnit = null
    return (
      <div className="lv-sidebar">
        {weeks.map(w => {
          const lessons = weekGroups[w]
          const unit = lessons[0]._unit
          const showUnitHdr = unit.id !== lastUnit
          if (showUnitHdr) lastUnit = unit.id
          const isLastWkOfUnit = UNIT_LAST_WK[unit.id] === w
          return (
            <div key={w}>
              {showUnitHdr && (
                <div className="lv-unit-hdr">{unit.icon} {unit.title.split(':')[0]}</div>
              )}
              <div style={{fontSize:'8px',fontFamily:'Cinzel,serif',letterSpacing:'.15em',color:'#4a3a28',padding:'4px 12px 2px',textTransform:'uppercase'}}>
                Wk {w} · {lessons[0].week && lessons[0]._unit.lessons.find(x=>x.week===w)?.title?.split(' ').slice(0,3).join(' ') || ''}
              </div>
              {lessons.map(lesson => {
                const i = ALL.indexOf(lesson)
                return (
                  <button key={lesson.id} className={`lv-lbtn${i===ci?' on':''}`} onClick={() => setCi(i)}>
                    <div className="lv-tp">{lesson.type}</div>
                    <div>{lesson.id} · {lesson.title}</div>
                  </button>
                )
              })}
              {isLastWkOfUnit && unit.worksheetUrl && (
                <>
                  <div className="lv-divider"/>
                  <a className="lv-ws-btn" href={unit.worksheetUrl}>
                    📋 Unit {unit.id.replace('u','')} Worksheets
                  </a>
                </>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // ── Main content ───────────────────────────────────────────────────────────
  const reads = l.reads || (l.spine ? [{
    src: l.spine, dur: '15 min', note: '', url: l.spineLink || '#', lbl: l.spine,
    librivox: l.spineLibrivox || null,
  }] : [])

  if (l.spine && l.secondSpine) {
    reads.push({ src: l.secondSpine, dur: '10 min', note: '', url: l.secondSpineLink || '#', lbl: l.secondSpine, librivox: l.secondSpineLibrivox || null })
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="lv-root">
        <TopNav current="/lesson-viewer" />
        <div className="lv-body">
          <Sidebar />
          <div className="lv-content" id="lv-content-scroll">

            {/* Lesson header */}
            <div className="lv-lhdr" style={{background: tc}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'8px'}}>
                <div>
                  <div className="lv-meta">{l.type} · Lesson {l.id} · Week {l.week}</div>
                  <h1>{l.title}</h1>
                  {l.tagline && <div className="lv-tag">{l.tagline}</div>}
                  <div className="lv-tdesc">{l._unit.title}</div>
                </div>
                <div className="lv-age-btns">
                  {['both','8','11'].map(a=>(
                    <button key={a} className={`lv-abtn${age===a?' on':''}`} onClick={()=>setAge(a)}>
                      {a==='both'?'Both':a==='8'?'Form IA':'Form IIA'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Spines bar */}
            {(l.spine || (l.spines && l.spines.length > 0)) && (
              <div className="lv-spbar">
                <span className="lv-splbl">Spines:</span>
                {l.spine && <span className="lv-sptag">{l.spine}</span>}
                {l.secondSpine && <span className="lv-sptag">{l.secondSpine}</span>}
              </div>
            )}

            {/* Teacher prep */}
            {l.teacherPrep && (
              <div className="lv-prep">
                <div className="lv-prep-lbl">Teacher Preparation</div>
                <div className="lv-prep-txt">{l.teacherPrep}</div>
              </div>
            )}

            <div className="lv-cols">
              <div className="lv-lcol">

                {/* Opening */}
                {l.opening && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:tc}}>Opening</div>
                    <div className="lv-cbody"><p>{l.opening}</p></div>
                  </div>
                )}

                {/* Key question */}
                {l.kq && (
                  <div className="lv-kq">
                    <div className="lv-kqlbl">Key Question</div>
                    <div className="lv-kqtxt">{l.kq.txt || l.kq}</div>
                    {l.kq.note && <div className="lv-kqnote">{l.kq.note}</div>}
                  </div>
                )}

                {/* Reads */}
                {reads.length > 0 && reads.some(r => r.url && r.url !== '#') && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:tc}}>Read Aloud</div>
                    <div className="lv-cbody">
                      {reads.filter(r => r.url && r.url !== '#').map((r, i) => (
                        <div className="lv-rdbox" key={i}>
                          <div className="lv-rdtitle">{r.src || r.lbl}</div>
                          {r.note && <div className="lv-rdnote">{r.note}</div>}
                          <a href={r.url} target="_blank" rel="noopener" className="lv-rdlink">
                            📖 Read: {r.lbl}
                          </a>
                          {r.librivox && (
                            <a href={r.librivox} target="_blank" rel="noopener" className="lv-rdlink" style={{marginTop:'5px'}}>
                              🎧 LibriVox audiobook
                            </a>
                          )}
                          {r.images && r.images.map((img, j) => (
                            <a key={j} href={img.url} target="_blank" rel="noopener" className="lv-rdlink" style={{marginTop:'6px'}}>
                              🖼 {img.lbl}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activity */}
                {l.activity && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:tc}}>{l.activity.label}</div>
                    <div className="lv-cbody"><p>{l.activity.text}</p></div>
                  </div>
                )}

                {/* Discussion */}
                {l.disc && l.disc.length > 0 && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:tc}}>Discussion Questions</div>
                    <div className="lv-cbody">
                      <ul>{l.disc.map((q,i) => <li key={i}>{q}</li>)}</ul>
                    </div>
                  </div>
                )}

              </div>

              <div className="lv-rcol">

                {/* Narration */}
                {(((age==='both'||age==='8') && l.narration8) || ((age==='both'||age==='11') && l.narration11)) && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:'#1a1208',borderBottom:'1px solid #3d2e1e'}}>Narration</div>
                    {(age==='both'||age==='8') && l.narration8 && (
                      <div style={{padding:'10px 12px', borderBottom: age==='both'&&l.narration11 ? '1px solid #2a1e10' : 'none'}}>
                        <span className="lv-badge lv-a8">Form IA · Oral</span>
                        <p style={{fontSize:'12px',fontStyle:'italic',color:'#9e8c72',lineHeight:1.6}}>{l.narration8}</p>
                      </div>
                    )}
                    {(age==='both'||age==='11') && l.narration11 && (
                      <div style={{padding:'10px 12px'}}>
                        <span className="lv-badge lv-a11">Form IIA · Written</span>
                        <p style={{fontSize:'12px',fontStyle:'italic',color:'#9e8c72',lineHeight:1.6}}>{l.narration11}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Journal */}
                {(((age==='both'||age==='8') && l.journal8) || ((age==='both'||age==='11') && l.journal11)) && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:'#1a2a3a'}}>Nature Journal</div>
                    {(age==='both'||age==='8') && l.journal8 && (
                      <div style={{padding:'10px 12px', borderBottom: age==='both'&&l.journal11 ? '1px solid #2a1e10' : 'none'}}>
                        <span className="lv-badge lv-a8">Form IA</span>
                        <p style={{fontSize:'12px',color:'#9e8c72',lineHeight:1.6}}>{l.journal8}</p>
                      </div>
                    )}
                    {(age==='both'||age==='11') && l.journal11 && (
                      <div style={{padding:'10px 12px'}}>
                        <span className="lv-badge lv-a11">Form IIA</span>
                        <p style={{fontSize:'12px',color:'#9e8c72',lineHeight:1.6}}>{l.journal11}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Vocabulary */}
                {l.vocab && l.vocab.length > 0 && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:'#1a1028'}}>Vocabulary</div>
                    <div className="lv-cbody">
                      {l.vocab.map(v => <span key={v} className="lv-vchip">{v}</span>)}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {l.resources && l.resources.length > 0 && (
                  <div className="lv-card">
                    <div className="lv-res-hdr">Resources</div>
                    {l.resources.map((r, i) => (
                      <div key={i} className="lv-res-item">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="lv-res-link">{r.lbl}</a>
                        {r.note && <div className="lv-res-note">{r.note}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Teacher notes */}
                {(l.watchFor || (l.digDeeper && (age==='both'||age==='11'))) && (
                  <div className="lv-card">
                    <div className="lv-chard" style={{background:'#2a1608'}}>Teacher Notes</div>
                    {l.watchFor && (
                      <div className="lv-sbitem" style={{background:'#1e1408'}}>
                        <div className="lv-sblbl" style={{color:'#8a5a1a'}}>Watch For</div>
                        <p>{l.watchFor}</p>
                      </div>
                    )}
                    {l.digDeeper && (age==='both'||age==='11') && (
                      <div className="lv-sbitem" style={{background:'#141828'}}>
                        <div className="lv-sblbl" style={{color:'#4a6a9a'}}>Dig Deeper · Form IIA</div>
                        <p>{l.digDeeper}</p>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

            <TeacherGuide guide={l.teacherGuide} form={ageToForm(age)} />
            {/* Bottom nav */}
            <div className="lv-bnav">
              <button className="lv-nbtn" disabled={ci===0} onClick={() => setCi(ci-1)}>← Previous</button>
              <span className="lv-ncnt">Lesson {ci+1} of {ALL.length}</span>
              <button className="lv-nbtn" disabled={ci===ALL.length-1} onClick={() => setCi(ci+1)}>Next →</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
