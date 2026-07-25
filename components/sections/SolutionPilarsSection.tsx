"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function SolutionPilarsSection() {
  const pilars = [
    {
      step: "01",
      title: "Processos Comerciais Definidos",
      description: "Padronização e estruturação do fluxo de atendimento, vendas no balcão, delivery e WhatsApp.",
      icon: "solar:settings-bold-duotone",
    },
    {
      step: "02",
      title: "Métricas & Decisões Baseadas em Dados",
      description: "Relatórios e dashboards em tempo real para tomar decisões com clareza sobre o faturamento real.",
      icon: "solar:chart-2-bold-duotone",
    },
    {
      step: "03",
      title: "Previsibilidade de Vendas & Maior ROI",
      description: "Aumentar o retorno de cada real investido e criar um fluxo previsível de caixa mês a mês.",
      icon: "solar:graph-up-bold-duotone",
    },
    {
      step: "04",
      title: "Otimização de Ofertas & Cardápio Digital",
      description: "Engenharia de cardápio focada em induzir a escolha dos pratos de maior margem e incentivar adicionais.",
      icon: "solar:smartphone-bold-duotone",
    },
    {
      step: "05",
      title: "Ativação Contínua da Base de Clientes",
      description: "Transformar clientes ocasionais em compradores frequentes através de relacionamento e automações.",
      icon: "solar:repeat-bold-duotone",
    },
    {
      step: "06",
      title: "Experiência Centralizada no Cliente",
      description: "Garantir satisfação máxima desde o primeiro pedido até a pós-venda, gerando recomendação espontânea.",
      icon: "solar:heart-bold-duotone",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge iconName="solar:verified-check-bold" variant="gold" className="mb-4">
            Metodologia Comprovada
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Como a GAP3 transforma a{" "}
            <span className="text-gap3-gold-gradient">realidade do seu negócio</span>
          </h2>
          <p className="text-lg md:text-xl text-[#E4E4E4]">
            Substituímos o "achismo" por engenharia comercial aplicada a restaurantes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pilars.map((pilar, index) => (
            <Card
              key={index}
              className="relative bg-[#151A20] border-[#232B36] hover:border-[#F3A200]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gap3-gold-gradient flex items-center justify-center text-[#0C1014] font-bold text-xl shadow-md shadow-[#F3A200]/20">
                  <SolarIcon name={pilar.icon} size={26} />
                </div>
                <span className="text-3xl font-black text-[#232B36] group-hover:text-[#F3A200]/30 transition-colors">
                  {pilar.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC900] transition-colors">
                {pilar.title}
              </h3>
              <p className="text-base text-[#E4E4E4] leading-relaxed">
                {pilar.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-[#151A20] via-[#1E252E] to-[#151A20] border border-[#F3A200]/40 rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto shadow-2xl relative">
          <div className="text-sm uppercase tracking-widest text-[#FFC900] font-extrabold mb-2">
            O Resultado Final para o Dono
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            O que você realmente ganha com a GAP3 Assessoria?
          </h3>
          <div className="text-3xl sm:text-5xl font-black text-gap3-gold-gradient tracking-tight">
            "TEMPO E DINHEIRO."
          </div>
        </div>
      </div>
    </section>
  );
}
