"use client";

import React from "react";
import { SolarIcon } from "../ui/SolarIcon";

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0C1014] font-inter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#151A20] via-[#1A212A] to-[#151A20] border-2 border-[#F3A200]/40 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          {/* Background Shield Icon Glow */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 text-[#F3A200]/5 pointer-events-none hidden md:block">
            <SolarIcon name="solar:shield-keyhole-bold" size={240} />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gap3-gold-gradient flex items-center justify-center text-[#0C1014] shrink-0 font-semibold">
                <SolarIcon name="solar:shield-check-bold" size={30} />
              </div>
              <span className="text-xs tracking-wide font-semibold text-[#FFC900] bg-[#F3A200]/10 px-3 py-1 rounded-full border border-[#F3A200]/30 font-inter">
                Garantia de confiança
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight mb-6">
              Zero risco de multa.{" "}
              <span className="text-gap3-gold-gradient">Cancele quando quiser.</span>
            </h2>

            <p className="text-base md:text-lg text-[#E4E4E4] leading-relaxed mb-8 font-normal">
              Se por algum motivo você não quiser mais continuar com a assessoria da GAP3, você tem total liberdade para cancelar o contrato sem multa de rescisão, respeitando apenas o prazo mínimo previsto.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-[#0C1014]/60 border border-[#232B36] p-4 rounded-xl">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0" size={22} />
                <span className="text-sm font-semibold text-white">Sem multas</span>
              </div>
              <div className="flex items-center space-x-3 bg-[#0C1014]/60 border border-[#232B36] p-4 rounded-xl">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0" size={22} />
                <span className="text-sm font-semibold text-white">Sem armadilhas contratuais</span>
              </div>
              <div className="flex items-center space-x-3 bg-[#0C1014]/60 border border-[#232B36] p-4 rounded-xl">
                <SolarIcon name="solar:check-circle-bold" className="text-[#FFC900] shrink-0" size={22} />
                <span className="text-sm font-semibold text-white">Prazo mínimo transparente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
