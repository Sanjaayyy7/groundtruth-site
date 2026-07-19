import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    number: "01",
    title: "Deterministic by default",
    body: "Temperature 0, fixed seeds, byte-identical reruns. If a result cannot be reproduced exactly, it is treated as a bug, not a variance.",
  },
  {
    number: "02",
    title: "Evidence over assumptions",
    body: "Direction changed four times because a measurement contradicted a belief. The reversals are documented, not erased.",
  },
  {
    number: "03",
    title: "Negative controls matter",
    body: "A planted metric lie must fail the build with a named finding. Green tests alone prove only that nothing was asserted.",
  },
  {
    number: "04",
    title: "Every metric is traceable",
    body: "Claims live in a machine register with provenance and preregistration verified from git history.",
  },
  {
    number: "05",
    title: "Architecture before optimization",
    body: "The platform spine — trace, evaluation, validation engines — shipped in v0.1 before any benchmark was run.",
  },
];

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="principles-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Engineering principles
          </h2>
        </Reveal>
        <div className="mt-14">
          {principles.map((principle, i) => (
            <Reveal key={principle.number} delay={i * 0.05}>
              <div className="border-borderline grid gap-4 border-t py-10 sm:grid-cols-[80px_1fr_1.4fr] sm:gap-8">
                <span className="font-mono text-sm text-muted">
                  {principle.number}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
