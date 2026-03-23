"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSafari } from "@/lib/isSafari";

const infraImages = [
  "/assets/gallery/1.png",
  "/assets/gallery/2.png",
  "/assets/gallery/3.png",
  "/assets/gallery/4.png",
  "/assets/gallery/5.png",
  "/assets/gallery/6.png",
  "/assets/gallery/7.png",
  "/assets/gallery/8.png",
  "/assets/gallery/9.png",
  "/assets/gallery/10.png",
  "/assets/gallery/11.png",
  "/assets/gallery/12.png",
  "/assets/gallery/13.png",
  "/assets/gallery/14.png",
  "/assets/gallery/15.png",
  "/assets/gallery/16.png",
  "/assets/gallery/17.png",
  "/assets/gallery/18.png",
  "/assets/gallery/19.png",
  "/assets/gallery/20.png",
  "/assets/gallery/21.png",
  "/assets/gallery/22.png",
  "/assets/gallery/23.png",
  "/assets/gallery/24.png",
   "/assets/gallery/25.png",
  "/assets/gallery/26.png",
  "/assets/gallery/27.png",
  "/assets/gallery/28.png",
  "/assets/gallery/29.png",
  "/assets/gallery/30.png",
  "/assets/gallery/31.png",
  "/assets/gallery/32.png",
  "/assets/gallery/33.png",
];

export default function InfrastructureGalleryPage() {
  const controls = useAnimationControls();
  const [duration, setDuration] = useState(18);
  const router = useRouter();

  /* ===== RESPONSIVE SPEED ===== */
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setDuration(9);
      } else if (window.innerWidth < 1024) {
        setDuration(13);
      } else {
        setDuration(18);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  /* ===== AUTO SCROLL ===== */
  const startAutoScroll = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAutoScroll();
  }, [duration]);

  return (
    <main className="relative overflow-hidden bg-transparent">
      <section className="relative py-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
              initial={isSafari ? false : { opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="uppercase tracking-[0.3em] text-sm text-pink-600 font-semibold">
              Facility Tour
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Infrastructure <span className="text-pink-600">Gallery</span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Explore our world-class pharmaceutical infrastructure.
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
              animate={controls}
              drag="x"
              dragElastic={0.1}
              dragMomentum={false}
              onPointerDown={() => controls.stop()}
              onPointerUp={startAutoScroll}
              onHoverStart={() => controls.stop()}
              onHoverEnd={startAutoScroll}
            >
              {[...infraImages, ...infraImages].map((img, index) => (
                <div
                  key={index}
                  onClick={() => router.push("/gallery")}
                  className="relative min-w-[260px] md:min-w-[340px] h-[220px] md:h-[260px]
                             rounded-3xl overflow-hidden bg-white shadow-lg
                             cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Infrastructure ${index + 1}`}
                    
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}