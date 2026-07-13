"use client";

import { useEffect, useState } from "react";

const STATIC_PHRASE = "building across boundaries";

const PHRASES = [
  "building AI agents",
  "shipping products",
  "wrangling data systems",
  "automating marketing",
  "writing code",
  "still learning",
];

// Same glyph ramp the ASCII streams are drawn with — one character world.
const GLYPHS = ".':;+i1t2f5s8X0@";

const HOLD_MS = 2400;
const LEARNING_HOLD_MS = 4600;
const SCRAMBLE_MS = 450;

export default function RotatingIdentity() {
  // done = resolved words (official ink), raw = still-decoding glyphs (quiet ink)
  const [display, setDisplay] = useState({ done: STATIC_PHRASE, raw: "" });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let raf = 0;
    let i = -1;

    const scrambleTo = (target: string) => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / SCRAMBLE_MS);
        const front = Math.floor(t * target.length);
        let raw = "";
        for (let c = front; c < target.length; c++) {
          const ch = target[c];
          raw += ch === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        setDisplay(
          t < 1 ? { done: target.slice(0, front), raw } : { done: target, raw: "" }
        );
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const next = () => {
      i = (i + 1) % PHRASES.length;
      scrambleTo(PHRASES[i]);
      const hold = PHRASES[i] === "still learning" ? LEARNING_HOLD_MS : HOLD_MS;
      timer = setTimeout(next, hold);
    };

    timer = setTimeout(next, HOLD_MS);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span className="v2-identity">
      {display.done}
      {display.raw && <span className="v2-identity-raw">{display.raw}</span>}.
    </span>
  );
}
