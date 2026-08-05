"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function VisionSection() {
  const cards = [
    {
      id: 1,
      title: "Lucro no fim do mês, não só no fim de semana",
      icon: "solar:dollar-minimalistic-bold-duotone",
      text: "Chega de depender de sábado para fechar o caixa no azul. Com método, o lucro aparece toda semana.",
    },
    {
      id: 2,
      title: "Cardápio vendendo o que tem mais margem",
      icon: "solar:shop-2-bold-duotone",
      text: "Seu cardápio para de ser vitrine e vira ferramenta de venda. Cada prato no lugar certo, gerando mais lucro por pedido.",
    },
    {
      id: 3,
      title: "Ranking subindo no iFood e no 99Food",
      icon: "solar:graph-up-bold-duotone",
      text: "Mais visibilidade, mais pedidos, mais avaliações positivas. Seu restaurante no topo antes do concorrente.",
    },
    {
      id: 4,
      title: "Cliente fiel que indica sem você pedir",
      icon: "solar:users-group-two-rounded-bold-duotone",
      text: "Não é só o cliente que volta. É o cliente que traz dois amigos na próxima vez.",
    },
    {
      id: 5,
      title: "Crescimento previsível, não por acaso",
      icon: "solar:cup-first-bold-duotone",
      text: "Você sabe quanto vai faturar no mês antes dele terminar. Sem surpresa, sem sufoco.",
    },
    {
      id: 6,
      title: "Restaurante que cresce sem depender de você em tudo",
      icon: "solar:user-bold-duotone",
      text: "Com processo, a operação funciona. Você para de ser o bombeiro e começa a ser o dono de verdade.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-black text-white font-inter border-b border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFC900]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <Badge iconName="solar:stars-bold" className="mb-2">
            Resultados previsíveis
          </Badge>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
            É assim que fica o restaurante que escolhe <span className="text-[#FFC900]">crescer com método.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Crescimento todo mês, decisões com número e menos dependência da sorte.
          </p>
        </div>

        {/* 6 Cards Grid (No Images, Larger Titles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0C1014] border border-white/10 hover:border-[#FFC900]/60 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(255,201,0,0.12)] flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top accent light on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC900] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Ícone Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFC900]/10 border border-[#FFC900]/30 flex items-center justify-center text-[#FFC900] mb-6 group-hover:scale-110 group-hover:bg-[#FFC900] group-hover:text-[#0C1014] transition-all duration-300">
                  <SolarIcon name={card.icon} size={30} />
                </div>

                {/* Título (Larger font size) */}
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white leading-snug mb-4 group-hover:text-[#FFC900] transition-colors">
                  {card.title}
                </h3>

                {/* Descrição */}
                <p className="text-base font-inter text-gray-300 leading-relaxed font-normal">
                  {card.text}
                </p>
              </div>

              {/* Bottom accent indicator */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-500 group-hover:text-[#FFC900] transition-colors">
                <span className="font-mono text-[11px] tracking-wider text-[#FFC900]/80">Resultado #{card.id}</span>
                <SolarIcon name="solar:alt-arrow-right-linear" size={16} className="transform group-hover:translate-x-1 transition-transform" />
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
