import type { Metadata } from "next";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to common questions about booking, check-in, and staying at ${siteConfig.name}.`,
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "How do I book a stay?",
    answer:
      "Send an inquiry through the booking form on our homepage, or message us directly on Facebook Messenger. We'll confirm availability and walk you through payment and check-in details.",
  },
  {
    question: "What time is check-in and check-out?",
    answer: `Standard check-in is at ${siteConfig.checkInTime} and check-out is at ${siteConfig.checkOutTime}. Early check-in or late check-out may be available on request, subject to the schedule.`,
  },
  {
    question: "Is the exact address shared before booking?",
    answer:
      "We share the general area upfront and provide the exact address once your booking is confirmed and payment is verified — a standard practice for private staycation units.",
  },
  {
    question: "How do I know this listing is legitimate?",
    answer:
      "We only communicate through our verified Facebook Page and Messenger link (never a lookalike account), share real unit photos, and confirm payment details directly. If you're ever unsure you're speaking with us, check our official Page before sending money.",
  },
  {
    question: "What's included in the stay?",
    answer:
      "Each booking includes the private unit, Wi-Fi, streaming access, kitchen essentials, and access to shared amenities like the pool where available. Full details are confirmed at booking.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation terms are shared and agreed upon at the time of booking. Message us directly if your plans change and we'll walk you through the options.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 sm:py-36">
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ]}
      />

      <p className="eyebrow">FAQ</p>
      <h1 className="mt-3 font-display text-4xl font-medium">
        Questions, answered.
      </h1>

      <dl className="mt-12 divide-y divide-ink/10">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <dt className="font-display text-lg text-ink">{faq.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink/65">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
