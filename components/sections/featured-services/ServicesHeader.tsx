"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-2.5
        "
      >
        <Sparkles
          size={15}
          className="text-[#62AAB5]"
        />

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-white/65
          "
        >
          Signature Collection
        </span>
      </div>

      {/* Heading */}

      <h2
        className="
          mt-7
          font-heading
          text-5xl
          font-medium
          leading-[0.95]
          tracking-tight
          text-white

          sm:text-6xl
          lg:text-7xl
        "
      >
        Luxury Beauty

        <br />

        <span className="text-[#D7C0A0]">
          Treatments
        </span>
      </h2>

      {/* Accent */}

      <div
        className="
          mx-auto
          mt-7
          h-px
          w-20
          bg-gradient-to-r
          from-transparent
          via-[#62AAB5]
          to-transparent
        "
      />

      {/* Description */}

      <p
        className="
          mx-auto
          mt-7
          max-w-2xl
          text-base
          leading-7
          text-white/55

          sm:text-lg
          sm:leading-8
        "
      >
        Discover handcrafted beauty rituals designed to
        restore confidence, enhance natural elegance, and
        deliver an unforgettable luxury experience.
      </p>
    </motion.div>
  );
}