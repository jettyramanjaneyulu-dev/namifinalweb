"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-10 pb-24 bg-white">

      {/* ================= MERCK STYLE BACKGROUND SHAPES ================= */}

      {/* Left Pink Shape */}
      <div className="absolute -left-32 bottom-0 w-[520px] h-[520px] bg-[#EC3F8C]
                      rounded-[60%_40%_70%_30%] opacity-100" />

      {/* Left Teal Shape */}
      <div className="absolute left-0 bottom-40 w-[420px] h-[420px] bg-[#2CBEC4]
                      rounded-[70%_30%_50%_50%]" />


      {/* Right Purple Shape */}
      <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-[#4B2E83]
                      rounded-[40%_60%_30%_70%]" />

      {/* Right Pink Overlay */}
      <div className="absolute right-10 bottom-32 w-[360px] h-[360px] bg-[#EC3F8C]
                      rounded-[50%_50%_40%_60%]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Glass Card */}
        <div className="relative bg-white border border-[#014d8b]/60 rounded-3xl
                        p-10 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">

          {/* ================= TOP ROW ================= */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

            {/* Logo */}
            <div className="relative w-35 h-35">
              <img
                src="/assets/footer-n-logo.png"
                alt="NAMI Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-[#014d8b]/10 hover:bg-[#EC3F8C]
                             transition-all duration-300"
                >
                  <Icon size={18} className="text-[#014d8b] hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#014d8b]/20 mb-10" />

          {/* ================= MENU + BRAND ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Brand Text */}
            <p className="text-[#014d8b]/80 text-sm md:text-base leading-relaxed max-w-xl">
              Engineering high-precision pharmaceutical and nutraceutical pellet
              systems with uncompromising quality, innovation, and global
              regulatory excellence.
            </p>

            {/* Menu */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "About Us",
                "Products",
                "Product List",
                "Quality",
                "Infrastructure",
                "Career",
                "Reach Us",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#014d8b]/70 hover:text-[#EC3F8C]
                             text-xs md:text-sm font-semibold uppercase
                             tracking-widest transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-px bg-[#014d8b]/20 my-10" />

          {/* ================= BOTTOM ROW ================= */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6
                          text-xs tracking-wider text-[#014d8b]/70">
            <span>
              © {new Date().getFullYear()} NAMI Life Sciences. All Rights Reserved.
            </span>
            <span className="text-[#014d8b]/50">
              Designed for Global Pharmaceutical Excellence
            </span>
          </div>

          {/* ================= SCROLL TO TOP ================= */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute -top-6 left-1/2 -translate-x-1/2
                       bg-white hover:bg-[#EC3F8C]
                       p-3 rounded-full shadow-xl
                       transition-all duration-300"
          >
            <ChevronUp className="text-[#014d8b] hover:text-white" size={22} />
          </button>

        </div>
      </div>
    </footer>
  );
}
