// Cloudflare Pages Function: /api/recording
// Narration recordings from /recorder.html, waiting for Homeschool OS to
// transcribe them. Recordings are children's voices, so reading them needs
// the token; only uploading is open.
//   POST  raw audio body, headers X-Child, X-Activity   anyone
//   GET                    token: list waiting recordings (no audio)
//   GET   ?key=rec:...     token: the audio itself
//   DELETE ?key=rec:...    token: after it was transcribed
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

const PREFIX = 'rec:'
const MAX_BYTES = 20 * 1024 * 1024
const CHILDREN = ['David', 'Fritz', 'Ileana']

export async function onRequestPost({ request, env }) {
  if (!env.PLANNER_KV) return json({ error: 'No KV binding' }, 501)
  const child = request.headers.get('X-Child') || ''
  if (!CHILDREN.includes(child)) return json({ error: 'Unknown child' }, 400)
  const activity = decodeURIComponent(request.headers.get('X-Activity') || '').slice(0, 200)
  const type = (request.headers.get('Content-Type') || 'audio/mp4').slice(0, 60)
  const buf = await request.arrayBuffer()
  if (!buf.byteLength) return json({ error: 'Empty recording' }, 400)
  if (buf.byteLength > MAX_BYTES) return json({ error: 'Recording too large' }, 413)
  const key = newKey(PREFIX)
  await env.PLANNER_KV.put(key, buf, {
    metadata: { child, activity, type, t: Date.now(), bytes: buf.byteLength },
  })
  return json({ ok: true, key })
}

export async function onRequestGet({ request, env }) {
  if (!authorized(request, env)) return json({ error: 'Not allowed' }, 403)
  const key = new URL(request.url).searchParams.get('key')
  if (key) {
    if (!key.startsWith(PREFIX)) return json({ error: 'Bad key' }, 400)
    const got = await env.PLANNER_KV.getWithMetadata(key, { type: 'arrayBuffer' })
    if (!got.value) return json({ error: 'Not found' }, 404)
    return new Response(got.value, {
      headers: { 'Content-Type': got.metadata?.type || 'audio/mp4', 'Cache-Control': 'no-store' },
    })
  }
  const list = await env.PLANNER_KV.list({ prefix: PREFIX, limit: 100 })
  return json({ ok: true, items: list.keys.map((k) => ({ key: k.name, ...(k.metadata || {}) })) })
}

export async function onRequestDelete({ request, env }) {
  if (!authorized(request, env)) return json({ error: 'Not allowed' }, 403)
  const key = new URL(request.url).searchParams.get('key')
  if (!key || !key.startsWith(PREFIX)) return json({ error: 'Bad key' }, 400)
  await env.PLANNER_KV.delete(key)
  return json({ ok: true })
}
