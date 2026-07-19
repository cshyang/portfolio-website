// Content for the Sketchbook site, transcribed from the approved design
// (design-reference/sketchbook-site.dc.html). Copy is kept verbatim.

export const navigation = [
  { label: "Pages", href: "#work" },
  { label: "Toolkit", href: "#skills" },
  { label: "Story", href: "#journey" },
  { label: "Note ↗", href: "#contact" },
] as const;

export const sectionIds = ["work", "skills", "journey", "contact"] as const;

// Words the hero "currently sketching:" line types out, one after another.
export const sketchingNow = [
  "ai agents",
  "data pipelines",
  "growth loops",
  "product bets",
  "new tricks",
] as const;

export type Project = {
  title: string;
  /** "Sketched as … — shipped …" line under the title. */
  description: string;
  /** Uppercase middot-separated tag line, e.g. "NEXT.JS · OPENAI". */
  tags: string;
  image: string;
  imageAlt: string;
  href: string;
  /** Resting tilt of the polaroid, in degrees. */
  tilt: number;
};

export const projects: readonly Project[] = [
  {
    title: "AI Companion",
    description:
      "Sketched as “a friend in the machine” — shipped with persona behavior, memory, and billing.",
    tags: "NEXT.JS · OPENAI · LLAMA 2 · STRIPE",
    image: "/images/projects/ai-companion.png",
    imageAlt: "AI Companion interface",
    href: "https://github.com/cshyang/ai-companion",
    tilt: -1.2,
  },
  {
    title: "AI Medical Agent",
    description:
      "Sketched as “a translator for lab reports” — shipped for real patients with real questions.",
    tags: "PYTHON · STREAMLIT · LANGCHAIN · OPENAI",
    image: "/images/projects/ai_medical_agent.png",
    imageAlt: "AI Medical Agent interface",
    href: "https://github.com/cshyang/langchain-pdf-medical-agent",
    tilt: 1,
  },
  {
    title: "Netflix Clone",
    description: "Sketched as “a density study” — shipped on live TMDB data.",
    tags: "REACT · NEXT.JS · TAILWIND · TMDB",
    image: "/images/projects/netflix_clone.png",
    imageAlt: "Netflix Clone interface",
    href: "https://github.com/cshyang/netflix-clone",
    tilt: -0.7,
  },
];

export type Tool = {
  label: string;
  /** Icon URL (simple-icons CDN or local /images path). Omitted = text-only chip. */
  src?: string;
  /** Black SVGs (jsdelivr) that need the blue CSS filter. */
  filtered?: boolean;
};

export type Pen = {
  name: string;
  blurb: string;
  tools: readonly Tool[];
  /** The orange-bordered card with the "⚡ the supercharger" label. */
  supercharge?: boolean;
  /** Hover tilt, in degrees. */
  hoverTilt: number;
};

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/3a56b5`;
const siRaw = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${slug}.svg`;

export const penCase: readonly Pen[] = [
  {
    name: "DATA",
    blurb: "Find the signal, define the decision, make evidence usable.",
    hoverTilt: -0.5,
    tools: [
      { label: "SQL", src: si("postgresql") },
      { label: "PYTHON", src: si("python") },
      { label: "SNOWFLAKE", src: si("snowflake") },
      { label: "TABLEAU", src: siRaw("tableau"), filtered: true },
      { label: "LOOKER", src: si("looker") },
      { label: "METABASE", src: si("metabase") },
      { label: "AIRBYTE", src: si("airbyte") },
      { label: "SEARCH CONSOLE", src: si("googlesearchconsole") },
    ],
  },
  {
    name: "AI",
    blurb: "The ink under every page — agents built and exercised weekly.",
    supercharge: true,
    hoverTilt: 0.5,
    tools: [
      { label: "CLAUDE", src: si("claude") },
      { label: "OPENAI", src: siRaw("openai"), filtered: true },
      { label: "LANGCHAIN", src: si("langchain") },
      { label: "PYDANTIC-AI", src: si("pydantic") },
      { label: "PI", src: "/images/icons/pi_logo.png" },
      { label: "HERMES AGENT", src: "/images/icons/hermes_logo.png" },
      { label: "MACHINE LEARNING", src: si("scikitlearn") },
    ],
  },
  {
    name: "PRODUCT",
    blurb: "Reduce ambiguity, choose the useful shape, get it shipped.",
    hoverTilt: -0.4,
    tools: [
      { label: "POSTHOG", src: si("posthog") },
      { label: "GOOGLE ANALYTICS", src: si("googleanalytics") },
      { label: "EXPERIMENTS" },
      { label: "ROADMAPS" },
    ],
  },
  {
    name: "CODE",
    blurb: "Build enough of the real thing to expose weak assumptions early.",
    hoverTilt: 0.6,
    tools: [
      { label: "NEXT.JS", src: si("nextdotjs") },
      { label: "REACT", src: si("react") },
      { label: "TAILWIND", src: si("tailwindcss") },
      { label: "GCP", src: si("googlecloud") },
      { label: "CLOUDFLARE", src: si("cloudflare") },
      { label: "VERCEL", src: si("vercel") },
    ],
  },
];

export type Chapter = {
  /** Caveat orange label, e.g. "2015–2018 · ch.1 — digital analytics". */
  kicker: string;
  role: string;
  company: string;
  story: string;
  /** Green (or orange, on the last chapter) Caveat margin note. */
  unlocked: string;
  /** Circular node logos; first sits on the line, second to its left. */
  logos: readonly string[];
  /** Last chapter: orange pulsing nodes + orange unlocked note. */
  current?: boolean;
  /** Fill progress (0..1) at which this chapter's nodes ignite. */
  igniteAt: number;
};

export const chapters: readonly Chapter[] = [
  {
    kicker: "2015–2018 · ch.1 — digital analytics",
    role: "Analytics Consultant",
    company: "Incubeta → Artefact Asia",
    story:
      "Client-side consulting across brands and messy behaviour data. The habit that formed here still runs everything: analysis isn’t finished until someone changes a decision because of it.",
    unlocked: "+ skill unlocked: how businesses acquire traffic & keep it coming back",
    logos: ["/images/icons/artefact_logo.png", "/images/icons/incubeta_logo.png"],
    igniteAt: 0.2,
  },
  {
    kicker: "2019–2020 · ch.2 — big data at scale",
    role: "Lead Market Analyst, Malaysia",
    company: "Grab",
    story:
      "Market analytics at regional scale, where every metric had an owner and a deadline. Scale taught the sharpest lesson cheaply: a dashboard nobody acts on is decoration.",
    unlocked: "+ skill unlocked: big data analytics & data science at scale",
    logos: ["/images/icons/grab_logo.png"],
    igniteAt: 0.42,
  },
  {
    kicker: "2021–2023 · ch.3 — building, not just analysing",
    role: "AI & Data Product Leadership",
    company: "MoneyLion → BioMark",
    story:
      "Crossed from analysing products to building them — recommendation systems in consumer fintech, then healthcare data products where getting it wrong is personal.",
    unlocked: "+ skill unlocked: making product decisions & experimenting at scale",
    logos: ["/images/icons/biomark_logo.png", "/images/icons/moneylion_clean.png"],
    igniteAt: 0.62,
  },
  {
    kicker: "2023–now · ch.4 — the supercharge ⚡",
    role: "AI Builder",
    company: "Data & AI Lead, Hiredly → Founding AI Engineer, Calibrax",
    story:
      "AI turned every earlier chapter into leverage — analytics instinct, scale engineering, and product judgement now compound in agentic systems I build hands-on, weekly.",
    unlocked: "⚡ agentic engineering — every skill above, running through one circuit",
    logos: ["/images/icons/calibrax_logo.png", "/images/icons/hiredly_logo.png"],
    current: true,
    igniteAt: 0.85,
  },
];

export const cvHref = "/docs/shyang_cv.pdf";
