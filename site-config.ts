/**
 * Single source of truth for Cozy Spot Azure.
 *
 * Used across metadata, structured data (JSON-LD),
 * footer, sitemap, navigation, and booking sections.
 */

export const siteConfig = {
  name: "Cozy Spot Azure Staycation",
  shortName: "Cozy Spot Azure",

  tagline: "Your little escape from the everyday.",

  description:
    "Cozy Spot Azure is a private staycation accommodation at Santorini Tower, Unit 206, Azure Urban Resort Residences in Parañaque, Metro Manila. A comfortable space for couples, families, birthdays, anniversaries, room surprise setups, and relaxing getaways.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cozyspotazure.vercel.app",

  // Contact + booking channels
  email: "hello@cozyspotazure.com",

  // Replace with your actual active number if different.
  phone: "+63 998 363 9683",

  messengerUrl:
    "https://m.me/cozyspotazure",

  facebookUrl:
    "https://facebook.com/cozyspotazure",

  instagramUrl:
    "https://instagram.com/cozyspotazure",

  // Official location
  address: {
    streetAddress:
      "Unit 206, Santorini Tower, Azure Urban Resort Residences, KM 16 W Service Rd",

    addressLocality:
      "Parañaque City",

    addressRegion:
      "Metro Manila",

    postalCode:
      "1700",

    addressCountry:
      "PH",
  },

  // Approximate location for local SEO / structured data.
  geo: {
    latitude: 14.4793,
    longitude: 121.0198,
  },

  priceRange: "₱₱",

  checkInTime: "14:00",
  checkOutTime: "12:00",

  nav: [
    {
      label: "Stay",
      href: "#stay",
    },
    {
      label: "Experiences",
      href: "#experiences",
    },
    {
      label: "Location",
      href: "#location",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
