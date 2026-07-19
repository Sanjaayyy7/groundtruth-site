import { MotionRoot } from "@/components/ui/MotionRoot";
import { Hero } from "@/components/sections/Hero";
import { Close } from "@/components/sections/Close";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionRoot>
      <Hero />
      <Close />
      <Footer />
    </MotionRoot>
  );
}
