"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { GalleryImage } from "@prisma/client";

interface Props {
  images: GalleryImage[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop";

const categories = [
  "All",
];

export default function GalleryPage({ images }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /*
  ---------------------------------------------------------
  Categories
  ---------------------------------------------------------
  */

  const availableCategories = useMemo(() => {
    const dynamicCategories = images
      .map((image) => image.category)
      .filter(
        (category): category is string =>
          Boolean(category && category.trim())
      );

    return [
      ...categories,
      ...Array.from(new Set(dynamicCategories)),
    ];
  }, [images]);

  /*
  ---------------------------------------------------------
  Filtering
  ---------------------------------------------------------
  */

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return images;
    }

    return images.filter(
      (image) => image.category === activeCategory
    );
  }, [images, activeCategory]);

  /*
  ---------------------------------------------------------
  Selected image
  ---------------------------------------------------------
  */

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  /*
  ---------------------------------------------------------
  Open / close
  ---------------------------------------------------------
  */

  function openLightbox(index: number) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  /*
  ---------------------------------------------------------
  Navigation
  ---------------------------------------------------------
  */

  function nextImage() {
    if (!filteredImages.length) return;

    setSelectedIndex((current) => {
      if (current === null) return 0;

      return current === filteredImages.length - 1
        ? 0
        : current + 1;
    });
  }

  function previousImage() {
    if (!filteredImages.length) return;

    setSelectedIndex((current) => {
      if (current === null) return 0;

      return current === 0
        ? filteredImages.length - 1
        : current - 1;
    });
  }

  /*
  ---------------------------------------------------------
  Keyboard controls
  ---------------------------------------------------------
  */

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex, filteredImages.length]);

  /*
  ---------------------------------------------------------
  Body lock
  ---------------------------------------------------------
  */

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  /*
  ---------------------------------------------------------
  Empty state
  ---------------------------------------------------------
  */

  if (images.length === 0) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <Background />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              w-full
              max-w-2xl
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              px-8
              py-24
              text-center
              shadow-[0_40px_120px_rgba(0,0,0,.35)]
              backdrop-blur-3xl
            "
          >
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#62AAB5]/20
                bg-[#62AAB5]/10
              "
            >
              <Camera
                size={34}
                className="text-[#62AAB5]"
              />
            </div>

            <p
              className="
                mt-8
                text-xs
                uppercase
                tracking-[0.4em]
                text-[#D7C0A0]
              "
            >
              SHINE Gallery
            </p>

            <h1
              className="
                mt-5
                font-heading
                text-4xl
                text-white
                sm:text-5xl
              "
            >
              Something beautiful
              <br />
              is coming.
            </h1>

            <p className="mx-auto mt-6 max-w-md leading-8 text-white/50">
              Our latest beauty transformations will
              appear here soon.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pb-24">
        <Background />

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 sm:px-6 sm:pt-36">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-5
                py-2.5
                backdrop-blur-2xl
              "
            >
              <Sparkles
                size={15}
                className="text-[#62AAB5]"
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.38em]
                  text-white/70
                "
              >
                SHINE Visual Journal
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                font-heading
                text-[clamp(3.5rem,11vw,8rem)]
                font-medium
                leading-[0.86]
                tracking-[-0.045em]
                text-white
              "
            >
              Beauty
              <br />

              <span className="text-[#D7C0A0]">
                in motion.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white/55
                sm:text-lg
                sm:leading-9
              "
            >
              Explore the artistry, detail and
              transformations created at SHINE Luxury
              Beauty Spa.
            </p>
          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <Grid3X3
                size={15}
                className="text-[#62AAB5]"
              />

              <span className="text-sm text-white/60">
                {images.length}{" "}
                {images.length === 1
                  ? "transformation"
                  : "transformations"}
              </span>
            </div>

            <div
              className="
                rounded-full
                border
                border-[#D7C0A0]/10
                bg-[#D7C0A0]/5
                px-5
                py-3
                text-sm
                text-[#D7C0A0]/80
                backdrop-blur-xl
              "
            >
              Cape Town
            </div>
          </motion.div>

          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          {availableCategories.length > 1 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                mt-12
                flex
                gap-2
                overflow-x-auto
                pb-2
                scrollbar-none
              "
            >
              {availableCategories.map((category) => {
                const active =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
                    className={`
                      relative
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      px-5
                      py-3
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-[#62AAB5]/40 bg-[#62AAB5]/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/20 hover:text-white/80"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="gallery-category"
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-[#62AAB5]/10
                        "
                      />
                    )}

                    <span className="relative z-10">
                      {category}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* =================================================
            GALLERY
        ================================================= */}

        <div className="relative z-10 mx-auto mt-16 max-w-7xl px-5 sm:px-6 sm:mt-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="columns-1 gap-5 sm:columns-2 lg:columns-3"
            >
              {filteredImages.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-20
                text-center
              "
            >
              <p className="text-white/50">
                No transformations in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#02090B]/95
              p-3
              backdrop-blur-2xl
              sm:p-6
            "
            onClick={closeLightbox}
          >
            {/* =================================================
                BACKGROUND IMAGE BLUR
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src={
                  selectedImage.image ||
                  FALLBACK_IMAGE
                }
                alt=""
                fill
                className="
                  scale-125
                  object-cover
                  opacity-20
                  blur-[80px]
                "
              />

              <div className="absolute inset-0 bg-[#02090B]/80" />
            </div>

            {/* =================================================
                CLOSE
            ================================================= */}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
                sm:right-7
                sm:top-7
              "
            >
              <X size={20} />
            </button>

            {/* =================================================
                COUNTER
            ================================================= */}

            <div
              className="
                absolute
                left-5
                top-5
                z-30
                rounded-full
                border
                border-white/10
                bg-black/30
                px-4
                py-2
                text-xs
                text-white/60
                backdrop-blur-xl
                sm:left-7
                sm:top-7
              "
            >
              {String(selectedIndex + 1).padStart(2, "0")}
              {" / "}
              {String(filteredImages.length).padStart(
                2,
                "0"
              )}
            </div>

            {/* =================================================
                IMAGE CONTAINER
            ================================================= */}

            <motion.div
              key={selectedImage.id}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                relative
                z-20
                flex
                h-[82vh]
                w-full
                max-w-6xl
                items-center
                justify-center
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  shadow-[0_40px_160px_rgba(0,0,0,.7)]
                  sm:rounded-[40px]
                "
              >
                <Image
                  src={
                    selectedImage.image ||
                    FALLBACK_IMAGE
                  }
                  alt={
                    selectedImage.title ||
                    "SHINE Beauty Gallery"
                  }
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />

                {/* Bottom information */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/40
                    to-transparent
                    p-6
                    pt-20
                    sm:p-10
                    sm:pt-28
                  "
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-[#62AAB5]/20
                          bg-[#62AAB5]/10
                          px-4
                          py-2
                          text-[10px]
                          uppercase
                          tracking-[0.3em]
                          text-[#62AAB5]
                          backdrop-blur-xl
                        "
                      >
                        {selectedImage.category ||
                          "Luxury Beauty"}
                      </span>

                      <h2
                        className="
                          mt-4
                          font-heading
                          text-3xl
                          text-white
                          sm:text-5xl
                        "
                      >
                        {selectedImage.title ||
                          "Luxury Transformation"}
                      </h2>
                    </div>

                    <button
                      type="button"
                      className="
                        hidden
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-5
                        py-3
                        text-xs
                        text-white/70
                        backdrop-blur-xl
                        sm:inline-flex
                      "
                    >
                      <Maximize2 size={14} />

                      View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                PREVIOUS
            ================================================= */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-3
                top-1/2
                z-30
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
                sm:left-7
                sm:h-14
                sm:w-14
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* =================================================
                NEXT
            ================================================= */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="
                absolute
                right-3
                top-1/2
                z-30
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
                sm:right-7
                sm:h-14
                sm:w-14
              "
            >
              <ChevronRight size={22} />
            </button>

            {/* =================================================
                MOBILE HINT
            ================================================= */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-30
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-black/30
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/40
                backdrop-blur-xl
                sm:hidden
              "
            >
              Swipe to explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/*
=========================================================
GALLERY CARD
=========================================================
*/

function GalleryCard({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        delay: Math.min(index * 0.06, 0.45),
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      onClick={onClick}
      className="
        group
        relative
        mb-5
        block
        w-full
        break-inside-avoid
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.03]
        text-left
        shadow-[0_20px_80px_rgba(0,0,0,.25)]
        transition-shadow
        duration-700
        hover:shadow-[0_30px_100px_rgba(0,0,0,.45)]
        sm:mb-6
        sm:rounded-[36px]
      "
    >
      {/* Image */}

      <Image
        src={image.image || FALLBACK_IMAGE}
        alt={
          image.title ||
          "SHINE Luxury Beauty transformation"
        }
        width={1000}
        height={1300}
        className="
          h-auto
          w-full
          object-cover
          transition-transform
          duration-[1800ms]
          ease-out
          group-hover:scale-[1.07]
        "
      />

      {/* Dark overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#02090B]
          via-[#02090B]/20
          to-transparent
          opacity-60
          transition
          duration-700
          group-hover:opacity-90
        "
      />

      {/* Top badge */}

      <div
        className="
          absolute
          left-5
          top-5
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-black/20
          px-3
          py-2
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/70
          opacity-0
          backdrop-blur-xl
          transition
          duration-500
          group-hover:opacity-100
        "
      >
        <Maximize2 size={11} />

        Explore
      </div>

      {/* Content */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
          sm:p-7
        "
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-[#62AAB5]/20
            bg-[#62AAB5]/10
            px-3
            py-1.5
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#8CCBD3]
            backdrop-blur-xl
          "
        >
          {image.category || "Luxury Beauty"}
        </span>

        <h2
          className="
            mt-4
            font-heading
            text-2xl
            leading-tight
            text-white
            transition
            duration-500
            group-hover:text-[#D7C0A0]
            sm:text-3xl
          "
        >
          {image.title ||
            "Luxury Transformation"}
        </h2>

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/0
            transition
            duration-500
            group-hover:text-white/50
          "
        >
          Open experience

          <ArrowRight size={12} />
        </div>
      </div>
    </motion.button>
  );
}

/*
=========================================================
BACKGROUND
=========================================================
*/

function Background() {
  return (
    <>
      {/* Base */}

      <div className="absolute inset-0 bg-[#061519]" />

      {/* Cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[300px]
          top-[5%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#62AAB5]/10
          blur-[180px]
        "
      />

      {/* Gold glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[30%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D7C0A0]/10
          blur-[180px]
        "
      />

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-400px]
          left-1/2
          h-[800px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#62AAB5]/5
          blur-[180px]
        "
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,#061519_100%)]
          opacity-60
        "
      />
    </>
  );
}