import Link from "next/link";

/**
 * Two large editorial "Featured Story" cards, shown directly beneath the
 * blog hero. No article grid or category filters yet — that comes later.
 *
 * Images are placeholders. Upload the real photos to public/images/blog/
 * using the same filenames below (matching the gallery workflow), and
 * these will render automatically — no code change needed.
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
      <div className="mx-auto max-w-5xl">
        <p id="featured-stories-heading" className="eyebrow text-navy/50">
          Featured Stories
        </p>

        <div className="mt-6 space-y-10 sm:space-y-14">
          {featuredArticles.map((post) => (
            <article
              key={post.href}
              className="overflow-hidden rounded-3xl border border-navy/10 bg-linen sm:grid sm:grid-cols-2"
            >
              {/* Medium landscape cover image */}
              <div className="h-56 w-full overflow-hidden bg-navy sm:h-full">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
                <span className="eyebrow text-brass">{post.category}</span>

                <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-navy sm:text-3xl">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink/40">
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.updated}</span>
                </div>

                <Link
                  href={post.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-brass transition-colors hover:text-navy"
                >
                  Read Guide
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
