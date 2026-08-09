"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Gem,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Luxury Treatments",
    description:
      "Every treatment is tailored using premium products and modern beauty techniques.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    description:
      "Every guest receives individual attention in a calm and welcoming environment.",
  },
  {
    icon: Gem,
    title: "Premium Experience",
    description:
      "From arrival to departure, every detail has been designed around elegance and comfort.",
  },
];

export default function ExperienceContent() {
  return (
    <div className="relative">

      {/* Small Label */}

      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .6,
        }}
        className="
          text-sm

          uppercase

          tracking-[0.4em]

          text-[#62AAB5]
        "
      >
        Why Choose Shine
      </motion.p>

      {/* Heading */}

      <motion.h3
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .7,
          delay: .1,
        }}
        className="
          mt-6

          font-heading

          text-5xl

          leading-tight

          text-white

          lg:text-6xl
        "
      >
        Where Luxury Meets
        <br />

        <span className="text-[#D7C0A0]">
          Confidence
        </span>
      </motion.h3>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .7,
          delay: .2,
        }}
        className="
          mt-8

          max-w-xl

          text-lg

          leading-9

          text-white/70
        "
      >
        At Shine Luxury Beauty Spa we believe beauty is
        an experience, not simply a service.

        Every appointment is thoughtfully crafted to help
        you relax, restore your confidence and leave
        feeling your absolute best.
      </motion.p>

      {/* Features */}

      <div className="mt-14 space-y-8">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (

            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                x: 8,
              }}
              className="
                flex

                gap-5
              "
            >

              {/* Icon */}

              <div
                className="
                  flex

                  h-16

                  w-16

                  shrink-0

                  items-center

                  justify-center

                  rounded-2xl

                  bg-gradient-to-br

                  from-[#62AAB5]

                  to-[#4A909B]

                  shadow-[0_15px_35px_rgba(98,170,181,.35)]
                "
              >
                <Icon
                  size={28}
                  className="text-white"
                />
              </div>

              {/* Text */}

              <div>

                <h4
                  className="
                    text-2xl

                    font-heading

                    text-white
                  "
                >
                  {feature.title}
                </h4>

                <p
                  className="
                    mt-3

                    leading-8

                    text-white/65
                  "
                >
                  {feature.description}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Luxury Promise */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: .6,
        }}
        className="
          mt-14

          rounded-[30px]

          border

          border-white/10

          bg-white/5

          p-8

          backdrop-blur-3xl
        "
      >

        <div className="flex gap-4">

          <CheckCircle2
            size={28}
            className="
              mt-1
              text-[#62AAB5]
            "
          />

          <div>

            <h4
              className="
                text-xl

                font-heading

                text-white
              "
            >
              Our Promise
            </h4>

            <p
              className="
                mt-3

                leading-8

                text-white/70
              "
            >
              Every guest deserves exceptional service,
              luxurious surroundings and results that
              inspire confidence.
            </p>

          </div>

        </div>

      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: .8,
        }}
        className="mt-14"
      >

        <Link
          href="/about"
          className="
            group

            inline-flex

            items-center

            gap-4

            rounded-full

            bg-[#62AAB5]

            px-8

            py-5

            font-semibold

            text-white

            shadow-[0_20px_60px_rgba(98,170,181,.35)]

            transition-all

            hover:scale-[1.03]
          "
        >
          Discover Our Story

          <ArrowRight
            size={20}
            className="
              transition-transform

              duration-300

              group-hover:translate-x-2
            "
          />
        </Link>

      </motion.div>

    </div>
  );
}