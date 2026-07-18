import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'
import { useProfiles } from '../hooks/useProfiles.js'
import { useProgress } from '../hooks/useProgress.js'
import { useSrs } from '../hooks/useSrs.js'
import { statsFor } from '../srs.js'

import primaData from '../data/prima-latina.json'
import latinaData from '../data/latina-christiana.json'
import firstFormData from '../data/first-form-latin.json'

const STAGES = [
  { id: 'prima-latina', label: 'Prima Latina', data: primaData },
  { id: 'latina-christiana', label: 'Latina Christiana', data: latinaData },
  { id: 'first-form-latin', label: 'First Form', data: firstFormData },
]
const STAGE_LABEL = Object.fromEntries(STAGES.map(s => [s.id, s.label]))

function Stat({ value, label, color }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem 1.2rem', textAlign: 'center', flex: '1 1 130px' }}>
      <div style={{ fontSize: '1.9rem', fontWeight: 700, color: color || 'var(--gold-lt)', fontFamily: 'var(--font-heading)' }}>{value}</div>
      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{label}</div>
    </div>
  )
}

function Bar({ counts }) {
  const total = counts.new + counts.learning + counts.mastered + counts.decaying || 1
  const segs = [
    { k: 'mastered', c: '#2e7d5b' },
    { k: 'learning', c: '#b08428' },
    { k: 'decaying', c: '#b0402a' },
    { k: 'new', c: 'var(--border)' },
  ]
  return (
    <div>
      <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', border: '1px solid var(--border)' }}>
        {segs.map(s => counts[s.k] > 0 && (
          <div key={s.k} title={`${s.k}: ${counts[s.k]}`} style={{ width: `${(counts[s.k] / total) * 100}%`, background: s.c }} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
        <span><b style={{ color: '#2e7d5b' }}>■</b> Mastered {counts.mastered}</span>
        <span><b style={{ color: '#b08428' }}>■</b> Learning {counts.learning}</span>
        <span><b style={{ color: '#b0402a' }}>■</b> Needs review {counts.decaying}</span>
        <span><b style={{ color: 'var(--muted)' }}>■</b> Not yet started {counts.new}</span>
      </div>
    </div>
  )
}

// Report for one learner. Isolated so hooks bind to the selected profile id.
function LearnerReport({ profileId, profileName }) {
  const { getLessonProgress } = useProgress(profileId)
  const { store } = useSrs(profileId)

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

  const stats = useMemo(() => statsFor(store, eligibleLessons), [store, eligibleLessons])

  if (eligibleLessons.length === 0) {
    return <p style={{ color: 'var(--muted)', marginTop: '1.5rem' }}>{profileName} hasn't started any lessons yet. Mastery data appears here once they begin practicing.</p>
  }

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Stat value={`${stats.retention}%`} label="Retention" color="#2e7d5b" />
        <Stat value={stats.counts.mastered} label="Mastered" />
        <Stat value={stats.dueNow} label="Due now" color={stats.dueNow ? '#b08428' : undefined} />
        <Stat value={stats.counts.decaying} label="Needs review" color={stats.counts.decaying ? '#b0402a' : undefined} />
      </div>

      <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.6rem', fontStyle: 'italic' }}>
        Retention = of the cards {profileName} has studied, the share still holding (not decayed). Based on actual recall, not lessons opened.
      </p>

      <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold)', margin: '1.75rem 0 0.6rem' }}>Overall mastery</h3>
      <Bar counts={stats.counts} />

      <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold)', margin: '1.75rem 0 0.6rem' }}>By stage</h3>
      {Object.entries(stats.byStage).map(([stage, c]) => (
        <div key={stage} style={{ marginBottom: '1rem' }}>
          <p style={{ fontSize: '0.85rem', marginBottom: '0.35rem' }}>{STAGE_LABEL[stage] || stage}</p>
          <Bar counts={c} />
        </div>
      ))}

      {stats.decaying.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#b0402a', margin: '1.75rem 0 0.6rem' }}>
            Needs review ({stats.decaying.length})
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {stats.decaying.slice(0, 40).map(c => (
              <span key={c.id} title={`${STAGE_LABEL[c.stage]} · L${c.lessonId}`}
                style={{ padding: '0.2rem 0.6rem', background: 'rgba(176,64,42,0.1)', border: '1px solid rgba(176,64,42,0.3)', borderRadius: 4, fontSize: '0.82rem' }}>
                {c.label}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ParentView() {
  const navigate = useNavigate()
  const { profiles } = useProfiles()
  const [selected, setSelected] = useState(profiles[0]?.id)
  const active = profiles.find(p => p.id === selected) || profiles[0]

  return (
    <PageLayout back="/via-latina" headerRight="Parent View">
      <div className="container" style={{ maxWidth: 720 }}>
        <div style={{ margin: '1rem 0 0.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', letterSpacing: '0.05em', fontSize: '1.6rem' }}>Mastery Report</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>What each learner actually knows — and what is slipping.</p>
        </div>

        {/* Learner selector */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {profiles.map(p => (
            <button key={p.id} onClick={() => setSelected(p.id)}
              style={{
                padding: '0.45rem 1rem', borderRadius: 'var(--radius)', cursor: 'pointer',
                fontFamily: 'var(--font-heading)', fontSize: '0.85rem',
                background: p.id === selected ? 'var(--gold)' : 'transparent',
                color: p.id === selected ? '#1a1a1a' : 'var(--muted)',
                border: `1px solid ${p.id === selected ? 'var(--gold)' : 'var(--border)'}`,
              }}>
              {p.name}
            </button>
          ))}
        </div>

        {active && <LearnerReport key={active.id} profileId={active.id} profileName={active.name} />}

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button className="btn btn-gold" onClick={() => navigate('/via-latina')}>Back to lessons</button>
        </div>
      </div>
    </PageLayout>
  )
}
