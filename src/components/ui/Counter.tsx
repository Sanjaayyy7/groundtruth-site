"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string | number;
  className?: string;
}

/**
 * Numeric values tick up once when scrolled into view; string values
 * (versions, percentages, hashes) render as-is. Server HTML carries the
 * final value — the count-up is a progressive enhancement, skipped under
 * reduced motion. tabular-nums keeps width stable, so no layout shift.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(String(value));

  useEffect(() => {
    const el = ref.current;
    if (typeof value !== "number" || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 800;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(String(Math.round(eased * value)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

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
