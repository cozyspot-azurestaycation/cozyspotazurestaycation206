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
        className="px-5 py-28 text-center sm:py-36"
      >
        <header className="mx-auto max-w-3xl">
          <p className="eyebrow text-azure-soft">Blog &amp; Local Guides</p>

          <h1
            id="blog-hero-heading"
            className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-linen sm:text-5xl md:text-6xl"
          >
            Staycation Ideas, Metro Manila Guides &amp; Cozy Escapes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-linen/70 sm:text-lg">
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
