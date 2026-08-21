import React from "react";

interface GoogleMeetIconProps {
  className?: string;
  size?: number;
}

export function GoogleMeetIcon({ className = "", size = 20 }: GoogleMeetIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M15 8.5L21.5 3.5V20.5L15 15.5V8.5Z" fill="#00AA47" />
      <path d="M15 6.5C15 5.4 14.1 4.5 13 4.5H3.5C2.4 4.5 1.5 5.4 1.5 6.5V17.5C1.5 18.6 2.4 19.5 3.5 19.5H13C14.1 19.5 15 18.6 15 17.5V6.5Z" fill="#00832D" />
      <path d="M1.5 6.5C1.5 5.4 2.4 4.5 3.5 4.5H13V12H1.5V6.5Z" fill="#2684FC" />
      <path d="M1.5 12H13V19.5H3.5C2.4 19.5 1.5 18.6 1.5 17.5V12Z" fill="#00AC47" />
      <path d="M13 4.5L15 6.5V12H13V4.5Z" fill="#0066DA" />
      <path d="M13 12H15V17.5L13 19.5V12Z" fill="#00832D" />
      <path d="M15 8.5L21.5 3.5V8.5L15 12V8.5Z" fill="#FFBA00" />
      <path d="M15 12L21.5 8.5V15.5L15 12Z" fill="#EA4335" />
      <path d="M15 12L21.5 15.5V20.5L15 15.5V12Z" fill="#00832D" />
    </svg>
  );
}
