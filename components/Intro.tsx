"use client";
import Image from "next/image";
import React from "react";
import headshot from "@/public/shyang_headshot.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

function Intro() {
  const { ref } = useSectionInView("Home", 0.7);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="container mx-auto max-w-[60rem] text-center mb-28 sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={headshot}
            alt="profile-pic"
            width={192}
            height={192}
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <motion.span
            className="text-3xl absolute bottom-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 1,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-light !leading-[1.5] sm:text-[2rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shyang.</span>
        <br /> I'm a <span className="font-bold">
          data product manager
        </span>{" "}
        with 8 years of experience. Currently, I'm getting my hands dirty with
        web development, particularly{" "}
        <span className="underline">React (Next.js)</span> to improve my
        knowledge as a product manager.
      </motion.h1>
      <motion.div
        className="flex sm:flex-row flex-col items-center justify-center sm:gap-x-6 gap-y-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center justify-center gap-x-2 bg-gray-900 rounded-3xl text-white px-7 py-3 outline-none
          ring-2 ring-gray-900 hover:bg-white hover:text-gray-900 hover:scale-110 focus:scale-110 active:scale-105 sm:w-fit w-10/12 transition
          dark:ring-0"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 opacity-70 transition" />{" "}
        </Link>
        <a
          href="/shyang_cv.pdf"
          download
          className="group flex items-center justify-center gap-x-2 bg-white rounded-3xl text-gray-900 px-7 py-3 outline-none
          ring-2 ring-gray-100 hover:ring-gray-900 hover:scale-110 focus:scale-110 active:scale-105 sm:w-fit w-10/12 transition
          dark:bg-white/10 dark:text-white dark:ring-0"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-0.5 opacity-70 transition" />
        </a>
        <div className="flex gap-x-6">
          <a
            href="https://www.linkedin.com/in/chaushyang/"
            target="_blank"
            className="hover:scale-150 focus:scale-[1.15] rounded-full p-4 active:scale-105 text-lg outline-none transition dark:text-white/60 dark:bg-white/10"
          >
            <TfiLinkedin />
          </a>
          <a
            href="https://github.com/cshyang"
            target="_blank"
            className="hover:scale-150 focus:scale-[1.15] rounded-full p-4 active:scale-105 text-lg outline-none transition dark:text-white/60 dark:bg-white/10"
          >
            <BsGithub />{" "}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
