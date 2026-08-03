import Image from "next/image";
import { Star } from "lucide-react";
import type { Prisma } from "@prisma/client";



type Testimonial = Prisma.TestimonialGetPayload<Prisma.TestimonialDefaultArgs>;

interface Props {
  testimonials: Testimonial[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop";

export default function Testimonials({
  testimonials,
}: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
            Testimonials
          </p>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl">
            Loved By Our Clients
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Every smile and every review motivates us to deliver exceptional
            beauty experiences.
          </p>

        </div>

        {testimonials.length === 0 ? (

          <div className="rounded-[32px] border border-dashed border-neutral-300 bg-neutral-50 px-8 py-24 text-center">

            <h3 className="text-2xl font-semibold">
              Testimonials Coming Soon
            </h3>

            <p className="mt-4 text-neutral-600">
              Our happy clients will appear here soon.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {testimonials.map((testimonial) => (

              <article
                key={testimonial.id}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex gap-1">

                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />

                  ))}

                </div>

                <p className="mt-6 leading-8 text-neutral-600">
                  {testimonial.message}
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div className="relative h-14 w-14 overflow-hidden rounded-full">

                    <Image
                      src={
                        testimonial.image ||
                        FALLBACK_IMAGE
                      }
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-neutral-500">
                      {testimonial.role || "Client"}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>
    </section>
  );
}