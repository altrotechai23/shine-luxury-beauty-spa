"use client";

import Image from "next/image";
import Link from "next/link";
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
  priority?: boolean;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function ServiceCard({
  service,
  priority = false,
}: Props) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[250px]
        w-[86vw]
        min-w-[86vw]
        max-w-[680px]
        shrink-0
        snap-start
        overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-[#0D252A]

        shadow-[0_20px_60px_rgba(0,0,0,.22)]

        sm:h-[270px]
        sm:w-[520px]
        sm:min-w-[520px]

        lg:h-[290px]
        lg:w-[620px]
        lg:min-w-[620px]

        xl:w-[680px]
        xl:min-w-[680px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative
          h-full
          w-[38%]
          shrink-0
          overflow-hidden

          sm:w-[40%]
        "
      >
        <Image
          src={service.image || FALLBACK_IMAGE}
          alt={service.title}
          fill
          priority={priority}
          sizes="
            (max-width: 640px) 33vw,
            220px
          "
          className="
            select-none
            object-cover

            transition-transform
            duration-700
            ease-out

            sm:group-hover:scale-[1.04]
          "
        />

        {/* =================================================
            IMAGE SHADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-transparent
            via-transparent
            to-[#0D252A]/70
          "
        />

        {/* =================================================
            CATEGORY
        ================================================= */}

        <div
          className="
            absolute
            left-3
            top-3

            sm:left-4
            sm:top-4
          "
        >
          <ServiceBadge>
            {service.category.name}
          </ServiceBadge>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          justify-between

          p-5

          sm:p-7

          lg:p-8
        "
      >
        <div className="min-w-0">
          {/* =================================================
              META
          ================================================= */}

          <div className="flex items-center justify-between gap-3">
            <span
              className="
                inline-flex
                min-w-0
                items-center
                gap-1.5

                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]

                text-white/45

                sm:text-xs
              "
            >
              <Clock3
                size={13}
                strokeWidth={1.7}
                className="shrink-0"
              />

              <span className="truncate">
                {service.duration} mins
              </span>
            </span>

            <span
              className="
                shrink-0

                text-[10px]
                uppercase
                tracking-[0.15em]

                text-[#62AAB5]/80

                sm:text-xs
              "
            >
              Signature
            </span>
          </div>

          {/* =================================================
              PRICE
          ================================================= */}

          <div className="mt-4 sm:mt-5">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]

                text-white/40

                sm:text-[10px]
              "
            >
              Starting from
            </p>

            <p
              className="
                mt-1

                font-heading
                text-2xl
                leading-none

                text-[#D7C0A0]

                sm:text-3xl
              "
            >
              R{service.price}
            </p>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h3
            className="
              mt-4

              line-clamp-1

              font-heading
              text-xl
              leading-tight

              text-white

              transition-colors
              duration-300

              sm:text-2xl
              lg:text-3xl

              sm:group-hover:text-[#62AAB5]
            "
          >
            {service.title}
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-2

              line-clamp-2

              text-xs
              leading-5

              text-white/55

              sm:mt-3
              sm:text-sm
              sm:leading-6
            "
          >
            {service.description}
          </p>
        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <Link
          href="/booking"
          className="
            mt-3

            inline-flex
            w-fit
            items-center
            gap-2

            text-xs
            font-medium

            text-[#62AAB5]

            transition-colors
            duration-300

            hover:text-white

            sm:mt-4
            sm:text-sm
          "
        >
          <span>Reserve Experience</span>

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300

              sm:group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* =====================================================
          PREMIUM EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[28px]

          border
          border-white/[0.04]

          transition-colors
          duration-300

          sm:group-hover:border-[#62AAB5]/30
        "
      />

      {/* =====================================================
          SMALL ATMOSPHERIC ACCENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0

          h-24
          w-24

          rounded-full

          bg-[#62AAB5]/5

          blur-[50px]
        "
      />
    </article>
  );
}