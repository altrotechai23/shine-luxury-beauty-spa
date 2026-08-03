"use server";

import { prisma } from "@/lib/prisma";
import { categorySchema } from "@/lib/validators/category";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const result = categorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const exists = await prisma.category.findUnique({
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

  await prisma.category.create({
    data: result.data,
  });

  revalidatePath("/admin/categories");

  return {
    success: true,
  };
}

export async function updateCategory(formData: FormData) {
  const id = formData.get("id") as string;

  const result = categorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const exists = await prisma.category.findFirst({
    where: {
      slug: result.data.slug,
      NOT: {
        id,
      },
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

  await prisma.category.update({
    where: {
      id,
    },
    data: result.data,
  });

  revalidatePath("/admin/categories");

  return {
    success: true,
  };
}

export async function deleteCategory(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.category.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/categories");

  return {
    success: true,
  };
}