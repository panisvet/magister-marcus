// Sends Via Latina recall self-grades to /api/recall so Homeschool OS can
// chart them. Events wait in this device's outbox until the server has them,
// so nothing is lost offline. Sending never blocks or breaks a lesson.

const OUTBOX = 'vl_recall_outbox'
const MAX_OUTBOX = 2000
let timer = null
let sending = false

function readOutbox() {
  try { return JSON.parse(localStorage.getItem(OUTBOX)) || [] } catch { return [] }
}
function writeOutbox(list) {
  try { localStorage.setItem(OUTBOX, JSON.stringify(list.slice(-MAX_OUTBOX))) } catch { /* full / private */ }
}

function profileName(profileId) {
  try {
    const list = JSON.parse(localStorage.getItem('vl_profiles')) || []
    const p = list.find((x) => x.id === profileId)
    return p ? String(p.name || '').trim() : ''
  } catch { return '' }
}

// card = { id, stage, lessonId, type, label }; seenBefore = had been reviewed before
export function queueRecall(profileId, card, grade, seenBefore) {
  const name = profileName(profileId)
  if (!name || name.toUpperCase() === 'TEST') return
  const list = readOutbox()
  list.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    t: Date.now(),
    profile: name,
    card: card.id,
    type: card.type || '',
    label: card.label || '',
    stage: card.stage || '',
    lessonId: String(card.lessonId || ''),
    grade,
    seen: !!seenBefore,
  })
  writeOutbox(list)
  clearTimeout(timer)
  timer = setTimeout(flushRecall, 30000)
}

export async function flushRecall() {
  if (sending) return
  const list = readOutbox()
  if (!list.length) return
  sending = true
  try {
    const batch = list.slice(0, 500)
    const r = await fetch('/api/recall', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: batch }),
      keepalive: true,
    })
    if (r.ok) {
      const sent = new Set(batch.map((e) => e.id))
      writeOutbox(readOutbox().filter((e) => !sent.has(e.id)))
    }
  } catch { /* offline: try again later */ }
  sending = false
}

if (typeof window !== 'undefined') {
  setTimeout(flushRecall, 3000)
  window.addEventListener('online', flushRecall)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushRecall()
  })
}
