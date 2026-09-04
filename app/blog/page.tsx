import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.shortName}`,
  description:
    "Staycation tips, guides, and stories from Cozy Spot Azure at Azure Urban Resort Residences in Parañaque, Metro Manila.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  // Keep this out of search results until there's real content here —
  // an empty "coming soon" page isn't worth indexing, and could read as
  // thin content. Remove this once posts are published.
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <main className="bg-ivory">
      <section className="bg-navy px-5 pb-20 pt-32 text-center text-linen sm:pb-28">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-azure-soft">Cozy Spot Azure</p>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-5xl">
            The Blog
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-linen/70 sm:text-base">
            We're working on staycation tips, local guides, and stories from
            Cozy Spot Azure at Azure Urban Resort Residences. Check back
            soon.
          </p>

          <Link
            href="/#book"
            className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  );
}
