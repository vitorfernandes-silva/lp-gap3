"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function TeamSection() {
  const teamRoles = [
    {
      role: "Especialista em Vendas",
      desc: "Desenvolve a estratégia comercial, oferta de pratos e metas do restaurante.",
      icon: "solar:user-speak-bold-duotone",
    },
    {
      role: "Head de Projetos",
      desc: "Coordena a execução semanal, prazos e garante o atingimento dos resultados.",
      icon: "solar:crown-bold-duotone",
    },
    {
      role: "Gestor de Tráfego",
      desc: "Otimiza os anúncios no Meta Ads e Google para trazer clientes no raio da loja.",
      icon: "solar:target-bold-duotone",
    },
    {
      role: "Editor de Vídeo",
      desc: "Edita vídeos altamente atraentes dos pratos para gerar desejo no Instagram e TikTok.",
      icon: "solar:videocamera-bold-duotone",
    },
    {
      role: "Copywriter",
      desc: "Escreve textos persuasivos para anúncios, WhatsApp, cardápio e campanhas.",
      icon: "solar:document-text-bold-duotone",
    },
    {
      role: "Designer",
      desc: "Cria peças visuais elegantes, banners e identidade de marca forte.",
      icon: "solar:palette-bold-duotone",
    },
    {
      role: "Web Designer",
      desc: "Desenvolve e otimiza a landing page e cardápio digital responsivo.",
      icon: "solar:window-frame-bold-duotone",
    },
    {
      role: "Suporte de TI",
      desc: "Implementa integrações de CRM, automações de mensagens e sistemas de captura.",
      icon: "solar:code-bold-duotone",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge iconName="solar:users-group-two-rounded-bold" variant="gold" className="mb-4">
            Estrutura Multidisciplinar
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Você contrata um{" "}
            <span className="text-gap3-gold-gradient">time de especialistas completo</span>
            , não apenas um profissional
          </h2>
          <p className="text-lg md:text-xl text-[#E4E4E4]">
            Contratar cada um desses profissionais individualmente custaria dezenas de milhares de reais. Com a GAP3, você tem todos eles atuando no seu negócio.
          </p>
        </div>

        {/* Team Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151A20] border border-[#232B36] hover:border-[#F3A200]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F3A200]/10 border border-[#F3A200]/30 flex items-center justify-center text-[#FFC900] mb-4 group-hover:scale-110 transition-transform">
                <SolarIcon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFC900] transition-colors">
                {item.role}
              </h3>
              <p className="text-sm text-[#E4E4E4] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
