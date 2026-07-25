"use client";

import React from "react";
import { SolarIcon } from "./SolarIcon";

interface BadgeProps {
  children: React.ReactNode;
  iconName?: string;
  variant?: "gold" | "dark" | "silver" | "outline";
  className?: string;
}

export function Badge({
  children,
  iconName = "solar:star-bold",
  className = "",
}: BadgeProps) {
  // Dark Silver-Grey Gradient with Bold White Text, White Icon, and White Border
  return (
    <div
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-inter font-semibold tracking-wide backdrop-blur-md bg-gradient-to-r from-[#1C2026] via-[#323844] to-[#1C2026] text-white border border-white/60 shadow-lg shadow-black/40 ${className}`}
    >
      {iconName && <SolarIcon name={iconName} className="mr-2 text-white shrink-0" size={16} />}
      <span className="text-white font-semibold">{children}</span>
    </div>
  );
}
