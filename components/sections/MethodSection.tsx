"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

interface StepItem {
  id: number;
  numberLabel: string;
  title: string;
  shortLabel: string;
  icon: string;
  shortSummary: string;
}

export function MethodSection() {
  const [hoveredStepId, setHoveredStepId] = useState<number | null>(null);

  // Etapas de 1 a 5 (Sem enumeração nos labels de texto externos, apenas nos círculos)
  const steps: StepItem[] = [
    {
      id: 1,
      numberLabel: "01",
      title: "Aquisição Regional",
      shortLabel: "Aquisição",
      icon: "solar:user-plus-bold-duotone",
      shortSummary: "Anúncios e atração geolocalizada para trazer novos clientes.",
    },
    {
      id: 2,
      numberLabel: "02",
      title: "Conversão & Vendas",
      shortLabel: "Conversão",
      icon: "solar:shop-2-bold-duotone",
      shortSummary: "Cardápio digital e atendimento ágil para fechar pedidos.",
    },
    {
      id: 3,
      numberLabel: "03",
      title: "Captura de Dados",
      shortLabel: "Captura",
      icon: "solar:user-bold-duotone",
      shortSummary: "Coleta automática de contatos no salão e delivery.",
    },
    {
      id: 4,
      numberLabel: "04",
      title: "Organização de CRM",
      shortLabel: "CRM",
      icon: "solar:chart-2-bold-duotone",
      shortSummary: "Gestão inteligente de clientes e relatórios semanais.",
    },
    {
      id: 5,
      numberLabel: "05",
      title: "Fidelização & Recompra",
      shortLabel: "Fidelização",
      icon: "solar:star-bold-duotone",
      shortSummary: "Campanhas no WhatsApp para gerar vendas recorrentes.",
    },
  ];

  // Coordinates around the central wheel for 5 items (Clockwise starting top)
  const nodePositions = [
    { top: "4%", left: "50%", transform: "translate(-50%, 0)" },   // 1: Top
    { top: "28%", right: "6%", transform: "translate(0, 0)" },    // 2: Right Top
    { bottom: "8%", right: "14%", transform: "translate(0, 0)" }, // 3: Right Bottom
    { bottom: "8%", left: "14%", transform: "translate(0, 0)" },  // 4: Left Bottom
    { top: "28%", left: "6%", transform: "translate(0, 0)" },     // 5: Left Top
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-y border-[#232B36] relative overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge iconName="solar:diagram-up-bold" className="mb-4">
            Metodologia validada
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight mb-4">
            O ciclo contínuo de crescimento para o seu restaurante{" "}
            <span className="text-gap3-gold-gradient">nunca parar de vender</span>
          </h2>
          <p className="text-sm md:text-base text-[#A0A5B1] font-normal">
            Passe o mouse sobre cada número para visualizar a explicação rápida da etapa.
          </p>
        </div>

        {/* Circular Wheel Container */}
        <div className="relative max-w-2xl mx-auto h-[500px] sm:h-[580px] md:h-[640px] flex items-center justify-center">
          {/* Central Image with 2x Larger White Logo Above "Método GAP3" Text */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#F3A200] shadow-2xl relative z-10 p-1 bg-[#14181F] flex flex-col items-center justify-center text-center">
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
              alt="Método GAP3"
              fill
              unoptimized
              className="object-cover rounded-full"
              priority
            />
            {/* Dark Overlay for High Contrast */}
            <div className="absolute inset-0 rounded-full bg-black/55" />

            {/* White Logo (2x Larger) + Centered Text "Método GAP3" (2x Larger) */}
            <div className="relative z-20 flex flex-col items-center justify-center space-y-2 px-4">
              <Image
                src="/images/logo.png"
                alt="GAP3 Logo"
                width={240}
                height={70}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-xl"
              />
              <span className="text-white font-poppins font-semibold text-base sm:text-xl md:text-2xl tracking-widest uppercase drop-shadow-2xl">
                Método GAP3
              </span>
            </div>
          </div>

          {/* Dotted Circular Track Line */}
          <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] rounded-full border-2 border-dashed border-[#F3A200]/40 pointer-events-none" />

          {/* Curved Directional Gold Arrow Background Animation */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <SolarIcon
              name="solar:restart-bold-duotone"
              size={440}
              className="text-[#F3A200]/15 animate-spin-slow"
            />
          </div>

          {/* 5 Circular Nodes */}
          {steps.map((step, idx) => {
            const pos = nodePositions[idx];
            const isHovered = hoveredStepId === step.id;

            return (
              <div
                key={step.id}
                style={pos}
                className="absolute z-30 flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setHoveredStepId(step.id)}
                onMouseLeave={() => setHoveredStepId(null)}
              >
                {/* Circle Icon & Number Button */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white border-2 flex flex-col items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative ${
                    isHovered
                      ? "border-[#F3A200] ring-4 ring-[#F3A200]/60 scale-110 bg-[#FFC900]"
                      : "border-gray-900 hover:border-[#F3A200]"
                  }`}
                >
                  <span className="text-[10px] sm:text-xs font-bold text-[#0C1014] leading-none mb-0.5">
                    {step.numberLabel}
                  </span>
                  <SolarIcon
                    name={step.icon}
                    size={26}
                    className="text-[#0C1014]"
                  />
                </div>

                {/* Node Title Label (Without number prefix) */}
                <span className="mt-2 text-center text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-wider text-white max-w-[120px] leading-tight bg-[#090C0F]/90 px-2.5 py-1 rounded-md border border-[#232B36] group-hover:border-[#F3A200]">
                  {step.shortLabel}
                </span>

                {/* Hover Card Tooltip (Opens on Mouse Over) */}
                {isHovered && (
                  <div
                    className={`absolute z-40 bg-[#14181F] border-2 border-[#F3A200] rounded-2xl p-4 shadow-2xl w-64 text-left pointer-events-none transition-all duration-200 animate-in fade-in zoom-in-95 ${
                      idx === 0
                        ? "top-24 left-1/2 -translate-x-1/2"
                        : idx === 1 || idx === 2
                        ? "right-full mr-3 top-0"
                        : "left-full ml-3 top-0"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="bg-gap3-gold-gradient text-[#0C1014] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Etapa {step.numberLabel}
                      </span>
                      <h4 className="text-xs font-poppins font-semibold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#E4E4E4] font-normal leading-snug">
                      {step.shortSummary}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
