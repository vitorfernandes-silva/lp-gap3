"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function AboutUsSection() {
  const commonPoints = [
    "Posta por postar, sem meta de venda",
    "Não conhece o dia a dia real de um restaurante",
    "Foco em curtidas e métricas de vaidade",
    "Ações genéricas e sem estratégia de crescimento",
    "Trabalha no achismo, sem acompanhamento de métricas",
  ];

  const gap3Points = [
    "Cada ação tem um objetivo claro: vender mais",
    "Especialistas no mercado de restaurantes e delivery",
    "Acompanhamos faturamento, ticket médio e recompra",
    "Estratégia personalizada para a fase do seu negócio",
    "Acompanhamento semanal e processo estruturado",
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black text-white font-inter border-b border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#FFC900]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Main Title */}
          <h2 className="font-poppins font-bold text-white tracking-tight leading-tight mb-4">
            <span className="block text-[32px] sm:text-4xl md:text-5xl leading-tight">
              O problema não é o seu restaurante.
            </span>
            <span className="block text-[24px] sm:text-3xl md:text-4xl text-[#FFC900] mt-2 font-bold leading-tight">
              É crescer sem um método comercial validado.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 font-normal max-w-2xl mx-auto">
            Veja a diferença entre agir no achismo ou ter uma assessoria focada em escalar o seu faturamento.
          </p>
        </div>

        {/* Comparative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Sem Assessoria Especializada */}
          <div className="bg-[#0C1014] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between opacity-90 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center font-bold">
                    <SolarIcon name="solar:close-circle-bold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-white">
                      Sem Assessoria Especializada
                    </h3>
                    <p className="text-xs text-red-400 font-medium">Fazer sozinho ou com agências genéricas</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {commonPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 font-normal">
                    <SolarIcon name="solar:close-circle-bold" className="text-red-400 shrink-0 mt-0.5" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-red-400/90 font-medium">
              Resultado: Muito esforço, mas o caixa continua instável e dependente de sorte.
            </div>
          </div>

          {/* Card 2: GAP3 Assessoria */}
          <div className="bg-gradient-to-br from-[#12161E] via-[#181E29] to-[#12161E] border-2 border-[#FFC900] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative shadow-[0_0_30px_rgba(255,201,0,0.15)]">
            {/* Top Highlight Ribbon */}
            <div className="absolute -top-3.5 right-6 sm:right-8 bg-[#FFC900] text-[#0C1014] text-xs font-poppins font-bold px-4 py-1 rounded-full shadow-lg tracking-wider">
              Nosso Método Exclusivo
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#FFC900]/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC900] text-[#0C1014] flex items-center justify-center font-bold shadow-md">
                    <SolarIcon name="solar:shield-check-bold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-white">
                      GAP3 Assessoria
                    </h3>
                    <p className="text-xs text-[#FFC900] font-semibold">Crescimento comercial estruturado</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {gap3Points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-white font-medium">
                    <SolarIcon name="solar:check-circle-bold" className="text-[#00E636] shrink-0 mt-0.5" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#FFC900]/30 text-xs sm:text-sm text-[#FFC900] font-semibold flex items-center space-x-2">
              <SolarIcon name="solar:star-bold" size={16} />
              <span>Resultado: Processos de vendas previsíveis e escala de faturamento todos os meses.</span>
            </div>
          </div>
        </div>

        {/* Green CTA Button */}
        <div className="mt-14 text-center flex justify-center">
          <Link
            href="/analise"
            className="inline-flex items-center justify-center gap-2.5 bg-[#1E8E1B] hover:bg-[#197816] text-white font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
          >
            <span>Agendar demonstração gratuita</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}

