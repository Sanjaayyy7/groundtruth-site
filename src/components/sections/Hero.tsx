import { facts, REPO_URL, EVOLUTION_URL } from "@/content/facts";
import { StatRow } from "@/components/ui/StatRow";
import { Reveal } from "@/components/ui/Reveal";

const heroFacts = [
  facts.commits,
  facts.tests,
  facts.milestones,
  facts.release,
  facts.communityHealth,
  facts.ciSteps,
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-6 pt-28 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-muted">Engineering case study</p>
          <h1
            id="hero-title"
            className="mt-4 text-[clamp(3.5rem,8vw,6.5rem)] leading-none font-semibold tracking-tight"
          >
            Groundtruth
          </h1>
          <p className="mt-8 max-w-2xl text-2xl leading-snug font-medium sm:text-3xl">
            Engineering AI evaluation systems that verify their own evidence.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            A deterministic evaluation platform for AI agents that measures,
            audits, and validates its own pipeline — every metric traceable to
            a committed artifact.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
        <Reveal delay={0.2} className="mt-20 sm:mt-24">
          <StatRow facts={heroFacts} />
        </Reveal>
      </div>
    </section>
  );
}
