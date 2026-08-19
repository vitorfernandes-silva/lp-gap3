"use client";

import React from "react";
import { SolarIcon } from "../ui/SolarIcon";

export function LiveTopicsSection() {
  const topics = [
    {
      number: "01",
      title: "Como gerar demanda nos dias fracos",
      description:
        "Estratégias para aumentar o movimento e os pedidos durante a semana, sem depender apenas de sexta, sábado e domingo.",
      icon: "solar:graph-up-bold",
    },
    {
      number: "02",
      title: "Como fazer seus clientes comprarem novamente",
      description:
        "Como trabalhar recompra e frequência para não precisar conquistar um cliente novo toda vez que quiser vender.",
      icon: "solar:repeat-bold",
    },
    {
      number: "03",
      title: "Como vender mais sem deixar a margem pelo caminho",
      description:
        "Como precificação, logística, oferta e canais de venda interferem no quanto realmente sobra depois da venda.",
      icon: "solar:wallet-money-bold",
    },
    {
      number: "04",
      title: "Como construir um crescimento mais previsível",
      description:
        "Como conectar aquisição, atendimento e recompra para reduzir a dependência de boca a boca, marketplaces e tráfego pago como única fonte de crescimento.",
      icon: "solar:shield-star-bold",
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("hero-live-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formElement.querySelector("input");
      if (firstInput) firstInput.focus();
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090C0F] border-t border-[#1F252E] relative overflow-hidden font-inter">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC900]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#2A323F] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <SolarIcon name="solar:videocamera-record-bold" size={16} className="text-[#FFC900]" />
            <span className="text-xs sm:text-sm font-poppins font-semibold text-[#FFC900] tracking-wider uppercase">
              Conteúdo Exclusivo
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
            O que você vai descobrir neste encontro:
          </h2>
        </div>

        {/* 4 Cards (Stacked / Clean layout inspired by Image 1) */}
        <div className="space-y-4 sm:space-y-5 mb-12">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-[#12161E] hover:bg-[#161C26] border border-[#232B36] hover:border-[#FFC900]/50 rounded-2xl p-5 sm:p-7 transition-all duration-300 group shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              {/* Number Badge & Icon */}
              <div className="flex items-center space-x-3 shrink-0">
                <span className="w-12 h-12 rounded-xl bg-[#1A202A] border border-[#2F3746] group-hover:border-[#FFC900]/40 flex items-center justify-center font-poppins font-bold text-lg text-[#FFC900] shadow-sm transition-colors">
                  {topic.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-poppins font-bold text-white group-hover:text-[#FFC900] transition-colors leading-snug">
                  {topic.number} — {topic.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {topic.description}
                </p>
              </div>

              {/* Visual Indicator Icon */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-[#181E27] items-center justify-center text-gray-400 group-hover:text-[#FFC900] group-hover:bg-[#FFC900]/10 transition-all shrink-0">
                <SolarIcon name={topic.icon} size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center bg-gap3-gold-gradient hover:brightness-110 text-[#0C1014] font-poppins font-bold text-base sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-xl shadow-xl shadow-[#F3A200]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer space-x-2 tracking-wide border border-[#FFC900]/40 w-full sm:w-auto"
          >
            <span>QUERO PARTICIPAR GRATUITAMENTE</span>
            <SolarIcon name="solar:arrow-right-bold" size={22} className="text-[#0C1014]" />
          </button>
          <p className="text-xs text-gray-400 mt-3 font-inter">
            Apenas 1 hora de encontro • 100% online pelo Google Meet
          </p>
        </div>

      </div>
    </section>
  );
}
