"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { sketchingNow } from "@/lib/data";
import Magnetic from "./Magnetic";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Typewriter with the design's cadence: type 65–135ms, hold 2.2s,
 *  delete 32ms, 350ms pause between words. */
function useTypewriter(words: readonly string[]) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduceMotion()) {
      setTyped(words[0]);
      return;
    }
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      const word = words[pi];
      if (!deleting) {
        ci++;
        setTyped(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          t = setTimeout(step, 2200);
          return;
        }
        t = setTimeout(step, 65 + Math.random() * 70);
      } else {
        ci--;
        setTyped(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % words.length;
          t = setTimeout(step, 350);
          return;
        }
        t = setTimeout(step, 32);
      }
    };
    t = setTimeout(step, 800);
    return () => clearTimeout(t);
  }, [words]);

  return typed;
}

// The design's hero cinemagraph. Drop the mp4 at this path in public/ and the
// hero upgrades itself from the static sketch automatically.
const HERO_VIDEO = "/videos/brush-pen-cafe-cinemagraph.mp4";

export default function Hero() {
  const typed = useTypewriter(sketchingNow);
  const artRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(false);

  // Parallax: translateY(min(scrollY, 800) * 0.08), straight from the design.
  useEffect(() => {
    if (reduceMotion()) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = artRef.current;
        if (el) el.style.transform = `translateY(${Math.min(window.scrollY, 800) * 0.08}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section aria-label="Hero" className="sk-hero" id="top">
      <div>
        <p className="sk-hero-kicker sk-ink-in">page 01 — the builder himself</p>
        <h1 className="sk-hero-title sk-ink-in" style={{ "--d": "120ms" } as React.CSSProperties}>
          <span className="sk-outline">I SKETCH,</span>
          <span className="sk-solid">THEN I SHIP.</span>
        </h1>
        <p className="sk-hero-lead sk-ink-in" style={{ "--d": "240ms" } as React.CSSProperties}>
          Every opportunity is a new page; every obstacle is a chance to learn
          and level up. AI agents, data pipelines, product loops. The good ones
          get built and shipped. Fifteen years of pages so far.
        </p>
        <p className="sk-type-line sk-ink-in" style={{ "--d": "360ms" } as React.CSSProperties}>
          currently sketching: <span className="sk-type-word">{typed}</span>
          <span className="sk-caret" aria-hidden="true" />
        </p>
        <div className="sk-hero-actions sk-ink-in" style={{ "--d": "480ms" } as React.CSSProperties}>
          <Magnetic>
            <a href="#work" className="sk-btn">
              Flip through the work →
            </a>
          </Magnetic>
          <span className="sk-hero-start">← start here!</span>
        </div>
      </div>

      <div className="sk-hero-art" ref={artRef}>
        <div className="sk-hero-panel">
          {!videoOk && (
            <Image
              src="/images/sketches/hero-shyang.webp"
              alt="Blue ballpoint self-portrait sketch: Shyang at a desk with laptop, plants, and coffee"
              width={880}
              height={660}
              priority
            />
          )}
          {/* Enhancement only: stays hidden unless the mp4 exists and plays. */}
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            autoPlay
            muted
            playsInline
            style={{ display: videoOk ? undefined : "none" }}
            onPlaying={() => {
              if (!reduceMotion()) setVideoOk(true);
            }}
            onTimeUpdate={(e) => {
              // loop back before the file ends so playback never stalls on 'ended'
              const v = e.currentTarget;
              if (v.duration && v.currentTime > v.duration - 0.18) v.currentTime = 0.5;
            }}
          />
        </div>
        <span className="sk-hero-caption">me, allegedly working</span>
      </div>
    </section>
  );
}
