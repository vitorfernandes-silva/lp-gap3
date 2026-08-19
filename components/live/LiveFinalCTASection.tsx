"use client";

import React from "react";
import { SolarIcon } from "../ui/SolarIcon";
import { GoogleMeetIcon } from "../ui/GoogleMeetIcon";

export function LiveFinalCTASection() {
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
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFC900]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#FFC900]/40 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-poppins font-semibold text-[#FFC900] tracking-wide">
            Últimas vagas disponíveis
          </span>
        </div>

        {/* Main Headline (Normal formatting) */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight mb-6">
          Quarta-feira, às 19h.
          <br />
          <span className="text-gap3-gold-gradient">
            Uma hora para olhar o crescimento do seu restaurante de outra forma.
          </span>
        </h2>

        {/* Subtitle & Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Ao vivo, pelo Google Meet. Conheça estratégias para gerar demanda, aumentar a recompra e construir um restaurante com mais previsibilidade.
        </p>

        {/* Badges / Information Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#2D3440] px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white shadow-sm">
            <GoogleMeetIcon size={18} />
            <span>Ao vivo | Google Meet</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#00E636]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#00E636] shadow-sm">
            <SolarIcon name="solar:check-circle-bold" size={18} />
            <span>Participação gratuita</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#FFC900]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#FFC900] shadow-sm">
            <SolarIcon name="solar:clock-circle-bold" size={18} />
            <span>Duração: 60 minutos</span>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gap3-gold-gradient hover:brightness-110 active:brightness-95 text-[#0C1014] font-poppins font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-2xl shadow-[#F3A200]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer space-x-3 tracking-wide border border-[#FFC900]/40"
          >
            <span>Garantir minha vaga</span>
            <SolarIcon name="solar:arrow-right-bold" size={24} className="text-[#0C1014]" />
          </button>

          <p className="text-xs text-gray-400 mt-4 font-inter">
            🔒 Inscrição rápida e gratuita • Não perca a transmissão ao vivo
          </p>
        </div>

      </div>
    </section>
  );
}
