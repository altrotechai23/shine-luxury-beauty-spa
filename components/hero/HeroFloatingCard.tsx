"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const treatments = [
  "Luxury Hair",
  "Professional Nails",
  "Facial Treatments",
  "Lashes & Brows",
];

const gallery = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
];

export default function HeroFloatingCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: .45,
      }}
      className="
        relative
        hidden
        lg:flex
        justify-center
      "
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -16,
          rotate: -.5,
        }}
        className="
          relative

          w-[430px]

          overflow-hidden

          rounded-[38px]

          border
          border-white/10

          bg-white/[0.08]

          backdrop-blur-3xl

          shadow-[0_35px_120px_rgba(0,0,0,.45)]
        "
      >
        {/* Reflection */}

        <motion.div
          animate={{
            x: [-250, 450],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0

            w-28

            rotate-12

            bg-white/10

            blur-xl
          "
        />

        {/* Top Image */}

        <div className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Beauty Spa"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081B1F] via-transparent to-transparent" />

          {/* Badge */}

          <div
            className="
              absolute
              left-6
              top-6

              inline-flex

              items-center

              gap-2

              rounded-full

              bg-[#62AAB5]

              px-4

              py-2

              text-sm

              font-semibold

              text-white
            "
          >
            <Sparkles size={16} />

            Award Winning
          </div>

          {/* Rating */}

          <div
            className="
              absolute

              right-6

              top-6

              rounded-full

              bg-black/35

              px-4

              py-2

              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#FFD56A"
                  color="#FFD56A"
                />
              ))}

              <span className="ml-2 text-sm font-medium text-white">
                5.0
              </span>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="p-8">

          <h3
            className="
              font-heading

              text-3xl

              text-white
            "
          >
            Luxury Beauty Experience
          </h3>

          <p
            className="
              mt-4

              leading-7

              text-white/70
            "
          >
            Every appointment is crafted with precision,
            elegance and premium care so you leave
            looking and feeling your absolute best.
          </p>

          {/* Services */}

          <div className="mt-8 space-y-4">
            {treatments.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  x: 8,
                }}
                className="
                  flex

                  items-center

                  gap-3
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-[#62AAB5]"
                />

                <span className="text-white/85">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Info */}

          <div
            className="
              mt-8

              flex

              items-center

              justify-between
            "
          >
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={18} />

              Cape Town
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <Clock3 size={18} />

              Open Today
            </div>
          </div>

          {/* Mini Gallery */}

          <div className="mt-8 flex items-center gap-3">
            {gallery.map((image, index) => (
              <motion.div
                key={image}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                }}
                className="
                  relative

                  h-16

                  w-16

                  overflow-hidden

                  rounded-2xl
                "
                style={{
                  zIndex: gallery.length - index,
                }}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/booking"
            className="
              group

              mt-10

              flex

              items-center

              justify-between

              rounded-2xl

              bg-gradient-to-r

              from-[#62AAB5]

              to-[#4D8E99]

              px-6

              py-5

              font-semibold

              text-white

              shadow-[0_20px_60px_rgba(98,170,181,.35)]
            "
          >
            Book Your Luxury Experience

            <motion.div
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <ArrowRight />
            </motion.div>
          </Link>
        </div>

        {/* Bottom Glow */}

        <div
          className="
            absolute

            -bottom-24

            left-1/2

            h-48

            w-48

            -translate-x-1/2

            rounded-full

            bg-[#62AAB5]/20

            blur-[90px]
          "
        />
      </motion.div>
    </motion.div>
  );
}