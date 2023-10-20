"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectItemProps = (typeof projectsData)[number];

function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectItemProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group max-w-[42rem] bg-gray-100 border border-black/5 overflow-hidden sm:group-even:pl-8 transition
     sm:h-[20rem] sm:pr-8  mb-3 sm:mb-8 last:mb-0 relative even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <a
        href={projectUrl}
        target="_blank"
        className="hover:cursor-pointer cursor-auto"
      >
        <div className="pt-4 px-5 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I workded on"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2-xl hidden sm:block
        group-even:right-[initial] group-even:-left-40 transition
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-hover:scale-[1.04]"
        ></Image>
      </a>
    </motion.section>
  );
}

export default ProjectItem;
