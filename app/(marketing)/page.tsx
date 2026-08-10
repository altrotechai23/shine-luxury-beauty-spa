import Hero from "@/components/hero/Hero";

import ShineExperience from "@/components/sections/ShineExperience";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import SpecialOffer from "@/components/sections/SpecialOffer";
import BookingCTA from "@/components/sections/BookingCTA";
import FeaturedServices from "@/components/sections/featured-services/FeaturedServices";

import { getSettings } from "@/lib/data/settings";
import { getFeaturedServices } from "@/lib/data/services";
import { getGalleryImages } from "@/lib/data/gallery";



export default async function HomePage() {
  const [settings, featuredServices, gallery] = await Promise.all([
    getSettings(),
    getFeaturedServices(),
    getGalleryImages(),
  ]);

  return (
    <main className="relative isolate">
      {/* ==========================================================
          Global Ambient Background
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            left-[-20rem]
            top-[40rem]

            h-[45rem]
            w-[45rem]

            rounded-full

            bg-[#62AAB5]/10

            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-20rem]
            top-[120rem]

            h-[40rem]
            w-[40rem]

            rounded-full

            bg-[#D7C0A0]/8

            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[230rem]

            h-[50rem]
            w-[50rem]

            -translate-x-1/2

            rounded-full

            bg-[#62AAB5]/8

            blur-[200px]
          "
        />
      </div>

      {/* ==========================================================
          Hero
      ========================================================== */}

      <Hero settings={settings} />

      {/* ==========================================================
          Featured Treatments
      ========================================================== */}

      <section className="relative z-10">
        <FeaturedServices services={featuredServices} />
      </section>

      {/* ==========================================================
          Shine Experience
      ========================================================== */}

      <section className="relative z-10">
        <ShineExperience />
      </section>

      {/* ==========================================================
          Gallery
      ========================================================== */}

      <section className="relative z-10">
        <Gallery images={gallery} />
      </section>

      {/* ==========================================================
          Testimonials
      ========================================================== */}

      <section className="relative z-10">
        <Testimonials />
      </section>

      {/* ==========================================================
          Special Offer
      ========================================================== */}

      <section className="relative z-10">
        <SpecialOffer />
      </section>

      {/* ==========================================================
          Booking CTA
      ========================================================== */}

      <section className="relative z-10">
        <BookingCTA />
      </section>
    </main>
  );
}