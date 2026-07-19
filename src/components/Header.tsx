"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { navigation, sectionIds } from "@/lib/data";

export default function Header() {
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // progress rail
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setProgress(max > 0 ? doc.scrollTop / max : 0);
        // scroll-spy: section owning the 40%-height band is active (design logic)
        const band = window.innerHeight * 0.4;
        let next = -1;
        sectionIds.forEach((id, idx) => {
          const s = document.getElementById(id);
          if (!s) return;
          const r = s.getBoundingClientRect();
          if (r.top <= band && r.bottom >= band * 0.85 && next === -1) next = idx;
        });
        setActive(next);
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
    <>
      <div className="sk-progress" aria-hidden="true">
        <span
          className="sk-progress-fill"
          style={{ "--sk-progress": progress } as CSSProperties}
        />
      </div>
      <a href="#top" className="sk-brand">
        Shyang ✎
      </a>
      <header className="sk-nav">
        <nav aria-label="Primary navigation" className="sk-nav-links">
          <span
            aria-hidden="true"
            className="sk-nav-lens"
            style={{
              opacity: active >= 0 ? 1 : 0,
              transform: `translateX(${Math.max(active, 0) * 100}%) rotate(-1deg)`,
            }}
          />
          {navigation.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="sk-nav-link"
              data-active={active === idx}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
