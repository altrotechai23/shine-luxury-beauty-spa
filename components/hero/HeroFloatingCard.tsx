
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
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.35,
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
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          group
          relative
          w-[430px]
          overflow-hidden
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.08]
          shadow-[0_35px_100px_rgba(0,0,0,.4)]
          backdrop-blur-xl
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
            z-20
            w-24
            rotate-12
            bg-white/[0.08]
            blur-lg
          "
          animate={{
            x: [-100, 560],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
        />

        {/* Top Image */}

        <div className="relative h-72 overflow-hidden">
          <Image
            src={HERO_CARD_IMAGE}
            alt="Luxury Beauty Spa"
            fill
            sizes="430px"
            quality={75}
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#081B1F]
              via-[#081B1F]/10
              to-transparent
            "
          />

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
              shadow-lg
            "
          >
            <Sparkles
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />

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
              backdrop-blur-md
            "
          >
            <div
              className="flex items-center gap-1"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: STAR_COUNT }, (_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill="#FFD56A"
                  color="#FFD56A"
                  aria-hidden="true"
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
              leading-tight
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
            elegance and premium care so you leave looking
            and feeling your absolute best.
          </p>

          {/* Services */}

          <div className="mt-8 space-y-4">
            {TREATMENTS.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  transition-transform
                  duration-200
                  ease-out
                  hover:translate-x-2
                "
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#62AAB5]"
                  aria-hidden="true"
                />

                <span className="text-white/85">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Info */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              Cape Town
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock3
                size={18}
                aria-hidden="true"
              />

              Open Today
            </div>
          </div>

          {/* Mini Gallery */}

          <div className="mt-8 flex items-center gap-3">
            {GALLERY.map((image, index) => (
              <div
                key={image.src}
                className="
                  relative
                  h-16
                  w-16
                  overflow-hidden
                  rounded-2xl
                  transition-transform
                  duration-200
                  ease-out
                  hover:-translate-y-2
                  hover:scale-105
                "
                style={{
                  zIndex: GALLERY.length - index,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="64px"
                  quality={65}
                  className="
                    object-cover
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/booking"
            className="
              group/cta
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
              shadow-[0_16px_45px_rgba(98,170,181,.28)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_20px_55px_rgba(98,170,181,.35)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#62AAB5]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#081B1F]
            "
          >
            <span>
              Book Your Luxury Experience
            </span>

            <ArrowRight
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover/cta:translate-x-1.5
              "
            />
          </Link>
        </div>

        {/* Bottom Glow */}

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
            bg-[#62AAB5]/15
            blur-[70px]
          "
        />
      </motion.div>
    </motion.div>
  );
}

