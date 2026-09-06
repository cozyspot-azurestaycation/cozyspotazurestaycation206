import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

/**
 * Blog article cards, shown beneath the blog hero, laid out as a
 * responsive grid (3-up on desktop, matching the reference layout:
 * thumbnail on top, date, bold title, excerpt).
 *
 * Posts are pulled from content/blog/*.mdx via getAllPosts(), sorted
 * newest-first. If a post has no image.src set in its frontmatter yet,
 * a navy-to-azure gradient placeholder is shown instead — once a real
 * cover photo is uploaded to public/images/blog/ and the frontmatter
 * `image.src` is set, it will automatically switch to the real photo.
 */
export function FeaturedArticle() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return null;
  }

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
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-linen"
            >
              {post.image.src ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-azure"
                >
                  <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-linen/50">
                    Cozy Spot Azure
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                <span className="eyebrow text-brass">{post.category}</span>

                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink/40">
                  Updated {post.updated}
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
                    href={`/blog/${post.slug}`}
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
