import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProfiles } from '../hooks/useProfiles.js'
import { useProgress } from '../hooks/useProgress.js'
import { vocabAudioUrl, paradigmAudioUrl, phonemeAudioUrl, playUrl } from '../audio.js'
import PageLayout from '../components/PageLayout.jsx'

import primaData from '../data/prima-latina.json'
import latinaData from '../data/latina-christiana.json'
import firstFormData from '../data/first-form-latin.json'

import phaedrusData from '../data/reading/phaedrus.json'
import fabellaeData from '../data/reading/fabellae.json'
import laboresData from '../data/reading/labores.json'
import maxeyData from '../data/reading/maxey.json'
import vulgateData from '../data/reading/vulgate.json'

// ── Data helpers ───────────────────────────────────────────────────────────
const STAGE_DATA = {
  'prima-latina': primaData,
  'latina-christiana': latinaData,
  'first-form-latin': firstFormData,
}

const READING_DATA = {
  phaedrus: phaedrusData,
  fabellae: fabellaeData,
  labores: laboresData,
  maxey: maxeyData,
  vulgate: vulgateData,
}

function findLesson(stageId, lessonId) {
  const data = STAGE_DATA[stageId]
  if (!data) return null
  return data.lessons.find(l => String(l.id) === String(lessonId)) || null
}

function findReading(readingKey) {
  if (!readingKey) return null
  const [source, id] = readingKey.split('-')
  const dataset = READING_DATA[source]
  if (!dataset) return null
  return dataset.passages.find(p => p.id === readingKey) || null
}

// ── TTS helper ─────────────────────────────────────────────────────────────
// Uses xAI TTS API when available (Cloudflare deployment),
// falls back to Web Speech API for local dev.

// speakLatin: plays a recorded file URL, with browser TTS as final fallback
async function speakLatin(url, text, setPlaying) {
  setPlaying(true)
  await playUrl(url, text)
  setPlaying(false)
}

// ── Vocabula Tab ───────────────────────────────────────────────────────────
function VocabulaTab({ lesson, stageId, onComplete }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(new Set())

  const vocab = lesson.vocab || []
  const total = vocab.length
  const current = vocab[idx]

  function next() {
    const newDone = new Set(done).add(idx)
    setDone(newDone)
    setFlipped(false)
    if (idx + 1 < total) {
      setIdx(idx + 1)
    } else if (newDone.size === total) {
      onComplete()
    }
  }

  function prev() {
    setFlipped(false)
    if (idx > 0) setIdx(idx - 1)
  }

  if (!total) return (
    <div style={{ textAlign: 'center', color: 'var(--muted)', padding: '3rem' }}>
      No vocabulary for this lesson.
    </div>
  )

  return (
    <div>
      {/* Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          Card {idx + 1} of {total}
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {vocab.map((_, i) => (
            <div key={i} style={{
              width: 8, height: 8, borderRadius: '50%',
              background: done.has(i) ? '#2ecc71' : i === idx ? 'var(--gold)' : 'var(--border)',
            }} />
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        style={{ minHeight: 220 }}
      >
        <div className="flashcard-inner" style={{ minHeight: 220 }}>
          <div className="flashcard-front">
            <p style={{ fontSize: '2rem', fontFamily: 'var(--font-latin)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              {current.latin}
            </p>
            {current.pos && (
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {current.pos}{current.gender ? ` · ${current.gender}.` : ''}{current.declension ? ` · ${current.declension}rd decl.` : ''}
              </span>
            )}
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>tap to flip</p>
          </div>
          <div className="flashcard-back">
            <p style={{ fontSize: '1.4rem', color: 'var(--gold-lt)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
              {current.english}
            </p>
            {current.derivatives?.length > 0 && (
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                → {current.derivatives.join(', ')}
              </p>
            )}
            {current.note && (
              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.4rem', fontStyle: 'italic' }}>
                {current.note}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <button className="btn btn-outline" onClick={prev} disabled={idx === 0}>← Prev</button>
        <button
          className="btn btn-outline"
          onClick={() => speakLatin(vocabAudioUrl(current), current.latin, setPlaying)}
          disabled={playing}
          style={{ minWidth: 90 }}
        >
          {playing ? '🔊 …' : '🔊 Listen'}
        </button>
        <button className="btn btn-gold" onClick={next}>
          {idx + 1 < total ? 'Next →' : 'Finish ✓'}
        </button>
      </div>

      {/* Practical Latin */}
      {lesson.practical_latin?.length > 0 && (
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>
            Latin Sayings
          </h4>
          {lesson.practical_latin.map((pl, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <p className="latin" style={{ fontSize: '1.05rem' }}>{pl.latin}</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{pl.english}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Grammatica Tab ─────────────────────────────────────────────────────────
function GrammaticaTab({ lesson, onComplete }) {
  const [mode, setMode] = useState('study')   // 'study' | 'drill'
  const [drillInput, setDrillInput] = useState({})
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(false)
  const [playingRow, setPlayingRow] = useState(null)

  const paradigms = lesson.paradigms || []

  // Derive the audio_key for a paradigm from the lesson vocab
  function audioKeyForParadigm(p) {
    const vocab = lesson.vocab || []
    if (p.type === 'verb_conjugation') {
      // Match a verb whose audio_key appears in the paradigm label or id
      const v = vocab.find(v => v.pos === 'verb' && p.id.includes(v.audio_key))
      return v?.audio_key || null
    }
    // For noun/adjective: match by stem — look for vocab whose audio_key matches the example stem
    const firstExample = p.rows?.[0]?.example?.toLowerCase() || ''
    const v = vocab.find(v => firstExample.startsWith(v.audio_key?.toLowerCase() || '___'))
    return v?.audio_key || null
  }

  async function playRow(audioKey, row, rowIdx) {
    if (playingRow !== null) return
    setPlayingRow(rowIdx)
    const url = paradigmAudioUrl(audioKey, row)
    const text = row.example || row.form || ''
    await playUrl(url, text)
    setPlayingRow(null)
  }

  if (!paradigms.length) return (
    <div style={{ textAlign: 'center', color: 'var(--muted)', padding: '3rem' }}>
      No paradigm tables for this lesson.
    </div>
  )

  function renderParadigmTable(p) {
    if (!p.rows?.length) return null

    const isAdj = p.type === 'adjective'
    const audioKey = audioKeyForParadigm(p)
    const headers = isAdj
      ? ['Case', 'Masc.', 'Fem.', 'Neut.']
      : p.rows[0].person
        ? ['Person', 'Form', 'English']
        : p.rows[0].hasOwnProperty('1sg')
          ? ['Case', '1st', '2nd', '1st pl.', '2nd pl.']
          : ['Case', 'Ending', 'Example', 'Use']

    return (
      <div key={p.id} style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>
          {p.label}
        </h3>
        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
          Click any row to hear it pronounced
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="paradigm-table">
            <thead>
              <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {p.rows.map((row, i) => {
                const isPlaying = playingRow === `${p.id}-${i}`
                const rowKey = `${p.id}-${i}`
                const clickable = !!audioKey
                const rowStyle = {
                  cursor: clickable ? 'pointer' : 'default',
                  background: isPlaying ? 'rgba(201,144,42,0.12)' : undefined,
                  transition: 'background 0.15s',
                }
                const onRowClick = clickable
                  ? () => playRow(audioKey, row, rowKey)
                  : undefined

                if (isAdj) return (
                  <tr key={i} style={rowStyle} onClick={onRowClick}>
                    <td style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--muted)' }}>{row.case}</td>
                    <td className="latin">{row.m}</td>
                    <td className="latin">{row.f}</td>
                    <td className="latin">{row.n}</td>
                  </tr>
                )
                if (row.person) return (
                  <tr key={i} style={rowStyle} onClick={onRowClick}>
                    <td style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{row.person}</td>
                    <td className="latin" style={{ fontSize: '1.05rem' }}>
                      {isPlaying ? '🔊 ' : ''}{row.form}
                    </td>
                    <td style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{row.english}</td>
                  </tr>
                )
                if (row['1sg']) return (
                  <tr key={i} style={rowStyle}>
                    <td style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--muted)' }}>{row.case}</td>
                    <td className="latin">{row['1sg']}</td>
                    <td className="latin">{row['2sg']}</td>
                    <td className="latin">{row['1pl']}</td>
                    <td className="latin">{row['2pl']}</td>
                  </tr>
                )
                return (
                  <tr key={i} style={rowStyle} onClick={onRowClick}>
                    <td style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--muted)' }}>{row.case}</td>
                    <td className="latin" style={{ color: 'var(--gold-lt)', fontWeight: 600 }}>{row.ending}</td>
                    <td className="latin">{isPlaying ? '🔊 ' : ''}{row.example}</td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{row.use}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Simple drill: fill in the first ending column for noun tables
  const drillParadigm = paradigms.find(p => p.type === 'noun_declension')

  function checkDrill() {
    if (!drillParadigm) return
    let correct = 0
    let total = 0
    drillParadigm.rows.forEach((row, i) => {
      total++
      const userVal = (drillInput[i] || '').trim().toLowerCase()
      const expected = (row.ending || '').toLowerCase().replace(/[āēīōū]/g, m => ({ 'ā':'a','ē':'e','ī':'i','ō':'o','ū':'u' })[m] || m)
      const userNorm = userVal.replace(/[āēīōū]/g, m => ({ 'ā':'a','ē':'e','ī':'i','ō':'o','ū':'u' })[m] || m)
      if (userNorm === expected) correct++
    })
    setChecked(true)
    setScore({ correct, total })
    if (correct === total) onComplete()
  }

  return (
    <div>
      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button
          className={`btn ${mode === 'study' ? 'btn-gold' : 'btn-outline'}`}
          style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
          onClick={() => { setMode('study'); setChecked(false); setDrillInput({}) }}
        >
          Study
        </button>
        {drillParadigm && (
          <button
            className={`btn ${mode === 'drill' ? 'btn-gold' : 'btn-outline'}`}
            style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
            onClick={() => { setMode('drill'); setChecked(false); setDrillInput({}) }}
          >
            Drill
          </button>
        )}
      </div>

      {/* Study mode: show all paradigm tables */}
      {mode === 'study' && paradigms.map(renderParadigmTable)}

      {/* Drill mode: hide answers, show fill-in inputs only */}
      {mode === 'drill' && drillParadigm && !checked && (
        <div>
          <h4 style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
            {drillParadigm.label}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem', fontStyle: 'italic' }}>
            Type the ending for each case (table is hidden during drill)
          </p>
          {drillParadigm.rows.map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
              <span style={{ width: 140, fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--muted)', flexShrink: 0 }}>{row.case}</span>
              <input
                value={drillInput[i] || ''}
                onChange={e => setDrillInput(d => ({ ...d, [i]: e.target.value }))}
                placeholder="ending…"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '0.35rem 0.7rem',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-latin)',
                  fontSize: '1rem',
                  outline: 'none',
                  width: 120,
                }}
              />
            </div>
          ))}
          <button className="btn btn-gold" style={{ marginTop: '0.75rem' }} onClick={checkDrill}>
            Check Answers
          </button>
        </div>
      )}

      {mode === 'drill' && checked && score && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          borderRadius: 'var(--radius)',
          background: score.correct === score.total ? 'rgba(46,204,113,0.1)' : 'rgba(201,144,42,0.1)',
          border: `1px solid ${score.correct === score.total ? 'var(--success)' : 'var(--gold)'}`,
        }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: score.correct === score.total ? 'var(--success)' : 'var(--gold-lt)' }}>
            {score.correct}/{score.total} correct
            {score.correct === score.total ? ' — Optime! 🎉' : ' — Review the table and try again.'}
          </p>
          {score.correct < score.total && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn btn-outline" style={{ fontSize: '0.85rem' }}
                onClick={() => { setChecked(false); setDrillInput({}) }}>
                Try Again
              </button>
              <button className="btn btn-outline" style={{ fontSize: '0.85rem' }}
                onClick={() => { setMode('study'); setChecked(false); setDrillInput({}) }}>
                Review Table
              </button>
            </div>
          )}
          {score.correct === score.total && (
            <button className="btn btn-gold" style={{ marginTop: '0.75rem' }} onClick={onComplete}>
              Continue →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// ── Lectio Tab ─────────────────────────────────────────────────────────────
function LectioTab({ lesson, onComplete }) {
  const [showTranslation, setShowTranslation] = useState(false)
  const [playing, setPlaying] = useState(false)

  const passage = findReading(lesson.reading_key)

  if (!passage) return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
        No reading passage for this lesson yet.
      </p>
      <button className="btn btn-gold" onClick={onComplete}>Mark Complete →</button>
    </div>
  )

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
        {passage.title}
      </h3>
      {passage.source_story && (
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
          {passage.source_story}
        </p>
      )}

      <p className="reading-passage">{passage.latin}</p>

      {/* Vocab hints */}
      {passage.vocab_hints?.length > 0 && (
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
            Vocabulary Hints
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {passage.vocab_hints.map((h, i) => (
              <span key={i} style={{
                padding: '0.2rem 0.6rem',
                background: 'rgba(201,144,42,0.1)',
                border: '1px solid rgba(201,144,42,0.2)',
                borderRadius: 4,
                fontSize: '0.82rem',
                color: 'var(--text)',
              }}>{h}</span>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <button
          className="btn btn-outline"
          onClick={() => speakLatin(null, passage.latin, setPlaying)}
          disabled={playing}
        >
          {playing ? '🔊 …' : '🔊 Listen'}
        </button>
        <button
          className="btn btn-outline"
          onClick={() => setShowTranslation(s => !s)}
        >
          {showTranslation ? 'Hide Translation' : 'Show Translation'}
        </button>
      </div>

      {showTranslation && (
        <p className="reading-translation">{passage.english}</p>
      )}

      {passage.notes && (
        <div style={{ marginTop: '1.25rem', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius)', borderLeft: '3px solid var(--border)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--text)' }}>Note:</strong> {passage.notes}
          </p>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <button className="btn btn-gold" onClick={onComplete}>
          Lectio Complete ✓
        </button>
      </div>
    </div>
  )
}

// ── Scriptura Tab ──────────────────────────────────────────────────────────
function ScripturaTab({ lesson, onComplete }) {
  const [sentence, setSentence] = useState(null)
  const [translation, setTranslation] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  // Pick a vocab item as the sentence to translate
  useEffect(() => {
    const vocab = lesson.vocab || []
    if (vocab.length) {
      // Pick a random verb or noun phrase from practical_latin, else first vocab
      const pl = lesson.practical_latin?.[0]
      if (pl) {
        setSentence(pl)
      } else {
        const v = vocab[Math.floor(Math.random() * vocab.length)]
        setSentence({ latin: v.latin, english: v.english })
      }
    }
  }, [lesson])

  async function evaluate() {
    if (!translation.trim() || !sentence) return
    setLoading(true)
    setResult(null)
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonContext: `${lesson.title}: ${lesson.focus}`,
          messages: [
            {
              role: 'user',
              content: `I am translating the Latin sentence: "${sentence.latin}"

My translation: "${translation}"

The correct translation is: "${sentence.english}"

Please evaluate my translation. Give me:
1. A letter grade (A, B, C, or D)
2. One sentence of specific feedback (what was right or what was wrong)
3. One encouraging sentence

Format your response exactly as:
GRADE: [A/B/C/D]
FEEDBACK: [your feedback sentence]
ENCOURAGEMENT: [your encouragement]`
            }
          ]
        }),
      })
      const data = await resp.json()
      const text = data.content || ''
      const grade = text.match(/GRADE:\s*([ABCD])/)?.[1] || 'C'
      const feedback = text.match(/FEEDBACK:\s*(.+)/)?.[1] || 'Good effort!'
      const encouragement = text.match(/ENCOURAGEMENT:\s*(.+)/)?.[1] || 'Keep practicing!'
      setResult({ grade, feedback, encouragement })
      if (['A', 'B'].includes(grade)) onComplete()
    } catch {
      setResult({ grade: 'C', feedback: 'Could not reach Magister Marcus. Try again.', encouragement: 'Keep practicing!' })
    } finally {
      setLoading(false)
    }
  }

  if (!sentence) return (
    <div style={{ textAlign: 'center', color: 'var(--muted)', padding: '3rem' }}>
      No translation exercise available.
    </div>
  )

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Translation Exercise
      </h3>

      <div style={{ padding: '1.5rem', background: 'var(--bg-hover)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
        <p style={{ fontFamily: 'var(--font-latin)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1.5 }}>
          {sentence.latin}
        </p>
      </div>

      <label style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>
        Your translation into English:
      </label>
      <textarea
        value={translation}
        onChange={e => setTranslation(e.target.value)}
        placeholder="Type your translation here…"
        rows={3}
        style={{
          width: '100%',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '0.75rem 1rem',
          color: 'var(--text)',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          resize: 'vertical',
          outline: 'none',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />

      <button
        className="btn btn-gold"
        style={{ marginTop: '0.75rem' }}
        onClick={evaluate}
        disabled={loading || !translation.trim()}
      >
        {loading ? 'Asking Marcus…' : 'Submit to Magister Marcus'}
      </button>

      {result && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1.25rem',
          borderRadius: 'var(--radius)',
          background: 'var(--bg-hover)',
          border: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span className={`scriptura-grade ${result.grade}`}>{result.grade}</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--muted)' }}>
              Magister Marcus says:
            </span>
          </div>
          <p style={{ marginBottom: '0.5rem' }}>{result.feedback}</p>
          <p style={{ color: 'var(--gold-lt)', fontStyle: 'italic' }}>{result.encouragement}</p>

          {!['A','B'].includes(result.grade) && (
            <button
              className="btn btn-outline"
              style={{ marginTop: '1rem', fontSize: '0.85rem' }}
              onClick={() => { setResult(null); setTranslation('') }}
            >
              Try Again
            </button>
          )}
          {['A','B'].includes(result.grade) && (
            <button className="btn btn-gold" style={{ marginTop: '1rem' }} onClick={onComplete}>
              Continue →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// ── Ask Marcus Drawer ──────────────────────────────────────────────────────
function AskMarcus({ lesson }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Salve! I'm Magister Marcus. Ask me anything about ${lesson.title}.` }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function send(e) {
    e.preventDefault()
    if (!input.trim() || loading) return
    const userMsg = { role: 'user', content: input.trim() }
    setMessages(m => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonContext: `${lesson.title}: ${lesson.focus}`,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await resp.json()
      setMessages(m => [...m, { role: 'assistant', content: data.content || 'Sorry, I could not respond.' }])
    } catch {
      setMessages(m => [...m, { role: 'assistant', content: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button className="ask-marcus-btn" onClick={() => setOpen(o => !o)} title="Ask Magister Marcus">
        {open ? '✕' : '🎓'}
      </button>

      {open && (
        <div className="chat-drawer">
          <div className="chat-drawer-header">
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--gold-lt)' }}>
              Magister Marcus
            </span>
            <button onClick={() => setOpen(false)} style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>✕</button>
          </div>
          <div className="chat-drawer-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-msg assistant" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                Cogito…
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <form className="chat-drawer-input" onSubmit={send}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={loading}
              autoFocus
            />
            <button type="submit" className="btn btn-gold" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }} disabled={loading || !input.trim()}>
              →
            </button>
          </form>
        </div>
      )}
    </>
  )
}

// ── Lesson Page ────────────────────────────────────────────────────────────
const TABS = [
  { id: 'vocabula',   label: 'Vocabula' },
  { id: 'grammatica', label: 'Grammatica' },
  { id: 'lectio',     label: 'Lectio' },
  { id: 'scriptura',  label: 'Scriptura' },
]

export default function LessonPage() {
  const { stage, lessonId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('vocabula')

  const { activeProfile, activeId } = useProfiles()
  const { getLessonProgress, markTabDone, markLessonComplete } = useProgress(activeId)

  const lesson = findLesson(stage, lessonId)
  const lessonProgress = getLessonProgress(stage, lessonId)

  // Adjacent lesson navigation
  const stageLessons = STAGE_DATA[stage]?.lessons || []
  const currentIdx = stageLessons.findIndex(l => String(l.id) === String(lessonId))
  const prevLesson = currentIdx > 0 ? stageLessons[currentIdx - 1] : null
  const nextLesson = currentIdx < stageLessons.length - 1 ? stageLessons[currentIdx + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [stage, lessonId])

  if (!lesson) {
    return (
      <PageLayout>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', padding: '4rem' }}>
          <p style={{ color: 'var(--muted)' }}>Lesson not found.</p>
          <Link to="/" className="btn btn-gold">← Back to Home</Link>
        </div>
      </PageLayout>
    )
  }

  function handleTabComplete() {
    markTabDone(stage, lessonId, activeTab)
    const idx = TABS.findIndex(t => t.id === activeTab)
    if (idx < TABS.length - 1) {
      setActiveTab(TABS[idx + 1].id)
    } else {
      markLessonComplete(stage, lessonId)
    }
  }

  return (
    <PageLayout
      back="/"
      breadcrumb={lesson.title}
      headerRight={activeProfile?.name}
      noFooter
    >
      <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '6rem' }}>
        {/* Lesson header */}
        <div style={{ marginBottom: '1.75rem' }}>
          {lesson.type === 'review' && (
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem', display: 'block' }}>
              Review Lesson
            </span>
          )}
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: '0.25rem' }}>{lesson.title}</h2>
          {lesson.focus && (
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{lesson.focus}</p>
          )}

          {/* Tab completion indicators */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
            {TABS.map(t => (
              <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: lessonProgress.tabsDone?.includes(t.id) ? '#2ecc71' : 'var(--border)',
                }} />
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'var(--font-heading)' }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div className="tab-bar">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
              {lessonProgress.tabsDone?.includes(t.id) && (
                <span style={{ marginLeft: '0.3rem', color: '#2ecc71', fontSize: '0.7rem' }}>✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="fade-in" key={activeTab}>
          {activeTab === 'vocabula'   && <VocabulaTab   lesson={lesson} stageId={stage} onComplete={handleTabComplete} />}
          {activeTab === 'grammatica' && <GrammaticaTab lesson={lesson} onComplete={handleTabComplete} />}
          {activeTab === 'lectio'     && <LectioTab     lesson={lesson} onComplete={handleTabComplete} />}
          {activeTab === 'scriptura'  && <ScripturaTab  lesson={lesson} onComplete={handleTabComplete} />}
        </div>

        {/* Lesson complete banner */}
        {lessonProgress.completed && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius)',
            background: 'rgba(46,204,113,0.08)',
            border: '1px solid #2ecc71',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '1.4rem' }}>✓</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-heading)', color: '#2ecc71', fontSize: '0.95rem' }}>Lesson Complete</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                {nextLesson ? `Optime! "${nextLesson.title}" is now unlocked.` : 'Optime! Stage complete.'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
              <button className="btn btn-outline" onClick={() => navigate('/')}>Map</button>
              {nextLesson && (
                <button className="btn btn-gold" onClick={() => navigate(`/lesson/${stage}/${nextLesson.id}`)}>
                  {nextLesson.title} →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Prev / Next lesson nav — always visible at the bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          gap: '0.5rem',
        }}>
          {prevLesson ? (
            <button
              className="btn btn-outline"
              style={{ fontSize: '0.85rem', maxWidth: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              onClick={() => navigate(`/lesson/${stage}/${prevLesson.id}`)}
            >
              ← {prevLesson.title}
            </button>
          ) : <div />}

          {nextLesson ? (
            <button
              className="btn btn-outline"
              style={{ fontSize: '0.85rem', maxWidth: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              onClick={() => navigate(`/lesson/${stage}/${nextLesson.id}`)}
            >
              {nextLesson.title} →
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Ask Marcus floating button */}
      <AskMarcus lesson={lesson} />
    </PageLayout>
  )
}
