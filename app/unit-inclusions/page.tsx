import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What's Included — Cozy Spot Azure Staycation",
  description:
    "Everything included in your stay at Cozy Spot Azure — room amenities, entertainment, kitchenware — plus wave pool and parking fees to plan around.",
  alternates: {
    canonical: "/unit-inclusions",
  },
};

const roomInclusions: string[] = [
  "Queen sized bed",
  "2 queen sized pillows",
  "4pcs standard pillows with cushion",
  "2 seater sofa and extra mattress",
  "50\" smart TV",
  "Netflix and YouTube access",
  "Fast WiFi connection (fibr connection)",
  "Air-conditioning unit",
  "Electric fan",
  "Bluetooth karaoke with 2 mics",
  "Mini billiard",
  "PS4",
  "Board games",
  "Card games",
  "Dining and kitchenware",
  "Rice cooker",
  "Refrigerator",
  "Microwave oven",
  "Induction stove",
  "Full body mirror",
  "Bath towels",
  "Hot and cold shower",
  "Hair blower",
];

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/inclusions/mini-billiard-table-lounge.jpg", alt: "Mini billiard table lounge" },
  { src: "/images/inclusions/ps4-console-controllers-games.jpg", alt: "PS4 with controllers set up for game night" },
  { src: "/images/inclusions/modern-bathroom-rain-shower.jpg", alt: "Modern bathroom with rain shower" },
  { src: "/images/inclusions/cozy-corner-plant-reading-lamp.jpg", alt: "Cozy reading corner" },
  { src: "/images/inclusions/birthday-celebration-floral-arch-balloons.jpg", alt: "Birthday celebration setup with balloons" },
];

type Exclusion = {
  label: string;
  detail: string;
  note: string;
};

const exclusions: Exclusion[] = [
  {
    label: "Wave Pool",
    detail: "\u20B1250 per head, per shift",
    note: "7AM\u201312NN \u00B7 2PM\u20137PM \u00B7 Closed every Tuesday",
  },
  {
    label: "Parking",
    detail: "\u20B1250\u2013\u20B1380",
    note: "Depending on vehicle and parking option",
  },
];

export default function InclusionsPage() {
  return (
    <section className="bg-navy text-ivory">
      <BreadcrumbJsonLd
        items={[
          {
            name: "Home",
            url: siteConfig.url,
          },
          {
            name: "What's Included",
            url: `${siteConfig.url}/unit-inclusions`,
          },
        ]}
      />

      {/* Hero image */}
      <div className="relative h-[46vh] w-full overflow-hidden sm:h-[56vh]">
        <Image
          src="/images/inclusions/cozy-spot-azure-wave-pool-hero.png"
          alt="Cozy Spot Azure resort view"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Darken the whole photo so any text reads clearly */}
        <div className="absolute inset-0 bg-navy/55" />
        {/* Extra scrim behind the text specifically, for guaranteed contrast */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:pb-14">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-azure-soft drop-shadow-sm">What's Included</p>
            <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-ivory drop-shadow-md sm:text-5xl">
              Everything in your stay.
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 pb-24 pt-14 sm:pt-16">
        <div className="mx-auto max-w-5xl">

          <p className="max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">
            Here's exactly what's set up in the unit for you, and the two
            things billed separately so there are no surprises at check-in.
          </p>

          {/* Room inclusions */}
          <div className="mt-10">
            <h2 className="font-display text-xl font-medium text-ivory sm:text-2xl">
              Room inclusions
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 rounded-2xl border border-ivory/70 px-6 py-7 sm:grid-cols-2 sm:px-9 sm:py-8 lg:grid-cols-3">
              {roomInclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-gold" aria-hidden="true">
                    &#10003;
                  </span>
                  <span className="text-sm leading-relaxed text-ivory/85 sm:text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo gallery */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {galleryImages.slice(0, 4).map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Wide closing tile */}
            {galleryImages[4] ? (
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl sm:mt-8">
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>

          {/* Exclusions */}
          <div className="mt-16 sm:mt-20">
            <h2 className="font-display text-xl font-medium text-ivory sm:text-2xl">
              Not included
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {exclusions.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ivory/70 px-6 py-6 sm:px-7 sm:py-7"
                >
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
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
