import { siteConfig } from "@/lib/site-config";

/**
 * Main structured data for Cozy Spot Azure.
 *
 * Helps search engines and AI systems understand:
 * - what Cozy Spot Azure is
 * - where it is located
 * - how guests can contact/book
 * - the type of accommodation
 *
 * No fabricated ratings or review scores are included.
 */

export function LodgingBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",

    "@id": `${siteConfig.url}#cozy-spot-azure`,

    name: siteConfig.name,
    alternateName: siteConfig.shortName,

    description: siteConfig.description,

    url: siteConfig.url,

    telephone: siteConfig.phone,
    email: siteConfig.email,

    priceRange: siteConfig.priceRange,

    checkinTime: siteConfig.checkInTime,
    checkoutTime: siteConfig.checkOutTime,

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

    areaServed: {
      "@type": "City",
      name: "Parañaque City",
    },

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private accommodation",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Kitchen essentials",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room surprise setup",
        value: true,
      },
    ],

    sameAs: [
      siteConfig.facebookUrl,
      siteConfig.instagramUrl,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}


/**
 * FAQ structured data.
 *
 * Used on the FAQ page so search engines can understand
 * the questions and answers presented to guests.
 */

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: items.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}


/**
 * Breadcrumb structured data.
 *
 * Helps search engines understand the hierarchy
 * between pages on the website.
 */

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
