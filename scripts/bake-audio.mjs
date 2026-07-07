/**
 * scripts/bake-audio.mjs
 *
 * Generate every pronunciation clip the reader needs, ONCE, and save them to
 * public/audio/ so the iPad app plays local files (instant, free, offline).
 *
 * What it builds, per word in the dataset:
 *   • one clip per phoneme, stretched   ("mmm", "sss", "aaa" …)   key "s:<say>"
 *   • the whole word at normal speed                              key "f:<word>"
 *   • the whole word sounded-out slowly (phonemes + pauses)       key "s:<word>"
 * Plus story words. Output: public/audio/*.mp3 + public/audio/audio-manifest.json
 *
 * Keys match exactly what ReadingApp sends, so the app needs no logic changes —
 * just the useAudio hook, which checks the manifest before calling /api/tts.
 *
 * RUN (from repo root):
 *   XAI_API_KEY=sk-...  node scripts/bake-audio.mjs
 * Optional:
 *   XAI_TTS_VOICE=eve   (eve|ara|rex|sal|leo)
 *
 * Safe to re-run: existing files are skipped, so it resumes if interrupted
 * and only generates new lessons you add later.
 */

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "src/reading/tyc_reading_data.json");
const OUT = path.join(ROOT, "public/audio");
const MANIFEST = path.join(OUT, "audio-manifest.json");

const XAI_URL = "https://api.x.ai/v1/tts";
const KEY = process.env.XAI_API_KEY;
const VOICE = process.env.XAI_TTS_VOICE || "eve";
const DELAY_MS = 150; // be gentle on rate limits

if (!KEY) {
  console.error("Missing XAI_API_KEY. Run: XAI_API_KEY=sk-... node scripts/bake-audio.mjs");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p, constants.F_OK).then(() => true, () => false);
const slug = (k) => k.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") + ".mp3";

// Symbols that map to a /sound/ but aren't first-class inventory rows.
const OVERRIDES = { tt: "t", ll: "l", ss: "s", dd: "d", ff: "f" };

async function xaiTts(text) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(XAI_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice_id: VOICE, language: "en" }),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429 || res.status >= 500) {
      await sleep(800 * attempt);
      continue;
    }
    throw new Error(`xAI ${res.status}: ${await res.text()}`);
  }
  throw new Error("xAI failed after 3 attempts");
}

const data = JSON.parse(await readFile(DATA, "utf8"));
const SAY = Object.fromEntries(data.phonemeInventory.map((p) => [p.symbol, p.say]));
const sayFor = (sym) => SAY[sym] || SAY[OVERRIDES[sym]] || sym;

// ── Build the job list: key -> text to synthesize ────────────────────────────
const jobs = new Map(); // key -> text
const addWord = (w) => {
  if (!w?.sounds) return;
  for (const s of w.sounds) jobs.set(`s:${sayFor(s)}`, sayFor(s)); // stretched sound
  jobs.set(`f:${w.word}`, w.word); // whole word, normal
  jobs.set(`s:${w.word}`, w.sounds.map(sayFor).join(" [pause 0.2s] ")); // slow blend
};

const wordByText = new Map(data.lessons.flatMap((l) => l.decodableWords.map((w) => [w.word, w])));
for (const l of data.lessons) {
  l.decodableWords.forEach(addWord);
  if (l.story) {
    for (const w of l.story.words) {
      const known = wordByText.get(w);
      if (known) addWord(known);
      else jobs.set(`f:${w}`, w); // story-only word: at least a normal clip
    }
  }
}

const missing = [...new Set([].concat(...data.lessons.map((l) => l.decodableWords)).flatMap((w) => w.sounds))]
  .filter((s) => !SAY[s] && !OVERRIDES[s]);
if (missing.length) console.warn("⚠ No 'say' string for:", missing.join(", "), "→ using symbol as-is");

// ── Generate ────────────────────────────────────────────────────────────────
await mkdir(OUT, { recursive: true });
const manifest = {};
let made = 0, skipped = 0;
const entries = [...jobs.entries()];
console.log(`Baking ${entries.length} clips → ${path.relative(ROOT, OUT)}`);

for (const [key, text] of entries) {
  const file = slug(key);
  manifest[key] = file;
  const dest = path.join(OUT, file);
  if (await exists(dest)) { skipped++; continue; }
  try {
    const buf = await xaiTts(text);
    await writeFile(dest, buf);
    made++;
    process.stdout.write(`  ✓ ${key.padEnd(18)} ${file}\n`);
    await sleep(DELAY_MS);
  } catch (e) {
    console.error(`  ✗ ${key}: ${e.message}`);
  }
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`\nDone. ${made} new, ${skipped} already present. Manifest: ${path.relative(ROOT, MANIFEST)}`);
