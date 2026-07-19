/**
 * Fact ledger — the single source of truth for every statistic and claim
 * rendered on this site. No component may hard-code a number.
 *
 * Every entry carries its evidence: where the value comes from, how it was
 * verified, and when. All repository facts were measured against the
 * Groundtruth repository frozen at commit 86ae6c2 (tag v0.8.0).
 */

export type EvidenceType = "repository" | "dossier" | "github-api";

export interface Fact {
  id: string;
  value: string | number;
  label: string;
  source: string;
  verifiedAt: string;
  evidenceType: EvidenceType;
}

export type FactId =
  | "commits"
  | "tests"
  | "milestones"
  | "release"
  | "freeze"
  | "communityHealth"
  | "ciSteps"
  | "license"
  | "language";

export const REPO_URL = "https://github.com/Sanjaayyy7/GroundTruth";
export const EVOLUTION_URL = `${REPO_URL}/blob/main/docs/EVOLUTION.md`;
export const CHANGELOG_URL = `${REPO_URL}/blob/main/CHANGELOG.md`;
export const CI_URL = `${REPO_URL}/blob/main/.github/workflows/ci.yml`;

export const facts: Record<FactId, Fact> = {
  commits: {
    id: "commits",
    value: 67,
    label: "Commits",
    source: "git rev-list --count HEAD @ 86ae6c2",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  tests: {
    id: "tests",
    value: 170,
    label: "Tests",
    source: "tests/ — count of test functions",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  milestones: {
    id: "milestones",
    value: 8,
    label: "Milestones",
    source: "CHANGELOG.md — one entry per shipped milestone, v0.1 through v0.8.0",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  release: {
    id: "release",
    value: "v0.8.0",
    label: "Release",
    source: "git tag @ 86ae6c2",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  freeze: {
    id: "freeze",
    value: "86ae6c2",
    label: "Freeze",
    source: "git HEAD — engineering-complete baseline",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  communityHealth: {
    id: "communityHealth",
    value: "100%",
    label: "Community health",
    source: "GitHub API community/profile, measured post-86ae6c2",
    verifiedAt: "2026-07-18",
    evidenceType: "github-api",
  },
  ciSteps: {
    id: "ciSteps",
    value: 10,
    label: "CI steps",
    source: ".github/workflows/ci.yml — named steps in the test job",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  license: {
    id: "license",
    value: "MIT",
    label: "License",
    source: "LICENSE",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
  language: {
    id: "language",
    value: "Python",
    label: "Language",
    source: "pyproject.toml — stdlib-only runtime",
    verifiedAt: "2026-07-18",
    evidenceType: "repository",
  },
};

export interface DocLink {
  title: string;
  description: string;
  path: string;
  href: string;
}

export const DOC_LINKS: DocLink[] = [
  {
    title: "Constitution",
    description: "Thirteen laws governing the repository — nine enforced with law→test→CI→evidence chains.",
    path: "docs/CONSTITUTION.md",
    href: `${REPO_URL}/blob/main/docs/CONSTITUTION.md`,
  },
  {
    title: "Evolution Record",
    description: "Reversals, rejected directions, and the evidence behind each decision.",
    path: "docs/EVOLUTION.md",
    href: EVOLUTION_URL,
  },
  {
    title: "Architecture Decision Records",
    description: "Why the system is shaped the way it is, one decision at a time.",
    path: "docs/adr/",
    href: `${REPO_URL}/tree/main/docs/adr`,
  },
  {
    title: "Claims Register",
    description: "Machine-readable claims with metric provenance and git-verified preregistration.",
    path: "docs/claims.yaml",
    href: `${REPO_URL}/blob/main/docs/claims.yaml`,
  },
  {
    title: "Threats Register",
    description: "Seventeen threats to validity, each linked to the claims it could falsify.",
    path: "docs/threats.yaml",
    href: `${REPO_URL}/blob/main/docs/threats.yaml`,
  },
  {
    title: "Debt Register",
    description: "Known limitations, tracked as machine-readable debt with closure evidence.",
    path: "docs/debt.yaml",
    href: `${REPO_URL}/blob/main/docs/debt.yaml`,
  },
  {
    title: "Specifications",
    description: "Milestone protocols and validation reports, committed before implementation.",
    path: "docs/specs/",
    href: `${REPO_URL}/tree/main/docs/specs`,
  },
  {
    title: "Changelog",
    description: "One entry per shipped milestone, derived from the roadmap's ship-commit lineage.",
    path: "CHANGELOG.md",
    href: CHANGELOG_URL,
  },
];
