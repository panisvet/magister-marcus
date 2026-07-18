import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'
import RecallGrader from '../components/RecallGrader.jsx'
import { useProfiles } from '../hooks/useProfiles.js'
import { useProgress } from '../hooks/useProgress.js'
import { useSrs } from '../hooks/useSrs.js'
import { buildQueue } from '../srs.js'
import { playUrl, vocabAudioUrl } from '../audio.js'

import primaData from '../data/prima-latina.json'
import latinaData from '../data/latina-christiana.json'
import firstFormData from '../data/first-form-latin.json'

const STAGES = [
  { id: 'prima-latina', data: primaData },
  { id: 'latina-christiana', data: latinaData },
  { id: 'first-form-latin', data: firstFormData },
]

// Turn one paradigm row (many possible shapes) into readable "label — forms".
function paradigmLines(p) {
  return (p.rows || []).map(row => {
    const label = row.case || row.person || ''
    let forms
    if (row.m !== undefined) forms = [row.m, row.f, row.n].filter(Boolean).join(' · ')
    else if (row['1sg'] !== undefined) forms = [row['1sg'], row['2sg'], row['1pl'], row['2pl']].filter(Boolean).join(' · ')
    else if (row.sg !== undefined) forms = [row.sg, row.pl].filter(Boolean).join(' · ')
    else if (row.example !== undefined) forms = `${row.ending}  (${row.example})`
    else forms = row.form || row.latin || row.ending || ''
    return { label, forms, english: row.english || row.pronoun || row.use || '' }
  })
}

export default function Repetitio() {
  const navigate = useNavigate()
  const { activeProfile, activeId } = useProfiles()
  const { getLessonProgress } = useProgress(activeId)
  const { store, review } = useSrs(activeId)

  // Lessons the learner has actually started or finished — review only studied material.
  const eligibleLessons = useMemo(() => {
    const out = []
    for (const { id: stage, data } of STAGES) {
      for (const lesson of data.lessons) {
        const lp = getLessonProgress(stage, String(lesson.id))
        if (lp?.completed || (lp?.tabsDone?.length > 0)) out.push({ stage, lesson })
      }
    }
    return out
  }, [getLessonProgress])

  // Build the queue once on mount (snapshot), then walk it. 'again' re-queues.
  const [queue, setQueue] = useState(() => buildQueue(store, eligibleLessons))
  const [pos, setPos] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(0)
  const [playing, setPlaying] = useState(false)

  const card = queue[pos]

  function grade(quality) {
    review(card, quality)
    setReviewedCount(c => c + 1)
    setRevealed(false)
    setQueue(q => {
      const next = [...q]
      // Missed cards come back near the end of this session.
      if (quality === 'again') next.push(card)
      return next
    })
    setPos(p => p + 1)
  }

  const stageName = { 'prima-latina': 'Prima Latina', 'latina-christiana': 'Latina Christiana', 'first-form-latin': 'First Form' }

  // ── Empty / done states ────────────────────────────────────────────────
  if (eligibleLessons.length === 0) {
    return (
      <PageLayout back="/via-latina" headerRight="Repetitio">
        <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', letterSpacing: '0.05em' }}>Repetitio</h1>
          <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
            Nothing to review yet for <strong>{activeProfile?.name}</strong>. Study a lesson first —
            every word and paradigm you practice becomes a review card here.
          </p>
          <button className="btn btn-gold" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/via-latina')}>Go to lessons</button>
        </div>
      </PageLayout>
    )
  }

  if (!card) {
    return (
      <PageLayout back="/via-latina" headerRight="Repetitio">
        <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ fontSize: '2.5rem' }}>✓</div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', letterSpacing: '0.05em', marginTop: '0.5rem' }}>
            Caught up
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem' }}>
            {reviewedCount > 0
              ? `${reviewedCount} card${reviewedCount === 1 ? '' : 's'} reviewed. Come back tomorrow — cards return on their own schedule.`
              : 'No cards are due right now. Cards reappear when it is time to refresh them.'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" onClick={() => navigate('/parent')}>Parent view</button>
            <button className="btn btn-gold" onClick={() => navigate('/via-latina')}>Back to lessons</button>
          </div>
        </div>
      </PageLayout>
    )
  }

  const remaining = queue.length - pos
  const v = card.ref
  const isVocab = card.type === 'vocab'

  return (
    <PageLayout back="/via-latina" headerRight="Repetitio">
      <div className="container" style={{ maxWidth: 640 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '1rem 0 1.5rem' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', letterSpacing: '0.05em', fontSize: '1.5rem' }}>Repetitio</h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{activeProfile?.name} · {remaining} card{remaining === 1 ? '' : 's'} to go</p>
          </div>
          <span style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {stageName[card.stage]} · L{card.lessonId}
          </span>
        </div>

        {/* Card */}
        <div
          onClick={() => setRevealed(true)}
          style={{
            minHeight: 240, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '2rem 1.5rem', cursor: revealed ? 'default' : 'pointer',
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
          }}
        >
          {isVocab ? (
            <>
              <p style={{ fontSize: '2rem', fontFamily: 'var(--font-latin)', fontStyle: 'italic', color: 'var(--text)' }}>{v.latin}</p>
              {v.pos && <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.3rem' }}>{v.pos}</p>}
              {revealed && (
                <div style={{ marginTop: '1.25rem' }}>
                  <p style={{ fontSize: '1.3rem', color: 'var(--gold-lt)', fontFamily: 'var(--font-heading)' }}>{v.english}</p>
                  {v.derivatives?.length > 0 && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                      → {v.derivatives.map(d => (typeof d === 'string' ? d : d.english)).join(', ')}
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <p style={{ fontSize: '1.3rem', color: 'var(--gold-lt)', fontFamily: 'var(--font-heading)' }}>{v.label || card.label}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.3rem' }}>Recite this paradigm</p>
              {revealed && (
                <table className="paradigm-table" style={{ marginTop: '1.1rem' }}>
                  <tbody>
                    {paradigmLines(v).map((r, i) => (
                      <tr key={i}>
                        <td style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'right', paddingRight: '0.8rem' }}>{r.label}</td>
                        <td className="latin" style={{ color: 'var(--gold-lt)' }}>{r.forms}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>

        {/* Listen (vocab only) */}
        {isVocab && (
          <div style={{ textAlign: 'center', marginTop: '0.9rem' }}>
            <button className="btn btn-outline" disabled={playing}
              onClick={async () => { setPlaying(true); await playUrl(vocabAudioUrl(v), v.latin); setPlaying(false) }}>
              {playing ? '🔊 …' : '🔊 Listen'}
            </button>
          </div>
        )}

        {/* Grade / reveal */}
        {revealed
          ? <RecallGrader onGrade={grade} />
          : <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1.25rem' }}>Tap the card to reveal the answer</p>}
      </div>
    </PageLayout>
  )
}
