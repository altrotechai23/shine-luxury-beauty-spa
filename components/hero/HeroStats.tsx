"use client";

import {
  Award,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface Stat {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
}

const STATS: readonly Stat[] = [
  {
    icon: Award,
    number: "5★",
    title: "Luxury Rating",
    subtitle: "Loved by our guests",
  },
  {
    icon: HeartHandshake,
    number: "1000+",
    title: "Happy Clients",
    subtitle: "Beauty experiences delivered",
  },
  {
    icon: Sparkles,
    number: "Premium",
    title: "Luxury Treatments",
    subtitle: "Tailored for every guest",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        mt-10

        grid
        grid-cols-1
        gap-3

        sm:mt-14
        sm:grid-cols-3
        sm:gap-4
      "
    >
      {STATS.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              group
              relative
              overflow-hidden

              rounded-[24px]

              border
              border-white/15

              bg-white/[0.09]

              p-5

              shadow-[0_18px_50px_rgba(0,0,0,.16)]

              backdrop-blur-2xl

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-white/[0.13]

              sm:rounded-[28px]
              sm:p-6
            "
          >
            {/* Top glass reflection */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-20

                bg-gradient-to-b
                from-white/12
                to-transparent
              "
            />

            {/* Ambient glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-28
                w-28

                rounded-full

                bg-[#58A6AD]/20

                blur-[50px]

                opacity-70

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />

            {/* Icon */}

            <div
              className="
                relative

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#728558]
                to-[#58A6AD]

                text-white

                shadow-[0_10px_25px_rgba(88,166,173,.22)]

                transition-transform
                duration-300

                group-hover:scale-105
              "
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            {/* Number */}

            <h3
              className="
                relative
                mt-5

                font-heading
                text-3xl
                font-semibold
                leading-none

                text-white
              "
            >
              {stat.number}
            </h3>

            {/* Title */}

            <p
              className="
                relative
                mt-3

                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]

                text-white/85
              "
            >
              {stat.title}
            </p>

            {/* Subtitle */}

            <p
              className="
                relative
                mt-2

                text-xs
                leading-5

                text-white/55
              "
            >
              {stat.subtitle}
            </p>

            {/* Bottom accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0

                h-[2px]
                w-full

                origin-left
                scale-x-0

                bg-gradient-to-r
                from-[#728558]
                via-[#58A6AD]
                to-transparent

                transition-transform
                duration-500

                group-hover:scale-x-100
              "
            />
          </div>
        );
      })}
    </div>
  );
}