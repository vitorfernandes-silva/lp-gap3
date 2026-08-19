"use client";

import React from "react";
import { SolarIcon } from "../ui/SolarIcon";

export function LivePhilosophySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0C1014] border-t border-[#1F252E] relative overflow-hidden font-inter">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC900]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3A200]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-[#151A20] border border-[#2A323F] px-4 py-1.5 rounded-full shadow-sm">
            <SolarIcon name="solar:stars-minimalistic-bold" size={16} className="text-[#FFC900]" />
            <span className="text-xs sm:text-sm font-poppins font-semibold text-[#FFC900] tracking-wide">
              Visão estratégica
            </span>
          </div>
        </div>

        {/* Headline (Normal Formatting) */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
            Não é só sobre trazer mais clientes.
            <br />
            <span className="text-gap3-gold-gradient">
              É sobre o que acontece antes, durante e depois da primeira compra.
            </span>
          </h2>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-[#12161E] border border-[#262F3C] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Top subtle highlight line */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#FFC900]/50 to-transparent" />

          {/* Paragraph 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A202A] border border-[#2F3746] flex items-center justify-center text-[#FFC900] shrink-0 mt-1">
              <SolarIcon name="solar:danger-circle-bold" size={22} />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
              Muitos restaurantes tentam crescer atacando apenas uma parte do problema: <strong className="text-white font-semibold">mais anúncios, mais posts, mais promoções, mais pedidos</strong>. Mas o crescimento real não termina quando um cliente compra.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A202A] border border-[#2F3746] flex items-center justify-center text-[#FFC900] shrink-0 mt-1">
              <SolarIcon name="solar:chart-2-bold" size={22} />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
              Durante este encontro, a <strong className="text-[#FFC900] font-semibold">GAP3</strong> vai mostrar como enxergar as diferentes etapas que transformam <strong className="text-white font-semibold">atenção em compra</strong>, <strong className="text-white font-semibold">compra em recompra</strong> e <strong className="text-white font-semibold">recompra em uma receita mais previsível</strong>.
            </p>
          </div>

          {/* Yellow Callout Box (Reduced width & Yellow Background) */}
          <div className="mt-8 max-w-2xl mx-auto bg-[#FFAE00] rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-[#FFAE00]/20 relative">
            <div className="inline-block px-3.5 py-1 bg-[#0C1014] text-[#FFC900] rounded-full text-xs font-poppins font-bold uppercase tracking-wider mb-3 shadow-sm">
              O que você vai aprender
            </div>
            <p className="text-base sm:text-xl font-poppins font-semibold text-[#0C1014] mb-2 leading-snug">
              Não é uma aula sobre simplesmente colocar mais dinheiro em tráfego.
            </p>
            <p className="text-lg sm:text-2xl font-poppins font-extrabold text-[#0C1014] leading-snug">
              É uma visão sobre as alavancas que fazem um restaurante crescer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
