"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Star,
  Users,
  Heart,
  Repeat,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: 4.9,
    suffix: "★",
    title: "Google Rating",
    description: "Average rating from our happy clients.",
    color: "#D7C0A0",
    decimal: true,
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    title: "Happy Clients",
    description: "Luxury beauty experiences delivered.",
    color: "#62AAB5",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    title: "Would Recommend",
    description: "Clients recommend Shine to friends.",
    color: "#D7C0A0",
  },
  {
    icon: Repeat,
    value: 87,
    suffix: "%",
    title: "Returning Clients",
    description: "Guests who continue trusting Shine.",
    color: "#62AAB5",
  },
];

export default function TestimonialsStats() {
  return (
    <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              group
              relative
              overflow-hidden

              rounded-[34px]

              border
              border-white/10

              bg-white/5

              p-8

              backdrop-blur-3xl

              shadow-[0_25px_80px_rgba(0,0,0,.30)]
            "
          >
            {/* Glass highlight */}

            <div
              className="
                absolute

                inset-x-0
                top-0

                h-px

                bg-gradient-to-r

                from-transparent

                via-white/60

                to-transparent
              "
            />

            {/* Glow */}

            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[90px] opacity-30 group-hover:opacity-50 transition"
              style={{
                background: item.color,
              }}
            />

            <div className="relative z-10">
              {/* Icon */}

              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: `${item.color}20`,
                }}
              >
                <Icon
                  size={28}
                  style={{
                    color: item.color,
                  }}
                />
              </div>

              {/* Number */}

              <div className="mt-8 font-heading text-5xl text-white">
                <CountUp
                  end={item.value}
                  duration={2.2}
                  decimals={item.decimal ? 1 : 0}
                />

                {item.suffix}
              </div>

              {/* Title */}

              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-white/60">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}