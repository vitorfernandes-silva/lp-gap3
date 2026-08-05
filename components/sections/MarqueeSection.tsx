"use client";

import React from "react";
import { InfiniteRibbon } from "../ui/infinite-ribbon";

export function MarqueeSection() {
  const tickerText =
    "+100 Clientes atendidos • +R$ 2MM gerados para nossos clientes • +60% de produtividade • Time 100% especializado em restaurantes • ";

  return (
    <section className="bg-[#050608] pb-8 pt-2 overflow-hidden relative z-20">
      <div className="relative w-full overflow-hidden pointer-events-none">
        {/* Ribbon: White */}
        <InfiniteRibbon
          repeat={8}
          duration={180}
          rotation={0}
          className="bg-white text-[#0C1014] py-3.5 md:py-4 shadow-xl border-y border-black/15 font-poppins font-semibold text-sm sm:text-base md:text-lg tracking-wide"
        >
          {tickerText}
        </InfiniteRibbon>
      </div>
    </section>
  );
}
