"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Star,
} from "lucide-react";
import { useRef } from "react";

interface GoogleReview {
  id: string;
  name: string;
  reviewUrl: string;
  time: string;
  rating: number;
  text: string;
  services?: string[];
  likes?: number;
}

const reviews: GoogleReview[] = [
  {
    id: "mandy-davids",
    name: "Mandy Davids",
    reviewUrl:
      "https://www.google.com/maps/contrib/112630973097208207362/reviews?hl=en-GB",
    time: "16 hours ago",
    rating: 5,
    text:
      "Great price. Lizzy such a lovely and warm lady. Enjoy every moment definitely coming back.",
  },

  {
    id: "saif-aldhaheri",
    name: "Saif Aldhaheri",
    reviewUrl:
      "https://www.google.com/maps/contrib/111529472177453849198/reviews?hl=en-GB",
    time: "18 hours ago",
    rating: 5,
    text: "Great price. Mimi.",
    services: ["Manicure"],
  },

  {
    id: "kuwait-official",
    name: "Kuwait Official",
    reviewUrl:
      "https://www.google.com/maps/contrib/112739376438542498923/reviews?hl=en-GB",
    time: "a day ago",
    rating: 5,
    text:
      "I had a very nice experience with Lizy therefore I’m looking forward to be working with you guys😊",
    likes: 1,
  },

  {
    id: "tari-douglas",
    name: "Tari Douglas",
    reviewUrl:
      "https://www.google.com/maps/contrib/106257628207789814287/reviews?hl=en-GB",
    time: "a day ago",
    rating: 5,
    text:
      "SHINE Salon did me right! Shoutout Tracy for a wonderful experience and service to!",
    services: ["Pedicure", "Manicure"],
  },

  {
    id: "nadal-kash",
    name: "nadal kash",
    reviewUrl:
      "https://www.google.com/maps/contrib/112599601789136570448/reviews?hl=en-GB",
    time: "2 days ago",
    rating: 5,
    text: "Nice mimi shine beauty spa.",
    likes: 2,
  },
];

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Shine+Beauty+Spa%2C+108+Long+Street%2C+Cape+Town";

function GoogleIcon() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
      <span className="text-xl font-bold leading-none text-[#4285F4]">
        G
      </span>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={1.8}
          className="fill-[#F4B400] text-[#F4B400]"
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: GoogleReview;
}) {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="
        group
        relative
        flex
        h-[390px]
        w-[340px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.055]
        p-7
        shadow-[0_25px_80px_rgba(0,0,0,.25)]
        backdrop-blur-2xl
        sm:w-[390px]
      "
    >
      {/* Premium top light */}

      <div
        className="
          absolute
          left-8
          right-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
        "
      />

      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-[#62AAB5]/10
          blur-[90px]
          transition
          duration-700
          group-hover:bg-[#62AAB5]/20
        "
      />

      {/* Google header */}

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GoogleIcon />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Google Review
            </p>

            <p className="mt-0.5 text-sm font-medium text-white/80">
              Verified customer
            </p>
          </div>
        </div>

        <BadgeCheck
          size={19}
          className="text-[#62AAB5]"
        />
      </div>

      {/* Rating */}

      <div className="mt-7 flex items-center justify-between">
        <Stars />

        <span className="text-xs text-white/40">
          {review.time}
        </span>
      </div>

      {/* Quote */}

      <div
        className="
          pointer-events-none
          absolute
          right-7
          top-28
          font-serif
          text-[100px]
          leading-none
          text-white/[0.035]
        "
      >
        &ldquo;
      </div>

      {/* Review */}

      <div className="relative mt-7">
        <p className="line-clamp-6 text-[15px] leading-7 text-white/75">
          {review.text}
        </p>
      </div>

      {/* Services */}

      {review.services &&
        review.services.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {review.services.map((service) => (
              <span
                key={service}
                className="
                  rounded-full
                  border
                  border-[#62AAB5]/20
                  bg-[#62AAB5]/10
                  px-3
                  py-1.5
                  text-[11px]
                  uppercase
                  tracking-wider
                  text-[#9ed4db]
                "
              >
                {service}
              </span>
            ))}
          </div>
        )}

      {/* Customer */}

      <div className="mt-auto border-t border-white/10 pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold text-white">
                {review.name}
              </p>

              <BadgeCheck
                size={14}
                className="shrink-0 text-[#62AAB5]"
              />
            </div>

            <p className="mt-1 text-xs text-white/40">
              Google reviewer
            </p>
          </div>

          <a
            href={review.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${review.name}'s Google review`}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/50
              transition
              hover:border-[#62AAB5]/40
              hover:bg-[#62AAB5]/10
              hover:text-[#62AAB5]
            "
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollReviews(
    direction: "left" | "right"
  ) {
    if (!railRef.current) return;

    railRef.current.scrollBy({
      left:
        direction === "right"
          ? 430
          : -430,
      behavior: "smooth",
    });
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#081B1F]
        py-28
        sm:py-36
      "
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(98,170,181,.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(215,192,160,.08),transparent_35%)]
        "
      />

      {/* Subtle grid */}

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

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <GoogleIcon />

              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                Google Reviews
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#62AAB5]
                  shadow-[0_0_15px_#62AAB5]
                "
              />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.8,
              }}
              className="
                mt-8
                font-heading
                text-5xl
                leading-[0.95]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Loved by the people
              <br />

              <span className="text-[#D7C0A0]">
                who matter most.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-white/60
              "
            >
              Real experiences from our
              clients at Shine Beauty Spa,
              Cape Town.
            </motion.p>
          </div>

          {/* Rating block */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              shrink-0
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-2xl
            "
          >
            <div className="flex items-center gap-5">
              <GoogleIcon />

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-semibold text-white">
                    5.0
                  </span>

                  <Stars />
                </div>

                <p className="mt-1 text-sm text-white/45">
                  9 Google reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================
          REVIEW RAIL
      ======================================== */}

      <div className="relative z-10 mt-20">
        {/* Controls */}

        <div className="mx-auto mb-7 flex max-w-7xl justify-end gap-3 px-6">
          <button
            type="button"
            onClick={() =>
              scrollReviews("left")
            }
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/60
              backdrop-blur-xl
              transition
              hover:border-[#62AAB5]/40
              hover:bg-[#62AAB5]/10
              hover:text-white
            "
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() =>
              scrollReviews("right")
            }
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/60
              backdrop-blur-xl
              transition
              hover:border-[#62AAB5]/40
              hover:bg-[#62AAB5]/10
              hover:text-white
            "
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Horizontal rail */}

        <div
          ref={railRef}
          className="
            flex
            gap-6
            overflow-x-auto
            px-6
            pb-10
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            lg:px-[max(24px,calc((100vw-1280px)/2))]
          "
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================
          GOOGLE FOOTER
      ======================================== */}

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-6">
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-white/10
            pt-8
            sm:flex-row
          "
        >
          <div className="flex items-center gap-3 text-sm text-white/40">
            <MapPin
              size={16}
              className="text-[#62AAB5]"
            />

            <span>
              Shine Beauty Spa · 108 Long St,
              Cape Town
            </span>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              text-white/70
              backdrop-blur-xl
              transition
              hover:border-[#62AAB5]/40
              hover:bg-[#62AAB5]/10
              hover:text-white
            "
          >
            See all reviews on Google

            <ArrowUpRight
              size={17}
              className="
                transition
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}