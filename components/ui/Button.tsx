"use client";

import React from "react";
import { SolarIcon } from "./SolarIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg" | "xl";
  iconName?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "lg",
  iconName,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-inter font-normal transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0";

  const sizeStyles = {
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg md:text-xl",
    xl: "py-5 px-10 text-xl md:text-2xl",
  };

  const variantStyles = {
    primary:
      "bg-gap3-gold-gradient text-[#0C1014] shadow-lg shadow-[#F3A200]/25 hover:shadow-xl hover:shadow-[#F3A200]/40 hover:brightness-110 border border-[#FFC900]/30",
    secondary:
      "bg-[#151A20] text-[#FFFFFF] hover:bg-[#1E2732] border border-[#F3A200]/30 hover:border-[#F3A200]",
    outline:
      "bg-transparent text-[#F3A200] border-2 border-[#F3A200] hover:bg-[#F3A200]/10",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconName && iconPosition === "left" && (
        <SolarIcon name={iconName} className="mr-2 text-current flex-shrink-0" size={size === "xl" ? 28 : 24} />
      )}
      <span>{children}</span>
      {iconName && iconPosition === "right" && (
        <SolarIcon name={iconName} className="ml-2 text-current flex-shrink-0" size={size === "xl" ? 28 : 24} />
      )}
    </button>
  );
}
