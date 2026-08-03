import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getSettings() {
  noStore();

  const settings = await prisma.setting.findFirst();

  return {
    id: settings?.id ?? "",

    businessName:
      settings?.businessName ?? "Shine Luxury Beauty Spa",

    phone:
      settings?.phone ?? "+27 00 000 0000",

    email:
      settings?.email ?? "info@shinebeautyspa.co.za",

    whatsapp:
      settings?.whatsapp ?? "+27 00 000 0000",

    address:
      settings?.address ??
      "Cape Town, South Africa",

    instagram:
      settings?.instagram ?? "",

    facebook:
      settings?.facebook ?? "",

    openingHours:
      settings?.openingHours ??
      "Mon - Sat • 08:00 - 18:00",

    heroTitle:
      settings?.heroTitle ??
      "The Art of Looking Beautiful",

    heroSubtitle:
      settings?.heroSubtitle ??
      "Luxury hair, nails, skin treatments, lashes and beauty services designed to leave you feeling confident, refreshed and radiant.",
  };
}