"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const infraImages = [
  "/assets/images/infra/infra.png",
  "/assets/images/infra/infra2.png",
  "/assets/images/infra/infra3.png",
  "/assets/images/infra/infra4.png",
  "/assets/images/infra/infra5.png",
  "/assets/images/infra/infra6.png",
  "/assets/images/infra/infra7.png",
  "/assets/images/infra/infra8.png",
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
            initial={{ opacity: 0, y: 30 }}
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
                  <Image
                    src={img}
                    alt={`Infrastructure ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
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