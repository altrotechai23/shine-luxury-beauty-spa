"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const name = formData.get("name")?.toString().trim() || "";
  const slug = formData.get("slug")?.toString().trim() || "";
  const description = formData.get("description")?.toString().trim() || "";

  if (!name) {
    throw new Error("Category name is required.");
  }

  const exists = await prisma.category.findUnique({
    where: {
      slug,
    },
  });

  if (exists) {
    throw new Error("A category with this slug already exists.");
  }

  await prisma.category.create({
    data: {
      name,
      slug,
      description,
    },
  });

  revalidatePath("/admin/categories");
  revalidatePath("/");
}






export async function deleteCategory(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.category.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/categories");
}