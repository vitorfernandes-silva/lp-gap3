"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  highlightBorder?: boolean;
}

export function Card({
  children,
  className = "",
  hoverGlow = true,
  highlightBorder = false,
}: CardProps) {
  return (
    <div
      className={`bg-[#151A20] border ${
        highlightBorder ? "border-[#F3A200]/50" : "border-[#232B36]"
      } rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hoverGlow
          ? "hover:border-[#F3A200]/60 hover:shadow-lg hover:shadow-[#F3A200]/10 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
