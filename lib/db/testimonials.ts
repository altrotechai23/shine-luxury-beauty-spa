import { prisma } from "@/lib/prisma";

export async function getTestimonials() {
  return prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getFeaturedTestimonials() {
  return prisma.testimonial.findMany({
    where: {
      featured: true,
    },
  });
}