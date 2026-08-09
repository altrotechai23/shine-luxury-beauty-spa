"use client";

import { motion } from "framer-motion";
import {
  Award,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const stats = [
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
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8 + index * 0.15,
              duration: 0.7,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              group

              relative

              overflow-hidden

              rounded-[30px]

              border

              border-white/10

              bg-white/[0.07]

              p-7

              backdrop-blur-3xl

              shadow-[0_20px_60px_rgba(0,0,0,.25)]
            "
          >
            {/* Glass Highlight */}

            <div
              className="
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

            {/* Animated Glow */}

            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute

                -right-12

                -top-12

                h-32

                w-32

                rounded-full

                bg-[#62AAB5]/20

                blur-[70px]
              "
            />

            <motion.div
              whileHover={{
                rotate: 12,
                scale: 1.1,
              }}
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
              "
            >
              <Icon size={22} />
            </motion.div>

            <motion.h3
              whileHover={{
                scale: 1.05,
              }}
              className="
                relative

                mt-6

                font-heading

                text-4xl

                font-semibold

                text-[#D7C0A0]
              "
            >
              {stat.number}
            </motion.h3>

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

            {/* Bottom Accent */}

            <motion.div
              whileHover={{
                scaleX: 1,
              }}
              initial={{
                scaleX: 0,
              }}
              className="
                absolute

                bottom-0

                left-0

                h-[2px]

                w-full

                origin-left

                bg-gradient-to-r

                from-[#62AAB5]

                via-[#D7C0A0]

                to-transparent
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}