"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema } from "@/lib/validators/booking";
import type { BookingSchema } from "@/lib/validators/booking";
import { createBooking } from "@/actions/booking";


export default function BookingForm() {
  const router = useRouter();

  const [message, setMessage] = useState("");

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  function onSubmit(data: BookingSchema) {
    setMessage("");

    startTransition(async () => {
      const result = await createBooking(data);

      if (!result.success) {
        setMessage(result.message!);
        return;
      }

      reset();

      router.push("/booking/success");
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 space-y-6 rounded-[32px] bg-white p-8 shadow-lg"
    >
      {/* Name */}
      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          {...register("fullName")}
          className="w-full rounded-xl border p-4"
          placeholder="John Smith"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.fullName?.message}
        </p>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          {...register("phone")}
          className="w-full rounded-xl border p-4"
          placeholder="+27..."
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.phone?.message}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          {...register("email")}
          type="email"
          className="w-full rounded-xl border p-4"
          placeholder="john@email.com"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.email?.message}
        </p>
      </div>

      {/* Service */}
      <div>
        <label className="mb-2 block font-medium">
          Treatment
        </label>

        <select
          {...register("serviceId")}
          className="w-full rounded-xl border p-4"
        >
          <option value="">Choose a treatment</option>

          <option>Hair Services</option>

          <option>Nail Care</option>

          <option>Skin Treatments</option>

          <option>Lashes & Brows</option>
        </select>

        {errors.serviceId && (
  <p className="text-sm text-red-500">
    {errors.serviceId.message}
  </p>
)}
      </div>

      {/* Therapist */}
      <div>
        <label className="mb-2 block font-medium">
          Preferred Therapist (Optional)
        </label>

        <input
          {...register("therapist")}
          className="w-full rounded-xl border p-4"
          placeholder="Any"
        />
      </div>

      {/* Date */}
      <div>
        <label className="mb-2 block font-medium">
          Preferred Date
        </label>

        <input
          {...register("date")}
          type="date"
          className="w-full rounded-xl border p-4"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.date?.message}
        </p>
      </div>

      {/* Time */}
      <div>
        <label className="mb-2 block font-medium">
          Preferred Time
        </label>

        <input
          {...register("time")}
          type="time"
          className="w-full rounded-xl border p-4"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.time?.message}
        </p>
      </div>

      {/* Notes */}
      <div>
        <label className="mb-2 block font-medium">
          Additional Notes
        </label>

        <textarea
          {...register("notes")}
          rows={5}
          className="w-full rounded-xl border p-4"
          placeholder="Tell us anything you'd like us to know..."
        />
      </div>

      {message && (
        <div className="rounded-xl bg-red-50 p-4 text-red-600">
          {message}
        </div>
      )}

      <button
        disabled={isPending}
        className="w-full rounded-full bg-[#6A4535] py-4 font-semibold text-white transition hover:bg-[#57382c] disabled:opacity-60"
      >
        {isPending ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}