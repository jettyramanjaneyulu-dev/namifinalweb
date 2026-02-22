import Image from "next/image";
import { BookOpen, Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* <section className="relative py-28 overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200"></section> */}

      {/* Decorative Blurs */}
      {/* <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative h-[520px]">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/assets/lab-1.jpeg"
              alt="Nami Life Sciences R&D Facility"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-sm text-neutral-600">Years of Expertise</p>
            <p className="text-2xl font-semibold text-[#c93a7c]">10+ Years</p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="relative">

          {/* Vertical Accent Line */}
          <div className="absolute -left-8 top-0 h-full w-[3px] bg-gradient-to-b from-[#c93a7c] to-transparent rounded-full" />

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 shadow-xl">

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#c93a7c]/10">
                <BookOpen className="w-7 h-7 text-[#c93a7c]" />
              </div>
              <h2 className="text-4xl font-semibold text-[#c93a7c]">
                Our Story
              </h2>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <span className="font-medium text-neutral-900">
                Nami Life Sciences
              </span>{" "}
              is a technology-driven pharmaceutical and nutraceutical company
              specializing in advanced pellet-based drug delivery systems.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              In a competitive global market, we empower our partners with
              scientifically superior formulations, cutting-edge manufacturing
              technologies, and consistent, scalable performance.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              At Nami, we don’t just manufacture pellets —
              <span className="font-medium text-neutral-900">
                {" "}we engineer precision, reliability, and long-term value.
              </span>
            </p>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-2 text-[#c93a7c]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">
                Precision. Performance. Trust.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
