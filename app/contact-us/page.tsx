import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactOverviewSection from "@/components/contact/ContactOverviewSection";
import ContactInformationSection from "@/components/contact/ContactInformationSection";
import ContactCTASection from "@/components/contact/ContactCTASection";

export default function ContactUs() {
  return (
    <div>
      <ContactHeroSection/>
      <ContactFormSection/>
      <ContactOverviewSection/>
      <ContactInformationSection/>
      <ContactCTASection/>
    </div>
  );
}