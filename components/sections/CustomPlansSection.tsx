"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function CustomPlansSection() {
  return (
    <section className="py-20 md:py-28 relative bg-black text-white font-inter border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[380px] bg-[#FFC900]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge iconName="solar:tuning-bold" className="mb-2">
                Planos personalizados
              </Badge>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-white tracking-tight leading-snug">
              Você <span className="text-[#FFC900]">escolhe a solução certa</span> para a fase que seu restaurante <span className="text-[#FFC900]">vive hoje.</span>
            </h2>

            {/* Mobile Image (Displayed directly between Title and Description on Mobile) */}
            <div className="block lg:hidden relative w-full max-w-sm mx-auto h-[240px] sm:h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0C1014] my-4">
              <Image
                src="/images/Imagem.png.webp"
                alt="Planos Personalizados GAP3"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Body Text */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Oferecemos nossos serviços por planos flexíveis. Você escolhe conforme sua condição atual. O mais importante é continuar apostando em estratégias que trazem resultado real para a sua operação.
            </p>

            {/* Green CTA Button (3 words max on mobile) */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href="/analise"
                className="inline-flex items-center justify-center gap-2.5 bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-[0_0_25px_rgba(0,230,54,0.35)] hover:shadow-[0_0_35px_rgba(0,230,54,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
              >
                <span className="block sm:hidden">Escolher meu plano</span>
                <span className="hidden sm:block">Quero escolher meu plano agora</span>
                <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-[#0C1014]" />
              </Link>
            </div>

          </div>

          {/* Desktop Right Image Column (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0C1014]">
            <Image
              src="/images/Imagem.png.webp"
              alt="Planos Personalizados GAP3"
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
