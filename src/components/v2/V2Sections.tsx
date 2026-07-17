import Image from "next/image";
import PortraitSwap from "./PortraitSwap";
import RangeFlow from "./RangeFlow";
import RangeGlow from "./RangeGlow";
import RotatingIdentity from "./RotatingIdentity";
import ToolMark from "./ToolMark";
import V2Contact from "./V2Contact";
import WorkShowcase from "./WorkShowcase";
import { aiWrapperTools, domains, journey } from "@/lib/v2-data";

export function V2Hero() {
  return (
    <section className="v2-hero" aria-labelledby="v2-hero-heading">
      <div className="v2-hero-copy v2-reveal v2-reveal--one">
        <h1 id="v2-hero-heading">
          <span className="v2-hero-lead">I&rsquo;m</span>
          <RotatingIdentity />
        </h1>
      </div>

      <div className="v2-hero-portrait v2-reveal v2-reveal--two">
        <PortraitSwap />
      </div>

      <div className="v2-hero-context v2-reveal v2-reveal--four">
        <p className="v2-hero-principle">Useful beats impressive.</p>
        <p className="v2-hero-summary">
          I turn rough ideas into useful systems by moving between evidence,
          product judgment, AI, and hands-on building.
        </p>
        <a className="v2-primary-action" href="#work">
          Selected work <span aria-hidden="true">↘</span>
        </a>
      </div>
    </section>
  );
}

export function SelectedWork() {
  return (
    <section className="v2-work" id="work" aria-labelledby="work-heading">
      <div className="v2-section-heading">
        <p className="v2-utility">Selected work</p>
        <h2 id="work-heading">Evidence over claims.</h2>
        <p>
          Public experiments I built end-to-end and shipped in the open. The
          professional record — analytics leadership, recommendation systems,
          healthcare data — lives in the journey below.
        </p>
      </div>

      <WorkShowcase />
    </section>
  );
}

export function OperatingRange() {
  return (
    <section className="v2-range" id="skills" aria-labelledby="skills-heading">
      <RangeGlow />
      <RangeFlow />
      <div className="v2-range-intro">
        <div className="v2-range-lede">
          <p className="v2-utility">Skills</p>
          <h2 id="skills-heading">Four careers, collapsed into one.</h2>
          <p>
            AI didn&rsquo;t replace the stack — it dissolved the walls between
            marketing, product, data, and engineering.
          </p>
        </div>
        <div className="v2-ai-plate">
          <p className="v2-ai-plate-label">One AI layer, under all four.</p>
          <ul className="v2-ai-tools" aria-label="The AI layer that dissolved the walls">
            {aiWrapperTools.map((tool) => (
              <li key={tool}>
                <ToolMark name={tool} />
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="v2-domain-grid">
        {domains.map((domain) => (
          <article key={domain.name}>
            <h3>{domain.name}</h3>
            <p>{domain.blurb}</p>
            <ul className="v2-domain-tools" aria-label={`${domain.name} tools`}>
              {domain.tools.map((tool) => (
                <li key={tool}>
                  <ToolMark name={tool} />
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="v2-range-terminal">
        <strong>One loop now:</strong> find the problem, build the fix, ship
        it to people.
      </p>
    </section>
  );
}

export function Journey() {
  return (
    <section className="v2-journey" id="journey" aria-labelledby="journey-heading">
      <div className="v2-section-heading">
        <p className="v2-utility">Journey</p>
        <h2 id="journey-heading">A career built by crossing the next boundary.</h2>
        <p>
          From analytics to product leadership, then deeper into AI systems and
          hands-on building. This is where the employer-side work lives — the
          parts I can&rsquo;t open-source.
        </p>
      </div>
      <ol className="v2-story-list">
        {journey.map((item) => (
          <li key={item.period}>
            <div className="v2-story-meta">
              <span className="v2-story-mark">
                <Image src={item.logo} alt="" width={56} height={56} />
              </span>
              <span className="v2-story-period">{item.period}</span>
            </div>
            <div className="v2-story-copy">
              <h3>{item.role}</h3>
              <p className="v2-story-company">{item.company}</p>
              <p>{item.story}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function V2Footer() {
  return (
    <footer className="v2-footer">
      <span>© {new Date().getFullYear()} Chau Shyang · Kuala Lumpur · GMT +8</span>
      <a href="/v2/design">Design system</a>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export function V2PageSections() {
  return (
    <>
      <V2Hero />
      <SelectedWork />
      <OperatingRange />
      <Journey />
      <V2Contact />
    </>
  );
}
