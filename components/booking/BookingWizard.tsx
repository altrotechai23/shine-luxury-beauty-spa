"use client";

"use client";

import { useEffect, useRef, useState } from "react";
import type { Prisma } from "@prisma/client";

import BookingProgress from "./BookingProgress";
import BookingNavigation from "./BookingNavigation";

import StepService from "./StepService";
import StepDateTime from "./StepDateTime";
import StepCustomer from "./StepCustomer";
import BookingSuccess from "./BookingSuccess";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  services: Service[];
}

export interface BookingData {
  serviceId: string;
  date: string;
  time: string;

  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export default function BookingWizard({
  services,
}: Props) {
  const [step, setStep] = useState(0);

  const [success, setSuccess] =
    useState(false);

  const [booking, setBooking] =
    useState<BookingData>({
      serviceId: "",

      date: "",

      time: "",

      fullName: "",

      phone: "",

      email: "",

      notes: "",
    });

const topRef = useRef<HTMLDivElement>(null);

  const selectedService = services.find(
  (service) => service.id === booking.serviceId
);

useEffect(() => {
  const timer = setTimeout(() => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 120);

  return () => clearTimeout(timer);
}, [step]);

  function updateBooking(
    values: Partial<BookingData>
  ) {
    setBooking((prev) => ({
      ...prev,
      ...values,
    }));
  }

  function next() {
    setStep((s) =>
      Math.min(s + 1, 2)
    );
  }

  function previous() {
    setStep((s) =>
      Math.max(s - 1, 0)
    );
  }

  if (success) {
    return (
      <BookingSuccess />
    );
  }

  return (
    <div   ref={topRef} className="mx-auto max-w-6xl">

      <BookingProgress
        currentStep={step}
      />

      <div className="mt-12 rounded-[40px] bg-white p-8 shadow-xl">

        {step === 0 && (
          <StepService
            services={services}
            booking={booking}
            updateBooking={
              updateBooking
            }
          />
        )}

        {step === 1 && (
          <StepDateTime
            booking={booking}
            updateBooking={
              updateBooking
            }
          />
        )}

        {step === 2 && (
          <StepCustomer
            booking={booking}
            service={selectedService}
            updateBooking={
              updateBooking
            }
            onSuccess={() =>
              setSuccess(true)
            }
          />
        )}

      </div>

      <BookingNavigation
        currentStep={step}
        onNext={next}
        onPrevious={previous}
        booking={booking}
      />

    </div>
  );
}