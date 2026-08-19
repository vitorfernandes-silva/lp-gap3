"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "@/components/ui/SolarIcon";
import { GoogleMeetIcon } from "@/components/ui/GoogleMeetIcon";

export default function LiveObrigadoPage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      const storedName = sessionStorage.getItem("live_lead_name");
      if (storedName) {
        setUserName(storedName);
      }
    } catch {
      // ignore
    }
  }, []);

  // WhatsApp group link (configurable via env variable or fallback)
  const whatsappGroupUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/"; // Substituir pelo link do grupo oficial

  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col font-inter selection:bg-[#FFC900] selection:text-[#0C1014] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFC900]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#25D366]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="w-full py-5 px-4 border-b border-white/10 bg-[#0C1014]/90 backdrop-blur-md relative z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="GAP3 Assessoria Logo"
              width={140}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className="text-white font-poppins font-bold text-lg tracking-tight">
              GAP<span className="text-[#FFC900]">3</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl w-full mx-auto px-4 py-10 sm:py-16 relative z-10">
        
        {/* Main Card */}
        <div className="bg-[#12161E]/95 border-2 border-[#FFC900]/50 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-black text-center space-y-8 relative overflow-hidden">
          
          {/* Top Glowing Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFC900] via-[#25D366] to-[#FFC900]" />

          {/* Attention Icon Badge */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-[#FFC900]/15 border-2 border-[#FFC900]/60 flex items-center justify-center text-[#FFC900] shadow-lg shadow-[#FFC900]/20 animate-bounce">
              <SolarIcon name="solar:danger-bold" size={42} />
            </div>
          </div>

          {/* Attention Heading */}
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-xs sm:text-sm font-poppins font-bold tracking-wide">
              ⚠️ Passo obrigatório para participar
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white tracking-tight leading-tight">
              Atenção{userName ? `, ${userName}` : ""}: sua inscrição ainda tem um último passo.
            </h1>

            <p className="text-base sm:text-lg text-[#FFC900] font-poppins font-semibold max-w-xl mx-auto leading-relaxed">
              Entre agora no grupo de avisos do WhatsApp para receber o link de acesso e os materiais do evento.
            </p>
          </div>

          {/* Meeting Details Box */}
          <div className="bg-[#181E27] border border-[#2B3544] rounded-2xl p-5 sm:p-6 text-left space-y-3 max-w-xl mx-auto">
            <div className="flex items-start space-x-3 text-sm sm:text-base text-gray-200">
              <div className="w-6 h-6 rounded-lg bg-[#FFC900]/20 flex items-center justify-center text-[#FFC900] shrink-0 mt-0.5">
                <SolarIcon name="solar:calendar-date-bold" size={16} />
              </div>
              <p>
                O encontro acontece <strong className="text-white font-semibold">quarta-feira, às 19h, ao vivo pelo Google Meet</strong>.
              </p>
            </div>

            <div className="flex items-start space-x-3 text-sm sm:text-base text-gray-200">
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <GoogleMeetIcon size={16} />
              </div>
              <p>
                Todas as informações importantes, materiais complementares e o <strong className="text-white font-semibold">link direto para entrar na sala no dia do evento</strong> serão enviados exclusivamente pelo grupo de avisos.
              </p>
            </div>
          </div>

          {/* WhatsApp Main CTA Button */}
          <div className="pt-2 space-y-3 max-w-md mx-auto">
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white font-poppins font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-full shadow-xl shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer space-x-3 tracking-wide border border-white/20"
            >
              <SolarIcon name="solar:chat-round-call-bold" size={26} className="text-white shrink-0" />
              <span>Entrar no grupo de avisos</span>
            </a>

            <p className="text-xs sm:text-sm text-gray-400 font-inter">
              🔒 Grupo exclusivo e silenciado apenas para comunicados do evento.
            </p>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center mt-8 text-xs text-gray-500">
          GAP3 Assessoria • Soluções de Crescimento para Food Services
        </div>

      </div>
    </main>
  );
}
