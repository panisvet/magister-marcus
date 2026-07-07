import { useRef, useEffect, useCallback } from "react";

/**
 * useAudio — drop-in replacement for the inline useTts() in ReadingApp.
 *
 * Returns the same speak(text, { slow }) function, so NO other changes to
 * ReadingApp are needed. It just gets smarter about where the audio comes from:
 *
 *   1. Baked clip in /public/audio (from scripts/bake-audio.mjs)  → instant, offline, free
 *   2. Otherwise POST /api/tts (xAI proxy)                        → for lessons not baked yet
 *
 * The manifest key matches the bake script: `${slow ? "s:" : "f:"}${text}`.
 */
export function useAudio() {
  const manifest = useRef(null);     // { "f:cat": "f-cat.mp3", ... } or {}
  const objUrls = useRef(new Map()); // proxy blobs to revoke on unmount
  const audioRef = useRef(null);

  // Load the baked manifest once. If it's absent (none baked yet), we silently
  // fall back to the live proxy for everything.
  useEffect(() => {
    let alive = true;
    fetch("/audio/audio-manifest.json")
      .then((r) => (r.ok ? r.json() : {}))
      .then((m) => { if (alive) manifest.current = m; })
      .catch(() => { manifest.current = {}; });
    return () => {
      alive = false;
      objUrls.current.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);

  const play = useCallback((url) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(url);
    audioRef.current = a;
    return a.play();
  }, []);

  const speak = useCallback(
    async (text, { slow = false } = {}) => {
      if (!text) return;
      const key = `${slow ? "s:" : "f:"}${text}`;
      try {
        const baked = manifest.current?.[key];
        if (baked) {
          await play(`/audio/${baked}`);
          return;
        }
        // Fallback: live proxy (also memoised so repeats are instant this session)
        let url = objUrls.current.get(key);
        if (!url) {
          const res = await fetch("/api/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, slow }),
          });
          if (!res.ok) throw new Error(`tts ${res.status}`);
          url = URL.createObjectURL(await res.blob());
          objUrls.current.set(key, url);
        }
        await play(url);
      } catch (e) {
        console.warn("Pronunciation unavailable:", e.message);
      }
    },
    [play]
  );

  return speak;
}
