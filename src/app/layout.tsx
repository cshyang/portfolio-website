import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { PHProvider } from "./provider";
import PostHogPageView from "./PostHogPageView";
import SiteShell from "@/components/SiteShell";

const inter = Inter({ subsets: ["latin"] });

// PostHogPageView is a Client Component; it's safe to import directly and render within PHProvider

export const metadata: Metadata = {
  title: "Shyang | Personal Portfolio",
  description:
    "Shyang has 8 years of experience as a data lead and is interested in product web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <PHProvider>
        <body className={inter.className}>
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
