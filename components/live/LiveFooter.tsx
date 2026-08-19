"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolarIcon } from "../ui/SolarIcon";

export function LiveFooter() {
  return (
    <footer className="bg-[#06080B] border-t border-[#1C222B] py-10 text-[#E4E4E4] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C222B]">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="GAP3 Assessoria Logo"
              width={140}
              height={40}
              className="h-8 md:h-9 w-auto object-contain"
            />
            <span className="text-white font-poppins font-bold text-lg tracking-tight">
              GAP<span className="text-[#FFC900]">3</span>
            </span>
          </Link>

          {/* Institutional note */}
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-right max-w-md leading-relaxed">
            A GAP3 é uma assessoria de processos comerciais e crescimento focada no aumento de vendas sustentável e lucrativo para restaurantes e food services.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 GAP3 Assessoria. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-2">
            <SolarIcon name="solar:shield-check-bold" size={16} className="text-[#FFC900]" />
            <span>Evento Oficial • Transmissão Exclusiva Google Meet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
