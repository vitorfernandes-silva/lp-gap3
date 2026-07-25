"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function CrmFidelizationSection() {
  const crmFeatures = [
    {
      title: "Programa de Pontos & Brindes",
      desc: "Sistema de fidelidade estruturado para incentivar o cliente a acumular pedidos no seu canal próprio.",
      icon: "solar:cup-first-bold-duotone",
    },
    {
      title: "Reativação de Clientes Sumidos",
      desc: "Automação no WhatsApp que identifica quem não pede há mais de 30 dias e faz ofertas de retorno.",
      icon: "solar:bell-bing-bold-duotone",
    },
    {
      title: "Mensagens de Aniversário",
      desc: "Envio automatizado de parabéns com cupom especial para garantir comemorações no seu restaurante.",
      icon: "solar:gift-bold-duotone",
    },
    {
      title: "Pesquisa & Avaliação Pós-Venda",
      desc: "Coleta automática de feedback para identificar falhas no atendimento e potencializar notas no Google.",
      icon: "solar:like-bold-duotone",
    },
    {
      title: "Campanhas Promocionais no WhatsApp",
      desc: "Disparos segmentados para a base ativa nos dias de menor movimento, aquecendo o faturamento da semana.",
      icon: "solar:letter-bold-duotone",
    },
    {
      title: "Relacionamento de Longo Prazo",
      desc: "Construção de uma comunidade fiel ao seu restaurante, eliminando a concorrência direta no iFood.",
      icon: "solar:heart-bold-duotone",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-y border-[#232B36]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <Badge iconName="solar:repeat-bold" variant="gold" className="mb-4">
              Ativo Próprio do Restaurante
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Pare de pagar taxas para vender para o{" "}
              <span className="text-gap3-gold-gradient">mesmo cliente!</span>
            </h2>
            <p className="text-base md:text-lg text-[#E4E4E4] leading-relaxed mb-6">
              A maioria dos restaurantes comete o erro de adquirir o cliente uma vez e não acompanhar sua frequência de compra. Com a GAP3, sua base de dados vira uma fonte de receita recorrente.
            </p>

            <div className="bg-[#151A20] border-l-4 border-[#F3A200] p-5 rounded-r-xl">
              <p className="text-sm md:text-base font-semibold text-white">
                "Fidelizar um cliente existente custa até 7x menos do que atrair um cliente totalmente novo."
              </p>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {crmFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151A20] border border-[#232B36] hover:border-[#F3A200]/40 rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-[#FFC900] group-hover:scale-110 transition-transform">
                    <SolarIcon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FFC900] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#E4E4E4] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
