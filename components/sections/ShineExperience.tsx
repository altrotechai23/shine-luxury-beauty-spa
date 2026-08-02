"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Luxury private treatment rooms",
  "Qualified beauty professionals",
  "Premium international products",
  "Relaxing spa atmosphere",
];

export default function ShineExperience() {
  return (
    <section className="bg-[#F8F5F0] py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >
          <div className="relative h-[700px] overflow-hidden rounded-[40px]">
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Spa"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-8 rounded-3xl bg-white p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8D5F4A]">
              Since
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#3D2C24]">
              2024
            </h3>

            <p className="mt-2 text-neutral-500">
              Creating beautiful experiences.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className="uppercase tracking-[0.35em] text-[#8D5F4A] text-sm">
            The SHINE Experience
          </span>

          <h2 className="mt-6 font-heading text-5xl leading-tight text-[#2F201B]">
            Beauty is not
            <br />
            just a service.
            <br />
            It s an experience.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Every appointment is designed to make you feel relaxed,
            confident and radiant. From the moment you arrive,
            you ll enjoy personalised care in a calm, elegant
            environment created around your wellbeing.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="rounded-full bg-[#6A4535] p-2 text-white">
                  <Check size={16} />
                </div>

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/booking"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#6A4535] px-8 py-4 text-white transition hover:bg-[#51342A]"
          >
            Book Your Experience

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}