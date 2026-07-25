"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

interface SolutionItem {
  id: string;
  tabLabel: string;
  title: string;
  explanation: string;
  highlightPill: string;
  image: string;
  icon: string;
}

export function ServicesSection() {
  const solutions: SolutionItem[] = [
    {
      id: "aquisicao",
      tabLabel: "Aquisição",
      title: "Atração Regional & Captação de Clientes",
      explanation:
        "Estratégia comercial completa para atrair o público ideal da sua região para o seu restaurante, gerando desejo imediato e trazendo novos clientes pagantes todos os dias.",
      highlightPill: "Foco em Primeiro Pedido & Atração Regional",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:user-plus-bold-duotone",
    },
    {
      id: "cardapio",
      tabLabel: "Cardápio Digital",
      title: "Engenharia de Menu & Cardápio de Alta Conversão",
      explanation:
        "Estruturação profissional do seu cardápio digital com fotos vendedoras, organização estratégica de pratos e layout otimizado para aumentar o ticket médio em cada pedido.",
      highlightPill: "Foco em Ticket Médio Alto",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:shop-2-bold-duotone",
    },
    {
      id: "google",
      tabLabel: "Perfil Google",
      title: "Otimização do Perfil da Empresa no Google",
      explanation:
        "Posicionamos seu restaurante nos primeiros resultados das buscas locais do Google e Google Maps quando clientes procuram onde comer ou pedir delivery na sua cidade.",
      highlightPill: "Dominância nas Buscas Locais",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:map-point-wave-bold-duotone",
    },
    {
      id: "crm",
      tabLabel: "CRM & Fidelização",
      title: "Gestão de CRM, Base de Dados & Recompra Recorrente",
      explanation:
        "Estruturação de CRM com histórico de pedidos, programa de pontos, mensagens automáticas de aniversário e disparo no WhatsApp para o seu cliente comprar uma vez e voltar sempre.",
      highlightPill: "Foco em Recompra & Fidelidade",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:repeat-bold-duotone",
    },
    {
      id: "conteudo",
      tabLabel: "Conteúdo & Vídeo",
      title: "Criativos de Alta Performance & Edição de Vídeo",
      explanation:
        "Produção e edição de vídeos curtos, Reels e criativos visuais que despertam desejo imediato e transformam visualizações nas redes sociais em pedidos no balcão e delivery.",
      highlightPill: "Desejo Visual & Engajamento",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:videocamera-record-bold-duotone",
    },
    {
      id: "trafego",
      tabLabel: "Tráfego Pago",
      title: "Gestão Profissional em Mídia Paga (Meta, Google & TikTok)",
      explanation:
        "Anúncios patrocinados hipersegmentados para a sua região com foco obsessivo em ROI, garantindo que cada centavo investido retorne como faturamento para o seu caixa.",
      highlightPill: "Retorno em Vendas & Escala",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:target-bold-duotone",
    },
    {
      id: "consultoria",
      tabLabel: "Consultoria Mensal",
      title: "Acompanhamento Comercial & Consultoria Estratégica",
      explanation:
        "Análise semanal de métricas de vendas, apoio na tomada de decisões estratégicas e plano de ação contínuo para manter o crescimento previsível mês a mês.",
      highlightPill: "Gestão Orientada por Dados",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      icon: "solar:chart-square-bold-duotone",
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>("trafego");

  const currentSolution =
    solutions.find((s) => s.id === activeTabId) || solutions[0];

  return (
    <section className="py-16 md:py-24 relative bg-[#0C1014] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge iconName="solar:box-minimalistic-bold" className="mb-4">
            Soluções de Alta Performance
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-white tracking-tight leading-tight mb-4">
            Tenha uma operação completa de crescimento{" "}
            <span className="text-gap3-gold-gradient">sem contratar e gerenciar pessoas</span>
          </h2>
          <p className="text-base text-[#A0A5B1] font-normal">
            Atendemos todas as demandas que surgem no seu restaurante. Conheça nossas soluções completas.
          </p>
        </div>

        {/* Tab Bar Navigation (Pill Tabs with Max 2 Words) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar scroll-smooth">
          {solutions.map((sol) => {
            const isActive = sol.id === activeTabId;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTabId(sol.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 shrink-0 ${
                  isActive
                    ? "bg-[#F3A200]/15 border-2 border-[#F3A200] text-[#FFC900] shadow-lg shadow-[#F3A200]/20"
                    : "bg-[#151A20] border border-[#232B36] text-[#A0A5B1] hover:text-white hover:border-[#333842]"
                }`}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse" />
                )}
                <span>{sol.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Solution Display Card matching Reference Image */}
        <div className="bg-[#14181F] border border-[#232B36] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
          {/* Image Showcase Container */}
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-[#232B36] shadow-xl mb-8 group">
            <Image
              key={currentSolution.id}
              src={currentSolution.image}
              alt={currentSolution.title}
              fill
              unoptimized
              className="object-cover transition-all duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014] via-black/20 to-transparent" />

            {/* Floating Title Overlay inside Image */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gap3-gold-gradient text-[#0C1014] flex items-center justify-center font-bold shrink-0 shadow-lg">
                <SolarIcon name={currentSolution.icon} size={28} />
              </div>
              <div>
                <span className="inline-block bg-[#F3A200]/20 border border-[#F3A200]/40 text-[#FFC900] font-semibold text-[11px] px-3 py-0.5 rounded-full mb-1">
                  {currentSolution.highlightPill}
                </span>
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-white leading-tight">
                  {currentSolution.tabLabel}
                </h3>
              </div>
            </div>
          </div>

          {/* Explanation & CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-8 space-y-2">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-white leading-snug">
                {currentSolution.title}
              </h3>
              <p className="text-sm sm:text-base text-[#E4E4E4] leading-relaxed font-normal">
                {currentSolution.explanation}
              </p>
            </div>

            <div className="md:col-span-4 flex items-center md:justify-end pt-4 md:pt-0">
              <Link
                href="/analise"
                className="w-full sm:w-auto bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-inter font-normal text-base py-4 px-8 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-black/10 cursor-pointer"
              >
                <span>Falar com um consultor</span>
                <SolarIcon name="solar:top-right-arrow-linear" size={20} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
