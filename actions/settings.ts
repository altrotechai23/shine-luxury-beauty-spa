"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { settingsSchema } from "@/lib/validators/settings";

export async function updateSettings(formData: FormData) {
  const result = settingsSchema.safeParse({
    businessName: formData.get("businessName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    whatsapp: formData.get("whatsapp"),
    address: formData.get("address"),
    instagram: formData.get("instagram"),
    facebook: formData.get("facebook"),
    openingHours: formData.get("openingHours"),
    heroTitle: formData.get("heroTitle"),
    heroSubtitle: formData.get("heroSubtitle"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const existing = await prisma.setting.findFirst();

  if (existing) {
    await prisma.setting.update({
      where: {
        id: existing.id,
      },
      data: result.data,
    });
  } else {
    await prisma.setting.create({
      data: result.data,
    });
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");

  return {
    success: true,
  };
}