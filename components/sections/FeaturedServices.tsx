import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Luxury Hair Styling",
    description:
      "Professional cuts, styling and treatments tailored to your look.",
    price: "From R250",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Facial Treatments",
    description:
      "Restore healthy, glowing skin with premium facial treatments.",
    price: "From R350",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Nails",
    description:
      "Beautiful manicures and pedicures with long-lasting finishes.",
    price: "From R180",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedServices() {
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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-amber-700">
                  {service.price}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {service.description}
                </p>

                <Link
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-2 font-medium text-black transition hover:gap-3"
                >
                  Book Treatment
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
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