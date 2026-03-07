"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroButton from "@/components/ui/HeroButton";

export default function HeroSection() {
  return (
    /* ================= HERO SECTION ================= */
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden border border-white">

      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/namilifesciences.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-10">

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-wide mb-6 font-[family-name:var(--font-orbitron)]"
        >
          <span className="text-[#C93A7C]">Improving Lives,</span>
          <br />
          <span className="text-[#C93A7C]">Through Dedication</span>
        </motion.h1>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="
    inline-block
    px-5 sm:px-7 md:px-10
    py-4 sm:py-5 md:py-6
    rounded-2xl md:rounded-3xl
    bg-white/60
    backdrop-blur-0xl
    border border-white/40
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    max-w-[90%] sm:max-w-xl md:max-w-2xl
  "
>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl text-[#014d8b] mb-4 font-medium"
        >
          A certified pharmaceutical company specializing in Pellets
          <br className="hidden md:block" /> and MUPS formulations.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-0"
        >
          <Link
  href="/infrastructure"
  className="text-[#014d8b] text-[16px] md:text-[18px] lg:text-[22px] font-bold tracking-widest uppercase hover:underline"
>
  Innovation and Impact
</Link>
        </motion.div></motion.div>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 flex flex-wrap gap-4 justify-center"
        >
          <HeroButton
            text="Jobs"
            onClick={() => window.open("/career", "_blank")}
          />

          <HeroButton
            text="Partnering"
            onClick={() => window.open("/reach-us", "_blank")}
          />

          <HeroButton
            text="Portfolio"
            onClick={() => window.open("/about", "_blank")}
          />

          {/* Brochure Button with Image */}
          <HeroButton
            text={
              <span className="flex items-center gap-2">
                Brochure
                <img
                  src="/assets/broucher.png"
                  alt="Brochure"
                  className="w-6 h-6"
                />
              </span>
            }
            onClick={() =>
              window.open("/assets/pdf/nami-products.pdf", "_blank")
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
