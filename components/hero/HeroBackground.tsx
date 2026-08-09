"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  businessName: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  backgroundY: MotionValue<number>;
}

export default function HeroBackground({
  businessName,
  x,
  y,
  scale,
  backgroundY,
}: HeroBackgroundProps) {
  return (
    <>
      {/* =============================================
          Cinematic Background
      ============================================== */}

      <motion.div
        style={{
          x,
          scale,
          y: backgroundY,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2600&auto=format&fit=crop"
          alt={businessName}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="
            object-cover
            object-center
            select-none
            scale-105
          "
        />
      </motion.div>

      {/* =============================================
          Primary Overlay
      ============================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#081B1F]/95

          via-[#0F2E35]/65

          to-[#081B1F]/35
        "
      />

      {/* =============================================
          Bottom Fade
      ============================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-[#081B1F]

          via-[#081B1F]/15

          to-transparent
        "
      />

      {/* =============================================
          Luxury Tint
      ============================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[#081B1F]/20
        "
      />

      {/* =============================================
          Premium Noise Layer
          (replace later with a real noise texture)
      ============================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.035]

          mix-blend-soft-light

          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]

          [background-size:24px_24px]
        "
      />

      {/* =============================================
          Luxury Top Light
      ============================================== */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          absolute

          -left-72
          -top-52

          h-[900px]
          w-[900px]

          rounded-full

          bg-[#62AAB5]/20

          blur-[180px]
        "
      />

      {/* =============================================
          Gold Light
      ============================================== */}

      <motion.div
        style={{
          x: x.get() * -0.35,
          y: y.get() * -0.35,
        }}
        className="
          absolute

          -right-72
          top-0

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#D7C0A0]/15

          blur-[180px]
        "
      />

      {/* =============================================
          Bottom Cyan Glow
      ============================================== */}

      <motion.div
        animate={{
          opacity: [.15, .35, .15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute

          left-1/2
          bottom-[-280px]

          h-[900px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-[#62AAB5]/10

          blur-[220px]
        "
      />

      {/* =============================================
          Floating Highlight
      ============================================== */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          opacity: [.2, .45, .2],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-32
          top-40

          h-56
          w-56

          rounded-full

          bg-white/10

          blur-[120px]
        "
      />

      {/* =============================================
          Luxury Vignette
      ============================================== */}

      <div
        className="
          absolute
          inset-0

          shadow-[inset_0_0_300px_rgba(0,0,0,.55)]
        "
      />
    </>
  );
}