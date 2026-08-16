"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCard from "./HeroFloatingCard";
import HeroScroll from "./HeroScroll";

interface HeroProps {
  settings: {
    businessName: string;
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    instagram: string | null;
    facebook: string | null;
    openingHours: string | null;
    heroTitle: string | null;
    heroSubtitle: string | null;
  };
}

export default function Hero({ settings }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  /*
   * ============================================================
   * MOUSE PHYSICS
   * ============================================================
   *
   * Mouse movement is converted into a spring MotionValue.
   * This gives the photography a subtle premium camera feel
   * instead of directly following the cursor.
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 55,
    damping: 24,
    mass: 0.7,
  });

  const y = useSpring(mouseY, {
    stiffness: 55,
    damping: 24,
    mass: 0.7,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let frame = 0;

    let nextX = 0;
    let nextY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      nextX =
        (event.clientX - window.innerWidth * 0.5) *
        0.004;

      nextY =
        (event.clientY - window.innerHeight * 0.5) *
        0.004;

      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        mouseX.set(nextX);
        mouseY.set(nextY);

        frame = 0;
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [
    mouseX,
    mouseY,
    prefersReducedMotion,
  ]);

  /*
   * ============================================================
   * SCROLL PHYSICS
   * ============================================================
   *
   * useScroll gives us the Hero's progress.
   *
   * useSpring then softens the raw scroll value so the
   * background and content feel physically connected to the
   * user's scrolling rather than mechanically attached to it.
   */

 const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});



  const smoothScroll = useSpring(
    scrollYProgress,
    {
      stiffness: 90,
      damping: 28,
      mass: 0.55,
      restDelta: 0.001,
    }
  );

  /*
   * Background remains visually stable while receiving
   * only a very subtle camera movement.
   */

  

 

  /*
   * Main content gently lifts as the user scrolls.
   */

  const contentY = useTransform(
  scrollYProgress,
  [0, 0.85],
  [0, -60]
);

const contentOpacity = useTransform(
  scrollYProgress,
  [0, 0.85],
  [1, 0]
);

  /*
   * Mobile should remain much more stable.
   */

  const mobileBackgroundY = useTransform(
    smoothScroll,
    [0, 1],
    [0, 18]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        bg-[#728558]
      "
    >
      {/* ========================================================
          CINEMATIC BACKGROUND
      ========================================================= */}

      <HeroBackground
        businessName={settings.businessName}
        x={x}
        y={y}
      />

      {/* ========================================================
          MAIN CONTENT
      ========================================================= */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-20
          flex
          min-h-[100svh]
          items-center
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-10
            px-5
            pb-24
            pt-28

            sm:px-6

            md:gap-14
            md:px-8
            md:pb-28
            md:pt-36

            lg:grid-cols-[1.08fr_.92fr]
            lg:gap-16

            xl:px-10
          "
        >
          {/* LEFT */}

          <HeroContent
            settings={settings}
          />

          {/* RIGHT */}

          <HeroFloatingCard />
        </div>
      </motion.div>

      {/* ========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <HeroScroll />
    </section>
  );
}