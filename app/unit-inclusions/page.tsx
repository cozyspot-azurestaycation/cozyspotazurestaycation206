import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What's Included — Cozy Spot Azure Staycation",
  description:
    "Everything included in your stay at Cozy Spot Azure — room amenities, entertainment, kitchenware — plus wave pool and parking fees to plan around.",
};

const roomInclusions: { label: string; image?: string }[] = [
  { label: "Queen sized bed", image: "/images/inclusions/celebration-floral-arch-bed-setup.jpg" },
  { label: "2 queen sized pillows" },
  { label: "4pcs standard pillows with cushion" },
  { label: "2 seater sofa and extra mattress" },
  { label: "50\" smart TV" },
  { label: "Netflix and YouTube access" },
  { label: "Fast WiFi connection (fibr connection)" },
  { label: "Air-conditioning unit" },
  { label: "Electric fan" },
  { label: "Bluetooth karaoke with 2 mics" },
  { label: "Mini billiard", image: "/images/inclusions/mini-billiard-table-lounge.jpg" },
  { label: "PS4", image: "/images/inclusions/ps4-console-controllers-games.jpg" },
  { label: "Board games" },
  { label: "Card games" },
  { label: "Dining and kitchenware" },
  { label: "Rice cooker" },
  { label: "Refrigerator" },
  { label: "Microwave oven" },
  { label: "Induction stove" },
  { label: "Full body mirror" },
  { label: "Bath towels" },
  { label: "Hot and cold shower", image: "/images/inclusions/modern-bathroom-rain-shower.jpg" },
  { label: "Hair blower" },
];

// A handful of hero shots for the top gallery strip
const galleryImages: { src: string; alt: string }[] = [
  { src: "/images/inclusions/celebration-floral-arch-bed-setup.jpg", alt: "Bed setup with floral arch styling" },
  { src: "/images/inclusions/cozy-corner-plant-reading-lamp.jpg", alt: "Cozy reading corner" },
  { src: "/images/inclusions/mini-billiard-table-lounge.jpg", alt: "Mini billiard table lounge" },
  { src: "/images/inclusions/modern-bathroom-rain-shower.jpg", alt: "Modern bathroom with rain shower" },
];

const exclusions = [
  {
    label: "Wave Pool",
    detail: "₱250 per head, per shift",
    note: "7AM–12NN · 2PM–7PM · Closed every Tuesday",
    image: "/images/inclusions/azure-resort-pool-daytime-view.jpg",
  },
  {
    label: "Parking",
    detail: "₱250–₱380",
    note: "Depending on vehicle and parking option",
  },
];

export default function InclusionsPage() {
  return (
    <section className="bg-navy px-5 pb-24 pt-32 text-ivory sm:pt-40">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-azure-soft">What's Included</p>

          <h1 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            Everything in your stay.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">
            Here's exactly what's set up in the unit for you, and the two
            things billed separately so there are no surprises at check-in.
          </p>
        </div>

        {/* Photo gallery strip */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Room inclusions */}
        <div className="mt-14">
          <h2 className="font-display text-xl font-medium text-ivory sm:text-2xl">
            Room inclusions
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 rounded-2xl border border-ivory/70 px-6 py-7 sm:grid-cols-2 sm:px-9 sm:py-8 lg:grid-cols-3">
            {roomInclusions.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-1 text-gold" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-ivory/85 sm:text-[15px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions */}
        <div className="mt-14">
          <h2 className="font-display text-xl font-medium text-ivory sm:text-2xl">
            Not included
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {exclusions.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-2xl border border-ivory/70"
              >
                {item.image && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="px-6 py-6 sm:px-7 sm:py-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                    {item.label}
                  </p>

                  <p className="mt-3 font-display text-2xl font-medium text-gold sm:text-3xl">
                    {item.detail}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to booking */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-ivory/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ivory/60">
            Ready to book, or still deciding?
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/#reviews"
              className="text-sm text-ivory/60 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory"
            >
              Read guest reviews
            </Link>

            <Link
              href="/#booking"
              className="inline-flex rounded-full bg-gold px-7 py-3 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
