export const v2Navigation = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

type V2Project = {
  title: string;
  category: string;
  description: string;
  /** The sharpest decision or insight — the thing a senior reader would ask
      about. Admission test for the shelf: no hook, no featured slot. */
  hook?: string;
  tags: readonly string[];
  image: string;
  href: string;
  tone: "orange" | "indigo" | "neutral";
};

export const v2Projects: readonly V2Project[] = [
  {
    title: "AI Companion",
    category: "Consumer AI experiment",
    description:
      "A full-stack product for creating conversational companions inspired by familiar public personas — built end to end, from onboarding to billing.",
    hook: "The model was the easy part. The real build was the product loop around it: persona behavior, memory, and payments.",
    tags: ["Next.js", "OpenAI", "Llama 2", "Prisma", "Stripe"],
    image: "/images/projects/ai-companion.png",
    href: "https://github.com/cshyang/ai-companion",
    tone: "orange",
  },
  {
    title: "AI Medical Agent",
    category: "Applied AI prototype",
    description:
      "A patient-facing workflow that extracts biomarkers from medical reports and rewrites them in plain language.",
    hook: "Turns a raw lab PDF into something a patient can question their doctor about.",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI"],
    image: "/images/projects/ai_medical_agent.png",
    href: "https://github.com/cshyang/langchain-pdf-medical-agent",
    tone: "indigo",
  },
  {
    title: "Netflix Clone",
    category: "Frontend systems study",
    description:
      "A responsive streaming interface using live TMDB content to study navigation, discovery, and dense media layouts.",
    tags: ["React", "Next.js", "Tailwind", "TMDB API"],
    image: "/images/projects/netflix_clone.png",
    href: "https://github.com/cshyang/netflix-clone",
    tone: "neutral",
  },
] as const;

// The AI layer that wraps every domain below.
export const aiWrapperTools = ["Claude", "OpenAI", "LangChain", "PydanticAI"] as const;

export const domains = [
  {
    name: "Marketing & Growth",
    blurb: "Campaign analytics and automation across ad platforms — code computes, AI reasons.",
    tools: ["Google Ads", "Meta", "GA4", "Search Console"],
  },
  {
    name: "Product",
    blurb: "Reduce ambiguity, choose the useful shape, and get the work shipped.",
    tools: ["Experiment design", "Product analytics", "Roadmaps"],
  },
  {
    name: "Data & Analytics",
    blurb: "Find the signal, define the decision, and make the evidence usable.",
    tools: ["SQL", "Python", "Snowflake", "Tableau"],
  },
  {
    name: "Engineering",
    blurb: "Build enough of the real thing to expose weak assumptions early.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
] as const;

export const journey = [
  {
    period: "2015–2018",
    role: "Analytics Consultant",
    company: "Persuasion Technologies → Artefact Asia",
    story:
      "Client-side consulting across brands and messy behaviour data. The habit that formed here still runs everything: analysis isn't finished until someone changes a decision because of it.",
    logo: "/images/icons/briefcase.svg",
  },
  {
    period: "2019–2020",
    role: "Lead Market Analyst, Malaysia",
    company: "Grab",
    story:
      "Market analytics at regional scale, where every metric had an owner and a deadline. Scale taught the sharpest lesson cheaply: a dashboard nobody acts on is decoration.",
    logo: "/images/icons/grab_logo.png",
  },
  {
    period: "2021–2023",
    role: "AI & Data Product Leadership",
    company: "MoneyLion → BioMark",
    story:
      "Crossed from analysing products to building them — recommendation systems in consumer fintech, then healthcare data products where getting it wrong is personal.",
    logo: "/images/icons/moneylion_icon.jpeg",
  },
  {
    period: "2023–now",
    role: "Data & AI Builder",
    company: "Hiredly Group → Independent work",
    story:
      "Leading across engineering, data science, and product while building agentic AI systems hands-on — the whole stack, exercised weekly.",
    logo: "/images/icons/hiredly_logo.png",
  },
] as const;
