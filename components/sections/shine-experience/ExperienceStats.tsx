"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Users,
  Award,
  Sparkles,
  Heart,
} from "lucide-react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
    color: "bg-[#62AAB5]",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Award,
    color: "bg-[#D7C0A0]",
  },
  {
    value: 5,
    suffix: "★",
    label: "Luxury Rating",
    icon: Sparkles,
    color: "bg-[#62AAB5]",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    icon: Heart,
    color: "bg-[#D7C0A0]",
  },
];

export default function ExperienceStats() {
  return (
    <div
      className="
        grid

        gap-6

        sm:grid-cols-2
      "
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
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
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              group
              relative
              overflow-hidden

              rounded-[28px]

              border
              border-white/10

              bg-white/5

              p-7

              backdrop-blur-3xl

              shadow-[0_25px_70px_rgba(0,0,0,.25)]
            "
          >
            {/* Hover Glow */}

            <div
              className="
                absolute

                -right-16
                -top-16

                h-40
                w-40

                rounded-full

                bg-[#62AAB5]/10

                blur-[90px]

                opacity-0

                transition

                duration-500

                group-hover:opacity-100
              "
            />

            {/* Icon */}

            <div
              className={`
                ${stat.color}

                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                shadow-lg
              `}
            >
              <Icon
                size={24}
                className="text-white"
              />
            </div>

            {/* Number */}

            <h3
              className="
                mt-8

                font-heading

                text-5xl

                text-white
              "
            >
              <CountUp
                end={stat.value}
                duration={2.5}
              />

              {stat.suffix}
            </h3>

            {/* Label */}

            <p
              className="
                mt-3

                uppercase

                tracking-[0.28em]

                text-sm

                text-white/60
              "
            >
              {stat.label}
            </p>

            {/* Bottom Accent */}

            <motion.div
              whileHover={{
                scaleX: 1,
              }}
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

                to-[#D7C0A0]

                transition-transform

                duration-500

                group-hover:scale-x-100
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}