"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { chapters } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/* eslint-disable @next/next/no-img-element -- decorative logo chips inside
   overflow-hidden circles; plain <img> matches the design markup */

export default function Story() {
  const listRef = useRef<HTMLOListElement>(null);
  // draw: blue line (leads); charge: orange overlay (follows, flickering in the
  // design's `supercharge` keyframe — here it fills smoothly with the glow).
  const [progress, setProgress] = useState({ draw: 0, charge: 0 });

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // blue line draws over the timeline's visible travel
        const draw = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
        // orange charge trails slightly behind
        const charge = (vh * 0.7 - rect.top) / (rect.height + vh * 0.2);
        setProgress({
          draw: Math.min(1, Math.max(0, draw)),
          charge: Math.min(1, Math.max(0, charge)),
        });
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
      <ol className="sk-timeline" ref={listRef}>
        <span
          aria-hidden="true"
          className="sk-track"
          style={{ "--sk-draw": progress.draw } as CSSProperties}
        />
        <span
          aria-hidden="true"
          className="sk-track-charge"
          style={{ "--sk-charge": progress.charge } as CSSProperties}
        />
        {chapters.map((ch, i) => (
          <li
            key={ch.kicker}
            className={`sk-chapter${ch.current ? " sk-chapter--current" : ""}`}
            data-lit={!ch.current && progress.charge >= ch.igniteAt}
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
