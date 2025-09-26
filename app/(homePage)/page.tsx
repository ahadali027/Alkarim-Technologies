"use client";

import HeroSection from "@/components/homeComponent/HeroSection";
import WhoWeAreSection from "@/components/homeComponent/WhoWeAre";
import PerfromanceOverViewSection from "@/components/homeComponent/PerfromanceOverViewSection";
import ServicesSection from "@/components/homeComponent/ServicesSection";

import Portfolio from "@/components/homeComponent/OurPortfolioSection";
import Value from "@/components/homeComponent/Value";
import TestimonialsSection from "@/components/homeComponent/TestimonialsSection";


export default function Page() {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <PerfromanceOverViewSection />
      <ServicesSection />
      <Portfolio />
      <Value />
      <TestimonialsSection />

    </div>
  );
}
