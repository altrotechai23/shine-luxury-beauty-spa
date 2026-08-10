import { prisma } from "@/lib/prisma";

import ServiceGrid from "@/components/services/ServiceGrid";

export const metadata = {
  title: "Beauty Services | Shine Luxury Beauty Spa",
  description:
    "Explore premium beauty treatments at Shine Luxury Beauty Spa.",
};

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
    <main className="relative min-h-screen overflow-hidden bg-[#071518] text-white">
      {/* =========================================================
          FIXED ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Main cyan light */}

        <div
          className="
            absolute
            -left-[30vw]
            -top-[15vh]
            h-[70vw]
            w-[70vw]
            max-h-[900px]
            max-w-[900px]
            rounded-full
            bg-[#62AAB5]/10
            blur-[140px]
          "
        />

        {/* Warm light */}

        <div
          className="
            absolute
            -right-[25vw]
            top-[35vh]
            h-[60vw]
            w-[60vw]
            max-h-[800px]
            max-w-[800px]
            rounded-full
            bg-[#D7C0A0]/[0.07]
            blur-[160px]
          "
        />

        {/* Bottom atmosphere */}

        <div
          className="
            absolute
            bottom-[-30vh]
            left-[20%]
            h-[60vw]
            w-[60vw]
            rounded-full
            bg-[#62AAB5]/[0.05]
            blur-[180px]
          "
        />

        {/* Fine grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#071518_90%)]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 md:pt-32">
        {/* =======================================================
            HERO
        ======================================================= */}

        <section className="relative flex min-h-[78svh] items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28">
            <div className="max-w-5xl">
              {/* Eyebrow */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#62AAB5]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-[#8CCBD3]">
                  Shine Beauty Spa
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  font-heading
                  text-[clamp(3.8rem,14vw,9rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.065em]
                  text-white
                "
              >
                Beauty
                <br />

                <span className="text-white/25">
                  redefined.
                </span>
              </h1>

              {/* Description */}

              <div className="mt-10 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end">
                <p className="text-sm leading-7 text-white/45 sm:text-base">
                  Treatments designed around you.
                  Thoughtful beauty, elevated through
                  precision, calm and intention.
                </p>

                <div className="hidden shrink-0 sm:block">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Explore
                  </div>

                  <div className="mt-2 text-sm text-white/60">
                    {services.length} treatments
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}

            <div className="mt-16 flex items-center gap-3 sm:mt-20">
              <div className="h-10 w-px bg-gradient-to-b from-[#62AAB5] to-transparent" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>

        {/* =======================================================
            SERVICES
        ======================================================= */}

        <section
          id="services"
          className="
            relative
            rounded-t-[40px]
            bg-[#F7F6F3]
            text-[#071518]
            sm:rounded-t-[56px]
          "
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
            {/* Section heading */}

            <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 md:flex-row md:items-end">
              <div>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#62AAB5]">
                  The collection
                </span>

                <h2 className="mt-4 font-heading text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-[-0.05em]">
                  Treatments
                  <br />

                  <span className="text-black/25">
                    made for you.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-black/45">
                Explore our collection of treatments
                and discover your next moment of
                self-care.
              </p>
            </div>

            <ServiceGrid
              services={services}
              categories={categories}
            />
          </div>
        </section>
      </div>
    </main>
  );
}