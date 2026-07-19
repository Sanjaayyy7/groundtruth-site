import type { Fact } from "@/content/facts";
import { Counter } from "./Counter";

/**
 * Editorial statistics row: plain figures over hairlines, no cards.
 */
export function StatRow({ facts }: { facts: Fact[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-borderline pt-10 sm:grid-cols-3 lg:grid-cols-6">
      {facts.map((fact) => (
        <div key={fact.id}>
          <dd
            className="text-3xl font-semibold tracking-tight"
            title={`Source: ${fact.source} (verified ${fact.verifiedAt})`}
          >
            <Counter value={fact.value} />
          </dd>
          <dt className="mt-1.5 text-sm text-muted">{fact.label}</dt>
        </div>
      ))}
    </dl>
  );
}
