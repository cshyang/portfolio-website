"use client";

import { useEffect } from "react";

// Marks the skills section while the confluence is on screen; CSS dissolves
// the domain walls and swells the gutter current in response. IO instead of
// scroll-driven CSS: Chrome's multi-animation view() range mapping proved
// unreliable here, and this works in every browser.
export default function RangeFlow() {
  useEffect(() => {
    const range = document.querySelector(".v2-range");
    const confluence = range?.querySelector(".v2-confluence");
    if (!range || !confluence) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) range.setAttribute("data-flow", "true");
        else range.removeAttribute("data-flow");
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(confluence);
    return () => io.disconnect();
  }, []);

  return null;
}
