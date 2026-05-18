/**
 * Cloudflare Pages Function — /api/chat
 * Proxies requests to Anthropic API.
 * ANTHROPIC_API_KEY is stored as a Cloudflare secret (never in code).
 */

const PINNED_MODEL = 'claude-sonnet-4-5-20250929';
const MAX_TOKENS_CAP = 1024;

const ALLOWED_ORIGINS = [
  'https://magister-marcus.pages.dev',
  'http://localhost:5173',
  'http://localhost:4173',
];

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Rate limit by IP (20 req / 10 s per edge location)
  if (env.CHAT_RATE_LIMITER) {
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const { success } = await env.CHAT_RATE_LIMITER.limit({ key: ip });
    if (!success) {
      return new Response(
        JSON.stringify({ error: { message: 'Too many requests.' } }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  const origin = request.headers.get('Origin') || '';
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  const headers = corsHeaders(origin);

  // Validate API key is configured
  if (!env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY secret not configured in Cloudflare dashboard.');
    return new Response(
      JSON.stringify({ error: { message: 'Server misconfigured.' } }),
      { status: 500, headers: { ...headers, 'Content-Type': 'application/json' } }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: { message: 'Invalid JSON body.' } }),
      { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } }
    );
  }

  // Build a clean payload — pin model server-side, cap tokens, whitelist fields only
  const payload = {
    model: PINNED_MODEL,
    max_tokens: Math.min(body.max_tokens ?? MAX_TOKENS_CAP, MAX_TOKENS_CAP),
    messages: body.messages,
  };
  if (body.system) payload.system = body.system;

  // Forward to Anthropic
  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(payload),
  });

  const data = await anthropicRes.json();

  return new Response(JSON.stringify(data), {
    status: anthropicRes.status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}

// Handle OPTIONS preflight — same allowlist, never wildcard
export async function onRequestOptions(context) {
  const { request } = context;
  const origin = request.headers.get('Origin') || '';

  if (!ALLOWED_ORIGINS.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}
