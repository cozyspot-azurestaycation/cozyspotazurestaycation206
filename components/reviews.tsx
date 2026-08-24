const reviews = [
  {
    name: "Trixia",
    date: "June 2024",
    text: "We had a fantastic stay. The location was perfect, the space was clean and well-maintained, and the host was incredibly accommodating and responsive. Highly recommend!",
  },
  {
    name: "Chezka Mari",
    date: "May 2024",
    text: "The host is very nice and responsive. The room is very clean and elegant. There are lots of games and entertainment to do. Overall, I will recommend this staycation. It was a nice vacation!",
  },
  {
    name: "Richelle",
    date: "February 2025",
    text: "Very accommodating and friendly host. Clean and relaxing place. Worth the price.",
  },
  {
    name: "Maricon",
    date: "May 2025",
    text: "Thank you for accommodating us! We're able to celebrate our son's 2nd birthday in your cozy home. It is highly recommended for everyone who are looking for a place to have fun and relaxation. We would surely booked again.",
  },
  {
    name: "Maica",
    date: "November 2025",
    text: "Great place to stay! Sir Pj was very easy to talk to, especially when we rescheduled because of the typhoon, he was very accommodating... the place was also nice, it was very worth it from check-in to check-out!",
  },
  {
    name: "Charles Albert",
    date: "December 2025",
    text: "What you see in the picture is exactly what you'll see in person. The room is nice and clean. The owner also answers all of my questions.",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-ink py-12 text-linen sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
            Guest Reviews
          </p>

          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Loved by guests who stayed at Cozy Spot.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-linen/60">
            Real experiences from guests who stayed at our private
            staycation in Azure Urban Resort Residences, Parañaque.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.date}`}
              className="flex flex-col border border-linen/25 p-5 transition-colors duration-300 hover:border-linen/50"
            >

              {/* Guest */}
              <div className="flex items-center justify-between gap-3">

                <div>
                  <h3 className="font-display text-base font-medium text-linen">
                    {review.name}
                  </h3>

                  <p className="mt-0.5 text-[11px] text-linen/45">
                    Guest · {review.date}
                  </p>
                </div>

                {/* Stars */}
                <div
                  className="text-xs tracking-[1px] text-brass"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
              </div>

              {/* Review */}
              <p className="mt-4 text-sm leading-relaxed text-linen/75">
                “{review.text}”
              </p>

              {/* Bottom */}
              <div className="mt-5 border-t border-linen/10 pt-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-linen/35">
                  Verified guest experience
                </span>
              </div>

            </article>
          ))}
        </div>

        {/* Review summary */}
        <div className="mt-5 border-t border-linen/15 pt-4">
          <div className="flex flex-col gap-2 text-xs text-linen/40 sm:flex-row sm:items-center sm:justify-between">

            <span>
              Guest feedback · 2024–2025
            </span>

            <span className="text-brass">
              ★★★★★
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}
