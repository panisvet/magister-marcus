// Cloudflare Pages Function: /api/planner
// Cross-device persistence for the Lesson Planner.
// Stores the whole planner document as one JSON blob in a KV namespace.
//
// Requires a KV binding named PLANNER_KV on the Pages project. If the binding
// is absent, GET returns { bound:false } and POST returns 501 — the client
// then falls back to this-device (localStorage) storage automatically, so the
// planner still works before KV is configured.
//
// This is a single-household store (no accounts): one key holds everything.

const KEY = 'planner:v1'
const MAX_BYTES = 512 * 1024 // 512 KB safety cap

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })

export async function onRequestGet({ env }) {
  if (!env.PLANNER_KV) return json({ bound: false, data: null })
  const raw = await env.PLANNER_KV.get(KEY)
  return json({ bound: true, data: raw ? JSON.parse(raw) : null })
}

export async function onRequestPost({ request, env }) {
  if (!env.PLANNER_KV) {
    return json({ error: 'No PLANNER_KV binding; using this-device storage.' }, 501)
  }
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }
  const str = JSON.stringify(body?.data ?? body)
  if (str.length > MAX_BYTES) {
    return json({ error: 'Planner too large' }, 413)
  }
  await env.PLANNER_KV.put(KEY, str)
  return json({ ok: true, savedAt: Date.now() })
}
