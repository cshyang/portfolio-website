import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./v2.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-v2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyang — Multidisciplinary Builder",
  description: "Data, AI, product, and code brought together to ship useful systems.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className={archivo.variable}>{children}</div>;
}
