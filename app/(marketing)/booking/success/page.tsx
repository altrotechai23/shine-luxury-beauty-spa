import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F5F0] px-6">
      <div className="max-w-xl rounded-[32px] bg-white p-10 text-center shadow-lg">
        <CircleCheckBig className="mx-auto h-16 w-16 text-green-600" />

        <h1 className="mt-6 font-heading text-4xl">
          Booking Received
        </h1>

        <p className="mt-4 text-neutral-600">
          Thank you for choosing SHINE Luxury Beauty Spa.
          We&quote ve received your appointment request and will
          contact you shortly to confirm your booking.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#6A4535] px-8 py-4 text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}