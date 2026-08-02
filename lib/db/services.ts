import { prisma } from "@/lib/prisma";

export async function getServices() {
  return prisma.service.findMany({
    include: {
      category: true,
    },
    orderBy: {
      title: "asc",
    },
  });
}

export async function getFeaturedServices() {
  return prisma.service.findMany({
    where: {
      featured: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      title: "asc",
    },
  });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });
}