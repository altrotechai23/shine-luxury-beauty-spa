import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getFeaturedServices() {
  noStore();

  const services = await prisma.service.findMany({
    where: {
      active: true,
      featured: true,
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  return services;
}

export async function getServices() {
  noStore();

  const services = await prisma.service.findMany({
    where: {
      active: true,
    },
    take: 6,
    include: {
      category: true,
    },
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  return services;
}