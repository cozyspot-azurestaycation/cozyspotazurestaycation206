const checklist = [
  "Real, unedited unit photos",
  "Clear, step-by-step booking process",
  "Verified payment details, shared only through official channels",
  "Transparent house rules and cancellation policy",
  "Real guest reviews you can cross-check",
  "Direct communication with the host — no middlemen",
  "Exact location shared after your booking is confirmed",
];

export function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow">Book With Confidence</p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-medium sm:text-4xl">
            Trust, made visible — not just claimed.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
            Staycation scams are a real concern, so we don&rsquo;t ask you to
            just take our word for it. Here&rsquo;s exactly what we do to
            keep every booking legitimate:
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ivory/80">
                <span className="mt-0.5 text-gold" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-xl bg-navy-mid px-5 py-4 text-sm leading-relaxed text-ivory/70">
            <strong className="text-ivory">Not sure you&rsquo;re talking to us?</strong>{" "}
            Always verify our official Facebook Page and Messenger link below
            before sending any payment.
          </p>
        </div>

        {/* Signature element: rotated stamp badge, echoing a passport / wax seal */}
        <div className="flex justify-center md:justify-end">
          <div className="stamp-badge">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path
                  id="stampCircle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="fill-gold" fontSize="8.2" letterSpacing="2" fontFamily="var(--font-plex-mono)">
                <textPath href="#stampCircle" startOffset="0%">
                  VERIFIED HOST · DIRECT BOOKING · VERIFIED HOST ·
                </textPath>
              </text>
            </svg>
            <span className="font-display text-3xl text-gold">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
