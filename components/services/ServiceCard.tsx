"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import type { Prisma } from "@prisma/client";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  service: Service;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop";

export default function ServiceCard({
  service,
}: Props) {
  return (
    <motion.article
      layout
      initial="rest"
      whileHover="hover"
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        bg-white
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        transition-shadow
        duration-500
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Link
        href="/booking"
        aria-label={`Book ${service.title}`}
        className="block"
      >
        <div
          className="
            relative
            h-[360px]
            overflow-hidden

            sm:h-[390px]
          "
        >
          <motion.div
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 1.045,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={
                service.image ||
                FALLBACK_IMAGE
              }
              alt={service.title}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              className="object-cover"
            />
          </motion.div>

          {/* Dark cinematic gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-black/5
              to-transparent
            "
          />

          {/* =================================================
              TOP META
          ================================================= */}

          <div
            className="
              absolute
              left-5
              right-5
              top-5
              flex
              items-start
              justify-between
            "
          >
            {/* Category */}

            <div
              className="
                rounded-full
                border
                border-white/15
                bg-black/20
                px-3.5
                py-2
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/80
                backdrop-blur-xl
              "
            >
              {service.category.name}
            </div>

            {/* Featured */}

            {service.featured && (
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#D7C0A0]/30
                  bg-[#D7C0A0]/15
                  px-3.5
                  py-2
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#F0DDC5]
                  backdrop-blur-xl
                "
              >
                <Sparkles size={11} />

                Featured
              </div>
            )}
          </div>

          {/* =================================================
              BOTTOM IMAGE INFORMATION
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
            "
          >
            <div className="flex items-end justify-between gap-4">
              {/* Treatment number */}

              <div>
                <span
                  className="
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/45
                  "
                >
                  Treatment
                </span>

                <span
                  className="
                    mt-1
                    block
                    font-heading
                    text-3xl
                    leading-none
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {service.title}
                </span>
              </div>

              {/* Arrow */}

              <motion.div
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                  },
                  hover: {
                    x: 3,
                    y: -3,
                  },
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="p-6 sm:p-7">
        {/* Description */}

        <p
          className="
            line-clamp-3
            text-[13px]
            leading-6
            text-black/45
          "
        >
          {service.description}
        </p>

        {/* ===================================================
            META
        =================================================== */}

        <div
          className="
            mt-7
            flex
            items-end
            justify-between
            border-t
            border-black/[0.07]
            pt-5
          "
        >
          {/* Duration */}

          <div>
            <div
              className="
                flex
                items-center
                gap-2
                text-black/35
              "
            >
              <Clock3
                size={14}
                strokeWidth={1.5}
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                "
              >
                Duration
              </span>
            </div>

            <div
              className="
                mt-2
                text-sm
                font-medium
                text-[#071518]
              "
            >
              {service.duration} min
            </div>
          </div>

          {/* Price */}

          <div className="text-right">
            <span
              className="
                block
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-black/25
              "
            >
              From
            </span>

            <span
              className="
                mt-1
                block
                font-heading
                text-2xl
                leading-none
                tracking-[-0.03em]
                text-[#071518]
              "
            >
              R{service.price.toFixed(0)}
            </span>
          </div>
        </div>

        {/* ===================================================
            BOOK ACTION
        =================================================== */}

        <Link
          href="/booking"
          className="
            group/button
            mt-6
            flex
            min-h-[52px]
            w-full
            items-center
            justify-between
            rounded-full
            bg-[#071518]
            px-5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white
            transition-all
            duration-300
            hover:bg-[#0D282D]
            active:scale-[0.98]
          "
        >
          <span>Book treatment</span>

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          >
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
            />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}