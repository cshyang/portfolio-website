import "./globals.css";
import "./site.css";
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Public_Sans, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { PHProvider } from "./provider";
import PostHogPageView from "./PostHogPageView";
import SiteShell from "@/components/SiteShell";

// Inter drives the archived /legacy site.
const inter = Inter({ subsets: ["latin"] });

// The Sketchbook site: Bricolage Grotesque (display), Public Sans (body), Caveat (handwritten notes).
const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const handFont = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

// PostHogPageView is a Client Component; it's safe to import directly and render within PHProvider

export const metadata: Metadata = {
  title: "Shyang — I sketch, then I ship",
  description:
    "Data, AI, product, and code. I draw the idea rough, then build the version that ships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <PHProvider>
        <body
          className={`${inter.className} ${displayFont.variable} ${bodyFont.variable} ${handFont.variable}`}
        >
          {/* Track pageviews with PostHog. Must be inside PHProvider (client boundary). */}
          <Suspense>
            <PostHogPageView />
          </Suspense>
          <SiteShell>{children}</SiteShell>
          <Analytics />
        </body>
      </PHProvider>
    </html>
  );
}
