"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface HeroLightsProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function HeroLights({
  x,
  y,
}: HeroLightsProps) {
  const reverseX = useTransform(x, (value) => -value);
  const reverseY = useTransform(y, (value) => -value);

  return (
    <>
      {/* Left Ambient Light */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          pointer-events-none

          absolute

          -left-52
          top-20

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#62AAB5]/20

          blur-[180px]
        "
      />

      {/* Right Ambient Light */}

      <motion.div
        style={{
          x: reverseX,
          y: reverseY,
        }}
        className="
          pointer-events-none

          absolute

          right-[-220px]
          top-[-120px]

          h-[650px]
          w-[650px]

          rounded-full

          bg-[#D7C0A0]/15

          blur-[180px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          bottom-[-250px]
          left-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-[#62AAB5]/10

          blur-[220px]
        "
      />
    </>
  );
}