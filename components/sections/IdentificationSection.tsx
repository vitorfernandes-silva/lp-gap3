"use client";

import React from "react";
import Link from "next/link";
import { SolarIcon } from "../ui/SolarIcon";

export function IdentificationSection() {
  const checklistItems = [
    "Você lota no fim de semana, mas vê a semana passar com mesa vazia.",
    "Você está no iFood/99food há meses e ainda não entende por que o concorrente aparece antes de você.",
    "Você já tentou postar todo dia e não viu um cliente novo entrar pela porta.",
    "Você atende bem, mas o cliente some depois da primeira visita e nunca mais volta.",
    "Você tem um cardápio próprio e cheio de opções, mas não tem vendas em volume",
    "Você cresceu até aqui no boca a boca e sabe que não dá para depender disso para sempre.",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F3A200] text-[#0C1014] relative overflow-hidden border-b border-black/10 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-[#0C1014] tracking-tight leading-tight max-w-5xl mx-auto">
            Se você se identifica com pelo menos 2 desses cenários
          </h2>
          <p className="text-base sm:text-2xl md:text-3xl font-poppins font-bold text-white max-w-4xl mx-auto drop-shadow-sm">
            Nossa análise gratuita foi feita para você
          </p>
        </div>

        {/* Checklist Container Card */}
        <div className="bg-gradient-to-br from-[#12161F] via-[#161C26] to-[#0E1219] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl relative group text-white">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC900] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

          <ul className="space-y-5 sm:space-y-6">
            {checklistItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-4 p-3.5 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors duration-200"
              >
                {/* Checkbox Box Icon (Square with subtle gold border) */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border-2 border-[#FFC900] bg-[#FFC900]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-[#FFC900]">
                  <SolarIcon name="solar:check-square-bold" size={18} className="sm:text-[20px]" />
                </div>

                {/* Copy */}
                <p className="text-base sm:text-lg text-gray-200 font-inter font-medium leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center flex justify-center">
          <Link
            href="/analise"
            className="inline-flex items-center justify-center gap-2.5 bg-[#1E8E1B] hover:bg-[#197816] text-white font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
          >
            <span>Agendar demonstração gratuita</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
