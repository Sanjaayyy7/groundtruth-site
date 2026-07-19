import { CHANGELOG_URL } from "@/content/facts";
import { Reveal } from "@/components/ui/Reveal";

const milestones = [
  {
    version: "v0.1",
    commit: "f243f9d",
    headline: "Built the spine first.",
    body: "Trace, eval, and dataset engines; a deterministic runner; five scenarios including a benign control. No benchmarks yet — architecture before numbers.",
  },
  {
    version: "v0.2",
    commit: "615043a",
    headline: "Measured the detectors themselves.",
    body: "A 53-item hand-labeled trace set put numbers on the rules: F1 0.875, every miss published. First real LLM subjects both failed the same injection.",
  },
  {
    version: "v0.3",
    commit: "549f227",
    headline: "Published a leaderboard — and it was wrong.",
    body: "Three models “won” by stalling until the step budget expired. The regression gate, the benchmark, and the flaw all shipped; the incorrect table stays in git history by design.",
  },
  {
    version: "v0.4",
    commit: "ec9f56f",
    headline: "Found out why, before fixing it.",
    body: "A pre-registered five-cell experiment showed stalling was the harness's fault — stateless observation, not model resistance. One prediction was falsified and published as such. The ranking inverted.",
  },
  {
    version: "v0.5",
    commit: "fa68ede",
    headline: "Hardened the science. Zero new features.",
    body: "Claims classified against threats to validity; bootstrap confidence intervals; determinism re-measured from a fresh environment as byte-identical fact.",
  },
  {
    version: "v0.6",
    commit: "d6b3ba4",
    headline: "Made the system audit itself.",
    body: "An evidence graph, ten evaluation contracts, and a planted metric lie that fails the build with a named finding.",
  },
  {
    version: "v0.7",
    commit: "a68c1c7",
    headline: "Audited something it didn't build.",
    body: "The unmodified meta-evaluation engine audited MiniJudge — different domain, format, and threat family — green with zero modification.",
  },
  {
    version: "v0.8.0",
    commit: "f4fbb6e",
    headline: "Turned the mechanics on the repository itself.",
    body: "A constitution of thirteen laws, eight repository contracts, and a freshness guard that caught a genuinely stale manifest during the milestone that closed it.",
  },
];

export function Evolution() {
  return (
    <section aria-labelledby="evolution-title" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="evolution-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Evolution
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Eight milestones in seven days. A timeline of engineering
            decisions — including the ones that were wrong.
          </p>
        </Reveal>
        <ol className="border-borderline mt-14 border-l pl-8 sm:pl-12">
          {milestones.map((m, i) => (
            <li key={m.version} className="relative pb-14 last:pb-0">
              <span
                className={`absolute top-1.5 -left-8 h-2.5 w-2.5 -translate-x-[calc(50%+0.5px)] sm:-left-12 ${
                  i === milestones.length - 1 ? "bg-accent" : "bg-ink"
                }`}
                aria-hidden="true"
              />
              <Reveal>
                <p className="font-mono text-sm text-muted">
                  {m.version} · {m.commit}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  {m.headline}
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
                  {m.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-12 text-sm text-muted">
            Every line above condenses an entry in the{" "}
            <a
              href={CHANGELOG_URL}
              className="text-accent underline underline-offset-4 hover:no-underline"
            >
              changelog
            </a>
            , with the full evidence chain in the linked protocol and report
            documents.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
