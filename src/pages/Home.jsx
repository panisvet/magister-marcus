import { useState } from 'react';
import TopNav from '../components/TopNav.jsx';

const PASSWORD = 'deus_caritas_est';

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400;1,600&family=IM+Fell+English:ital@0;1&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}
body{background:#0a0804;overflow-x:hidden;}

/* ── Main page ── */
.hp-root{
  min-height:100vh;padding-top:40px;font-family:'Crimson Pro',Georgia,serif;color:#f7edcc;
  background:#0a0804;
  background-image:radial-gradient(ellipse 70% 50% at 20% 10%,#2a1a0833,transparent),
    radial-gradient(ellipse 60% 70% at 80% 90%,#1a0e0433,transparent);
  position:relative;overflow:hidden;
}
.hp-root::before{
  content:'';position:fixed;inset:0;z-index:0;opacity:.025;
  background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9902a'%3E%3Cpath d='M0 0h8v8H0zm16 0h8v8h-8zm32 0h8v8h-8zm-16 16h8v8h-8zm32 0h8v8h-8zM0 16h8v8H0zm32 16h8v8h-8zm-16 16h8v8h-8zm32 0h8v8h-8zM0 32h8v8H0z'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events:none;
}
.hp-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 32px 80px;}
.hp-header{text-align:center;padding:36px 0 44px;border-bottom:1px solid #c9902a22;margin-bottom:52px;}
.hp-crest{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:18px;}
.hp-laurel{width:56px;opacity:.8;}
.hp-laurel.flip{transform:scaleX(-1);}
.hp-school-name{font-family:'Cinzel Decorative',serif;font-size:clamp(1.6rem,4vw,2.6rem);color:#e8b84b;letter-spacing:.06em;text-shadow:0 0 30px rgba(232,184,75,.35);line-height:1.1;}
.hp-school-sub{font-family:'IM Fell English',serif;font-style:italic;font-size:1.05rem;color:#9e8c72;margin-top:6px;letter-spacing:.06em;}
.hp-divider{width:280px;height:1px;background:linear-gradient(90deg,transparent,#c9902a,transparent);margin:20px auto 0;}
.hp-motto{font-family:'IM Fell English',serif;font-style:italic;font-size:.92rem;color:#9e8c7288;margin-top:14px;letter-spacing:.08em;}

.hp-section-label{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.25em;color:#9e8c72;text-transform:uppercase;margin-bottom:22px;}
.hp-section-divider{border:none;border-top:1px solid #c9902a18;margin:44px 0 40px;}

/* Subject cards */
.hp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-bottom:52px;}
.hp-card{
  background:linear-gradient(135deg,#1e160f,#14100700);border:1px solid #c9902a2a;border-radius:3px;
  padding:24px 22px 22px;cursor:pointer;transition:all .22s;text-decoration:none;display:block;position:relative;overflow:hidden;
}
.hp-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#c9902a0a,transparent);opacity:0;transition:opacity .22s;}
.hp-card:hover{border-color:#c9902a66;transform:translateY(-2px);box-shadow:0 8px 32px rgba(14,11,7,.6),0 0 0 1px #c9902a22;}
.hp-card:hover::before{opacity:1;}
.hp-card.coming-soon{opacity:.45;cursor:default;}
.hp-card.coming-soon:hover{transform:none;box-shadow:none;}
.hp-card-accent{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--accent,#c9902a),transparent);opacity:.7;}
.hp-card-icon{font-size:2rem;margin-bottom:12px;display:block;filter:drop-shadow(0 0 8px rgba(201,144,42,.3));}
.hp-card-title{font-family:'Cinzel',serif;font-size:.92rem;letter-spacing:.12em;color:#e8b84b;text-transform:uppercase;margin-bottom:4px;}
.hp-card-subtitle{font-family:'IM Fell English',serif;font-style:italic;font-size:.88rem;color:#9e8c72;margin-bottom:10px;}
.hp-card-desc{font-size:.95rem;color:#ede0b088;line-height:1.6;}
.hp-card-tag{display:inline-block;margin-top:12px;font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;padding:3px 9px;border-radius:1px;border:1px solid;}
.hp-card-tag.active{color:#5a7a4a;border-color:#5a7a4a55;background:#5a7a4a11;}
.hp-card-tag.soon{color:#9e8c72;border-color:#9e8c7233;}
.hp-card-arrow{position:absolute;bottom:18px;right:18px;font-size:.8rem;color:#c9902a55;transition:all .2s;}
.hp-card:hover .hp-card-arrow{color:#c9902a;transform:translateX(3px);}

/* ── Game cards — parchment world ── */
.hp-games-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(460px,1fr));gap:24px;margin-bottom:52px;}

.game-card{
  display:flex;text-decoration:none;
  position:relative;overflow:hidden;border-radius:3px;
  border:1px solid #7a3a1a44;
  transition:all .25s;
  cursor:pointer;
}
/* parchment inner glow */
.game-card::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 80% 60% at 30% 40%, #2e1a0a55, transparent);
  transition:opacity .25s;opacity:1;pointer-events:none;z-index:0;
}
.game-card:hover{
  border-color:#8b3a1a88;
  transform:translateY(-2px);
  box-shadow:0 10px 40px rgba(8,4,2,.7), 0 0 0 1px #7a3a1a33;
}

/* crimson top accent */
.game-card-accent{
  position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,#8b2020,#c9902a,#8b2020,transparent);
  opacity:.8;z-index:2;
}

/* left: warm parchment panel */
.game-card-art{
  flex:0 0 130px;
  background:linear-gradient(160deg,#2a1608,#1a0d05);
  display:flex;align-items:center;justify-content:center;
  padding:24px 16px;
  position:relative;z-index:1;
  border-right:1px solid #7a3a1a22;
}
.game-card-art::after{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at center,#c9902a0a,transparent 70%);
}

/* SPQR scroll SVG */
.game-scroll-icon{width:64px;height:64px;opacity:.9;filter:drop-shadow(0 2px 8px rgba(139,32,32,.4));}

/* right: content */
.game-card-body{
  flex:1;padding:22px 24px 20px;
  background:linear-gradient(135deg,#1a0e07,#0f0904);
  position:relative;z-index:1;
}
.game-card-eyebrow{
  font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.28em;
  color:#8b2020aa;text-transform:uppercase;margin-bottom:6px;
}
.game-card-title{
  font-family:'Cinzel',serif;font-size:1.05rem;letter-spacing:.08em;
  color:#e8c87a;text-transform:uppercase;margin-bottom:4px;
  text-shadow:0 0 20px rgba(232,184,75,.2);
}
.game-card-subtitle{
  font-family:'IM Fell English',serif;font-style:italic;
  font-size:.9rem;color:#9e7a5a;margin-bottom:10px;
}
.game-card-desc{font-size:.93rem;color:#ede0b077;line-height:1.6;margin-bottom:14px;}

.game-card-footer{display:flex;align-items:center;justify-content:space-between;}
.game-card-badge{
  font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.15em;text-transform:uppercase;
  padding:3px 9px;border-radius:1px;
  color:#8b2020;border:1px solid #8b202044;background:#8b20200d;
}
.game-card-play{
  font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;
  color:#c9902a;display:flex;align-items:center;gap:6px;
  transition:all .2s;
}
.game-card:hover .game-card-play{color:#e8b84b;gap:10px;}
.game-card-play-arrow{font-size:.9rem;}

.hp-footer{border-top:1px solid #c9902a18;padding-top:28px;text-align:center;}
.hp-footer-text{font-family:'IM Fell English',serif;font-style:italic;font-size:.85rem;color:#9e8c7255;letter-spacing:.06em;}
/* Password gate */
.pw-root{min-height:100vh;background:#0a0804;background-image:radial-gradient(ellipse 70% 50% at 20% 10%,#2a1a0833,transparent),radial-gradient(ellipse 60% 70% at 80% 90%,#1a0e0433,transparent);display:flex;align-items:center;justify-content:center;font-family:'Crimson Pro',Georgia,serif;color:#f7edcc;}
.pw-box{text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px;padding:48px 40px;background:linear-gradient(135deg,#1e160f,#14100700);border:1px solid #c9902a2a;border-radius:3px;min-width:300px;}
.pw-crest{font-size:2.4rem;margin-bottom:4px;}
.pw-title{font-family:'Cinzel Decorative',serif;font-size:1.3rem;color:#e8b84b;letter-spacing:.06em;text-shadow:0 0 24px rgba(232,184,75,.3);}
.pw-sub{font-family:'IM Fell English',serif;font-style:italic;font-size:.9rem;color:#9e8c72;}
.pw-divider{width:200px;height:1px;background:linear-gradient(90deg,transparent,#c9902a,transparent);margin:4px 0;}
.pw-input{width:100%;padding:10px 14px;font-family:'Crimson Pro',Georgia,serif;font-size:1rem;background:#0f0a05;color:#f7edcc;border:1px solid #c9902a44;border-radius:2px;outline:none;transition:border-color .2s;}
.pw-input:focus{border-color:#c9902a99;}
.pw-input.error{border-color:#8b3a3a;}
.pw-error{font-family:'IM Fell English',serif;font-style:italic;font-size:.85rem;color:#8b3a3a;}
.pw-btn{width:100%;padding:10px 0;font-family:'Cinzel',serif;font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;background:transparent;color:#c9902a;border:1px solid #c9902a55;border-radius:2px;cursor:pointer;transition:all .2s;}
.pw-btn:hover{background:#c9902a18;border-color:#c9902a99;}

.hp-build-btn{background:none;border:none;cursor:pointer;font-family:monospace;font-size:.7rem;color:#9e8c7233;letter-spacing:.04em;padding:0;transition:color .2s;}
.hp-build-btn:hover{color:#9e8c7288;}

/* Release notes modal */
.rn-overlay{position:fixed;inset:0;z-index:500;background:rgba(8,5,2,.75);display:flex;align-items:center;justify-content:center;padding:24px;}
.rn-box{background:linear-gradient(135deg,#1e160f,#140e07);border:1px solid #c9902a44;border-radius:4px;max-width:480px;width:100%;max-height:80vh;overflow-y:auto;box-shadow:0 16px 60px rgba(0,0,0,.7);}
.rn-hdr{display:flex;align-items:baseline;justify-content:space-between;padding:16px 20px 12px;border-bottom:1px solid #c9902a22;}
.rn-title{font-family:'Cinzel',serif;font-size:.8rem;letter-spacing:.18em;color:#e8b84b;text-transform:uppercase;}
.rn-close{background:none;border:none;cursor:pointer;font-size:1.1rem;color:#9e8c72;line-height:1;padding:0;}
.rn-close:hover{color:#e8dfc8;}
.rn-body{padding:16px 20px 20px;}
.rn-date{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.15em;color:#c9902a;text-transform:uppercase;margin-bottom:10px;}
.rn-section{margin-bottom:14px;}
.rn-section-title{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.12em;color:#9e8c72;text-transform:uppercase;margin-bottom:6px;}
.rn-item{font-size:.88rem;color:#c8b48a;line-height:1.7;padding-left:12px;position:relative;}
.rn-item::before{content:'·';position:absolute;left:0;color:#c9902a;}
.rn-hash{font-family:monospace;font-size:.72rem;color:#9e8c7266;margin-top:14px;padding-top:12px;border-top:1px solid #c9902a14;}

@media(max-width:700px){
  .hp-inner{padding:0 16px 60px;}
  .hp-header{padding:40px 0 36px;margin-bottom:36px;}
  .hp-grid{grid-template-columns:1fr;}
  .hp-games-grid{grid-template-columns:1fr;}
  .game-card-art{flex:0 0 90px;}
  .game-card-title{font-size:.88rem;}
}
`;

const TOOLS = [
  {
    id: 'latin',
    icon: '🏛',
    title: 'Magister Marcus',
    subtitle: 'Via Latina — The Latin Way',
    desc: 'Read Caesar, Virgil, Cicero, and the Vulgate. Classical pronunciation, pronunciation drills, and 4 student profiles.',
    accent: '#c9902a',
    href: '/latin',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'natura',
    icon: '🌿',
    title: 'Magister Natura',
    subtitle: 'Natural History & Science',
    desc: 'Fabre, Buckley, Comstock, and Seton. Insects, plants, ecology, and the living world — with an AI tutor who observes before naming.',
    accent: '#5a7a4a',
    href: '/magister-natura',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'lesson-viewer',
    icon: '📖',
    title: 'Wonders of the Created World',
    subtitle: 'Lesson Viewer · Units 1–7',
    desc: 'All lessons across Units 1–7. Lesson plans, narration prompts, nature journal instructions, spine links, and vocabulary — with Form IA / Form IIA toggle.',
    accent: '#5a7a4a',
    href: '/lesson-viewer',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'schola-cantorum',
    icon: '🎵',
    title: 'Schola Cantorum Domestica',
    subtitle: 'Sacred Music & Solfège',
    desc: 'A two-year course in sacred music and solfège. Ladukhin exercises, saint stories, opening rituals, and Form IA / Form IIA differentiation across 72 lessons.',
    accent: '#a070d0',
    href: '/schola-cantorum',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'chant-master',
    icon: '🎼',
    title: 'Chant Master',
    subtitle: 'Schola Cantorum Domestica · Practice Tool',
    desc: 'Interactive chant practice and pronunciation companion — sister to Schola Cantorum Domestica.',
    accent: '#a070d0',
    href: '/chant-master-fixed.html',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'regent-nikolay',
    icon: '🪶',
    title: 'Regent Nikolay',
    subtitle: 'Регент Николай · Choral Tutor',
    desc: 'A Russian Orthodox choir director who teaches the eight tones, Obikhod chant, and solfège. Chat with him, load a score, hear your starting pitch.',
    accent: '#1A3A5C',
    href: '/regent-nikolay',
    status: 'active',
    tag: 'Active',
  },
  {
    id: 'math',
    icon: '📐',
    title: 'Magister Historia',
    subtitle: 'The American Founding',
    desc: 'Self-government, the Declaration of Independence, the War of Independence, and the Constitution — with Stories for the Heart, narration prompts, and Form IA / Form IIA differentiation.',
    accent: '#4a7a9b',
    href: '/history',
    status: 'active',
    tag: 'Active',
  },
  {
    { id: 'art-history', icon: '🎨', title: 'Magister Artis', subtitle: 'Art History · 1492–1900', desc: 'Renaissance to Impressionism — artists, periods, and techniques with an AI tutor who asks as much as he tells.', accent: '#9b6a2a', href: '/magister-artis', status: 'active', tag: 'Active' },
  { id: 'history',
    icon: '⚖️',
    title: 'Coming Soon',
    subtitle: 'History & Geography',
    desc: 'A future tool for this subject.',
    accent: '#7a4a9b',
    href: null,
    status: 'soon',
    tag: 'Coming Soon',
  },
  {
    id: 'writing',
    icon: '✍️',
    title: 'Coming Soon',
    subtitle: 'Composition & Rhetoric',
    desc: 'A future tool for this subject.',
    accent: '#4a9b6a',
    href: null,
    status: 'soon',
    tag: 'Coming Soon',
  },
];

const GAMES = [
  {
    id: 'marcus-messenger',
    eyebrow: 'An Educational Adventure',
    title: 'Marcus and the Lost Scroll',
    subtitle: 'Roman Numerals · Ages 8–12',
    desc: 'A young messenger in ancient Rome must learn the secret of Roman numerals to deliver a mysterious scroll to the Emperor.',
    href: 'https://marcus-the-messenger.ctso.workers.dev',
    badge: 'Game · Opens in new tab',
  },
];

export default function Home() {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem('schola-auth') === '1'
  );
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  function check() {
    if (input === PASSWORD) {
      localStorage.setItem('schola-auth', '1');
      setUnlocked(true);
    } else {
      setError(true);
      setInput('');
    }
  }

  if (!unlocked) {
    return (
      <>
        <style>{STYLES}</style>
        <div className="pw-root">
          <div className="pw-box">
            <div className="pw-crest">🏛️</div>
            <div className="pw-title">Schola Domestica</div>
            <div className="pw-sub">Classical Homeschool · AI-Powered Instruction</div>
            <div className="pw-divider"/>
            <input
              className={`pw-input${error ? ' error' : ''}`}
              type="password"
              placeholder="Enter password"
              value={input}
              autoFocus
              onChange={e => { setInput(e.target.value); setError(false); }}
              onKeyDown={e => e.key === 'Enter' && check()}
            />
            {error && <div className="pw-error">Incorrect password — try again</div>}
            <button className="pw-btn" onClick={check}>Enter</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="hp-root">
        <TopNav current="/"/>
        <div className="hp-inner">

          <header className="hp-header">
            <div className="hp-crest">
              <LaurelSvg/>
              <div><div className="hp-school-name">Schola Domestica</div></div>
              <LaurelSvg flip/>
            </div>
            <div className="hp-school-sub">Classical Homeschool · AI-Powered Instruction</div>
            <div className="hp-divider"/>
            <div className="hp-motto">Non scholae sed vitae discimus · We learn not for school but for life</div>
          </header>

          <div className="hp-section-label">Disciplinae · Subjects</div>
          <div className="hp-grid">
            {TOOLS.map(t => <ToolCard key={t.id} tool={t}/>)}
          </div>

          <hr className="hp-section-divider"/>

          <div className="hp-section-label">Ludi · Games</div>
          <div className="hp-games-grid">
            {GAMES.map(g => <GameCard key={g.id} game={g}/>)}
          </div>

          <footer className="hp-footer">
            <div className="hp-footer-text">
              Omnia, Lucili, aliena sunt, tempus tantum nostrum est.
            </div>
            <div style={{marginTop:'10px'}}>
              <button className="hp-build-btn" onClick={() => setShowNotes(true)}>
                {__BUILD_DATE__} · build {__BUILD_HASH__}
              </button>
            </div>
          </footer>
          {showNotes && <ReleaseNotes onClose={() => setShowNotes(false)}/>}

        </div>
      </div>
    </>
  );
}

function GameCard({ game }) {
  return (
    <a className="game-card" href={game.href} target="_blank" rel="noopener noreferrer">
      <div className="game-card-accent"/>
      <div className="game-card-art">
        <SpqrScrollSvg/>
      </div>
      <div className="game-card-body">
        <div className="game-card-eyebrow">{game.eyebrow}</div>
        <div className="game-card-title">{game.title}</div>
        <div className="game-card-subtitle">{game.subtitle}</div>
        <div className="game-card-desc">{game.desc}</div>
        <div className="game-card-footer">
          <span className="game-card-badge">{game.badge}</span>
          <span className="game-card-play">
            Play the Game <span className="game-card-play-arrow">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

function SpqrScrollSvg() {
  return (
    <svg className="game-scroll-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* scroll rollers */}
      <rect x="6" y="14" width="52" height="36" rx="3" fill="#3a1a08" stroke="#8b4a1a" strokeWidth="1.2"/>
      <rect x="4" y="12" width="8" height="40" rx="4" fill="#5a2a10" stroke="#a0561e" strokeWidth="1"/>
      <rect x="52" y="12" width="8" height="40" rx="4" fill="#5a2a10" stroke="#a0561e" strokeWidth="1"/>
      {/* parchment lines */}
      <line x1="16" y1="24" x2="48" y2="24" stroke="#8b6a3a" strokeWidth=".8" opacity=".6"/>
      <line x1="16" y1="29" x2="48" y2="29" stroke="#8b6a3a" strokeWidth=".8" opacity=".6"/>
      <line x1="16" y1="34" x2="48" y2="34" stroke="#8b6a3a" strokeWidth=".8" opacity=".6"/>
      <line x1="16" y1="39" x2="40" y2="39" stroke="#8b6a3a" strokeWidth=".8" opacity=".6"/>
      {/* SPQR text */}
      <text x="32" y="33" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#c9902a" letterSpacing="2" fontWeight="bold">SPQR</text>
    </svg>
  );
}

function ToolCard({tool}) {
  const isActive = tool.status === 'active';
  const Tag = isActive ? 'a' : 'div';
  const props = isActive ? {href: tool.href} : {};

  return (
    <Tag className={`hp-card${isActive ? '' : ' coming-soon'}`} {...props}>
      <div className="hp-card-accent" style={{'--accent': tool.accent}}/>
      <span className="hp-card-icon">{tool.icon}</span>
      <div className="hp-card-title">{tool.title}</div>
      <div className="hp-card-subtitle">{tool.subtitle}</div>
      <div className="hp-card-desc">{tool.desc}</div>
      <span className={`hp-card-tag ${tool.status}`}>{tool.tag}</span>
      {isActive && <span className="hp-card-arrow">→</span>}
    </Tag>
  );
}

function ReleaseNotes({ onClose }) {
  return (
    <div className="rn-overlay" onClick={onClose}>
      <div className="rn-box" onClick={e => e.stopPropagation()}>
        <div className="rn-hdr">
          <span className="rn-title">Release Notes</span>
          <button className="rn-close" onClick={onClose}>✕</button>
        </div>
        <div className="rn-body">
          <div className="rn-date">{__BUILD_DATE__}</div>

          <div className="rn-section">
            <div className="rn-section-title">Security</div>
            <div className="rn-item">API locked to allowlisted origins only — no wildcard CORS</div>
            <div className="rn-item">Model pinned server-side; client can no longer override it</div>
            <div className="rn-item">Rate limiting: 20 requests / 10 s per IP via Cloudflare binding</div>
            <div className="rn-item">XSS: model output escaped before <code>dangerouslySetInnerHTML</code></div>
            <div className="rn-item">Password gate removed — site is now open</div>
          </div>

          <div className="rn-section">
            <div className="rn-section-title">Lesson Viewer</div>
            <div className="rn-item">Form IA / Form IIA toggle added to lesson header</div>
            <div className="rn-item">Resources card added to right column — links to spines, videos, and reference pages</div>
          </div>

          <div className="rn-section">
            <div className="rn-section-title">Bug Fixes</div>
            <div className="rn-item">Welcome message fires exactly once per student tab</div>
            <div className="rn-item">TTS speed slider now persists when navigating between students</div>
            <div className="rn-item">Removed stale <code>history</code> state and redundant API call logic</div>
            <div className="rn-item">Browser globals guarded for future SSR / test compatibility</div>
            <div className="rn-item">404 catch-all route added; unknown paths now load home</div>
          </div>

          <div className="rn-hash">build {__BUILD_HASH__}</div>
        </div>
      </div>
    </div>
  );
}

function LaurelSvg({flip}) {
  return (
    <svg className={`hp-laurel${flip?' flip':''}`} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38 Q22 8 45 5" stroke="#4a6741" strokeWidth="2" fill="none"/>
      <ellipse cx="16" cy="28" rx="8" ry="4.5" fill="#4a6741" transform="rotate(-35 16 28)" opacity=".9"/>
      <ellipse cx="26" cy="19" rx="8" ry="4.5" fill="#5a7a4a" transform="rotate(-22 26 19)" opacity=".9"/>
      <ellipse cx="36" cy="12" rx="8" ry="4.5" fill="#4a6741" transform="rotate(-10 36 12)" opacity=".9"/>
      <ellipse cx="46" cy="8"  rx="7" ry="4"   fill="#5a7a4a" transform="rotate(-2 46 8)"   opacity=".85"/>
    </svg>
  );
}
