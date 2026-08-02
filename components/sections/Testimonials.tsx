const testimonials = [
  {
    name: "Sarah M.",
    review:
      "Absolutely amazing service. The atmosphere is luxurious and relaxing. I left feeling like a new person.",
  },
  {
    name: "Amanda P.",
    review:
      "Professional staff and beautiful results every visit. Highly recommended.",
  },
  {
    name: "Jessica L.",
    review:
      "The best beauty salon experience I've ever had. Worth every cent.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5F0] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.35em] text-[#8D5F4A] text-sm">
            Testimonials
          </span>

          <h2 className="mt-5 font-heading text-5xl">
            Loved by Our Clients
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-[30px] bg-white p-10 shadow-sm"
            >
              <div className="mb-5 text-amber-500">
                ★★★★★
              </div>

              <p className="leading-8 text-neutral-600">
                &quote{item.review}&quote
              </p>

              <h4 className="mt-8 font-semibold">
                {item.name}
              </h4>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}