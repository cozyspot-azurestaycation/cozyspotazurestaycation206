import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { FeaturedArticle } from "@/components/blog/featured-article";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.shortName}`,
  description:
    "Staycation ideas, Metro Manila guides, and celebration inspiration from Cozy Spot Azure at Azure Urban Resort Residences in Parañaque.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  // Still hero-only — no articles yet. Flip to true once real posts
  // and the article grid are live.
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <main className="bg-navy">
      <section
        aria-labelledby="blog-hero-heading"
        className="relative px-5 py-32 text-center sm:py-40 lg:py-48"
      >
        <header className="mx-auto flex max-w-3xl flex-col items-center">
          <p className="eyebrow text-azure-soft">
            Blog &amp; Local Guides
          </p>

          {/* Decorative divider — editorial masthead accent, no text content */}
          <span
            aria-hidden="true"
            className="mt-5 h-px w-16 bg-brass/60"
          />

          <h1
            id="blog-hero-heading"
            className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-linen sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Staycation Ideas, Metro Manila Guides &amp; Cozy Escapes
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-balance text-[15px] leading-relaxed text-linen/70 sm:text-lg sm:leading-relaxed">
            Discover staycation ideas, things to do in Parañaque and Metro
            Manila, date ideas, celebration inspiration, and helpful tips for
            planning your next getaway at Cozy Spot Azure.
          </p>
        </header>
      </section>

      <FeaturedArticle />
    </main>
  );
}
