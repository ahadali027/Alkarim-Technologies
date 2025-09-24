"use client";

import AboutLinks from "@/components/aboutUscompoent/AboutLink";
import TechCompanyStrategy from "@/components/aboutUscompoent/CompanyStrategy";
import AboutHero from "@/components/aboutUscompoent/HeroSection";
import LeadershipSection from "@/components/aboutUscompoent/LeaderShipSection";

export default function AboutUs() {
  return (
    <div className="">
      <AboutHero />
      <AboutLinks />
      <TechCompanyStrategy />
      <LeadershipSection />
    </div>
  );
}
