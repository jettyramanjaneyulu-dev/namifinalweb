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
              <h2 className="text-2xl font-black text-[#014d8b] uppercase tracking-wider">
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

          {/* RIGHT IMAGE - FULLY FIXED FOR iOS SCROLL */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-[520px] md:h-[520px] z-10"
              style={{
                // Required to clip the fixed background to the circle
                clipPath: "circle(50% at 50% 50%)",
                WebkitClipPath: "circle(50% at 50% 50%)",
                // Fixes a flickering issue on some iOS versions
                transform: "translateZ(0)",
              }}
            > */}
             <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative w-72 h-72 md:w-[520px] md:h-[520px] z-10"
  style={{
    clipPath: "circle(50% at 50% 50%)",
    WebkitClipPath: "circle(50% at 50% 50%)",
    transform: "translateZ(0)",
  }}
>
              {/* THE FIX: 
                On iOS, 'bg-fixed' is broken. Instead, we use 'before:fixed'.
                The 'before' pseudo-element is fixed to the viewport.
                Because the parent has 'clip-path', the user only sees the 
                background through the circle as they scroll.
              */}
              <div 
                className="absolute inset-0 
                  before:content-[''] 
                  before:fixed 
                  before:inset-0 
                  before:z-[-1] 
                  before:bg-[url('/assets/Pharmaceuticals.png')] 
                  before:bg-cover 
                  before:bg-center 
                  before:bg-no-repeat
                  before:will-change-transform
                  bg-cover bg-center sm:bg-fixed"
                style={{ 
                  height: '100%', 
                  width: '100%',
                }}
              />
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