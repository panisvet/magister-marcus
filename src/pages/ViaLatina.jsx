import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfiles } from '../hooks/useProfiles.js'
import { useProgress } from '../hooks/useProgress.js'
import { useSrs } from '../hooks/useSrs.js'
import { statsFor } from '../srs.js'
import PageLayout from '../components/PageLayout.jsx'
import { phonemeAudioUrl, playUrl } from '../audio.js'

import primaData from '../data/prima-latina.json'
import latinaData from '../data/latina-christiana.json'
import firstFormData from '../data/first-form-latin.json'

// ── Curriculum stage config ────────────────────────────────────────────────
const STAGES = [
  {
    id: 'prima-latina',
    label: 'Prima Latina',
    subtitle: 'Introduction to Latin',
    roman: 'I',
    color: '#7b5ea7',
    data: primaData,
  },
  {
    id: 'latina-christiana',
    label: 'Latina Christiana',
    subtitle: 'Introductory Latin',
    roman: 'II',
    color: '#c9902a',
    data: latinaData,
  },
  {
    id: 'first-form-latin',
    label: 'First Form Latin',
    subtitle: 'Beginning Latin Grammar',
    roman: 'III',
    color: '#2e86ab',
    data: firstFormData,
  },
  {
    id: 'second-form-latin',
    label: 'Second Form Latin',
    subtitle: 'Continuing Latin Grammar',
    roman: 'IV',
    color: '#c0392b',
    data: null, // coming soon
  },
]

// ── Pronunciation Guide ────────────────────────────────────────────────────
const PHONEME_GROUPS = [
  {
    label: 'Vowels',
    sounds: [
      { key: 'vowel-a', display: 'A', hint: 'ah' },
      { key: 'vowel-e', display: 'E', hint: 'eh' },
      { key: 'vowel-i', display: 'I', hint: 'ee' },
      { key: 'vowel-o', display: 'O', hint: 'oh' },
      { key: 'vowel-u', display: 'U', hint: 'oo' },
    ],
  },
  {
    label: 'Vowel Teams',
    sounds: [
      { key: 'team-ae', display: 'AE', hint: 'ay' },
      { key: 'team-oe', display: 'OE', hint: 'ay' },
      { key: 'diphthong-au', display: 'AU', hint: 'ow' },
    ],
  },
  {
    label: 'Consonants',
    sounds: [
      { key: 'consonant-c-hard', display: 'C',  hint: 'k'  },
      { key: 'consonant-c-soft', display: 'C̈',  hint: 'ch' },
      { key: 'consonant-g-hard', display: 'G',  hint: 'g'  },
      { key: 'consonant-g-soft', display: 'G̈',  hint: 'j'  },
      { key: 'consonant-j',      display: 'J',  hint: 'y'  },
      { key: 'consonant-s',      display: 'S',  hint: 'ss' },
      { key: 'consonant-t-ts',   display: 'T',  hint: 'ts' },
      { key: 'consonant-v',      display: 'V',  hint: 'w'  },
    ],
  },
]

function PronunciationGuide() {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(null)

  async function play(key) {
    if (playing) return
    setPlaying(key)
    await playUrl(phonemeAudioUrl(key), key.replace(/-/g, ' '))
    setPlaying(null)
  }

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          color: 'var(--muted)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.45rem 0.9rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span>{open ? '▲' : '▼'}</span> Pronunciation Guide
      </button>

      {open && (
        <div style={{
          marginTop: '0.75rem',
          padding: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
        }}>
          {PHONEME_GROUPS.map(group => (
            <div key={group.label} style={{ marginBottom: '0.75rem' }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '0.4rem',
              }}>
                {group.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.sounds.map(s => (
                  <button
                    key={s.key}
                    onClick={() => play(s.key)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.4rem 0.6rem',
                      background: playing === s.key ? 'var(--gold)22' : 'var(--bg)',
                      border: `1px solid ${playing === s.key ? 'var(--gold)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      minWidth: '2.8rem',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-latin)',
                      fontSize: '1.05rem',
                      color: 'var(--gold-lt)',
                    }}>
                      {playing === s.key ? '🔊' : s.display}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)', fontFamily: 'var(--font-heading)' }}>
                      /{s.hint}/
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.25rem', fontStyle: 'italic' }}>
            Click any sound to hear it
          </p>
        </div>
      )}
    </div>
  )
}

// ── Profile Picker ─────────────────────────────────────────────────────────
function ProfilePicker({ profiles, activeId, onSwitch, onAdd, onRemove }) {
  const [adding, setAdding] = useState(false)
  const [newName, setNewName] = useState('')

  function handleAdd(e) {
    e.preventDefault()
    if (newName.trim()) {
      onAdd(newName.trim())
      setNewName('')
      setAdding(false)
    }
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        Learner
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
        {profiles.map(p => (
          <div
            key={p.id}
            className={`profile-chip ${p.id === activeId ? 'active' : ''}`}
            onClick={() => onSwitch(p.id)}
            title={p.id !== 'default' ? 'Click to switch · Double-click to remove' : 'Default learner'}
            onDoubleClick={() => { if (profiles.length > 1) onRemove(p.id) }}
          >
            <div className="profile-avatar">{p.avatar}</div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}>{p.name}</span>
          </div>
        ))}

        {profiles.length < 4 && !adding && (
          <button
            className="btn btn-outline"
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            onClick={() => setAdding(true)}
          >
            + Add Learner
          </button>
        )}

        {adding && (
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              autoFocus
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="Name…"
              maxLength={24}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--gold)',
                borderRadius: 'var(--radius)',
                padding: '0.5rem 0.75rem',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                outline: 'none',
                width: '140px',
              }}
            />
            <button type="submit" className="btn btn-gold" style={{ padding: '0.5rem 0.9rem' }}>Add</button>
            <button type="button" className="btn btn-outline" style={{ padding: '0.5rem 0.9rem' }} onClick={() => setAdding(false)}>✕</button>
          </form>
        )}
      </div>
    </div>
  )
}

// ── Review Bar (Repetitio + Parent View entry points) ───────────────────────
function ReviewBar({ profileId }) {
  const navigate = useNavigate()
  const { getLessonProgress } = useProgress(profileId)
  const { store } = useSrs(profileId)

  const eligible = []
  for (const s of STAGES) {
    if (!s.data) continue
    for (const lesson of s.data.lessons) {
      const lp = getLessonProgress(s.id, String(lesson.id))
      if (lp?.completed || (lp?.tabsDone?.length > 0)) eligible.push({ stage: s.id, lesson })
    }
  }
  const { dueNow } = statsFor(store, eligible)

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
      <button className="btn btn-gold" onClick={() => navigate('/review')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        ↻ Repetitio — Review
        {dueNow > 0 && (
          <span style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 12, padding: '0.05rem 0.55rem', fontSize: '0.78rem' }}>{dueNow} due</span>
        )}
      </button>
      <button className="btn btn-outline" onClick={() => navigate('/parent')}>Parent view</button>
    </div>
  )
}

// ── Lesson Node ────────────────────────────────────────────────────────────
function LessonNode({ lesson, stageId, unlocked, lessonProgress, onClick, accentColor }) {
  const isReview = lesson.type === 'review'
  const completed = lessonProgress?.completed
  const started = lessonProgress?.tabsDone?.length > 0

  const dotColor = completed ? '#2ecc71' : started ? accentColor : 'var(--border)'

  return (
    <button
      onClick={unlocked ? onClick : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius)',
        background: unlocked ? 'var(--bg-card)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${completed ? accentColor + '66' : 'var(--border)'}`,
        cursor: unlocked ? 'pointer' : 'default',
        opacity: unlocked ? 1 : 0.45,
        textAlign: 'left',
        transition: 'background 0.18s, border-color 0.18s',
      }}
      onMouseEnter={e => { if (unlocked) e.currentTarget.style.background = 'var(--bg-hover)' }}
      onMouseLeave={e => { if (unlocked) e.currentTarget.style.background = 'var(--bg-card)' }}
    >
      {/* Dot */}
      <div style={{
        width: 10, height: 10, borderRadius: '50%',
        background: dotColor,
        flexShrink: 0,
        boxShadow: completed ? `0 0 6px ${accentColor}` : 'none',
      }} />

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: isReview ? '0.8rem' : '0.9rem',
          color: isReview ? 'var(--muted)' : 'var(--text)',
          letterSpacing: isReview ? '0.08em' : '0.02em',
          textTransform: isReview ? 'uppercase' : 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {isReview ? `★ ${lesson.title}` : lesson.title}
        </div>
        {lesson.focus && !isReview && (
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {lesson.focus}
          </div>
        )}
      </div>

      {/* Lock / complete icon */}
      {!unlocked && (
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>🔒</span>
      )}
      {completed && (
        <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>✓</span>
      )}
    </button>
  )
}

// ── Stage Header ───────────────────────────────────────────────────────────
function StageHeader({ stage, pct = 0, done = 0, total = 0 }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: stage.color,
          letterSpacing: '0.04em',
        }}>
          Gradus {stage.roman}
        </span>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text)' }}>
          {stage.label}
        </span>
      </div>
      <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.15rem' }}>
        {stage.subtitle}
      </p>

      {/* Progress bar */}
      {total > 0 && (
        <div style={{ marginTop: '0.75rem' }}>
          <div style={{
            height: 4,
            background: 'var(--border)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${pct}%`,
              background: stage.color,
              borderRadius: 2,
              transition: 'width 0.4s ease',
            }} />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.3rem' }}>
            {done}/{total} lessons complete
          </p>
        </div>
      )}
    </div>
  )
}

// ── Stage Panel ────────────────────────────────────────────────────────────
function StagePanel({ stage, activeProfileId, activeProfileName, onLessonClick }) {
  const { isUnlocked, getLessonProgress, stageProgress } = useProgress(activeProfileId)

  if (!stage.data) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        opacity: 0.6,
      }}>
        <StageHeader stage={stage} pct={0} />
        <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginTop: '1rem', textAlign: 'center' }}>
          Coming soon
        </p>
      </div>
    )
  }

  const lessons = stage.data.lessons
  const orderedIds = lessons.map(l => String(l.id))
  const sp = stageProgress(stage.id, lessons.filter(l => l.type === 'lesson').length)

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: `1px solid ${stage.color}44`,
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
    }}>
      <StageHeader stage={stage} pct={sp.pct} done={sp.done} total={sp.total} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
        {lessons.map((lesson, idx) => {
          const lid = String(lesson.id)
          const unlocked = isUnlocked(stage.id, idx, orderedIds, activeProfileName)
          const lp = getLessonProgress(stage.id, lid)
          return (
            <LessonNode
              key={lid}
              lesson={lesson}
              stageId={stage.id}
              unlocked={unlocked}
              lessonProgress={lp}
              accentColor={stage.color}
              onClick={() => onLessonClick(stage.id, lid)}
            />
          )
        })}
      </div>
    </div>
  )
}

// ── Via Latina Page ────────────────────────────────────────────────────────
export default function ViaLatina() {
  const navigate = useNavigate()
  const { profiles, activeProfile, activeId, switchProfile, addProfile, removeProfile } = useProfiles()
  const [expandedStage, setExpandedStage] = useState('prima-latina')

  function handleLessonClick(stageId, lessonId) {
    navigate(`/lesson/${stageId}/${lessonId}`)
  }

  return (
    <PageLayout back="/" headerRight="Via Latina">
      {/* Hero */}
      <div style={{
        textAlign: 'center',
        padding: '2rem 1.5rem 1.5rem',
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          color: 'var(--gold-lt)',
          letterSpacing: '0.06em',
          marginBottom: '0.4rem',
        }}>
          Via Latina
        </h1>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-latin)', fontStyle: 'italic', fontSize: '1.05rem' }}>
          The Road to Latin
        </p>
      </div>

      <div className="container">
        {/* Pronunciation guide — collapsed by default */}
        <PronunciationGuide />

        {/* Profile picker */}
        <ProfilePicker
          profiles={profiles}
          activeId={activeId}
          onSwitch={switchProfile}
          onAdd={addProfile}
          onRemove={removeProfile}
        />

        {/* Repetitio + Parent view */}
        <ReviewBar profileId={activeId} />

        {/* Stage selector tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {STAGES.map(s => (
            <button
              key={s.id}
              onClick={() => setExpandedStage(s.id)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                background: expandedStage === s.id ? s.color + '22' : 'transparent',
                border: `1px solid ${expandedStage === s.id ? s.color : 'var(--border)'}`,
                color: expandedStage === s.id ? s.color : 'var(--muted)',
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
            >
              {s.roman}. {s.label}
            </button>
          ))}
        </div>

        {/* Active stage panel */}
        {STAGES.map(s => s.id === expandedStage && (
          <StagePanel
            key={s.id}
            stage={s}
            activeProfileId={activeId}
            activeProfileName={activeProfile?.name || ''}
            onLessonClick={handleLessonClick}
          />
        ))}

        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: '2rem' }}>
          Double-click a learner chip to remove it · Progress saved locally in your browser
        </p>
      </div>
    </PageLayout>
  )
}
