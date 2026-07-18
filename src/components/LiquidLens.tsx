"use client";

import { useEffect } from "react";
import gsap from "gsap";

// True glass lensing: an SVG displacement map warps the backdrop at the rim
// (backdrop-filter: url()). Chromium-only — gated via userAgentData, so
// Safari/Firefox keep the plain CSS frost. Pointer entry deepens the lens.
type LensConfig = {
  selector: string;
  base: number;
  hover: number;
  blur: number;
  hoverBlur: number;
  hoverTarget?: string;
};

const LENSES: LensConfig[] = [
  { selector: ".v2-header", base: 22, hover: 52, blur: 9, hoverBlur: 13 },
  { selector: ".v2-primary-action", base: 16, hover: 56, blur: 5, hoverBlur: 12 },
];

// R/G channels encode x/y displacement. Linear term = true magnification
// (everything under the glass enlarges); cubic term = extra bend at the rim.
function lensMap(w: number, h: number) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = (x / (w - 1)) * 2 - 1;
      const ny = (y / (h - 1)) * 2 - 1;
      const r = Math.min(1, Math.hypot(nx, ny));
      const bulge = 0.45 * r + 0.55 * r ** 3;
      const i = (y * w + x) * 4;
      d[i] = 255 * (0.5 - nx * bulge * 0.5);
      d[i + 1] = 255 * (0.5 - ny * bulge * 0.5);
      d[i + 2] = 0;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

const NS = "http://www.w3.org/2000/svg";

export default function LiquidLens() {
  useEffect(() => {
    type UAData = { brands?: { brand: string }[] };
    const ua = (navigator as { userAgentData?: UAData }).userAgentData;
    if (!ua?.brands?.some((b) => b.brand.includes("Chromium"))) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    const defs = document.createElementNS(NS, "defs");
    svg.appendChild(defs);
    document.body.appendChild(svg);
    const cleanups: (() => void)[] = [() => svg.remove()];

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    LENSES.forEach((cfg, idx) => {
      const el = document.querySelector<HTMLElement>(cfg.selector);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = Math.max(2, Math.round(rect.width));
      const h = Math.max(2, Math.round(rect.height));
      const map = lensMap(w, h);
      if (!map) return;

      const id = `v2-lens-${idx}`;
      const filter = document.createElementNS(NS, "filter");
      filter.setAttribute("id", id);
      filter.setAttribute("x", "0");
      filter.setAttribute("y", "0");
      filter.setAttribute("width", "100%");
      filter.setAttribute("height", "100%");
      filter.setAttribute("color-interpolation-filters", "sRGB");

      const feImage = document.createElementNS(NS, "feImage");
      feImage.setAttribute("href", map);
      feImage.setAttribute("x", "0");
      feImage.setAttribute("y", "0");
      feImage.setAttribute("width", String(w));
      feImage.setAttribute("height", String(h));
      feImage.setAttribute("result", "map");

      const disp = document.createElementNS(NS, "feDisplacementMap");
      disp.setAttribute("in", "SourceGraphic");
      disp.setAttribute("in2", "map");
      disp.setAttribute("scale", String(cfg.base));
      disp.setAttribute("xChannelSelector", "R");
      disp.setAttribute("yChannelSelector", "G");

      const blur = document.createElementNS(NS, "feGaussianBlur");
      blur.setAttribute("stdDeviation", String(cfg.blur));

      filter.append(feImage, disp, blur);
      defs.appendChild(filter);

      const prev = el.style.backdropFilter;
      const chain = `url(#${id}) saturate(190%) brightness(1.06)`;
      el.style.backdropFilter = chain;
      el.style.setProperty("-webkit-backdrop-filter", chain);
      cleanups.push(() => {
        el.style.backdropFilter = prev;
        el.style.setProperty("-webkit-backdrop-filter", prev);
      });

      if (reduceMotion) return;
      const hoverEl = (cfg.hoverTarget && document.querySelector(cfg.hoverTarget)) || el;
      // Hover = the glass "thickens": magnification and frost rise together.
      const lens = { v: cfg.base, b: cfg.blur };
      const apply = () => {
        disp.setAttribute("scale", String(lens.v));
        blur.setAttribute("stdDeviation", String(lens.b));
      };
      const enter = () =>
        gsap.to(lens, { v: cfg.hover, b: cfg.hoverBlur, duration: 0.5, ease: "power2.out", onUpdate: apply });
      const leave = () =>
        gsap.to(lens, { v: cfg.base, b: cfg.blur, duration: 0.65, ease: "power2.inOut", onUpdate: apply });
      hoverEl.addEventListener("mouseenter", enter);
      hoverEl.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        hoverEl.removeEventListener("mouseenter", enter);
        hoverEl.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
