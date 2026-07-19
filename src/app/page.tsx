import { MotionRoot } from "@/components/ui/MotionRoot";
import { Problem } from "@/components/sections/Problem";
import { Principles } from "@/components/sections/Principles";
import { Hero } from "@/components/sections/Hero";
import { Close } from "@/components/sections/Close";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionRoot>
      <Hero />
      <Problem />
      <Principles />
      <Close />
      <Footer />
    </MotionRoot>
  );
}
