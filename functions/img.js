export async function onRequest(context) {
  const url = new URL(context.request.url);
  const target = url.searchParams.get('url');
  if (!target || !target.startsWith('https://upload.wikimedia.org/')) {
    return new Response('Invalid URL', { status: 400 });
  }
  const res = await fetch(target, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; ScholaDomestica/1.0)',
      'Referer': 'https://en.wikipedia.org/',
    }
  });
  const headers = new Headers(res.headers);
  headers.set('Cache-Control', 'public, max-age=86400');
  return new Response(res.body, { status: res.status, headers });
}
