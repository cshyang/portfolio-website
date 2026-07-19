"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { chapters } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/* eslint-disable @next/next/no-img-element -- decorative logo chips inside
   overflow-hidden circles; plain <img> matches the design markup */

export default function Story() {
  const listRef = useRef<HTMLOListElement>(null);
  // Blue line draws with scroll; the orange supercharge fires only once the
  // last chapter enters the viewport (the design's --zap timeline), surging
  // top-to-bottom and igniting each node in sequence.
  const [draw, setDraw] = useState(0);
  const [charged, setCharged] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (vh * 0.85 - rect.top) / (rect.height + vh * 0.25);
        const draw = Math.min(1, Math.max(0, p));
        setDraw(draw);
        // the surge fires only once the drawn blue tip touches ch.4's node
        const last = el.querySelector<HTMLElement>(".sk-chapter:last-child");
        if (last) setCharged(draw * rect.height >= last.offsetTop + 6);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="journey" aria-labelledby="journey-heading" className="sk-section">
      <SectionHead
        id="journey-heading"
        title="EARLIER CHAPTERS"
        note="the employer-side work — the pages I can’t open-source"
      />
      <ol className="sk-timeline" ref={listRef} data-charged={charged}>
        <span
          aria-hidden="true"
          className="sk-track"
          style={{ "--sk-draw": draw } as CSSProperties}
        />
        <span aria-hidden="true" className="sk-track-charge" />
        {chapters.map((ch, i) => (
          <li
            key={ch.kicker}
            className={`sk-chapter${ch.current ? " sk-chapter--current" : ""}`}
            style={{ "--ignite-delay": `${0.16 + i * 0.34}s` } as CSSProperties}
          >
            {ch.logos.map((logo, j) => (
              <span
                key={logo}
                aria-hidden="true"
                className={`sk-node sk-node-${j + 1}`}
              >
                <img src={logo} alt="" />
              </span>
            ))}
            <Reveal delayMs={i * 60}>
              <p className="sk-chapter-kicker">{ch.kicker}</p>
              <h3 className="sk-chapter-role">
                {ch.role} <span className="sk-chapter-company">— {ch.company}</span>
              </h3>
              <p className="sk-chapter-story">{ch.story}</p>
              <p className="sk-chapter-unlocked">{ch.unlocked}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
