import BookingCTA from "@/components/sections/BookingCTA";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import ShineExperience from "@/components/sections/ShineExperience";
import SpecialOffer from "@/components/sections/SpecialOffer";
import Testimonials from "@/components/sections/Testimonials";

import { getSettings } from "@/lib/data/settings";
import { getFeaturedServices } from "@/lib/data/services";
import { getGalleryImages } from "@/lib/data/gallery";
import { getTestimonials } from "@/lib/data/testimonials";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const [
    settings,
    featuredServices,
    gallery,
    testimonials,
  ] = await Promise.all([
    getSettings(),
    getFeaturedServices(),
    getGalleryImages(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero settings={settings} />

      <FeaturedServices
        services={featuredServices}
      />

      <ShineExperience />

      <SpecialOffer />

      <Gallery
        // images={gallery}
      />

      <Testimonials
        // testimonials={testimonials}
      />

      <BookingCTA />
    </>
  );
}