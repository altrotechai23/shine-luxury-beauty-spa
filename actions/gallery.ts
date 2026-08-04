"use server";

import { prisma } from "@/lib/prisma";
import { gallerySchema } from "@/lib/validators/gallery";
import { revalidatePath } from "next/cache";

export async function createGalleryImage(formData: FormData) {
  const result = gallerySchema.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    category: formData.get("category"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.galleryImage.create({
    data: result.data,
  });

  revalidatePath("/admin/gallery");
  revalidatePath("/");
  return {
    success: true,
  };
}

export async function updateGalleryImage(formData: FormData) {
  const id = formData.get("id") as string;

  const result = gallerySchema.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    category: formData.get("category"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.galleryImage.update({
    where: {
      id,
    },
    data: result.data,
  });

  revalidatePath("/admin/gallery");

  return {
    success: true,
  };
}

export async function deleteGalleryImage(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.galleryImage.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/gallery");
  revalidatePath("/");
  return {
    success: true,
  };
}