/**
 * POST /api/tts  — Schola Domestica Learn-to-Read pronunciation proxy.
 *
 * Calls the xAI Grok Text-to-Speech REST endpoint server-side so the API key
 * never reaches the browser. Returns audio/mpeg (MP3).
 *
 * Request body: { "text": string, "slow"?: boolean, "voice_id"?: string }
 * Configure in Cloudflare Pages → Settings → Environment variables:
 *   XAI_API_KEY   (required, secret)
 *   XAI_TTS_VOICE (optional, default "eve"; one of eve|ara|rex|sal|leo)
 *
 * Endpoint/shape per xAI docs: POST https://api.x.ai/v1/tts
 *   { text, voice_id, language, output_format } -> audio bytes.
 */

const XAI_TTS_URL = "https://api.x.ai/v1/tts";
const MAX_CHARS = 200; // single sounds / short words only
const ALLOWED_VOICES = new Set(["eve", "ara", "rex", "sal", "leo"]);

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.XAI_API_KEY) {
    return json({ error: "Pronunciation isn't configured yet." }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Send JSON with a 'text' field." }, 400);
  }

  let text = typeof body.text === "string" ? body.text.trim() : "";
  if (!text) return json({ error: "Nothing to read aloud." }, 400);
  if (text.length > MAX_CHARS) text = text.slice(0, MAX_CHARS);

  const voice =
    body.voice_id && ALLOWED_VOICES.has(body.voice_id)
      ? body.voice_id
      : ALLOWED_VOICES.has(env.XAI_TTS_VOICE)
      ? env.XAI_TTS_VOICE
      : "eve";

  // "slow" stretches a whole word by spacing its sounds with short pauses,
  // matching the book's slow "sound it out" pass. Single elongated sounds
  // (e.g. "mmm") are already sent pre-stretched by the client.
  const payloadText =
    body.slow && /^[a-z]+$/i.test(text)
      ? text.split("").join(" [pause 0.15s] ")
      : text;

  let upstream;
  try {
    upstream = await fetch(XAI_TTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.XAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: payloadText,
        voice_id: voice,
        language: "en",
      }),
    });
  } catch {
    return json({ error: "Could not reach the voice service." }, 502);
  }

  if (!upstream.ok) {
    return json(
      { error: "The voice service returned an error.", status: upstream.status },
      502
    );
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      // Identical text yields identical audio — let the browser/CDN cache it.
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}

// Reject other methods cleanly.
export async function onRequest(context) {
  if (context.request.method === "POST") return onRequestPost(context);
  return json({ error: "Use POST." }, 405);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
