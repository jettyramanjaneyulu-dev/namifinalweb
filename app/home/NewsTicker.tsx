import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsTicker() {
  return (
    <section
      id="news-media"
      className="relative overflow-hidden py-8"   // ↓ reduced vertical space
    >
      {/* background blur layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44]/40 via-[#163b5c]/40 to-[#0f2a44]/40 backdrop-blur-2xl" />

      {/* floating glow */}
      <div className="absolute -top-20 left-1/3 w-64 h-64 bg-[#C93A7C]/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/4 w-52 h-52 bg-[#fecf83]/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-5">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-5 md:px-8 md:py-6 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          {/* Left */}
          <div className="flex items-start gap-3">
            {/* animated dot */}
            <span className="relative mt-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C93A7C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C93A7C]" />
            </span>

            <div>
              <p className="text-[11px] tracking-widest uppercase text-[#fecf83] font-bold">
                22 Dec 2025.
              </p>

              <p className="mt-1 text-sm text-white/90 leading-relaxed max-w-2xl">
                Nami Life Sciences operates with strong ethical principles and
                scientific excellence, delivering reliable pharmaceutical
                solutions to global partners.
              </p>
            </div>
          </div>

          {/* Right CTA */}
          <Link
            href="#"
            className="group inline-flex items-center gap-2 self-start md:self-center text-[11px] font-bold uppercase tracking-wider text-white hover:text-[#C93A7C] transition"
          >
            Read more
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
