import React from "react";
import Image from "next/image";

interface GoogleMeetIconProps {
  className?: string;
  size?: number;
}

export function GoogleMeetIcon({ className = "", size = 20 }: GoogleMeetIconProps) {
  return (
    <Image
      src="/images/Google_Meet_icon_(2020).svg.webp"
      alt="Google Meet"
      width={size}
      height={size}
      className={`inline-block object-contain shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
