"use client";

import { motion } from "framer-motion";

export default function ExperienceBackground() {
  return (
    <>
      {/* =====================================================
          Main Background Gradient
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-[#081B1F]

          via-[#0F2E35]

          to-[#081B1F]
        "
      />

      {/* =====================================================
          Top Left Glow
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
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

          bg-[#62AAB5]/15

          blur-[180px]
        "
      />

      {/* =====================================================
          Bottom Right Glow
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-220px]
          bottom-[-120px]

          h-[650px]
          w-[650px]

          rounded-full

          bg-[#D7C0A0]/12

          blur-[180px]
        "
      />

      {/* =====================================================
          Center Ambient Glow
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[550px]
          w-[550px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#62AAB5]/10

          blur-[160px]
        "
      />

      {/* =====================================================
          Decorative Grid
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* =====================================================
          Luxury Gold Accent
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          right-20
          top-24

          h-64
          w-64

          rounded-full

          border

          border-[#D7C0A0]/10
        "
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          left-24
          bottom-24

          h-40
          w-40

          rounded-full

          border

          border-[#62AAB5]/10
        "
      />

      {/* =====================================================
          Noise Overlay
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

          mix-blend-soft-light

          [background-image:url('/noise.png')]
        "
      />
    </>
  );
}