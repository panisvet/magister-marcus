// RecallGrader — the three-button recall self-grade that emits a mastery event.
// Shown after a learner has seen the answer (flashcard flipped, paradigm
// revealed). "How well did you recall this?" → again / good / easy.
export default function RecallGrader({ onGrade, prompt = 'How well did you recall it?' }) {
  const buttons = [
    { grade: 'again', label: 'Again', hint: "Didn't know", color: '#b0402a' },
    { grade: 'good',  label: 'Good',  hint: 'Recalled it',  color: '#2e7d5b' },
    { grade: 'easy',  label: 'Easy',  hint: 'Effortless',   color: '#b08428' },
  ]
  return (
    <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.5rem', letterSpacing: '0.03em' }}>
        {prompt}
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {buttons.map(b => (
          <button
            key={b.grade}
            onClick={() => onGrade(b.grade)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              minWidth: 88, padding: '0.5rem 0.9rem', cursor: 'pointer',
              background: 'var(--bg-card)', color: 'var(--text)',
              border: `1px solid ${b.color}`, borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-heading)', transition: 'background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = b.color + '22' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
          >
            <span style={{ fontSize: '0.95rem', color: b.color, fontWeight: 600 }}>{b.label}</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>{b.hint}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
