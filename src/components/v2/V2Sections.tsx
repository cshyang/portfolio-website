import Image from "next/image";
import PortraitSwap from "./PortraitSwap";
import RangeGlow from "./RangeGlow";
import RotatingIdentity from "./RotatingIdentity";
import V2Contact from "./V2Contact";
import WorkShowcase from "./WorkShowcase";
import { disciplines, journey } from "@/lib/v2-data";

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
      <div className="v2-range-intro">
        <p className="v2-utility">Skills</p>
        <h2 id="skills-heading">Every skill here was once a gap.</h2>
        <p>I started in analytics, moved into product and AI, then learned to build enough of the real thing to test the assumptions myself.</p>
      </div>
      <div className="v2-discipline-list">
        {disciplines.map((discipline) => (
          <article key={discipline.name}>
            <h3>{discipline.name}</h3>
            <p>{discipline.statement}</p>
            <span>{discipline.proof}</span>
            <ul className="v2-discipline-tools" aria-label={`${discipline.name} tools`}>
              {discipline.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
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
      <ol className="v2-journey-list">
        {journey.map((item) => (
          <li key={item.period}>
            <div className="v2-journey-mark">
              <Image src={item.logo} alt="" width={56} height={56} />
            </div>
            <div className="v2-journey-copy">
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p className="v2-journey-company">{item.company}</p>
              <p>{item.lesson}</p>
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
