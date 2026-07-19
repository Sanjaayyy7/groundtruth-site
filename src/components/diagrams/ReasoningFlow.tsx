"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface FlowNode {
  name: string;
  annotation: string;
}

const nodes: FlowNode[] = [
  { name: "Problem", annotation: "can an evaluation prove its own validity?" },
  { name: "AgentProbe", annotation: "deterministic runner · 6 detectors" },
  { name: "Validation", annotation: "labeled trace set · measured P/R/F1" },
  {
    name: "Meta-Evaluation",
    annotation: "evidence graph · 10 contracts · negative controls",
  },
  {
    name: "Steward",
    annotation: "8 repository contracts · byte-fresh manifests",
  },
  { name: "Evidence", annotation: "committed artifacts · byte determinism" },
  {
    name: "Published Claims",
    annotation: "claims register · threat register",
  },
];

/**
 * The site's visual identity: Groundtruth's reasoning chain rendered as a
 * vertical spine. Nodes reveal sequentially; connectors draw once the
 * figure enters the viewport. Hover highlights a node — enrichment only,
 * the diagram is complete without any interaction or motion.
 */
export function ReasoningFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const drawn = inView || reduced;

  return (
    <figure ref={ref} className="mx-auto max-w-2xl">
      <ol className="flex flex-col items-center">
        {nodes.map((node, i) => {
          const last = node.name === "Published Claims";
          const annotationLeft = i % 2 === 0;
          return (
            <li key={node.name} className="flex w-full flex-col items-center">
              <Reveal delay={i * 0.08} className="w-full">
                <div className="grid w-full items-center gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
                  <span
                    className={`hidden text-right font-mono text-xs text-muted lg:block ${
                      annotationLeft ? "" : "invisible"
                    }`}
                    aria-hidden={!annotationLeft}
                  >
                    {node.annotation}
                  </span>
                  <div
                    className={`mx-auto w-56 border px-5 py-3.5 text-center transition-colors ${
                      last
                        ? "border-accent bg-accent text-paper"
                        : "border-ink bg-surface hover:border-accent hover:text-accent"
                    }`}
                  >
                    <span className="text-base font-semibold tracking-tight">
                      {node.name}
                    </span>
                  </div>
                  <span
                    className={`hidden text-left font-mono text-xs text-muted lg:block ${
                      annotationLeft ? "invisible" : ""
                    }`}
                    aria-hidden={annotationLeft}
                  >
                    {node.annotation}
                  </span>
                </div>
                <p className="mt-1.5 text-center font-mono text-xs text-muted lg:hidden">
                  {node.annotation}
                </p>
              </Reveal>
              {i < nodes.length - 1 && (
                <svg
                  viewBox="0 0 24 44"
                  className="my-1 h-11 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2 V34 M6 28 L12 36 L18 28"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="1.5"
                    pathLength={1}
                    className={`flow-path ${drawn ? "is-drawn" : ""}`}
                    style={{ transitionDelay: `${i * 0.08 + 0.2}s` }}
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-8 text-center text-sm text-muted">
        The reasoning chain: each stage exists to check the one before it.
      </figcaption>
      <p className="sr-only">
        The Groundtruth reasoning flow, in order: first, the problem — can an
        evaluation prove its own validity. Second, AgentProbe, a deterministic
        runner with six detectors. Third, Validation, which measures detector
        precision and recall against a hand-labeled trace set. Fourth,
        Meta-Evaluation, an evidence graph with ten contracts and negative
        controls. Fifth, Steward, which enforces eight repository contracts
        with byte-fresh manifests. Sixth, Evidence, committed artifacts with
        byte determinism. Seventh, Published Claims, backed by the claims
        register and threat register.
      </p>
    </figure>
  );
}
