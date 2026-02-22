"use client";

import { Lightbulb, ShieldCheck, Handshake } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We continuously advance pellet-based drug delivery through deep research, scientific curiosity, and technology leadership.",
    icon: Lightbulb,
    align: "left",
  },
  {
    title: "Quality & Compliance",
    description:
      "Every process is governed by stringent quality systems aligned with global pharmaceutical regulations.",
    icon: ShieldCheck,
    align: "right",
  },
  {
    title: "Partnership",
    description:
      "We build long-term collaborations rooted in trust, transparency, and shared success.",
    icon: Handshake,
    align: "left",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-36 bg-white">

      {/* Ambient Science Blurs */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl" /> */}

      <div className="relative max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-28">
          <h2 className="text-4xl font-semibold text-[#c93a7c] mb-4">
            Our Values & Culture
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            The principles that shape how we innovate, manufacture, and
            collaborate across every stage of our work.
          </p>
        </div>

        {/* CORE + VALUES */}
        <div className="relative">

          {/* Vertical Spine */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#c93a7c] via-[#c93a7c]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-24">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className={`
                    relative grid grid-cols-1 md:grid-cols-2 items-center
                    ${value.align === "left" ? "" : "md:text-right"}
                  `}
                >
                  {/* VALUE CONTENT */}
                  <div
                    className={`
                      ${value.align === "left"
                        ? "md:pr-20 md:col-start-1"
                        : "md:pl-20 md:col-start-2"}
                    `}
                  >
                    <div className="inline-flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-md">
                        <Icon className="w-6 h-6 text-[#c93a7c]" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {value.title}
                      </h3>
                    </div>

                    <p className="text-neutral-700 leading-relaxed max-w-md">
                      {value.description}
                    </p>
                  </div>

                  {/* CONNECTION DOT */}
                  <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-[#c93a7c] rounded-full -translate-x-1/2 shadow-lg" />
                </div>
              );
            })}
          </div>

          {/* CENTER CORE */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center justify-center text-center">
              <div>
                <p className="text-sm text-neutral-500 mb-1">At the Core</p>
                <p className="text-xl font-semibold text-[#c93a7c]">
                  Nami Culture
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Precision • Trust • Science
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
