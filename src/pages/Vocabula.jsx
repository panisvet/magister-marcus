// VOCABULA_V1 — vocabulary practice and review, one page for every deck.
// Deck data lives in src/data/vocab/*.json. Every graded answer is a mastery
// event in the shared spaced-repetition store (srs.js) and is queued for
// Homeschool OS (sync.js → /api/recall → recall tab). All numbers are
// computed here in code; nothing is judged by an AI.
//
// Card ids: <deck>:L<lesson>:<item>:fe  (see the word, recall the meaning)
//           <deck>:L<lesson>:<item>:ef  (see the meaning, type the word)
import { useEffect, useMemo, useState, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'
import RecallGrader from '../components/RecallGrader.jsx'
import { useProfiles } from '../hooks/useProfiles.js'
import { useSrs } from '../hooks/useSrs.js'
import { cardStatus, isDue } from '../srs.js'
import { DECKS, deckById } from '../data/vocab/index.js'

const NEW_PER_SESSION = 10
const ACCENT_KEYS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'î', 'ï', 'ô', 'ù', 'û', 'œ', 'À', 'É']

// ── cards ──────────────────────────────────────────────────────────────────
function cardFor(deck, lesson, item, dir) {
  return {
    id: `${deck.id}:L${lesson.id}:${item.id}:${dir}`,
    stage: deck.id,
    lessonId: String(lesson.id),
    type: dir === 'fe' ? 'vocab' : 'vocab-typed',
    label: item.fr,
    item,
    dir,
  }
}

function cardsFor(deck, lesson, section, dir, includeLines) {
  return lesson.items
    .filter((it) => section === 'all' || it.section === section)
    .filter((it) => dir === 'fe' || includeLines || it.kind !== 'line')
    .map((it) => cardFor(deck, lesson, it, dir))
}

function shuffle(a) {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

// Due cards first (most overdue first), then up to NEW_PER_SESSION new ones.
function reviewQueue(store, cards) {
  const now = Date.now()
  const due = cards.filter((c) => store[c.id] && isDue(store[c.id], now))
    .sort((a, b) => store[a.id].due - store[b.id].due)
  const fresh = shuffle(cards.filter((c) => !store[c.id])).slice(0, NEW_PER_SESSION)
  return [...due, ...fresh]
}

// ── typed-answer check (code only) ─────────────────────────────────────────
const base = (s) => String(s).normalize('NFC').toLowerCase()
  .replace(/[’‘`]/g, "'")
  .replace(/[-–—]/g, ' ')
  .replace(/[.,!?;:«»"()]/g, ' ')
  .replace(/\s+/g, ' ').trim()
const noAccents = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

// 'right' | 'accents' (only accents wrong) | 'wrong'
function checkTyped(typed, answers) {
  const t = base(typed)
  if (!t) return 'wrong'
  if (answers.some((a) => base(a) === t)) return 'right'
  if (answers.some((a) => noAccents(base(a)) === noAccents(t))) return 'accents'
  return 'wrong'
}

// ── speech (browser voice; free, offline on iPad) ──────────────────────────
function speak(text, lang) {
  try {
    const synth = window.speechSynthesis
    if (!synth) return
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    const v = synth.getVoices().find((x) => x.lang && x.lang.replace('_', '-').startsWith(lang.slice(0, 2)))
    if (v) u.voice = v
    u.rate = 0.85
    synth.speak(u)
  } catch { /* no speech: fine */ }
}

// ── small UI pieces ────────────────────────────────────────────────────────
const box = {
  background: 'var(--bg-card)', border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)', padding: '1.25rem',
}
const chip = (on) => ({
  padding: '0.35rem 0.8rem', borderRadius: 999, cursor: 'pointer',
  border: `1px solid ${on ? 'var(--gold)' : 'var(--border)'}`,
  background: on ? 'rgba(201,144,42,0.18)' : 'transparent',
  color: on ? 'var(--gold-lt)' : 'var(--text)', fontFamily: 'var(--font-heading)', fontSize: '0.8rem',
})
const btn = {
  padding: '0.6rem 1.2rem', borderRadius: 'var(--radius)', cursor: 'pointer',
  border: '1px solid var(--gold)', background: 'rgba(201,144,42,0.15)', color: 'var(--gold-lt)',
  fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
}

function SpeakButton({ text, lang }) {
  return (
    <button aria-label="Listen" title="Listen" onClick={(e) => { e.stopPropagation(); speak(text, lang) }}
      style={{ ...chip(false), fontSize: '1rem', marginTop: '0.75rem' }}>🔊 Listen</button>
  )
}

function Learner({ profiles, activeProfile, switchProfile, addProfile }) {
  return (
    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.85rem' }}>
      <span style={{ color: 'var(--muted)' }}>Learner:</span>
      {profiles.map((p) => (
        <button key={p.id} style={chip(p.id === activeProfile?.id)} onClick={() => switchProfile(p.id)}>{p.name}</button>
      ))}
      <button style={chip(false)} onClick={() => { const n = window.prompt('Learner name'); if (n) addProfile(n) }}>+</button>
    </div>
  )
}

// ── hub: /vocab ────────────────────────────────────────────────────────────
function Hub() {
  return (
    <PageLayout back="/" backLabel="Home" breadcrumb="Vocabula">
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>Vocabula</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>Vocabulary practice and review.</p>
        {DECKS.map((d) => (
          <Link key={d.id} to={`/vocab/${d.id}`} style={{ display: 'block', ...box, marginBottom: '0.75rem', color: 'var(--text)' }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold-lt)', fontSize: '1.15rem' }}>{d.title}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              {d.subtitle} · {d.lessons.length} lesson{d.lessons.length === 1 ? '' : 's'} · {d.lessons.reduce((n, l) => n + l.items.length, 0)} words and phrases
            </div>
          </Link>
        ))}
        <div style={{ ...box, opacity: 0.55 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem' }}>Elementa Latin</div>
          <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Coming soon</div>
        </div>
      </div>
    </PageLayout>
  )
}

// ── one deck: /vocab/:deckId ───────────────────────────────────────────────
function Deck({ deck }) {
  const prof = useProfiles()
  const { activeId, activeProfile } = prof
  const { store, review, reload } = useSrs(activeId)
  useEffect(() => { reload() }, [activeId, reload])
  const [lessonId, setLessonId] = useState(String(deck.lessons[0].id))
  const [section, setSection] = useState('all')
  const [mode, setMode] = useState(null)          // null | 'review' | 'type' | 'browse'
  const [includeLines, setIncludeLines] = useState(false)
  const lesson = deck.lessons.find((l) => String(l.id) === lessonId) || deck.lessons[0]

  const counts = useMemo(() => {
    const out = {}
    for (const dir of ['fe', 'ef']) {
      const c = { new: 0, learning: 0, mastered: 0, decaying: 0, due: 0, total: 0 }
      for (const card of cardsFor(deck, lesson, section, dir, includeLines)) {
        const s = store[card.id]
        c[cardStatus(s)] += 1
        if (s && isDue(s)) c.due += 1
        c.total += 1
      }
      out[dir] = c
    }
    return out
  }, [store, deck, lesson, section, includeLines])

  if (mode) {
    return (
      <Session key={mode + lessonId + section} deck={deck} lesson={lesson} section={section} mode={mode}
        includeLines={includeLines} store={store} review={review} onDone={() => setMode(null)} />
    )
  }

  const Stat = ({ title, c }) => (
    <div style={{ flex: '1 1 200px', ...box, padding: '0.9rem' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--gold-lt)', marginBottom: '0.3rem' }}>{title}</div>
      <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
        Due now: <b>{c.due}</b> · New: {c.new}<br />
        Learning: {c.learning} · Mastered: {c.mastered} · Slipping: {c.decaying}
      </div>
    </div>
  )

  return (
    <PageLayout back="/vocab" backLabel="Vocabula" breadcrumb={deck.title}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-lt)', fontSize: '1.7rem' }}>{deck.title}</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '0.9rem' }}>{deck.subtitle}</p>
        <Learner {...prof} />
        {(!activeProfile || /^(learner \d|test)$/i.test(activeProfile.name || '')) && (
          <p style={{ color: 'var(--danger)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
            Pick or add {deck.learner || 'the learner'} so answers are recorded.
          </p>
        )}

        <div style={{ marginTop: '1.1rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {deck.lessons.map((l) => (
            <button key={l.id} style={chip(String(l.id) === lessonId)} onClick={() => { setLessonId(String(l.id)); setSection('all') }}>{l.title}</button>
          ))}
        </div>
        <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <button style={chip(section === 'all')} onClick={() => setSection('all')}>All ({lesson.items.length})</button>
          {lesson.sections.map((s) => (
            <button key={s} style={chip(section === s)} onClick={() => setSection(s)}>
              {s} ({lesson.items.filter((i) => i.section === s).length})
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.1rem' }}>
          <Stat title="Recognize (French → English)" c={counts.fe} />
          <Stat title="Produce (English → French, typed)" c={counts.ef} />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.1rem' }}>
          <button style={btn} onClick={() => setMode('review')}>Review cards</button>
          <button style={btn} onClick={() => setMode('type')}>Type the French</button>
          <button style={{ ...btn, borderColor: 'var(--border)', color: 'var(--text)', background: 'transparent' }} onClick={() => setMode('browse')}>Browse (not recorded)</button>
        </div>
        <label style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <input type="checkbox" checked={includeLines} onChange={(e) => setIncludeLines(e.target.checked)} /> Include whole dialogue lines when typing
        </label>

        <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--muted)' }}>{deck.attribution}</p>
      </div>
    </PageLayout>
  )
}

// ── a practice session ─────────────────────────────────────────────────────
function Session({ deck, lesson, section, mode, includeLines, store, review, onDone }) {
  const lang = deck.lang || 'fr-FR'
  const [queue, setQueue] = useState(() => {
    if (mode === 'browse') return shuffle(cardsFor(deck, lesson, section, 'fe', true))
    if (mode === 'review') return reviewQueue(store, cardsFor(deck, lesson, section, 'fe', true))
    return reviewQueue(store, cardsFor(deck, lesson, section, 'ef', includeLines))
  })
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [typed, setTyped] = useState('')
  const [result, setResult] = useState(null)     // 'right' | 'accents' | 'wrong'
  const [tally, setTally] = useState({ again: 0, good: 0, easy: 0, first: 0, firstRight: 0 })
  const [seen, setSeen] = useState(() => new Set())

  const card = queue[i]
  const done = !card

  // All French answers that share this English gloss are accepted.
  const answers = useMemo(() => {
    if (!card) return []
    const en = base(card.item.en)
    return lesson.items.filter((x) => base(x.en) === en).map((x) => x.fr)
  }, [card, lesson])

  const next = useCallback(() => {
    setFlipped(false); setTyped(''); setResult(null); setI((n) => n + 1)
  }, [])

  const grade = useCallback((g) => {
    if (!card) return
    review(card, g)
    setTally((t) => {
      const first = !seen.has(card.id)
      return { ...t, [g]: t[g] + 1, first: t.first + (first ? 1 : 0), firstRight: t.firstRight + (first && g !== 'again' ? 1 : 0) }
    })
    setSeen((s) => new Set(s).add(card.id))
    if (g === 'again') setQueue((q) => [...q, card])  // see it again this session
    next()
  }, [card, review, next, seen])

  const submit = () => {
    if (!card || result) return
    const r = checkTyped(typed, answers)
    setResult(r)
    speak(card.item.fr, lang)
  }

  // Keyboard: space/enter flips, 1 2 3 grade, arrows browse.
  useEffect(() => {
    const onKey = (e) => {
      if (done) return
      if (mode === 'type') {
        if (e.key === 'Enter') { e.preventDefault(); result ? grade(result === 'right' ? 'good' : 'again') : submit() }
        return
      }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped((f) => !f) }
      if (mode === 'browse') {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') { setFlipped(false); setI((n) => Math.max(0, n - 1)) }
      } else if (flipped) {
        if (e.key === '1') grade('again'); if (e.key === '2') grade('good'); if (e.key === '3') grade('easy')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
      <span>{mode === 'review' ? 'Review' : mode === 'type' ? 'Type the French' : 'Browse'} · {section === 'all' ? lesson.title : section}</span>
      <span>{done ? queue.length : i + 1} of {queue.length}</span>
    </div>
  )

  if (done) {
    const pct = tally.first ? Math.round((tally.firstRight / tally.first) * 100) : null
    return (
      <PageLayout back="/vocab" backLabel="Vocabula" breadcrumb={deck.title}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem' }}>
          {header}
          <div style={{ ...box, textAlign: 'center' }}>
            {queue.length === 0
              ? <p>Nothing is due here right now. Come back tomorrow, or browse.</p>
              : mode === 'browse'
                ? <p>That's the whole set.</p>
                : <>
                    <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold-lt)', fontSize: '1.2rem' }}>Bien fait !</p>
                    <p>{tally.first} cards · right the first time: {tally.firstRight}{pct !== null ? ` (${pct}%)` : ''}</p>
                  </>}
            <button style={{ ...btn, marginTop: '1rem' }} onClick={onDone}>Back</button>
          </div>
        </div>
      </PageLayout>
    )
  }

  const it = card.item
  const big = { fontFamily: 'var(--font-latin)', fontSize: it.fr.length > 30 ? '1.6rem' : '2.2rem', lineHeight: 1.3 }

  return (
    <PageLayout back="/vocab" backLabel="Vocabula" breadcrumb={deck.title}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '1rem' }}>
        {header}

        {mode !== 'type' && (
          <div role="button" tabIndex={0} onClick={() => setFlipped((f) => !f)}
            style={{ ...box, minHeight: 230, cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>{it.section}</div>
            <div lang="fr" style={{ ...big, color: 'var(--text)', marginTop: '0.4rem' }}>{it.fr}</div>
            <SpeakButton text={it.fr} lang={lang} />
            {flipped
              ? <div style={{ marginTop: '1rem', fontSize: '1.3rem', color: 'var(--gold-lt)' }}>{it.en}</div>
              : <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>Tap (or space) to see the meaning</div>}
          </div>
        )}

        {mode === 'review' && flipped && <RecallGrader onGrade={grade} prompt="Did you know it? (keys 1 · 2 · 3)" />}
        {mode === 'browse' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <button style={btn} onClick={() => { setFlipped(false); setI((n) => Math.max(0, n - 1)) }}>‹ Back</button>
            <button style={btn} onClick={next}>Next ›</button>
          </div>
        )}

        {mode === 'type' && (
          <div style={{ ...box, textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>{it.section} · say it in French</div>
            <div style={{ fontSize: '1.5rem', color: 'var(--gold-lt)', margin: '0.5rem 0 1rem' }}>{it.en}</div>
            <input lang="fr" autoFocus value={typed} disabled={!!result}
              autoCapitalize="off" autoCorrect="off" spellCheck={false}
              onChange={(e) => setTyped(e.target.value)}
              style={{ width: '100%', padding: '0.7rem', fontSize: '1.3rem', fontFamily: 'var(--font-body)', background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }} />
            {!result && (
              <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.6rem' }}>
                {ACCENT_KEYS.map((k) => (
                  <button key={k} style={{ ...chip(false), minWidth: 38, fontSize: '1rem' }} onClick={() => setTyped((t) => t + k)}>{k}</button>
                ))}
              </div>
            )}
            {!result
              ? <button style={{ ...btn, marginTop: '1rem' }} onClick={submit}>Check</button>
              : <div style={{ marginTop: '1rem' }}>
                  <div style={{ fontSize: '1.1rem', color: result === 'right' ? 'var(--success)' : 'var(--danger)' }}>
                    {result === 'right' ? 'Correct' : result === 'accents' ? 'Almost: check the accents' : 'Not quite'}
                  </div>
                  <div lang="fr" style={{ ...big, fontSize: '1.6rem', marginTop: '0.4rem' }}>{it.fr}</div>
                  <SpeakButton text={it.fr} lang={lang} />
                  <div>
                    <button style={{ ...btn, marginTop: '1rem' }} onClick={() => grade(result === 'right' ? 'good' : 'again')}>Next ›</button>
                  </div>
                </div>}
          </div>
        )}
      </div>
    </PageLayout>
  )
}

export default function Vocabula() {
  const { deckId } = useParams()
  if (!deckId) return <Hub />
  const deck = deckById(deckId)
  if (!deck) return <Hub />
  return <Deck deck={deck} />
}
