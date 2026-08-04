"use client";

import { useState } from "react";
import type { Prisma } from "@prisma/client";

import BookingLoader from "./BookingLoader";
import BookingSummary from "./BookingSummary";

import { createAppointment } from "@/actions/appointment";

import type { BookingData } from "./BookingWizard";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  booking: BookingData;
  service?: Service;
  updateBooking: (
    values: Partial<BookingData>
  ) => void;
  onSuccess: () => void;
}

export default function StepCustomer({
  booking,
  service,
  updateBooking,
  onSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  async function handleSubmit() {
    if (!service) return;

    setLoading(true);

    const formData = new FormData();

    formData.append(
      "fullName",
      booking.fullName
    );

    formData.append(
      "phone",
      booking.phone
    );

    formData.append(
      "email",
      booking.email
    );

    formData.append(
      "serviceId",
      booking.serviceId
    );

    formData.append(
      "date",
      booking.date
    );

    formData.append(
      "time",
      booking.time
    );

    formData.append(
      "notes",
      booking.notes
    );

    formData.append(
      "status",
      "PENDING"
    );

    const result =
      await createAppointment(
        formData
      );

    if (result.success) {
      onSuccess();
    }

    setLoading(false);
  }

  if (loading) {
    return <BookingLoader />;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

      {/* Form */}

      <div className="space-y-6">

        <div>

          <h2 className="text-4xl font-bold">
            Your Details
          </h2>

          <p className="mt-3 text-neutral-500">
            Almost done! Just a few details.
          </p>

        </div>

        <input
          value={booking.fullName}
          onChange={(e) =>
            updateBooking({
              fullName: e.target.value,
            })
          }
          placeholder="Full Name"
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          value={booking.phone}
          onChange={(e) =>
            updateBooking({
              phone: e.target.value,
            })
          }
          placeholder="Phone Number"
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          type="email"
          value={booking.email}
          onChange={(e) =>
            updateBooking({
              email: e.target.value,
            })
          }
          placeholder="Email Address"
          className="h-14 w-full rounded-2xl border px-5"
        />

        <textarea
          rows={5}
          value={booking.notes}
          onChange={(e) =>
            updateBooking({
              notes: e.target.value,
            })
          }
          placeholder="Additional Notes (optional)"
          className="w-full rounded-2xl border p-5"
        />

        <button
          onClick={handleSubmit}
          disabled={
            !booking.fullName ||
            !booking.phone ||
            !booking.email
          }
          className="h-14 w-full rounded-full bg-[#6A4535] font-semibold text-white transition hover:bg-[#593a2d] disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          Book Appointment
        </button>

      </div>

      {/* Summary */}

      <div className="lg:sticky lg:top-24 lg:h-fit">

        <BookingSummary
          service={service}
          date={booking.date}
          time={booking.time}
        />

      </div>

    </div>
  );
}