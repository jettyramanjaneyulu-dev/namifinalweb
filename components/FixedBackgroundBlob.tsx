"use client";
import { motion } from "framer-motion";

export default function FixedBackgroundBlob({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full aspect-[4/3] overflow-hidden border-4 border-white/20 shadow-2xl ${className}`}
    >
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a163d]/40 via-transparent to-transparent" />
    </motion.div>
  );
}
