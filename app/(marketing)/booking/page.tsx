import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="bg-[#F8F5F0] py-24">
      <div className="mx-auto max-w-3xl px-6">

        <h1 className="font-heading text-5xl text-center">
          Book Appointment
        </h1>

        <p className="mt-6 text-center text-neutral-600">
          Complete the form below and we &quote ll confirm your appointment.
        </p>

        <BookingForm />

      </div>
    </main>
  );
}