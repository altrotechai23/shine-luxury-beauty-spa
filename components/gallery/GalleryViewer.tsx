"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { GalleryImage } from "@prisma/client";

interface Props {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop";

export default function GalleryViewer({
  images,
  activeIndex,
  onClose,
}: Props) {
  const [direction, setDirection] = useState(1);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Current image
  |--------------------------------------------------------------------------
  */

  const currentImage =
    images[activeIndex] ?? null;

  /*
  |--------------------------------------------------------------------------
  | Navigation
  |--------------------------------------------------------------------------
  */

  const next = useCallback(() => {
    if (images.length <= 1) return;

    setDirection(1);

    const nextIndex =
      activeIndex === images.length - 1
        ? 0
        : activeIndex + 1;

    /*
     * We cannot directly change the parent's index,
     * so dispatch a custom event that the parent can listen to.
     *
     * If your parent already provides an onNavigate prop,
     * see the upgraded version below.
     */
    window.dispatchEvent(
      new CustomEvent("shine-gallery-next", {
        detail: nextIndex,
      })
    );
  }, [activeIndex, images.length]);

  const previous = useCallback(() => {
    if (images.length <= 1) return;

    setDirection(-1);

    const previousIndex =
      activeIndex === 0
        ? images.length - 1
        : activeIndex - 1;

    window.dispatchEvent(
      new CustomEvent("shine-gallery-previous", {
        detail: previousIndex,
      })
    );
  }, [activeIndex, images.length]);

  /*
  |--------------------------------------------------------------------------
  | Keyboard navigation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        next();
        return;
      }

      if (event.key === "ArrowLeft") {
        previous();
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
  }, [next, previous, onClose]);

  /*
  |--------------------------------------------------------------------------
  | Lock page scroll while viewer is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Touch start
  |--------------------------------------------------------------------------
  */

  function handleTouchStart(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }

  /*
  |--------------------------------------------------------------------------
  | Touch end
  |--------------------------------------------------------------------------
  */

  function handleTouchEnd(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX =
      touch.clientX - touchStartX.current;

    const deltaY =
      touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    /*
     * Ignore mostly vertical gestures.
     */

    if (
      Math.abs(deltaX) <
      Math.abs(deltaY)
    ) {
      return;
    }

    /*
     * Minimum swipe distance.
     */

    if (Math.abs(deltaX) < 55) {
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      previous();
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Nothing selected
  |--------------------------------------------------------------------------
  */

  if (!currentImage) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage.id}
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
          duration: 0.25,
        }}
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          bg-[#02090B]/95
          backdrop-blur-2xl
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={onClose}
      >
        {/* Background image */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src={
              currentImage.image ||
              FALLBACK_IMAGE
            }
            alt=""
            fill
            className="
              scale-125
              object-cover
              opacity-20
              blur-[90px]
            "
          />

          <div className="absolute inset-0 bg-[#02090B]/80" />
        </div>

        {/* Top counter */}

        <div
          className="
            absolute
            left-4
            top-4
            z-40
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
          {String(activeIndex + 1).padStart(
            2,
            "0"
          )}

          {" / "}

          {String(images.length).padStart(
            2,
            "0"
          )}
        </div>

        {/* Close */}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Close gallery"
          className="
            absolute
            right-4
            top-4
            z-40
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
            duration-300
            hover:bg-white/10
            active:scale-90
            sm:right-7
            sm:top-7
          "
        >
          <X size={20} />
        </button>

        {/* Main image */}

        <motion.div
          key={currentImage.id}
          initial={{
            opacity: 0,
            x: direction * 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: direction * -40,
            scale: 0.97,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
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
            px-3
            sm:px-6
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
                currentImage.image ||
                FALLBACK_IMAGE
              }
              alt={
                currentImage.title ||
                "SHINE Luxury Beauty"
              }
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                90vw
              "
              className="
                object-contain
              "
            />

            {/* Image information */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-gradient-to-t
                from-black/90
                via-black/50
                to-transparent
                p-6
                pt-24
                sm:p-10
                sm:pt-32
              "
            >
              <div className="max-w-3xl">
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[#62AAB5]/20
                    bg-[#62AAB5]/10
                    px-4
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-[#8CCBD3]
                    backdrop-blur-xl
                  "
                >
                  {currentImage.category ||
                    "Luxury Beauty"}
                </span>

                <h2
                  className="
                    mt-4
                    font-heading
                    text-3xl
                    leading-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  {currentImage.title ||
                    "Luxury Transformation"}
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Previous */}

        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Previous image"
            className="
              absolute
              left-3
              top-1/2
              z-40
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
              duration-300
              hover:bg-white/10
              active:scale-90
              sm:left-7
              sm:h-14
              sm:w-14
            "
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Next */}

        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="
              absolute
              right-3
              top-1/2
              z-40
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
              duration-300
              hover:bg-white/10
              active:scale-90
              sm:right-7
              sm:h-14
              sm:w-14
            "
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Mobile swipe indicator */}

        {images.length > 1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              absolute
              bottom-5
              left-1/2
              z-40
              -translate-x-1/2
              rounded-full
              border
              border-white/10
              bg-black/30
              px-4
              py-2
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/40
              backdrop-blur-xl
              sm:hidden
            "
          >
            Swipe to explore
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}