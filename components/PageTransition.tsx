"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);

    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 500);
    const t3 = setTimeout(() => setPhase(3), 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (isMobile === null || phase === 3) return null;

  // ✅ Fix: `as const` tells TypeScript these are readonly tuples, not number[]
  const EASE = [0.4, 0, 0.2, 1] as const;
  const FAST_EASE = [0.22, 1, 0.36, 1] as const;

  const slideIn = isMobile ? { x: "-100%" } : { y: "100%" };
  const center = { x: "0%", y: "0%" };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">

      {/* ===== LAYER 1: DARK BLUE ===== */}
      <AnimatePresence>
        {phase < 2 && (
          <motion.div
            key="dark-blue"
            className="absolute inset-0 bg-[#0A4C8B] z-10"
            initial={slideIn}
            animate={center}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        )}
      </AnimatePresence>

      {/* ===== LAYER 2: LOGO / WHITE BG ===== */}
      <AnimatePresence>
        {phase >= 1 && phase < 3 && (
          <motion.div
            key="logo-layer"
            className="absolute inset-0 flex items-center justify-center bg-white z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <motion.img
              src="/assets/footer-n-logo.png"
              alt="Logo"
              className="h-40 w-auto md:h-50"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== LAYER 3: LIGHT BLUE ===== */}
      <AnimatePresence>
        {phase === 2 && (
          <motion.div
            key="light-blue"
            className="absolute inset-0 bg-[#00B4D8] z-30"
            initial={slideIn}
            animate={center}
            exit={isMobile ? { x: "100%" } : { y: "-100%" }}
            transition={{ duration: 0.35, ease: FAST_EASE }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}