import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Amenities | ${siteConfig.shortName}`,
  description:
    "Explore the resort-style amenities at Azure Urban Resort Residences in Parañaque — man-made beach, lap pool, wave pool, gym, basketball & tennis courts, and more, all steps from Cozy Spot Azure.",
  alternates: {
    canonical: `${siteConfig.url}/amenities`,
  },
  openGraph: {
    title: `Amenities | ${siteConfig.shortName}`,
    description:
      "Resort-style amenities at Azure Urban Resort Residences, Parañaque — man-made beach, pools, gym, sports courts, and more.",
    url: `${siteConfig.url}/amenities`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Amenities | ${siteConfig.shortName}`,
    description:
      "Resort-style amenities at Azure Urban Resort Residences, Parañaque.",
  },
};

type Amenity = { name: string; note?: string };
type AmenityGroup = { title: string; items: Amenity[] };

const amenityGroups: AmenityGroup[] = [
  {
    title: "Resort & Leisure",
    items: [
      { name: "Man-made beach", note: "The Philippines' first" },
      { name: "Lap pool with cascading waterfall" },
      { name: "Infinity wave pool" },
      { name: "Children's pool" },
      { name: "Poolside bar" },
      { name: "Roof deck garden" },
    ],
  },
  {
    title: "Sports & Recreation",
    items: [
      { name: "Basketball court" },
      { name: "Tennis court" },
      { name: "Beach volleyball court" },
    ],
  },
  {
    title: "Wellness",
    items: [{ name: "Fitness gym" }, { name: "Zen garden" }],
  },
  {
    title: "Family & Entertainment",
    items: [
      { name: "Multiple playgrounds" },
      { name: "Game room" },
      { name: "Kiddie water slide" },
    ],
  },
  {
    title: "Building Services",
    items: [
      { name: "24-hour front desk" },
      { name: "Elevator / lift access" },
      { name: "Concierge service" },
      { name: "Secure parking", note: "Fee applies" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: siteConfig.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  checkinTime: siteConfig.checkInTime,
  checkoutTime: siteConfig.checkOutTime,
  amenityFeature: amenityGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item.name,
      value: true,
    }))
  ),
};

export default function AmenitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-ivory">
        {/* Hero */}
        <section className="bg-navy px-5 pb-16 pt-32 text-linen">
          <div className="mx-auto max-w-6xl">
            <p className="text-[13px] font-medium uppercase tracking-widest text-brass">
              Azure Urban Resort Residences
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Resort Amenities
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-linen/75">
              {siteConfig.shortName} sits inside Azure Urban Resort
              Residences in Parañaque, Metro Manila — giving every guest
              access to a full resort-style amenity lineup, from a man-made
              beach to a rooftop garden.
            </p>
          </div>
        </section>

        {/* Amenity groups */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl space-y-14">
            {amenityGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-display text-2xl font-medium text-navy">
                  {group.title}
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="rounded-2xl border border-navy/10 bg-linen px-5 py-4"
                    >
                      <span className="block text-[14px] font-medium text-ink">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="mt-1 block text-[12px] text-ink/60">
                          {item.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy px-5 py-16 text-center text-linen">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-medium">
              Ready to book your stay?
            </h2>
            <p className="mt-3 text-[14px] text-linen/75">
              Enjoy all of these amenities from a private, comfortable unit
              at {siteConfig.shortName}.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-brass px-6 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-brass-light"
            >
              Book Your Stay
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
