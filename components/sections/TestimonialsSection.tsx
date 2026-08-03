"use client";

import React from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Dono de Hamburgueria & Delivery",
      handle: "@carloshamburgueria",
      result: "+75% no faturamento em 90 dias",
      quote:
        "Antes da GAP3 nós vivíamos reféns das taxas do iFood e sem saber se íamos fechar o mês no azul. A estruturação de processos e CRM mudou totalmente o nosso caixa.",
      stars: 5,
    },
    {
      name: "Mariana Alencar",
      role: "Proprietária de Pizzaria Artesanal",
      handle: "@marianapizzas",
      result: "Aumento de R$ 45 mil no faturamento",
      quote:
        "Ter um time completo cuidando da parte comercial, do cardápio digital e das campanhas nos deu a tranquilidade que precisávamos para focar na qualidade dos pratos.",
      stars: 5,
    },
    {
      name: "Roberto Siqueira",
      role: "Gestor de Restaurante À La Carte",
      handle: "@robertogourmet",
      result: "+60% de vendas no canal próprio",
      quote:
        "Eles não são uma agência que só posta foto bonitinha no Instagram. A GAP3 é uma assessoria comercial de verdade, que acompanha os números toda semana.",
      stars: 5,
    },
    {
      name: "Lucas Mendonça",
      role: "Fundador de Cafeteria & Bistrô",
      handle: "@lucasbistro",
      result: "+80% no ticket médio dos clientes",
      quote:
        "A GAP3 organizou nosso pós-venda no WhatsApp e programa de pontos. Nossos clientes fiéis agora compram com o dobro de frequência.",
      stars: 5,
    },
    {
      name: "Fernanda Rocha",
      role: "Sócia em Marmitaria & Comida Saudável",
      handle: "@fernandasaudavel",
      result: "+120 pedidos diários no canal próprio",
      quote:
        "Reduzimos nossa dependência do iFood e hoje temos previsibilidade de caixa todos os meses com a metodologia de atração e retenção.",
      stars: 5,
    },
    {
      name: "Gustavo Vasconcelos",
      role: "Diretor de Fast Food Regional",
      handle: "@gustavofastfood",
      result: "Faturamento recorde de R$ 180 mil/mês",
      quote:
        "A assessoria comercial alinhou tráfego pago regional, otimização do cardápio e atendimento. O resultado no faturamento foi imediato.",
      stars: 5,
    },
  ];

  // Duplicate items to ensure smooth infinite marquee loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-white text-[#0C1014] border-b border-black/10 relative overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        {/* Header Badge */}
        <Badge iconName="solar:stars-bold" className="mb-4">
          Resultados de impacto
        </Badge>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#0C1014] tracking-tight leading-tight">
          Mais de <span className="text-[#D98600]">100 restaurantes</span> com resultados reais. <br className="hidden sm:block" />Isso é <span className="text-[#D98600]">GAP3.</span>
        </h2>
      </div>

      {/* Marquee Track Container with Left & Right White Fade Gradient Mask */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div
          className="flex w-max whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: "35s" }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="mx-3 w-[320px] sm:w-[360px] bg-[#0C1014] border border-gray-800 hover:border-[#00E636]/50 rounded-2xl p-6 whitespace-normal flex flex-col justify-between shadow-xl transition-all duration-300 group shrink-0"
            >
              <div>
                {/* Header: Avatar, Name & Handle */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFC900] to-[#F3A200] text-[#0C1014] font-poppins font-semibold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-base font-inter font-semibold text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate font-normal">
                      {item.handle} • {item.role}
                    </p>
                  </div>
                </div>

                {/* Green Result Highlight Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-[#00E636]/10 border border-[#00E636]/40 text-[#00E636] font-semibold text-xs px-3 py-1 rounded-full mb-4">
                  <SolarIcon name="solar:chart-2-bold" size={14} className="text-[#00E636]" />
                  <span>{item.result}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic font-normal mb-4">
                  "{item.quote}"
                </p>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 text-[#FFC900] pt-2 border-t border-white/10">
                {[...Array(item.stars)].map((_, i) => (
                  <SolarIcon key={i} name="solar:star-bold" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description Below Depoimentos in Black */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="text-base sm:text-lg text-[#0C1014] font-inter font-medium leading-relaxed">
          Veja o depoimento de donos de restaurantes que transformaram seus processos comerciais e bateram recorde de faturamento.
        </p>
      </div>

    </section>
  );
}
