/**
 * POST /api/tts  (Cloudflare Pages Function)
 *
 * Client sends: { text: string, slow?: boolean }
 * We proxy to xAI Grok TTS (key stays server-side) and stream back audio bytes.
 *
 * xAI REST TTS (POST https://api.x.ai/v1/tts) requires, for a built-in voice:
 *   { text, voice, language }   -> returns raw audio (mp3 by default)
 * Omitting `voice` or `language` yields HTTP 400, which is the bug this fixes.
 *
 * Required Cloudflare binding (Settings -> Environment variables):
 *   XAI_API_KEY   your xAI key (secret)
 * Optional:
 *   XAI_TTS_VOICE one of xAI's named voices (default "eve")
 */

const XAI_TTS_URL = "https://api.x.ai/v1/tts";
const DEFAULT_VOICE = "eve";
const DEFAULT_LANGUAGE = "en";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
  // TEMP DEBUG: GET/POST /api/tts?debug=keys returns binding NAMES only (no
  // values) so we can confirm the exact env var name. Remove after fixing.
  if (new URL(request.url).searchParams.get("debug") === "keys") {
    return json({ keys: Object.keys(env) });
  }

  const apiKey = env["tts-mm2"] || env.XAI_API_KEY || env.GROK_API_KEY || env.XAI_KEY;
  if (!apiKey) {
    return json({ error: "Server missing XAI_API_KEY binding" }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Body must be JSON" }, 400);
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  if (!text) return json({ error: "Missing 'text'" }, 400);

  const voice = env.XAI_TTS_VOICE || DEFAULT_VOICE;

  // xAI has no native "slow" rate control; the reader handles slow playback by
  // sequencing per-phoneme clips. We keep the field accepted but synthesis is
  // the same either way (punctuation already drives natural pacing).
  const upstreamBody = {
    text,
    voice,
    language: DEFAULT_LANGUAGE,
  };

  let upstream;
  try {
    upstream = await fetch(XAI_TTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upstreamBody),
    });
  } catch (e) {
    return json({ error: "Upstream fetch failed", detail: String(e) }, 502);
  }

  if (!upstream.ok) {
    // Surface the real reason instead of an opaque 400.
    const detail = await upstream.text().catch(() => "");
    return json(
      { error: `xAI TTS ${upstream.status}`, voice, detail: detail.slice(0, 1000) },
      upstream.status
    );
  }

  const contentType = upstream.headers.get("content-type") || "audio/mpeg";
  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}

// Friendly response for non-POST probes.
export async function onRequest({ request, env }) {
  if (request.method === "POST") return; // handled by onRequestPost
  if (new URL(request.url).searchParams.get("debug") === "keys") {
    return json({ keys: Object.keys(env) });
  }
  return json({ error: "Use POST with { text, slow? }" }, 405);
}
