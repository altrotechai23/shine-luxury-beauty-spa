"use client";

import { motion } from "framer-motion";

export default function TestimonialsBackground() {
  return (
    <>
      {/* Main Background */}

      <div className="absolute inset-0 bg-[#081B1F]" />

      {/* Top Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-60
          top-0

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#62AAB5]/20

          blur-[180px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-72
          bottom-[-200px]

          h-[800px]
          w-[800px]

          rounded-full

          bg-[#D7C0A0]/15

          blur-[220px]
        "
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#62AAB5]/10

          blur-[180px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* Noise */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          mix-blend-soft-light

          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]

          [background-size:22px_22px]
        "
      />
    </>
  );
}