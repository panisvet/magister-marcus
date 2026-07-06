// PageLayout — classical manuscript frame for all Via Latina pages
// A fixed gold border + corner brackets wrap the viewport.
// The header carries the wordmark and page-level navigation.
// Content scrolls freely inside.

import { Link } from 'react-router-dom'

// ── Ornamental SVG pieces ──────────────────────────────────────────────────

// Corner bracket: two lines meeting at a right angle with a diamond at the joint
const CornerBracket = ({ flip = false, flipY = false }) => (
  <svg
    width="52" height="52" viewBox="0 0 52 52" fill="none"
    style={{ transform: `scale(${flip ? -1 : 1}, ${flipY ? -1 : 1})` }}
    aria-hidden="true"
  >
    {/* Outer arm — heavier */}
    <line x1="4" y1="4" x2="48" y2="4" stroke="#e8b84b" strokeWidth="1.5" strokeOpacity="0.7" />
    <line x1="4" y1="4" x2="4"  y2="48" stroke="#e8b84b" strokeWidth="1.5" strokeOpacity="0.7" />
    {/* Inner parallel — creates the double-rule classical frame look */}
    <line x1="8" y1="8" x2="36" y2="8" stroke="#c9902a" strokeWidth="0.75" strokeOpacity="0.45" />
    <line x1="8" y1="8" x2="8"  y2="36" stroke="#c9902a" strokeWidth="0.75" strokeOpacity="0.45" />
    {/* Diamond at the corner joint */}
    <rect x="4" y="4" width="5" height="5" fill="#e8b84b" fillOpacity="0.75" transform="rotate(45 6.5 6.5)" />
  </svg>
)

// Centered diamond divider — used between header sections
const DiamondDivider = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    width: '100%',
    overflow: 'hidden',
  }} aria-hidden="true">
    <div style={{ flex: 1, height: 1, background: 'rgba(201,144,42,0.28)' }} />
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ flexShrink: 0, margin: '0 8px' }}>
      <rect x="8" y="1" width="6" height="6" fill="#c9902a" fillOpacity="0.55" transform="rotate(45 8 4)" />
    </svg>
    <div style={{ flex: 1, height: 1, background: 'rgba(201,144,42,0.28)' }} />
  </div>
)

// ── Fixed viewport frame ───────────────────────────────────────────────────

function ViewportFrame() {
  const cornerBase = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 200,
  }
  return (
    <>
      {/* Outer border rectangle */}
      <div style={{
        position: 'fixed',
        inset: '8px',
        border: '1px solid rgba(232,184,75,0.4)',
        borderRadius: 1,
        pointerEvents: 'none',
        zIndex: 200,
      }} />
      {/* Inner border rectangle — double-rule effect */}
      <div style={{
        position: 'fixed',
        inset: '12px',
        border: '1px solid rgba(201,144,42,0.2)',
        borderRadius: 1,
        pointerEvents: 'none',
        zIndex: 200,
      }} />

      {/* Corner brackets — sit at the outer corners */}
      <div style={{ ...cornerBase, top: 4, left: 4 }}>
        <CornerBracket />
      </div>
      <div style={{ ...cornerBase, top: 4, right: 4 }}>
        <CornerBracket flip />
      </div>
      <div style={{ ...cornerBase, bottom: 4, left: 4 }}>
        <CornerBracket flipY />
      </div>
      <div style={{ ...cornerBase, bottom: 4, right: 4 }}>
        <CornerBracket flip flipY />
      </div>
    </>
  )
}

// ── Header ─────────────────────────────────────────────────────────────────
// Accepts:
//   back      — URL string to navigate back (optional)
//   backLabel — label for the back link (defaults to "Via Latina")
//   breadcrumb — current page name shown after the back link (optional)
//   right     — right-side content (profile name, build hash, etc.)

function PageHeader({ back, backLabel = 'Via Latina', breadcrumb, right }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#0a0804',
    }}>
      {/* Top gold rule */}
      <div style={{ height: 1, background: 'rgba(201,144,42,0.22)' }} />

      {/* Wordmark row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.7rem 1rem',
      }}>
        {/* Left: wordmark or back + breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {back ? (
            <>
              <Link
                to={back}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ fontSize: '0.75rem' }}>←</span>
                {backLabel}
              </Link>
              {breadcrumb && (
                <>
                  <span style={{ color: 'var(--border)', fontSize: '0.8rem' }}>·</span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '40vw',
                  }}>
                    {breadcrumb}
                  </span>
                </>
              )}
            </>
          ) : (
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                color: '#e8b84b',
                letterSpacing: '0.06em',
              }}>
                Via Latina
              </span>
            </Link>
          )}
        </div>

        {/* Right slot */}
        {right && (
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}>
            {right}
          </div>
        )}
      </div>

      {/* Ornamental divider */}
      <div style={{ padding: '0 2rem' }}>
        <DiamondDivider />
      </div>

      <div style={{ height: '0.3rem' }} />
    </header>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────

function PageFooter() {
  const hash   = typeof __BUILD_HASH__ !== 'undefined' ? __BUILD_HASH__ : 'dev'
  const date   = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : ''
  return (
    <footer style={{
      padding: '1.5rem 2rem 2.5rem',
      marginTop: '2rem',
    }}>
      <DiamondDivider />
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.7rem',
        letterSpacing: '0.1em',
        color: 'var(--muted)',
        marginTop: '0.85rem',
        opacity: 0.6,
      }}>
        Via Latina · Memoria Press Curriculum · {hash}{date ? ` · ${date}` : ''}
      </p>
    </footer>
  )
}

// ── PageLayout (default export) ────────────────────────────────────────────

export default function PageLayout({
  children,
  back,
  backLabel,
  breadcrumb,
  headerRight,
  noFooter = false,
}) {
  return (
    <>
      {/* The fixed frame sits over everything, pointer-events off */}
      <ViewportFrame />

      {/* Page shell — sits inside the frame, scrolls normally */}
      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        // Keep content clear of the fixed frame border (16px each side + bottom)
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '20px',
      }}>
        <PageHeader
          back={back}
          backLabel={backLabel}
          breadcrumb={breadcrumb}
          right={headerRight}
        />

        {/* Content — grows to fill, scrolls with the page */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        {!noFooter && <PageFooter />}
      </div>
    </>
  )
}
