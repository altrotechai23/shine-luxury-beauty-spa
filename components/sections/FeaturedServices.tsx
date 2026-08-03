import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { Prisma } from "@prisma/client";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  services: Service[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function FeaturedServices({
  services,
}: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
            Our Services
          </p>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl">
            Signature Beauty Treatments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Every treatment is delivered with precision, care and premium
            products to ensure you leave looking and feeling your best.
          </p>

        </div>

        {services.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-neutral-300 bg-neutral-50 px-8 py-24 text-center">

            <h3 className="text-2xl font-semibold">
              Our signature treatments are coming soon.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
              We are preparing a luxurious collection of services for you.
              Please check back soon or contact us to make an enquiry.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-flex rounded-full bg-[#6A4535] px-8 py-4 font-medium text-white transition hover:bg-[#57382c]"
            >
              Contact Us
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.id}
                className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={service.image || FALLBACK_IMAGE}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur">
                    {service.category.name}
                  </div>

                </div>

                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <p className="text-sm uppercase tracking-widest text-amber-700">
                      From R{service.price}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock3 size={15} />
                      {service.duration} mins
                    </div>

                  </div>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-neutral-600">
                    {service.description}
                  </p>

                  <Link
                    href="/booking"
                    className="mt-8 inline-flex items-center gap-2 font-medium transition hover:gap-3"
                  >
                    Book Treatment
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </article>

            ))}

          </div>
        )}

        <div className="mt-16 text-center">

          <Link
            href="/services"
            className="inline-flex rounded-full bg-black px-8 py-4 font-medium text-white transition hover:bg-neutral-800"
          >
            View All Services
          </Link>

        </div>

      </div>
    </section>
  );
}