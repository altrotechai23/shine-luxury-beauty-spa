import { prisma } from "@/lib/prisma";

export async function getGalleryImages() {
  return prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}