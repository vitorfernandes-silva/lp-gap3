"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function PainPointsSection() {
  const painPoints = [
    {
      title: "Margens de Lucro Apertadas",
      description: "Margens cada vez menores devido à falta de gestão de custos e precificação incorreta dos pratos.",
      icon: "solar:bill-cross-bold-duotone",
    },
    {
      title: "Dependência Absoluta do iFood",
      description: "Fazer de tudo para vender no delivery, mas deixar a maior parte do lucro nas altas taxas das plataformas.",
      icon: "solar:danger-bold-duotone",
    },
    {
      title: "Baixo Ticket Médio por Pedido",
      description: "Clientes comprando apenas o item principal sem esteira de adicionais, bebidas ou sobremesas (upsell).",
      icon: "solar:cart-large-minimalistic-bold-duotone",
    },
    {
      title: "Fluxo de Caixa Desorganizado",
      description: "Dificuldade para prever o faturamento mensal e pouco controle sobre a saúde financeira do negócio.",
      icon: "solar:card-search-bold-duotone",
    },
    {
      title: "Refém de Promoções e Descontos",
      description: "Precisar dar descontos agressivos para conseguir vender, destruindo o valor percebido e a lucratividade.",
      icon: "solar:sale-square-bold-duotone",
    },
    {
      title: "Falta de Fidelização do Cliente",
      description: "Não ter uma base ativa de clientes própria e perder vendas repetidas por falta de CRM e pós-venda.",
      icon: "solar:users-group-two-rounded-bold-duotone",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-y border-[#232B36]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge iconName="solar:danger-circle-bold" variant="gold" className="mb-4">
            Cenário Atual do Setor
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Seu restaurante enfrenta algum desses{" "}
            <span className="text-gap3-gold-gradient">obstáculos de crescimento?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#E4E4E4]">
            Sem processos comerciais bem estruturados, o dono de restaurante trabalha sem parar mas não vê o dinheiro no bolso.
          </p>
        </div>

        {/* Grid of Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <Card
              key={index}
              className="bg-[#151A20] hover:border-[#F3A200]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F3A200]/10 border border-[#F3A200]/30 flex items-center justify-center text-[#FFC900] mb-5 group-hover:scale-110 transition-transform duration-300">
                <SolarIcon name={item.icon} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC900] transition-colors">
                {item.title}
              </h3>
              <p className="text-base text-[#E4E4E4] leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
