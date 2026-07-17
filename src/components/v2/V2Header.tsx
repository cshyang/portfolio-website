"use client";

import { useEffect, useRef, useState } from "react";
import LiquidLens from "./LiquidLens";
import { v2Navigation } from "@/lib/v2-data";

// Eased scroll glide, cancelled by user input. (Native CSS smooth scroll is
// disabled on v2 — it fights ScrollTrigger's pin/snap and both cancel out.)
function glideTo(targetY: number) {
  const startY = window.scrollY;
  const dist = targetY - startY;
  if (!dist) return;
  const duration = Math.min(1100, 450 + Math.abs(dist) * 0.1);
  const start = performance.now();
  let raf = 0;
  const stop = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
    window.scrollTo(0, startY + dist * eased);
    if (p < 1) raf = requestAnimationFrame(step);
    else stop();
  };
  raf = requestAnimationFrame(step);
}

export default function V2Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = v2Navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    // Entries only report changes, so a section already covering the band never re-reports;
    // use each callback as a trigger and derive the active section from geometry instead.
    const updateActive = () => {
      const bandTop = window.innerHeight * 0.34;
      const bandBottom = window.innerHeight * 0.44;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= bandBottom && rect.bottom >= bandTop;
      });
      setActiveHref(current ? `#${current.id}` : null);
    };

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: "-34% 0px -56%",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Native CSS smooth scrolling fights ScrollTrigger's pin/snap (each cancels the
  // other's scroll), so v2 disables it and drives in-page anchors through GSAP.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest?.('a[href^="#"]');
      if (!anchor || !anchor.closest(".v2-page")) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const target = href === "#top" ? document.body : document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      history.pushState(null, "", href);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        target.scrollIntoView();
        return;
      }
      const y =
        href === "#top"
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - 72;
      glideTo(y);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const activeIndex = v2Navigation.findIndex((item) => item.href === activeHref);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <header className="v2-header">
      <LiquidLens />
      <nav className="v2-desktop-nav" aria-label="Primary navigation">
        <span
          className="v2-nav-lens"
          aria-hidden="true"
          data-visible={activeIndex >= 0}
          style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
        />
        {v2Navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.href === activeHref ? "location" : undefined}
            onClick={() => setActiveHref(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="v2-menu-trigger"
        type="button"
        aria-label="Open navigation"
        onClick={() => dialogRef.current?.showModal()}
      >
        Menu
      </button>

      <dialog className="v2-menu" ref={dialogRef} onClick={(event) => {
        if (event.target === dialogRef.current) closeMenu();
      }}>
        <div className="v2-menu-panel">
          <div className="v2-menu-topline">
            <span>Navigate</span>
            <button type="button" onClick={closeMenu} aria-label="Close navigation">
              Close
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {v2Navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}<span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </header>
  );
}
