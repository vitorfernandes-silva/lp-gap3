"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "@/components/ui/SolarIcon";

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  companyName: string;
  monthlyRevenue: string;
  segment: string;
  adInvestment: string;
}

export default function AnalisePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    companyName: "",
    monthlyRevenue: "",
    segment: "",
    adInvestment: "",
  });

  const firstName = formData.fullName.trim().split(" ")[0] || "você";

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg("");
  };

  const handleNextStep = async () => {
    setErrorMsg("");

    // Step 1: Name
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setErrorMsg("Por favor, digite seu nome e sobrenome.");
        return;
      }
      setStep(2);
      return;
    }

    // Step 2: Email
    if (step === 2) {
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setErrorMsg("Por favor, digite um e-mail válido.");
        return;
      }
      setStep(3);
      return;
    }

    // Step 3: Phone / WhatsApp
    if (step === 3) {
      if (!formData.whatsapp.trim() || formData.whatsapp.trim().length < 8) {
        setErrorMsg("Por favor, digite seu número com DDD.");
        return;
      }
      setStep(4);
      return;
    }

    // Step 4: Company Name
    if (step === 4) {
      setStep(5);
      return;
    }

    // Step 5: Monthly Revenue
    if (step === 5) {
      if (!formData.monthlyRevenue) {
        setErrorMsg("Por favor, selecione a opção de faturamento.");
        return;
      }
      setStep(6);
      return;
    }

    // Step 6: Segment
    if (step === 6) {
      if (!formData.segment) {
        setErrorMsg("Por favor, selecione o segmento da sua empresa.");
        return;
      }
      setStep(7);
      return;
    }

    // Step 7: Ad Investment Question & Final Submission
    if (step === 7) {
      if (!formData.adInvestment) {
        setErrorMsg("Por favor, selecione uma das opções para continuar.");
        return;
      }

      setLoading(true);

      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch {
        // Continue gracefully to next screen
      } finally {
        setLoading(false);
        // Branch based on Ad Investment choice
        if (formData.adInvestment.startsWith("A")) {
          setStep(8); // Qualified Thank You Screen
        } else {
          setStep(9); // Disqualified Screen
        }
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 1 && step <= 7) {
      setStep(step - 1);
      setErrorMsg("");
    }
  };

  const revenueOptions = [
    "A. Ainda vou inaugurar",
    "B. Até R$ 30 mil por mês",
    "C. De R$ 30 mil a R$ 60 mil por mês",
    "D. De R$ 60 mil a R$ 100 mil por mês",
    "E. De R$ 100 mil a R$ 200 mil por mês",
    "F. De R$ 200 mil a R$ 400 mil por mês",
    "G. Acima de R$ 400 mil por mês",
  ];

  const segmentOptions = [
    "Lanchonete e Hamburgueria",
    "Culinária Japonesa",
    "Pizzaria e Esfiharia",
    "Cozinha Internacional",
    "Açaí e Sorvetes",
    "Marmitaria e Comida Brasileira",
    "Comida Saudável",
    "Doces e Sobremesas",
    "Outro",
  ];

  // Calculate progress percentage (0 to 100%)
  const progressPercent = step >= 7 ? 100 : Math.round((step / 7) * 100);

  return (
    <main className="min-h-screen bg-[#0C1014] text-white flex flex-col font-inter selection:bg-[#FFC900] selection:text-[#0C1014] relative">
      {/* Top Thin Progress Bar (Yellow, 100% width on completion, fixed top edge) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#1F242D]">
        <div
          className="h-full bg-[#FFC900] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(255,201,0,0.8)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header */}
      <header className="w-full py-6 px-4 border-b border-white/10 bg-[#0C1014] mt-1">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="GAP3 Assessoria Logo"
              width={160}
              height={45}
              priority
              className="h-9 w-auto object-contain brightness-0"
            />
            <span className="text-white font-poppins font-semibold text-xl tracking-tight">
              GAP3 Assessoria
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>Voltar ao site</span>
          </Link>
        </div>
      </header>

      {/* Main Form Area (No Card Container) */}
      <div className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto px-4 py-8 sm:py-12">
        {/* Error Message Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-sm font-semibold">
            {errorMsg}
          </div>
        )}

        {/* STEP 1: Name */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-normal text-gray-300 mb-2">
                É um prazer te receber aqui!
              </p>
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                Como devemos te chamar?*
              </h1>
            </div>

            <div>
              <input
                type="text"
                aria-label="Nome e sobrenome"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Digite seu nome e sobrenome"
                className="w-full bg-[#181C23] border border-[#2D3440] focus:border-[#FFC900] rounded-xl py-4 px-5 text-white text-base placeholder:text-gray-400 focus:outline-none transition-colors font-normal shadow-sm"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Email */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-normal text-gray-300 mb-2">
                Perfeito {firstName}, qual é o seu melhor e-mail?
              </p>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                Qual e-mail você mais utiliza?*
              </h2>
            </div>

            <div>
              <input
                type="email"
                aria-label="E-mail"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full bg-[#181C23] border border-[#2D3440] focus:border-[#FFC900] rounded-xl py-4 px-5 text-white text-base placeholder:text-gray-400 focus:outline-none transition-colors font-normal shadow-sm"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Phone / WhatsApp */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-normal text-gray-300 mb-2">
                Perfeito {firstName}, seu email já está conosco
              </p>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                E por qual número nosso especialista consegue contato com você?*
              </h2>
            </div>

            <div className="relative flex items-center">
              <div className="absolute left-5 flex items-center space-x-1.5 pointer-events-none" aria-hidden="true">
                <span className="text-xl">🇧🇷</span>
              </div>
              <input
                type="tel"
                aria-label="WhatsApp com DDD"
                value={formData.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                placeholder="Digite seu número com DDD"
                className="w-full bg-[#181C23] border border-[#2D3440] focus:border-[#FFC900] rounded-xl py-4 pl-14 pr-5 text-white text-base placeholder:text-gray-400 focus:outline-none transition-colors font-normal shadow-sm"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Company Name */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-normal text-gray-300 mb-2">
                Agora, vamos falar sobre o seu negócio...
              </p>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                Nos diga, qual o nome da sua empresa?*
              </h2>
            </div>

            <div>
              <input
                type="text"
                aria-label="Nome da empresa"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Não tenho ainda"
                className="w-full bg-[#181C23] border border-[#2D3440] focus:border-[#FFC900] rounded-xl py-4 px-5 text-white text-base placeholder:text-gray-400 focus:outline-none transition-colors font-normal shadow-sm"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Monthly Revenue */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                {firstName} quanto, em média, ela está faturando ao mês?*
              </h2>
            </div>

            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {revenueOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChange("monthlyRevenue", opt)}
                  className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base font-medium transition-all cursor-pointer ${
                    formData.monthlyRevenue === opt
                      ? "bg-[#FFC900]/15 border-[#FFC900] text-[#FFC900] font-semibold"
                      : "bg-[#181C23] border-[#2D3440] hover:bg-[#222832] text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: Segment */}
        {step === 6 && (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-normal text-gray-400 mb-2">
                Para te ajudar melhor, precisamos de mais contexto...
              </p>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                Em qual segmento de mercado vocês estão exatamente?*
              </h2>
            </div>

            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {segmentOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChange("segment", opt)}
                  className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base font-medium transition-all cursor-pointer ${
                    formData.segment === opt
                      ? "bg-[#FFC900]/15 border-[#FFC900] text-[#FFC900] font-semibold"
                      : "bg-[#181C23] border-[#2D3440] hover:bg-[#222832] text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 7: Ad Investment Question */}
        {step === 7 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white leading-tight mb-3">
                Você está disposto a investir pelo menos R$1.500,00 por mês (R$50 por dia) em anúncios?*
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Esse é o investimento mínimo, apenas em anúncios (sem mão de obra) que trabalhamos para gerar resultados. Nosso foco é em restaurantes que entendem a importância e o impacto de um marketing bem feito.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => handleChange("adInvestment", "A. Sim! Preciso investir em Tráfego Profissional.")}
                className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all flex items-center space-x-3 cursor-pointer ${
                  formData.adInvestment.startsWith("A")
                    ? "bg-[#FFC900]/15 border-[#FFC900] text-[#FFC900] font-semibold"
                    : "bg-[#181C23] border-[#2D3440] hover:bg-[#222832] text-white"
                }`}
              >
                <span className="w-7 h-7 rounded-lg bg-[#2B323E] flex items-center justify-center font-bold text-xs text-white shrink-0">
                  A
                </span>
                <span>✅ Sim! Preciso investir em Tráfego Profissional.</span>
              </button>

              <button
                type="button"
                onClick={() => handleChange("adInvestment", "B. Não... Não quero investir no meu negócio.")}
                className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all flex items-center space-x-3 cursor-pointer ${
                  formData.adInvestment.startsWith("B")
                    ? "bg-red-500/20 border-red-500 text-red-300 font-semibold"
                    : "bg-[#181C23] border-[#2D3440] hover:bg-[#222832] text-white"
                }`}
              >
                <span className="w-7 h-7 rounded-lg bg-[#2B323E] flex items-center justify-center font-bold text-xs text-white shrink-0">
                  B
                </span>
                <span>❌ Não... Não quero investir no meu negócio.</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrevStep}
                className="w-1/3 bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-semibold text-base py-3.5 px-4 rounded-xl transition-all text-center cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={handleNextStep}
                disabled={loading}
                className="flex-1 bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-lg cursor-pointer text-center disabled:opacity-50"
              >
                {loading ? "ENVIANDO..." : "Próximo"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: Qualified Success Screen */}
        {step === 8 && (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#00E636]/20 text-[#00E636] flex items-center justify-center mx-auto shadow-lg border border-[#00E636]/40">
              <SolarIcon name="solar:check-read-bold" size={36} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-4">
                Perfeito {firstName}! Recebemos suas informações.
              </h1>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto font-normal text-left sm:text-center">
                <p>
                  Nossa equipe vai analisar o momento atual do seu restaurante e entender como a GAP pode ajudar você a aumentar as vendas e construir uma operação mais previsível.
                </p>
                <p>
                  Caso o seu negócio esteja alinhado com o perfil que atendemos, entraremos em contato pelo WhatsApp para conversar sobre os próximos passos.
                </p>
                <p className="font-semibold text-[#FFC900]">
                  Fique de olho no seu celular. Nosso contato será feito em breve.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-block bg-[#FFC900] hover:bg-[#E5B500] text-[#0C1014] font-poppins font-bold text-sm py-3.5 px-8 rounded-xl transition-all shadow-lg"
              >
                Voltar para o site principal
              </Link>
            </div>
          </div>
        )}

        {/* STEP 9: Disqualified Screen */}
        {step === 9 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center mx-auto border border-gray-700">
              <SolarIcon name="solar:info-square-bold" size={36} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-3">
                Obrigado pelo contato!
              </h1>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto font-normal">
                Avaliaremos suas respostas caso se encaixe com o perfil de parceiro que buscamos, te chamaremos.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-block bg-[#181C23] hover:bg-[#222832] text-white border border-[#2D3440] font-poppins font-medium text-sm py-3 px-8 rounded-xl transition-colors"
              >
                Voltar ao site
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
