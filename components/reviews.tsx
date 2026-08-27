"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Trixia",
    years: "2 years on Airbnb",
    date: "June 2024",
    image: "/images/reviews/trixia.jpg",
    // Bump this up/down (1 = no zoom) until the face fills the circle
    // with no white/blank space around it. Try 1.3–1.8.
    zoom: 1.5,
    review:
      "We had a fantastic stay. The location was perfect, the space was clean and well-maintained, and the host was incredibly accommodating and responsive. Highly recommend!",
  },
  {
    name: "Chezka Mari",
    years: "5 years on Airbnb",
    date: "May 2024",
    image: "/images/reviews/chezka-mari.jpg",
    zoom: 1.5,
    review:
      "The host is very nice and responsive. The room is very clean and elegant. There are lots of games and entertainment to do. Overall, I will recommend this staycation. It was a nice vacation!",
  },
  {
    name: "Richelle",
    years: "9 years on Airbnb",
    date: "February 2025",
    image: "/images/reviews/richelle.jpg",
    zoom: 1.5,
    review:
      "Very accommodating and friendly host. Clean and relaxing place. Worth the price.",
  },
  {
    name: "Maricon",
    years: "1 year on Airbnb",
    date: "May 2025",
    image: "/images/reviews/maricon.jpg",
    zoom: 1.5,
    review:
      "Thank you for accommodating us! We're able to celebrate our son's 2nd birthday in your cozy home. It is highly recommended for everyone who are looking for a place to have fun and relaxation. We would surely book again.",
  },
  {
    name: "Maica",
    years: "8 years on Airbnb",
    date: "November 2025",
    image: "/images/reviews/maica.jpg",
    zoom: 1.5,
    review:
      "Great place to stay! Sir Pj was very easy to talk to, especially when we rescheduled because of the typhoon, he was very accommodating. The place was also nice, it was very worth it from check-in to check-out!",
  },
  {
    name: "Charles Albert",
    years: "1 year on Airbnb",
    date: "December 2025",
    image: "/images/reviews/charles-albert.jpg",
    zoom: 1.5,
    review:
      "What you see in the picture is exactly what you'll see in person. The room is nice and clean. The owner also answers all of my questions.",
  },
];

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[activeIndex];

  function previousReview() {
    setActiveIndex(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  }

  function nextReview() {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }

  return (
    <section
      id="reviews"
      className="bg-navy px-5 py-20 text-ivory sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-azure-soft">
            Guest Reviews
          </p>

          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            Why guests choose Cozy Spot Azure.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">
            Real experiences from guests who stayed at Cozy Spot Azure inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Review slideshow */}
        <div className="mt-10 flex flex-col items-center">

          {/* Review card */}
          <article
            key={activeIndex}
            className="w-full max-w-3xl rounded-2xl border border-ivory/70 bg-navy px-6 py-7 sm:px-9 sm:py-8"
          >
            {/* Guest information */}
            <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-4">

                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-ivory/70 bg-ivory/10 font-display text-lg font-medium text-ivory sm:h-16 sm:w-16">
                  {/* Fallback initial, shown underneath — only visible if the img fails to load */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    {review.name.charAt(0)}
                  </span>

                  <img
                    src={review.image}
                    alt={`${review.name} guest review`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    style={{ transform: `scale(${review.zoom ?? 1})` }}
                    onError={(e) => {
                      // No real photo on file for this guest — hide the img,
                      // the initial underneath will show through instead.
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium text-ivory">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-ivory/45">
                    {review.years}
                  </p>
                </div>

              </div>

              <span className="shrink-0 text-[10px] text-ivory/40 sm:text-xs">
                {review.date}
              </span>

            </div>

            {/* Stars */}
            <div
              className="mt-5 text-lg tracking-[0.15em] text-gold"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            {/* Review */}
            <div className="mt-5">

              <span
                className="font-display text-5xl leading-none text-gold"
                aria-hidden="true"
              >
                "
              </span>

              <p className="mt-1 max-w-2xl font-display text-lg leading-relaxed text-ivory/90 sm:text-2xl">
                {review.review}
              </p>

            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-ivory/10 pt-4">

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Guest experience
              </span>

              <span className="font-mono text-[10px] text-ivory/40">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

            </div>
          </article>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-5">

            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-all hover:border-ivory hover:bg-ivory hover:text-navy"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show review ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-7 bg-ivory"
                      : "w-2 bg-ivory/30 hover:bg-ivory/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-all hover:border-ivory hover:bg-ivory hover:text-navy"
            >
              →
            </button>

          </div>

          {/* Full reviews page */}
          <Link
            href="/reviews"
            className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
          >
            What our clients say about us
          </Link>

        </div>
      </div>
    </section>
  );
}
