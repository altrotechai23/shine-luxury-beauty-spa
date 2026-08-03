"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@prisma/client";

interface Props {
  images: GalleryImage[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop";

export default function Gallery({
  images,
}: Props) {
  if (images.length === 0) {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="text-sm uppercase tracking-[0.35em] text-[#8D5F4A]">
              Gallery
            </span>

            <h2 className="mt-5 font-heading text-5xl">
              Beautiful Results
            </h2>

            <p className="mt-6 text-neutral-500">
              Our latest work will appear here soon.
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-[#8D5F4A]">
            Gallery
          </span>

          <h2 className="mt-5 font-heading text-5xl">
            Beautiful Results
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
            Every transformation is created with passion,
            precision and premium beauty products.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (

            <motion.div
              key={image.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="group relative h-[420px] overflow-hidden rounded-[30px]"
            >

              <Image
                src={image.image || FALLBACK_IMAGE}
                alt={image.title || "Gallery Image"}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-10 p-8 text-white transition duration-500 group-hover:translate-y-0">

                <h3 className="text-2xl font-semibold">
                  {image.title}
                </h3>

                <p className="mt-2 text-white/80">
                  {image.category || "Beauty Treatment"}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}