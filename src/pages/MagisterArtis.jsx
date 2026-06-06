import { useState, useEffect } from 'react'
import { ART_UNITS } from '../data/artLessons.js'
import TopNav from '../components/TopNav.jsx'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=IM+Fell+English:ital@0;1&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
.ma-root{display:flex;flex-direction:column;height:100vh;background:#0e0b07;color:#e8dfc8;font-family:'Crimson Pro',Georgia,serif;overflow:hidden;}
.ma-body{display:flex;flex:1;overflow:hidden;margin-top:40px;}

/* Sidebar */
.ma-sidebar{width:200px;flex-shrink:0;background:#1a1208;border-right:1px solid #3d2e1e;overflow-y:auto;display:flex;flex-direction:column;}
.ma-unit-hdr{padding:8px 12px 4px;font-family:'Cinzel',serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c9902a;border-top:1px solid #2a1e10;margin-top:2px;}
.ma-unit-hdr:first-child{border-top:none;margin-top:0;}
.ma-lbtn{width:100%;text-align:left;padding:7px 12px;background:transparent;border:none;border-left:3px solid transparent;color:#7a6a55;cursor:pointer;font-size:13px;font-family:'Crimson Pro',Georgia,serif;line-height:1.4;}
.ma-lbtn:hover{background:#2a1e10;color:#c8b48a;}
.ma-lbtn.on{background:#2a1e10;border-left-color:#c9902a;color:#f7edcc;}
.ma-lbtn .ma-tp{font-size:9px;color:#8b4a1a;margin-bottom:1px;font-family:'Cinzel',serif;letter-spacing:.1em;}
.ma-lbtn.on .ma-tp{color:#c9902a;}
.ma-divider{margin:2px 8px 4px;border:none;border-top:1px solid #2a1e10;}

/* Content */
.ma-content{flex:1;overflow-y:auto;display:flex;flex-direction:column;}
.ma-lhdr{padding:16px 24px;border-bottom:2px solid rgba(0,0,0,.3);}
.ma-lhdr .ma-meta{font-family:'Cinzel',serif;font-size:9px;letter-spacing:.18em;text-transform:uppercase;opacity:.65;margin-bottom:4px;}
.ma-lhdr h1{font-family:'Cinzel',serif;font-size:19px;font-weight:600;margin-bottom:3px;}
.ma-lhdr .ma-tag{font-style:italic;font-size:13px;opacity:.82;}
.ma-lhdr .ma-unit-desc{margin-top:5px;font-size:11px;opacity:.55;}

/* Artist / work bar */
.ma-workbar{background:#1e1810;border-bottom:1px solid #3d2e1e;padding:5px 24px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-height:28px;}
.ma-wlbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#7a6a45;}
.ma-wtag{background:#0e0b07;border:1px solid #3d2e1e;border-radius:2px;padding:2px 8px;font-size:11px;color:#c9902a;font-style:italic;}
.ma-ptag{background:#0e0b07;border:1px solid #3d2e1e;border-radius:2px;padding:2px 8px;font-size:11px;color:#9e8c72;font-style:italic;}

/* Columns */
.ma-cols{padding:14px 24px;display:flex;gap:18px;flex:1;}
.ma-lcol{flex:1;}
.ma-rcol{width:260px;flex-shrink:0;}

/* Image panel */
.ma-img-wrap{border:1px solid #3d2e1e;border-radius:4px;overflow:hidden;margin-bottom:12px;background:#111;}
.ma-img{width:100%;display:block;cursor:zoom-in;}
.ma-img-cap{padding:6px 10px;font-size:10px;font-style:italic;color:#7a6a55;background:#1a1208;border-top:1px solid #3d2e1e;}

/* Cards */
.ma-card{background:#1a1208;border:1px solid #3d2e1e;border-radius:4px;margin-bottom:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.3);}
.ma-chard{padding:6px 12px;font-family:'Cinzel',serif;font-size:8px;letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;}
.ma-cbody{padding:11px 13px;font-size:13px;line-height:1.7;color:#c8b48a;}
.ma-cbody p{white-space:pre-line;}
.ma-cbody ul{padding-left:16px;}
.ma-cbody li{margin-bottom:4px;}

/* Key question */
.ma-kq{background:#1c2a18;border-radius:6px;padding:13px 17px;margin-bottom:12px;border-left:3px solid #8b6a1a;}
.ma-kqlbl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:#c9902a;margin-bottom:5px;}
.ma-kqtxt{font-size:14px;font-style:italic;line-height:1.6;color:#e8dfc8;}

/* Comparison badge */
.ma-comp-badge{display:inline-block;background:#2a1040;border:1px solid #7a40a0;border-radius:2px;padding:3px 10px;font-family:'Cinzel',serif;font-size:9px;letter-spacing:.15em;color:#c090e0;text-transform:uppercase;margin-bottom:8px;}

/* Narration */
.ma-badge{display:inline-block;border-radius:10px;font-size:9px;padding:2px 7px;margin-bottom:5px;letter-spacing:1px;font-family:'Cinzel',serif;}
.ma-a8{background:#1a3a18;color:#8ab870;border:1px solid #3a6a30;}
.ma-a11{background:#1a2a3a;color:#7ab0d0;border:1px solid #2a4a6a;}

/* Vocab chips */
.ma-vchip{display:inline-block;background:#2a1a0a;border:1px solid #5a3a1a;border-radius:2px;padding:3px 8px;font-size:11px;color:#c9902a;font-style:italic;margin:2px;}

/* Resources */
.ma-res-hdr{padding:8px 14px;font-family:'Cinzel',serif;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#e8dfc8;background:#2d4a6a;}
.ma-res-item{padding:10px 14px;border-bottom:1px solid #2a1e10;}
.ma-res-item:last-child{border-bottom:none;}
.ma-res-link{font-size:13px;color:#7ab0d0;text-decoration:none;font-style:italic;display:block;margin-bottom:3px;}
.ma-res-link:hover{color:#b0d4f0;text-decoration:underline;}
.ma-res-note{font-size:11px;color:#9e8c72;}

/* Bottom nav */
.ma-bnav{display:flex;justify-content:space-between;align-items:center;padding:12px 24px 16px;border-top:1px solid #3d2e1e;margin-top:6px;}
.ma-nbtn{padding:7px 18px;background:#1a1208;color:#e8dfc8;border:1px solid #3d2e1e;border-radius:4px;cursor:pointer;font-size:12px;font-family:'Crimson Pro',Georgia,serif;}
.ma-nbtn:hover:not(:disabled){background:#2a1e10;border-color:#c9902a;}
.ma-nbtn:disabled{opacity:.35;cursor:default;}
.ma-ncnt{font-size:11px;color:#7a6a55;}

/* Age toggle */
.ma-age-btns{display:flex;gap:4px;}
.ma-abtn{padding:4px 11px;border-radius:12px;border:1px solid #3d2e1e;background:transparent;color:#8ab870;cursor:pointer;font-size:11px;font-family:'Crimson Pro',Georgia,serif;}
.ma-abtn.on{background:#c9902a;border-color:#c9902a;color:#fff;}

/* Lightbox */
.ma-lightbox{position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;}
.ma-lightbox img{max-width:90vw;max-height:90vh;object-fit:contain;}

@media(max-width:700px){
  .ma-cols{flex-direction:column;}
  .ma-rcol{width:100%;}
  .ma-sidebar{width:160px;}
}
`

const TYPE_COLORS = {
  'PICTURE STUDY':      '#2d4a2a',
  'HISTORY & CONTEXT':  '#2a1e3a',
  'COMPARISON':         '#2a1040',
}

// Flatten all lessons
const ALL = []
const UNIT_LAST_WK = {}
ART_UNITS.forEach(u => {
  u.lessons.forEach(l => ALL.push({ ...l, _unit: u }))
  const last = u.lessons[u.lessons.length - 1]
  if (last) UNIT_LAST_WK[u.id] = last.week
})

function groupByWeek(lessons) {
  const map = {}
  lessons.forEach(l => {
    if (!map[l.week]) map[l.week] = []
    map[l.week].push(l)
  })
  return map
}

export default function MagisterArtis() {
  const [ci, setCi] = useState(0)
  const [age, setAge] = useState('both')
  const [lightbox, setLightbox] = useState(false)

  const l = ALL[ci]
  const tc = TYPE_COLORS[l.type] || '#2a1f14'
  const weekGroups = groupByWeek(ALL)

  useEffect(() => {
    const el = document.getElementById('ma-content-scroll')
    if (el) el.scrollTop = 0
  }, [ci])

  function Sidebar() {
    const weeks = Object.keys(weekGroups).map(Number).sort((a, b) => a - b)
    let lastUnit = null
    return (
      <div className="ma-sidebar">
        {weeks.map(w => {
          const lessons = weekGroups[w]
          const unit = lessons[0]._unit
          const showUnitHdr = unit.id !== lastUnit
          if (showUnitHdr) lastUnit = unit.id
          return (
            <div key={w}>
              {showUnitHdr && (
                <div className="ma-unit-hdr">{unit.icon} {unit.title.split(':')[0]}</div>
              )}
              <div style={{fontSize:'8px',fontFamily:'Cinzel,serif',letterSpacing:'.15em',color:'#4a3a28',padding:'4px 12px 2px',textTransform:'uppercase'}}>
                Wk {w}
              </div>
              {lessons.map(lesson => {
                const i = ALL.indexOf(lesson)
                return (
                  <button key={lesson.id} className={`ma-lbtn${i === ci ? ' on' : ''}`} onClick={() => setCi(i)}>
                    <div className="ma-tp">{lesson.type === 'COMPARISON' ? '★ COMPARE' : lesson.type}</div>
                    <div>{lesson.artist.split(' ').slice(-1)[0]}: {lesson.title.length > 28 ? lesson.title.slice(0, 28) + '…' : lesson.title}</div>
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <style>{CSS}</style>
      {lightbox && (
        <div className="ma-lightbox" onClick={() => setLightbox(false)}>
          <img src={l.workUrl ? `/img?url=${encodeURIComponent(l.workUrl)}` : ""} alt={l.work} />
        </div>
      )}
      <div className="ma-root">
        <TopNav current="/magister-artis" />
        <div className="ma-body">
          <Sidebar />
          <div className="ma-content" id="ma-content-scroll">

            {/* Header */}
            <div className="ma-lhdr" style={{ background: tc }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div className="ma-meta">{l.type} · Lesson {l.id} · Week {l.week}</div>
                  <h1>{l.title}</h1>
                  {l.tagline && <div className="ma-tag">{l.tagline}</div>}
                  <div className="ma-unit-desc">{l._unit.title}</div>
                </div>
                <div className="ma-age-btns">
                  {['both', '8', '11'].map(a => (
                    <button key={a} className={`ma-abtn${age === a ? ' on' : ''}`} onClick={() => setAge(a)}>
                      {a === 'both' ? 'Both' : a === '8' ? 'Form IA' : 'Form IIA'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Artist / work bar */}
            <div className="ma-workbar">
              <span className="ma-wlbl">Artist:</span>
              <span className="ma-wtag">{l.artist}</span>
              <span className="ma-wlbl" style={{ marginLeft: 8 }}>Work:</span>
              <span className="ma-ptag" style={{ fontStyle: 'italic' }}>{l.work}</span>
              <span className="ma-ptag">{l.period}</span>
            </div>

            <div className="ma-cols">
              <div className="ma-lcol">

                {/* Painting image */}
                {l.workUrl && (
                  <div className="ma-img-wrap">
                    <img className="ma-img" src={l.workUrl ? `/img?url=${encodeURIComponent(l.workUrl)}` : ""} alt={l.work} onClick={() => setLightbox(true)} title="Click to enlarge" />
                    <div className="ma-img-cap">{l.work} — {l.artist} · Click to enlarge</div>
                  </div>
                )}

                {/* Comparison badge */}
                {l.type === 'COMPARISON' && (
                  <div className="ma-comp-badge">★ Comparison Week</div>
                )}

                {/* Opening */}
                {l.opening && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: tc }}>Context</div>
                    <div className="ma-cbody"><p>{l.opening}</p></div>
                  </div>
                )}

                {/* Key question */}
                {l.kq && (
                  <div className="ma-kq">
                    <div className="ma-kqlbl">Key Question · Picture Study</div>
                    <div className="ma-kqtxt">{l.kq}</div>
                  </div>
                )}

                {/* Activity */}
                {l.activity && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: tc }}>{l.activity.label}</div>
                    <div className="ma-cbody"><p>{l.activity.text}</p></div>
                  </div>
                )}

                {/* Discussion */}
                {l.disc && l.disc.length > 0 && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: tc }}>Discussion Questions</div>
                    <div className="ma-cbody">
                      <ul>{l.disc.map((q, i) => <li key={i}>{q}</li>)}</ul>
                    </div>
                  </div>
                )}

              </div>

              <div className="ma-rcol">

                {/* Narration */}
                {(((age === 'both' || age === '8') && l.narration8) || ((age === 'both' || age === '11') && l.narration11)) && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: '#1a1208', borderBottom: '1px solid #3d2e1e' }}>Narration</div>
                    {(age === 'both' || age === '8') && l.narration8 && (
                      <div style={{ padding: '10px 12px', borderBottom: age === 'both' && l.narration11 ? '1px solid #2a1e10' : 'none' }}>
                        <span className="ma-badge ma-a8">Form IA · Oral</span>
                        <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#9e8c72', lineHeight: 1.6 }}>{l.narration8}</p>
                      </div>
                    )}
                    {(age === 'both' || age === '11') && l.narration11 && (
                      <div style={{ padding: '10px 12px' }}>
                        <span className="ma-badge ma-a11">Form IIA · Written</span>
                        <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#9e8c72', lineHeight: 1.6 }}>{l.narration11}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Vocabulary */}
                {l.vocab && l.vocab.length > 0 && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: '#2a1a0a' }}>Vocabulary</div>
                    <div className="ma-cbody">
                      {l.vocab.map(v => <span key={v} className="ma-vchip">{v}</span>)}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {l.resources && l.resources.length > 0 && (
                  <div className="ma-card">
                    <div className="ma-res-hdr">Resources & Image Sources</div>
                    {l.resources.map((r, i) => (
                      <div key={i} className="ma-res-item">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="ma-res-link">{r.lbl}</a>
                        {r.note && <div className="ma-res-note">{r.note}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Teacher notes */}
                {(l.watchFor || (l.digDeeper && (age === 'both' || age === '11'))) && (
                  <div className="ma-card">
                    <div className="ma-chard" style={{ background: '#2a1608' }}>Teacher Notes</div>
                    {l.watchFor && (
                      <div style={{ padding: '10px 12px', background: '#1e1408', borderBottom: l.digDeeper ? '1px solid #2a1e10' : 'none' }}>
                        <div style={{ fontFamily: 'Cinzel,serif', fontSize: '8px', letterSpacing: '.1em', color: '#8a5a1a', marginBottom: 4, textTransform: 'uppercase' }}>Watch For</div>
                        <p style={{ fontSize: '12px', color: '#9e8c72', lineHeight: 1.6 }}>{l.watchFor}</p>
                      </div>
                    )}
                    {l.digDeeper && (age === 'both' || age === '11') && (
                      <div style={{ padding: '10px 12px', background: '#141828' }}>
                        <div style={{ fontFamily: 'Cinzel,serif', fontSize: '8px', letterSpacing: '.1em', color: '#4a6a9a', marginBottom: 4, textTransform: 'uppercase' }}>Dig Deeper · Form IIA</div>
                        <p style={{ fontSize: '12px', color: '#9e8c72', lineHeight: 1.6 }}>{l.digDeeper}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Teacher prep */}
                {l.teacherPrep && (
                  <div style={{ background: '#1a1508', borderLeft: '4px solid #c9902a', padding: '9px 13px', borderRadius: '0 4px 4px 0', marginBottom: 10 }}>
                    <div style={{ fontFamily: 'Cinzel,serif', fontSize: '8px', letterSpacing: '.15em', color: '#c9902a', marginBottom: 3, textTransform: 'uppercase' }}>Teacher Preparation</div>
                    <div style={{ fontSize: '12px', color: '#c8a870' }}>{l.teacherPrep}</div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom nav */}
            <div className="ma-bnav">
              <button className="ma-nbtn" disabled={ci === 0} onClick={() => setCi(ci - 1)}>← Previous</button>
              <span className="ma-ncnt">Lesson {ci + 1} of {ALL.length}</span>
              <button className="ma-nbtn" disabled={ci === ALL.length - 1} onClick={() => setCi(ci + 1)}>Next →</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
