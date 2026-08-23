import { siteConfig } from "@/lib/site-config";

/**
 * IMPORTANT — replace before launch:
 * The quotes below are placeholder copy, not real guest reviews. Swap them
 * for actual, verifiable testimonials (and only then add `aggregateRating`
 * back into components/json-ld.tsx). Presenting invented reviews as real
 * is both a trust problem and against most platforms' policies.
 */
const sampleReviews = [
  {
    quote: "[Replace with a real guest quote] — clean, private, exactly like the photos.",
    name: "[Guest name]",
  },
  {
    quote: "[Replace with a real guest quote] — easy check-in and a genuinely relaxing stay.",
    name: "[Guest name]",
  },
  {
    quote: "[Replace with a real guest quote] — would book again for our next celebration.",
    name: "[Guest name]",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="eyebrow">Guest Reviews</p>
      <h2 className="mt-3 max-w-md font-display text-3xl font-medium sm:text-4xl">
        Why guests choose {siteConfig.shortName}.
      </h2>
      <p className="mt-3 max-w-md text-sm text-ink/50">
        Sample layout below — replace with real, verified reviews before
        launch.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {sampleReviews.map((r, i) => (
          <figure key={i} className="rounded-2xl border border-dashed border-ink/20 bg-cloud/60 p-6">
            <div className="text-brass" aria-hidden="true">★★★★★</div>
            <blockquote className="mt-3 text-sm italic leading-relaxed text-ink/70">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-ink/40">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
