"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
  }, []);

  if (isMobile === null) return null;

  /* ================= CONFIG ================= */
  // Typed cubic-bezier → avoids TS build error
  const EASE: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

  const SLIDE_DURATION = 0.7;
  const LOGO_DURATION = 0.6;

  /* ================= DIRECTION ================= */
  const initial = isMobile
    ? { x: "-100%", y: 0 }
    : { x: 0, y: "100%" };

  const animate = { x: "0%", y: "0%" };

  const exit = isMobile
    ? { x: "100%", y: 0 }
    : { x: 0, y: "-100%" };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">

      {/* ===== SLIDE 1 : DARK BLUE ===== */}
      <motion.div
        className="absolute inset-0 bg-[#0A4C8B] z-10"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{
          duration: SLIDE_DURATION,
          ease: EASE,
        }}
      />

      {/* ===== WHITE BACKGROUND ===== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: SLIDE_DURATION * 0.75,
          ease: EASE,
        }}
      >
        {/* ===== LOGO : ZOOM-IN ONLY ===== */}
        <motion.img
          src="/assets/footer-n-logo.png"
          alt="Logo"
          className="h-50 w-auto"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: LOGO_DURATION,
            delay: SLIDE_DURATION * 0.9,
            ease: EASE,
          }}
        />
      </motion.div>

      {/* ===== SLIDE 2 : LIGHT BLUE ===== */}
      <motion.div
        className="absolute inset-0 bg-[#00B4D8] z-30"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{
          duration: SLIDE_DURATION,
          delay: SLIDE_DURATION + 0.4,
          ease: EASE,
        }}
      />

    </div>
  );
}