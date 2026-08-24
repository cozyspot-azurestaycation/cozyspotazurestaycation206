import type { Metadata } from "next";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ | Cozy Spot Azure Staycation",
  description:
    "Find answers about booking, room surprise setups, amenities, location, and staying at Cozy Spot Azure in Azure Urban Resort Residences, Parañaque, Metro Manila.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "Where is Cozy Spot Azure?",
    answer:
      "Cozy Spot Azure is located at Santorini Tower, Unit 206, inside Azure Urban Resort Residences in Parañaque, Metro Manila.",
  },
  {
    question: "How do I book Cozy Spot Azure?",
    answer:
      "You can book your stay by filling out the booking section on our website. You may also book through Airbnb or contact us through our official Facebook Page.",
  },
  {
    question: "What's excluded from the room rate?",
    answer:
      "Pool access and parking are excluded from the unit rate. These may be subject to separate fees, property rules, or availability.",
  },
  {
    question: "Do you offer room surprise setups?",
    answer:
      "Absolutely! Room surprise setups are our niche. We can help create a special atmosphere for birthdays, anniversaries, romantic surprises, celebrations, and other memorable occasions. Let us know what you have in mind when you inquire so we can discuss the available setup options.",
  },
  {
    question: "What time is check-in and check-out?",
    answer: `Standard check-in is at ${siteConfig.checkInTime} and check-out is at ${siteConfig.checkOutTime}. Early check-in or late check-out may be available depending on the booking schedule and should be requested in advance.`,
  },
  {
    question: "Is Cozy Spot Azure good for couples?",
    answer:
      "Yes. Cozy Spot Azure is a private and comfortable staycation space that is especially suited for couples, date nights, anniversaries, birthdays, romantic getaways, and special celebrations.",
  },
  {
    question: "Is Cozy Spot Azure suitable for families?",
    answer:
      "Yes. Cozy Spot Azure is also suitable for families and small groups looking for a private and comfortable place to relax and spend quality time together.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Yes. Wi-Fi is available at Cozy Spot Azure, making it convenient for guests who want to stay connected, stream, browse, or work during their stay.",
  },
  {
    question: "Can I celebrate a birthday or anniversary at Cozy Spot Azure?",
    answer:
      "Absolutely. Cozy Spot Azure is designed for more than just overnight stays. Birthdays, anniversaries, romantic surprises, and intimate celebrations are welcome, and our room surprise setup service is one of our specialties.",
  },
  {
    question: "Can I use the Azure swimming pool?",
    answer:
      "Pool access is not included in the unit rate. Pool use is subject to the rules, fees, availability, and requirements of Azure Urban Resort Residences.",
  },
  {
    question: "Is parking included?",
    answer:
      "No. Parking is not included in the unit rate. Guests who need parking should inquire about the available parking options and applicable fees before their stay.",
  },
  {
    question: "How can I contact Cozy Spot Azure?",
    answer:
      "You can contact Cozy Spot Azure through our booking section, Airbnb, or our official Facebook Page. We recommend using the official contact channels provided on this website when making an inquiry.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-linen">
      <FaqJsonLd items={faqs} />

      <BreadcrumbJsonLd
        items={[
          {
            name: "Home",
            url: siteConfig.url,
          },
          {
            name: "FAQ",
            url: `${siteConfig.url}/faq`,
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:py-28">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">
            Frequently Asked Questions
          </p>

          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Questions, answered.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
            Everything you need to know before booking your stay at
            Cozy Spot Azure in Azure Urban Resort Residences, Parañaque.
          </p>
        </div>

        {/* FAQ list */}
        <dl className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="py-5"
            >
              <dt className="font-display text-lg font-medium leading-snug text-ink">
                {faq.question}
              </dt>

              <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/60">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>

        {/* Contact */}
        <div className="mt-10 border-t border-ink/10 pt-6">
          <p className="text-sm text-ink/50">
            Still have a question?
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/#book"
              className="text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-brass"
            >
              Check availability →
            </a>

            <span className="hidden text-ink/20 sm:inline">
              ·
            </span>

            <a
              href={siteConfig.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-brass"
            >
              Message Cozy Spot Azure
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
