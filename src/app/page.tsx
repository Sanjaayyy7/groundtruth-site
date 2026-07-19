import { MotionRoot } from "@/components/ui/MotionRoot";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Architecture } from "@/components/sections/Architecture";
import { Principles } from "@/components/sections/Principles";
import { Evolution } from "@/components/sections/Evolution";
import { Close } from "@/components/sections/Close";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionRoot>
      <Hero />
      <Problem />
      <Architecture />
      <Principles />
      <Evolution />
      <Close />
      <Footer />
    </MotionRoot>
  );
}
