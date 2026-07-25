"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function PlansSection() {
  return (
    <section className="py-16 md:py-24 bg-[#090C0F] border-y border-[#232B36] relative font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#151A20] via-[#1E252E] to-[#151A20] border border-[#F3A200]/40 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <Badge iconName="solar:tuning-bold" variant="gold" className="mb-4">
              Flexibilidade e escala
            </Badge>

            {/* Title (Poppins Semibold) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight mb-6">
              Você escolhe a solução certa para a{" "}
              <span className="text-gap3-gold-gradient">fase que o seu restaurante vive hoje</span>
            </h2>

            {/* Supporting text */}
            <p className="text-base md:text-lg text-[#E4E4E4] leading-relaxed mb-8 font-normal">
              Cada restaurante está em um momento diferente. Por isso, a GAP3 monta um plano de crescimento sob medida para o seu negócio agora, e evolui com você conforme o seu faturamento cresce. <strong className="text-white font-semibold">Sem pacote engessado, sem solução genérica.</strong>
            </p>

            {/* Bullets grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
              <div className="bg-[#0C1014]/60 border border-[#232B36] p-5 rounded-2xl flex items-start space-x-3">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="text-white font-semibold text-base mb-1">Diagnóstico Inicial</div>
                  <div className="text-xs text-[#E4E4E4] font-normal">Análise profunda do momento atual do seu restaurante.</div>
                </div>
              </div>

              <div className="bg-[#0C1014]/60 border border-[#232B36] p-5 rounded-2xl flex items-start space-x-3">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="text-white font-semibold text-base mb-1">Plano Sob Medida</div>
                  <div className="text-xs text-[#E4E4E4] font-normal">Ações priorizadas com foco em retorno sobre investimento.</div>
                </div>
              </div>

              <div className="bg-[#0C1014]/60 border border-[#232B36] p-5 rounded-2xl flex items-start space-x-3">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="text-white font-semibold text-base mb-1">Escala Contínua</div>
                  <div className="text-xs text-[#E4E4E4] font-normal">Evolução de estratégia conforme o faturamento cresce.</div>
                </div>
              </div>
            </div>

            {/* CTA Button in Inter Regular (font-normal) leading to /analise */}
            <Link
              href="/analise"
              className="inline-flex items-center justify-center bg-gap3-gold-gradient text-[#0C1014] font-inter font-normal py-5 px-10 text-xl md:text-2xl rounded-xl shadow-lg hover:brightness-110 transition-all border border-[#FFC900]/30"
            >
              <span>Solicitar análise do meu momento atual</span>
              <SolarIcon name="solar:alt-arrow-right-bold" className="ml-2 text-current flex-shrink-0" size={28} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
