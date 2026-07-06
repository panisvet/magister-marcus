// Serve the SPA shell for /via-latina so React Router can handle the route
export async function onRequest(context) {
  const url = new URL(context.request.url)
  url.pathname = '/'
  return context.env.ASSETS.fetch(new Request(url.toString(), context.request))
}
