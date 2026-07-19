"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/legacy/Header";
import Footer from "@/components/legacy/Footer";
import ThemeSwitch from "@/components/legacy/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/active-section";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  // The archived original site keeps its Tailwind chrome, providers, and theme switch.
  if (pathname.startsWith("/legacy")) {
    return (
      <div
        className="relative min-h-screen bg-slate-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36"
      >
        <div className="fix-safari absolute right-[2rem] top-[-3rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:right-[8rem] sm:w-[80.75rem]" />
        <div className="fix-safari absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 2xl:w-[80rem] 3xl:left-[3rem]" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }

  // The Sketchbook site renders its own header and footer inside the page.
  return <div className="sk-shell">{children}</div>;
}
