"use client";

import { cloneElement, type MouseEvent, type ReactElement } from "react";

/** Adds the design's magnetic drift to a button/link: dx·0.22, dy·0.32,
 *  springing back on leave. Applied to the child itself so the CSS spring
 *  transition on transform does the easing. */
export default function Magnetic({ children }: { children: ReactElement }) {
  function onMove(e: MouseEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }
  function onLeave(e: MouseEvent<HTMLElement>) {
    e.currentTarget.style.transform = "translate(0, 0)";
  }
  return cloneElement(children, { onMouseMove: onMove, onMouseLeave: onLeave });
}
