"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
      className="mx-auto max-w-3xl text-center"
    >
      {/* Premium Badge */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-white/10

          bg-white/5

          px-6
          py-3

          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(0,0,0,.25)]
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

            tracking-[0.45em]

            text-white/80
          "
        >
          Signature Collection
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
        className="
          mt-8

          font-heading

          text-5xl

          font-medium

          leading-tight

          tracking-tight

          text-white

          md:text-6xl
        "
      >
        Luxury Beauty
        <br />

        <span className="text-[#D7C0A0]">
          Treatments
        </span>
      </motion.h2>

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
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          mx-auto
          mt-8
          h-px

          bg-gradient-to-r

          from-transparent

          via-[#62AAB5]

          to-transparent
        "
      />

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.45,
          duration: 0.8,
        }}
        className="
          mx-auto

          mt-8

          max-w-2xl

          text-lg

          leading-9

          text-white/70

          md:text-xl
        "
      >
        Discover handcrafted beauty rituals designed to restore
        confidence, enhance natural elegance, and deliver an unforgettable
        luxury experience using premium products and expert care.
      </motion.p>
    </motion.div>
  );
}