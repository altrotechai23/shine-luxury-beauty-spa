"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.6,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        pointer-events-none
        absolute
        bottom-6
        left-1/2
        z-30

        hidden
        -translate-x-1/2

        flex-col
        items-center

        sm:flex
      "
    >
      {/* Mouse */}

      <div
        className="
          flex
          h-14
          w-8
          justify-center

          rounded-full

          border
          border-white/25

          bg-white/10

          shadow-[0_12px_35px_rgba(0,0,0,.14)]

          backdrop-blur-xl
        "
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-3

            h-2
            w-2

            rounded-full

            bg-[#58A6AD]

            shadow-[0_0_12px_rgba(88,166,173,.8)]
          "
        />
      </div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          mt-2
          text-white/75
        "
      >
        <ChevronDown
          size={19}
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Text */}

      <motion.p
        animate={{
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          mt-1

          text-[9px]
          uppercase
          tracking-[0.35em]

          text-white/55
        "
      >
        Scroll
      </motion.p>
    </motion.div>
  );
}