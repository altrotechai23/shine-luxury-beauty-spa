import BookingCTA from "@/components/sections/BookingCTA";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import ShineExperience from "@/components/sections/ShineExperience";
import SpecialOffer from "@/components/sections/SpecialOffer";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <ShineExperience  />
      <SpecialOffer />
      <Gallery />
      <Testimonials />
      <BookingCTA />

    </>
  );
}