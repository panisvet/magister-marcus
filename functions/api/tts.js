// Cloudflare Pages Function: /api/tts
// Proxies to xAI TTS API — keeps the API key server-side

// Prepare Latin text for the Italian-voiced TTS so it reads ECCLESIASTICAL
// Latin correctly instead of spelling letters or reading punctuation aloud.
//   1. Strip dictionary shorthand: adjective endings ", -a, -um" and stray
//      hyphens (Leo reads "-" literally as "dash" — the "…dash loom" bug).
//   2. Respell so Italian's own rules yield the right sound:
//        ae/oe → e        caelum→celum ("CHEH-loom"), puellae→puelle
//        j     → i        Jesus→Iesus ("YEH-zoos")
//        ti+vowel → zi    gratia→grazia ("GRAH-tsee-ah")  [not after s/t/x]
// Only the spoken text is changed; the app still DISPLAYS the real spelling.
function latinForSpeech(input) {
  let t = String(input)
  // Expand 2-1-2 adjective shorthand so Leo speaks the three forms an adjective
  // is learned as: "magnus, -a, -um" → "magnus, magna, magnum".
  t = t.replace(/(\p{L}+)us,\s*-a,\s*-um/giu, (_m, stem) => `${stem}us, ${stem}a, ${stem}um`)
  t = t.replace(/,\s*-\p{L}+/gu, '')        // drop any other leftover ", -ending" shorthand
  t = t.replace(/-/g, ' ')                   // any remaining hyphen → space (never "dash")
  t = t.replace(/ae/gi, 'e').replace(/oe/gi, 'e')
  t = t.replace(/j/g, 'i').replace(/J/g, 'I')
  t = t.replace(/(?<![stxSTX])ti(?=[aeiouAEIOUāēīōūàèéìòù])/g, 'zi')
  t = t.replace(/(?<![stxSTX])TI(?=[AEIOU])/g, 'ZI')
  return t.replace(/\s+/g, ' ').trim()
}

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
      text: latinForSpeech(text),
      voice_id: voice_id || 'leo',
      // `language` is required by xAI. Latin isn't a named TTS language, so we
      // default to Italian ("it") — its phonetics match the ecclesiastical
      // pronunciation this curriculum teaches (soft c/g, pure vowels), giving
      // the closest correct Latin sound. Callers may override (e.g. "auto").
      language: language || 'it',
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
