"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function BookingCTA() {
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
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_30%,rgba(98,170,181,.16),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(215,192,160,.08),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(98,170,181,.08),transparent_30%)]
        "
      />

      {/* Animated central glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
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
          FLOATING ORNAMENTS
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
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
          top-[20%]
          hidden
          lg:block
        "
      >
        <Sparkles
          size={30}
          strokeWidth={1}
          className="text-[#D7C0A0]/50"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[9%]
          bottom-[20%]
          hidden
          lg:block
        "
      >
        <Sparkles
          size={36}
          strokeWidth={1}
          className="text-[#62AAB5]/50"
        />
      </motion.div>

      {/* =====================================================
          MAIN CARD
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
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.045]
            px-7
            py-16
            shadow-[0_40px_140px_rgba(0,0,0,.4)]
            backdrop-blur-3xl
            sm:px-12
            sm:py-20
            lg:px-20
            lg:py-28
          "
        >
          {/* =================================================
              BORDER LIGHT
          ================================================= */}

          <div
            className="
              absolute
              left-[8%]
              right-[8%]
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
              MOVING LIGHT
          ================================================= */}

          <motion.div
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              top-0
              h-full
              w-[25%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.06]
              to-transparent
              blur-xl
            "
          />

          {/* =================================================
              CORNER GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-48
              w-48
              rounded-bl-[120px]
              bg-[#62AAB5]/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-48
              w-48
              rounded-tr-[120px]
              bg-[#D7C0A0]/10
              blur-3xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#62AAB5]/20
                bg-[#62AAB5]/10
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#62AAB5]
                  shadow-[0_0_16px_rgba(98,170,181,.9)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#9ED4DB]
                "
              >
                Your moment starts here
              </span>
            </motion.div>

            {/* =================================================
                GIANT BACKGROUND WORD
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[30%]
                -translate-x-1/2
                select-none
                whitespace-nowrap
                font-heading
                text-[7rem]
                font-semibold
                leading-none
                text-white/[0.025]
                sm:text-[11rem]
                lg:text-[15rem]
              "
            >
              SHINE
            </div>

            {/* =================================================
                HEADLINE
            ================================================= */}

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
                delay: 0.1,
                duration: 0.8,
              }}
              className="
                relative
                mt-10
                font-heading
                text-5xl
                leading-[0.95]
                tracking-[-0.035em]
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Ready to experience
              <br />

              <span className="text-[#D7C0A0]">
                luxury?
              </span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

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
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white/60
                sm:text-lg
              "
            >
              Step into a space designed around you.
              Discover personalised beauty treatments,
              exceptional care and an experience worth
              coming back for.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
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
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-12
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              {/* BOOK */}

              <Link
                href="/booking"
                className="
                  group
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
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
                  sm:w-auto
                "
              >
                {/* Shine */}

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
                  Book Your Appointment
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

              {/* WHATSAPP */}

              <Link
                href="https://wa.me/27788702149"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-8
                  py-5
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#62AAB5]/40
                  hover:bg-[#62AAB5]/10
                  sm:w-auto
                "
              >
                <MessageCircle
                  size={19}
                  className="
                    text-[#62AAB5]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                WhatsApp Us
              </Link>
            </motion.div>

            {/* =================================================
                TRUST LINE
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
                duration: 0.7,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              <span>Personalised Care</span>

              <span className="h-1 w-1 rounded-full bg-[#62AAB5]" />

              <span>Premium Treatments</span>

              <span className="h-1 w-1 rounded-full bg-[#62AAB5]" />

              <span>Cape Town</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#081B1F]
          to-transparent
        "
      />
    </section>
  );
}