"use client";

import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { SolarIcon } from "../ui/SolarIcon";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que a GAP3 faz, na prática?",
      answer:
        "Estruturamos os processos comerciais do seu restaurante: da atração de clientes até a fidelização, passando por cardápio digital, CRM, tráfego pago e atendimento, tudo com metas, métricas e acompanhamento semanal.",
    },
    {
      question: "Posso cancelar quando eu quiser?",
      answer:
        "Sim. Você tem total liberdade para cancelar o contrato sem multa de rescisão, respeitando apenas o prazo mínimo previsto, sem armadilhas.",
    },
    {
      question: "Em quanto tempo eu vejo resultado?",
      answer:
        "Cada restaurante tem um ponto de partida diferente, por isso os primeiros ajustes de processo já começam nas primeiras semanas, com resultados de faturamento e ticket médio evoluindo de forma consistente nos meses seguintes.",
    },
    {
      question: "A GAP3 atende qualquer tipo de restaurante?",
      answer:
        "Atendemos restaurante à la carte, delivery, fast food, hamburgueria, pizzaria, cafeteria e outros formatos de food service, sempre adaptando o método ao segmento e ao momento do seu negócio.",
    },
    {
      question: "A GAP3 cuida do meu Instagram e das minhas redes sociais?",
      answer:
        "Sim, produção de conteúdo para Instagram e TikTok faz parte da estruturação de atração de clientes, sempre alinhada à estratégia comercial do restaurante, e não apenas como conteúdo solto.",
    },
    {
      question: "Eu preciso ter uma equipe de marketing própria para contratar a GAP3?",
      answer:
        "Não. A GAP3 entrega um time completo (vendas, tráfego, conteúdo, design e tecnologia), você não precisa contratar nem gerenciar profissionais internamente.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#0C1014] border-t border-[#232B36] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge iconName="solar:question-circle-bold" variant="gold" className="mb-4">
            Tira-dúvidas
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            Perguntas <span className="text-gap3-gold-gradient">frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-[#E4E4E4] font-normal">
            Ainda tem alguma dúvida? Preencha o formulário acima e fale direto com um dos nossos especialistas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#151A20] border border-[#232B36] hover:border-[#F3A200]/40 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-white hover:text-[#FFC900] transition-colors focus:outline-none"
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
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#E4E4E4] leading-relaxed border-t border-[#232B36]/50 pt-4 bg-[#0C1014]/40 font-normal">
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
