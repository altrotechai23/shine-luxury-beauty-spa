"use client";

import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  BadgeCheck,
} from "lucide-react";

export default function TestimonialsHeader() {
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
      className="relative mx-auto max-w-5xl text-center"
    >
      {/* Decorative Quote */}

      <div
        className="
          absolute

          left-1/2
          top-[-90px]

          -translate-x-1/2

          font-heading

          text-[220px]

          leading-none

          text-white/[0.03]

          select-none
        "
      >
        &quot;
        
      </div>

      {/* Google Badge */}

      <motion.div
        whileHover={{
          scale: 1.03,
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

          backdrop-blur-3xl
        "
      >
        <img
          src="https://www.gstatic.com/images/branding/product/2x/google_g_48dp.png"
          alt="Google"
          className="h-5 w-5"
        />

        <span
          className="
            text-xs

            uppercase

            tracking-[0.35em]

            text-white/80
          "
        >
          Google Reviews
        </span>

        <BadgeCheck
          size={16}
          className="text-[#62AAB5]"
        />
      </motion.div>

      {/* Heading */}

      <h2
        className="
          mt-10

          font-heading

          text-5xl

          leading-[1.05]

          text-white

          md:text-6xl

          lg:text-7xl
        "
      >
        Trusted by Women
        <br />

        <span className="text-[#D7C0A0]">
          Across Cape Town
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto

          mt-8

          max-w-3xl

          text-lg

          leading-9

          text-white/70
        "
      >
        Every review reflects our commitment to luxury,
        professionalism and creating unforgettable beauty
        experiences. Nothing speaks louder than the words of
        our clients.
      </p>

      {/* Google Rating */}

      <div
        className="
          mt-14

          inline-flex

          flex-wrap

          items-center

          justify-center

          gap-6

          rounded-[28px]

          border

          border-white/10

          bg-white/5

          px-8

          py-6

          backdrop-blur-3xl
        "
      >
        {/* Stars */}

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={22}
              className="fill-[#D7C0A0] text-[#D7C0A0]"
            />
          ))}
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="text-left">
          <div className="text-3xl font-bold text-white">
            4.9
          </div>

          <div className="text-sm text-white/60">
            Average Google Rating
          </div>
        </div>

        <div className="h-8 w-px bg-white/10 hidden md:block" />

        <div className="flex items-center gap-2 text-white/70">
          <MapPin
            size={18}
            className="text-[#62AAB5]"
          />

          Cape Town, South Africa
        </div>
      </div>
    </motion.div>
  );
}