"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function IdentificationSection() {
  const cards = [
    {
      id: 1,
      icon: "solar:chair-bold-duotone",
      title: "Salão Vazio na Semana",
      text: "Lotam no fim de semana, mas veem a semana passar com mesa vazia e conta chegando.",
    },
    {
      id: 2,
      icon: "solar:shop-bold-duotone",
      title: "Invisibilidade no iFood",
      text: "Estão no iFood há meses e ainda não entendem por que o concorrente aparece antes.",
    },
    {
      id: 3,
      icon: "solar:smartphone-bold-duotone",
      title: "Redes Sociais sem Vendas",
      text: "Já tentaram postar todo dia e não viram um cliente novo entrar pela porta.",
    },
    {
      id: 4,
      icon: "solar:users-group-two-rounded-bold-duotone",
      title: "Sem Retenção de Clientes",
      text: "Recebem cliente novo, atendem bem, mas nunca mais veem essa pessoa voltar.",
    },
    {
      id: 5,
      icon: "solar:bill-cross-bold-duotone",
      title: "Faturamento sem Lucro",
      text: "Têm um cardápio cheio, mas no fim do mês o lucro não aparece.",
    },
    {
      id: 6,
      icon: "solar:chat-round-call-bold-duotone",
      title: "Dependência do Boca a Boca",
      text: "Cresceram até aqui no boca a boca e sabem que não dá para depender disso para sempre.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-[#0C1014] relative overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* Red Gradient Badge 'Atenção' */}
          <div className="flex justify-center mb-2">
            <Badge iconName="solar:danger-triangle-bold" variant="red">
              Atenção
            </Badge>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#0C1014] tracking-tight leading-tight">
            O método da <span className="text-[#D98600]">GAP3</span> é para os restaurantes que:
          </h2>

          <p className="text-base sm:text-lg text-[#0C1014] font-inter font-medium max-w-2xl mx-auto">
            Se o seu negócio se identifica com um ou mais desses cenários, nós estruturamos a solução completa para o seu crescimento.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0C1014] border border-gray-800 hover:border-red-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(239,68,68,0.15)] flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Light on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Red Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <SolarIcon name={card.icon} size={30} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {card.title}
                </h3>

                {/* Card Main Quote/Text */}
                <p className="text-base font-inter text-gray-300 leading-relaxed font-normal">
                  "{card.text}"
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-red-400 transition-colors">
                <span className="font-mono text-[11px] tracking-wider text-red-400/80">Problema #{card.id}</span>
                <SolarIcon name="solar:alt-arrow-right-linear" size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
