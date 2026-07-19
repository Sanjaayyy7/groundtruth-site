import { facts, REPO_URL, CHANGELOG_URL, CI_URL } from "@/content/facts";
import { Reveal } from "@/components/ui/Reveal";

const evidence = [
  {
    item: `${facts.tests.value} tests`,
    detail: "Every milestone shipped with its test count in the changelog.",
    href: `${REPO_URL}/tree/main/tests`,
  },
  {
    item: "Cross-platform byte determinism",
    detail:
      "Fresh-environment reproduction verified byte-identical — determinism as measured fact, not habit.",
    href: CHANGELOG_URL,
  },
  {
    item: "Negative controls",
    detail: "A planted metric lie fails the build with a named finding.",
    href: CHANGELOG_URL,
  },
  {
    item: `${facts.ciSteps.value} CI steps gate every push`,
    detail:
      "Tests · demo suite · detector quality report · two safety regression gates · two evidence audits · repository steward · byte-fresh evidence.",
    href: CI_URL,
  },
  {
    item: "Machine-audited claims and threats",
    detail:
      "Claims carry metric provenance and git-verified preregistration; threats link to the claims they could falsify.",
    href: `${REPO_URL}/blob/main/docs/claims.yaml`,
  },
  {
    item: "Repository steward",
    detail:
      "Eight repository contracts — read-only, stdlib-only, byte-deterministic — enforced as a blocking CI step.",
    href: `${REPO_URL}/blob/main/docs/CONSTITUTION.md`,
  },
];

function CheckGlyph() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-1.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 L8.5 15 L16 5.5"
        fill="none"
        stroke="#047857"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Verification() {
  return (
    <section
      aria-labelledby="verification-title"
      className="border-borderline border-y bg-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="verification-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Verification
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Not a dashboard — evidence. Each item links to the artifact that
            proves it.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          {evidence.map((entry, i) => (
            <Reveal key={entry.item} delay={i * 0.04}>
              <li className="flex gap-4">
                <CheckGlyph />
                <div>
                  <a
                    href={entry.href}
                    className="text-xl font-semibold tracking-tight underline-offset-4 hover:underline"
                  >
                    {entry.item}
                  </a>
                  <p className="mt-2 leading-relaxed text-muted">
                    {entry.detail}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="border-borderline mt-14 border-t pt-8 font-mono text-sm text-muted">
            {facts.language.value} · pytest · GitHub Actions · stdlib-only
            steward
          </p>
        </Reveal>
      </div>
    </section>
  );
}
