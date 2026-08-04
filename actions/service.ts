"use server";

import { prisma } from "@/lib/prisma";
import { serviceSchema } from "@/lib/validators/service";

import { revalidatePath } from "next/cache";

export async function createService(formData: FormData) {
  const result = serviceSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration: formData.get("duration"),
    price: formData.get("price"),
    categoryId: formData.get("categoryId"),
    image: formData.get("image") || undefined,
    featured: formData.get("featured") === "true",
    active: formData.get("active") !== "false",
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const exists = await prisma.service.findUnique({
    where: {
      slug: result.data.slug,
    },
  });

  if (exists) {
    return {
      success: false,
      errors: {
        slug: ["Slug already exists"],
      },
    };
  }

  await prisma.service.create({
    data: result.data,
  });

  revalidatePath("/admin/services");
  revalidatePath("/");
  return {
    success: true,
  };
}

export async function updateService(formData: FormData) {
  const id = formData.get("id") as string;

  const result = serviceSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration: formData.get("duration"),
    price: formData.get("price"),
    categoryId: formData.get("categoryId"),
    image: formData.get("image") || undefined,
    featured: Boolean(formData.get("featured")),
    active: Boolean(formData.get("active")),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.service.update({
    where: {
      id,
    },
    data: result.data,
  });

  revalidatePath("/admin/services");
  revalidatePath("/");
  return {
    success: true,
  };
}

export async function deleteService(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.service.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/services");
}