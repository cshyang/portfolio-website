import type { Metadata } from "next";
import RangeGlow from "@/components/RangeGlow";
import MotionDemo from "@/components/design/MotionDemo";
import TokenGrid from "@/components/design/TokenGrid";
import "./design.css";

export const metadata: Metadata = {
  title: "Design System — Shyang",
  description:
    "The living design system behind this site: tokens, type, materials, and motion, rendered from the same variables the site ships.",
};

export default function DesignSystemPage() {
  return (
    <div className="v2-page">
      <main className="ds-page">
        <div className="ds-top">
          <h1>Design system</h1>
          <a href="/">← Back to the site</a>
        </div>
        <p className="ds-lede">
          Every specimen on this page renders from the same CSS custom properties the site
          uses — nothing is duplicated, so what you see here is what ships. Tweak a token
          in <code>v2.css</code> and both update together.
        </p>

        <section className="ds-section" aria-labelledby="ds-color">
          <h2 id="ds-color">Color</h2>
          <p className="ds-note">
            Shades of exactly two colors: a cool blue ramp for structure and a warm
            orange ramp for humanity, plus a small lighting group used only inside
            gradient materials. Contrast ratios below are computed live from the tokens —
            change one and the AA verdicts re-evaluate.
          </p>
          <TokenGrid />
        </section>

        <section className="ds-section" aria-labelledby="ds-type">
          <h2 id="ds-type">Typography</h2>
          <p className="ds-note">
            One family — Archivo — carried by weight and scale contrast. Display and
            headline are fluid; body and labels are fixed.
          </p>
          <div className="ds-spec">
            <p className="ds-spec-display">Aa — I build across boundaries.</p>
            <p className="ds-spec-meta">
              <code>--v2-text-display</code> · clamp(3.45rem, 6.3vw, 6rem) · weight 760 ·
              leading 0.94 · tracking −0.035em
            </p>
          </div>
          <div className="ds-spec">
            <p className="ds-spec-headline">Evidence over claims.</p>
            <p className="ds-spec-meta">
              <code>--v2-text-headline</code> · clamp(2.8rem, 5.5vw, 5.5rem) · weight 740 ·
              leading 0.98
            </p>
          </div>
          <div className="ds-spec">
            <p className="ds-spec-body">
              Body text turns rough ideas into useful systems by moving between evidence,
              product judgment, AI, and hands-on building. Lines cap at 68 characters so
              paragraphs stay comfortable at every viewport.
            </p>
            <p className="ds-spec-meta">
              <code>--v2-text-body</code> · 1rem · weight 400 · leading 1.6 · measure ≤ 68ch
            </p>
          </div>
          <div className="ds-spec">
            <p className="ds-spec-label">Operating range · Working principle · Selected work</p>
            <p className="ds-spec-meta">
              <code>--v2-text-label</code> · 0.78rem · weight 720 · tracking 0.02em — the
              single label size used for nav, meta rows, and section kickers
            </p>
          </div>
        </section>

        <section className="ds-section" aria-labelledby="ds-space">
          <h2 id="ds-space">Containers &amp; space</h2>
          <p className="ds-note">
            Conventions rather than tokens: three widths do all the work, and section
            padding breathes with the viewport.
          </p>
          <div className="ds-bars">
            <div className="ds-bar" style={{ width: "100%" }}>
              90rem — section grid max-width
            </div>
            <div className="ds-bar" style={{ width: "68%" }}>
              68ch — prose measure cap
            </div>
            <div className="ds-bar" style={{ width: "42%" }}>
              32rem — heading descriptions
            </div>
            <div className="ds-bar" style={{ width: "56%" }}>
              clamp(3rem, 6vw, 7rem) — section padding
            </div>
          </div>
          <div className="ds-radii">
            <div className="ds-radius" style={{ borderRadius: 8 }}>8px — cards</div>
            <div className="ds-radius" style={{ borderRadius: 12 }}>12px — modules</div>
            <div className="ds-radius" style={{ borderRadius: 999 }}>999px — pills</div>
            <div className="ds-radius" style={{ borderStyle: "solid" }}>1px seam</div>
          </div>
        </section>

        <section className="ds-section" aria-labelledby="ds-interaction">
          <h2 id="ds-interaction">Interaction</h2>
          <p className="ds-note">
            Hover widens or fills; focus is always the 3px ink outline (press Tab to see
            it); touch gets the same affordances as hover. Buttons are pills, inputs are
            underlined fields.
          </p>
          <div className="ds-interactions">
            <div>
              <a className="v2-primary-action" href="#ds-interaction">
                Primary action <span aria-hidden="true">↓</span>
              </a>
              <p className="ds-spec-meta">1px border pill · hover fills with ink</p>
            </div>
            <div>
              <div className="v2-field">
                <label htmlFor="ds-demo-input">Field label</label>
                <input id="ds-demo-input" type="text" placeholder="Underline field…" />
              </div>
              <p className="ds-spec-meta">Label 0.78rem · 1px baseline · placeholder ≥ 4.5:1</p>
            </div>
            <div>
              <span className="ds-tag">Next.js</span>{" "}
              <span className="ds-tag">Python</span>{" "}
              <span className="ds-tag">LangChain</span>
              <p className="ds-spec-meta">Tags: surface pill, label size, weight 650</p>
            </div>
          </div>
        </section>

        <section className="ds-section" aria-labelledby="ds-motion">
          <h2 id="ds-motion">Motion</h2>
          <p className="ds-note">
            One easing curve everywhere. Every animation has a reduced-motion alternative —
            entrances become instant, ambient light freezes at its strongest composition.
          </p>
          <div className="ds-motion-grid">
            <dl className="ds-motion-tokens">
              <div>
                <dt>--v2-ease</dt>
                <dd>cubic-bezier(0.16, 1, 0.3, 1) — exponential ease-out</dd>
              </div>
              <div>
                <dt>260ms</dt>
                <dd>micro-interactions: hover fills, color and gap changes</dd>
              </div>
              <div>
                <dt>~900ms</dt>
                <dd>section reveals: clip-path opens, slight rise</dd>
              </div>
              <div>
                <dt>18s</dt>
                <dd>ambient light drift on color fields, alternating</dd>
              </div>
            </dl>
            <MotionDemo />
          </div>
        </section>

        <section className="ds-section" aria-labelledby="ds-materials">
          <h2 id="ds-materials">Materials</h2>
          <p className="ds-note">
            Texture is never a color — it is a material applied over a token. Three are
            allowed; grain never moves and never sits behind body copy. Move your pointer
            over the third panel.
          </p>
          <div className="ds-materials">
            <figure className="ds-material ds-material--flat">
              <figcaption>flat — token only</figcaption>
            </figure>
            <figure className="ds-material ds-material--grained">
              <figcaption>grained — token + print grain</figcaption>
            </figure>
            <figure className="ds-material ds-material--live">
              <RangeGlow />
              <figcaption>live-lit — light follows the pointer</figcaption>
            </figure>
          </div>

          <h3 className="ds-materials-sub">Extended palette</h3>
          <p className="ds-note">
            Textures from the same print-and-studio world, built from the tokens with SVG
            filters — no image assets. Each must earn a surface before it ships — confluence
            was the first to graduate, backing the Contact section.
          </p>
          <div className="ds-materials">
            <figure className="ds-material v2-mat-confluence">
              <figcaption>confluence — two ramps, one boundary · shipping on Contact</figcaption>
            </figure>
            <figure className="ds-material v2-mat-riso">
              <figcaption className="ds-caption-ink">riso — two-pass print speckle</figcaption>
            </figure>
            <figure className="ds-material v2-mat-halftone">
              <figcaption>halftone — print-dot falloff</figcaption>
            </figure>
            <figure className="ds-material v2-mat-patina">
              <figcaption>patina — mottled rust wash</figcaption>
            </figure>
            <figure className="ds-material v2-mat-wash">
              <figcaption className="ds-caption-ink">ink wash — watercolor pools</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
}
