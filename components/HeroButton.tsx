"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type HeroButtonProps = {
  text: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function HeroButton({
  text,
  onClick,
  className = "",
}: HeroButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`
        px-6 py-3
        rounded-full
        font-semibold
        tracking-wide
        transition-all
        duration-300
        bg-transparent
        border
        ${className}
      `}
    >
      {text}
    </motion.button>
  );
}
