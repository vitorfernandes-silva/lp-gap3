"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "../ui/SolarIcon";
import { InfiniteRibbon } from "../ui/infinite-ribbon";

export function Hero() {
  const tickerText =
    "+100 Clientes atendidos • +R$ 2MM gerados para nossos clientes • +60% de produtividade • Time 100% especializado em restaurantes • ";

  return (
    <section className="relative bg-[#050608] text-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 overflow-hidden border-b border-white/10 min-h-screen lg:min-h-screen flex flex-col justify-between">
      
      {/* Desktop Background Image (Only visible on lg screens) */}
      <Image
        src="/images/HERO-LP-GAP3.png"
        alt="GAP3 Assessoria Background"
        fill
        priority
        unoptimized
        className="hidden lg:block object-cover object-center pointer-events-none z-0"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between flex-grow">
        
        {/* Navmenu Header (Mobile & Desktop) */}
        <div className="flex items-center justify-between py-4 border-b border-white/10 relative z-30 mb-6 lg:mb-10">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Image
              src="/images/logo.png"
              alt="GAP3 Assessoria Logo"
              width={160}
              height={45}
              priority
              className="h-8 sm:h-10 md:h-11 w-auto object-contain"
            />
            <span className="text-white font-poppins font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
              GAP<span className="text-[#FFC900]">3</span>
            </span>
          </div>

          <Link
            href="/analise"
            className="inline-flex items-center text-xs md:text-sm font-poppins font-semibold text-gray-200 hover:text-[#FFC900] bg-white/5 hover:bg-white/10 border border-white/15 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all"
          >
            <span>Falar com especialista</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={16} className="ml-1 text-[#FFC900]" />
          </Link>
        </div>

        {/* Hero Content Wrapper */}
        <div className="my-auto py-4">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-7 max-w-xl sm:max-w-2xl lg:max-w-2xl">
            
            {/* Top Badge (Smaller text size on mobile) */}
            <div className="inline-flex items-center bg-black/80 border border-[#FFC900]/40 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md shadow-lg max-w-full">
              <span className="text-[10px] sm:text-xs md:text-sm font-poppins font-medium text-[#FFC900] tracking-wide leading-tight">
                Assessoria de Crescimento para Restaurantes e Delivery
              </span>
            </div>

            {/* Mobile Image (Displayed directly below the badge on mobile) */}
            <div className="block lg:hidden relative w-full max-w-xs sm:max-w-sm mx-auto h-[280px] sm:h-[360px] rounded-3xl overflow-hidden my-2 shadow-2xl border border-white/10 bg-black">
              <Image
                src="/images/HERO-LP-GAP3-mobile.png"
                alt="GAP3 Assessoria Mobile"
                fill
                priority
                unoptimized
                className="object-cover object-top"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-poppins font-bold tracking-tight leading-[1.15] text-white">
              Mais pedidos,{" "}
              <span className="text-[#FFC900]">salão cheio</span> e{" "}
              <span className="text-[#FFC900]">lucro de verdade</span>. Todo mês, não só no fim de semana.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-inter font-normal text-gray-200 leading-relaxed">
              A <strong className="text-white font-semibold">GAP3</strong> estrutura as vendas do seu restaurante com processo, acompanhamento semanal e crescimento previsível.
            </p>

            {/* Main Call To Action Button (3 words max on mobile) */}
            <div className="pt-2 w-full sm:w-auto flex justify-center lg:justify-start">
              <Link
                href="/analise"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-poppins font-bold text-sm sm:text-lg md:text-xl py-3.5 px-6 sm:py-5 sm:px-10 rounded-full shadow-[0_0_35px_rgba(0,230,54,0.45)] hover:shadow-[0_0_45px_rgba(0,230,54,0.65)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide gap-2.5 border-0 outline-none"
              >
                <span className="block sm:hidden">Quero crescer agora</span>
                <span className="hidden sm:block">Quero crescer com a GAP3</span>
                <SolarIcon name="solar:arrow-right-bold" size={20} className="sm:text-[24px]" />
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* Horizontal Marquee Ticker Ribbons */}
      <div className="relative w-full overflow-hidden pointer-events-none z-20 space-y-2 pt-8 sm:pt-10">
        {/* Ribbon 1: Yellow */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          rotation={0}
          className="bg-[#F3A200] text-[#0C1014] py-3.5 md:py-4 shadow-xl border-y border-black/15 font-poppins font-semibold text-sm sm:text-base md:text-lg tracking-wide"
        >
          {tickerText}
        </InfiniteRibbon>

        {/* Ribbon 2: White */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          reverse={true}
          rotation={0}
          className="bg-white text-[#0C1014] py-3.5 md:py-4 shadow-xl border-y border-black/15 font-poppins font-semibold text-sm sm:text-base md:text-lg tracking-wide"
        >
          {tickerText}
        </InfiniteRibbon>
      </div>

    </section>
  );
}
