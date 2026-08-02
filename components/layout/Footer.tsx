import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#faf8f5]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl">SHINE</h3>
          <p className="mt-4 text-sm text-neutral-600">
            Luxury Beauty Spa offering premium beauty treatments in a calm,
            elegant environment.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Business Hours</h4>

          <div className="space-y-2 text-sm text-neutral-600">
            <p>Mon - Fri : 08:00 - 18:00</p>
            <p>Saturday : 08:00 - 17:00</p>
            <p>Sunday : Closed</p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>

          <div className="space-y-2 text-sm text-neutral-600">
            <p>📞 +27 78 870 2149</p>
            <p>✉ info@shinebeautyspa.co.za</p>
            <p>Cape Town, South Africa</p>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} SHINE Luxury Beauty Spa. All rights
        reserved.
      </div>
    </footer>
  );
}