"use client";

import React, { useState } from "react";
import { SolarIcon } from "../ui/SolarIcon";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que a GAP3 faz na prática?",
      answer:
        "Estruturamos o crescimento do seu restaurante de ponta a ponta: atraímos clientes novos, otimizamos seu cardápio, aumentamos o lucro por pedido e fidelizamos quem já comprou. Tudo com acompanhamento semanal e metas claras.",
    },
    {
      question: "Vocês atendem qualquer tipo de restaurante?",
      answer:
        "Sim. Hamburguerias, pizzarias, restaurantes à la carte, marmitarias, cafeterias. Se você vende comida e quer crescer, a GAP3 estrutura isso.",
    },
    {
      question: "Em quanto tempo vejo resultado?",
      answer:
        "A maioria dos nossos clientes começa a sentir diferença entre 30 e 60 dias após o início da assessoria.",
    },
    {
      question: "Preciso ter equipe própria para contratar a GAP3?",
      answer:
        "Não. A GAP3 assume a estrutura comercial do seu restaurante com um time completo dedicado ao seu negócio.",
    },
    {
      question: "Vocês trabalham com iFood e 99Food também?",
      answer:
        "Sim. Otimizamos seu perfil, cardápio e estratégia dentro dos apps enquanto construímos seu crescimento em paralelo.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim. Sem multa de rescisão, respeitando apenas o prazo mínimo previsto em contrato.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white tracking-tight leading-tight">
            Perguntas <span className="text-[#FFC900]">frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter font-normal">
            Ainda tem alguma dúvida? Fale direto com um dos nossos especialistas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#12161F] border border-white/10 hover:border-[#FFC900]/40 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full py-5 px-6 text-left flex items-center justify-between font-poppins font-bold text-base sm:text-lg text-white hover:text-[#FFC900] transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`transform transition-transform duration-300 text-[#FFC900] shrink-0 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <SolarIcon name="solar:alt-arrow-down-bold" size={24} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/10 pt-4 bg-[#080B0E]/60 font-inter font-normal"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
