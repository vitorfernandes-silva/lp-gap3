"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "../ui/SolarIcon";
import { InfiniteRibbon } from "../ui/infinite-ribbon";

export function Hero() {
  const tickerText =
    "+100 CLIENTES ATENDIDOS • +R$ 2MM GERADOS PARA NOSSOS CLIENTES • +60% DE PRODUTIVIDADE • TIME 100% ESPECIALIZADO EM RESTAURANTES • ";

  return (
    <section className="relative bg-gradient-to-b from-[#F3A200] via-[#FFC900] to-[#F3A200] text-[#0C1014] pt-16 md:pt-24 pb-20 overflow-hidden">
      {/* Background Chevron Texture Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo Icon + White Text "GAP3 Assessoria" */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Image
            src="/images/logo.png"
            alt="GAP3 Assessoria Logo"
            width={240}
            height={65}
            priority
            className="h-12 md:h-16 w-auto object-contain brightness-0"
          />
          <span className="text-white font-poppins font-semibold text-2xl md:text-3xl tracking-tight drop-shadow-md">
            GAP3 Assessoria
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-poppins font-normal tracking-tight leading-tight max-w-5xl mx-auto mb-8 text-[#0C1014]">
          🍔 Fazemos <strong className="font-semibold text-[#0C1014]">Restaurantes</strong> quebrarem o <strong className="font-semibold text-[#0C1014]">Recorde de Faturamento</strong> com um Método Validado!
        </h1>

        {/* Centered Glassmorphism Card with Left-Aligned Check Items */}
        <div className="max-w-xl mx-auto mb-10 bg-black/10 backdrop-blur-md border border-black/15 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="space-y-2 text-left font-inter font-normal text-sm sm:text-base md:text-lg text-[#0C1014]">
            <div className="flex items-center space-x-3">
              <SolarIcon name="solar:check-circle-bold" className="text-[#0C1014] shrink-0" size={22} />
              <span className="leading-snug">+Pedidos e Salão lotado durante a semana</span>
            </div>
            <div className="flex items-center space-x-3">
              <SolarIcon name="solar:check-circle-bold" className="text-[#0C1014] shrink-0" size={22} />
              <span className="leading-snug">Novos clientes todos os dias</span>
            </div>
            <div className="flex items-center space-x-3">
              <SolarIcon name="solar:check-circle-bold" className="text-[#0C1014] shrink-0" size={22} />
              <span className="leading-snug">Fortalecemos a recorrência</span>
            </div>
            <div className="flex items-center space-x-3">
              <SolarIcon name="solar:check-circle-bold" className="text-[#0C1014] shrink-0" size={22} />
              <span className="leading-snug">Estratégia Validada por +50 restaurantes</span>
            </div>
          </div>
        </div>

        {/* CTA Button in Inter Regular (font-normal) leading to /analise */}
        <div className="flex justify-center mb-12">
          <Link
            href="/analise"
            className="bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-inter font-normal text-lg md:text-xl py-4 px-8 sm:px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2 border border-black/10"
          >
            <span>Quero vender mais no meu restaurante</span>
            <SolarIcon name="solar:top-right-arrow-linear" size={24} className="stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Horizontal Marquee Ticker Ribbons with Fine Spacing */}
      <div className="relative w-full overflow-hidden pointer-events-none z-20 space-y-2 pt-4 -mb-8">
        {/* Ribbon 1: Black background with white text */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          rotation={0}
          className="bg-[#0C1014] text-white py-4 md:py-5 shadow-xl border-y border-white/15 font-poppins font-semibold text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase"
        >
          {tickerText}
        </InfiniteRibbon>

        {/* Ribbon 2: White background with black text */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          reverse={true}
          rotation={0}
          className="bg-white text-[#0C1014] py-4 md:py-5 shadow-xl border-y border-black/15 font-poppins font-semibold text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase"
        >
          {tickerText}
        </InfiniteRibbon>
      </div>
    </section>
  );
}
