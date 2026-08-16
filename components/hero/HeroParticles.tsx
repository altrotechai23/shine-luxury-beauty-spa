"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

interface Particle {
  id: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

const PARTICLES: readonly Particle[] = [
  {
    id: "particle-01",
    left: 5,
    size: 5,
    duration: 12,
    delay: 0,
    drift: 15,
  },
  {
    id: "particle-02",
    left: 12,
    size: 7,
    duration: 15,
    delay: 2,
    drift: -18,
  },
  {
    id: "particle-03",
    left: 20,
    size: 4,
    duration: 11,
    delay: 1,
    drift: 12,
  },
  {
    id: "particle-04",
    left: 28,
    size: 6,
    duration: 14,
    delay: 4,
    drift: -10,
  },
  {
    id: "particle-05",
    left: 35,
    size: 5,
    duration: 10,
    delay: 3,
    drift: 18,
  },
  {
    id: "particle-06",
    left: 43,
    size: 6,
    duration: 13,
    delay: 5,
    drift: -12,
  },
  {
    id: "particle-07",
    left: 50,
    size: 4,
    duration: 16,
    delay: 2,
    drift: 20,
  },
  {
    id: "particle-08",
    left: 58,
    size: 7,
    duration: 18,
    delay: 6,
    drift: -20,
  },
  {
    id: "particle-09",
    left: 66,
    size: 4,
    duration: 12,
    delay: 4,
    drift: 14,
  },
  {
    id: "particle-10",
    left: 74,
    size: 6,
    duration: 15,
    delay: 7,
    drift: -16,
  },
  {
    id: "particle-11",
    left: 82,
    size: 5,
    duration: 13,
    delay: 1,
    drift: 10,
  },
  {
    id: "particle-12",
    left: 90,
    size: 6,
    duration: 17,
    delay: 5,
    drift: -15,
  },
];

export default function HeroParticles() {
  const prefersReducedMotion =
    useReducedMotion();

  return (
    <>
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          aria-hidden="true"
          className="
            absolute
            rounded-full

            bg-white/30

            shadow-[0_0_10px_rgba(255,255,255,.2)]
          "
          style={{
            left: `${particle.left}%`,
            bottom: "-30px",
            width: particle.size,
            height: particle.size,
            willChange:
              "transform, opacity",
          }}
          animate={
            prefersReducedMotion
              ? {
                  opacity: 0.15,
                }
              : {
                  y: [0, -260],
                  x: [
                    0,
                    particle.drift,
                    0,
                  ],
                  opacity: [
                    0,
                    0.4,
                    0,
                  ],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration:
                    particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />
      ))}
    </>
  );
}