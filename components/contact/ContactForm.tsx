"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  User,
} from "lucide-react";

const WHATSAPP_NUMBER = "27788702149";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const preferredDate = String(
      formData.get("preferredDate") || ""
    ).trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "✨ *SHINE LUXURY BEAUTY SPA*",
      "",
      "Hello SHINE! I'd like to get in touch.",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      service ? `*Service:* ${service}` : "",
      preferredDate
        ? `*Preferred date:* ${preferredDate}`
        : "",
      "",
      message
        ? `*Message:*\n${message}`
        : "I'd love to know more about your services.",
      "",
      "Sent from the SHINE website.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSending(false);
    }, 700);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.045]
        p-5
        shadow-[0_40px_120px_rgba(0,0,0,.35)]
        backdrop-blur-3xl
        sm:rounded-[40px]
        sm:p-8
        lg:p-10
      "
    >
      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-64
          w-64
          rounded-full
          bg-[#62AAB5]/10
          blur-[100px]
        "
      />

      {/* Header */}

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#62AAB5]/20
              bg-[#62AAB5]/10
            "
          >
            <MessageCircle
              size={17}
              className="text-[#8CCBD3]"
            />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D7C0A0]">
              WhatsApp Concierge
            </p>

            <p className="mt-1 text-xs text-white/40">
              We usually reply personally.
            </p>
          </div>
        </div>

        <h2
          className="
            mt-8
            font-heading
            text-3xl
            leading-tight
            text-white
            sm:text-4xl
          "
        >
          Let &apos;s create
          <br />
          something beautiful.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white/45">
          Tell us a little about what you&apos; re looking for and
          we&apos; ll continue the conversation with you on WhatsApp.
        </p>
      </div>

      {/* Fields */}

      <div className="relative z-10 mt-8 space-y-4">
        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            Your name
          </label>

          <div className="relative">
            <User
              size={16}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-white/25
              "
            />

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/10
                pl-11
                pr-4
                text-sm
                text-white
                outline-none
                placeholder:text-white/25
                transition
                focus:border-[#62AAB5]/50
                focus:bg-white/[0.06]
              "
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            Phone / WhatsApp
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+27 ..."
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/10
              px-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
              transition
              focus:border-[#62AAB5]/50
              focus:bg-white/[0.06]
            "
          />
        </div>

        {/* Service */}

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            What can we help with?
          </label>

          <select
            id="service"
            name="service"
            defaultValue=""
            className="
              h-14
              w-full
              appearance-none
              rounded-2xl
              border
              border-white/10
              bg-[#09191d]
              px-4
              text-sm
              text-white/70
              outline-none
              transition
              focus:border-[#62AAB5]/50
            "
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="Beauty Treatment">
              Beauty Treatment
            </option>

            <option value="Manicure">
              Manicure
            </option>

            <option value="Pedicure">
              Pedicure
            </option>

            <option value="Nails">
              Nails
            </option>

            <option value="Other">
              Something else
            </option>
          </select>
        </div>

        {/* Date */}

        <div>
          <label
            htmlFor="preferredDate"
            className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            Preferred date
          </label>

          <div className="relative">
            <CalendarDays
              size={16}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-white/25
              "
            />

            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/10
                pl-11
                pr-4
                text-sm
                text-white/70
                outline-none
                transition
                focus:border-[#62AAB5]/50
              "
            />
          </div>
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you're looking for..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-black/10
              px-4
              py-4
              text-sm
              leading-7
              text-white
              outline-none
              placeholder:text-white/25
              transition
              focus:border-[#62AAB5]/50
              focus:bg-white/[0.06]
            "
          />
        </div>
      </div>

      {/* Submit */}

      <div className="relative z-10 mt-6">
        <button
          type="submit"
          disabled={isSending}
          className="
            group
            flex
            h-16
            w-full
            items-center
            justify-between
            rounded-2xl
            bg-[#62AAB5]
            px-5
            text-left
            text-[#061519]
            shadow-[0_15px_50px_rgba(98,170,181,.2)]
            transition-all
            duration-300
            hover:bg-[#78c1ca]
            hover:shadow-[0_20px_70px_rgba(98,170,181,.3)]
            disabled:cursor-wait
            disabled:opacity-70
            sm:px-6
          "
        >
          <span>
            <span className="block text-sm font-semibold">
              {isSending
                ? "Opening WhatsApp..."
                : "Continue on WhatsApp"}
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] opacity-50">
              Talk to SHINE
            </span>
          </span>

          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#061519]/10
              transition
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight size={20} />
          </span>
        </button>
      </div>

      <p className="relative z-10 mt-4 text-center text-[10px] leading-5 text-white/25">
        Your message will open directly in WhatsApp.
        No account or form submission required.
      </p>
    </form>
  );
}