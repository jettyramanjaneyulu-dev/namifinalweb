import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/Pharmaceuticals1.png"
        alt="Nami Life Sciences Laboratory"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div
          className="
            inline-block
            w-full sm:w-auto
            bg-white/20 backdrop-blur-xl
            border border-white/30
            rounded-2xl sm:rounded-3xl
            px-6 py-8 sm:px-10 sm:py-12
            shadow-[0_25px_70px_rgba(0,0,0,0.3)]
          "
        >
          {/* Icon */}
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#c93a7c] mb-4 sm:mb-6" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Precision in <br />
            <span className="font-semibold text-[#f5b3d1]">
              Every Pellet
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/90">
            Engineering advanced pellet-based drug delivery systems that combine
            science, technology, and reliability.
          </p>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] sm:h-[100px]"
        >
          <path
            d="M0,60 C360,100 720,20 1080,60 1260,80 1440,60 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
