"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  appointmentSchema,
  AppointmentInput,
} from "@/lib/validators/appointment";
import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";
import type { Appointment } from "@prisma/client";
interface Service {
  id: string;
  title: string;
}

// interface Appointment {
//   id: string;
//   fullName: string;
//   phone: string;
//   email: string;

//   serviceId: string;

//   therapist: string | null;

//   date: Date;

//   time: string;

//   notes: string | null;

//   status:
//     | "PENDING"
//     | "CONFIRMED"
//     | "COMPLETED"
//     | "CANCELLED";
// }


// type AppointmentWithService = Prisma.AppointmentGetPayload<{
//   include: {
//     service: true;
//   };
// }>;

interface Props {
  services: Service[];

  appointment?: Appointment;

  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;

  onSuccess?: () => void;
}

export default function AppointmentForm({
  services,
  appointment,
  action,
  onSuccess,
}: Props) {
  const isEditing = !!appointment;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),

    defaultValues: {
      fullName: appointment?.fullName ?? "",
      phone: appointment?.phone ?? "",
      email: appointment?.email ?? "",
      serviceId: appointment?.serviceId ?? "",
      therapist: appointment?.therapist ?? "",
      date: appointment
        ? appointment.date.toISOString().split("T")[0]
        : "",
      time: appointment?.time ?? "",
      notes: appointment?.notes ?? "",
      status: appointment?.status ?? "PENDING",
    },
  });

  async function onSubmit(values: AppointmentInput) {
    const formData = new FormData();

    if (appointment) {
      formData.append("id", appointment.id);
    }

    formData.append("fullName", values.fullName);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("serviceId", values.serviceId);

    if (values.therapist) {
      formData.append("therapist", values.therapist);
    }

    formData.append("date", values.date);
    formData.append("time", values.time);

    if (values.notes) {
      formData.append("notes", values.notes);
    }

    formData.append("status", values.status);

    const result = await action(formData);

    if (result.success) {
      onSuccess?.();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <InputField
        label="Customer Name"
        placeholder="John Doe"
        {...register("fullName")}
        error={errors.fullName?.message}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputField
          label="Phone"
          placeholder="+27..."
          {...register("phone")}
          error={errors.phone?.message}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="john@email.com"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Service
        </label>

        <select
          {...register("serviceId")}
          className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
        >
          <option value="">
            Select Service
          </option>

          {services.map((service) => (
            <option
              key={service.id}
              value={service.id}
            >
              {service.title}
            </option>
          ))}
        </select>

        {errors.serviceId && (
          <p className="mt-2 text-sm text-red-500">
            {errors.serviceId.message}
          </p>
        )}
      </div>

      <InputField
        label="Therapist"
        placeholder="Optional"
        {...register("therapist")}
        error={errors.therapist?.message}
      />

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Date"
          type="date"
          {...register("date")}
          error={errors.date?.message}
        />

        <InputField
          label="Time"
          type="time"
          {...register("time")}
          error={errors.time?.message}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
        >
          <option value="PENDING">
            Pending
          </option>

          <option value="CONFIRMED">
            Confirmed
          </option>

          <option value="COMPLETED">
            Completed
          </option>

          <option value="CANCELLED">
            Cancelled
          </option>
        </select>
      </div>

      <TextareaField
        label="Notes"
        placeholder="Additional appointment notes..."
        {...register("notes")}
        error={errors.notes?.message}
      />

      <Button
        type="submit"
        loading={isSubmitting}
        className="w-full"
      >
        {isEditing
          ? "Update Appointment"
          : "Create Appointment"}
      </Button>
    </form>
  );
}