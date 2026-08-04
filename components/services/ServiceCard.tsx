"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import type { Prisma } from "@prisma/client";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  service: Service;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function ServiceCard({
  service,
}: Props) {
  return (
    <motion.article
      layout
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={service.image || FALLBACK_IMAGE}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {service.featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium backdrop-blur-xl">
            <Sparkles
              size={16}
              className="text-amber-500"
            />
            Featured
          </div>
        )}

        <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur-xl">
          {service.category.name}
        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-8">

        <div className="flex items-start justify-between gap-4">

          <h3 className="text-2xl font-semibold leading-tight">
            {service.title}
          </h3>

          <div className="rounded-full bg-[#6A4535] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap">
            R{service.price.toFixed(2)}
          </div>

        </div>

        <p className="line-clamp-3 leading-7 text-neutral-600">
          {service.description}
        </p>

        <div className="flex items-center justify-between border-t pt-5">

          <div className="flex items-center gap-2 text-neutral-500">

            <Clock3 size={18} />

            <span>{service.duration} mins</span>

          </div>

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
          >
            Book Now

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </motion.article>
  );
}