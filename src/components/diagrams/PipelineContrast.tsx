/**
 * Conceptual contrast: an opaque evaluation pipeline versus a traceable one.
 * Pure presentational SVG; the full meaning is carried by the visually
 * hidden text alternative below it.
 */
export function PipelineContrast() {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 640 220"
        role="img"
        aria-labelledby="pipeline-contrast-title"
        className="w-full"
      >
        <title id="pipeline-contrast-title">
          An opaque evaluation pipeline compared with a traceable one
        </title>

        {/* Opaque pipeline */}
        <text x="0" y="24" className="fill-[#5F6368]" fontSize="13">
          Typical pipeline
        </text>
        <rect x="0" y="40" width="130" height="44" fill="none" stroke="#5F6368" strokeDasharray="4 4" />
        <text x="65" y="66" textAnchor="middle" fontSize="14" className="fill-[#5F6368]">
          Benchmark
        </text>
        <line x1="130" y1="62" x2="250" y2="62" stroke="#5F6368" strokeDasharray="4 4" />
        <text x="190" y="54" textAnchor="middle" fontSize="16" className="fill-[#5F6368]">
          ?
        </text>
        <rect x="250" y="40" width="130" height="44" fill="none" stroke="#5F6368" strokeDasharray="4 4" />
        <text x="315" y="66" textAnchor="middle" fontSize="14" className="fill-[#5F6368]">
          Score
        </text>

        {/* Traceable pipeline */}
        <text x="0" y="136" className="fill-[#111111]" fontSize="13">
          Groundtruth
        </text>
        {["Scenario", "Trace", "Detector", "Evidence", "Claim"].map((label, i) => (
          <g key={label}>
            <rect
              x={i * 130}
              y={152}
              width={110}
              height={44}
              fill={label === "Claim" ? "#047857" : "none"}
              stroke={label === "Claim" ? "#047857" : "#111111"}
            />
            <text
              x={i * 130 + 55}
              y={178}
              textAnchor="middle"
              fontSize="14"
              fill={label === "Claim" ? "#F8F8F6" : "#111111"}
            >
              {label}
            </text>
            {i < 4 && (
              <line
                x1={i * 130 + 110}
                y1={174}
                x2={i * 130 + 130}
                y2={174}
                stroke="#111111"
              />
            )}
          </g>
        ))}
      </svg>
      <figcaption className="mt-4 text-sm text-muted">
        Every published claim traces back through committed evidence to the
        scenario that produced it.
      </figcaption>
      <p className="sr-only">
        Two pipelines compared. The typical pipeline: a benchmark connects to
        a score through an unknown, undocumented step. The Groundtruth
        pipeline: scenario, then trace, then detector, then evidence, then
        claim — each stage committed and traceable.
      </p>
    </figure>
  );
}
