"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] rounded-none w-full 
      border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500
        flex-wrap sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "w-full flex justify-center items-cente px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 hover:dark:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-300":
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 dark:bg-gray-700 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
