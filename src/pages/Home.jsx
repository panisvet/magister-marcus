import TopNav from '../components/TopNav.jsx';

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400;1,600&family=IM+Fell+English:ital@0;1&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}
body{background:#0a0804;overflow-x:hidden;}

.hp-root{
  min-height:100vh;
  padding-top:40px;
  font-family:'Crimson Pro',Georgia,serif;
  color:#f7edcc;
  background:#0a0804;
  background-image:
    radial-gradient(ellipse 70% 50% at 20% 10%, #2a1a0833, transparent),
    radial-gradient(ellipse 60% 70% at 80% 90%, #1a0e0433, transparent);
  position:relative;
  overflow:hidden;
}

/* Mosaic texture */
.hp-root::before{
  content:'';position:fixed;inset:0;z-index:0;opacity:.025;
  background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9902a'%3E%3Cpath d='M0 0h8v8H0zm16 0h8v8h-8zm32 0h8v8h-8zm-16 16h8v8h-8zm32 0h8v8h-8zM0 16h8v8H0zm32 16h8v8h-8zm-16 16h8v8h-8zm32 0h8v8h-8zM0 32h8v8H0z'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events:none;
}

.hp-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 32px 80px;}

/* Header */
.hp-header{
  text-align:center;
  padding:36px 0 44px;
  border-bottom:1px solid #c9902a22;
  margin-bottom:52px;
}
.hp-crest{
  display:flex;align-items:center;justify-content:center;gap:20px;
  margin-bottom:18px;
}
.hp-laurel{width:56px;opacity:.8;}
.hp-laurel.flip{transform:scaleX(-1);}
.hp-school-name{
  font-family:'Cinzel Decorative',serif;
  font-size:clamp(1.6rem,4vw,2.6rem);
  color:#e8b84b;
  letter-spacing:.06em;
  text-shadow:0 0 30px rgba(232,184,75,.35);
  line-height:1.1;
}
.hp-school-sub{
  font-family:'IM Fell English',serif;
  font-style:italic;
  font-size:1.05rem;
  color:#9e8c72;
  margin-top:6px;
  letter-spacing:.06em;
}
.hp-divider{
  width:280px;height:1px;
  background:linear-gradient(90deg,transparent,#c9902a,transparent);
  margin:20px auto 0;
}
.hp-motto{
  font-family:'IM Fell English',serif;
  font-style:italic;
  font-size:.92rem;
  color:#9e8c7288;
  margin-top:14px;
  letter-spacing:.08em;
}

/* Section label */
.hp-section-label{
  font-family:'Cinzel',serif;
  font-size:.62rem;
  letter-spacing:.25em;
  color:#9e8c72;
  text-transform:uppercase;
  margin-bottom:22px;
}

/* Tool grid */
.hp-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:20px;
  margin-bottom:52px;
}

/* Tool card */
.hp-card{
  background:linear-gradient(135deg,#1e160f,#14100700);
  border:1px solid #c9902a2a;
  border-radius:3px;
  padding:24px 22px 22px;
  cursor:pointer;
  transition:all .22s;
  text-decoration:none;
  display:block;
  position:relative;
  overflow:hidden;
}
.hp-card::before{
  content:'';
  position:absolute;inset:0;
  background:linear-gradient(135deg,#c9902a0a,transparent);
  opacity:0;transition:opacity .22s;
}
.hp-card:hover{
  border-color:#c9902a66;
  transform:translateY(-2px);
  box-shadow:0 8px 32px rgba(14,11,7,.6), 0 0 0 1px #c9902a22;
}
.hp-card:hover::before{opacity:1;}
.hp-card.coming-soon{opacity:.45;cursor:default;}
.hp-card.coming-soon:hover{transform:none;box-shadow:none;}

.hp-card-accent{
  position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--accent,#c9902a),transparent);
  opacity:.7;
}
.hp-card-icon{
  font-size:2rem;margin-bottom:12px;display:block;
  filter:drop-shadow(0 0 8px rgba(201,144,42,.3));
}
.hp-card-title{
  font-family:'Cinzel',serif;
  font-size:.92rem;letter-spacing:.12em;
  color:#e8b84b;text-transform:uppercase;
  margin-bottom:4px;
}
.hp-card-subtitle{
  font-family:'IM Fell English',serif;
  font-style:italic;font-size:.88rem;
  color:#9e8c72;margin-bottom:10px;
}
.hp-card-desc{
  font-size:.95rem;color:#ede0b088;
  line-height:1.6;
}
.hp-card-tag{
  display:inline-block;margin-top:12px;
  font-family:'Cinzel',serif;font-size:.55rem;
  letter-spacing:.15em;text-transform:uppercase;
  padding:3px 9px;border-radius:1px;
  border:1px solid;
}
.hp-card-tag.active{color:#5a7a4a;border-color:#5a7a4a55;background:#5a7a4a11;}
.hp-card-tag.soon{color:#9e8c72;border-color:#9e8c7233;}

.hp-card-arrow{
  position:absolute;bottom:18px;right:18px;
  font-size:.8rem;color:#c9902a55;
  transition:all .2s;
}
.hp-card:hover .hp-card-arrow{color:#c9902a;transform:translateX(3px);}

/* Footer */
.hp-footer{
  border-top:1px solid #c9902a18;
  padding-top:28px;text-align:center;
}
.hp-footer-text{
  font-family:'IM Fell English',serif;font-style:italic;
  font-size:.85rem;color:#9e8c7255;
  letter-spacing:.06em;
}

@media(max-width:600px){
  .hp-inner{padding:0 16px 60px;}
  .hp-header{padding:40px 0 36px;margin-bottom:36px;}
  .hp-grid{grid-template-columns:1fr;}
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
    id: 'math',
    icon: '📐',
    title: 'Coming Soon',
    subtitle: 'Mathematics',
    desc: 'A future tool for this subject.',
    accent: '#4a7a9b',
    href: null,
    status: 'soon',
    tag: 'Coming Soon',
  },
  {
    id: 'history',
    icon: '🗺',
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

export default function Home() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="hp-root">
        <TopNav current="/"/>
        <div className="hp-inner">

          <header className="hp-header">
            <div className="hp-crest">
              <LaurelSvg/>
              <div>
                <div className="hp-school-name">Schola Domestica</div>
              </div>
              <LaurelSvg flip/>
            </div>
            <div className="hp-school-sub">Classical Homeschool · AI-Powered Instruction</div>
            <div className="hp-divider"/>
            <div className="hp-motto">Non scholae sed vitae discimus · We learn not for school but for life</div>
          </header>

          <div className="hp-section-label">Disciplinae · Subjects</div>
          <div className="hp-grid">
            {TOOLS.map(t => (
              <ToolCard key={t.id} tool={t}/>
            ))}
          </div>

          <footer className="hp-footer">
            <div className="hp-footer-text">
              Omnia, Lucili, aliena sunt, tempus tantum nostrum est.
            </div>
          </footer>

        </div>
      </div>
    </>
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
