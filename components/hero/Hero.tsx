"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFloatingCard from "./HeroFloatingCard";
import HeroLights from "./HeroLights";
import HeroParticles from "./HeroParticles";
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

  /*
   * -------------------------------------------------------
   * Mouse Parallax
   * -------------------------------------------------------
   *
   * Uses requestAnimationFrame so mousemove does not
   * continuously trigger React renders.
   *
   * Disabled automatically on touch/coarse-pointer devices.
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      nextX = (event.clientX - window.innerWidth * 0.5) * 0.008;
      nextY = (event.clientY - window.innerHeight * 0.5) * 0.008;

      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        mouseX.set(nextX);
        mouseY.set(nextY);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [mouseX, mouseY]);

  /*
   * -------------------------------------------------------
   * Scroll Parallax
   * -------------------------------------------------------
   */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );

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

  return (
    <section
      ref={heroRef}
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#081B1F]
      "
    >
      {/* -------------------------------------------------------
          Cinematic Background
      -------------------------------------------------------- */}

      <HeroBackground
        businessName={settings.businessName}
        x={x}
        y={y}
        scale={backgroundScale}
        backgroundY={backgroundY}
      />

      {/* -------------------------------------------------------
          Ambient Lights
      -------------------------------------------------------- */}

      {/* <HeroLights x={x} y={y} /> */}

      {/* -------------------------------------------------------
          Floating Particles
      -------------------------------------------------------- */}

      {/* <HeroParticles /> */}

      {/* -------------------------------------------------------
          Main Content
      -------------------------------------------------------- */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-20
          flex
          min-h-screen
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
            gap-12
            px-6
            pb-24
            pt-28
            md:gap-16
            md:pb-28
            md:pt-36
            lg:grid-cols-2
          "
        >
          {/* Left Content */}
          <HeroContent settings={settings} />

          {/* Right Floating Card */}
          <HeroFloatingCard />
        </div>
      </motion.div>

      {/* -------------------------------------------------------
          Scroll Indicator
      -------------------------------------------------------- */}

      <HeroScroll />
    </section>
  );
}

