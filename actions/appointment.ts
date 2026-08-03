"use server";

import { prisma } from "@/lib/prisma";
import { appointmentSchema } from "@/lib/validators/appointment";

import { revalidatePath } from "next/cache";

export async function createAppointment(
  formData: FormData
) {
  const result = appointmentSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    serviceId: formData.get("serviceId"),
    therapist: formData.get("therapist") || undefined,
    date: formData.get("date"),
    time: formData.get("time"),
    notes: formData.get("notes") || undefined,
    status: formData.get("status"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.appointment.create({
    data: {
      fullName: result.data.fullName,
      phone: result.data.phone,
      email: result.data.email,

      service: {
        connect: {
          id: result.data.serviceId,
        },
      },

      therapist: result.data.therapist,

      date: new Date(result.data.date),

      time: result.data.time,

      notes: result.data.notes,

      status: result.data.status,
    },
  });

  revalidatePath("/admin/appointments");

  return {
    success: true,
  };
}

export async function updateAppointment(
  formData: FormData
) {
  const id = formData.get("id") as string;

  const result = appointmentSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    serviceId: formData.get("serviceId"),
    therapist: formData.get("therapist") || undefined,
    date: formData.get("date"),
    time: formData.get("time"),
    notes: formData.get("notes") || undefined,
    status: formData.get("status"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.appointment.update({
    where: {
      id,
    },

    data: {
      fullName: result.data.fullName,
      phone: result.data.phone,
      email: result.data.email,

      service: {
        connect: {
          id: result.data.serviceId,
        },
      },

      therapist: result.data.therapist,

      date: new Date(result.data.date),

      time: result.data.time,

      notes: result.data.notes,

      status: result.data.status,
    },
  });

  revalidatePath("/admin/appointments");

  return {
    success: true,
  };
}

export async function deleteAppointment(
  formData: FormData
) {
  const id = formData.get("id") as string;

  await prisma.appointment.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/appointments");
}