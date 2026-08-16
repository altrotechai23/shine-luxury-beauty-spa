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
        min-w-[88vw]
        shrink-0
        snap-center

        overflow-hidden

        rounded-[30px]

        border
        border-white/10

        bg-[#10282C]

        shadow-[0_20px_60px_rgba(0,0,0,.28)]

        sm:min-w-[620px]

        md:min-w-[700px]

        lg:min-w-[760px]

        xl:min-w-[820px]

        [contain:layout_paint]

        transition-transform
        duration-300
        ease-out

        lg:hover:-translate-y-2
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative
          h-[260px]
          w-[42%]
          shrink-0
          overflow-hidden

          sm:h-[300px]

          md:h-[320px]

          lg:h-[340px]
        "
      >
        <Image
          src={service.image || FALLBACK_IMAGE}
          alt={service.title}
          fill
          priority={priority}
          quality={78}
          sizes="
            (max-width: 640px) 38vw,
            340px
          "
          className="
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.04]
          "
        />

        {/* Image gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-transparent
            via-transparent
            to-[#10282C]/90
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4

            sm:left-5
            sm:top-5
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
          justify-center

          px-6
          py-7

          sm:px-8
          sm:py-8

          lg:px-10
        "
      >
        {/* Top row */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Starting From
            </p>

            <p
              className="
                mt-1
                font-heading
                text-3xl
                text-[#D7C0A0]

                sm:text-4xl
              "
            >
              R{service.price}
            </p>
          </div>

          {/* Duration */}

          <ServiceBadge
            icon={<Clock3 size={13} />}
          >
            {service.duration} mins
          </ServiceBadge>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6

            font-heading

            text-3xl
            leading-[1.05]

            text-white

            sm:text-4xl

            transition-colors
            duration-300

            lg:group-hover:text-[#62AAB5]
          "
        >
          {service.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            line-clamp-2

            max-w-xl

            text-sm
            leading-7

            text-white/55

            sm:text-base
          "
        >
          {service.description}
        </p>

        {/* Bottom CTA */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <Link
            href="/booking"
            className="
              inline-flex
              min-h-11
              items-center
              gap-3

              rounded-full

              bg-[#62AAB5]

              px-5
              py-2.5

              text-sm
              font-semibold
              text-white

              shadow-[0_10px_30px_rgba(98,170,181,.20)]

              transition-all
              duration-300

              hover:bg-[#71B7C1]

              active:scale-[0.97]
            "
          >
            Reserve Experience

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* Decorative indicator */}

          <div
            aria-hidden="true"
            className="
              hidden
              h-10
              w-10
              items-center
              justify-center
              rounded-full

              border
              border-white/10

              bg-white/[0.04]

              text-[#62AAB5]

              sm:flex
            "
          >
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Premium edge */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[30px]

          border
          border-white/[0.04]
        "
      />
    </article>
  );
}