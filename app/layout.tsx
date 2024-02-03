import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense } from "react";
import { PHProvider } from "./provider";

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

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
        <body
          className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
          <div className="fix-safari bg-[#fbe2e3] blur-[10rem] absolute top-[-3rem] -z-10 right-[2rem] sm:right-[8rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[80.75rem] dark:bg-[#946263]"></div>
          <div className="fix-safari bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394]  absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 3xl:left-[3rem] 2xl:w-[80rem] "></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <Footer />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
            <Analytics />
          </ThemeContextProvider>
        </body>
      </PHProvider>
    </html>
  );
}
