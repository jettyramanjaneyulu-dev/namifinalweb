"use client";

import React from "react";

export type HeroButtonProps = {
  text: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function HeroButton({
  text,
  onClick,
  className = "",
}: HeroButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl 
      bg-white text-[#315879] font-semibold 
      hover:scale-105 transition ${className}`}
    >
      {text}
    </button>
  );
}
