"use client";

import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[0.35em] text-sm text-[#8D5F4A]">
            Gallery
          </span>

          <h2 className="mt-5 font-heading text-5xl">
            Beautiful Results
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image}
              className="group relative h-[420px] overflow-hidden rounded-[30px]"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}