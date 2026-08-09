import GalleryPage from "@/components/sections/Gallery";
import { getGalleryImages } from "@/lib/data/gallery";

export const dynamic = "force-dynamic";

export default async function GalleryRoute() {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061519]">
      <GalleryPage images={images} />
    </main>
  );
}