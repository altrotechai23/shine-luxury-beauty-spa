"use client";

import { motion } from "framer-motion";

const particles = [
  { left: 5, size: 6, duration: 12, delay: 0, drift: 15 },
  { left: 12, size: 10, duration: 15, delay: 2, drift: -18 },
  { left: 20, size: 5, duration: 11, delay: 1, drift: 12 },
  { left: 28, size: 8, duration: 14, delay: 4, drift: -10 },
  { left: 35, size: 7, duration: 10, delay: 3, drift: 18 },
  { left: 43, size: 9, duration: 13, delay: 5, drift: -12 },
  { left: 50, size: 6, duration: 16, delay: 2, drift: 20 },
  { left: 58, size: 11, duration: 18, delay: 6, drift: -20 },
  { left: 66, size: 5, duration: 12, delay: 4, drift: 14 },
  { left: 74, size: 8, duration: 15, delay: 7, drift: -16 },
  { left: 82, size: 7, duration: 13, delay: 1, drift: 10 },
  { left: 90, size: 9, duration: 17, delay: 5, drift: -15 },
];

export default function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -260],
            x: [0, particle.drift, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            bottom: "-30px",
            width: particle.size,
            height: particle.size,
          }}
          className="absolute rounded-full bg-[#62AAB5]/25 blur-[2px]"
        />
      ))}
    </div>
  );
}