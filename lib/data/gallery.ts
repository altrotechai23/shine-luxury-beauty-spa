import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getGalleryImages() {
  noStore();

  return await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}