"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function FinalCTASection() {
  const teamRoles = [
    "Especialista em Vendas",
    "Head de Projetos",
    "Gestor de Tráfego",
    "Editor de Vídeo",
    "Copywriter",
    "Designer",
    "Web Designer",
    "TI / Tecnologia",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-t border-[#232B36] relative overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <div className="mb-6 flex justify-center">
          <Badge iconName="solar:user-check-bold" variant="gold">
            Consultores GAP3 disponíveis agora
          </Badge>
        </div>

        {/* Title (Poppins Semibold) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-6">
          Receba um <span className="text-gap3-gold-gradient">time exclusivo</span> para o seu restaurante
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E4E4E4] max-w-4xl mx-auto font-normal leading-relaxed mb-10">
          Você não contrata um profissional, contrata um time completo: <strong className="text-white font-semibold">especialista em vendas, head de projetos, gestor de tráfego, editor de vídeo, copywriter, designer, web designer e TI</strong>, todos trabalhando juntos pelo crescimento do seu restaurante.
        </p>

        {/* Roles Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {teamRoles.map((role, idx) => (
            <span
              key={idx}
              className="bg-[#151A20] border border-[#232B36] text-[#E4E4E4] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900]" size={16} />
              <span>{role}</span>
            </span>
          ))}
        </div>

        {/* Button in Inter Regular (font-normal) leading to /analise */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/analise"
            className="inline-flex items-center justify-center bg-[#1E8E1B] hover:bg-[#197816] text-white font-poppins font-bold py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl md:text-2xl rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide w-full sm:w-auto"
          >
            <span>Agendar demonstração gratuita</span>
            <SolarIcon name="solar:alt-arrow-right-bold" className="ml-2 text-white flex-shrink-0" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
