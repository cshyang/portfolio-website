import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import netflixCloneImg from "@/public/netflix_clone.png";
import trelliImg from "@/public/trelli.png";
import aiCompanionImg from "@/public/ai-companion.png";
import aiMedicalAgentImg from "@/public/ai_medical_agent.png";
import grabIcon from "@/public/grab_icon.png";
import moneyLionIcon from "@/public/moneylion_icon.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Actuarial Science Graduated",
    location: "University Tunku Abdul Rahman",
    description:
      "I graduated from bachelor of Actuarial Science. Unsure what to do, I started to educate myself online and acquire skills that can help me to land my first job.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2015",
  },
  {
    title: "Analytics Consultant",
    location: "Persuasion Technologies -> Artefact Asia",
    description:
      "I got my Google Certification online and worked as an analytics consultant at digital marketing agencies for 3.5 years. I continued to hone my skills to land a big data job.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2015 - Nov 2018",
  },
  {
    title: "Market Analyst",
    location: "Grab Malaysia",
    description:
      "I landed a data job with SEA e-hailing giant Grab, where I honed my skills in big data, create beautiful dashbaords, and advanced data storytelling.",
    icon: React.createElement("img", { src: "grab_icon.png" }, null),
    date: "Jan 2019 - Dec 2020",
  },
  {
    title: "AI Product Manager",
    location: "Moneylion",
    description:
      "I joined MoneyLion and utilized my analytical skills to help make product decisions. I worked with brilliant data scientists and AI engineers to ship recommendation models on flagship products.",
    icon: React.createElement("img", { src: "moneylion_icon.jpeg" }, null),
    date: "Jul 2021 - Oct 2022",
  },
  {
    title: "Lead Data Product Manager",
    location: "BioMark",
    description:
      "Took a leap of faith and now working at a regional SEA healthtech startup to help digitize healthcare. My team is responsible for data engineering, BI, product analytics, GenAI.",
    icon: React.createElement("img", { src: "biomark_logo.png" }, null),
    date: "Oct 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Companion",
    description:
      "An app that enables users to create an AI companion that emulates the personalities of their favorite celebrities.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "PrismaDB",
      "OpenAI",
      "Replicate",
      "LLAMA2",
      "Clerk",
      "Stripe",
    ],
    imageUrl: aiCompanionImg,
    projectUrl: "https://ai-companion-cshyang.vercel.app",
  },
  {
    title: "AI Medical Agent",
    description:
      "Extract biomarker results from medical reports and present a simplified, patient-friendly summary for better comprehension.",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI"],
    imageUrl: aiMedicalAgentImg,
    projectUrl: "https://github.com/cshyang/langchain-pdf-medical-agent",
  },
  {
    title: "Netflix Clone",
    description:
      "This is a front-end movie streaming UI project designed to emulate the user experience of platforms like Netflix, utilizing the TMDB movie database as its primary source of data.",
    tags: ["React", "Next.js", "Tailwind", "TMDB API"],
    imageUrl: netflixCloneImg,
    projectUrl: "https://netflix-clone-4c05e.web.app",
  },
  // {
  //   title: "AI Todo Summary",
  //   description:
  //     "A drag and drop to-do app that used Appwrite as the backend and OpenAI GPT to sumamrise the tasks.",
  //   tags: [
  //     "React",
  //     "Next.js",
  //     "Tailwind",
  //     "AppWrite",
  //     "OpenAI",
  //     "React Beautiful DnD",
  //   ],
  //   imageUrl: trelliImg,
  //   projectUrl: "https://ai-todo-summary.vercel.app",
  // },
] as const;

export const skillsData = [
  "SQL",
  "Tableau",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Snowflake",
  "DBT",
  "LangChain",
  "Scrum",
] as const;
