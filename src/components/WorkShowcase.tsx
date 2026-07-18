"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ToolMark from "./ToolMark";
import { v2Projects } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Stacked list by default (SSR, mobile, short screens, reduced motion).
// On capable screens GSAP pins the stage and scrubs project swaps to scroll.
export default function WorkShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        // 560px height keeps the pin available on 13" laptops, where browser
        // chrome often leaves only ~600-680px of content height
        "(min-width: 900px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)",
        () => {
          const root = rootRef.current;
          if (!root) return;
          root.dataset.mode = "pinned";

          const slides = gsap.utils.toArray<HTMLElement>(".v2-project", root);
          const copies = gsap.utils.toArray<HTMLElement>(".v2-project-copy", root);
          const images = gsap.utils.toArray<HTMLElement>(".v2-project-image", root);
          const fill = root.querySelector<HTMLElement>(".v2-showcase-rail-fill");
          const last = copies.length - 1;

          gsap.set(copies.slice(1), { autoAlpha: 0 });

          // Gallery ring: pose each panel from its offset to the ring position.
          // o = 0 → flat center stage; o = ±1 → angled wing; beyond ±1.5 → gone.
          const setPoses = (t: number) => {
            images.forEach((img, i) => {
              const o = gsap.utils.clamp(-1.6, 1.6, i - t);
              const a = Math.abs(o);
              gsap.set(img, {
                xPercent: o * 46,
                z: -a * 430,
                rotationY: -o * 63,
                scale: 1 - a * 0.22,
                autoAlpha: a > 1.5 ? 0 : 1 - a * 0.08,
                filter: `brightness(${1 - a * 0.24})`,
              });
              gsap.set(slides[i], { zIndex: 50 - Math.round(a * 10) });
            });
          };

          // The ring rotates inside each unit's transition window (0.55 → 1.0),
          // easing with smoothstep so panels rest flat during the reading hold.
          const ringT = (time: number) => {
            const tt = Math.min(time, last);
            const i = Math.floor(tt);
            if (i >= last) return last;
            const f = tt - i;
            const w = gsap.utils.clamp(0, 1, (f - 0.5) / 0.38);
            return i + w * w * (3 - 2 * w);
          };

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: () => "+=" + last * window.innerHeight * 1.15,
              pin: true,
              scrub: 0.6,
              snap: {
                snapTo: "labelsDirectional",
                duration: { min: 0.2, max: 0.5 },
                ease: "power1.inOut",
              },
            },
          });

          if (fill) {
            tl.fromTo(
              fill,
              { scaleY: 1 / copies.length },
              { scaleY: 1, duration: last, ease: "none" },
              0
            );
          }

          // settle hold after the final transition so a fast scroll never unpins mid-fade
          tl.to({}, { duration: 0.4 }, last);

          copies.forEach((copy, i) => {
            tl.addLabel(`p${i}`, i);
            if (i === last) return;
            tl.to(copy, { autoAlpha: 0, y: -44, duration: 0.24, ease: "power1.in" }, i + 0.5)
              .fromTo(
                copies[i + 1],
                { autoAlpha: 0, y: 44 },
                { autoAlpha: 1, y: 0, duration: 0.33, ease: "power2.out" },
                i + 0.55
              );
          });

          tl.eventCallback("onUpdate", () => setPoses(ringT(tl.time())));
          setPoses(0);

          return () => {
            delete root.dataset.mode;
          };
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <div className="v2-work-showcase" ref={rootRef}>
      <div className="v2-showcase-rail" aria-hidden="true">
        <span className="v2-showcase-rail-fill" />
      </div>

      <div className="v2-project-list">
        {v2Projects.map((project, i) => (
          <article className={`v2-project v2-project--${project.tone}`} key={project.title}>
            <div className="v2-project-copy">
              <h3>{project.title}</h3>
              <p className="v2-project-meta">{project.category}</p>
              <p className="v2-project-description">{project.description}</p>
              {project.hook && (
                <p className="v2-project-hook">
                  <strong>The hook:</strong> {project.hook}
                </p>
              )}
              <ul aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <ToolMark name={tag} />
                    {tag}
                  </li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project (opens in a new tab)`}>
                View the Build <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="v2-project-image">
              <Image
                src={project.image}
                alt={`${project.title} product interface`}
                width={1200}
                height={800}
                priority={i === 0}
                sizes="(min-width: 900px) 55vw, 100vw"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
