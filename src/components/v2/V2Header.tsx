"use client";

import { useEffect, useRef, useState } from "react";
import { v2Navigation } from "@/lib/v2-data";

export default function V2Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = v2Navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) setActiveHref(`#${activeEntry.target.id}`);
      },
      { rootMargin: "-34% 0px -56%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeIndex = v2Navigation.findIndex((item) => item.href === activeHref);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <header className="v2-header">
      <a className="v2-wordmark" href="#top" aria-label="Shyang, back to top">
        SHYANG<span aria-hidden="true">.</span>
      </a>

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

      <a className="v2-availability" href="#contact">
        <span aria-hidden="true" /> Available
      </a>

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
