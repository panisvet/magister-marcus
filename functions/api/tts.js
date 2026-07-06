// Cloudflare Pages Function: /api/tts
// Proxies to xAI TTS API — keeps the API key server-side

export async function onRequestPost({ request, env }) {
  const apiKey = env.XAI_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing XAI_API_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { text } = body
  if (!text?.trim()) {
    return new Response(JSON.stringify({ error: 'Missing text' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const resp = await fetch('https://api.x.ai/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'grok-tts-audio-preview',
      input: text,
      voice: 'leo',
    }),
  })

  if (!resp.ok) {
    const err = await resp.text()
    return new Response(JSON.stringify({ error: err }), {
      status: resp.status,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Stream audio back to browser
  return new Response(resp.body, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
