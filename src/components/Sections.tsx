import Image from "next/image";
import { projects, penCase, type Pen } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Hero from "./Hero";
import Story from "./Story";
import Contact from "./Contact";

/* eslint-disable @next/next/no-img-element -- 15px tool chips load from the
   simple-icons CDN, matching the design markup; next/image buys nothing here */

function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="sk-section"
      style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}
    >
      <SectionHead
        id="work-heading"
        title="THE PAGES THAT SHIPPED"
        note="sketch → system → shipped ✔"
      />
      <div className="sk-work-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} className="sk-work-card" delayMs={i * 100}>
            <div
              className="sk-polaroid"
              style={{ "--tilt": `${project.tilt}deg` } as React.CSSProperties}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={800}
                height={500}
              />
              <span className="sk-stamp">SHIPPED ✔</span>
            </div>
            <h3 className="sk-work-title">{project.title}</h3>
            <p className="sk-work-desc">{project.description}</p>
            <p className="sk-work-tags">{project.tags}</p>
            <a
              className="sk-work-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              see the real thing ↗
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PenCard({ pen }: { pen: Pen }) {
  return (
    <div
      className={`sk-pen${pen.supercharge ? " sk-pen--charge" : ""}`}
      style={{ "--hover-tilt": `${pen.hoverTilt}deg` } as React.CSSProperties}
    >
      {pen.supercharge && <span className="sk-pen-label">⚡ the supercharger</span>}
      <h3 className="sk-pen-name">{pen.name}</h3>
      <p className="sk-pen-blurb">{pen.blurb}</p>
      <div className="sk-pen-tools">
        {pen.tools.map((tool) => (
          <span key={tool.label} className="sk-tool">
            {tool.src && (
              <img
                src={tool.src}
                alt=""
                className={tool.filtered ? "sk-tool-filtered" : undefined}
              />
            )}
            {tool.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Toolkit() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="sk-section">
      <SectionHead
        id="skills-heading"
        title="THE PEN CASE"
        note="four careers, one pen — AI dissolved the walls"
        small
      />
      <div className="sk-pens">
        {penCase.map((pen, i) => (
          <Reveal key={pen.name} className="sk-pen-cell" delayMs={i * 80}>
            <PenCard pen={pen} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="sk-footer">
      <span>
        © 2026 Chau Shyang · sketched in Kuala Lumpur · GMT +8 ·{" "}
        <a href="/legacy" style={{ textDecoration: "underline" }}>
          previous edition
        </a>
      </span>
      <a href="#top">back to page 01 ↑</a>
    </footer>
  );
}

export function PageSections() {
  return (
    <>
      <Hero />
      <Work />
      <Toolkit />
      <Story />
      <Contact />
    </>
  );
}
