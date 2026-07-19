import { Reveal } from "@/components/ui/Reveal";
import { ReasoningFlow } from "@/components/diagrams/ReasoningFlow";

export function Architecture() {
  return (
    <section
      aria-labelledby="architecture-title"
      className="border-borderline border-y bg-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="architecture-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Architecture
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Not a software stack — a chain of reasoning. Each stage exists to
            audit the stage before it, ending in claims that carry their own
            evidence.
          </p>
        </Reveal>
        <div className="mt-16">
          <ReasoningFlow />
        </div>
      </div>
    </section>
  );
}
