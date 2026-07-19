import { Reveal } from "@/components/ui/Reveal";
import { PipelineContrast } from "@/components/diagrams/PipelineContrast";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2
            id="problem-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            The problem
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Most AI evaluation systems rest on undocumented assumptions:
              hand-collected benchmarks, unversioned labels, and metrics that
              cannot demonstrate their own validity.
            </p>
            <p>
              When a leaderboard is wrong, nothing inside the system can say
              so. The error is discovered downstream — or never.
            </p>
            <p className="text-ink">
              Groundtruth explores the alternative: every number traceable to
              a committed artifact, every run reproducible byte-for-byte,
              every claim paired with the threat that could falsify it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="self-center">
          <PipelineContrast />
        </Reveal>
      </div>
    </section>
  );
}
