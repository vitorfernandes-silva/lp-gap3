import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "@/components/ui/SolarIcon";

export default function LiveObrigadoPage() {
  // WhatsApp group link (configurable via env variable or fallback)
  const whatsappGroupUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/DVGq6G1xRo35hPB6rF5oZN?s=cl&p=i&mlu=0&amv=1";

  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col justify-center items-center font-inter selection:bg-[#FFC900] selection:text-[#0C1014] relative overflow-hidden px-4 py-12 sm:py-16">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1E293B]/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00C853]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Centered Logo above the card */}
      <div className="mb-6 sm:mb-8 relative z-10">
        <Link href="/" className="inline-flex items-center space-x-3 group">
          <Image
            src="/images/logo.png"
            alt="GAP3 Assessoria Logo"
            width={240}
            height={68}
            priority
            className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-white font-poppins font-bold text-3xl sm:text-4xl tracking-tight">
            GAP<span className="text-[#FFC900]">3</span>
          </span>
        </Link>
      </div>

      {/* Main Wide Card */}
      <div className="max-w-4xl w-full bg-[#121620]/95 border border-[#263040] rounded-[36px] p-7 sm:p-12 md:p-14 shadow-2xl shadow-black/80 text-center space-y-6 sm:space-y-8 relative z-10 backdrop-blur-xl">
        
        {/* Top Warning Pill */}
        <div>
          <div className="inline-flex items-center space-x-2 bg-[#1A202C] border border-[#FFC900]/40 px-4 sm:px-5 py-2 rounded-full shadow-sm text-xs sm:text-sm font-poppins font-semibold text-[#FFC900]">
            <span>⚠️</span>
            <span>Calma! Você ainda não garantiu seu acesso.</span>
          </div>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
          Falta apenas 1 passo para concluir a sua inscrição:
        </h1>

        {/* Descriptive Text */}
        <div className="space-y-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-inter font-normal leading-relaxed">
          <p>
            Para receber o link da aula ao vivo e os materiais exclusivos, entre agora no grupo de avisos no WhatsApp. É por lá que enviamos tudo com antecedência.
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            O encontro acontece <strong className="text-white font-semibold">quarta-feira, dia 26/08 às 19h, ao vivo pelo Google Meet</strong>.
          </p>
        </div>

        {/* WhatsApp Main Pill Button */}
        <div className="pt-2 max-w-md mx-auto">
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B248] active:bg-[#00963C] text-white font-poppins font-bold text-base sm:text-lg md:text-xl py-4 sm:py-5 px-8 rounded-full shadow-xl shadow-[#00C853]/30 hover:shadow-[#00C853]/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer space-x-2.5 tracking-wide"
          >
            <SolarIcon name="solar:chat-round-call-bold" size={24} className="text-white shrink-0" />
            <span>Entrar no Grupo de AVISOS</span>
          </a>
        </div>

        {/* Trust & Privacy Microcopy with Divider */}
        <div className="pt-6 border-t border-[#222B3A] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300 font-inter">
          <div className="flex items-center space-x-2">
            <SolarIcon name="solar:shield-check-bold" size={18} className="text-[#FFC900] shrink-0" />
            <span>Grupo Silencioso (Somente Administradores)</span>
          </div>
          <span className="hidden sm:inline text-gray-500">•</span>
          <div className="flex items-center space-x-2">
            <SolarIcon name="solar:check-circle-bold" size={18} className="text-[#00C853] shrink-0" />
            <span>Sem SPAM, enviamos apenas os links e avisos</span>
          </div>
        </div>

      </div>

      {/* Simple Footer Note */}
      <div className="text-center mt-6 text-xs text-gray-400 relative z-10">
        GAP3 Assessoria • Soluções de Crescimento para Food Services
      </div>
    </main>
  );
}
