"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import ContactForm from "@/components/contact/ContactForm";

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+27 78 870 2149",
    href: "tel:+27788702149",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@shinebeautyspa.co.za",
    href: "mailto:info@shinebeautyspa.co.za",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "108 Long St, Cape Town City Centre",
    href: "https://www.google.com/maps/search/?api=1&query=Shine+Beauty+Spa+108+Long+St+Cape+Town",
  },
];

const hours = [
  ["Monday — Friday", "08:00 — 18:00"],
  ["Saturday", "08:00 — 17:00"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061519] text-white">
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Cyan glow */}

        <div
          className="
            absolute
            -left-64
            top-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#62AAB5]/10
            blur-[180px]
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -right-64
            top-[30%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D7C0A0]/10
            blur-[200px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#62AAB5]/5
            blur-[180px]
          "
        />

        {/* Futuristic grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,#061519_90%)]
            opacity-60
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-16
            pt-28
            sm:px-6
            sm:pb-20
            sm:pt-36
            lg:pb-24
          "
        >
          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.045]
              px-5
              py-2.5
              backdrop-blur-2xl
            "
          >
            <Sparkles
              size={15}
              className="text-[#62AAB5]"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-white/65
              "
            >
              Contact SHINE
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-8
              max-w-5xl
              font-heading
              text-[clamp(3.5rem,11vw,8rem)]
              font-medium
              leading-[0.86]
              tracking-[-0.045em]
              text-white
            "
          >
            Let&apos;s make
            <br />

            <span className="text-[#D7C0A0]">
              time for you.
            </span>
          </h1>

          {/* Intro */}

          <div
            className="
              mt-8
              flex
              max-w-3xl
              flex-col
              gap-6
              sm:mt-10
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                max-w-2xl
                text-base
                leading-8
                text-white/50
                sm:text-lg
                sm:leading-9
              "
            >
              Whether you&apos;re ready to book your next
              treatment, have a question or simply want
              to discover more about SHINE, we&apos;re here
              to help.
            </p>

            <Link
              href="/booking"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-3
                rounded-full
                border
                border-[#62AAB5]/20
                bg-[#62AAB5]/10
                px-5
                py-3
                text-xs
                text-[#8CCBD3]
                backdrop-blur-xl
                transition
                hover:border-[#62AAB5]/40
                hover:bg-[#62AAB5]/20
              "
            >
              <CalendarDays size={15} />

              Book an appointment

              <ArrowUpRight
                size={14}
                className="
                  transition
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}

      <section className="relative z-10 pb-24 sm:pb-32">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            px-5
            sm:px-6
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ===================================================== */}

          <div className="lg:col-span-5">
            <div
              className="
                h-full
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.035]
                p-6
                backdrop-blur-3xl
                sm:rounded-[40px]
                sm:p-8
                lg:p-10
              "
            >
              {/* Section heading */}

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#D7C0A0]
                  "
                >
                  Connect with us
                </p>

                <h2
                  className="
                    mt-5
                    font-heading
                    text-3xl
                    leading-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Your next
                  <br />
                  beautiful moment
                  <br />
                  starts here.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Visit our Cape Town studio or reach
                  out directly. Our team is ready to help
                  you find the experience that&apos;s right
                  for you.
                </p>
              </div>

              {/* Contact details */}

              <div className="mt-10 space-y-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/5
                        bg-white/[0.025]
                        p-4
                        transition
                        duration-300
                        hover:border-white/10
                        hover:bg-white/[0.06]
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#62AAB5]/15
                          bg-[#62AAB5]/10
                        "
                      >
                        <Icon
                          size={17}
                          className="text-[#8CCBD3]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.28em]
                            text-white/30
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-sm
                            text-white/75
                            transition
                            group-hover:text-white
                          "
                        >
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          shrink-0
                          text-white/20
                          transition
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[#8CCBD3]
                        "
                      />
                    </a>
                  );
                })}
              </div>

              {/* =================================================
                  HOURS
              ================================================= */}

              <div
                className="
                  mt-8
                  border-t
                  border-white/10
                  pt-8
                "
              >
                <div className="flex items-center gap-3">
                  <Clock3
                    size={16}
                    className="text-[#D7C0A0]"
                  />

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/50
                    "
                  >
                    Opening hours
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        text-sm
                      "
                    >
                      <span className="text-white/40">
                        {day}
                      </span>

                      <span
                        className={
                          time === "Closed"
                            ? "text-[#D7C0A0]/70"
                            : "text-white/70"
                        }
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  WHATSAPP MINI CTA
              ================================================= */}

              <a
                href="https://wa.me/27788702149"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-[#62AAB5]/15
                  bg-[#62AAB5]/[0.06]
                  p-4
                  transition
                  duration-300
                  hover:border-[#62AAB5]/30
                  hover:bg-[#62AAB5]/10
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#62AAB5]/10
                    "
                  >
                    <MessageCircle
                      size={17}
                      className="text-[#8CCBD3]"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-white/80">
                      Prefer WhatsApp?
                    </p>

                    <p className="mt-0.5 text-xs text-white/35">
                      Chat directly with SHINE
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="
                    text-[#8CCBD3]
                    transition
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT — WHATSAPP FORM
          ===================================================== */}

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP / LOCATION
      ========================================================= */}

      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.035]
              p-5
              sm:rounded-[40px]
              sm:p-8
              lg:p-10
            "
          >
            {/* Map atmosphere */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-[400px]
                w-[400px]
                rounded-full
                bg-[#D7C0A0]/10
                blur-[140px]
              "
            />

            <div
              className="
                relative
                grid
                gap-8
                lg:grid-cols-2
                lg:items-center
              "
            >
              {/* Location text */}

              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D7C0A0]/15
                      bg-[#D7C0A0]/10
                    "
                  >
                    <MapPin
                      size={18}
                      className="text-[#D7C0A0]"
                    />
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-[#D7C0A0]
                    "
                  >
                    Find SHINE
                  </p>
                </div>

                <h2
                  className="
                    mt-6
                    font-heading
                    text-3xl
                    text-white
                    sm:text-4xl
                  "
                >
                  In the heart of
                  <br />
                  Cape Town.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Find us at 108 Long Street in Cape Town
                  City Centre. Come in, slow down and
                  experience SHINE.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shine+Beauty+Spa+108+Long+St+Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-xs
                    text-white/70
                    backdrop-blur-xl
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  Open in Google Maps

                  <ArrowUpRight
                    size={14}
                    className="
                      transition
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>

              {/* Map visual */}

              <div
                className="
                  relative
                  min-h-[280px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#09191D]
                  sm:min-h-[340px]
                "
              >
                {/* Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-[0.06]
                    [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    [background-size:50px_50px]
                  "
                />

                {/* Map roads */}

                <div
                  className="
                    absolute
                    left-[-10%]
                    top-1/2
                    h-px
                    w-[120%]
                    rotate-[12deg]
                    bg-white/10
                  "
                />

                <div
                  className="
                    absolute
                    left-[-10%]
                    top-[38%]
                    h-px
                    w-[120%]
                    -rotate-[24deg]
                    bg-white/5
                  "
                />

                <div
                  className="
                    absolute
                    left-[52%]
                    top-[-20%]
                    h-[140%]
                    w-px
                    rotate-[18deg]
                    bg-white/10
                  "
                />

                {/* Location pulse */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      absolute
                      h-24
                      w-24
                      animate-ping
                      rounded-full
                      bg-[#62AAB5]/10
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#62AAB5]/30
                      bg-[#62AAB5]/15
                      shadow-[0_0_50px_rgba(98,170,181,.25)]
                      backdrop-blur-xl
                    "
                  >
                    <MapPin
                      size={21}
                      className="text-[#8CCBD3]"
                    />
                  </div>
                </div>

                {/* Address */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <p className="text-xs text-white/75">
                    108 Long St
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    Cape Town City Centre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative z-10 pb-28 sm:pb-36">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#62AAB5]/20
              bg-[#62AAB5]/10
            "
          >
            <Sparkles
              size={20}
              className="text-[#8CCBD3]"
            />
          </div>

          <p
            className="
              mt-7
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#D7C0A0]
            "
          >
            Your SHINE experience awaits
          </p>

          <h2
            className="
              mt-5
              font-heading
              text-4xl
              leading-tight
              text-white
              sm:text-6xl
            "
          >
            Ready when
            <br />
            <span className="text-[#D7C0A0]">
              you are.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/40
              sm:text-base
            "
          >
            Take a moment for yourself. Book your
            appointment or start a conversation with
            our team on WhatsApp.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/booking"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#62AAB5]
                px-7
                text-sm
                font-medium
                text-[#061519]
                shadow-[0_15px_50px_rgba(98,170,181,.18)]
                transition
                hover:bg-[#78c1ca]
              "
            >
              <CalendarDays size={17} />

              Book appointment

              <ArrowUpRight
                size={15}
                className="
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <a
              href="https://wa.me/27788702149"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-7
                text-sm
                text-white/75
                backdrop-blur-xl
                transition
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              <MessageCircle size={17} />

              WhatsApp SHINE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}