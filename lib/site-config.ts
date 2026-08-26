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
    "Cozy Spot Azure is a private staycation accommodation at Santorini Tower, Unit 206, Azure Urban Resort Residences in Parañaque, Metro Manila. A comfortable space for couples, families, birthdays, anniversaries, room surprise setups, and relaxing getaways. Operating since 2024.",

  // Everything (sitemap, canonical URLs, JSON-LD, Open Graph) reads from
  // this single value, so this is the only line you need to change on
  // launch day if the domain changes.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cozyspotazurestaycation206.vercel.app",

  // The year the business started operating — used in JSON-LD (foundingDate)
  // and in trust-building copy across the site.
  foundingYear: 2024,

  // Contact + booking channels
  email: "cozyspotstaycation@gmail.com",
  phone: "+63 998 363 9683",
  messengerUrl: "https://m.me/cozyspotstaycation",
  facebookUrl: "https://www.facebook.com/cozyspotstaycation",
  instagramUrl: "https://www.instagram.com/cozyspotstaycation",
  viberUrl: "https://viber.me/639279634475",
  airbnbUrl: "https://www.airbnb.com/h/cozyspotstaycation",

  // Address — used for local SEO (NAP consistency) + LodgingBusiness schema.
  address: {
    streetAddress:
      "Unit 206, Santorini Tower, Azure Urban Resort Residences, KM 16 W Service Rd",
    // Explicit floor + view, as requested — shown alongside the street address.
    floorAndView: "2nd Floor · Beach View Unit",
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
