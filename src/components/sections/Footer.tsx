import { facts } from "@/content/facts";

export function Footer() {
  return (
    <footer className="border-borderline border-t px-6 py-10">
      <p className="mx-auto max-w-5xl text-center font-mono text-xs text-muted">
        Groundtruth · {facts.release.value} · Engineering Complete · 2026
      </p>
    </footer>
  );
}
