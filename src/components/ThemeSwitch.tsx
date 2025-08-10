"use client";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed z-[9999] top-20 sm:top-7 right-5 sm:right-[8rem] bg-white dark:bg-gray-950 bg-opacity-80 hover:text-amber-400 dark:hover:text-indigo-300
    backdrop-blur-sm border border-slate-200 border-opacity-40 w-[3rem] h-[3rem] flex items-center justify-center rounded-full
    shadow-2xl hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="" /> : <BsMoon className="" />}
    </button>
  );
}

export default ThemeSwitch;
