"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
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

export default function Hero({
  settings,
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  /*
  -----------------------------------------------------
  Mouse Physics
  -----------------------------------------------------
  */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      mouseX.set((event.clientX - cx) * 0.012);
      mouseY.set((event.clientY - cy) * 0.012);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  /*
  -----------------------------------------------------
  Scroll Physics
  -----------------------------------------------------
  */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.15]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 160]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -90]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, 0]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#081B1F]
      "
    >
      {/* Background */}
      <HeroBackground
        businessName={settings.businessName}
        x={x}
        y={y}
        scale={backgroundScale}
        backgroundY={backgroundY}
      />

      {/* Ambient Lights */}
      <HeroLights
        x={x}
        y={y}
      />

      {/* Floating Particles */}
      <HeroParticles />

      {/* Hero Content */}
      <motion.div
        style={{
          y: contentY,
          opacity,
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
            gap-16
            px-6
            pt-28
            md:pt-36

            lg:grid-cols-2
          "
        >
          {/* Left */}
          <HeroContent
            settings={settings}
          />

          {/* Right */}
          <HeroFloatingCard />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <HeroScroll />
    </section>
  );
}