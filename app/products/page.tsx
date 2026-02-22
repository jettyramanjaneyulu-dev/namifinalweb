"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { isSafari } from "@/lib/isSafari";
import {
  HeartPulse,
  Pill,
  Brain,
  Flame,
  Wind,
  Activity,
  Leaf,
} from "lucide-react";

const therapeuticAreas = [
  { name: "Cardiovascular", icon: HeartPulse },
  { name: "Gastrointestinal", icon: HeartPulse },
  { name: "CNS", icon: Brain },
  { name: "Anti-inflammatory", icon: Flame },
  { name: "Respiratory", icon: Wind },
  { name: "Metabolic Disorders", icon: Activity },
  { name: "Nutraceutical & Wellness", icon: Leaf },
];
/* ================= VARIANTS ================= */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
import {
  Sparkles,
  Timer,
  SlidersHorizontal,
  Clock,
  ShieldCheck,
  Layers,
  Beaker,
} from "lucide-react";

const capabilities = [
  {
    name: "Sustained Release (SR) Pellets",
    icon: Timer,
  },
  {
    name: "Controlled Release (CR) Pellets",
    icon: SlidersHorizontal,
  },
  {
    name: "Delayed Release (DR) Pellets",
    icon: Clock,
  },
  {
    name: "Enteric Coated (EC) Pellets",
    icon: ShieldCheck,
  },
  {
    name: "Multiple-Unit Pellet Systems (MUPS)",
    icon: Layers,
  },
  {
    name: "Taste-Masked Granules",
    icon: Sparkles,
  },
  {
    name: "Blended Pellets & Fixed-Dose Combinations",
    icon: Beaker,
  },
];
export default function ProductsPage() {
  return (
    <main className="bg-white overflow-hidden">

     {/* ================= HERO SECTION ================= */}
<section className="relative w-full min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/assets/images/products.png"
    alt="Pharmaceutical Pellets"
    
    sizes="100vw"
    className="w-full h-full object-cover scale-105"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content Wrapper */}
  <div className="relative z-10 w-full flex justify-center lg:justify-start px-4 sm:px-6 lg:px-20">
    <motion.div
      initial={isSafari ? false : { opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        
        max-w-[92%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl
        text-center lg:text-left
        bg-white/30 backdrop-blur-xl
        rounded-2xl md:rounded-3xl
        border border-white/40
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        px-6 sm:px-8 md:px-12
        py-8 sm:py-10 md:py-12
      "
    >
      <h1
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-extrabold
          text-pink-500
          uppercase
          tracking-wide
        "
      >
        Products
      </h1>

      <p
        className="
          mt-3 sm:mt-4
          text-sm sm:text-base md:text-lg lg:text-xl
          text-white
          leading-relaxed
        "
      >
        Pharmaceutical Pellets & Nutraceutical Beadlets
      </p>
    </motion.div>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="w-full h-[60px] sm:h-[80px] md:h-[100px]"
    >
      <path
        fill="#ffffff"
        d="M0,50 C360,90 720,10 1080,50 1260,70 1440,50 1440,50 L1440,100 L0,100 Z"
      />
    </svg>
  </div>

</section>


      {/* ================= INTRO ================= */}
<section className="max-w-6xl mx-auto px-6 py-14">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    
    className="
      relative max-w-6xl
      rounded-3xl p-8 md:p-10
      bg-white/10 backdrop-blur-2xl
      border border-white/20
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      overflow-hidden
    "
  >
    {/* subtle gradient glow */}
    {/* <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl" /> */}

    <p className="relative z-10 font-bold text-gray-600 text-lg leading-relaxed">
      Nami Life Sciences offers a comprehensive portfolio of pharmaceutical
      and nutraceutical pellets, developed to meet diverse therapeutic
      requirements with precision and scalability.
    </p>
  </motion.div>
</section>



      {/* ================= CAPABILITIES ================= */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      
      className="text-3xl font-bold text-pink-500 uppercase mb-12"
    >
      Our Capabilities
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {capabilities.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            
            whileHover={{ y: -8 }}
            className="
              bg-white/70 backdrop-blur-xl
              rounded-xl p-6 border border-white/40
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)]
              transition-all duration-300 flex gap-4 items-start
            "
          >
            <Icon className="w-6 h-6 text-[#291684] mt-1" />
            <h3 className="font-semibold text-gray-600 text-lg">
              {item.name}
            </h3>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
 {/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />
     {/* ================= THERAPEUTIC COVERAGE (FIXED) ================= */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    
    className="text-3xl font-bold text-pink-500 uppercase mb-12"
  >
    Therapeutic Coverage
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {therapeuticAreas.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          
          whileHover={{ scale: 1.04 }}
          className="relative group rounded-xl p-[2px]"
        >
          {/* Gradient Border */}
          <div
            className="
              absolute inset-0 rounded-xl
              bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          />

          {/* Card */}
          <div
            className="
              relative z-10 bg-white/80 backdrop-blur-xl
              rounded-xl p-6 text-center
              border border-transparent
              group-hover:border-pink-400
              transition-all duration-300
              shadow-sm group-hover:shadow-[0_15px_40px_rgba(236,72,153,0.35)]
            "
          >
            <Icon className="w-6 h-6 text-[#291684] mx-auto mb-3" />
            <p className="font-medium text-gray-800">{item.name}</p>
          </div>
        </motion.div>
      );
    })}
    
  </div>
</section>

      {/* ================= CTA ================= */}
<section className="py-12">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    
    className="max-w-5xl mx-auto px-8 text-center bg-white/70 backdrop-blur-0xl rounded-3xl border border-white/40 shadow-xl py-14"
  >
    <FlaskConical className="w-10 h-10 text-pink-500 mx-auto mb-5" />

    <h2 className="text-3xl font-bold text-pink-600 mb-5">
      Custom Pellet Development
    </h2>

    <p className="text-gray-700 text-lg mb-8">
      We offer custom pellet development based on client-specific
      requirements with optimized performance and compliance.
    </p>

    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition shadow-lg"
    >
      Discuss Your Requirement
    </motion.a>
  </motion.div>
</section>

    </main>
  );
}


/* ===================== FLOATING CAPSULES – FULL PAGE ===================== */

const capsuleColors = [
  "from-pink-400 to-rose-500",
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-indigo-500",
];

type Capsule = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

function FloatingCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * 100,
      size: 24 + Math.random() * 26,
      duration: 22 + Math.random() * 18,
      delay: Math.random() * 10,
      color: capsuleColors[i % capsuleColors.length],
    }));

    setCapsules(generated);
  }, []);

  if (!capsules.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {capsules.map((cap, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${cap.x}vw`,
            y: "1100",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-200",
            opacity: [0, 0.35, 0.35, 0],
            rotate: 360,
          }}
          transition={{
            duration: cap.duration,
            delay: cap.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${cap.color} blur-[0.4px]`}
          style={{
            width: cap.size,
            height: cap.size,
          }}
        />
      ))}
    </div>
  );
}

