"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "CRM & Fidelização",
      image: "/images/card1-lucro.jpg",
      bullets: [
        "Disparo de mensagens via WhatsApp",
        "Reativação de clientes inativos",
        "Fidelização e LTV",
      ],
    },
    {
      id: 2,
      title: "Google Meu Negócio & TripAdvisor",
      image: "/images/gmn.webp",
      bullets: [
        "Otimização e SEO local",
        "Gestão de avaliações",
        "Aumento de visibilidade no salão",
      ],
    },
    {
      id: 3,
      title: "Assessoria de Conteúdo",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Estratégia editorial para Insta/TikTok",
        "Roteiros para vídeos virais",
        "Posicionamento de marca",
      ],
    },
    {
      id: 4,
      title: "Tráfego Pago",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Campanhas de alta conversão",
        "Análise de dados avançada",
        "Metas semanais de faturamento",
      ],
    },
    {
      id: 5,
      title: "Otimização de Delivery",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Análise de cardápios no iFood",
        "Estratégias de rankeamento",
        "Melhoria na taxa de conversão",
      ],
    },
    {
      id: 6,
      title: "Acompanhamento & Análises",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Reuniões de acompanhamento",
        "Suporte via Grupo de WhatsApp",
        "Relatórios de performance",
      ],
    },
  ];

  // Duplicate items for seamless infinite scrolling loop
  const marqueeServices = [...services, ...services];

  return (
    <section className="py-20 md:py-28 relative bg-black text-white font-inter border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FFC900]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <Badge iconName="solar:box-minimalistic-bold" className="mb-2">
            O que fazemos?
          </Badge>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
            Estruturamos os <span className="text-[#FFC900]">processos comerciais</span> do seu restaurante com base na sua <span className="text-[#FFC900]">necessidade</span>
          </h2>
        </div>
      </div>

      {/* Marquee Track Container with Left & Right Dark Fade Gradient Mask */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div
          className="flex w-max whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: "35s" }}
        >
          {marqueeServices.map((service, idx) => (
            <div
              key={idx}
              className="mx-3 w-[290px] sm:w-[340px] bg-[#0C1014] border border-gray-800 hover:border-[#FFC900]/50 rounded-2xl p-5 whitespace-normal flex flex-col justify-between shadow-xl transition-all duration-300 group shrink-0"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-[170px] sm:h-[200px] rounded-xl overflow-hidden mb-5 border border-white/10 bg-gray-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-poppins font-bold text-white mb-4 leading-snug group-hover:text-[#FFC900] transition-colors">
                  {service.title}
                </h3>

                {/* Bullets List */}
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300 font-normal leading-normal">
                      <SolarIcon name="solar:check-read-bold" className="text-[#FFC900] shrink-0 mt-0.5" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Green CTA Button */}
      <div className="mt-14 text-center flex justify-center relative z-10">
        <Link
          href="/analise"
          className="inline-flex items-center justify-center gap-2.5 bg-[#1E8E1B] hover:bg-[#197816] text-white font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
        >
          <span>Agendar demonstração gratuita</span>
          <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-white" />
        </Link>
      </div>
    </section>
  );
}
