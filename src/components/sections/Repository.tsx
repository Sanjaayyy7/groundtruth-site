import { facts, REPO_URL } from "@/content/facts";
import { Reveal } from "@/components/ui/Reveal";

const repoFacts = [facts.license, facts.language, facts.commits, facts.communityHealth];

export function Repository() {
  return (
    <section aria-labelledby="repository-title" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="repository-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Repository
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="border-ink mt-14 border px-8 py-10 sm:px-12">
            <p className="font-mono text-sm text-muted">Repository status</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Engineering Complete
            </p>
            <p className="mt-4 font-mono text-sm">
              Release {facts.release.value} · Freeze{" "}
              <span className="text-accent">{facts.freeze.value}</span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {repoFacts.map((fact) => (
              <div key={fact.id}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 text-xl font-semibold tracking-tight">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-12">
            <a
              href={REPO_URL}
              className="text-accent font-medium underline underline-offset-4 hover:no-underline"
            >
              github.com/Sanjaayyy7/GroundTruth
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
