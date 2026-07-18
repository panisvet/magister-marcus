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

  const { text, voice_id, language } = body
  if (!text?.trim()) {
    return new Response(JSON.stringify({ error: 'Missing text' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Current xAI Text-to-Speech API (https://docs.x.ai/.../audio/text-to-speech):
  //   POST /v1/tts  { text, voice_id, language? }  → MP3 audio
  // Voice defaults to "leo" (the voice previously wired up); callers may override.
  const resp = await fetch('https://api.x.ai/v1/tts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      voice_id: voice_id || 'leo',
      // Only send language if the caller specified one — omitting lets xAI
      // auto-detect, which avoids errors for Latin (not a named TTS language).
      ...(language ? { language } : {}),
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
