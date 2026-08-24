import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-linen/10 bg-ink px-5 py-10 pb-24 text-linen sm:pb-10">
      <div className="mx-auto max-w-6xl">

        {/* Main footer */}
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-xl font-medium">
              Cozy Spot Azure
            </p>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-linen/50">
              A private staycation space inside Azure Urban Resort
              Residences, designed for relaxing getaways, quality time,
              and memorable celebrations.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-linen/40">
              Santorini Tower · Unit 206
              <br />
              Azure Urban Resort Residences
              <br />
              Parañaque, Metro Manila
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow text-brass">
              Explore
            </p>

            <ul className="mt-3 space-y-1.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-linen/60 transition-colors hover:text-linen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/faq"
                  className="text-linen/60 transition-colors hover:text-linen"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-brass">
              Contact
            </p>

            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-linen/60 transition-colors hover:text-linen"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-linen/60 transition-colors hover:text-linen"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li className="pt-1">
                <a
                  href="/#book"
                  className="font-medium text-brass transition-colors hover:text-brass-light"
                >
                  Book Your Stay →
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="eyebrow text-brass">
              Connect
            </p>

            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linen/60 transition-colors hover:text-linen"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linen/60 transition-colors hover:text-linen"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linen/60 transition-colors hover:text-linen"
                >
                  Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-linen/10 pt-4 text-xs text-linen/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p>
            Private staycation in Azure Urban Resort Residences, Parañaque.
          </p>
        </div>

      </div>
    </footer>
  );
}
