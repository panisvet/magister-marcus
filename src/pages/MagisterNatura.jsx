import { useState, useRef, useEffect } from 'react'
import TopNav from '../components/TopNav.jsx'

const PROFILES = [
  {
    id: 'bramble',
    name: 'Bramble',
    age: '6–8',
    latin: 'Parvulus',
    icon: '🐛',
    description: 'A little naturalist just beginning to look',
    systemPrompt: `You are Magister Natura, a gentle nature companion in the Charlotte Mason and living books tradition. You are speaking with a young child aged 6–8 called "Bramble" who is just beginning to notice the natural world.

Speak warmly, with wonder and delight — like an older friend crouching beside them in the meadow. Use simple words. Ask one question at a time. Never lecture. Draw on the spirit of Jean-Henri Fabre (patient observation), Arabella Buckley (sense of wonder), Anna Botsford Comstock (love of field study), and Ernest Thompson Seton (connection with wild creatures).

The golden rule: OBSERVE BEFORE YOU NAME. Ask what they see, hear, feel, or smell before ever giving a classification. Curiosity always comes before taxonomy.

Keep responses short — 2–4 sentences. End with a gentle question or invitation to look more closely. Occasionally quote or paraphrase your source naturalists in accessible language.`
  },
  {
    id: 'fieldmouse',
    name: 'Fieldmouse',
    age: '9–11',
    latin: 'Discipulus',
    icon: '🦔',
    description: 'An eager observer building a nature journal',
    systemPrompt: `You are Magister Natura, a field companion in the Charlotte Mason and living books tradition. You are speaking with a student aged 9–11 called "Fieldmouse" who keeps a nature journal and loves to discover things.

Speak as an enthusiastic companion naturalist — encouraging, curious, never condescending. Introduce some proper names and terms when discovery warrants it, but always after observation. Draw richly from Fabre's patient insect studies, Buckley's wonder at natural forces, Comstock's Handbook of Nature Study approach, and Seton's animal tracking wisdom.

The golden rule: OBSERVE BEFORE YOU NAME. Let the student describe what they perceive before offering classification or explanation. Honor their observations as real science.

Responses: 3–5 sentences. Ask layered questions. Suggest nature journal prompts or sketching ideas. Occasionally quote your source naturalists.`
  },
  {
    id: 'osprey',
    name: 'Osprey',
    age: '12–14',
    latin: 'Scholaris',
    icon: '🦅',
    description: 'A junior naturalist ready for deeper inquiry',
    systemPrompt: `You are Magister Natura, a scholarly field companion in the Charlotte Mason and classical living books tradition. You are speaking with a student aged 12–14 called "Osprey" who is ready for deeper natural philosophy.

Speak as a fellow inquirer — intellectually serious, alive with wonder, never dry or textbook-like. Use precise language but make it feel like conversation. Connect observations to broader principles: ecology, adaptation, behavior, natural history. Draw from Fabre's philosophical depth, Buckley's scientific poetry, Comstock's systematic but wonder-filled approach, and Seton's biographical naturalism.

The golden rule: OBSERVE BEFORE YOU NAME. Always begin with perception and description; classification and explanation follow from what has been seen.

Responses: 4–6 sentences. Suggest follow-up experiments, sketch subjects, or research threads. Quote source naturalists by name and work when relevant.`
  },
  {
    id: 'thoreau',
    name: 'Thoreau',
    age: '15+',
    latin: 'Senior',
    icon: '🔭',
    description: 'A serious naturalist pursuing natural philosophy',
    systemPrompt: `You are Magister Natura, a learned companion in the great tradition of literary naturalism and Charlotte Mason education. You are speaking with an advanced student aged 15+ called "Thoreau" who is ready for natural philosophy in its fullest sense.

Speak as a peer — intellectually rigorous, philosophically alive, unafraid of complexity. Engage with the history and philosophy of natural history alongside observation. Draw deeply from Fabre's patient genius, Buckley's synthesis of science and wonder, Comstock's educational philosophy, Seton's biographical and ethical naturalism — and feel free to bring in Thoreau, White of Selborne, Darwin, Muir when apt.

The golden rule: OBSERVE BEFORE YOU NAME. Even at this level, begin in perception. The most precise scientific knowledge grows from attentive seeing.

Responses: substantive paragraphs (5–8 sentences). Suggest primary sources, field methodologies, essay or journal prompts. Engage with the student's reasoning as you would a colleague.`
  }
]

const NATURE_PROMPTS = [
  "I found something interesting outside today...",
  "There's a spider building a web near our window.",
  "We saw a bird we didn't recognize on our walk.",
  "Something has been eating our garden plants at night.",
  "I found a feather on the ground — what can I learn from it?",
  "There are tiny holes in this fallen log.",
  "A caterpillar has been on the same leaf for three days.",
  "We found animal tracks in the mud by the stream.",
]

const LEAF_POSITIONS = [
  { top: '8%', left: '3%', rot: '-15deg', opacity: 0.12, size: 60 },
  { top: '15%', right: '4%', rot: '22deg', opacity: 0.09, size: 45 },
  { top: '45%', left: '1%', rot: '-8deg', opacity: 0.08, size: 80 },
  { top: '70%', right: '2%', rot: '30deg', opacity: 0.10, size: 55 },
  { top: '85%', left: '5%', rot: '-25deg', opacity: 0.07, size: 40 },
  { top: '90%', right: '6%', rot: '12deg', opacity: 0.09, size: 65 },
]

function LeafSVG({ size, style }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M30 80 C30 80 5 60 5 35 C5 15 18 4 30 2 C42 4 55 15 55 35 C55 60 30 80 30 80Z" fill="#5a7a4a"/>
      <line x1="30" y1="2" x2="30" y2="80" stroke="#3d5534" strokeWidth="1.5"/>
      <line x1="30" y1="25" x2="15" y2="40" stroke="#3d5534" strokeWidth="0.8"/>
      <line x1="30" y1="35" x2="48" y2="48" stroke="#3d5534" strokeWidth="0.8"/>
      <line x1="30" y1="45" x2="14" y2="57" stroke="#3d5534" strokeWidth="0.8"/>
      <line x1="30" y1="18" x2="46" y2="30" stroke="#3d5534" strokeWidth="0.8"/>
    </svg>
  )
}

export default function MagisterNatura() {
  const [profile, setProfile] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionStarted, setSessionStarted] = useState(false)
  const chatEndRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function startSession(p) {
    setProfile(p)
    setMessages([])
    setSessionStarted(true)
    setLoading(true)

    const opening = await fetchAI(p.systemPrompt, [
      {
        role: 'user',
        content: 'Greet me and invite me to share something from nature — something I have seen, heard, or found today. Be brief and warm.'
      }
    ])
    setMessages([{ role: 'assistant', content: opening }])
    setLoading(false)
  }

  async function fetchAI(system, msgs) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1024,
          system,
          messages: msgs
        })
      })
      const data = await res.json()
      return data.content?.[0]?.text || 'The field grows quiet for a moment...'
    } catch {
      return 'The wind has carried my words away — please try again.'
    }
  }

  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    const newMessages = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    setLoading(true)

    const response = await fetchAI(profile.systemPrompt, newMessages)
    setMessages([...newMessages, { role: 'assistant', content: response }])
    setLoading(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function usePrompt(p) {
    setInput(p)
    textareaRef.current?.focus()
  }

  function reset() {
    setProfile(null)
    setMessages([])
    setSessionStarted(false)
    setInput('')
  }

  return (
    <div style={styles.root}>
      <TopNav current="/magister-natura" />

      {/* Decorative leaves */}
      {LEAF_POSITIONS.map((pos, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: pos.top,
          left: pos.left,
          right: pos.right,
          transform: `rotate(${pos.rot})`,
          opacity: pos.opacity,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <LeafSVG size={pos.size} />
        </div>
      ))}

      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerOrn}>✦ ❧ ✦</div>
          <h1 style={styles.title}>Magister Natura</h1>
          <p style={styles.subtitle}>Companion in the Field</p>
          <div style={styles.headerDivider} />
          <p style={styles.motto}>
            <em>"The observer of nature must never be in a hurry."</em>
            <span style={styles.attribution}> — Jean-Henri Fabre</span>
          </p>
        </header>

        {!sessionStarted ? (
          /* Profile selection */
          <div style={styles.profileSection}>
            <p style={styles.profileIntro}>
              Choose your naturalist's level to begin. Magister Natura draws from Fabre, Buckley, Comstock, and Seton — but always begins with what <em>you</em> observe.
            </p>
            <div style={styles.profileGrid}>
              {PROFILES.map(p => (
                <button key={p.id} style={styles.profileCard} onClick={() => startSession(p)}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,144,42,0.18)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,144,42,0.25)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={styles.profileIcon}>{p.icon}</div>
                  <div style={styles.profileLatin}>{p.latin}</div>
                  <div style={styles.profileName}>{p.name}</div>
                  <div style={styles.profileAge}>Ages {p.age}</div>
                  <p style={styles.profileDesc}>{p.description}</p>
                </button>
              ))}
            </div>

            <div style={styles.sourcesSection}>
              <div style={styles.sourcesTitle}>Our Living Books</div>
              <div style={styles.sourcesList}>
                {['Jean-Henri Fabre · Souvenirs Entomologiques', 'Arabella Buckley · The Fairy-Land of Science', 'Anna Botsford Comstock · Handbook of Nature Study', 'Ernest Thompson Seton · Wild Animals I Have Known'].map(s => (
                  <div key={s} style={styles.sourceItem}>
                    <span style={styles.sourceDot}>❧</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Chat interface */
          <div style={styles.chatSection}>
            <div style={styles.profileBadge}>
              <span style={styles.badgeIcon}>{profile.icon}</span>
              <div>
                <span style={styles.badgeName}>{profile.name}</span>
                <span style={styles.badgeLatin}> · {profile.latin}</span>
              </div>
              <button style={styles.changeBtn} onClick={reset}>
                ↩ Change
              </button>
            </div>

            <div style={styles.chatWindow}>
              {messages.map((m, i) => (
                <div key={i} style={m.role === 'user' ? styles.userMsg : styles.assistantMsg}>
                  {m.role === 'assistant' && (
                    <div style={styles.magisterlabel}>Magister Natura</div>
                  )}
                  <div style={m.role === 'user' ? styles.userBubble : styles.assistantBubble}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={styles.assistantMsg}>
                  <div style={styles.magisterlabel}>Magister Natura</div>
                  <div style={{ ...styles.assistantBubble, ...styles.loadingBubble }}>
                    <span style={styles.dot1}>·</span>
                    <span style={styles.dot2}>·</span>
                    <span style={styles.dot3}>·</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick prompts */}
            {messages.length <= 1 && (
              <div style={styles.promptsRow}>
                <div style={styles.promptsLabel}>Begin with an observation:</div>
                <div style={styles.promptsList}>
                  {NATURE_PROMPTS.slice(0, 4).map(p => (
                    <button key={p} style={styles.promptChip} onClick={() => usePrompt(p)}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,144,42,0.3)'}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={styles.inputRow}>
              <textarea
                ref={textareaRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe what you have observed..."
                style={styles.textarea}
                rows={2}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{
                  ...styles.sendBtn,
                  opacity: loading || !input.trim() ? 0.4 : 1,
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer'
                }}
              >
                ❧
              </button>
            </div>
            <div style={styles.hint}>Enter to send · Shift+Enter for new line</div>
          </div>
        )}

        <footer style={styles.footer}>
          <div style={styles.footerOrn}>✦ ❧ ✦</div>
          <p style={styles.footerText}>Schola Domestica · Natura Magistra Optima</p>
        </footer>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }
        .dot-ani-1 { animation: pulse 1.4s ease-in-out infinite; }
        .dot-ani-2 { animation: pulse 1.4s ease-in-out 0.2s infinite; }
        .dot-ani-3 { animation: pulse 1.4s ease-in-out 0.4s infinite; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(14,11,7,0.5); }
        ::-webkit-scrollbar-thumb { background: rgba(201,144,42,0.3); border-radius: 3px; }
        textarea:focus { outline: none; border-color: var(--gold) !important; box-shadow: 0 0 0 2px rgba(201,144,42,0.15); }
      `}</style>
    </div>
  )
}

const styles = {
  root: {
    minHeight: '100vh',
    background: 'var(--bg)',
    color: 'var(--parch)',
    fontFamily: "'Crimson Pro', Georgia, serif",
    position: 'relative',
    overflowX: 'hidden',
  },
  container: {
    maxWidth: 820,
    margin: '0 auto',
    padding: '0 1.5rem 3rem',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    padding: '2.5rem 0 1.5rem',
  },
  headerOrn: {
    color: 'var(--gold)',
    fontSize: '1rem',
    letterSpacing: '0.5em',
    marginBottom: '0.75rem',
    opacity: 0.7,
  },
  title: {
    fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
    color: 'var(--gold2)',
    margin: 0,
    letterSpacing: '0.04em',
    textShadow: '0 2px 20px rgba(201,144,42,0.3)',
  },
  subtitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.85rem',
    color: 'var(--stone)',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    margin: '0.4rem 0 1rem',
  },
  headerDivider: {
    width: 120,
    height: 1,
    background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
    margin: '0 auto 1rem',
  },
  motto: {
    fontSize: '1.05rem',
    color: 'rgba(247,237,204,0.65)',
    margin: 0,
    fontStyle: 'italic',
  },
  attribution: {
    fontSize: '0.85rem',
    color: 'var(--stone)',
    fontStyle: 'normal',
  },
  profileSection: {
    marginTop: '1rem',
  },
  profileIntro: {
    textAlign: 'center',
    color: 'rgba(247,237,204,0.75)',
    fontSize: '1.05rem',
    lineHeight: 1.7,
    margin: '0 auto 2rem',
    maxWidth: 560,
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  profileCard: {
    background: 'rgba(30,24,14,0.85)',
    border: '1px solid rgba(201,144,42,0.25)',
    borderRadius: 8,
    padding: '1.5rem 1rem',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.25s ease',
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
    color: 'var(--parch)',
    fontFamily: "'Crimson Pro', serif",
  },
  profileIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block',
  },
  profileLatin: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.65rem',
    color: 'var(--stone)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  profileName: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: '1.1rem',
    color: 'var(--gold2)',
    marginBottom: '0.2rem',
  },
  profileAge: {
    fontSize: '0.8rem',
    color: 'var(--stone)',
    marginBottom: '0.6rem',
  },
  profileDesc: {
    fontSize: '0.9rem',
    color: 'rgba(247,237,204,0.6)',
    margin: 0,
    lineHeight: 1.5,
  },
  sourcesSection: {
    border: '1px solid rgba(201,144,42,0.15)',
    borderRadius: 8,
    padding: '1.5rem',
    background: 'rgba(20,16,8,0.6)',
  },
  sourcesTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.75rem',
    color: 'var(--gold)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  sourcesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '0.5rem',
  },
  sourceItem: {
    fontSize: '0.95rem',
    color: 'rgba(247,237,204,0.6)',
    lineHeight: 1.6,
  },
  sourceDot: {
    color: 'var(--gold)',
    marginRight: '0.4rem',
  },
  chatSection: {
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  profileBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(30,24,14,0.8)',
    border: '1px solid rgba(201,144,42,0.2)',
    borderRadius: 8,
    padding: '0.6rem 1rem',
  },
  badgeIcon: {
    fontSize: '1.4rem',
  },
  badgeName: {
    fontFamily: "'Cinzel Decorative', serif",
    color: 'var(--gold2)',
    fontSize: '0.95rem',
  },
  badgeLatin: {
    fontFamily: "'Cinzel', serif",
    color: 'var(--stone)',
    fontSize: '0.8rem',
  },
  changeBtn: {
    marginLeft: 'auto',
    background: 'none',
    border: '1px solid rgba(201,144,42,0.3)',
    borderRadius: 4,
    color: 'var(--stone)',
    fontSize: '0.8rem',
    padding: '0.25rem 0.6rem',
    cursor: 'pointer',
    fontFamily: "'Crimson Pro', serif",
    transition: 'color 0.2s, border-color 0.2s',
  },
  chatWindow: {
    background: 'rgba(18,14,7,0.9)',
    border: '1px solid rgba(201,144,42,0.15)',
    borderRadius: 8,
    padding: '1.25rem',
    minHeight: 320,
    maxHeight: 440,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  userMsg: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  assistantMsg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.3rem',
  },
  magisterlabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.65rem',
    color: 'var(--gold)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    paddingLeft: '0.25rem',
  },
  userBubble: {
    background: 'rgba(90,122,74,0.18)',
    border: '1px solid rgba(90,122,74,0.3)',
    borderRadius: '8px 8px 2px 8px',
    padding: '0.7rem 1rem',
    maxWidth: '80%',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'rgba(247,237,204,0.9)',
  },
  assistantBubble: {
    background: 'rgba(201,144,42,0.06)',
    border: '1px solid rgba(201,144,42,0.12)',
    borderRadius: '2px 8px 8px 8px',
    padding: '0.75rem 1.1rem',
    maxWidth: '88%',
    fontSize: '1.05rem',
    lineHeight: 1.75,
    color: 'rgba(247,237,204,0.88)',
    fontStyle: 'italic',
  },
  loadingBubble: {
    display: 'flex',
    gap: '0.3rem',
    alignItems: 'center',
    padding: '0.9rem 1.1rem',
    fontStyle: 'normal',
  },
  dot1: { animation: 'pulse 1.4s ease-in-out infinite', fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1 },
  dot2: { animation: 'pulse 1.4s ease-in-out 0.2s infinite', fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1 },
  dot3: { animation: 'pulse 1.4s ease-in-out 0.4s infinite', fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1 },
  promptsRow: {
    background: 'rgba(20,16,8,0.7)',
    border: '1px solid rgba(201,144,42,0.12)',
    borderRadius: 8,
    padding: '0.9rem 1rem',
  },
  promptsLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.65rem',
    color: 'var(--stone)',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
  },
  promptsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  promptChip: {
    background: 'rgba(30,24,14,0.8)',
    border: '1px solid rgba(201,144,42,0.3)',
    borderRadius: 20,
    padding: '0.3rem 0.8rem',
    fontSize: '0.88rem',
    color: 'rgba(247,237,204,0.7)',
    cursor: 'pointer',
    fontFamily: "'Crimson Pro', serif",
    transition: 'border-color 0.2s',
  },
  inputRow: {
    display: 'flex',
    gap: '0.6rem',
    alignItems: 'flex-end',
  },
  textarea: {
    flex: 1,
    background: 'rgba(18,14,7,0.9)',
    border: '1px solid rgba(201,144,42,0.25)',
    borderRadius: 8,
    padding: '0.75rem 1rem',
    color: 'var(--parch)',
    fontSize: '1rem',
    fontFamily: "'Crimson Pro', serif",
    lineHeight: 1.6,
    resize: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  sendBtn: {
    background: 'rgba(201,144,42,0.12)',
    border: '1px solid rgba(201,144,42,0.4)',
    borderRadius: 8,
    width: 44,
    height: 44,
    fontSize: '1.4rem',
    color: 'var(--gold2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    flexShrink: 0,
  },
  hint: {
    fontSize: '0.75rem',
    color: 'rgba(158,140,114,0.45)',
    textAlign: 'right',
    fontFamily: "'Cinzel', serif",
    letterSpacing: '0.05em',
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(201,144,42,0.1)',
  },
  footerOrn: {
    color: 'var(--gold)',
    opacity: 0.4,
    fontSize: '0.8rem',
    letterSpacing: '0.5em',
    marginBottom: '0.5rem',
  },
  footerText: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.7rem',
    color: 'var(--stone)',
    letterSpacing: '0.2em',
    opacity: 0.5,
    margin: 0,
  },
}
