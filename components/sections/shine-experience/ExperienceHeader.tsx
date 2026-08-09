"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        mx-auto
        max-w-4xl
        text-center
      "
    >
      {/* Premium Badge */}

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="
          inline-flex

          items-center

          gap-3

          rounded-full

          border

          border-white/10

          bg-white/10

          px-6

          py-3

          backdrop-blur-3xl

          shadow-[0_15px_40px_rgba(0,0,0,.25)]
        "
      >
        <Sparkles
          size={16}
          className="text-[#62AAB5]"
        />

        <span
          className="
            text-xs

            uppercase

            tracking-[0.35em]

            text-white/80
          "
        >
          The Shine Experience
        </span>
      </motion.div>

      {/* Heading */}

      <h2
        className="
          mt-10

          font-heading

          text-5xl

          font-medium

          leading-tight

          text-white

          md:text-6xl

          lg:text-7xl
        "
      >
        Beauty is more than
        <br />

        <span className="text-[#D7C0A0]">
          a treatment.
        </span>

        <br />

        It is an experience.
      </h2>

      {/* Divider */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          mx-auto

          mt-10

          h-[2px]

          rounded-full

          bg-gradient-to-r

          from-[#62AAB5]

          to-[#D7C0A0]
        "
      />

      {/* Description */}

      <p
        className="
          mx-auto

          mt-10

          max-w-3xl

          text-lg

          leading-9

          text-white/70

          lg:text-xl
        "
      >
        Every visit to Shine Luxury Beauty Spa is carefully designed
        to deliver relaxation, confidence and timeless elegance.
        From the moment you arrive until you leave, every detail is
        thoughtfully crafted to make your experience unforgettable.
      </p>
    </motion.div>
  );
}