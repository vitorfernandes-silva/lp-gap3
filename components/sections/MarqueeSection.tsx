"use client";

import React from "react";
import { InfiniteRibbon } from "../ui/infinite-ribbon";

export function MarqueeSection() {
  const tickerText =
    "+100 Clientes atendidos • +R$ 2MM gerados para nossos clientes • +60% de produtividade • Time 100% especializado em restaurantes • ";

  return (
    <section className="bg-[#000000] py-4 overflow-hidden relative z-20 border-b border-white/10">
      <div className="relative w-full overflow-hidden pointer-events-none">
        {/* Ribbon: Yellow */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          rotation={0}
          className="bg-[#F3A200] text-[#0C1014] py-3.5 md:py-4 shadow-xl border-y border-black/15 font-poppins font-semibold text-sm sm:text-base md:text-lg tracking-wide"
        >
          {tickerText}
        </InfiniteRibbon>
      </div>
    </section>
  );
}
