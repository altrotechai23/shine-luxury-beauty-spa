"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import type { GalleryImage } from "@prisma/client";

interface Props {
  images: GalleryImage[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function Gallery({ images }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#081B1F] py-32">

      {/* Background */}

      <div className="absolute left-[-250px] top-0 h-[700px] w-[700px] rounded-full bg-[#62AAB5]/10 blur-[180px]" />

      <div className="absolute bottom-[-300px] right-[-220px] h-[700px] w-[700px] rounded-full bg-[#D7C0A0]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >

          <div
            className="
              inline-flex

              items-center

              gap-3

              rounded-full

              border

              border-white/10

              bg-white/10

              px-6

              py-3

              backdrop-blur-3xl
            "
          >

            <Sparkles
              size={16}
              className="text-[#62AAB5]"
            />

            <span
              className="
                text-xs

                uppercase

                tracking-[0.35em]

                text-white/80
              "
            >
              Gallery
            </span>

          </div>

          <h2
            className="
              mt-8

              font-heading

              text-5xl

              leading-tight

              text-white

              md:text-6xl

              lg:text-7xl
            "
          >
            Beautiful
            <span className="text-[#D7C0A0]">
              {" "}Transformations
            </span>
          </h2>

          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-white/70
            "
          >
            Every client leaves Shine Luxury Beauty Spa
            feeling more confident, refreshed and radiant.
            Explore some of our favourite transformations.
          </p>

        </motion.div>

        {/* Empty */}

        {images.length === 0 && (

          <motion.div

            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            className="
              rounded-[40px]

              border

              border-white/10

              bg-white/5

              py-28

              text-center

              backdrop-blur-3xl
            "
          >

            <Camera
              size={52}
              className="
                mx-auto

                text-[#62AAB5]
              "
            />

            <h3
              className="
                mt-8

                text-3xl

                font-heading

                text-white
              "
            >
              Gallery Coming Soon
            </h3>

            <p
              className="
                mt-5

                text-white/60
              "
            >
              New luxury transformations will appear here soon.
            </p>

          </motion.div>

        )}

        {/* Masonry */}

        {images.length > 0 && (

          <div className="columns-1 gap-6 md:columns-2 xl:columns-3">

            {images.map((image, index) => (

              <motion.div

                key={image.id}

                initial={{
                  opacity:0,
                  y:60,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index*.08,
                }}

                whileHover={{
                  y:-8,
                }}

                className="
                  group

                  relative

                  mb-6

                  break-inside-avoid

                  overflow-hidden

                  rounded-[36px]

                  border

                  border-white/10

                  bg-white/5

                  backdrop-blur-3xl

                  shadow-[0_30px_90px_rgba(0,0,0,.25)]
                "
              >

                <Image

                  src={image.image || FALLBACK_IMAGE}

                  alt={image.title || "Gallery"}

                  width={900}

                  height={1200}

                  className="
                    h-auto

                    w-full

                    object-cover

                    transition

                    duration-[5000ms]

                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-[#081B1F]

                    via-[#081B1F]/20

                    to-transparent

                    opacity-0

                    transition

                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Content */}

                <div
                  className="
                    absolute

                    bottom-0

                    left-0

                    right-0

                    translate-y-10

                    p-8

                    transition

                    duration-500

                    group-hover:translate-y-0
                  "
                >

                  <span
                    className="
                      rounded-full

                      bg-[#62AAB5]

                      px-4

                      py-2

                      text-xs

                      uppercase

                      tracking-[0.25em]

                      text-white
                    "
                  >
                    {image.category || "Luxury Beauty"}
                  </span>

                  <h3
                    className="
                      mt-5

                      text-3xl

                      font-heading

                      text-white
                    "
                  >
                    {image.title || "Luxury Treatment"}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}