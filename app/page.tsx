import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col font-sans">
      <Hero />
      <MarqueeSection />
      <IdentificationSection />
      <AboutUsSection />
      <MethodSection />
      <ServicesSection />
      <VisionSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
