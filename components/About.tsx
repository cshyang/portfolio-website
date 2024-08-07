"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="max-w-[50rem] text-center mb-28 leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Actuarial Science</span>, I embarked on a
        career in <span className="font-medium">data analytics</span>. Over
        time, I found a passion for{" "}
        <span className="font-medium">data science and technology</span> as I
        solved problems and interpreted data. I have experience leading{" "}
        <span className="font-medium">Data Engineering and Data Science</span>{" "}
        team. <br />
        Currently, I am expanding my knowledge by working on{" "}
        <span className="font-medium">LLM and GenAI and RAG system.</span> It's
        exciting to keep up with the latest advancements in the field.
      </p>
    </motion.section>
  );
}

export default About;
