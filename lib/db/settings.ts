import { prisma } from "@/lib/prisma";

export async function getSettings() {
  return prisma.setting.findFirst();
}