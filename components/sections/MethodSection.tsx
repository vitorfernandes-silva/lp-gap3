"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function MethodSection() {
  const steps = [
    {
      title: "Diagnóstico e Estratégia",
      icon: "solar:magnifer-bold-duotone",
      description:
        "Mergulhamos na operação do seu restaurante. Analisamos cardápio digital, perfis no iFood e 99Food, taxas de conversão e precificação. A partir disso definimos metas reais e construímos o plano completo para posicionar seu restaurante como referência na região.",
    },
    {
      title: "Execução",
      icon: "solar:rocket-bold-duotone",
      description:
        "Colocamos o plano em prática. Otimizamos seus perfis, publicamos com estratégia, ativamos campanhas e estruturamos o processo de fidelização para fazer o cliente voltar sem depender de sorte.",
    },
    {
      title: "Escala",
      icon: "solar:graph-up-bold-duotone",
      description:
        "Monitoramos os resultados semana a semana, ajustamos o que precisa e aceleramos o que está funcionando. Seu restaurante cresce com previsibilidade, não no achismo.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F3A200] text-[#0C1014] font-inter border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <Badge iconName="solar:diagram-up-bold" variant="gold" className="mb-2">
            Nossa metodologia
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#0C1014] tracking-tight leading-tight">
            Método <span className="text-white">GAP3</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0C1014]/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Essa é a metodologia exclusiva que utilizamos para transformar restaurantes em líderes de faturamento.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#12161F] via-[#1A212D] to-[#0D1117] border border-white/15 hover:border-[#FFC900]/70 rounded-3xl p-7 sm:p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden text-white backdrop-blur-xl"
            >
              {/* Top Accent Gradient Light on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC900] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background Corner Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FFC900]/10 rounded-full blur-2xl group-hover:bg-[#FFC900]/25 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Card Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFC900]/10 border border-[#FFC900]/30 flex items-center justify-center text-[#FFC900] mb-6 group-hover:scale-110 group-hover:bg-[#FFC900] group-hover:text-[#0C1014] transition-all duration-300">
                  <SolarIcon name={step.icon} size={30} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight group-hover:text-[#FFC900] transition-colors mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base font-inter text-gray-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
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
