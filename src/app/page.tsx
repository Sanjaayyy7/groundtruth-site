import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Architecture } from "@/components/sections/Architecture";
import { Principles } from "@/components/sections/Principles";
import { Evolution } from "@/components/sections/Evolution";
import { Verification } from "@/components/sections/Verification";
import { Documentation } from "@/components/sections/Documentation";
import { Repository } from "@/components/sections/Repository";
import { Lessons } from "@/components/sections/Lessons";
import { Close } from "@/components/sections/Close";
import { Footer } from "@/components/sections/Footer";
import { facts, REPO_URL } from "@/content/facts";
import { SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Groundtruth",
  description:
    "A deterministic AI agent evaluation platform that measures, audits, and validates its own pipeline.",
  codeRepository: REPO_URL,
  programmingLanguage: facts.language.value,
  license: "https://opensource.org/licenses/MIT",
  version: facts.release.value,
  url: SITE_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Architecture />
      <Principles />
      <Evolution />
      <Verification />
      <Documentation />
      <Repository />
      <Lessons />
      <Close />
      <Footer />
    </>
  );
}
