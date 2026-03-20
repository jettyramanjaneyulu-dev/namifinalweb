"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Aris Thorne",
    role: "Head of R&D, BioNexus",
    tag: "MUPS Technology",
    text: "The precision in their MUPS technology is unparalleled. Every batch meets exact specifications — this is what world-class pharma manufacturing looks like.",
    initial: "A",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director, PharmaCore",
    tag: "Quality Control",
    text: "Exceptional quality control and consistent delivery. Their team integrated seamlessly with our supply chain and raised the bar for every partner we work with.",
    initial: "S",
  },
  {
    name: "Marcus Vane",
    role: "Lead Scientist, SynthoLab",
    tag: "R&D Manufacturing",
    text: "Redefining expectations in high-tech manufacturing. The level of innovation and care they bring to each project is something we've rarely seen in this industry.",
    initial: "M",
  },
  {
    name: "Elena Marsh",
    role: "VP of Product, ClinEdge",
    tag: "Clinical Supply",
    text: "Flawless execution from pilot to commercial scale. Their regulatory expertise and manufacturing agility gave us the confidence to launch ahead of schedule.",
    initial: "E",
  },
];

const stats = [
  { icon: true, value: "4.9", label: "400+ Google Reviews" },
  { icon: false, value: "98%", label: "Recommend Us" },
  { icon: false, value: "20K+", label: "Happy Clients" },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % total);
    }, 3500);
  }, [total]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide, stopAutoSlide]);

  const t = testimonials[index];

  const easing = [0.32, 0.72, 0, 1] as [number, number, number, number];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.52, ease: easing } },
    exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0, transition: { duration: 0.32 } }),
  };

  const leftVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { duration: 0.55, ease: easing, delay: 0.06 } },
    exit: (dir: number) => ({ y: dir > 0 ? -30 : 30, opacity: 0, transition: { duration: 0.28 } }),
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Heading (unchanged) ── */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#e31881]/20 border border-[#e31881]/30 mb-4">
            <span className="text-[#014d8b] text-xs font-bold tracking-[0.2em] uppercase">
              Global Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#014d8b]">
            Trusted by{" "}
            <span className="text-[#e31881]">Industry Leaders</span>
          </h2>
        </div>

        {/* ── Split Card ── */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 70px rgba(1,77,139,0.12), 0 0 0 1px rgba(1,77,139,0.07)",
            background: "#fff",
          }}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="flex flex-col md:flex-row" style={{ minHeight: 360 }}>

            {/* ══ LEFT PANEL ══ */}
            <div
              className="relative md:w-[38%] flex-shrink-0 flex flex-col justify-end p-8 overflow-hidden"
              style={{
                background: "linear-gradient(155deg, #014d8b 0%, #012e56 100%)",
                minHeight: 260,
              }}
            >
              {/* Decorative background elements — no person photo */}
              <div className="absolute inset-0 pointer-events-none">
                {/* glow blob */}
                <div
                  className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-[0.12]"
                  style={{ background: "radial-gradient(circle, #e31881 0%, transparent 70%)" }}
                />
                {/* wave fill */}
                <svg
                  className="absolute bottom-0 left-0 w-full opacity-[0.18]"
                  viewBox="0 0 400 160"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 80 C80 30,160 130,240 80 S360 30,400 80 L400 160 L0 160Z"
                    fill="#e31881"
                  />
                </svg>
                {/* atom watermark */}
                <div className="absolute top-5 left-5 opacity-[0.10]">
                  <Atom size={68} className="text-white" />
                </div>
                {/* dot grid */}
                <svg className="absolute top-1/2 right-5 -translate-y-1/2 opacity-[0.13]" width="56" height="110" viewBox="0 0 56 110">
                  {Array.from({ length: 4 }).map((_, row) =>
                    Array.from({ length: 3 }).map((_, col) => (
                      <circle key={`${row}-${col}`} cx={col * 18 + 9} cy={row * 28 + 14} r="2" fill="white" />
                    ))
                  )}
                </svg>
              </div>

              {/* Animated content */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`left-${index}`}
                  custom={direction}
                  variants={leftVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10"
                >
                  {/* Tag pill */}
                  <div
                    className="inline-block px-3 py-[5px] rounded-full text-white text-[10px] font-bold tracking-[0.16em] uppercase mb-5"
                    style={{ background: "rgba(201,58,124,0.8)", backdropFilter: "blur(6px)" }}
                  >
                    {t.tag}
                  </div>

                  {/* Avatar + name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-2xl font-black text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#e31881,#e05c9b)" }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-[15px] leading-tight">{t.name}</h4>
                      <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wide mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Stacked avatar nav */}
                  <div className="flex items-center">
                    {testimonials.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{ marginLeft: i === 0 ? 0 : -8, zIndex: i === index ? 10 : i }}
                        className="relative outline-none"
                        aria-label={`Go to ${item.name}`}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-white border-2 transition-all duration-300"
                          style={{
                            background:
                              i === index
                                ? "linear-gradient(135deg,#e31881,#e05c9b)"
                                : "rgba(255,255,255,0.18)",
                            borderColor: i === index ? "white" : "rgba(255,255,255,0.22)",
                            transform: i === index ? "scale(1.18)" : "scale(1)",
                          }}
                        >
                          {item.initial}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ══ RIGHT PANEL ══ */}
            <div className="flex-1 bg-white flex flex-col justify-between p-8 md:p-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`right-${index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col h-full"
                >
                  {/* Stars row + quote icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="17" height="17" viewBox="0 0 17 17" fill="#D4A017">
                          <path d="M8.5 1.5l1.9 3.8 4.2.6-3 2.9.7 4.2L8.5 11l-3.8 2 .7-4.2-3-2.9 4.2-.6z" />
                        </svg>
                      ))}
                    </div>
                    {/* Dark quote badge */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-xl leading-none"
                      style={{ background: "#014d8b" }}
                    >
                      "
                    </div>
                  </div>

                  {/* Quote text */}
                  <p
                    className="text-[#1a2e45] text-lg md:text-xl leading-relaxed mb-6 flex-1"
                    style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic" }}
                  >
                    "{t.text}"
                  </p>

                  {/* Progress dashes + counter + arrows */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1.5">
                      {testimonials.map((_, i) => (
                        <div
                          key={i}
                          className="h-[3px] rounded-full transition-all duration-500"
                          style={{
                            width: i === index ? 32 : 12,
                            background: i === index ? "#014d8b" : "#014d8b1a",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[#014d8b]/45 text-[11px] font-bold tracking-widest">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                    <div className="ml-auto flex gap-2">
                      <button
                        onClick={() => goTo((index - 1 + total) % total)}
                        className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-[#014d8b] hover:text-white hover:border-[#014d8b] text-[#014d8b]"
                        style={{ borderColor: "rgba(1,77,139,0.2)" }}
                        aria-label="Previous"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M7.5 1.5L3 6l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={() => goTo((index + 1) % total)}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
                        style={{ background: "#014d8b" }}
                        aria-label="Next"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M4.5 1.5L9 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                 
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}