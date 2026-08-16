"use client";

import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

interface HeroLightsProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function HeroLights({
  x,
  y,
}: HeroLightsProps) {
  const reverseX = useTransform(
    x,
    (value) => -value
  );

  const reverseY = useTransform(
    y,
    (value) => -value
  );

  return (
    <>
      {/* Primary green light */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute

          -left-64
          top-10

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#728558]/18

          blur-[150px]

          will-change-transform
        "
        style={{
          x,
          y,
        }}
      />

      {/* Secondary teal light */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute

          -right-64
          -top-32

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#58A6AD]/20

          blur-[150px]

          will-change-transform
        "
        style={{
          x: reverseX,
          y: reverseY,
        }}
      />

      {/* White luxury glow */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute

          bottom-[-260px]
          left-1/2

          h-[620px]
          w-[620px]

          -translate-x-1/2

          rounded-full

          bg-white/8

          blur-[170px]

          will-change-transform
        "
        animate={{
          opacity: [0.12, 0.24, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}