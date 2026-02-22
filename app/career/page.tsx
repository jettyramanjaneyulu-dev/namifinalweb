"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  FlaskConical,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function CareerPage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

 {/* ================= HERO / BANNER ================= */}
<section
  className="
    relative
    flex items-center justify-center
    overflow-hidden
    bg-[#f6f7fb]
    h-[65vh] sm:h-[70vh] md:h-[75vh]
  "
>
  {/* ================= BACKGROUND IMAGE ================= */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/assets/images/infra/infra7.png')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

  {/* ================= CONTENT ================= */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 w-full flex justify-center px-4 sm:px-6"
  >
    {/* Glassy Box */}
    <div
      className="
        text-center
        max-w-3xl
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
        Career
      </h1>

      <p
        className="
          mt-4 sm:mt-6
          text-base sm:text-lg
          text-white/90
          leading-relaxed
        "
      >
        Grow With Science. Build With Innovation.
      </p>
    </div>
  </motion.div>

  {/* ================= BOTTOM WAVE ================= */}
  <svg
    className="absolute -bottom-[1px] left-0 w-full block"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 40L60 45C120 50 240 60 360 58C480 55 600 40 720 30
         C840 20 960 15 1080 20C1200 25 1320 40 1380 48L1440 55V140H0Z"
      fill="#f6f7fb"
    />
  </svg>
</section>




{/* ================= INTRO / PEOPLE & CULTURE ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  {/* Soft Background Gradient */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-indigo-50" /> */}

  {/* Decorative Science Orbs */}
  {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" /> */}

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT — CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Powered by People.
        <br />
        <span className="text-[#ff4d9d]">Driven by Science.</span>
      </h2>

      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        At <span className="font-semibold text-gray-900">Nami Life Sciences</span>,
        our greatest strength is our people — the minds behind every breakthrough.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our teams of scientists, engineers, formulation experts, and regulatory
        professionals work as one to develop advanced pellet-based drug delivery
        systems that meet global quality and compliance standards.
      </p>

      {/* Highlight Strip */}
      <div className="mt-8 inline-flex items-center gap-3 bg-white/70 backdrop-blur-lg border border-white/40 rounded-full px-6 py-3 shadow-md">
        <span className="w-3 h-3 rounded-full bg-[#ff4d9d]" />
        <span className="text-sm font-medium text-gray-700">
          Innovation • Collaboration • Compliance
        </span>
      </div>
    </motion.div>

    {/* RIGHT — VISUAL PANEL */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl">

        {/* Floating Accent */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-indigo-500 shadow-lg" />

        <p className="text-gray-800 text-lg leading-relaxed">
          We believe meaningful innovation happens when deep scientific
          expertise meets cross-functional collaboration.
        </p>

        <p className="mt-4 text-gray-600">
          Every formulation is backed by precision, compliance, and a shared
          commitment to improving patient outcomes worldwide.
        </p>
      </div>
    </motion.div>

  </div>
</section>

 {/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />
      {/* ================= WHY JOIN — PEOPLE & PURPOSE ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 " />

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl font-extrabold text-gray-900">
        Why Join <span className="text-[#ff4d9d]">Nami Life Sciences</span>?
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
        A workplace where science, collaboration, and purpose grow together.
      </p>
    </motion.div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT — VALUE STATEMENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="sticky top-28"
      >
        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
          More than a job.
          <br />
          <span className="text-[#ff4d9d]">A career with impact.</span>
        </h3>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          At Nami, you don’t just contribute — you co-create.  
          We empower individuals to challenge conventions, innovate responsibly,
          and build solutions that improve lives globally.
        </p>

        {/* Accent Line */}
        <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[#ff4d9d] to-indigo-500 rounded-full" />
      </motion.div>

      {/* RIGHT — REASONS LIST */}
<div
  className="relative space-y-10
             max-h-[70vh] lg:max-h-[45vh]
             overflow-y-auto pr-4
             scrollbar-thin scrollbar-thumb-[#ff4d9d]/40 scrollbar-track-transparent"
>

  {/* Vertical Spine */}
  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff4d9d]/40 via-[#ff4d9d]/10 to-transparent" />

  {reasons.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative pl-20"
    >
      {/* Icon Node */}
      <div className="absolute left-0 top-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-lg border border-[#ff4d9d]/20 text-[#ff4d9d]">
        <item.icon size={22} />
      </div>

      {/* Card */}
      <div className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all">
        <h4 className="font-bold text-lg text-gray-900 mb-2">
          {item.title}
        </h4>
        <p className="text-gray-600 leading-relaxed text-sm">
          {item.desc}
        </p>

        {/* Hover Accent */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-20 bg-[#ff4d9d] transition-all duration-300 rounded-full" />
      </div>
    </motion.div>
  ))}
</div>
    </div>
  </div>
</section>

     {/* ================= CLOSING / FINAL STATEMENT ================= */}
<section className="relative pb-32 px-6 max-w-6xl mx-auto overflow-hidden">

  {/* Decorative Blurs */}
  {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" /> */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative backdrop-blur-0xl border border-white/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl"
  >

    {/* Accent Line */}
    <div className="w-20 h-1 mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full" />

    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
      Where Pharmaceutical Innovation
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
        Meets Real-World Impact
      </span>
    </h2>

    {/* Description */}
    <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
      If you are passionate about pharmaceutical technology and innovation,
      <span className="font-semibold text-gray-900">
        {" "}Nami Life Sciences{" "}
      </span>
      offers a collaborative environment where scientific expertise,
      precision manufacturing, and regulatory excellence come together to
      create meaningful outcomes.
    </p>

    {/* Highlight Box */}
    <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-pink-200/40 bg-pink-50/60 px-6 py-4">
      <span className="h-3 w-3 rounded-full bg-pink-500 animate-pulse" />
      <span className="text-gray-800 font-medium">
        Make an impact that goes beyond the laboratory.
      </span>
    </div>

  </motion.div>
</section>
{/* ================= APPLY NOW / JOB FORM ================= */}
<section className="relative py-32 px-6 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 " />

  {/* Decorative Blurs */}
  {/* <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" /> */}

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT — CALL TO ACTION */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Ready to Build
        <br />
        <span className="text-[#ff4d9d]">Your Career With Us?</span>
      </h2>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
        Join a science-driven organization where innovation, precision,
        and collaboration define every role.
      </p>

      {/* Floating Apply Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-flex items-center gap-3 rounded-full
                   bg-gradient-to-r from-[#ff4d9d] to-indigo-500
                   px-10 py-4 text-white font-semibold shadow-xl
                   hover:shadow-2xl transition-all"
      >
        Apply Now
        <span className="text-xl">→</span>
      </motion.button>
    </motion.div>

    {/* RIGHT — FORM */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative backdrop-blur-0xl
                      border border-white/40 rounded-[2.5rem]
                      p-10 shadow-2xl">

        {/* Accent */}
        <div className="absolute -top-4 -right-4 w-16 h-16
                        rounded-2xl bg-gradient-to-br
                        from-[#ff4d9d] to-indigo-500 shadow-lg" />

        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Job Application Form
        </h3>

        <form className="space-y-6">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-gray-200
                       bg-white/80 px-5 py-4 text-gray-700
                       focus:outline-none focus:ring-2
                       focus:ring-[#ff4d9d]/40"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-200
                       bg-white/80 px-5 py-4 text-gray-700
                       focus:outline-none focus:ring-2
                       focus:ring-[#ff4d9d]/40"
          />

          {/* Position */}
          <input
            type="text"
            placeholder="Position Applied For"
            className="w-full rounded-xl border border-gray-200
                       bg-white/80 px-5 py-4 text-gray-700
                       focus:outline-none focus:ring-2
                       focus:ring-[#ff4d9d]/40"
          />

          {/* Resume */}
          <div className="relative">
            <input
              type="file"
              className="w-full rounded-xl border border-dashed
                         border-[#ff4d9d]/40 bg-white/60
                         px-5 py-4 text-gray-600
                         file:mr-4 file:rounded-lg
                         file:border-0 file:bg-[#ff4d9d]
                         file:px-4 file:py-2
                         file:text-white file:font-medium
                         hover:file:bg-pink-600"
            />
          </div>

          {/* Message */}
          <textarea
            rows={4}
            placeholder="Why do you want to join us?"
            className="w-full rounded-xl border border-gray-200
                       bg-white/80 px-5 py-4 text-gray-700
                       focus:outline-none focus:ring-2
                       focus:ring-[#ff4d9d]/40"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r
                       from-[#ff4d9d] to-indigo-500
                       py-4 font-semibold text-white
                       shadow-lg hover:shadow-xl
                       transition-all"
          >
            Submit Application
          </button>

        </form>
      </div>
    </motion.div>

  </div>
</section>

    </main>
  );
}

/* ================= DATA ================= */

const reasons = [
  {
    icon: FlaskConical,
    title: "Advanced Drug Delivery",
    desc: "Work on cutting-edge pellet-based pharmaceutical and nutraceutical technologies.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Collaborate on international pharmaceutical projects and global client engagements.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    desc: "Strong focus on continuous learning, research, and process innovation.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Science-driven, transparent, and team-oriented work environment.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Opportunities to grow professionally while making meaningful contributions.",
  },
];


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
            width: cap.size ,
            height: cap.size,
          }}
        />
      ))}
    </div>
  );
}