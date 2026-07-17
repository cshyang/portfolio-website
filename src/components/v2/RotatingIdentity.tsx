"use client";

import { useEffect, useRef, useState } from "react";

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

// Long holds so the resolved phrase dominates the timeline; the scramble is
// an accent (~8% of each cycle), not the default state a visitor lands on.
const HOLD_MS = 4200;
const LEARNING_HOLD_MS = 5600;
const SCRAMBLE_MS = 380;

export default function RotatingIdentity() {
  // done = resolved words (official ink), raw = still-decoding glyphs (quiet ink)
  const [display, setDisplay] = useState({ done: STATIC_PHRASE, raw: "" });
  const rootRef = useRef<HTMLSpanElement>(null);

  // Ink-swap knockout: measure where the portrait card's left edge crosses the
  // headline so the clone layer can flip to card ink exactly at that seam.
  useEffect(() => {
    const el = rootRef.current;
    const card = el?.closest(".v2-hero")?.querySelector(".v2-hero-portrait");
    if (!el || !card) return;

    const measure = () => {
      const a = el.getBoundingClientRect();
      const b = card.getBoundingClientRect();
      const overlaps =
        b.top < a.bottom && b.bottom > a.top && b.left > a.left && b.left < a.right;
      el.style.setProperty("--v2-cut", overlaps ? `${b.left - a.left}px` : "9999px");
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

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
    <span className="v2-identity" ref={rootRef}>
      <span className="v2-identity-layer">
        {display.done}
        {display.raw && <span className="v2-identity-raw">{display.raw}</span>}.
      </span>
      <span className="v2-identity-layer v2-identity-cut" aria-hidden="true">
        {display.done}
        {display.raw && <span className="v2-identity-raw">{display.raw}</span>}.
      </span>
    </span>
  );
}
