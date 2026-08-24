import { siteConfig } from "@/lib/site-config";

export function UnitDescription() {
  return (
    <section
      id="unit-description"
      aria-labelledby="unit-description-heading"
      className="bg-linen px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-4 text-azure">
          The Unit · {siteConfig.address.addressLocality}
        </p>
        <h2
          id="unit-description-heading"
          className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl"
        >
          A 1 Bedroom Beachfront Unit
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/80 sm:text-base">
          Enjoy a relaxing staycation in our 1 Bedroom Beachfront unit, complete
          with a PS4, billiards table, videoke, Netflix, YouTube, and board
          and card games for the whole group. The unit comfortably
          accommodates up to <strong className="font-medium text-ink">4 guests</strong>.
        </p>

        <div className="mt-12">
          {/* Inclusions */}
          <div>
            <h3 className="font-display text-xl font-medium text-ink">
              Unit Inclusions
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink/80">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                22 hours of accommodation
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                50&quot; Smart TV with Netflix and YouTube
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                WiFi connection
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Billiards table
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                PlayStation 4 (PS4), board games, and card games
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Mini videoke with 2 microphones
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Induction stove, refrigerator, microwave oven, rice cooker,
                and electric kettle
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Dining and kitchenware for light cooking
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Complimentary coffee, creamer, and sugar
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                Hot and cold shower, with dental kit, hand soap, body wash,
                and shampoo
              </li>
            </ul>
          </div>
        </div>

        {/* Cooking Disclaimer */}
        <p className="mt-8 max-w-2xl text-sm italic leading-relaxed text-ink/60">
          Please note: the unit is equipped for light cooking only (e.g.
          reheating, boiling, or simple stovetop meals). Heavy or open-flame
          cooking is not permitted inside the unit.
        </p>
      </div>
    </section>
  );
}
