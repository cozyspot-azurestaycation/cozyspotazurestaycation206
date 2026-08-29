import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Guest Reviews | Cozy Spot Azure Staycation",
  description:
    "Real reviews from guests who stayed at Cozy Spot Azure inside Azure Urban Resort Residences, Parañaque, Metro Manila.",
  alternates: {
    canonical: "/reviews",
  },
};

type Review = {
  name: string;
  years: string;
  date: string;
  image: string;
  // zoom: 1 = no zoom, bigger = crops more of the whitespace border away.
  // position: "X% Y%" — the source-photo point that stays anchored.
  zoom?: number;
  position?: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Trixia",
    years: "2 years on Airbnb",
    date: "June 2024",
    image: "/images/reviews/trixia.jpg",
    zoom: 1.9,
    position: "65% 40%",
    review:
      "We had a fantastic stay. The location was perfect, the space was clean and well-maintained, and the host was incredibly accommodating and responsive. Highly recommend!",
  },
  {
    name: "Chezka Mari",
    years: "5 years on Airbnb",
    date: "May 2024",
    image: "/images/reviews/chezka-mari.jpg",
    zoom: 1.5,
    position: "center",
    review:
      "The host is very nice and responsive. The room is very clean and elegant. There are lots of games and entertainment to do. Overall, I will recommend this staycation. It was a nice vacation!",
  },
  {
    name: "Richelle",
    years: "9 years on Airbnb",
    date: "February 2025",
    image: "/images/reviews/richelle.jpg",
    zoom: 1.8,
    position: "65% 45%",
    review:
      "Very accommodating and friendly host. Clean and relaxing place. Worth the price.",
  },
  {
    name: "Maricon",
    years: "1 year on Airbnb",
    date: "May 2025",
    image: "/images/reviews/maricon.jpg",
    zoom: 1.5,
    position: "center",
    review:
      "Thank you for accommodating us! We're able to celebrate our son's 2nd birthday in your cozy home. It is highly recommended for everyone who are looking for a place to have fun and relaxation. We would surely book again.",
  },
  {
    name: "Maica",
    years: "8 years on Airbnb",
    date: "November 2025",
    image: "/images/reviews/maica.jpg",
    zoom: 1.9,
    position: "65% 40%",
    review:
      "Great place to stay! Sir Pj was very easy to talk to, especially when we rescheduled because of the typhoon, he was very accommodating. The place was also nice, it was very worth it from check-in to check-out!",
  },
  {
    name: "Charles Albert",
    years: "1 year on Airbnb",
    date: "December 2025",
    image: "/images/reviews/charles-albert.jpg",
    zoom: 1.5,
    position: "center",
    review:
      "What you see in the picture is exactly what you'll see in person. The room is nice and clean. The owner also answers all of my questions.",
  },
];

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  feature?: boolean;
};

const gallery: GalleryImage[] = [
  {
    src: "/images/inclusions/cozy-spot-azure-wave-pool-hero.png",
    alt: "The wave pool at Azure Urban Resort Residences",
    caption: "Wave pool",
    feature: true,
  },
  {
    src: "/images/inclusions/azure-resort-pool-daytime-view.jpg",
    alt: "The pool in the early afternoon",
    caption: "Pool, mid-afternoon",
  },
  {
    src: "/images/inclusions/birthday-celebration-floral-arch-balloons.jpg",
    alt: "Floral arch and balloons set up for a birthday celebration",
    caption: "Birthday celebration setup",
  },
  {
    src: "/images/inclusions/mini-billiard-table-lounge.jpg",
    alt: "The mini billiard table lounge",
    caption: "Billiard table lounge",
    feature: true,
  },
  {
    src: "/images/inclusions/ps4-console-controllers-games.jpg",
    alt: "PS4 with controllers set up for game night",
    caption: "Game night setup",
  },
  {
    src: "/images/inclusions/modern-bathroom-rain-shower.jpg",
    alt: "The modern bathroom with rain shower",
    caption: "Rain shower",
  },
  {
    src: "/images/inclusions/towel-heart-swan-bed-styling.jpg",
    alt: "Swan-shaped towel styling on the bed",
    caption: "Towel styling, turn-down",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-navy text-ivory">
      {/* Hero */}
      <section className="px-5 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-azure-soft">Guest Reviews</p>

          <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
            What our clients say about us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">
            Real experiences from guests who stayed at Cozy Spot Azure inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>

          <div className="mt-8 inline-flex items-center gap-3">
            <span
              className="text-lg tracking-[0.15em] text-gold"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
            <span className="text-xs text-ivory/45">
              {reviews.length} verified Airbnb reviews
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-linen px-5 py-16 text-ink sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="mb-6 break-inside-avoid rounded-2xl border border-ink/10 bg-cloud p-6 shadow-card-light"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-ink/10 bg-ink/5 font-display text-lg font-medium text-ink">
                    <span className="absolute inset-0 flex items-center justify-center">
                      {r.name.charAt(0)}
                    </span>

                    <img
                      src={r.image}
                      alt={`${r.name} guest review`}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{
                        objectPosition: r.position ?? "center",
                        transform: `scale(${r.zoom ?? 1})`,
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {r.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink/45">
                      {r.years} · {r.date}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 text-sm tracking-[0.15em] text-gold-dark"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                  {r.review}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guest gallery */}
      <section className="bg-linen px-5 pb-16 text-ink sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="eyebrow text-brass">From our guests</p>
            <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
              Guest gallery
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
              A few of the moments guests shared with us, from poolside
              afternoons to the details they didn&rsquo;t expect.
            </p>
          </div>

          <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4">
            {gallery.map((item) => (
              <figure
                key={item.caption}
                className={`group relative overflow-hidden rounded-xl bg-ink/5 ${
                  item.feature
                    ? "col-span-2 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent p-3 text-xs font-medium text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Trust statement + CTA */}
      <section className="bg-linen-dark px-5 py-16 text-ink sm:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="eyebrow text-brass">
            Loved by couples, families, friends, and travelers visiting
            Metro Manila
          </p>

          <p className="max-w-md text-sm leading-relaxed text-ink/60">
            From quick weekend escapes to special celebrations, our guests
            choose Cozy Spot Azure for comfort, privacy, and memorable
            experiences in Parañaque.
          </p>

          <a
            href="/#book"
            className="mt-2 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-medium text-linen transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </main>
  );
}
