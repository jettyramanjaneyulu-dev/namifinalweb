"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Aris Thorne",
      role: "Head of R&D, BioNexus",
      text: "The precision in their MUPS technology is unparalleled.",
      initial: "A",
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director, PharmaCore",
      text: "Exceptional quality control and consistent delivery.",
      initial: "S",
    },
    {
      name: "Marcus Vane",
      role: "Lead Scientist, SynthoLab",
      text: "Redefining expectations in high-tech manufacturing.",
      initial: "M",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide every 2 seconds
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C93A7C]/20 border border-[#C93A7C]/30 mb-4">
            <span className="text-[#014d8b] text-xs font-bold tracking-[0.2em] uppercase">
              Global Feedback
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#014d8b]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Trusted by{" "}
            <span className="text-[#C93A7C]">Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative h-[280px] flex items-center justify-center"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full max-w-xl bg-white border border-[#014d8b]/20 rounded-2xl shadow-2xl p-8 relative"
            >
              {/* Icon */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Atom size={42} className="text-[#C93A7C]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-1 bg-[#C93A7C] rounded-full"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#014d8b] text-lg md:text-xl font-medium italic leading-relaxed mb-8">
                "{testimonials[index].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#C93A7C] border-2 border-[#014d8b]/40 flex items-center justify-center font-bold text-white text-lg">
                  {testimonials[index].initial}
                </div>
                <div>
                  <h4 className="text-[#014d8b] font-black text-sm uppercase tracking-wide">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-[#014d8b]/60 text-xs font-bold uppercase">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}