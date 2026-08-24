"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * This form has no backend by default — it composes a pre-filled email via
 * `mailto:` so it works the moment you deploy, with zero services to wire
 * up. When you're ready for a real inbox flow, swap `handleSubmit` for a
 * POST to Formspree, Getform, or a Vercel API route.
 */
export function BookingCta() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking inquiry — ${name || "Guest"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\n`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="book" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
      <p className="eyebrow text-center">Ready For Your Stay?</p>
      <h2 className="mt-3 text-center font-display text-3xl font-medium sm:text-4xl">
        Check availability.
      </h2>

      <form onSubmit={handleSubmit} className="ticket-stub mt-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-6 p-7 sm:grid-cols-3 sm:p-8">
          <label className="block">
            <span className="eyebrow">Check-in</span>
            <input
              required
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-2 w-full rounded-lg border border-ivory/20 bg-transparent px-3 py-2 font-mono text-sm text-ivory"
            />
          </label>
          <label className="block">
            <span className="eyebrow">Check-out</span>
            <input
              required
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-2 w-full rounded-lg border border-ivory/20 bg-transparent px-3 py-2 font-mono text-sm text-ivory"
            />
          </label>
          <label className="block">
            <span className="eyebrow">Guests</span>
            <input
              required
              type="number"
              min={1}
              max={12}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 w-full rounded-lg border border-ivory/20 bg-transparent px-3 py-2 font-mono text-sm text-ivory"
            />
          </label>
        </div>

        <div className="ticket-perforation mx-8" />

        <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <label className="block w-full sm:max-w-[220px]">
            <span className="eyebrow">Your name</span>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Dela Cruz"
              className="mt-2 w-full rounded-lg border border-ivory/20 bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-ivory/30"
            />
          </label>
          <button
            type="submit"
            className="w-full shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-dark sm:w-auto"
          >
            Send Inquiry
          </button>
        </div>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={siteConfig.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ivory/20 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:border-ivory/40"
        >
          Message us on Messenger
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="rounded-full border border-ivory/20 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:border-ivory/40"
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
