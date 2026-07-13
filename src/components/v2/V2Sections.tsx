import Image from "next/image";
import PortraitSwap from "./PortraitSwap";
import RangeGlow from "./RangeGlow";
import RotatingIdentity from "./RotatingIdentity";
import V2Contact from "./V2Contact";
import { disciplines, journey, v2Projects } from "@/lib/v2-data";

export function V2Hero() {
  return (
    <section className="v2-hero" aria-labelledby="v2-hero-heading">
      <div className="v2-hero-copy v2-reveal v2-reveal--one">
        <h1 id="v2-hero-heading">
          I&rsquo;m <RotatingIdentity />
        </h1>
        <p className="v2-hero-summary">
          I turn rough ideas into useful systems by moving between evidence, product judgment, AI, and hands-on building.
        </p>
        <a className="v2-primary-action" href="#work">
          Explore Selected Work <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="v2-hero-portrait v2-reveal v2-reveal--two">
        <PortraitSwap />
      </div>

      <p className="v2-hero-status v2-reveal v2-reveal--three">
        <span><i aria-hidden="true" /> Kuala Lumpur · GMT +8</span>
        <span>Open to the right problem.</span>
      </p>
    </section>
  );
}

export function SelectedWork() {
  return (
    <section className="v2-work" id="work" aria-labelledby="work-heading">
      <div className="v2-section-heading">
        <p className="v2-utility">Selected work</p>
        <h2 id="work-heading">Evidence over claims.</h2>
        <p>Experiments and products that made it far enough to teach something real.</p>
      </div>

      <div className="v2-project-list">
        {v2Projects.map((project) => (
          <article className={`v2-project v2-project--${project.tone}`} key={project.title}>
            <div className="v2-project-copy">
              <div className="v2-project-meta">
                <span>{project.category}</span>
                <span>Shipped project</span>
              </div>
              <h3>{project.title}</h3>
              <p className="v2-project-description">{project.description}</p>
              <dl>
                <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
                <div><dt>What shipped</dt><dd>{project.result}</dd></div>
              </dl>
              <ul aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project (opens in a new tab)`}>
                View the Build <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="v2-project-image">
              <Image src={project.image} alt={`${project.title} product interface`} width={1200} height={800} sizes="(min-width: 900px) 55vw, 100vw" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OperatingRange() {
  return (
    <section className="v2-range" id="range" aria-labelledby="range-heading">
      <RangeGlow />
      <div className="v2-range-intro">
        <h2 id="range-heading">The useful work lives between disciplines.</h2>
        <p>I started in analytics, moved into product and AI, then learned to build enough of the real thing to test the assumptions myself.</p>
      </div>
      <div className="v2-discipline-list">
        {disciplines.map((discipline) => (
          <article key={discipline.name}>
            <h3>{discipline.name}</h3>
            <p>{discipline.statement}</p>
            <span>{discipline.proof}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="v2-journey" id="journey" aria-labelledby="journey-heading">
      <div className="v2-section-heading v2-section-heading--journey">
        <h2 id="journey-heading">A career built by crossing the next boundary.</h2>
        <p>From analytics to product leadership, then deeper into AI systems and hands-on building.</p>
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
      <span>© {new Date().getFullYear()} Chau Shyang</span>
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
