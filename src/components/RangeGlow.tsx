"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-aware light layer for "live-lit" surfaces. Renders nothing visible
 * until the pointer enters its parent; eases a radial light toward the cursor
 * using transform/opacity only. Fine pointers with motion allowed only —
 * touch and reduced-motion users keep the static drift composition.
 */
export default function RangeGlow() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const glow = ref.current;
    const host = glow?.parentElement;
    if (!glow || !host) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let settled = true;

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      const resting =
        Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5;
      if (resting) {
        settled = true;
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
      glow.style.opacity = "1";
      if (settled) {
        settled = false;
        frame = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      glow.style.opacity = "0";
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <i ref={ref} className="v2-range-glow" aria-hidden="true" />;
}
