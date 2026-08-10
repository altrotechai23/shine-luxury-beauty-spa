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
  // Reverse mouse movement for the opposing ambient light.
  const reverseX = useTransform(x, (value) => -value);
  const reverseY = useTransform(y, (value) => -value);

  return (
    <>
      {/* Left Ambient Light */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          top-20
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#62AAB5]/20
          blur-[140px]
          will-change-transform
        "
        style={{
          x,
          y,
        }}
      />

      {/* Right Ambient Light */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-220px]
          top-[-120px]
          h-[580px]
          w-[580px]
          rounded-full
          bg-[#D7C0A0]/15
          blur-[140px]
          will-change-transform
        "
        style={{
          x: reverseX,
          y: reverseY,
        }}
      />

      {/* Bottom Glow */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-1/2
          h-[620px]
          w-[620px]
          -translate-x-1/2
          rounded-full
          bg-[#62AAB5]/10
          blur-[170px]
          will-change-transform
        "
        animate={{
          opacity: [0.15, 0.32, 0.15],
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

