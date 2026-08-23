/**
 * Single source of truth for business details, used across metadata,
 * structured data (JSON-LD), the footer, and the sitemap.
 *
 * EDIT THIS FILE FIRST. Everything else reads from here.
 */

export const siteConfig = {
  name: "Cozy Spot Azure Staycation",
  shortName: "Cozy Spot Azure",
  tagline: "Your little escape from the everyday.",
  description:
    "A private, cozy staycation space in Metro Manila for couples' getaways, birthdays, anniversaries, family escapes, and quiet weekends in. Book directly with real, verified photos and reviews.",

  // Replace once the domain is purchased. Everything (sitemap, canonical
  // URLs, JSON-LD, Open Graph) reads from this single value, so this is
  // the only line you need to change on launch day.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cozyspotazure.vercel.app",

  // Contact + booking channels
  email: "hello@cozyspotazure.com",
  phone: "+63-900-000-0000",
  messengerUrl: "https://m.me/cozyspotazure", // replace with your real Page username
  facebookUrl: "https://facebook.com/cozyspotazure",
  instagramUrl: "https://instagram.com/cozyspotazure",

  // Address — used for local SEO (NAP consistency) + LodgingBusiness schema.
  // Replace with the exact address once you're ready to publish it publicly,
  // or keep it street-level only and share the exact unit after booking,
  // as noted in the trust section copy.
  address: {
    streetAddress: "Unit 000, Sample Street",
    addressLocality: "Parañaque City",
    addressRegion: "Metro Manila",
    postalCode: "1700",
    addressCountry: "PH",
  },
  geo: {
    // Approximate coordinates — replace with the exact pin before launch.
    latitude: 14.4793,
    longitude: 121.0198,
  },

  priceRange: "₱₱", // shows in search results / schema
  checkInTime: "14:00",
  checkOutTime: "12:00",

  nav: [
    { label: "Stay", href: "#stay" },
    { label: "Experiences", href: "#experiences" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
