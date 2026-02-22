"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pharmaceuticals() {
  return (
    <section
      id="research"
      className="py-24 bg-white overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-4xl font-black text-[#014d8b] uppercase tracking-wider">
                Pharmaceuticals
              </h2>
            </div>

            <p className="text-lg mb-10 text-[#014d8b]">
              We combine youthful energy with seasoned industry experience...
            </p>

            <div className="space-y-6 text-[#014d8b]">
              {[
                ["/assets/Pharmaceuticals-old.jpeg", "Pellet Formulations"],
                ["/assets/Pharmaceuticals1.png", "MUPS Technology"],
              ].map(([img, title]) => (
                <Link
                  key={title}
                  href="/infrastructure"
                  className="flex items-center gap-6 cursor-pointer group w-fit"
                >
                  {/* Next.js Optimized Image Container */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-[#014d8b]/30 relative flex-shrink-0">
                    <Image 
                      src={img} 
                      alt={title} 
                      fill 
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <span className="font-bold text-lg flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                    {title}
                    <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center shadow-lg">
                      <ArrowRight className="text-white -rotate-45" size={20} />
                    </div>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (iOS Fixed Background Fix) */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-[520px] md:h-[520px] z-10"
              style={{
                // This clips the viewport-fixed background to this specific circle
                clipPath: "circle(50% at 50% 50%)",
                WebkitClipPath: "circle(50% at 50% 50%)",
              }}
            >
              {/* The background is set to 'fixed' on a full-screen pseudo-element.
                  Because it sits inside a 'clip-path' container, it only shows 
                  through the circle, creating the parallax effect on iOS.
              */}
              <div 
                className="absolute inset-0 bg-[url('/assets/Pharmaceuticals.jpeg')] bg-cover bg-center bg-no-repeat sm:bg-fixed" 
                style={{ height: '100%', width: '100%' }}
              />
              
              {/* iOS specific fix overlay for mobile safari */}
              <div className="absolute inset-0 pointer-events-none md:hidden bg-[url('/assets/Pharmaceuticals.jpeg')] bg-cover bg-center" />
            </motion.div>

            {/* Decorative Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[110%] h-[110%] bg-[#014d8b] blur-[100px] opacity-10 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}