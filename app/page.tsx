import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Read real guest experiences from Cozy Spot Azure, a private staycation in Azure Urban Resort Residences, Parañaque, Metro Manila.",
  alternates: {
    canonical: "/reviews",
  },
};

const reviews = [
  {
    name: "Trixia",
    years: "2 years on Airbnb",
    date: "June 2024",
    image: "/images/reviews/trixia.jpg",
    review:
      "We had a fantastic stay. The location was perfect, the space was clean and well-maintained, and the host was incredibly accommodating and responsive. Highly recommend!",
  },
  {
    name: "Chezka Mari",
    years: "5 years on Airbnb",
    date: "May 2024",
    image: "/images/reviews/chezka-mari.jpg",
    review:
      "The host is very nice and responsive. The room is very clean and elegant. There are lots of games and entertainment to do. Overall, I will recommend this staycation. It was a nice vacation!",
  },
  {
    name: "Richelle",
    years: "9 years on Airbnb",
    date: "February 2025",
    image: "/images/reviews/richelle.jpg",
    review:
      "Very accommodating and friendly host. Clean and relaxing place. Worth the price.",
  },
  {
    name: "Maricon",
    years: "1 year on Airbnb",
    date: "May 2025",
    image: "/images/reviews/maricon.jpg",
    review:
      "Thank you for accommodating us! We're able to celebrate our son's 2nd birthday in your cozy home. It is highly recommended for everyone who are looking for a place to have fun and relaxation. We would surely book again.",
  },
  {
    name: "Maica",
    years: "8 years on Airbnb",
    date: "November 2025",
    image: "/images/reviews/maica.jpg",
    review:
      "Great place to stay! Sir Pj was very easy to talk to, especially when we rescheduled because of the typhoon, he was very accommodating. The place was also nice, it was very worth it from check-in to check-out!",
  },
  {
    name: "Charles Albert",
    years: "1 year on Airbnb",
    date: "December 2025",
    image: "/images/reviews/charles-albert.jpg",
    review:
      "What you see in the picture is exactly what you'll see in person. The room is nice and clean. The owner also answers all of my questions.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-navy text-ivory">

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:pb-28 sm:pt-40">

        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-azure/20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/45 transition-colors hover:text-ivory"
          >
            ← Back to Cozy Spot
          </Link>

          <div className="mt-14 max-w-4xl">

            <p className="eyebrow text-azure-soft">
              Guest Experiences
            </p>

            <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
              What our clients
              <br />
              <span className="text-gold">say about us.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-ivory/60 sm:text-base">
              Real experiences from guests who stayed at Cozy Spot Azure —
              from relaxing weekends and family time to birthdays,
              celebrations, and simple escapes from the everyday.
            </p>

          </div>

          {/* Mini trust row */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivory/10 pt-6">

            <div>
              <p className="font-display text-2xl text-ivory">
                5.0
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Guest experience
              </p>
            </div>

            <div className="h-10 w-px bg-ivory/10" />

            <div>
              <p className="text-lg tracking-[0.15em] text-gold">
                ★★★★★
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Guest feedback
              </p>
            </div>

            <div className="h-10 w-px bg-ivory/10" />

            <div>
              <p className="font-display text-2xl text-ivory">
                Cozy
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                By design
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-5 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-end justify-between gap-6">

            <div>
              <p className="eyebrow text-azure-soft">
                From our guests
              </p>

              <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
                Real stays. Real experiences.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-xs leading-relaxed text-ivory/40 sm:block">
              Every review reflects a guest's own experience at Cozy Spot
              Azure.
            </p>

          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 gap-5 sm:columns-2">

            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`mb-5 break-inside-avoid border border-ivory/50 bg-navy p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ivory/80 sm:p-7 ${
                  index === 0
                    ? "rounded-[1.5rem]"
                    : index === 1
                    ? "rounded-[1.5rem]"
                    : "rounded-2xl"
                }`}
              >

                {/* Guest */}
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-4">

                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-ivory/60 bg-ivory/10">
                      <img
                        src={review.image}
                        alt={`${review.name} guest review`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-medium">
                        {review.name}
                      </h3>

                      <p className="mt-0.5 text-[11px] text-ivory/40">
                        {review.years}
                      </p>
                    </div>

                  </div>

                  <span className="text-[10px] text-ivory/35">
                    {review.date}
                  </span>

                </div>

                {/* Stars */}
                <div className="mt-5 text-sm tracking-[0.18em] text-gold">
                  ★★★★★
                </div>

                {/* Quote */}
                <div className="mt-4">

                  <span
                    className="font-display text-4xl leading-none text-gold/70"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <p className="mt-1 font-display text-base leading-relaxed text-ivory/80 sm:text-lg">
                    {review.review}
                  </p>

                </div>

                {/* Bottom line */}
                <div className="mt-6 border-t border-ivory/10 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/30">
                    Cozy Spot Azure guest
                  </span>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden border-t border-ivory/10 px-5 py-24 sm:py-32">

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">

          <p className="eyebrow text-azure-soft">
            Your turn
          </p>

          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
            Come make your own
            <span className="text-gold"> Cozy Spot memories.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/55 sm:text-base">
            Planning a birthday, date night, family escape, or simply a
            quiet stay in Metro Manila? We'd love to host you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/#book"
              className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
            >
              Book Your Stay
            </Link>

            <Link
              href="/"
              className="rounded-full border border-ivory/25 px-7 py-3 text-sm font-medium text-ivory transition-all duration-300 hover:border-ivory/60"
            >
              Explore Cozy Spot
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
