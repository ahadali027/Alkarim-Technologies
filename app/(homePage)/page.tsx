"use client";

import HeroSection from "@/components/homeComponent/HeroSection";
import Portfolio from "@/components/homeComponent/OurPortfolioSection";
import PerfromanceOverViewSection from "@/components/homeComponent/PerfromanceOverViewSection";
import Value from "@/components/homeComponent/Value";
import WhoWeAreSection from "@/components/homeComponent/WhoWeAre";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <PerfromanceOverViewSection />
      <Portfolio />
      <Value />
      
    </div>
  );
}
