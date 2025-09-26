import BusinessHeroSection from "@/components/ourBusiness/BusinessHeroSection";
import BusinessOverviewSection from "@/components/ourBusiness/BusinessOverviewSection";
import SolutionsServicesSection from "@/components/ourBusiness/SolutionsServicesSection";
import IndustriesServedSection from "@/components/ourBusiness/IndustriesServedSection";
import BusinessCaseStudiesSection from "@/components/ourBusiness/BusinessCaseStudiesSection";
import WhyChooseUsSection from "@/components/ourBusiness/WhyChooseUsSection";
import BusinessCTASection from "@/components/ourBusiness/BusinessCTASection";

export default function OurBusinessOverview() {
  return (
    <div>
      <BusinessHeroSection/>
      <BusinessOverviewSection/>
      <SolutionsServicesSection/>
      <IndustriesServedSection/>
      <BusinessCaseStudiesSection/>
      <WhyChooseUsSection/>
      <BusinessCTASection/>
    </div>
  );
}


