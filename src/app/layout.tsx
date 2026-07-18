import "./globals.css";
import "./site.css";
import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { PHProvider } from "./provider";
import PostHogPageView from "./PostHogPageView";
import SiteShell from "@/components/SiteShell";

// Inter drives the archived /legacy site; Archivo (via --font-v2) drives the current site.
const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-v2",
  display: "swap",
});

// PostHogPageView is a Client Component; it's safe to import directly and render within PHProvider

export const metadata: Metadata = {
  title: "Shyang — Multidisciplinary Builder",
  description: "Data, AI, product, and code brought together to ship useful systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <PHProvider>
        <body className={`${inter.className} ${archivo.variable}`}>
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
