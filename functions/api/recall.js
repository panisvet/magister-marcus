// Cloudflare Pages Function: /api/recall
// Via Latina recall self-grades (Again / Good / Easy), sent from each device.
//   POST  { events: [...] }                 anyone (the site itself)
//   GET   ?limit=100                         token: oldest batches first
//   DELETE { keys: [...] }                   token: after Homeschool OS saved them
// Reading or deleting needs the X-Sync-Token header to match the SYNC_TOKEN
// variable set in Cloudflare (Pages > Settings > Variables and Secrets).
// If SYNC_TOKEN is not set, reading is refused rather than left open.

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })

function authorized(request, env) {
  const want = env.SYNC_TOKEN
  if (!want) return false
  return request.headers.get('X-Sync-Token') === want
}

// Sortable, unique key: prefix + 13-digit time + random.
function newKey(prefix) {
  return prefix + String(Date.now()).padStart(13, '0') + ':' + Math.random().toString(36).slice(2, 10)
}

const PREFIX = 'recall:'
const MAX_BYTES = 64 * 1024

export async function onRequestPost({ request, env }) {
  if (!env.PLANNER_KV) return json({ error: 'No KV binding' }, 501)
  let body
  try { body = await request.json() } catch { return json({ error: 'Invalid JSON' }, 400) }
  const events = Array.isArray(body?.events) ? body.events.slice(0, 500) : []
  if (!events.length) return json({ ok: true, saved: 0 })
  const str = JSON.stringify(events)
  if (str.length > MAX_BYTES) return json({ error: 'Too large' }, 413)
  await env.PLANNER_KV.put(newKey(PREFIX), str)
  return json({ ok: true, saved: events.length })
}

export async function onRequestGet({ request, env }) {
  if (!authorized(request, env)) return json({ error: 'Not allowed' }, 403)
  const url = new URL(request.url)
  const limit = Math.min(Number(url.searchParams.get('limit')) || 100, 200)
  const list = await env.PLANNER_KV.list({ prefix: PREFIX, limit })
  const items = []
  for (const k of list.keys) {
    const raw = await env.PLANNER_KV.get(k.name)
    items.push({ key: k.name, events: raw ? JSON.parse(raw) : [] })
  }
  return json({ ok: true, items, more: !list.list_complete })
}

export async function onRequestDelete({ request, env }) {
  if (!authorized(request, env)) return json({ error: 'Not allowed' }, 403)
  let body
  try { body = await request.json() } catch { return json({ error: 'Invalid JSON' }, 400) }
  const keys = (body?.keys || []).filter((k) => typeof k === 'string' && k.startsWith(PREFIX)).slice(0, 200)
  for (const k of keys) await env.PLANNER_KV.delete(k)
  return json({ ok: true, deleted: keys.length })
}
