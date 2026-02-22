"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/* ================= MANUFACTURING SECTION ================= */

export default function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="py-24 bg-white overflow-hidden relative text-[#014d8b]"
    >
      {/* CONTENT CONTAINER */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            {/* TITLE */}
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-4xl font-black text-[#C93A7C] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Manufacturing
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg mb-10 leading-relaxed font-medium max-w-xl text-[#014d8b]">
              We take pride in our world-class manufacturing facilities. Our
              facilities follow stringent quality and safety protocols,
              ensuring maximum care at every stage.
            </p>

            {/* SUB HEADING */}
            <h3 className="text-[#C93A7C] font-bold text-xs uppercase tracking-[0.15em] mb-6">
              What We&apos;re Up To
            </h3>

            {/* ITEMS */}
            <div className="space-y-6">
              {/* ITEM 1 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#014d8b]/20">
                  <img
                    src="/assets/safety_protocols.png"
                    alt="Safety Protocols"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-lg flex items-center gap-2 text-[#014d8b] group-hover:text-[#C93A7C] transition-colors">
                  Safety Protocols
                  <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                    <ArrowRight
                      className="text-[#f0f0f0] -rotate-45"
                      size={24}
                    />
                  </div>
                </span>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#014d8b]/20">
                  <img
                    src="/assets/quality_control.png"
                    alt="Quality Control"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-lg flex items-center gap-2 text-[#014d8b] group-hover:text-[#C93A7C] transition-colors">
                  Quality Control
                  <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                    <ArrowRight
                      className="text-[#f0f0f0] -rotate-45"
                      size={24}
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE CIRCLE */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              
              transition={{ duration: 0.8 }}
              className="relative w-80 h-80 md:w-[520px] md:h-[520px] rounded-full overflow-hidden  z-10"
            >
              <div className="absolute inset-0 bg-[url('/assets/Manufacturing.png')] bg-cover bg-center bg-no-repeat bg-fixed" />

              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#C93A7C]/30 via-transparent to-transparent mix-blend-overlay pointer-events-none" /> */}
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              {/* <div className="w-[110%] h-[110%] bg-[#C93A7C] blur-[80px] opacity-10 rounded-full" /> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
