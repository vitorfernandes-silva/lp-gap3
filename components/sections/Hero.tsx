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
        src="/images/HERO-LP-GAP3-nova.png"
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
            className="inline-flex items-center text-xs md:text-sm font-poppins font-bold text-white bg-[#1E8E1B] hover:bg-[#197816] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all"
          >
            <span>Agendar demonstração gratuita</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={16} className="ml-1 text-white" />
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
              Em 40 min nós vamos mostrar <span className="text-[#FFC900]">aonde o seu restaurante está perdendo dinheiro</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-inter font-normal text-gray-200 leading-relaxed">
              A <strong className="text-white font-semibold">GAP3</strong> estrutura as vendas do seu restaurante com processo, acompanhamento semanal e crescimento previsível.
            </p>

            {/* Main Call To Action Button */}
            <div className="pt-2 w-full sm:w-auto flex justify-center lg:justify-start">
              <Link
                href="/analise"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1E8E1B] hover:bg-[#197816] text-white font-poppins font-bold text-sm sm:text-lg md:text-xl py-3.5 px-6 sm:py-5 sm:px-10 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide gap-2.5 border-0 outline-none"
              >
                <span>Agendar demonstração gratuita</span>
                <SolarIcon name="solar:arrow-right-bold" size={20} className="sm:text-[24px] text-white" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
