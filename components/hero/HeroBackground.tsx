"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

interface HeroBackgroundProps {
  businessName: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2200&auto=format&fit=crop";

export default function HeroBackground({
  businessName,
  x,
  y,
}: HeroBackgroundProps) {
  /*
   * ============================================================
   * MOUSE PARALLAX
   * ============================================================
   */

  const imageX = useTransform(x, (value) => value * 0.25);
  const imageY = useTransform(y, (value) => value * 0.18);

  const lightX = useTransform(
    x,
    (value) => value * -0.45
  );

  const lightY = useTransform(
    y,
    (value) => value * -0.45
  );

  return (
    <>
      {/* ========================================================
          FIXED CINEMATIC BACKGROUND
          ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* ------------------------------------------------------
            PHOTOGRAPHY

            IMPORTANT:
            The image is positioned HIGHER so the woman's
            face remains visible.
        ------------------------------------------------------ */}

        <motion.div
          className="
            absolute
            inset-[-2%]
            will-change-transform
          "
          style={{
            x: imageX,
            y: imageY,
          }}
        >
          <Image
            src={BACKGROUND_IMAGE}
            alt={businessName}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="
              select-none
              object-cover

              /* Desktop: show the face */
              object-[50%_18%]

              /* Mobile: slightly higher */
              max-md:object-[50%_15%]
            "
          />
        </motion.div>

        {/* ======================================================
            PRIMARY BRAND COLOR WASH

            #728558 = primary
            #58A6AD = secondary
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#728558]/80
            via-[#728558]/42
            to-[#58A6AD]/35
          "
        />

        {/* ======================================================
            DARK LEFT GRADIENT

            Keeps the white heading readable.
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/38
            to-transparent

            lg:from-black/78
            lg:via-black/32
            lg:to-transparent
          "
        />

        {/* ======================================================
            BOTTOM DARK/BRAND FADE
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-transparent
            to-black/15
          "
        />

        {/* ======================================================
            TEAL ATMOSPHERE
        ====================================================== */}

        <motion.div
          className="
            absolute
            -left-56
            -top-48
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#58A6AD]/20
            blur-[150px]
          "
          style={{
            x,
            y,
            willChange: "transform",
          }}
        />

        {/* ======================================================
            PRIMARY GREEN ATMOSPHERE
        ====================================================== */}

        <motion.div
          className="
            absolute
            -right-64
            -top-32
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#728558]/25
            blur-[160px]
          "
          style={{
            x: lightX,
            y: lightY,
            willChange: "transform",
          }}
        />

        {/* ======================================================
            WHITE LUXURY LIGHT
        ====================================================== */}

        <motion.div
          className="
            absolute
            right-[8%]
            top-[16%]
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-[110px]
          "
          animate={{
            opacity: [0.15, 0.28, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ======================================================
            SECONDARY TEAL BOTTOM GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            bottom-[-320px]
            left-1/2
            h-[800px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-[#58A6AD]/18
            blur-[170px]
          "
          animate={{
            opacity: [0.15, 0.26, 0.15],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ======================================================
            SUBTLE FILM GRAIN
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            [background-size:20px_20px]
          "
        />

        {/* ======================================================
            CINEMATIC VIGNETTE
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            shadow-[inset_0_0_260px_rgba(0,0,0,0.55)]
          "
        />

        {/* ======================================================
            BOTTOM BRAND FADE

            Primary color #728558
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[38%]
            bg-gradient-to-t
            from-[#728558]
            via-[#728558]/35
            to-transparent
          "
        />
      </div>
    </>
  );
}