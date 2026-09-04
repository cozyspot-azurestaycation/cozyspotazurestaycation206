/**
 * Placeholder featured-article preview. Swap `featuredArticle` below for
 * real data (or wire this up to lib/blog.ts) once the first post is
 * published. No link/CTA is wired up yet on purpose — there's no post
 * page to send anyone to, and a dead link is worse than none.
 */
const featuredArticle = {
  category: "Staycation Ideas",
  title: "Planning the Perfect Couple's Staycation at Azure Urban Resort",
  excerpt:
    "A guide to making the most of a private staycation in Parañaque — from setting the mood in your unit to nearby spots worth a stroll before check-out.",
  readTime: "5 min read",
};

export function FeaturedArticle() {
  return (
    <section
      aria-labelledby="featured-article-heading"
      className="bg-ivory px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p
          id="featured-article-heading"
          className="eyebrow text-navy/50"
        >
          Featured
        </p>

        <article className="mt-6 overflow-hidden rounded-3xl border border-navy/10 bg-linen sm:grid sm:grid-cols-2">
          {/* Placeholder visual — no real cover image yet */}
          <div
            aria-hidden="true"
            className="flex h-48 items-center justify-center bg-navy sm:h-full"
          >
            <span className="font-display text-sm uppercase tracking-[0.3em] text-brass/60">
              Cozy Spot Azure
            </span>
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
            <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
              {featuredArticle.category}
            </span>

            <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-navy sm:text-3xl">
              {featuredArticle.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
              {featuredArticle.excerpt}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wide text-ink/40">
                {featuredArticle.readTime}
              </span>
              <span className="text-xs text-ink/40">·</span>
              <span className="text-xs font-medium text-brass">
                First guide coming soon
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
