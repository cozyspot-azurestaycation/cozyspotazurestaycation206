import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ViberQr } from "@/components/viber-qr";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-linen px-5 py-14 pb-28 text-ink sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-4">
        <div className="min-w-0">
          <p className="font-display text-lg">{siteConfig.shortName}</p>
          <p className="mt-2 text-xs leading-relaxed text-ink/55">
            {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.floorAndView}
            <br />
            {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}
          </p>
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/70 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — email, phone, and the Viber business QR grouped
            together in one column instead of the QR floating separately
            further down the page. Full width on mobile (no more squeezed
            half-column) so the email wraps at natural points instead of
            splitting mid-word. */}
        <div className="min-w-0">
          <p className="eyebrow">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li className="break-words">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <div className="mt-5">
            <ViberQr />
          </div>
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Follow</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                Facebook
              </a>
            </li>
            <li>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.airbnbUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                Airbnb
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-ink/10 pt-6">
        <p className="font-mono text-[11px] text-ink/40">
          © {new Date().getFullYear()} {siteConfig.name}. Operating since{" "}
          {siteConfig.foundingYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


