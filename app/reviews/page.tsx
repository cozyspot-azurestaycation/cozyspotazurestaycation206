import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ReviewsPageClient } from "./reviews-page-client";

export const metadata: Metadata = {
  title: `Guest Reviews | ${siteConfig.shortName}`,
  description:
    "Read real guest reviews of Cozy Spot Azure — a private staycation at Azure Urban Resort Residences in Parañaque, Metro Manila. Couples, birthdays, anniversaries, and family stays.",
  alternates: {
    canonical: `${siteConfig.url}/reviews`,
  },
  openGraph: {
    title: `Guest Reviews | ${siteConfig.shortName}`,
    description:
      "Real guest reviews of Cozy Spot Azure, a private staycation at Azure Urban Resort Residences, Parañaque.",
    url: `${siteConfig.url}/reviews`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Guest Reviews | ${siteConfig.shortName}`,
    description: "Real guest reviews of Cozy Spot Azure, Parañaque.",
  },
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
