import { DOC_LINKS } from "@/content/facts";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The one section where cards are permitted (spec: "cards are exceptions").
 */
export function Documentation() {
  return (
    <section aria-labelledby="documentation-title" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="documentation-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Documentation
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The written record. Every document lives in the repository and is
            governed by the same constitution it describes.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {DOC_LINKS.map((doc, i) => (
            <Reveal key={doc.path} delay={i * 0.03}>
              <a
                href={doc.href}
                className="border-borderline bg-surface hover:border-ink block h-full border p-6 transition-[border-color,box-shadow] hover:shadow-[0_2px_12px_rgba(17,17,17,0.06)]"
              >
                <h3 className="font-semibold tracking-tight">{doc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {doc.description}
                </p>
                <p className="mt-4 font-mono text-xs text-muted">{doc.path}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
