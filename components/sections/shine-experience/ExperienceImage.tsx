"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  HeartHandshake,
  Star,
} from "lucide-react";

const image =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop";

export default function ExperienceImage() {
  return (
    <div className="relative flex justify-center">

      {/* ==========================================
          Ambient Background
      ========================================== */}

      <div
        className="
          absolute

          inset-0

          rounded-full

          bg-[#62AAB5]/10

          blur-[140px]
        "
      />

      {/* ==========================================
          Main Image
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        whileHover={{
          y: -8,
        }}
        className="
          relative

          overflow-hidden

          rounded-[42px]

          border

          border-white/10

          bg-white/5

          backdrop-blur-3xl

          shadow-[0_40px_120px_rgba(0,0,0,.35)]
        "
      >

        <div className="relative h-[720px] w-[540px]">

          <Image
            src={image}
            alt="Luxury Beauty Experience"
            fill
            priority
            className="
              object-cover

              transition-transform

              duration-[6000ms]

              hover:scale-110
            "
          />

          {/* Luxury Overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-[#081B1F]/70

              via-transparent

              to-transparent
            "
          />

        </div>

      </motion.div>

      {/* ==========================================
          Floating Card 1
      ========================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute

          -left-10

          top-16

          rounded-[28px]

          border

          border-white/10

          bg-white/10

          p-6

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(0,0,0,.3)]
        "
      >

        <div className="flex items-center gap-4">

          <div
            className="
              flex

              h-14

              w-14

              items-center

              justify-center

              rounded-2xl

              bg-[#62AAB5]
            "
          >
            <Award size={24} />
          </div>

          <div>

            <h4
              className="
                text-lg

                font-semibold

                text-white
              "
            >
              Award Quality
            </h4>

            <p className="text-sm text-white/60">
              Luxury Experience
            </p>

          </div>

        </div>

      </motion.div>

      {/* ==========================================
          Floating Card 2
      ========================================== */}

      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute

          -right-8

          top-1/2

          rounded-[28px]

          border

          border-white/10

          bg-white/10

          p-6

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(0,0,0,.3)]
        "
      >

        <div className="flex items-center gap-4">

          <div
            className="
              flex

              h-14

              w-14

              items-center

              justify-center

              rounded-2xl

              bg-[#D7C0A0]

              text-[#081B1F]
            "
          >
            <HeartHandshake size={24} />
          </div>

          <div>

            <h4
              className="
                text-lg

                font-semibold

                text-white
              "
            >
              Personal Care
            </h4>

            <p className="text-sm text-white/60">
              Tailored For You
            </p>

          </div>

        </div>

      </motion.div>

      {/* ==========================================
          Floating Review Card
      ========================================== */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="
          absolute

          bottom-8

          left-10

          rounded-[30px]

          border

          border-white/10

          bg-white/10

          px-8

          py-6

          backdrop-blur-3xl

          shadow-[0_25px_80px_rgba(0,0,0,.35)]
        "
      >

        <div className="flex gap-1">

          {[1,2,3,4,5].map((star)=>(
            <Star
              key={star}
              size={16}
              fill="#D7C0A0"
              className="text-[#D7C0A0]"
            />
          ))}

        </div>

        <h3
          className="
            mt-3

            text-4xl

            font-heading

            text-white
          "
        >
          5.0
        </h3>

        <p className="mt-2 text-white/60">
          Client Satisfaction
        </p>

      </motion.div>

      {/* ==========================================
          Decorative Ring
      ========================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          -right-24

          -top-24

          h-60

          w-60

          rounded-full

          border

          border-[#62AAB5]/15
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          -left-16

          bottom-20

          h-36

          w-36

          rounded-full

          border

          border-[#D7C0A0]/15
        "
      />

      {/* Floating Sparkle */}

      <motion.div
        animate={{
          y: [0, -14, 0],
          opacity: [.6, 1, .6],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute

          right-16

          top-20

          text-[#D7C0A0]
        "
      >
        <Sparkles size={30} />
      </motion.div>

    </div>
  );
}