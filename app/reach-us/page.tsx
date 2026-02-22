"use client";


import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Factory,
  ExternalLink,
} from "lucide-react";
import CompanyConnectSection from "@/components/CompanyConnectSection";

export default function ReachUsPage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

  {/* ================= HERO ================= */}
<section
  className="
    relative
    flex items-center
    overflow-hidden
    bg-[#f6f7fb]
    h-[60vh] sm:h-[65vh] md:h-[75vh]
  "
>
  {/* ================= BACKGROUND IMAGE ================= */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/assets/images/reach-us.png')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* ================= CONTENT ================= */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      relative z-10
     
      px-4 sm:px-6 lg:px-20
      flex justify-center lg:justify-end
    "
  >
    {/* Glassy Box */}
    <div
      className="
        text-center
        max-w-3xl w-full
        bg-white/25 backdrop-blur-xl
        border border-white/30
        rounded-2xl sm:rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        px-6 sm:px-10
        py-8 sm:py-10
      "
    >
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold
          text-[#ff4d9d]
          tracking-wide
          uppercase
        "
      >
        Reach Us
      </h1>

      <p
        className="
          mt-4 sm:mt-6
          text-sm sm:text-base md:text-lg
          text-white/90
        "
      >
        Let’s Build Better Solutions Together
      </p>
    </div>
  </motion.div>

  {/* ================= BOTTOM WAVE ================= */}
  <svg
    className="absolute -bottom-[1px] left-0 w-full block"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0 60L60 65C120 70 240 80 360 78C480 75 600 60 720 48
         C840 35 960 25 1080 30C1200 35 1320 55 1380 65
         L1440 75V120H0V60Z"
      fill="#f6f7fb"
    />
  </svg>
</section>




     {/* ================= COMPANY / CONNECT ================= */}
<CompanyConnectSection/>

 {/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />

   {/* ================= ADDRESSES – PREMIUM ================= */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* Background Effects */}
  {/* <div className="absolute inset-0">
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-300/30 blur-[120px]" />
    <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-300/30 blur-[120px]" />
  </div> */}

  <div className="relative max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Our Locations
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Manufacturing & Corporate Presence
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10 items-stretch">

      {/* ===== MANUFACTURING FACILITY ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative  border border-white/50 rounded-[32px] p-10 shadow-2xl"
      >
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg">
          <Factory size={28} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Manufacturing Facility
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          Plot No. 47B, Phase 3, Biotech Park,<br />
          Mulugu, Karkapatla,<br />
          Telangana – 502279
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-600">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          WHO-GMP & Regulatory Compliant Facility
        </div>
      </motion.div>

      {/* ===== CORPORATE OFFICE ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative  border border-white/50 rounded-[32px] p-10 shadow-2xl"
      >
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
          <Building2 size={28} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Corporate Office – Hyderabad
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          Suite 104, Thakur Mansion Lane,<br />
          Somajiguda,<br />
          Hyderabad – 500082
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-600">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          Business development & client coordination
        </div>
      </motion.div>

    </div>
  </div>
</section>

 {/* ================= MAPS – PREMIUM LOCATE US ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  {/* Ambient Background */}
  {/* <div className="absolute inset-0">
    <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-pink-300/30 blur-[140px]" />
    <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-purple-300/30 blur-[140px]" />
  </div> */}

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Locate Us
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Find Nami Lifesciences on Map
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {[
       {
  title: "Manufacturing Facility",
  address:
    "Plot No. 47B, Phase 3, Biotech Park, Mulugu, Karkapatla, Telangana – 502279",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.1749865378013!2d78.72872190291021!3d17.682657845688375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7f00580c0e1f%3A0xdcc7ffd55552fff7!2sNami%20life%20science!5e1!3m2!1sen!2sin!5m2!1sen!2sin",
  link: "https://maps.app.goo.gl/jrMj17T7NwxyvAVB9",
},

        {
  title: "Hyderabad Corporate Office",
  address: "Suite 104, Thakur Mansionlane, Somajiguda, Hyderabad – 500082",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3200389005306!2d78.4524951749357!3d17.42757218346642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b51f147925%3A0x402b5b0be859b6ef!2s104%2C%20Thakur%20Mansion%20Ln%2C%20Durga%20Nagar%20Colony%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e1!3m2!1sen!2sin!5m2!1sen!2sin",
  link: "https://maps.app.goo.gl/edpLjxGKFB9bURot6",
},

      ].map((item, index) => (
        <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="group relative block rounded-[28px] overflow-hidden bg-white border border-gray-200 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]"
    >
      {/* MAP */}
      <div className="relative h-56 sm:h-64 md:h-72 bg-slate-100">
        <iframe
          src={item.mapEmbed}
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-600 max-w-xl text-sm sm:text-base leading-relaxed">
            {item.address}
          </p>
        </div>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold shadow-lg group-hover:bg-gradient-to-r group-hover:from-[#ff4d9d] group-hover:to-purple-600 transition">
          Open in Maps
          <ExternalLink size={16} />
        </span>
      </div>
    </motion.a>
  ))}

  </div></div>
</section>


    {/* ================= CONTACT – PREMIUM CLICKABLE ================= */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* Ambient Glow */}
  <div className="absolute inset-0">
    {/* <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-pink-300/30 blur-[140px]" /> */}
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative max-w-6xl mx-auto"
  >

    {/* Header */}
    <div className="text-center mb-14">
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Get in Touch
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Let’s Start a Conversation
      </h2>
    </div>

    {/* Contact Cards */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* PHONE */}
      <motion.a
        href="tel:+918008080279"
        whileHover={{ y: -6 }}
        className="group relative  backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Phone size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
        <p className="text-gray-600 text-sm mb-4">
          Speak directly with our team
        </p>

        <span className="font-semibold text-[#ff4d9d]">
          +91 80080 80279
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

      {/* EMAIL */}
      <motion.a
        href="mailto:info@namilifesciences.com"
        whileHover={{ y: -6 }}
        className="group relative  backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Mail size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
        <p className="text-gray-600 text-sm mb-4">
          Share your requirements with us
        </p>

        <span className="font-semibold text-[#ff4d9d] break-all">
          info@namilifesciences.com
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

      {/* WEBSITE */}
      <motion.a
        href="https://www.namilifesciences.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        className="group relative backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Globe size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Website</h3>
        <p className="text-gray-600 text-sm mb-4">
          Explore our capabilities & products
        </p>

        <span className="font-semibold text-[#ff4d9d]">
          www.namilifesciences.com
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

    </div>
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