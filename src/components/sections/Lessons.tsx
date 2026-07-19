import { Reveal } from "@/components/ui/Reveal";

const lessons = [
  "Published an incorrect leaderboard — and kept it.",
  "Proved the stalls were the harness's fault, not the models'.",
  "Caught two measurement artifacts producing result-shaped lies.",
  "Learned that green tests are insufficient without negative controls.",
];

export function Lessons() {
  return (
    <section
      aria-labelledby="lessons-title"
      className="border-borderline border-y bg-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 id="lessons-title" className="font-mono text-sm text-muted">
            Lessons learned
          </h2>
        </Reveal>
        <div className="mt-12 space-y-14">
          {lessons.map((lesson, i) => (
            <Reveal key={lesson} delay={i * 0.05}>
              <p className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
                {lesson}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
