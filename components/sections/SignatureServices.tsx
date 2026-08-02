import {
  Scissors,
  Sparkles,
  Hand,
  Flower2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Hair Services",
    icon: Scissors,
    description:
      "Professional styling, treatments, installations and hair restoration.",
    color: "bg-[#F8F4EE]",
  },
  {
    title: "Nail Care",
    icon: Hand,
    description:
      "Luxury manicures, gel pedicures and signature nail packages.",
    color: "bg-white",
  },
  {
    title: "Lashes & Brows",
    icon: Sparkles,
    description:
      "Shape, tint and lift services for naturally beautiful eyes.",
    color: "bg-[#F8F4EE]",
  },
  {
    title: "Skin Treatments",
    icon: Flower2,
    description:
      "Luxury facials and skincare treatments for radiant healthy skin.",
    color: "bg-white",
  },
];

export default function SignatureServices() {
  return (
    <section className="bg-[#FCFAF8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.4em] text-[#8D5F4A]">
            Signature Services
          </span>

          <h2 className="mt-5 font-heading text-5xl text-[#2E201B]">
            Beauty Designed Around You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            From luxurious hair treatments to premium skincare,
            every experience is tailored with elegance,
            precision and exceptional care.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`${service.color} group rounded-[34px] border border-[#EFE7DF] p-10 transition duration-500 hover:-translate-y-3 hover:shadow-2xl`}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#6A4535] text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-heading text-[#2E201B]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-600">
                  {service.description}
                </p>

                <Link
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-2 font-medium text-[#6A4535]"
                >
                  Book Now

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-2"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}