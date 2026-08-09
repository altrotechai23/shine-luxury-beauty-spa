"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Star,
  ThumbsUp,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Prisma } from "@prisma/client";

type Testimonial =
  Prisma.TestimonialGetPayload<Prisma.TestimonialDefaultArgs>;

interface Props {
  testimonial?: Testimonial;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop";

function GoogleLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M24 9.5c3.94 0 7.48 1.35 10.26 4l7.64-7.64C37.25 1.92 31.04 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.9 6.91C13.37 13.96 18.2 9.5 24 9.5Z"
      />

      <path
        fill="#34A853"
        d="M46.5 24.55c0-1.64-.15-3.2-.42-4.7H24v9h12.64c-.55 2.95-2.25 5.45-4.78 7.13l7.73 6c4.52-4.18 6.91-10.35 6.91-17.43Z"
      />

      <path
        fill="#FBBC05"
        d="M11.46 28.78A14.47 14.47 0 0 1 10.5 24c0-1.66.34-3.28.96-4.78l-8.9-6.91A23.98 23.98 0 0 0 0 24c0 3.88.93 7.57 2.56 10.78l8.9-6Z"
      />

      <path
        fill="#EA4335"
        d="M24 48c6.48 0 11.91-2.14 15.88-5.82l-7.73-6c-2.14 1.43-4.87 2.27-8.15 2.27-5.8 0-10.63-4.46-12.54-10.63l-8.9 6.91C6.51 42.62 14.62 48 24 48Z"
      />
    </svg>
  );
}

function Stars({
  rating,
  size = 22,
}: {
  rating: number;
  size?: number;
}) {
  const safeRating = Math.max(
    0,
    Math.min(5, Math.round(rating))
  );

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${safeRating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < safeRating;

        return (
          <Star
            key={index}
            size={size}
            strokeWidth={1.8}
            className={
              filled
                ? "fill-[#D7C0A0] text-[#D7C0A0]"
                : "text-white/20"
            }
          />
        );
      })}
    </div>
  );
}

export default function FeaturedReview({
  testimonial,
}: Props) {
  if (!testimonial) {
    return null;
  }

  const image =
    testimonial.image || FALLBACK_IMAGE;

  const rating = Math.max(
    0,
    Math.min(5, testimonial.rating)
  );

  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.055]
        shadow-[0_40px_120px_rgba(0,0,0,0.35)]
        backdrop-blur-3xl
      "
    >
      {/* =========================================
          Ambient Glow
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-[#62AAB5]/10
          blur-[130px]
          transition
          duration-1000
          group-hover:bg-[#62AAB5]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/3
          h-80
          w-80
          rounded-full
          bg-[#D7C0A0]/10
          blur-[130px]
        "
      />

      {/* Top Glass Line */}

      <div
        className="
          absolute
          inset-x-10
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
        "
      />

      {/* =========================================
          Layout
      ========================================= */}

      <div className="relative grid lg:grid-cols-[0.82fr_1.18fr]">

        {/* =======================================
            Image
        ======================================= */}

        <div className="relative min-h-[460px] overflow-hidden lg:min-h-[620px]">
          <Image
            src={image}
            alt={`${testimonial.name} - Shine Luxury Beauty Spa review`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="
              object-cover
              transition
              duration-[2000ms]
              ease-out
              group-hover:scale-[1.045]
            "
          />

          {/* Image Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#081B1F]
              via-[#081B1F]/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              to-[#081B1F]/20
            "
          />

          {/* Quote */}

          <div
            className="
              absolute
              left-8
              top-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/20
              text-white
              backdrop-blur-xl
            "
          >
            <Quote
              size={27}
              strokeWidth={1.5}
            />
          </div>

          {/* Rating Glass Card */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="
              absolute
              bottom-8
              left-8
              right-8
              rounded-[26px]
              border
              border-white/15
              bg-black/30
              p-5
              backdrop-blur-2xl
              sm:right-auto
              sm:min-w-[260px]
            "
          >
            <div className="flex items-center gap-3">
              <GoogleLogo />

              <div>
                <p className="text-sm font-semibold text-white">
                  Google
                </p>

                <p className="text-xs text-white/50">
                  Client Review
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <Stars
                rating={rating}
                size={18}
              />

              <span className="text-sm font-semibold text-white">
                {rating.toFixed(1)}
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================
            Review Content
        ======================================= */}

        <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14 xl:p-16">

          {/* Google Review Label */}

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3">
              <GoogleLogo />

              <span className="text-sm font-semibold text-white">
                Google Review
              </span>
            </div>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <div className="flex items-center gap-2 text-sm text-white/55">
              <BadgeCheck
                size={17}
                className="text-[#62AAB5]"
              />

              Verified Client
            </div>
          </div>

          {/* Stars */}

          <div className="mt-8">
            <Stars
              rating={rating}
              size={25}
            />
          </div>

          {/* Review */}

          <blockquote
            className="
              mt-8
              max-w-3xl
              font-heading
              text-3xl
              leading-[1.3]
              text-white
              sm:text-4xl
              lg:text-[2.7rem]
              xl:text-5xl
            "
          >
            “{testimonial.message}”
          </blockquote>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

          {/* Client */}

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              {/* Avatar */}

              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15">
                <Image
                  src={image}
                  alt={testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <BadgeCheck
                    size={16}
                    className="text-[#62AAB5]"
                  />
                </div>

                <p className="mt-1 text-sm text-white/50">
                  {testimonial.role || "Shine Client"}
                </p>
              </div>
            </div>

            {/* Helpful */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                text-white/60
              "
            >
              <ThumbsUp
                size={17}
                className="text-[#62AAB5]"
              />

              Helpful review
            </div>
          </div>

          {/* Bottom Accent */}

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Shine Luxury Beauty Spa
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}