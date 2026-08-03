"use server";

import { prisma } from "@/lib/prisma";
import { faqSchema } from "@/lib/validators/faq";
import { revalidatePath } from "next/cache";

export async function createFAQ(formData: FormData) {
  const result = faqSchema.safeParse({
    question: formData.get("question"),
    answer: formData.get("answer"),
    order: formData.get("order"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.fAQ.create({
    data: result.data,
  });

  revalidatePath("/admin/faq");

  return {
    success: true,
  };
}

export async function updateFAQ(formData: FormData) {
  const id = formData.get("id") as string;

  const result = faqSchema.safeParse({
    question: formData.get("question"),
    answer: formData.get("answer"),
    order: formData.get("order"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.fAQ.update({
    where: {
      id,
    },
    data: result.data,
  });

  revalidatePath("/admin/faq");

  return {
    success: true,
  };
}

export async function deleteFAQ(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.fAQ.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/faq");

  return {
    success: true,
  };
}