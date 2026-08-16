"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesCTA() {
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative
        mx-6
        mt-20
        overflow-hidden

        rounded-[32px]

        border
        border-white/[0.10]

        bg-[#10282C]

        px-7
        py-10

        shadow-[0_25px_70px_rgba(0,0,0,.25)]

        sm:px-10
        sm:py-12

        lg:mx-10
        lg:px-14
        lg:py-14

        xl:mx-16
      "
    >
      {/* Accent glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#62AAB5]/10
          blur-[110px]
        "
      />

      <div className="relative z-10">
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#62AAB5]/20
            bg-[#62AAB5]/10
            px-4
            py-2
          "
        >
          <Sparkles
            size={14}
            className="text-[#62AAB5]"
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#8FCBD3]
            "
          >
            Premium Collection
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            mt-6
            max-w-2xl
            font-heading
            text-4xl
            leading-[1.05]
            text-white

            sm:text-5xl
          "
        >
          Discover Every
          <br />

          <span className="text-[#D7C0A0]">
            Luxury Treatment
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-white/55

            sm:text-base
            sm:leading-8
          "
        >
          Explore our complete collection of premium beauty
          experiences, carefully designed to enhance your
          confidence and reveal your natural beauty.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-3

            sm:flex-row
          "
        >
          <Link
            href="/services"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#62AAB5]
              px-7
              font-semibold
              text-white

              shadow-[0_15px_40px_rgba(98,170,181,.25)]

              transition
              duration-300

              hover:bg-[#71B7C1]
              active:scale-[0.97]
            "
          >
            Explore All Treatments
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/booking"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-7
              text-sm
              font-medium
              text-white

              transition
              duration-300

              hover:bg-white/10
              active:scale-[0.97]
            "
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}