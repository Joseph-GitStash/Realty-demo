import { BentoGridSection } from "@/components/Homepage/BentoGridSection";
import Brief from "@/components/Homepage/Brief";
import Hero from "@/components/Homepage/Hero";
import TeamCarousel from "@/components/Homepage/TeamCarousel";
import TeamDesc from "@/components/Homepage/TeamDesc";
import Trusted from "@/components/Homepage/Trusted";

export default function Home() {
  return (
    <div className="layout relative">
      <Hero />
      <Trusted />
      <Brief />
      <BentoGridSection />
      <TeamDesc />
      <TeamCarousel />
    </div>
  );
}
