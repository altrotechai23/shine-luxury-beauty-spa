"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export interface GalleryViewerImage {
  id: string;
  image: string | null;
  title: string | null;
  category: string | null;
}

interface Props {
  images: GalleryViewerImage[];
  activeIndex: number;
  onClose: () => void;
}

export default function GalleryViewer({
  images,
  activeIndex,
  onClose,
}: Props) {
  const [index, setIndex] = useState(activeIndex);
  const [direction, setDirection] = useState(0);

  const dragY = useMotionValue(0);

  const backdropOpacity = useTransform(
    dragY,
    [-300, 0, 300],
    [0.35, 1, 0.35]
  );

  useEffect(() => {
    setIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [index]);

  const next = () => {
    if (images.length <= 1) return;

    setDirection(1);

    setIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    if (images.length <= 1) return;

    setDirection(-1);

    setIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const { offset, velocity } = info;

    const swipePower =
      Math.abs(offset.x) * 0.6 +
      Math.abs(velocity.x) * 0.4;

    const verticalDistance = Math.abs(offset.y);

    /*
     * Vertical swipe
     *
     * Swipe down far enough to dismiss the viewer.
     */
    if (
      verticalDistance > 140 &&
      Math.abs(offset.y) > Math.abs(offset.x)
    ) {
      onClose();
      return;
    }

    /*
     * Horizontal swipe
     */
    if (swipePower > 100) {
      if (offset.x < 0) {
        next();
      } else {
        previous();
      }
    }
  };

  const currentImage = images[index];

  if (!currentImage) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.6,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.6,
    }),
  };

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-[#020708]/95
        backdrop-blur-xl
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          opacity: backdropOpacity,
        }}
      />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="
          absolute
          right-5
          top-5
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/10
          text-white
          backdrop-blur-xl
          transition
          hover:bg-white/20
          active:scale-90
        "
      >
        <X size={21} />
      </button>

      {/* Counter */}
      <div
        className="
          absolute
          left-5
          top-6
          z-50
          rounded-full
          border
          border-white/10
          bg-white/10
          px-4
          py-2
          text-xs
          font-medium
          tracking-[0.2em]
          text-white/80
          backdrop-blur-xl
        "
      >
        {String(index + 1).padStart(2, "0")}
        <span className="mx-2 text-white/30">/</span>
        {String(images.length).padStart(2, "0")}
      </div>

      {/* Image Stage */}
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-hidden
        "
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
        >
          <motion.div
            key={currentImage.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 280,
                damping: 30,
              },
              opacity: {
                duration: 0.2,
              },
            }}
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              left: 0.85,
              right: 0.85,
              top: 0.65,
              bottom: 0.85,
            }}
            onDragEnd={handleDragEnd}
            style={{
              y: dragY,
            }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              touch-pan-y
              cursor-grab
              active:cursor-grabbing
            "
          >
            <div
              className="
                relative
                h-full
                w-full
                px-4
                pb-32
                pt-20
                md:px-16
                md:pb-28
                md:pt-20
              "
            >
              <Image
                src={
                  currentImage.image ||
                  "/images/gallery-placeholder.jpg"
                }
                alt={
                  currentImage.title ||
                  "Shine Luxury Beauty Spa"
                }
                fill
                priority
                sizes="100vw"
                className="
                  select-none
                  object-contain
                "
                  draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="
              absolute
              left-5
              top-1/2
              z-40
              hidden
              h-14
              w-14
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
              active:scale-90
              md:flex
            "
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="
              absolute
              right-5
              top-1/2
              z-40
              hidden
              h-14
              w-14
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
              active:scale-90
              md:flex
            "
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Bottom Information */}
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
          delay: 0.15,
        }}
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-50
          md:bottom-8
          md:left-1/2
          md:w-auto
          md:min-w-[420px]
          md:-translate-x-1/2
        "
      >
        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/10
            px-5
            py-4
            text-white
            shadow-2xl
            backdrop-blur-2xl
            md:px-7
            md:py-5
          "
        >
          <div className="flex items-end justify-between gap-5">
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#62AAB5]
                "
              >
                {currentImage.category ||
                  "Luxury Beauty"}
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-medium
                  tracking-tight
                  md:text-xl
                "
              >
                {currentImage.title ||
                  "Shine Transformation"}
              </h3>
            </div>

            <div
              className="
                shrink-0
                text-xs
                text-white/40
              "
            >
              Swipe
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}