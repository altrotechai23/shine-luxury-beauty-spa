import { prisma } from "@/lib/prisma";

export async function getFaqs() {
  return prisma.fAQ.findMany({
    orderBy: {
      order: "asc",
    },
  });
}