import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen overflow-hidden flex items-center justify-center text-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/about-us.png"
          alt="Nami Life Sciences Laboratory"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* Icon */}
        <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#f5b3d1] mb-4 sm:mb-6" />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Precision in <br />
          <span className="font-semibold text-[#f5b3d1]">
            Every Pellet
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
          Engineering advanced pellet-based drug delivery systems that combine
          science, technology, and reliability.
        </p>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[70px] sm:h-[90px]"
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