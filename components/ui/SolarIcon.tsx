"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface SolarIconProps {
  name: string;
  className?: string;
  size?: number | string;
  color?: string;
}

export function SolarIcon({ name, className = "", size = 24, color }: SolarIconProps) {
  // Normalize icon name to solar namespace if prefix is omitted
  const iconName = name.startsWith("solar:") ? name : `solar:${name}`;

  return (
    <Icon
      icon={iconName}
      className={className}
      width={size}
      height={size}
      color={color}
    />
  );
}
