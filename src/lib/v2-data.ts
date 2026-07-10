export const v2Navigation = [
  { label: "Work", href: "#work" },
  { label: "Range", href: "#range" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const v2Projects = [
  {
    title: "AI Companion",
    category: "Consumer AI experiment",
    description:
      "A full-stack product for creating conversational companions inspired by familiar public personas.",
    contribution:
      "Designed and built the product loop across onboarding, model behavior, subscriptions, and delivery.",
    result: "A working, publicly deployed AI product—not a slide-deck prototype.",
    tags: ["Next.js", "OpenAI", "Llama 2", "Prisma", "Stripe"],
    image: "/images/projects/ai-companion.png",
    href: "https://ai-companion-cshyang.vercel.app",
    tone: "ember",
  },
  {
    title: "AI Medical Agent",
    category: "Applied AI prototype",
    description:
      "A patient-facing workflow that extracts biomarkers from medical reports and rewrites them in plain language.",
    contribution:
      "Shaped the extraction and explanation flow, then shipped the prototype with retrieval and LLM tooling.",
    result: "Complex laboratory information becomes easier to inspect and discuss.",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI"],
    image: "/images/projects/ai_medical_agent.png",
    href: "https://github.com/cshyang/langchain-pdf-medical-agent",
    tone: "graphite",
  },
  {
    title: "Netflix Clone",
    category: "Frontend systems study",
    description:
      "A responsive streaming interface using live TMDB content to study navigation, discovery, and dense media layouts.",
    contribution:
      "Built the application shell, content discovery surfaces, and responsive interaction model.",
    result: "A production-hosted interface that behaves like a real media product.",
    tags: ["React", "Next.js", "Tailwind", "TMDB API"],
    image: "/images/projects/netflix_clone.png",
    href: "https://netflix-clone-4c05e.web.app",
    tone: "neutral",
  },
] as const;

export const disciplines = [
  {
    name: "Data",
    statement: "Find the signal, define the decision, and make the evidence usable.",
    proof: "Analytics leadership · data products · decision systems",
  },
  {
    name: "AI",
    statement: "Turn model capability into a product loop people can actually use.",
    proof: "Agentic systems · LLM applications · recommendation systems",
  },
  {
    name: "Product",
    statement: "Reduce ambiguity, choose the useful shape, and get the work shipped.",
    proof: "Discovery · prioritisation · team leadership",
  },
  {
    name: "Code",
    statement: "Build enough of the real thing to expose weak assumptions early.",
    proof: "Next.js · Python · rapid product prototyping",
  },
] as const;

export const journey = [
  {
    period: "2015–2018",
    role: "Analytics Consultant",
    company: "Persuasion Technologies → Artefact Asia",
    lesson: "Learned to turn messy behavior data into decisions clients could act on.",
    logo: "/images/icons/briefcase.svg",
  },
  {
    period: "2019–2020",
    role: "Lead Market Analyst, Malaysia",
    company: "Grab",
    lesson: "Worked at regional scale and learned that a dashboard is only useful when it changes a decision.",
    logo: "/images/icons/grab_logo.png",
  },
  {
    period: "2021–2023",
    role: "AI & Data Product Leadership",
    company: "MoneyLion → BioMark",
    lesson: "Moved from analysing products to shaping recommendation and healthcare data products.",
    logo: "/images/icons/moneylion_icon.jpeg",
  },
  {
    period: "2023–now",
    role: "Data & AI Builder",
    company: "Hiredly Group → Independent work",
    lesson: "Leading across engineering, science, product, and hands-on agentic AI experiments.",
    logo: "/images/icons/hiredly_logo.png",
  },
] as const;
