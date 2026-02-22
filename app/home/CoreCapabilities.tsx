"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-6 lg:px-20 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-y-20 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div>
            {/* Heading */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight size={20} className="text-white" />
              </div>
              <h2
                className="text-[28px] font-black uppercase tracking-wider text-[#C93A7C]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                CORE CAPABILITIES
              </h2>
            </div>

            {/* List */}
            <ul className="space-y-6 pl-2">
              {[
                "Pharmaceutical Pellets",
                "Blended Pellet Systems",
                "Nutra Spheres",
                "WHO-GMP & Wurster Process",
                "MUPS (Multi-Unit Particulate Systems)",
                "Powder Layering Technology",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-4 h-4 rounded-full bg-[#00abd3]" />
                  <span className="text-[18px] font-medium text-[#014d8b]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SPACER ================= */}
          <div className="hidden lg:block" />

          {/* ================= RIGHT COLUMN ================= */}
          <div>
            {/* Heading */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight size={20} className="text-white" />
              </div>
              <h2
                className="text-[28px] font-black uppercase tracking-wider text-[#C93A7C]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                QUALITY & COMPLIANCE
              </h2>
            </div>

            {/* List */}
            <ul className="space-y-6 pl-2">
              {[
                "cGMP",
                "ISO 9001 & ISO 14001",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-4 h-4 rounded-full bg-[#00abd3]" />
                  <span className="text-[18px] font-medium text-[#014d8b]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}