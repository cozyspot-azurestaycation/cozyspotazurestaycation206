import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { LodgingBusinessJsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StickyBookBar } from "@/components/sticky-book-bar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Cozy Spot Azure | Staycation & Short-Term Accommodation in Parañaque",
    template: `%s | ${siteConfig.name}`,
  },

  description:
    "Cozy Spot Azure is a private staycation accommodation at Azure Urban Resort Residences in Parañaque, Metro Manila. Ideal for couples, families, returning OFWs, foreign visitors, and guests looking for short-term or extended stays near NAIA. We also specialize in room surprise setups for birthdays, anniversaries, and special occasions.",

  keywords: [
    // Brand
    "Cozy Spot Azure",
    "Cozy Spot Azure Staycation",

    // Azure Urban Resort
    "Azure Urban Resort staycation",
    "Azure Urban Resort Residences staycation",
    "Azure Urban Resort Parañaque",
    "Azure staycation Parañaque",
    "Azure staycation",
    "Azure Urban Resort accommodation",

    // Parañaque / Metro Manila
    "Parañaque staycation",
    "Parañaque accommodation",
    "Metro Manila staycation",
    "Metro Manila accommodation",
    "private staycation Parañaque",
    "private accommodation Parañaque",

    // Airport / NAIA
    "staycation near NAIA",
    "accommodation near NAIA",
    "short stay near NAIA",
    "long stay near NAIA",
    "accommodation in Parañaque near airport",
    "staycation near Manila airport",

    // OFW
    "OFW vacation accommodation Manila",
    "OFW staycation Manila",
    "OFW accommodation in Parañaque",
    "staycation for returning OFWs",
    "Manila vacation accommodation for OFWs",
    "family staycation for returning OFWs",
    "OFW homecoming accommodation",
    "OFW vacation staycation",
    "accommodation for balikbayan",
    "balikbayan accommodation Manila",

    // Foreign visitors / tourists
    "accommodation for foreigners in Manila",
    "Manila accommodation for tourists",
    "Metro Manila accommodation for foreigners",
    "foreign tourist accommodation Manila",
    "short term accommodation Manila",
    "short-term accommodation Parañaque",
    "long term accommodation Manila",
    "long-term accommodation Parañaque",
    "extended stay Manila",
    "extended stay accommodation Parañaque",
    "short term rental Parañaque",
    "long stay accommodation Parañaque",

    // Staycation occasions
    "couples staycation",
    "birthday staycation",
    "anniversary staycation",
    "family staycation Philippines",
    "romantic staycation Manila",
    "birthday room surprise Manila",
    "romantic room setup Manila",
    "room surprise setup",
    "room surprise setup Manila",
    "birthday surprise accommodation Manila",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,

    title:
      "Cozy Spot Azure | Staycation & Short-Term Accommodation in Parañaque",

    description:
      "A private staycation space at Azure Urban Resort Residences in Parañaque, Metro Manila. Perfect for couples, families, returning OFWs, foreign visitors, short stays, extended stays, and special celebrations.",

    locale: "en_PH",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cozy Spot Azure at Azure Urban Resort Residences in Parañaque",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cozy Spot Azure | Staycation & Short-Term Accommodation in Parañaque",

    description:
      "Private staycation accommodation at Azure Urban Resort Residences in Parañaque. Ideal for couples, families, returning OFWs, foreign visitors, short stays, and extended stays.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2538",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-PH"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-sans">
        <LodgingBusinessJsonLd />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>

        <Nav />

        <main id="main">{children}</main>

        <Footer />

        <StickyBookBar />
      </body>
    </html>
  );
}
