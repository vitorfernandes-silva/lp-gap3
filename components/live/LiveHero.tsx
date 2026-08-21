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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Details (58-60% width) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* GAP3 Logo above the badge */}
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <Image
                src="/images/logo.png"
                alt="GAP3 Assessoria Logo"
                width={480}
                height={135}
                priority
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-white font-poppins font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
                GAP<span className="text-[#FFC900]">3</span>
              </span>
            </Link>

            {/* Top Pill Badge with Date */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1C2026] via-[#2A313D] to-[#1C2026] border border-[#FFC900]/40 px-4 py-1.5 rounded-full shadow-lg shadow-black/50">
              <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-poppins font-semibold text-[#FFC900] tracking-wide">
                26/08 • Quarta-feira às 19h | Evento exclusivo para donos de restaurantes
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-poppins font-bold tracking-tight leading-[1.12] text-white">
              Os bastidores dos restaurantes que{" "}
              <span className="text-gap3-gold-gradient">crescem</span>
            </h1>

            {/* Description with Date */}
            <p className="text-sm sm:text-base lg:text-lg font-inter font-normal text-gray-300 leading-relaxed max-w-2xl">
              As estratégias por trás dos restaurantes que conseguem vender durante a semana, fazer clientes voltarem e construir receita com mais previsibilidade, sem deixar o crescimento nas mãos do boca a boca. Encontro ao vivo no dia <strong className="text-[#FFC900] font-semibold">26/08 (quarta-feira) às 19h</strong>.
            </p>

            {/* Event Key Details: Date & Meet Badges (Larger size) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              {/* 1. Date & Time */}
              <div className="inline-flex items-center justify-center space-x-2.5 bg-[#151A20] border border-[#FFC900]/50 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-[#FFC900] shadow-md whitespace-nowrap w-full sm:w-auto">
                <SolarIcon name="solar:calendar-date-bold" size={20} className="text-[#FFC900] shrink-0" />
                <span>26/08 | Quarta-feira • 19h</span>
              </div>

              {/* 2. Google Meet */}
              <div className="inline-flex items-center justify-center space-x-2.5 bg-[#151A20] border border-[#2D3440] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-white shadow-md whitespace-nowrap w-full sm:w-auto">
                <GoogleMeetIcon size={20} />
                <span>Ao vivo | Google Meet</span>
              </div>
            </div>

          </div>

          {/* Right Column: Proportional Form Card */}
          <div className="lg:col-span-5 xl:col-span-5 w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
            <LiveForm id="hero-live-form" />
          </div>

        </div>
      </div>
    </section>
  );
}
