"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function MethodSection() {
  const steps = [
    {
      letter: "1",
      title: "Diagnóstico",
      description:
        "Mergulhamos na operação do seu restaurante. Analisamos taxas de conversão, cardápio digital, perfis no iFood e 99Food, quantidade de SKUs, combos e precificação. Entendemos onde está o gargalo antes de qualquer ação.",
    },
    {
      letter: "2",
      title: "Estratégia",
      description:
        "Definimos metas reais e construímos o plano completo: otimização de cardápio, planejamento de conteúdo para redes sociais e ações para posicionar seu restaurante como referência na região.",
    },
    {
      letter: "3",
      title: "Execução",
      description:
        "Colocamos o plano em prática. Otimizamos seus perfis, publicamos com estratégia, ativamos campanhas e estruturamos o processo de fidelização para fazer o cliente voltar sem depender de sorte.",
    },
    {
      letter: "4",
      title: "Escala",
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

        {/* 4 Cards Grid with Rich Dark-Gold Gradient Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                {/* Header Row: Title & Circle Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight group-hover:text-[#FFC900] transition-colors">
                    {step.title}
                  </h3>

                  {/* Gradient Circle Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC900] via-[#F3A200] to-[#E59400] text-[#0C1014] font-poppins font-bold text-xl flex items-center justify-center shadow-[0_4px_14px_rgba(243,162,0,0.4)] shrink-0 border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                    {step.letter}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base font-inter text-gray-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Step Bar */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-[#FFC900] transition-colors">
                <span className="font-mono text-[11px] tracking-wider text-[#FFC900]/80">Etapa #0{step.letter}</span>
                <SolarIcon name="solar:alt-arrow-right-linear" size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Green CTA Button */}
        <div className="mt-14 text-center flex justify-center">
          <Link
            href="/analise"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
          >
            <span className="block sm:hidden">Quero meu método</span>
            <span className="hidden sm:block">Quero aplicação do método GAP3</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-[#0C1014]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
