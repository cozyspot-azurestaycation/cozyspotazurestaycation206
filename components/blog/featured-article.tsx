import Link from "next/link";

/**
 * Blog article cards, shown beneath the blog hero, laid out as a
 * responsive grid (3-up on desktop, matching the reference layout:
 * thumbnail on top, date, bold title, excerpt).
 *
 * Thumbnails are a navy-to-azure gradient placeholder for now. Once real
 * cover photos are uploaded to public/images/blog/ (same filenames
 * already set in `image.src` below), swap the gradient div back for an
 * <Image> using that path — no other changes needed.
 */
const featuredArticles = [
  {
    category: "Staycation Ideas",
    title: "Planning the Perfect Couple's Staycation at Azure Urban Resort",
    excerpt:
      "A guide to making the most of a private staycation in Parañaque — from setting the mood in your unit to nearby spots worth a stroll before check-out.",
    readTime: "5 min read",
    updated: "Updated September 2026",
    href: "/blog/planning-perfect-couples-staycation-azure-urban-resort",
    image: {
      src: "/images/blog/planning-perfect-couples-staycation-azure.jpg",
      alt: "Couple relaxing together in a cozy, softly lit staycation suite at Azure Urban Resort Residences",
    },
  },
  {
    category: "Staycation Guide",
    title:
      "10 Cozy Staycation Ideas in Metro Manila for Couples, Birthdays & Weekends",
    excerpt:
      "Discover simple ways to make your next Metro Manila staycation more memorable, whether you're planning a couple's getaway, birthday celebration, anniversary, or relaxing weekend.",
    readTime: "8 min read",
    updated: "Updated September 2026",
    href: "/blog/10-cozy-staycation-ideas-metro-manila",
    image: {
      src: "/images/blog/10-cozy-staycation-ideas-metro-manila.jpg",
      alt: "Cozy staycation setup with candles, snacks, and a comfortable bed styled for a birthday or weekend getaway in Metro Manila",
    },
  },
] as const;

export function FeaturedArticle() {
  return (
    <section
      aria-labelledby="featured-stories-heading"
      className="bg-ivory px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p id="featured-stories-heading" className="eyebrow text-navy/50">
          Featured Stories
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((post) => (
            <article
              key={post.href}
              className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-linen"
            >
              {/* Gradient placeholder thumbnail — swap for a real cover photo later */}
              <div
                aria-hidden="true"
                className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-azure"
              >
                <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-linen/50">
                  Cozy Spot Azure
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                <span className="eyebrow text-brass">{post.category}</span>

                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink/40">
                  {post.updated}
                </p>

                <h2 className="mt-3 font-display text-xl font-medium leading-tight text-navy sm:text-2xl">
                  {post.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink/40">
                    {post.readTime}
                  </span>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brass transition-colors hover:text-navy"
                  >
                    Read Guide
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
