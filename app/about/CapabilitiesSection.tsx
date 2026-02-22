"use client";

import { Layers, Cpu, Factory, ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Formulation Development",
    description:
      "Advanced pellet design, customized release profiles, and optimized drug performance engineered for precision delivery.",
    icon: Layers,
  },
  {
    title: "Technology-Driven Manufacturing",
    description:
      "Digitally controlled, GMP-compliant infrastructure ensuring repeatability, scalability, and regulatory confidence.",
    icon: Cpu,
  },
  {
    title: "Commercial Manufacturing",
    description:
      "Seamless scale-up from pilot batches to high-volume commercial production with consistent quality.",
    icon: Factory,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative py-28 bg-white">

      

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl font-semibold text-[#c93a7c] mb-4">
            End-to-End Capabilities
          </h2>
          <p className="text-neutral-700 text-lg">
            Integrated expertise across formulation science, advanced
            manufacturing, and commercial-scale production.
          </p>
        </div>

        {/* Capability Flow */}
        <div className="relative">


          {/* Vertical Spine */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-[#c93a7c] via-[#c93a7c]/40 to-transparent hidden md:block" />

          <div className="space-y-14">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                    relative grid md:grid-cols-[80px_1fr] gap-10 items-start
                    ${index % 2 === 1 ? "md:ml-20" : ""}
                  `}
                >
                  {/* Icon Node */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#c93a7c]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className="
                      bg-white/70 backdrop-blur-xl
                      border border-white/40
                      rounded-3xl p-10
                      shadow-xl
                      hover:shadow-[0_30px_80px_rgba(201,58,124,0.25)]
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#c93a7c] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
