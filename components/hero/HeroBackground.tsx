"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

interface HeroBackgroundProps {
  businessName: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  backgroundY: MotionValue<number>;
}

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2200&auto=format&fit=crop";

export default function HeroBackground({
  businessName,
  x,
  y,
  scale,
  backgroundY,
}: HeroBackgroundProps) {
  /*
   * Derive the gold light movement directly from the source motion values.
   * This keeps the animation reactive instead of using x.get() / y.get().
   */
  const goldX = useTransform(x, (value) => value * -0.35);
  const goldY = useTransform(y, (value) => value * -0.35);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ================================================================
          Cinematic Background Image
          ================================================================ */}

      <motion.div
        className="absolute inset-0"
        style={{
          x,
          y: backgroundY,
          scale,
          willChange: "transform",
        }}
      >
        <Image
          src={BACKGROUND_IMAGE}
          alt={businessName}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="select-none object-cover object-center"
        />
      </motion.div>

      {/* ================================================================
          Primary Overlay
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#081B1F]/95
          via-[#0F2E35]/65
          to-[#081B1F]/35
        "
      />

      {/* ================================================================
          Bottom Fade
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#081B1F]
          via-[#081B1F]/15
          to-transparent
        "
      />

      {/* ================================================================
          Luxury Tint
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#081B1F]/20
        "
      />

      {/* ================================================================
          Premium Noise
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-soft-light
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* ================================================================
          Ambient Cyan Light
          ================================================================ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-72
          -top-52
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#62AAB5]/20
          blur-[160px]
        "
        style={{
          x,
          y,
          willChange: "transform",
        }}
      />

      {/* ================================================================
          Gold Light
          ================================================================ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-72
          top-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D7C0A0]/15
          blur-[160px]
        "
        style={{
          x: goldX,
          y: goldY,
          willChange: "transform",
        }}
      />

      {/* ================================================================
          Bottom Cyan Glow
          ================================================================ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[-280px]
          left-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#62AAB5]/10
          blur-[180px]
        "
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
        }}
      />

      {/* ================================================================
          Floating Highlight
          ================================================================ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-32
          top-40
          h-56
          w-56
          rounded-full
          bg-white/10
          blur-[100px]
        "
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: "transform, opacity",
        }}
      />

      {/* ================================================================
          Luxury Vignette
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          shadow-[inset_0_0_300px_rgba(0,0,0,0.55)]
        "
      />
    </div>
  );
}