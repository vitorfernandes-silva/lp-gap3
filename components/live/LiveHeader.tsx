"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoogleMeetIcon } from "../ui/GoogleMeetIcon";

export function LiveHeader() {
  return (
    <header className="w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0C1014]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/images/logo.png"
            alt="GAP3 Assessoria Logo"
            width={140}
            height={40}
            priority
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-white font-poppins font-bold text-lg sm:text-xl tracking-tight">
            GAP<span className="text-[#FFC900]">3</span>
          </span>
        </Link>

        {/* Header Event Badge */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="hidden sm:inline-flex items-center space-x-2 bg-[#151A20] border border-[#232B36] px-3.5 py-1.5 rounded-full text-xs font-inter text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse"></span>
            <span>Quarta-feira às 19h</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 bg-[#151A20] border border-[#2D3440] px-3 py-1.5 rounded-full text-xs font-inter font-medium text-white shadow-sm">
            <GoogleMeetIcon size={16} />
            <span className="hidden xs:inline">Ao Vivo no</span> Google Meet
          </div>
        </div>
      </div>
    </header>
  );
}
