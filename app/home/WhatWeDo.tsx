"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);
  const floatY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="
        relative overflow-hidden
        min-h-screen lg:min-h-[110vh]
        bg-white
      "
    >
      {/* ================= BACKGROUND LAYER (FIXED RESPONSIVE ISSUE) ================= */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          z-0
          pointer-events-none
          min-h-full
        "
        style={{
          backgroundImage: "url('/assets/whatwedo-bg.png')",
        }}
      />

      {/* Optional transparent overlay to stabilize layout */}
      <div className="absolute inset-0 z-[1]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* ================= IMAGE : EDGE TO EDGE ================= */}
        <div
          className="
            relative
            w-screen lg:w-full
            h-[300px] sm:h-[420px] md:h-[520px] lg:h-[650px]
            left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0
            flex items-center justify-center overflow-hidden
            order-2 lg:order-1

            /* ✅ added top space ONLY for responsive */
            pt-10 sm:pt-16 md:pt-20 lg:pt-0
          "
        >
          <motion.div
            style={{ rotate }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.img
              src="/assets/Whatwedo.png"
              alt="What We Do"
              className="w-[108%] max-w-none object-contain will-change-transform"
              style={{
                y: floatY,
                rotate: useTransform(rotate, (v) => -v),
                scaleX: -1,
              }}
            />
          </motion.div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-20 lg:py-28 order-1 lg:order-2">
          <div className="max-w-xl">

            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-3xl md:text-4xl font-black uppercase tracking-wider"
                style={{ fontFamily: "Orbitron", color: "#014d8b" }}
              >
                What We Do
              </h2>
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight className="text-[#f0f0f0] -rotate-45" size={24} />
              </div>
            </div>

            {/* Subtitle */}
            <h3
              className="text-lg md:text-2xl font-bold mb-6 leading-tight uppercase"
              style={{ fontFamily: "Orbitron", color: "#014d8b" }}
            >
              We Engineer High-Precision Pellet Systems for Modern Drug Delivery Challenges.
            </h3>

            {/* Description */}
            <p
              className="text-base md:text-lg mb-10 leading-relaxed font-medium"
              style={{ color: "#014d8b" }}
            >
              NAMI designs and manufactures pharmaceutical and nutraceutical
              pellets with precise control over release, uniformity, and
              bioavailability — built to perform at scale.
            </p>

            {/* Application Areas */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#C93A7C] flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#f0f0f0]" />
                </div>
                <h3
                  className="font-bold text-lg uppercase tracking-wide"
                  style={{ color: "#014d8b" }}
                >
                  Application Areas
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Pharmaceutical Solutions",
                  "Nutraceutical Applications",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full border border-[#014d8b] flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#014d8b] rounded-full" />
                    </div>
                    <span
                      className="font-bold text-base md:text-lg group-hover:text-[#C93A7C] transition-colors"
                      style={{ color: "#014d8b" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
