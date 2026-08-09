"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
      }}
      className="
        absolute

        bottom-8

        left-1/2

        z-30

        -translate-x-1/2

        flex

        flex-col

        items-center
      "
    >
      {/* Mouse */}

      <div
        className="
          flex

          h-16

          w-9

          justify-center

          rounded-full

          border

          border-white/20

          bg-white/5

          backdrop-blur-xl
        "
      >
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mt-3

            h-3

            w-3

            rounded-full

            bg-[#62AAB5]
          "
        />
      </div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-3 text-white/80"
      >
        <ChevronDown size={22} />
      </motion.div>

      {/* Text */}

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          mt-3

          text-xs

          uppercase

          tracking-[0.35em]

          text-white/60
        "
      >
        Scroll
      </motion.p>
    </motion.div>
  );
}