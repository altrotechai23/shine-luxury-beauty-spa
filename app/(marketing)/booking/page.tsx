import { prisma } from "@/lib/prisma";

import BookingWizard from "@/components/booking/BookingWizard";

export const metadata = {
  title: "Book Appointment",
};

export default async function BookingPage() {
  const services = await prisma.service.findMany({
    where: {
      active: true,
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        title: "asc",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-stone-50">

      {/* <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <span className="rounded-full bg-[#6A4535]/10 px-5 py-2 text-sm font-medium text-[#6A4535]">
            Shine Luxury Beauty Spa
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Book Your Appointment
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Choose your treatment, select your preferred date,
            and complete your booking in just a few simple steps.
          </p>

        </div>

      </section> */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        <BookingWizard
          services={services}
        />

      </section>

    </main>
  );
}