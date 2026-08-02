import { prisma } from "@/lib/prisma";

export async function getAppointments() {
  return prisma.appointment.findMany({
    include: {
      service: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getRecentAppointments(limit = 10) {
  return prisma.appointment.findMany({
    include: {
      service: true,
    },
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
}