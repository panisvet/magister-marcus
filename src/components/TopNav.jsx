const NAV_STYLES = `
.sch-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 999;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: linear-gradient(180deg, #0e0b07ee, #0e0b07cc);
  border-bottom: 1px solid #c9902a33;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.sch-nav-home {
  font-family: 'Cinzel', serif;
  font-size: .68rem;
  letter-spacing: .18em;
  color: #e8b84b;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color .15s;
  white-space: nowrap;
}
.sch-nav-home:hover { color: #f5d070; }
.sch-nav-home-icon {
  font-size: .9rem;
  opacity: .85;
}
.sch-nav-subjects {
  display: flex;
  align-items: center;
  gap: 6px;
}
.sch-nav-pill {
  font-family: 'Cinzel', serif;
  font-size: .58rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 1px;
  border: 1px solid #c9902a44;
  color: #9e8c72;
  text-decoration: none;
  transition: all .15s;
  white-space: nowrap;
}
.sch-nav-pill:hover {
  border-color: #c9902a99;
  color: #e8b84b;
  background: #c9902a11;
}
.sch-nav-pill.active {
  border-color: #e8b84b;
  color: #e8b84b;
  background: #c9902a18;
}
/* Push page content down so nav doesn't overlap */
.sch-nav-offset { padding-top: 40px; }
`;

// Single source of truth for active subjects.
// Add entries here as new subjects go live.
const ACTIVE_SUBJECTS = [
  { label: 'Latin',   href: '/latin'           },
  { label: 'Natura',  href: '/magister-natura' },
  { label: 'Lessons', href: '/lesson-viewer'   },
  // { label: 'Math',    href: '/math'    },
  // { label: 'History', href: '/history' },
];

export default function TopNav({ current }) {
  const path = current || (typeof window !== 'undefined' ? window.location.pathname : '');
  return (
    <>
      <style>{NAV_STYLES}</style>
      <nav className="sch-nav">
        <a href="/" className="sch-nav-home">
          <span className="sch-nav-home-icon">🏛</span>
          Schola Domestica
        </a>
        <div className="sch-nav-subjects">
          {ACTIVE_SUBJECTS.map(s => (
            <a
              key={s.href}
              href={s.href}
              className={`sch-nav-pill${path.startsWith(s.href) ? ' active' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
