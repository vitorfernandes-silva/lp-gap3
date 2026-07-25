"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function BonusDifferentiatorsSection() {
  const differentiators = [
    {
      title: "Esteira de Produtos (Upsell & Cross-Sell)",
      desc: "Desenhamos combos inteligentes e adicionais de alta margem para fazer o cliente gastar mais espontaneamente a cada pedido.",
      icon: "solar:bag-check-bold-duotone",
    },
    {
      title: "Acompanhamento Semanal com Gestores",
      desc: "Reuniões semanais de alinhamento com Gestores de Alta Performance para analisar os números e ajustar as ações táticas.",
      icon: "solar:calendar-mark-bold-duotone",
    },
    {
      title: "Grupo Direto no WhatsApp com o Time",
      desc: "Comunicação rápida e sem intermediários com toda a equipe do seu projeto para dúvidas e aprovações diárias.",
      icon: "solar:chat-round-bold-duotone",
    },
    {
      title: "Relatórios em Tempo Real",
      desc: "Dashboards transparentes mostrando exatamente o valor investido, retorno gerado, leads captados e crescimento de vendas.",
      icon: "solar:chart-square-bold-duotone",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-y border-[#232B36]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge iconName="solar:medal-ribbon-bold" variant="gold" className="mb-4">
            Diferenciais Exclusivos GAP3
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Proximidade e{" "}
            <span className="text-gap3-gold-gradient">acompanhamento contínuo</span>
          </h2>
          <p className="text-lg md:text-xl text-[#E4E4E4]">
            Você nunca estará sozinho. Nossa assessoria atua lado a lado com a gestão do seu restaurante.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((diff, i) => (
            <div
              key={i}
              className="bg-[#151A20] border border-[#232B36] hover:border-[#F3A200]/50 rounded-2xl p-8 transition-all duration-300 flex items-start space-x-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gap3-gold-gradient flex items-center justify-center text-[#0C1014] font-bold shrink-0 shadow-md shadow-[#F3A200]/20 group-hover:scale-110 transition-transform">
                <SolarIcon name={diff.icon} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFC900] transition-colors">
                  {diff.title}
                </h3>
                <p className="text-base text-[#E4E4E4] leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
