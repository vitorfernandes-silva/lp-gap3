"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SolarIcon } from "../ui/SolarIcon";

interface LiveFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  restaurantName: string;
  segment: string;
  monthlyRevenue: string;
  mainChallenge: string;
}

export function LiveForm({ id = "live-form" }: { id?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<LiveFormData>({
    fullName: "",
    whatsapp: "",
    email: "",
    restaurantName: "",
    segment: "",
    monthlyRevenue: "",
    mainChallenge: "",
  });

  const segmentOptions = [
    "Pizzaria",
    "Hamburgueria",
    "Japonês/Sushi",
    "Churrascaria",
    "Restaurante à la carte",
    "Restaurante self-service",
    "Bar/Pub",
    "Cafeteria",
    "Doceria/Açaí",
    "Outro",
  ];

  const revenueOptions = [
    "Até R$30 mil",
    "R$30 mil a R$60 mil",
    "R$60 mil a R$100 mil",
    "R$100 mil a R$200 mil",
    "R$200 mil a R$500 mil",
    "Acima de R$500 mil",
  ];

  const challengeOptions = [
    "Pouco movimento durante a semana",
    "Poucos pedidos no delivery",
    "Clientes compram uma vez e não voltam",
    "Dependência excessiva de marketplaces",
    "Invisto em tráfego, mas não vejo retorno",
    "Dificuldade para atrair novos clientes",
    "Dificuldade para aumentar o ticket médio",
    "Concorrência muito forte na região",
    "Meu Instagram não gera vendas",
    "Outro",
  ];

  // Helper phone mask for Brazilian numbers: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  const formatPhone = (val: string) => {
    const numbers = val.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    setErrorMessage("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validations
    if (!formData.fullName.trim()) {
      setErrorMessage("Por favor, preencha seu nome.");
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Por favor, digite um WhatsApp válido com DDD.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, digite um e-mail válido.");
      return;
    }

    if (!formData.restaurantName.trim()) {
      setErrorMessage("Por favor, informe o nome do seu restaurante.");
      return;
    }

    if (!formData.segment) {
      setErrorMessage("Por favor, selecione o segmento do seu restaurante.");
      return;
    }

    if (!formData.monthlyRevenue) {
      setErrorMessage("Por favor, selecione a faixa de faturamento mensal.");
      return;
    }

    if (!formData.mainChallenge) {
      setErrorMessage("Por favor, selecione o principal desafio do seu restaurante.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/live-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro na resposta do servidor");
      }

      // Store contact name in localStorage or query parameter for thank you personalization
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("live_lead_name", formData.fullName.split(" ")[0]);
        } catch {
          // ignore session storage fallback
        }
      }

      router.push("/live/obrigado");
    } catch (err) {
      console.error("Erro ao enviar:", err);
      // Even if network fails, route forward to let user enter the WhatsApp group
      router.push("/live/obrigado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={id}
      className="bg-[#12161E]/95 backdrop-blur-xl border border-[#2A323F] rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl shadow-black/80 relative overflow-hidden"
    >
      {/* Subtle top border accent glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC900]/80 to-transparent" />

      {/* Header inside Form Card */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight mb-2">
          Garanta sua vaga gratuita
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-inter">
          Preencha os campos abaixo para receber o link de acesso exclusivo da transmissão.
        </p>
      </div>

      {/* Form Error Banner */}
      {errorMessage && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-xs sm:text-sm font-medium flex items-center space-x-2">
          <SolarIcon name="solar:danger-triangle-bold" className="text-red-400 shrink-0" size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form Element */}
      <form onSubmit={handleSubmit} className="space-y-4 font-inter text-left">
        {/* 1. Nome */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            Nome Completo <span className="text-[#FFC900]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
            className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-500 outline-none transition-all shadow-inner"
          />
        </div>

        {/* 2. WhatsApp */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            WhatsApp <span className="text-[#FFC900]">*</span>
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center space-x-1.5 pointer-events-none text-xs text-gray-400 border-r border-[#2D3644] pr-2.5">
              <span>🇧🇷</span>
              <span className="font-semibold text-gray-300">+55</span>
            </div>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handlePhoneChange}
              placeholder="(00) 00000-0000"
              required
              className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 pl-20 pr-4 text-white text-sm placeholder:text-gray-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 3. E-mail */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            E-mail <span className="text-[#FFC900]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu melhor e-mail"
            required
            className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-500 outline-none transition-all shadow-inner"
          />
        </div>

        {/* 4. Nome do Restaurante */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            Nome do restaurante <span className="text-[#FFC900]">*</span>
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Digite o nome do seu restaurante"
            required
            className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-500 outline-none transition-all shadow-inner"
          />
        </div>

        {/* 5. Segmento do restaurante */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            Segmento do restaurante <span className="text-[#FFC900]">*</span>
          </label>
          <div className="relative">
            <select
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              required
              className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled className="bg-[#181E27] text-gray-500">
                Selecione o segmento
              </option>
              {segmentOptions.map((seg, idx) => (
                <option key={idx} value={seg} className="bg-[#181E27] text-white">
                  {seg}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={18} />
            </div>
          </div>
        </div>

        {/* 6. Faturamento Mensal Aproximado */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            Qual é o faturamento mensal aproximado? <span className="text-[#FFC900]">*</span>
          </label>
          <div className="relative">
            <select
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleChange}
              required
              className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled className="bg-[#181E27] text-gray-500">
                Selecione a faixa de faturamento
              </option>
              {revenueOptions.map((rev, idx) => (
                <option key={idx} value={rev} className="bg-[#181E27] text-white">
                  {rev}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={18} />
            </div>
          </div>
        </div>

        {/* 7. Principal Desafio do Restaurante */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
            Qual é o principal desafio hoje? <span className="text-[#FFC900]">*</span>
          </label>
          <div className="relative">
            <select
              name="mainChallenge"
              value={formData.mainChallenge}
              onChange={handleChange}
              required
              className="w-full bg-[#181E27] border border-[#2D3644] focus:border-[#FFC900] focus:ring-1 focus:ring-[#FFC900] rounded-xl py-3 px-4 text-white text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled className="bg-[#181E27] text-gray-500">
                Selecione o principal desafio
              </option>
              {challengeOptions.map((desafio, idx) => (
                <option key={idx} value={desafio} className="bg-[#181E27] text-white">
                  {desafio}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={18} />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gap3-gold-gradient hover:brightness-110 active:brightness-95 text-[#0C1014] font-poppins font-bold text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl shadow-[#F3A200]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center space-x-2 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed border border-[#FFC900]/40"
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <span className="w-5 h-5 border-2 border-[#0C1014] border-t-transparent rounded-full animate-spin"></span>
                <span>RESERVANDO SUA VAGA...</span>
              </span>
            ) : (
              <>
                <span>GARANTIR MINHA VAGA</span>
                <SolarIcon name="solar:arrow-right-bold" size={20} className="text-[#0C1014]" />
              </>
            )}
          </button>
        </div>

        {/* Security / Privacy microcopy */}
        <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] text-gray-400">
          <SolarIcon name="solar:shield-check-bold" size={14} className="text-[#FFC900]" />
          <span>Seus dados estão protegidos. Evento 100% online e gratuito.</span>
        </div>
      </form>
    </div>
  );
}
