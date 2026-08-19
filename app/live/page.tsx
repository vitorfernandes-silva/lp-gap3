import type { Metadata } from "next";
import { LiveHeader } from "@/components/live/LiveHeader";
import { LiveHero } from "@/components/live/LiveHero";
import { LiveTopicsSection } from "@/components/live/LiveTopicsSection";
import { LivePhilosophySection } from "@/components/live/LivePhilosophySection";
import { LiveFinalCTASection } from "@/components/live/LiveFinalCTASection";
import { LiveFooter } from "@/components/live/LiveFooter";

export const metadata: Metadata = {
  title: "Live: Os Bastidores dos Restaurantes que Crescem | GAP3 Assessoria",
  description:
    "Descubra as estratégias por trás dos restaurantes que conseguem vender durante a semana, fazer clientes voltarem e construir receita com previsibilidade. Quarta-feira às 19h no Google Meet.",
  openGraph: {
    title: "Live: Os Bastidores dos Restaurantes que Crescem | GAP3 Assessoria",
    description:
      "Evento online e gratuito exclusivo para donos de restaurantes. Quarta-feira às 19h, ao vivo pelo Google Meet.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function LivePage() {
  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col selection:bg-[#FFC900] selection:text-[#0C1014]">
      <LiveHeader />
      <LiveHero />
      <LiveTopicsSection />
      <LivePhilosophySection />
      <LiveFinalCTASection />
      <LiveFooter />
    </main>
  );
}
