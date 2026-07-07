# magister-marcus — Fix Plan

**Closed out 2026-05-18.** All items complete.

| Commit | Items |
|---|---|
| `13ef60e` | P0-1 (origin allowlist, server model pin, token cap, OPTIONS fix, config leak), P0-3 (XSS escaping + WelcomeMessage JSX), P2-6 through P2-15 (stale closure, dead state, redundant if/else, browser globals, bogus header, 404 route, max_tokens), P3-16 (Node engine pin), P4-23 (age toggle) |
| `0a4dc4d` | P0-2 (Cloudflare Workers rate limiting — 20 req / 10 s per IP via `wrangler.toml` binding) |
| `b6a2baa` | P4-24/25 (resources field in lesson shape, 15 lessons populated, Resources card rendered in LessonViewer) |
| `4879de4` | P1/P5 (password gate removed; pipeline verified live via curl) |

**Not done / not needed:**
- P4-26: archiving `lesson_viewer.html` — left in place, not in repo
- P5-28/29: GitHub binding + secret confirmed manually in Cloudflare dashboard
- P6-32/33: model switch in Cowork settings — user action
