import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-[#2F201B] py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="font-heading text-5xl text-white">
          Ready to Experience Luxury?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
          Book your appointment today and discover why our clients
          keep coming back.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/booking"
            className="rounded-full bg-white px-8 py-4 font-medium text-[#6A4535]"
          >
            Book Appointment
          </Link>

          <Link
            href="https://wa.me/27788702149"
            className="rounded-full border border-white px-8 py-4 text-white"
          >
            WhatsApp Us
          </Link>

        </div>

      </div>
    </section>
  );
}