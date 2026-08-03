"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      titleMain: "Presença",
      titleHighlight: "Local",
      image: "/images/gmn.webp",
      bullets: [
        "Visibilidade local otimizada para o seu restaurante",
        "Gestão estratégica de avaliações e reputação online",
        "Mais clientes encontrando seu estabelecimento diariamente",
      ],
    },
    {
      id: 2,
      titleMain: "Conteúdo que",
      titleHighlight: "Vende",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Planejamento estratégico de conteúdo para Instagram e TikTok",
        "Criação de vídeos virais que geram novos pedidos",
        "Conteúdo que posiciona seu restaurante como referência na região",
      ],
    },
    {
      id: 3,
      titleMain: "Anúncios",
      titleHighlight: "Pagos",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Campanhas de anúncios focadas em conversão e ROI real",
        "Gestão e análise semanal de dados para melhoria contínua",
        "Metas claras de novos pedidos e aumento de faturamento",
      ],
    },
    {
      id: 4,
      titleMain: "Otimização de",
      titleHighlight: "Cardápio",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Análise e otimização completa do cardápio no iFood, 99Food, digital e físico",
        "Estratégias avançadas de rankeamento nas plataformas",
        "Aumento expressivo da taxa de conversão dos seus pedidos",
      ],
    },
    {
      id: 5,
      titleMain: "Gestão de",
      titleHighlight: "Resultados",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Reuniões semanais de alinhamento e acompanhamento",
        "Relatórios de performance detalhados e transparentes",
        "Tomada de decisões estratégicas baseadas em dados reais",
      ],
    },
    {
      id: 6,
      titleMain: "Fidelização de",
      titleHighlight: "Clientes",
      image: "/images/card1-lucro.jpg",
      bullets: [
        "Reativação inteligente de clientes inativos",
        "Processo estruturado de fidelização e relacionamento",
        "Aumento do LTV e taxa de recompra recorrente",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = (currentIndex - 1 + services.length) % services.length;
  const nextIndex = (currentIndex + 1) % services.length;

  const activeService = services[currentIndex];
  const prevService = services[prevIndex];
  const nextService = services[nextIndex];

  return (
    <section className="py-20 md:py-28 relative bg-black text-white font-inter border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FFC900]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <Badge iconName="solar:box-minimalistic-bold" className="mb-2">
            O que fazemos?
          </Badge>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
            A <span className="text-white">Assessoria GAP3</span> estrutura o marketing do seu restaurante com base na sua <span className="text-[#FFC900]">necessidade</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 font-normal max-w-2xl mx-auto">
            Utilize os botões laterais para navegar entre todas as soluções de crescimento.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto min-h-[480px] sm:min-h-[520px]">
          
          {/* Previous Card Peek (Gradient Style) */}
          <div className="hidden xl:block absolute -left-48 w-[380px] h-[440px] bg-gradient-to-br from-[#12161F] via-[#1A212D] to-[#0D1117] border border-white/10 rounded-3xl opacity-30 blur-[1px] pointer-events-none overflow-hidden scale-90">
            <div className="p-8">
              <h4 className="text-xl font-poppins font-bold text-white">
                {prevService.titleMain} <span className="text-[#FFC900]">{prevService.titleHighlight}</span>
              </h4>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Solução anterior"
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/90 border border-white/20 hover:border-[#FFC900] text-white hover:text-[#FFC900] flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <SolarIcon name="solar:alt-arrow-left-bold" size={22} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Active Card (Gradient Glassmorphism Style) */}
          <div className="w-full max-w-4xl bg-gradient-to-br from-[#12161F] via-[#1A212D] to-[#0D1117] border border-white/20 hover:border-[#FFC900]/50 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 relative z-20 backdrop-blur-xl group">
            
            {/* Top Accent Gradient Light on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC900] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Corner Glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#FFC900]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] sm:min-h-[460px] relative z-10">
              
              {/* Left Content Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-white tracking-tight leading-tight text-center lg:text-left">
                  {activeService.titleMain}{" "}
                  <span className="text-[#FFC900]">{activeService.titleHighlight}</span>
                </h3>

                {/* Centered Mobile Image */}
                <div className="block lg:hidden relative w-full max-w-sm mx-auto h-[220px] sm:h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-md my-2">
                  <Image
                    key={activeService.id}
                    src={activeService.image}
                    alt={`${activeService.titleMain} ${activeService.titleHighlight}`}
                    fill
                    unoptimized
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bullets List */}
                <div className="space-y-4 pt-2">
                  {activeService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 group/bullet">
                      <div className="w-8 h-8 rounded-xl bg-[#FFC900]/15 border border-[#FFC900]/30 text-[#FFC900] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/bullet:bg-[#FFC900] group-hover/bullet:text-[#0C1014] transition-colors">
                        <SolarIcon name="solar:check-read-bold" size={18} />
                      </div>
                      <p className="text-sm sm:text-base font-inter text-gray-300 leading-relaxed pt-0.5">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Desktop Right Image Side */}
              <div className="hidden lg:block lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full w-full bg-gray-900 border-t lg:border-t-0 lg:border-l border-white/10">
                <Image
                  key={activeService.id}
                  src={activeService.image}
                  alt={`${activeService.titleMain} ${activeService.titleHighlight}`}
                  fill
                  unoptimized
                  priority
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#12161F] via-transparent to-transparent opacity-80" />
              </div>

            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Próxima solução"
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/90 border border-white/20 hover:border-[#FFC900] text-white hover:text-[#FFC900] flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <SolarIcon name="solar:alt-arrow-right-bold" size={22} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Next Card Peek (Gradient Style) */}
          <div className="hidden xl:block absolute -right-48 w-[380px] h-[440px] bg-gradient-to-br from-[#12161F] via-[#1A212D] to-[#0D1117] border border-white/10 rounded-3xl opacity-30 blur-[1px] pointer-events-none overflow-hidden scale-90">
            <div className="p-8">
              <h4 className="text-xl font-poppins font-bold text-white">
                {nextService.titleMain} <span className="text-[#FFC900]">{nextService.titleHighlight}</span>
              </h4>
            </div>
          </div>

        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para solução ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-[#FFC900]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Green CTA Button */}
        <div className="mt-14 text-center flex justify-center">
          <Link
            href="/analise"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00E636] hover:bg-[#00FF38] text-[#0C1014] font-poppins font-bold text-sm sm:text-base md:text-lg py-3.5 px-6 sm:py-4 sm:px-8 rounded-full shadow-[0_0_25px_rgba(0,230,54,0.35)] hover:shadow-[0_0_35px_rgba(0,230,54,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
          >
            <span className="block sm:hidden">Quero mais vendas</span>
            <span className="hidden sm:block">Quero essas soluções no meu restaurante</span>
            <SolarIcon name="solar:alt-arrow-right-bold" size={20} className="text-[#0C1014]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
