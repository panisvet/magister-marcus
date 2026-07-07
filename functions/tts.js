export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const body = await request.json();
    const apiKey = request.headers.get("X-API-Key");
    
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "No API key" }), { status: 401 });
    }

    const resp = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify(body),
    });

    const audio = await resp.arrayBuffer();
    
    return new Response(audio, {
      status: resp.status,
      headers: {
        "Content-Type": "audio/mpeg",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-API-Key",
    },
  });
}
