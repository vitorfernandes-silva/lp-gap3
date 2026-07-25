import { Hero } from "@/components/sections/Hero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col font-sans">
      <Hero />
      <TestimonialsSection />
      <AboutUsSection />
      <MethodSection />
      <ServicesSection />
      <PlansSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
