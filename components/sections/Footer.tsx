import React from "react";
import Image from "next/image";
import { SolarIcon } from "../ui/SolarIcon";

export function Footer() {
  return (
    <footer className="bg-[#080B0E] border-t border-[#232B36] py-12 text-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#232B36]/60">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="GAP3 Assessoria"
              width={150}
              height={42}
              className="h-9 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Institutional note */}
          <p className="text-xs md:text-sm text-[#E4E4E4]/80 text-center md:text-right max-w-md leading-relaxed font-normal">
            Nós não somos agência de marketing. Somos uma assessoria de processos comerciais focada em aumentar o faturamento do seu restaurante de forma previsível e escalável.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E4E4E4]/60 font-normal">
          <div>
            © 2026 GAP3 Assessoria • Solução de Crescimento para Food Services. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-2">
            <SolarIcon name="solar:shield-check-bold" size={16} className="text-[#FFC900]" />
            <span>Processos Comerciais Sob Medida para Restaurantes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
