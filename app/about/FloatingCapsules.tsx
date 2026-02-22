"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const capsuleColors = [
  "from-pink-400 to-rose-500",
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-indigo-500",
];

type Capsule = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

export default function FloatingCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      x: Math.random() * 100,
      size: 20 + Math.random() * 28,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 12,
      color: capsuleColors[i % capsuleColors.length],
    }));

    setCapsules(generated);
  }, []);

  if (!capsules.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {capsules.map((cap, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${cap.x}vw`,
            y: "120vh",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-30vh",
            opacity: [0, 0.35, 0.35, 0],
            rotate: 360,
          }}
          transition={{
            duration: cap.duration,
            delay: cap.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${cap.color}`}
          style={{
            width: cap.size ,
            height: cap.size,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
