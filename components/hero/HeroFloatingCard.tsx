"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

const TREATMENTS = [
  "Luxury Hair",
  "Professional Nails",
  "Facial Treatments",
  "Lashes & Brows",
] as const;

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury beauty treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    alt: "Professional beauty service",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury salon experience",
  },
] as const;

const HERO_CARD_IMAGE =
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop";

const STAR_COUNT = 5;

export default function HeroFloatingCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
        y: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.85,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        hidden
        justify-center
        lg:flex
      "
    >
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          group
          relative

          w-[420px]

          overflow-hidden

          rounded-[36px]

          border
          border-white/15

          bg-white/[0.10]

          shadow-[0_35px_100px_rgba(0,0,0,.28)]

          backdrop-blur-2xl
        "
      >
        {/* Reflection */}

        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-32
            z-30
            w-24

            rotate-12

            bg-white/[0.10]

            blur-lg
          "
          animate={{
            x: [-100, 560],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
        />

        {/* Image */}

        <div
          className="
            relative
            h-64
            overflow-hidden
          "
        >
          <Image
            src={HERO_CARD_IMAGE}
            alt="Luxury Beauty Spa"
            fill
            sizes="420px"
            quality={78}
            className="
              object-cover

              transition-transform
              duration-700

              group-hover:scale-[1.05]
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-[#728558]
              via-[#728558]/10
              to-transparent
            "
          />

          {/* Award badge */}

          <div
            className="
              absolute
              left-5
              top-5

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/20

              bg-[#728558]/90

              px-3.5
              py-2

              text-xs
              font-semibold
              text-white

              shadow-lg

              backdrop-blur-xl
            "
          >
            <Sparkles
              size={14}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Award Winning
          </div>

          {/* Rating */}

          <div
            className="
              absolute
              right-5
              top-5

              rounded-full

              border
              border-white/10

              bg-black/25

              px-3.5
              py-2

              backdrop-blur-xl
            "
          >
            <div
              className="flex items-center gap-1"
              aria-label="5 out of 5 stars"
            >
              {Array.from(
                {
                  length: STAR_COUNT,
                },
                (_, index) => (
                  <Star
                    key={index}
                    size={13}
                    fill="white"
                    color="white"
                    aria-hidden="true"
                  />
                )
              )}

              <span
                className="
                  ml-1
                  text-xs
                  font-medium
                  text-white
                "
              >
                5.0
              </span>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="p-7">
          <h3
            className="
              font-heading
              text-3xl
              leading-tight
              text-white
            "
          >
            Luxury Beauty Experience
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-white/68
            "
          >
            Every appointment is crafted with
            precision, elegance and premium care
            so you leave looking and feeling your
            absolute best.
          </p>

          {/* Treatments */}

          <div className="mt-7 space-y-3">
            {TREATMENTS.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3

                  transition-transform
                  duration-200

                  hover:translate-x-1
                "
              >
                <CheckCircle2
                  size={17}
                  strokeWidth={1.8}
                  className="
                    shrink-0
                    text-[#58A6AD]
                  "
                  aria-hidden="true"
                />

                <span
                  className="
                    text-sm
                    text-white/85
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Info */}

          <div
            className="
              mt-7

              flex
              items-center
              justify-between
              gap-3

              border-t
              border-white/10

              pt-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-2

                text-xs
                text-white/65
              "
            >
              <MapPin
                size={16}
                strokeWidth={1.8}
              />

              Cape Town
            </div>

            <div
              className="
                flex
                items-center
                gap-2

                text-xs
                text-white/65
              "
            >
              <Clock3
                size={16}
                strokeWidth={1.8}
              />

              Open Today
            </div>
          </div>

          {/* Mini gallery */}

          <div className="mt-6 flex gap-3">
            {GALLERY.map((image, index) => (
              <div
                key={image.src}
                className="
                  relative
                  h-14
                  w-14

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-105
                "
                style={{
                  zIndex:
                    GALLERY.length - index,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="56px"
                  quality={65}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/booking"
            className="
              group/cta
              mt-8

              flex
              items-center
              justify-between
              gap-4

              rounded-2xl

              bg-gradient-to-r
              from-[#728558]
              to-[#58A6AD]

              px-5
              py-4.5

              text-sm
              font-semibold
              text-white

              shadow-[0_16px_45px_rgba(88,166,173,.24)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_20px_55px_rgba(88,166,173,.32)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/80
            "
          >
            <span>
              Book Your Luxury Experience
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
              className="
                transition-transform
                duration-300

                group-hover/cta:translate-x-1.5
              "
            />
          </Link>
        </div>

        {/* Bottom glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            left-1/2

            h-48
            w-48

            -translate-x-1/2

            rounded-full

            bg-[#58A6AD]/20

            blur-[70px]
          "
        />
      </motion.div>
    </motion.div>
  );
}