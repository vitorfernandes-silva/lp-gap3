"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function AboutUsSection() {
  const agencyPoints = [
    "Postagens soltas sem meta clara de vendas ou ROI",
    "Foco excessivo em 'likes' e métricas de vaidade",
    "Pacotes de posts engessados e soluções genéricas",
    "Equipe terceirizada sem vivência em food service",
    "Sem acompanhamento semanal de faturamento e recompra",
  ];

  const gap3Points = [
    "Processos comerciais estruturados focados em faturamento real",
    "Decisões 100% guiadas por dados de vendas e conversão",
    "Estratégia sob medida construída para a fase do seu restaurante",
    "Time de especialistas focado exclusivamente em food services",
    "Acompanhamento semanal de metas, CRM e recompra previsível",
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0C1014] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge iconName="solar:shield-star-bold" className="mb-4">
            Nossa cultura
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight mb-6">
            Nós não somos uma agência de marketing.{" "}
            <span className="text-gap3-gold-gradient">Somos a assessoria de crescimento</span> do seu restaurante.
          </h2>
          <p className="text-base md:text-lg text-[#A0A5B1] font-normal max-w-3xl mx-auto">
            Veja na prática a diferença entre contratar posts de uma agência tradicional ou ter uma assessoria comercial focada em escalar o seu faturamento.
          </p>
        </div>

        {/* Comparative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Agências Tradicionais (Lower Prominence / Muted) */}
          <div className="bg-[#12151A]/80 border border-[#232B36] rounded-3xl p-8 flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232B36]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center font-bold">
                    <SolarIcon name="solar:close-circle-bold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-white">
                      Agências Tradicionais
                    </h3>
                    <p className="text-xs text-red-400 font-medium">Modelos antigos de marketing</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {agencyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#A0A5B1] font-normal">
                    <SolarIcon name="solar:close-circle-bold" className="text-red-400 shrink-0 mt-0.5" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#232B36] text-xs text-red-400/80 font-medium">
              Resultado: Posts bonitos no feed, mas o caixa continua no vermelho.
            </div>
          </div>

          {/* Card 2: GAP3 Assessoria (HIGH PROMINENCE / Glowing Gold Border & High Conversion) */}
          <div className="bg-gradient-to-br from-[#161B22] via-[#1C232E] to-[#161B22] border-2 border-[#F3A200] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative gold-glow">
            {/* Top Highlight Ribbon */}
            <div className="absolute -top-3.5 right-8 bg-gap3-gold-gradient text-[#0C1014] text-xs font-poppins font-semibold px-4 py-1 rounded-full shadow-lg">
              NOSSO MÉTODO EXCLUSIVO
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F3A200]/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gap3-gold-gradient text-[#0C1014] flex items-center justify-center font-bold shadow-md">
                    <SolarIcon name="solar:shield-check-bold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-white">
                      GAP3 Assessoria
                    </h3>
                    <p className="text-xs text-[#FFC900] font-semibold">Crescimento comercial estruturado</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {gap3Points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-white font-medium">
                    <SolarIcon name="solar:check-circle-bold" className="text-[#00E636] shrink-0 mt-0.5" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3A200]/30 text-xs text-[#FFC900] font-semibold flex items-center space-x-2">
              <SolarIcon name="solar:star-bold" size={16} />
              <span>Resultado: Processos de vendas previsíveis e escala de faturamento todos os meses.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
