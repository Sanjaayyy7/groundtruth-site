# groundtruth-site

Engineering case study for [Groundtruth](https://github.com/Sanjaayyy7/GroundTruth) — a deterministic AI agent evaluation platform that measures, audits, and validates its own pipeline.

Live site: deployed on Vercel.

## Stack

- Next.js 15 (App Router), TypeScript strict, Tailwind CSS v4
- Fully static — every route prerendered, no runtime data fetching
- Hand-built components, inline SVG diagrams, IBM Plex Sans/Mono self-hosted at build time
- No animation library: scroll reveals and counters are ~60 lines of IntersectionObserver / requestAnimationFrame, with content fully visible in server HTML and under `prefers-reduced-motion`

## Fact ledger

Every statistic on the page comes from `src/content/facts.ts`. Each entry carries its value, source, verification date, and evidence type, measured against the Groundtruth repository frozen at commit `86ae6c2` (tag `v0.8.0`). No component hard-codes a number.

## Quality evidence

Recorded 2026-07-19 against the production build:

- Lighthouse desktop: 100 performance / 100 accessibility / 100 best practices / 100 SEO
- Lighthouse mobile: 99 / 100 / 100 / 100
- Cumulative layout shift: 0
- Client JavaScript: 144 KB gzip total (framework runtime included; page code < 2 KB)
- No horizontal scroll at 390 px; keyboard-navigable with visible focus states and a skip link

## Development

```
npm install
npm run dev    # local development
npm run build  # production build (static)
npm run lint
```

## License

MIT
