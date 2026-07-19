"use client";

import { useRevealOnce } from "@/lib/useReveal";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, state } = useRevealOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} ${state === "hidden" ? "reveal-hidden" : ""} ${
        state === "shown" ? "reveal-shown" : ""
      }`}
      style={state !== "idle" ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
