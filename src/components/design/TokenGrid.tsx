"use client";

import { useEffect, useRef, useState } from "react";

const GROUPS: Array<{ title: string; note: string; tokens: string[] }> = [
  {
    title: "Cool ramp",
    note: "One blue family (hue 242–261), lightness .99 → .29. Structure: text, surfaces, seams — with --v2-blue as the chroma spike.",
    tokens: ["white", "paper", "surface", "seam", "blue", "muted", "ink"],
  },
  {
    title: "Warm ramp",
    note: "One orange family (hue 31–42), lightness .90 → .36. Warmth: portrait field, contact, kickers.",
    tokens: ["pale-orange", "orange", "vermilion", "oxide"],
  },
  {
    title: "Field lighting",
    note: "Hue 222–259, alpha baked in. Only inside gradient materials (Range light, pointer glow) — never for text or surfaces.",
    tokens: ["light-1", "light-2", "light-3", "glow"],
  },
];

const PAIRS: Array<{ label: string; fg: string; bg: string }> = [
  { label: "Body text", fg: "ink", bg: "paper" },
  { label: "Muted text", fg: "muted", bg: "paper" },
  { label: "Text on cards", fg: "ink", bg: "white" },
  { label: "Range field", fg: "white", bg: "blue" },
  { label: "Contact field", fg: "white", bg: "vermilion" },
  { label: "Footer", fg: "white", bg: "ink" },
];

// oklch(L C H [/ a]) -> linear sRGB, for WCAG luminance (alpha ignored; contrast pairs are opaque tokens).
function oklchToLinearRgb(raw: string): [number, number, number] | null {
  const m = raw.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  if (!m) return null;
  const L = parseFloat(m[1]);
  const C = parseFloat(m[2]);
  const H = (parseFloat(m[3]) * Math.PI) / 180;
  const a = C * Math.cos(H);
  const b = C * Math.sin(H);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const mm = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * mm + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * mm - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * mm + 1.707614701 * s,
  ];
}

function contrast(fgRaw: string, bgRaw: string): number | null {
  const fg = oklchToLinearRgb(fgRaw);
  const bg = oklchToLinearRgb(bgRaw);
  if (!fg || !bg) return null;
  const lum = ([r, g, b]: [number, number, number]) =>
    0.2126 * Math.max(0, r) + 0.7152 * Math.max(0, g) + 0.0722 * Math.max(0, b);
  const [hi, lo] = [lum(fg), lum(bg)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export default function TokenGrid() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const host = rootRef.current?.closest(".v2-page");
    if (!host) return;
    const style = getComputedStyle(host);
    const next: Record<string, string> = {};
    GROUPS.flatMap((g) => g.tokens).forEach((name) => {
      next[name] = style.getPropertyValue(`--v2-${name}`).trim();
    });
    setValues(next);
  }, []);

  return (
    <div ref={rootRef}>
      {GROUPS.map((group) => (
        <div className="ds-ramp" key={group.title}>
          <h3>{group.title}</h3>
          <p className="ds-ramp-note">{group.note}</p>
          <div className="ds-swatches">
            {group.tokens.map((name) => (
              <div className="ds-swatch" key={name}>
                <i style={{ background: `var(--v2-${name})` }} />
                <dl>
                  <dt>--v2-{name}</dt>
                  <dd>{values[name] ?? "…"}</dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      ))}

      <table className="ds-pairs">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Sample</th>
            <th>Ratio</th>
            <th>WCAG AA</th>
          </tr>
        </thead>
        <tbody>
          {PAIRS.map(({ label, fg, bg }) => {
            const ratio =
              values[fg] && values[bg] ? contrast(values[fg], values[bg]) : null;
            const passes = ratio !== null && ratio >= 4.5;
            return (
              <tr key={label}>
                <td>{label}</td>
                <td>
                  <span
                    className="ds-sample"
                    style={{ color: `var(--v2-${fg})`, background: `var(--v2-${bg})` }}
                  >
                    Aa {fg} / {bg}
                  </span>
                </td>
                <td>{ratio ? `${ratio.toFixed(2)}:1` : "…"}</td>
                <td className={passes ? "ds-pass" : "ds-fail"}>
                  {ratio ? (passes ? "Pass" : "Fail") : "…"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
