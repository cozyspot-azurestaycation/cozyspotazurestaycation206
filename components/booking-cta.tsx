"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function BookingCta() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Cozy Spot Azure Booking Inquiry — ${name || "Guest"}`
    );

    const body = encodeURIComponent(
      `Hello Cozy Spot Azure!

I would like to inquire about booking the unit.

Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}
Number of guests: ${guests}

Please let me know if the dates are available and the total rate.

Thank you!`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="book"
      className="bg-linen-dark py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-5">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">
            Book Your Stay
          </p>

          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Ready for your next cozy escape?
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
            Check your preferred dates and send us a booking inquiry.
            Cozy Spot Azure is a private staycation accommodation inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Booking form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border border-ink/10 bg-cloud p-5 shadow-card sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Check-in */}
            <label className="block">
              <span className="eyebrow">
                Check-in
              </span>

              <input
                required
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-linen px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
              />
            </label>

            {/* Check-out */}
            <label className="block">
              <span className="eyebrow">
                Check-out
              </span>

              <input
                required
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-linen px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
              />
            </label>

            {/* Guests */}
            <label className="block">
              <span className="eyebrow">
                Guests
              </span>

              <input
                required
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-linen px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
              />
            </label>

            {/* Name */}
            <label className="block">
              <span className="eyebrow">
                Your name
              </span>

              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Juan Dela Cruz"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-linen px-3 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-brass"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="mt-5 flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs leading-relaxed text-ink/45">
              We'll confirm availability and booking details with you.
            </p>

            <button
              type="submit"
              className="w-full rounded-full bg-ink px-7 py-3 text-sm font-medium text-linen transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure sm:w-auto"
            >
              Send Booking Inquiry →
            </button>

          </div>
        </form>

        {/* Direct contact */}
        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">

          <span className="text-xs text-ink/40">
            Prefer to message directly?
          </span>

          <a
            href={siteConfig.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-ink underline underline-offset-4 transition-colors hover:text-brass"
          >
            Message us on Messenger
          </a>

          <span className="hidden text-ink/20 sm:inline">
            ·
          </span>

          <a
            href={`tel:${siteConfig.phone}`}
            className="text-xs font-medium text-ink underline underline-offset-4 transition-colors hover:text-brass"
          >
            Call {siteConfig.phone}
          </a>

        </div>

      </div>
    </section>
  );
}
