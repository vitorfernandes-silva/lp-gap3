import { Hero } from "@/components/sections/Hero";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CustomPlansSection } from "@/components/sections/CustomPlansSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col font-sans">
      <Hero />
      <IdentificationSection />
      <TestimonialsSection />
      <AboutUsSection />
      <MethodSection />
      <ServicesSection />
      <VisionSection />
      <CustomPlansSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
