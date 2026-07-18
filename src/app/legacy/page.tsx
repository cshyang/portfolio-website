import type { Metadata } from "next";
import About from "@/components/legacy/About";
import Contact from "@/components/legacy/Contact";
import Experience from "@/components/legacy/Experience";
import Intro from "@/components/legacy/Intro";
import Projects from "@/components/legacy/Projects";
import SectionDivider from "@/components/legacy/SectionDivider";
import Skills from "@/components/legacy/Skills";

export const metadata: Metadata = {
  title: "Shyang | Personal Portfolio (archived)",
  description:
    "The original version of this portfolio, kept as an artifact. The current site lives at the home page.",
};

export default function LegacyHome() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
