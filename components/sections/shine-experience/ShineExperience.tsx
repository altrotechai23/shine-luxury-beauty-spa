"use client";

import { motion } from "framer-motion";

import ExperienceBackground from "./ExperienceBackground";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceContent from "./ExperienceContent";
import ExperienceImage from "./ExperienceImage";
import ExperienceStats from "./ExperienceStats";
import ExperienceCTA from "./ExperienceCTA";

export default function ShineExperience() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#081B1F]
        py-32
      "
    >
      {/* Background Effects */}

      <ExperienceBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >
        {/* Section Header */}

        <ExperienceHeader />

        {/* Main Content */}

        <div
          className="
            mt-24
            grid
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
          {/* Story */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
          >
            <ExperienceContent />

            <div className="mt-16">
              <ExperienceStats />
            </div>

            <div className="mt-14">
              <ExperienceCTA />
            </div>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
              delay: .2,
            }}
          >
            <ExperienceImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}