// ─────────────────────────────────────────────────────────────────────────────
// VocabChips.jsx
// Renders a lesson's vocabulary as chips. Tapping a chip that has a definition
// reveals it in a panel below (touch-friendly); desktop also gets a native
// hover tooltip. Words without a definition still render, just not clickable.
//
// Definitions come from VOCAB_DEFS (332 entries) re-exported by lessons.js.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { VOCAB_DEFS } from "../data/lessons.js";

export default function VocabChips({ words = [] }) {
  const [active, setActive] = useState(null);
  if (!words.length) return null;

  const def = active ? VOCAB_DEFS[active] : null;

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {words.map((w) => {
          const has = Boolean(VOCAB_DEFS[w]);
          const isOn = active === w;
          return (
            <button
              key={w}
              type="button"
              title={has ? VOCAB_DEFS[w] : undefined}
              onClick={() => has && setActive(isOn ? null : w)}
              aria-expanded={has ? isOn : undefined}
              style={{
                display: "inline-block",
                background: isOn ? "#3a2848" : "#1a1028",
                border: `1px solid ${isOn ? "#8a6aa8" : "#3a2848"}`,
                borderRadius: 2,
                padding: "3px 8px",
                fontSize: 11,
                color: isOn ? "#e6d4f4" : "#b898c8",
                fontStyle: "italic",
                cursor: has ? "pointer" : "default",
                fontFamily: "inherit",
                lineHeight: 1.5,
                transition: "background .12s ease, color .12s ease",
              }}
            >
              {w}
              {has && (
                <span aria-hidden="true" style={{ opacity: 0.55, marginLeft: 4, fontStyle: "normal" }}>
                  {isOn ? "▾" : "ⓘ"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {def && (
        <div
          role="status"
          style={{
            marginTop: 9,
            background: "rgba(138, 106, 168, 0.12)",
            border: "1px solid #3a2848",
            borderLeft: "3px solid #8a6aa8",
            borderRadius: 6,
            padding: "8px 11px",
            fontSize: 12.5,
            lineHeight: 1.55,
            color: "#d8c8a8",
            fontStyle: "normal",
          }}
        >
          <strong style={{ color: "#e6d4f4", fontStyle: "italic" }}>{active}</strong>
          {" — "}
          {def}
        </div>
      )}
    </div>
  );
}
