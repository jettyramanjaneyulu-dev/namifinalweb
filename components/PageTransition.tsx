"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Phase 0 → dark blue slides in
// Phase 1 → logo fades in (dark blue still visible behind)
// Phase 2 → light blue slides in over everything
// Phase 3 → entire overlay gone

export default function PageTransition() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (isMobile === null) return null;
  if (phase === 3) return null;

  const EASE: [number, number, number, number] = [0.4, 0.0, 0.2, 1];
  const SLIDE_DURATION = 0.35;
  const LOGO_DURATION  = 0.3;

  const slideIn  = isMobile ? { x: "-100%" } : { y: "100%" };
  const slideOut = isMobile ? { x:  "100%" } : { y: "-100%" };
  const center   = { x: "0%", y: "0%" };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">

      {/* ===== SLIDE 1 : DARK BLUE ===== */}
      <AnimatePresence>
        {phase < 2 && (
          <motion.div
            key="dark-blue"
            className="absolute inset-0 bg-[#0A4C8B] z-10"
            initial={slideIn}
            animate={center}
            exit={slideOut}
            transition={{ duration: SLIDE_DURATION, ease: EASE }}
          />
        )}
      </AnimatePresence>

      {/* ===== LOGO : white background ===== */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="logo"
            className="absolute inset-0 flex items-center justify-center bg-white z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <motion.img
              src="/assets/footer-n-logo.png"
              alt="Logo"
              className="h-50 w-auto"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: LOGO_DURATION, ease: EASE }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== SLIDE 2 : LIGHT BLUE ===== */}
      <AnimatePresence>
        {phase === 2 && (
          <motion.div
            key="light-blue"
            className="absolute inset-0 bg-[#00B4D8] z-30"
            initial={slideIn}
            animate={center}
            exit={slideOut}
            transition={{ duration: SLIDE_DURATION, ease: EASE }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}