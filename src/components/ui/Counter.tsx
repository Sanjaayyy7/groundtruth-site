"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: string | number;
  className?: string;
}

/**
 * Numeric values tick up once when scrolled into view; string values
 * (versions, percentages, hashes) render as-is. Reduced motion renders
 * the final value immediately. tabular-nums keeps width stable — no CLS.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();
  const numeric = typeof value === "number";
  const [display, setDisplay] = useState<string>(numeric ? "0" : String(value));

  useEffect(() => {
    if (!numeric || reduced) {
      setDisplay(String(value));
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, numeric, reduced, value]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
      aria-label={String(value)}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
