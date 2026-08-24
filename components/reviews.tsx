export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-ink py-12 text-linen sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
            Guest Reviews
          </p>

          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Why guests choose Cozy Spot Azure.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-linen/60 sm:text-base">
            Real experiences from guests who stayed at Cozy Spot Azure
            inside Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Guest review artwork */}
        <div className="mt-5 w-full">
          <img
            src="/images/reviews-guests.png"
            alt="Guest reviews from Cozy Spot Azure staycation guests"
            className="block h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
}
