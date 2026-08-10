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
        mt-16
        grid
        gap-5
        sm:grid-cols-3
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
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.07]
              p-7
              shadow-[0_16px_45px_rgba(0,0,0,.2)]
              backdrop-blur-xl
              transition-transform
              duration-300
              ease-out
              hover:-translate-y-2
              hover:scale-[1.01]
            "
          >
            {/* ============================================================
                Glass Highlight
                ============================================================ */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[30px]
                bg-gradient-to-b
                from-white/10
                via-transparent
                to-transparent
                opacity-70
              "
            />

            {/* ============================================================
                Static Ambient Glow
                ============================================================ */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                bg-[#62AAB5]/15
                blur-[55px]
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* ============================================================
                Icon
                ============================================================ */}

            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[#62AAB5]
                to-[#4D8E99]
                text-white
                shadow-lg
                transition-transform
                duration-300
                ease-out
                group-hover:rotate-6
                group-hover:scale-105
              "
            >
              <Icon
                size={22}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>

            {/* ============================================================
                Number
                ============================================================ */}

            <h3
              className="
                relative
                mt-6
                font-heading
                text-4xl
                font-semibold
                text-[#D7C0A0]
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
              "
            >
              {stat.number}
            </h3>

            {/* ============================================================
                Title
                ============================================================ */}

            <p
              className="
                relative
                mt-3
                text-sm
                uppercase
                tracking-[0.28em]
                text-white/90
              "
            >
              {stat.title}
            </p>

            {/* ============================================================
                Subtitle
                ============================================================ */}

            <p
              className="
                relative
                mt-2
                text-sm
                leading-6
                text-white/60
              "
            >
              {stat.subtitle}
            </p>

            {/* ============================================================
                Bottom Accent
                ============================================================ */}

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
                from-[#62AAB5]
                via-[#D7C0A0]
                to-transparent
                transition-transform
                duration-300
                ease-out
                group-hover:scale-x-100
              "
            />
          </div>
        );
      })}
    </div>
  );
}