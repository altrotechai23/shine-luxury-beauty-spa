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
    <section className="relative overflow-hidden bg-[#081B1F] py-32">
      {/* Background Glow */}

      <div className="absolute left-[-180px] top-0 h-[520px] w-[520px] rounded-full bg-[#62AAB5]/10 blur-[160px]" />

      <div className="absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[#D7C0A0]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-[#62AAB5] backdrop-blur-xl">
            The Shine Experience
          </span>

          <h2 className="mt-8 font-heading text-5xl leading-tight text-white md:text-6xl">
            More than a Beauty Salon.
            <br />
            <span className="text-[#D7C0A0]">
              A Luxury Experience.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Every visit has been designed around comfort,
            elegance and exceptional beauty treatments.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,.35)]">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
                alt="Luxury Spa"
                width={700}
                height={900}
                className="h-[720px] w-full object-cover transition duration-[6000ms] hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081B1F]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-10 left-10 rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#62AAB5]">
                Since
              </p>

              <h3 className="mt-3 font-heading text-5xl text-white">
                2024
              </h3>

              <p className="mt-2 text-white/60">
                Creating beautiful experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-[#62AAB5]">
              The Shine Experience
            </span>

            <h2 className="mt-6 font-heading text-5xl leading-tight text-white lg:text-6xl">
              Beauty is not
              <br />
              just a service.
              <br />
              <span className="text-[#D7C0A0]">
                It is an experience.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              Every appointment is designed to make you feel
              relaxed, confident and radiant. From the moment
              you arrive you will enjoy personalised care in a
              calm, elegant environment created around your
              wellbeing.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#62AAB5] shadow-lg">
                    <Check size={18} />
                  </div>

                  <span className="text-lg text-white">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/booking"
                className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[#62AAB5] px-9 py-5 font-semibold text-white shadow-[0_25px_60px_rgba(98,170,181,.35)] transition"
              >
                Book Your Experience

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}