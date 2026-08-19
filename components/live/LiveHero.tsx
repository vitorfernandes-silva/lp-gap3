"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "../ui/SolarIcon";
import { GoogleMeetIcon } from "../ui/GoogleMeetIcon";
import { LiveForm } from "./LiveForm";

export function LiveHero() {
  return (
    <section className="relative bg-[#0C1014] text-white pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-20 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFC900]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F3A200]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* GAP3 Logo above the badge */}
            <Link href="/" className="inline-flex items-center space-x-3.5 group">
              <Image
                src="/images/logo.png"
                alt="GAP3 Assessoria Logo"
                width={480}
                height={135}
                priority
                className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-white font-poppins font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
                GAP<span className="text-[#FFC900]">3</span>
              </span>
            </Link>

            {/* Top Pill Badge (Normal Formatting) */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1C2026] via-[#2A313D] to-[#1C2026] border border-[#FFC900]/40 px-4 py-2 rounded-full shadow-lg shadow-black/50">
              <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-poppins font-semibold text-[#FFC900] tracking-wide">
                Evento exclusivo para donos de restaurantes
              </span>
            </div>

            {/* Main Headline (Increased size & normal formatting) */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-poppins font-bold tracking-tight leading-[1.12] text-white">
              Os bastidores dos restaurantes que{" "}
              <span className="text-gap3-gold-gradient">crescem</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-inter font-normal text-gray-300 leading-relaxed max-w-2xl">
              As estratégias por trás dos restaurantes que conseguem vender durante a semana, fazer clientes voltarem e construir receita com mais previsibilidade, sem deixar o crescimento nas mãos do boca a boca.
            </p>

            {/* Event Key Details (Clean Icon + Text without card background, smaller typography) */}
            <div className="w-full flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-5 sm:gap-7 pt-1">
              {/* Date & Time */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFC900]/10 border border-[#FFC900]/30 flex items-center justify-center text-[#FFC900] shrink-0">
                  <SolarIcon name="solar:calendar-date-bold" size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 font-inter font-medium leading-none mb-1">Data e horário</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white leading-none">Quarta-feira | 19h</span>
                </div>
              </div>

              {/* Google Meet */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <GoogleMeetIcon size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 font-inter font-medium leading-none mb-1">Transmissão</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white leading-none">Ao vivo | Google Meet</span>
                </div>
              </div>

              {/* Online & Free */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00E636]/10 border border-[#00E636]/30 flex items-center justify-center text-[#00E636] shrink-0">
                  <SolarIcon name="solar:check-circle-bold" size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 font-inter font-medium leading-none mb-1">Acesso</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white leading-none">Online e gratuito</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Larger High Converting Form Card */}
          <div className="lg:col-span-6 xl:col-span-6 w-full max-w-xl mx-auto">
            <LiveForm id="hero-live-form" />
          </div>

        </div>
      </div>
    </section>
  );
}
