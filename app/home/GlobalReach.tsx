"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GlobalReach() {
  return (
    <section
      id="research"
      className="py-24 bg-white overflow-hidden relative text-[#014d8b]"
    >
      <div className="container mx-auto relative">
        <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-4xl font-black text-[#014d8b] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Global Reach
              </h2>
            </div>

            <p className="text-lg leading-relaxed font-medium mb-10 text-[#014d8b]">
              Currently, we serve clients across six countries and two
              continents. Our presence spans Iran, Egypt, India, Pakistan,
              Afghanistan, and Bangladesh.
            </p>

            <h3 className="text-[#014d8b] font-bold text-xs uppercase tracking-[0.15em] mb-6">
              What We're Up To
            </h3>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#014d8b]/20">
                  <img
                    src="/assets/international_standards.png"
                    alt="International Standards"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="font-bold text-lg flex items-center gap-2 group-hover:text-[#C93A7C] transition-colors text-[#014d8b]">
                  International Standards
                  <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                    <ArrowRight
                      size={24}
                      className="text-[#f0f0f0] -rotate-45"
                    />
                  </div>
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#014d8b]/20">
                  <img
                    src="/assets/ethical_principles.png"
                    alt="Ethical Principles"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="font-bold text-lg flex items-center gap-2 group-hover:text-[#C93A7C] transition-colors text-[#014d8b]">
                  Ethical Principles
                  <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                    <ArrowRight
                      size={24}
                      className="text-[#f0f0f0] -rotate-45"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CAPSULE IMAGE (FIXED FOR iOS) ================= */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-[340px] h-64 md:w-[520px] md:h-[280px] z-10"
              style={{
                // Required to clip the fixed background into the capsule shape
                clipPath: "inset(0 round 9999px)",
                WebkitClipPath: "inset(0 round 9999px)",
                // Fixes flickering/repainting on iOS Safari
                transform: "translateZ(0)",
              }}
            >
              {/* THE iOS FIX:
                  Instead of bg-fixed on the div, we use before:fixed.
                  This ensures the background image stays static relative to the screen.
              */}
              <div 
                className="absolute inset-0 
                  before:content-[''] 
                  before:fixed 
                  before:inset-0 
                  before:z-[-1] 
                  before:bg-[url('/assets/Global.png')] 
                  before:bg-cover 
                  before:bg-center 
                  before:bg-no-repeat
                  before:will-change-transform
                  bg-cover bg-center sm:bg-fixed"
                style={{ 
                  height: '100%', 
                  width: '100%',
                }}
              />
            </motion.div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[110%] h-[110%] bg-[#014d8b] blur-[80px] opacity-10 rounded-full" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}