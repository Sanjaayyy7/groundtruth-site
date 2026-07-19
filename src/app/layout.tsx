import type { Metadata } from "next";
import { plexSans, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groundtruth — Deterministic AI Evaluation, Verified",
  description:
    "An engineering case study: an AI agent evaluation platform that measures, audits, and validates its own pipeline. 67 commits, 170 tests, every claim traceable.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
