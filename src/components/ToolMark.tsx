import {
  siClaude,
  siGoogleads,
  siGoogleanalytics,
  siGooglesearchconsole,
  siLangchain,
  siMeta,
  siNextdotjs,
  siPrisma,
  siPydantic,
  siPython,
  siReact,
  siSnowflake,
  siStreamlit,
  siStripe,
  siTailwindcss,
  siThemoviedatabase,
  siTypescript,
} from "simple-icons";

// Monochrome brand marks, inked via currentColor. Tools without an icon
// (OpenAI and Tableau were pulled from simple-icons) render as text chips.
const MARKS: Record<string, string> = {
  Claude: siClaude.path,
  "Google Ads": siGoogleads.path,
  GA4: siGoogleanalytics.path,
  "Search Console": siGooglesearchconsole.path,
  LangChain: siLangchain.path,
  Meta: siMeta.path,
  "Next.js": siNextdotjs.path,
  Prisma: siPrisma.path,
  PydanticAI: siPydantic.path,
  Python: siPython.path,
  React: siReact.path,
  Snowflake: siSnowflake.path,
  Streamlit: siStreamlit.path,
  Stripe: siStripe.path,
  Tailwind: siTailwindcss.path,
  "TMDB API": siThemoviedatabase.path,
  TypeScript: siTypescript.path,
};

export default function ToolMark({ name }: { name: string }) {
  const path = MARKS[name];
  if (!path) return null;
  return (
    <svg className="v2-tool-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}
