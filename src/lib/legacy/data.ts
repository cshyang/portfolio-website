import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
// Images are served from the public/ directory; reference them via absolute paths
const netflixCloneImg = "/images/projects/netflix_clone.png" as const;
const trelliImg = "/images/projects/trelli.png" as const;
const aiCompanionImg = "/images/projects/ai-companion.png" as const;
const aiMedicalAgentImg = "/images/projects/ai_medical_agent.png" as const;
const grabIcon = "/images/icons/grab_icon.png" as const;
const moneyLionIcon = "/images/icons/moneylion_icon.jpeg" as const;

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
    iconSrc: "/images/icons/graduation_cap.svg",
    iconAlt: "Graduation cap",
    date: "May 2015",
  },
  {
    title: "Analytics Consultant",
    location: "Persuasion Technologies -> Artefact Asia",
    description:
      "I got my Google Certification online and worked as an analytics consultant at digital marketing agencies for 3.5 years. I continued to hone my skills to land a big data job.",
    iconSrc: "/images/icons/briefcase.svg",
    iconAlt: "Briefcase",
    date: "Aug 2015 - Nov 2018",
  },
  {
    title: "Lead Market Analyst, MY",
    location: "Grab Malaysia",
    description:
      "I landed a data job with SEA e-hailing giant Grab, where I honed my skills in big data, create beautiful dashbaords, and advanced data storytelling.",
    iconSrc: "/images/icons/grab_logo.png",
    iconAlt: "Grab logo",
    date: "Jan 2019 - Dec 2020",
  },
  {
    title: "AI Product Manager",
    location: "Moneylion",
    description:
      "I joined MoneyLion and to hone my product leadership skills. I worked with data scientists and AI engineers to ship recommendation system on flagship products.",
    iconSrc: "/images/icons/moneylion_icon.jpeg",
    iconAlt: "MoneyLion logo",
    date: "Jul 2021 - Oct 2022",
  },
  {
    title: "Lead Data Product Manager",
    location: "BioMark",
    description:
      "Took a leap of faith and now working at a regional SEA healthtech startup to help digitize healthcare. However, the starup didn't took off and I left the company.",
    iconSrc: "/images/icons/biomark_logo.png",
    iconAlt: "BioMark logo",
    date: "Oct 2022 - Dec 2023",
  },
  {
    title: "Data & AI Tech Lead",
    location: "Hiredly Group",
    description:
      "Led an amazing team of 5 to bridge business and data gap, from data engineering to data science to AI product development.",
    iconSrc: "/images/icons/hiredly_logo.png",
    iconAlt: "Hiredly logo",
    date: "Dec 2023 - Nov 2024",
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
  "Data Analytics",
  "Data Science",
  "Machine Learning",
  "Next.js",
  "TailwindCSS",
  "Snowflake",
  "Product Analytics",
  "LangChain",
  "PydanticAI",
] as const;
