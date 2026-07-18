// ── Mastery & Spaced Repetition core ───────────────────────────────────────
//
// THE mastery data structure. Everything valuable — the Repetitio review queue,
// the parent mastery view, and any future "proof of mastery" resale claim — is
// built on the single event recorded here: a *mastery event* is emitted only
// when a learner actually demonstrates recall of one atomic card (a vocab word,
// a paradigm, or a translation). "Opened the tab" is NOT a mastery event.
//
// Store shape (per learner profile), localStorage key `vl_srs_<profileId>`:
//   {
//     [cardId]: {
//       stage, lessonId, type, label,   // identity/metadata for grouping
//       due,            // epoch ms — when this card is next due
//       interval,       // days until next review
//       ease,           // SM-2 ease factor (1.3–3.0)
//       reps,           // consecutive successful recalls
//       lapses,         // times forgotten
//       lastReviewed,   // epoch ms
//       lastGrade,      // 'again' | 'good' | 'easy'
//       history,        // [{ t, grade }] recent events (capped)
//     }
//   }
//
// Card id scheme (stable, human-debuggable):
//   vocab:      v:<vocabId>                       (vocabIds are globally unique: pl-/lc-/ff-)
//   paradigm:   p:<stage>:<lessonId>:<paradigmId>
//   scriptura:  s:<stage>:<lessonId>

const DAY = 24 * 60 * 60 * 1000
const MIN_EASE = 1.3
const MAX_EASE = 3.0
const DEFAULT_EASE = 2.5
const MASTERED_INTERVAL = 21   // days retained before we call a card "mastered"
const HISTORY_CAP = 12

const keyFor = (profileId) => `vl_srs_${profileId}`

export function loadSrs(profileId) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(profileId))) || {}
  } catch {
    return {}
  }
}

export function saveSrs(profileId, store) {
  try {
    localStorage.setItem(keyFor(profileId), JSON.stringify(store))
  } catch { /* quota / private mode — non-fatal */ }
}

// ── Card id builders ────────────────────────────────────────────────────────
export const vocabCardId = (vocabId) => `v:${vocabId}`
export const paradigmCardId = (stage, lessonId, paradigmId) => `p:${stage}:${lessonId}:${paradigmId}`
export const scripturaCardId = (stage, lessonId) => `s:${stage}:${lessonId}`

// ── Enumerate every card a stage's lessons contain ──────────────────────────
// Returns [{ id, stage, lessonId, type, label, ref }]. `ref` is the underlying
// data (vocab item or paradigm) so review UIs can render without re-lookup.
export function cardsForLesson(stage, lesson) {
  const out = []
  const lid = String(lesson.id)
  for (const v of lesson.vocab || []) {
    if (!v.id) continue
    out.push({ id: vocabCardId(v.id), stage, lessonId: lid, type: 'vocab', label: v.latin, ref: v })
  }
  for (const p of lesson.paradigms || []) {
    if (!p.id) continue
    out.push({ id: paradigmCardId(stage, lid, p.id), stage, lessonId: lid, type: 'paradigm', label: p.label || p.id, ref: p })
  }
  return out
}

// ── SM-2-lite scheduler ─────────────────────────────────────────────────────
// grade: 'again' (forgot) | 'good' (recalled) | 'easy' (effortless)
function schedule(prev, grade, now) {
  const s = prev || { interval: 0, ease: DEFAULT_EASE, reps: 0, lapses: 0, history: [] }
  let { interval, ease, reps, lapses } = s

  if (grade === 'again') {
    reps = 0
    lapses += 1
    ease = Math.max(MIN_EASE, ease - 0.2)
    interval = 0                       // due again this session
  } else if (grade === 'good') {
    reps += 1
    interval = reps === 1 ? 1 : reps === 2 ? 3 : Math.round(interval * ease)
  } else { // easy
    reps += 1
    ease = Math.min(MAX_EASE, ease + 0.15)
    interval = reps === 1 ? 2 : Math.round(interval * ease * 1.3) || 4
  }

  const history = [...(s.history || []), { t: now, grade }].slice(-HISTORY_CAP)
  return {
    ...s,
    interval,
    ease: Math.min(MAX_EASE, Math.max(MIN_EASE, ease)),
    reps,
    lapses,
    lastReviewed: now,
    lastGrade: grade,
    due: now + interval * DAY,
    history,
  }
}

// ── THE mastery event ───────────────────────────────────────────────────────
// Call this — and only this — when a learner demonstrates recall of a card.
// `card` = { id, stage, lessonId, type, label } (from cardsForLesson).
// Returns the updated store (caller persists / sets state).
export function recordReview(store, card, grade, now = Date.now()) {
  const next = { ...store }
  const prev = next[card.id]
  const updated = schedule(prev, grade, now)
  next[card.id] = {
    stage: card.stage,
    lessonId: card.lessonId,
    type: card.type,
    label: card.label,
    ...updated,
  }
  return next
}

// ── Mastery classification for one card's state ─────────────────────────────
// 'new' (never reviewed) | 'learning' | 'mastered' | 'decaying'
export function cardStatus(state, now = Date.now()) {
  if (!state || !state.lastReviewed) return 'new'
  const overdue = now - state.due
  // Overdue by more than half its interval, or freshly lapsed → decaying
  if (overdue > Math.max(1, state.interval) * 0.5 * DAY || state.lastGrade === 'again') return 'decaying'
  if (state.interval >= MASTERED_INTERVAL && state.reps >= 3) return 'mastered'
  return 'learning'
}

export function isDue(state, now = Date.now()) {
  if (!state) return true          // never seen → available to learn
  return state.due <= now
}

// ── Build the review queue across eligible lessons ──────────────────────────
// eligibleLessons: [{ stage, lesson }] — lessons the learner has started/passed.
// Returns due + new cards, overdue first, new cards capped.
export function buildQueue(store, eligibleLessons, { maxNew = 20, now = Date.now() } = {}) {
  const due = []
  const fresh = []
  for (const { stage, lesson } of eligibleLessons) {
    for (const card of cardsForLesson(stage, lesson)) {
      // Only review card kinds we can drill (vocab + paradigm)
      if (card.type !== 'vocab' && card.type !== 'paradigm') continue
      const state = store[card.id]
      if (!state) { fresh.push(card); continue }
      if (isDue(state, now)) due.push({ card, state })
    }
  }
  due.sort((a, b) => a.state.due - b.state.due)   // most overdue first
  return [...due.map(d => d.card), ...fresh.slice(0, maxNew)]
}

// ── Aggregate stats for the parent view ─────────────────────────────────────
export function statsFor(store, eligibleLessons, now = Date.now()) {
  const counts = { new: 0, learning: 0, mastered: 0, decaying: 0 }
  const decaying = []
  let dueNow = 0
  let seen = 0
  const byStage = {}   // stage -> { total, mastered, learning, decaying, new }

  for (const { stage, lesson } of eligibleLessons) {
    for (const card of cardsForLesson(stage, lesson)) {
      if (card.type === 'scriptura') continue
      const state = store[card.id]
      const status = cardStatus(state, now)
      counts[status] += 1
      if (state) seen += 1
      if (isDue(state, now)) dueNow += 1
      if (status === 'decaying') decaying.push({ ...card, state })
      byStage[stage] = byStage[stage] || { total: 0, new: 0, learning: 0, mastered: 0, decaying: 0 }
      byStage[stage].total += 1
      byStage[stage][status] += 1
    }
  }

  const totalCards = counts.new + counts.learning + counts.mastered + counts.decaying
  // Retention = of the cards actually studied, how many are holding (mastered or learning, not decaying)
  const studied = counts.learning + counts.mastered + counts.decaying
  const retention = studied ? Math.round(((counts.mastered + counts.learning) / studied) * 100) : 0

  return { counts, byStage, decaying, dueNow, totalCards, studied, seen, retention }
}
