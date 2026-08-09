"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Timer,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SpecialOffer() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#081B1F]
        py-28
        sm:py-36
        lg:py-44
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_50%,rgba(98,170,181,.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(215,192,160,.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(98,170,181,.10),transparent_35%)]
        "
      />

      {/* Cinematic glow */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [20, -20, 20],
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#62AAB5]/20
          blur-[180px]
        "
      />

      {/* Fine grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =====================================================
          FLOATING DECORATIVE ELEMENTS
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[8%]
          top-[18%]
          hidden
          lg:block
        "
      >
        <Sparkles
          size={26}
          strokeWidth={1}
          className="text-[#D7C0A0]/50"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          bottom-[20%]
          hidden
          lg:block
        "
      >
        <Sparkles
          size={34}
          strokeWidth={1}
          className="text-[#62AAB5]/50"
        />
      </motion.div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.055]
            px-7
            py-16
            shadow-[0_40px_140px_rgba(0,0,0,.35)]
            backdrop-blur-3xl
            sm:px-12
            sm:py-20
            lg:px-20
            lg:py-24
          "
        >
          {/* =================================================
              TOP LIGHT
          ================================================= */}

          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#D7C0A0]
              to-transparent
              opacity-70
            "
          />

          {/* =================================================
              ANIMATED LIGHT SWEEP
          ================================================= */}

          <motion.div
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              top-0
              h-full
              w-[30%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.06]
              to-transparent
              blur-xl
            "
          />

          {/* =================================================
              CORNER ACCENTS
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              h-32
              w-32
              rounded-bl-[80px]
              bg-[#62AAB5]/10
              blur-2xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-32
              w-32
              rounded-tr-[80px]
              bg-[#D7C0A0]/10
              blur-2xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D7C0A0]/20
                bg-[#D7C0A0]/10
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <span
                className="
                  flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#D7C0A0]
                  shadow-[0_0_15px_rgba(215,192,160,.8)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#E8D8C6]
                "
              >
                Grand Opening Offer
              </span>

              <Sparkles
                size={14}
                className="text-[#D7C0A0]"
              />
            </motion.div>

            {/* =================================================
                MAIN OFFER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-10"
            >
              {/* Giant background number */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  select-none
                  font-heading
                  text-[11rem]
                  font-semibold
                  leading-none
                  text-white/[0.025]
                  sm:text-[16rem]
                  lg:text-[20rem]
                "
              >
                15
              </div>

              <div className="relative">
                <p
                  className="
                    font-heading
                    text-[7rem]
                    font-medium
                    leading-[0.8]
                    tracking-[-0.08em]
                    text-white
                    sm:text-[9rem]
                    lg:text-[12rem]
                  "
                >
                  15
                  <span
                    className="
                      ml-2
                      align-top
                      font-sans
                      text-5xl
                      font-light
                      tracking-normal
                      text-[#D7C0A0]
                      sm:text-6xl
                      lg:text-7xl
                    "
                  >
                    %
                  </span>
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.45em]
                    text-white/50
                    sm:text-base
                  "
                >
                  Off selected treatments
                </p>
              </div>
            </motion.div>

            {/* =================================================
                HEADLINE
            ================================================= */}

            <motion.h2
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
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-10
                font-heading
                text-3xl
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Your next beauty experience
              <br />

              <span className="text-[#D7C0A0]">
                just became more special.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-white/60
                sm:text-lg
              "
            >
              Celebrate the beginning of something
              beautiful with an exclusive 15% saving
              on selected treatments at Shine Beauty
              Spa.
            </motion.p>

            {/* =================================================
                LIMITED OFFER INDICATOR
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                mx-auto
                mt-8
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-black/10
                px-5
                py-2.5
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/45
              "
            >
              <Timer
                size={14}
                className="text-[#62AAB5]"
              />

              Limited time celebration
            </motion.div>

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
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
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-10"
            >
              <Link
                href="/booking"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-full
                  bg-[#D7C0A0]
                  px-8
                  py-5
                  font-semibold
                  text-[#081B1F]
                  shadow-[0_20px_60px_rgba(215,192,160,.18)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_80px_rgba(215,192,160,.3)]
                  sm:px-10
                "
              >
                {/* Button shine */}

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-full
                    w-1/2
                    skew-x-[-20deg]
                    bg-white/30
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <CalendarDays
                  size={19}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  Claim Your Offer
                </span>

                <ArrowRight
                  size={18}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* Fine print */}

            <p className="mt-6 text-xs text-white/30">
              *Offer applies to selected treatments.
              Terms may apply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}