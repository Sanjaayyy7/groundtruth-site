import { facts, REPO_URL, EVOLUTION_URL } from "@/content/facts";
import { Reveal } from "@/components/ui/Reveal";

export function Close() {
  return (
    <section aria-labelledby="close-title" className="px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="close-title"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Groundtruth is complete.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            Its engineering foundations are frozen at{" "}
            <span className="font-mono text-ink">{facts.freeze.value}</span>.
            Future work — including JudgeKit, an evaluation toolkit for LLM
            judges — builds on those foundations rather than replacing them.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={REPO_URL}
              className="bg-ink text-paper hover:bg-accent px-6 py-3 text-sm font-medium transition-colors"
            >
              View Repository
            </a>
            <a
              href={EVOLUTION_URL}
              className="border-borderline hover:border-ink border px-6 py-3 text-sm font-medium transition-colors"
            >
              Read the Evolution Record
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
