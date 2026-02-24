"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type PageTransitionProps = {
  triggerSecond?: boolean;
};

export default function PageTransition({ triggerSecond }: PageTransitionProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
  }, []);

  if (isMobile === null) return null;

  // Direction logic (UNCHANGED)
  const initial = isMobile
    ? { x: "-100%", y: 0 }
    : { x: 0, y: "100%" };

  const animate = isMobile
    ? { x: "0%", y: 0 }
    : { x: 0, y: "0%" };

  const exit = isMobile
    ? { x: "100%", y: 0 }
    : { x: 0, y: "-100%" };

  const D = 0.45; // base duration

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* ===== SLIDE 1 : DARK BLUE ===== */}
      <motion.div
        className="absolute inset-0 bg-[#0A4C8B]"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: D, ease: "easeInOut" }}
      />

      {/* ===== SLIDE 2 : LIGHT BLUE ===== */}
      {/* <motion.div
        className="absolute inset-0 bg-[#00B4D8]"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: D, delay: D, ease: "easeInOut" }}
      /> */}

      {/* ===== SLIDE 3 : IMAGE ===== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.35,
          delay: D * 2,
          ease: "easeInOut",
        }}
      >
        <img
          src="/assets/footer-n-logo.png"
          alt="Logo"
          className="h-74 w-auto"
        />
      </motion.div>

      {/* ===== SLIDE 4 & 5 : SECOND PASS ===== */}
     
        <>
          {/* Dark Blue */}
          {/* <motion.div
            className="absolute inset-0 bg-[#0A4C8B]"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
              duration: D,
              delay: D * 2.7,
              ease: "easeInOut",
            }}
          /> */}

          {/* Light Blue */}
          <motion.div
            className="absolute inset-0 bg-[#00B4D8]"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
              duration: D,
              delay: D * 2.7,
              ease: "easeInOut",
            }}
          />
        </>
     
    </div>
  );
}