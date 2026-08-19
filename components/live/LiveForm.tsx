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

  // Helper phone mask for Brazilian numbers: (XX) XXXXX-XXXX
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

    if (!formData.fullName.trim()) {
      setErrorMessage("Por favor, digite seu nome.");
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Por favor, digite seu melhor WhatsApp com DDD.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, digite seu melhor e-mail.");
      return;
    }

    if (!formData.restaurantName.trim()) {
      setErrorMessage("Por favor, digite o nome do seu restaurante.");
      return;
    }

    if (!formData.segment) {
      setErrorMessage("Por favor, selecione o segmento do restaurante.");
      return;
    }

    if (!formData.monthlyRevenue) {
      setErrorMessage("Por favor, selecione o faturamento mensal aproximado.");
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

      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("live_lead_name", formData.fullName.split(" ")[0]);
        } catch {
          // ignore
        }
      }

      router.push("/live/obrigado");
    } catch (err) {
      console.error("Erro ao enviar:", err);
      router.push("/live/obrigado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={id}
      className="bg-[#14171C]/95 backdrop-blur-2xl border border-[#272C35] rounded-[28px] p-6 sm:p-7 shadow-2xl shadow-black/80 relative text-left w-full"
    >
      {/* Header inside Form Card */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight mb-1">
          Garanta sua vaga
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-inter font-normal">
          Preencha e receba o link de acesso exclusivo da transmissão.
        </p>
      </div>

      {/* Form Error Banner */}
      {errorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-xs font-medium flex items-center space-x-2">
          <SolarIcon name="solar:danger-triangle-bold" className="text-red-400 shrink-0" size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form Element */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 font-inter text-left">
        {/* 1. Nome */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Nome
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
            className="w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-white text-xs sm:text-sm placeholder:text-gray-500 outline-none transition-all"
          />
        </div>

        {/* 2. E-mail */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu melhor e-mail"
            required
            className="w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-white text-xs sm:text-sm placeholder:text-gray-500 outline-none transition-all"
          />
        </div>

        {/* 3. WhatsApp (Split exact Alpha style) */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            WhatsApp
          </label>
          <div className="flex items-center space-x-2">
            {/* Country prefix button/select */}
            <div className="bg-[#1E232B] border border-[#2E3541] rounded-xl px-3 py-2.5 sm:py-3 flex items-center justify-between space-x-1.5 shrink-0 cursor-default select-none text-white text-xs sm:text-sm font-medium">
              <span className="font-semibold">BR +55</span>
              <SolarIcon name="solar:alt-arrow-down-linear" size={14} className="text-gray-400" />
            </div>

            {/* Input */}
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handlePhoneChange}
              placeholder="Digite seu melhor WhatsApp"
              required
              className="flex-1 min-w-0 bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-white text-xs sm:text-sm placeholder:text-gray-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* 4. Nome do restaurante */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Nome do restaurante
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Digite o nome do seu restaurante"
            required
            className="w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-white text-xs sm:text-sm placeholder:text-gray-500 outline-none transition-all"
          />
        </div>

        {/* 5. Segmento do restaurante */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Segmento do restaurante
          </label>
          <div className="relative">
            <select
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              required
              className={`w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-9 ${
                formData.segment ? "text-white" : "text-gray-500"
              }`}
            >
              <option value="" disabled className="bg-[#1E232B] text-gray-500">
                Selecionar segmento
              </option>
              {segmentOptions.map((seg, idx) => (
                <option key={idx} value={seg} className="bg-[#1E232B] text-white">
                  {seg}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={16} />
            </div>
          </div>
        </div>

        {/* 6. Faturamento mensal aproximado */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Qual é o faturamento mensal aproximado?
          </label>
          <div className="relative">
            <select
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleChange}
              required
              className={`w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-9 ${
                formData.monthlyRevenue ? "text-white" : "text-gray-500"
              }`}
            >
              <option value="" disabled className="bg-[#1E232B] text-gray-500">
                Selecionar faturamento
              </option>
              {revenueOptions.map((rev, idx) => (
                <option key={idx} value={rev} className="bg-[#1E232B] text-white">
                  {rev}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={16} />
            </div>
          </div>
        </div>

        {/* 7. Principal Desafio */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Qual é o principal desafio hoje?
          </label>
          <div className="relative">
            <select
              name="mainChallenge"
              value={formData.mainChallenge}
              onChange={handleChange}
              required
              className={`w-full bg-[#1E232B] border border-[#2E3541] focus:border-[#FFAE00] focus:ring-1 focus:ring-[#FFAE00] rounded-xl py-2.5 sm:py-3 px-3.5 text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-9 ${
                formData.mainChallenge ? "text-white" : "text-gray-500"
              }`}
            >
              <option value="" disabled className="bg-[#1E232B] text-gray-500">
                Selecionar desafio
              </option>
              {challengeOptions.map((desafio, idx) => (
                <option key={idx} value={desafio} className="bg-[#1E232B] text-white">
                  {desafio}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SolarIcon name="solar:alt-arrow-down-linear" size={16} />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2.5 sm:pt-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFAE00] hover:bg-[#F59E0B] active:bg-[#E58E00] text-[#0C1014] font-poppins font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-xl shadow-[#FFAE00]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center space-x-2 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-[#0C1014] border-t-transparent rounded-full animate-spin"></span>
                <span>Garantindo vaga...</span>
              </span>
            ) : (
              <span>Garantir minha vaga</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
