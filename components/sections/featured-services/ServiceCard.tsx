"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import type { Prisma } from "@prisma/client";

import ServiceBadge from "./ServiceBadge";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  service: Service;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function ServiceCard({
  service,
}: Props) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-white/10

        bg-white/5

        backdrop-blur-3xl

        shadow-[0_25px_70px_rgba(0,0,0,.25)]
      "
    >
      {/* Hover Glow */}

      <motion.div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -left-24
            -top-24

            h-72
            w-72

            rounded-full

            bg-[#62AAB5]/15

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            h-48
            w-48

            rounded-full

            bg-[#D7C0A0]/10

            blur-[120px]
          "
        />
      </motion.div>

      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.8,
          }}
          className="h-full w-full"
        >
          <Image
            src={service.image || FALLBACK_IMAGE}
            alt={service.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#081B1F]

            via-transparent

            to-transparent
          "
        />

        {/* Category */}

        <div className="absolute left-5 top-5">
          <ServiceBadge>
            {service.category.name}
          </ServiceBadge>
        </div>

        {/* Duration */}

        <div className="absolute right-5 top-5">
          <ServiceBadge icon={<Clock3 size={14} />}>
            {service.duration} mins
          </ServiceBadge>
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 p-8">

        {/* Price */}

        <div className="mb-6">

          <p
            className="
              text-xs

              uppercase

              tracking-[0.35em]

              text-white/50
            "
          >
            Starting From
          </p>

          <h4
            className="
              mt-2

              text-4xl

              font-heading

              text-[#D7C0A0]
            "
          >
            R{service.price}
          </h4>

        </div>

        {/* Title */}

        <h3
          className="
            text-3xl

            font-heading

            text-white

            transition

            duration-300

            group-hover:text-[#62AAB5]
          "
        >
          {service.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-5

            line-clamp-3

            leading-8

            text-white/65
          "
        >
          {service.description}
        </p>

        {/* CTA */}

        <motion.div
          whileHover={{
            x: 6,
          }}
          className="mt-10"
        >
          <Link
            href="/booking"
            className="
              inline-flex

              items-center

              gap-3

              font-medium

              text-[#62AAB5]

              transition-colors

              hover:text-white
            "
          >
            Reserve Experience

            <ArrowRight
              size={18}
              className="
                transition-transform

                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

      </div>

      {/* Animated Border */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        className="
          pointer-events-none

          absolute

          inset-0

          rounded-[34px]

          border

          border-[#62AAB5]/40
        "
      />
    </motion.article>
  );
}