import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ReviewsPageClient } from "./reviews-page-client";
import { reviews } from "./reviews-data";

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
  return (
    <>
      {/* Interactive carousel + gallery + video sections — unchanged */}
      <ReviewsPageClient />

      {/*
        Static, server-rendered review list.
        The carousel above only puts its *current* slide's text into the
        initial HTML (it's driven by React state), so search engines and
        AI crawlers that don't run JavaScript only ever saw one review.
        This section renders all of them directly, every time, with no
        JS required — so every review is actually indexable.
      */}
      <section className="bg-ivory px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
            All Guest Reviews
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
            Every review shared by guests who stayed at Cozy Spot Azure
            inside Azure Urban Resort Residences, Parañaque.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
              <li
                key={`${review.name}-${review.date}`}
                className="rounded-2xl border border-navy/10 bg-linen px-6 py-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                    {review.stayType}
                  </span>
                  <span
                    aria-label={`${review.rating} out of 5 stars`}
                    className="text-sm tracking-[0.15em] text-brass"
                  >
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
                  <span className="text-sm font-medium text-navy">
                    {review.name}
                  </span>
                  <span className="text-xs text-ink/50">{review.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
