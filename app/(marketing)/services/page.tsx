import { prisma } from "@/lib/prisma";

import ServiceGrid from "@/components/services/ServiceGrid";

import { Sparkles } from "lucide-react";

export default async function ServicesPage() {
  const [services, categories] = await Promise.all([
    prisma.service.findMany({
      where: {
        active: true,
      },
      include: {
        category: true,
      },
      orderBy: [
        {
          featured: "desc",
        },
        {
          displayOrder: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    }),

    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-[#2B1C18] py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-[#6A4535]/20 via-transparent to-black/30" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl">

              <Sparkles
                size={16}
                className="text-amber-300"
              />

              Luxury Treatments

            </div>

            <h1 className="font-heading text-5xl leading-tight text-white md:text-7xl">

              Our Beauty Services

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">

              Discover our premium beauty treatments,
              carefully designed to help you relax,
              rejuvenate and look your absolute best.

            </p>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="bg-[#faf8f6] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <ServiceGrid
            services={services}
            categories={categories}
          />

        </div>

      </section>
    </>
  );
}