import type { Metadata } from "next";

import { prisma } from "@/lib/prisma";

import BookingWizard from "@/components/booking/BookingWizard";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Book Appointment | SHINE Luxury Beauty Spa",
  description:
    "Book your appointment at SHINE Luxury Beauty Spa. Choose your treatment, preferred date and time, and secure your appointment online.",
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
    <main
      className="
        min-h-screen
        bg-[#F7F8F7]
        text-[#171B1C]
      "
    >
      <BookingWizard
        services={services}
      />

      <FloatingWhatsApp />
    </main>
  );
}