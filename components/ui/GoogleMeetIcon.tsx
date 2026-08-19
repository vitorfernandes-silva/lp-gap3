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
      className={className}
    >
      <path
        d="M15 8.5V4C15 3.44772 14.5523 3 14 3H3C2.44772 3 2 3.44772 2 4V16C2 16.5523 2.44772 17 3 17H14C14.5523 17 15 16.5523 15 16V11.5L20.2929 16.7929C20.9229 17.4229 22 16.9772 22 16.0858V3.91421C22 3.02283 20.9229 2.57714 20.2929 3.20711L15 8.5Z"
        fill="#00AC47"
      />
      <path
        d="M15 8.5L20.2929 3.20711C20.9229 2.57714 22 3.02283 22 3.91421V8.5L15 8.5Z"
        fill="#00832D"
      />
      <path
        d="M15 11.5L22 11.5V16.0858C22 16.9772 20.9229 17.4229 20.2929 16.7929L15 11.5Z"
        fill="#006622"
      />
      <path
        d="M2 13V16C2 16.5523 2.44772 17 3 17H8L2 13Z"
        fill="#2684FC"
      />
      <path
        d="M2 4C2 3.44772 2.44772 3 3 3H8L2 7V4Z"
        fill="#EA4335"
      />
      <path
        d="M14 3H8V8H15V4C15 3.44772 14.5523 3 14 3Z"
        fill="#FFBA00"
      />
      <path
        d="M2 7H8V13H2V7Z"
        fill="#FFBA00"
      />
    </svg>
  );
}
