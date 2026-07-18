// ── Audio resolver for recorded Latin phonemes ─────────────────────────────
//
// File naming convention in /public/audio/:
//   Nouns:   {audio_key}/{form}-{case_abbr}-{number}.m4a
//              e.g. puella/puella-nom-sg.m4a, puella/puellam-acc-sg.m4a
//   Verbs:   {audio_key}-present/{form}-{person}.m4a
//              e.g. amo-present/amo-1sg.m4a, video-present/video-1sg.m4a
//   Phonemes: {key}.m4a  (flat)
//              e.g. vowel-a.m4a, consonant-c-hard.m4a

const CASE_MAP = {
  'nominative': 'nom',
  'genitive':   'gen',
  'dative':     'dat',
  'accusative': 'acc',
  'ablative':   'abl',
}

// Detect plural from the case label string (e.g. "Nominative pl." or "Nom. pl.")
function isPlural(caseLabel) {
  return /\bpl\b/i.test(caseLabel)
}

function caseAbbr(caseLabel) {
  const lower = caseLabel.toLowerCase()
  for (const [full, abbr] of Object.entries(CASE_MAP)) {
    if (lower.startsWith(full) || lower.startsWith(abbr)) return abbr
  }
  return null
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * URL for a vocab flashcard — plays the base (dictionary) form.
 * For nouns: nominative singular.
 * For verbs: 1st person singular present.
 */
export function vocabAudioUrl(vocabItem) {
  const key = vocabItem?.audio_key
  if (!key) return null
  const pos = vocabItem?.pos?.toLowerCase() || ''

  if (pos === 'verb') {
    // e.g. /audio/amo-present/amo-1sg.m4a
    return `/audio/${key}-present/${key}-1sg.m4a`
  }

  // Noun / adjective / other — nominative singular
  // e.g. /audio/puella/puella-nom-sg.m4a
  return `/audio/${key}/${key}-nom-sg.m4a`
}

/**
 * URL for a paradigm table row.
 *
 * For noun declension rows: { case, example, ... }
 *   caseLabel  e.g. "Nominative", "Accusative sg.", "Nominative pl."
 *   form       the inflected Latin form, e.g. "puellam"
 *   audioKey   the base word key, e.g. "puella"
 *
 * For verb conjugation rows: { person, form, ... }
 *   person     e.g. "1sg", "3pl"
 *   form       conjugated form, e.g. "amo", "amat"
 *   audioKey   the verb stem key, e.g. "amo" or "video"
 */
export function paradigmAudioUrl(audioKey, row) {
  if (!row) return null

  // Rows with an explicit clip path (declension-clip data format) win outright
  if (row.clip) return `/audio/${row.clip}.m4a`

  if (!audioKey) return null

  // Verb conjugation rows have a `person` field
  if (row.person) {
    // person might be "1sg", "2sg" etc.
    const person = row.person.replace(/\s+/g, '')
    const form = (row.form || row.latin)?.split(' ')[0] // take first form if "amatus/a sum"
    if (!form) return null
    return `/audio/${audioKey}-present/${form}-${person}.m4a`
  }

  // Noun/adjective declension rows have a `case` field
  if (row.case && row.example) {
    const abbr = caseAbbr(row.case)
    if (!abbr) return null
    const number = isPlural(row.case) ? 'pl' : 'sg'
    const form = row.example.toLowerCase()
    return `/audio/${audioKey}/${form}-${abbr}-${number}.m4a`
  }

  return null
}

/**
 * Phoneme audio URL — for pronunciation guide / consonant/vowel sounds.
 * key e.g. "vowel-a", "consonant-c-hard", "diphthong-au"
 */
export function phonemeAudioUrl(key) {
  return `/audio/${key}.m4a`
}

// In-session cache of Grok (xAI) TTS audio, keyed by the spoken text, so
// repeats don't re-hit the API.
const ttsCache = new Map()

/**
 * Play a URL — tries the recorded clip first, then Grok "leo" TTS via the
 * /api/tts proxy (key stays server-side), then the browser's built-in speech
 * synthesis as a last resort. Resolves when playback ends or all options fail.
 */
export function playUrl(url, fallbackText = '') {
  return new Promise((resolve) => {
    // No recorded clip → go straight to server (Grok) TTS.
    if (!url) {
      serverSpeak(fallbackText, resolve)
      return
    }

    const audio = new Audio(url)
    audio.onended = resolve
    audio.onerror = () => serverSpeak(fallbackText, resolve)   // clip missing → Grok
    audio.play().catch(() => serverSpeak(fallbackText, resolve))
  })
}

// Grok "leo" TTS via /api/tts. Voice/model are configured server-side in
// functions/api/tts.js. Falls back to the browser voice if the proxy fails.
async function serverSpeak(text, onDone) {
  if (!text) { onDone(); return }
  let settled = false
  const finish = () => { if (!settled) { settled = true; onDone() } }
  const toBrowser = () => { if (!settled) { settled = true; browserSpeak(text, onDone) } }
  try {
    let objUrl = ttsCache.get(text)
    if (!objUrl) {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (!res.ok) throw new Error(`tts ${res.status}`)
      objUrl = URL.createObjectURL(await res.blob())
      ttsCache.set(text, objUrl)
    }
    const audio = new Audio(objUrl)
    audio.onended = finish
    audio.onerror = toBrowser
    await audio.play()
  } catch {
    toBrowser()
  }
}

function browserSpeak(text, onDone) {
  if (!window.speechSynthesis) { onDone(); return }
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  const voices = window.speechSynthesis.getVoices()
  const preferred = voices.find(v => v.lang.startsWith('it')) ||
                    voices.find(v => v.lang.startsWith('es')) ||
                    voices[0]
  if (preferred) utt.voice = preferred
  utt.rate = 0.85
  utt.onend = onDone
  utt.onerror = onDone
  window.speechSynthesis.speak(utt)
}
