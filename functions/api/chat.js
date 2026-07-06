// Cloudflare Pages Function: /api/chat
// Proxies to Anthropic API — keeps the API key server-side

export async function onRequestPost({ request, env }) {
  const apiKey = env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing ANTHROPIC_API_KEY' }), {
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

  const { messages, system, lessonContext } = body

  // Build system prompt for Marcus
  const systemPrompt = system || [
    'You are Magister Marcus, a patient and encouraging Latin tutor.',
    'You help students understand Latin grammar, vocabulary, and translation.',
    'Keep explanations concise and age-appropriate.',
    'Always encourage the student and celebrate their progress.',
    lessonContext ? `The student is currently studying: ${lessonContext}` : '',
  ].filter(Boolean).join('\n')

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages || [],
    }),
  })

  if (!resp.ok) {
    const err = await resp.text()
    return new Response(JSON.stringify({ error: err }), {
      status: resp.status,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const data = await resp.json()
  return new Response(JSON.stringify({ content: data.content[0]?.text || '' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
