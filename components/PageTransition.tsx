"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile === null) return null;

  const EASE: [number, number, number, number] = [0.4, 0.0, 0.2, 1];
  const SLIDE_DURATION = 0.35;
  const LOGO_DURATION  = 0.4;

  const initial = isMobile ? { x: "-100%", y: 0 } : { x: 0, y: "100%" };
  const animate  = { x: "0%", y: "0%" };
  const exit     = isMobile ? { x: "100%", y: 0 } : { x: 0, y: "-100%" };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">

          {/* ===== SLIDE 1 : DARK BLUE ===== */}
          <motion.div
            className="absolute inset-0 bg-[#0A4C8B] z-10"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: SLIDE_DURATION, ease: EASE }}
          />

          {/* ===== WHITE BACKGROUND + LOGO ===== */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              delay: SLIDE_DURATION * 0.75,
              ease: EASE,
            }}
          >
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
            animate={{
              x: "0%",
              y: "0%",
              transition: {
                duration: SLIDE_DURATION,
                delay: SLIDE_DURATION + 0.08, // enter delay
                ease: EASE,
              },
            }}
            exit={{
              ...exit,
              transition: {
                duration: 0.2,   // ← fast exit
                delay: 0,        // ← NO delay on exit
                ease: EASE,
              },
            }}
          />

        </div>
      )}
    </AnimatePresence>
  );
}