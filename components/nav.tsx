"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,box-shadow] duration-300 ${
          scrolled ? "nav-blur shadow-[0_1px_0_rgba(22,40,58,0.08)]" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="font-display text-[15px] font-medium tracking-tight text-ink"
            onClick={() => setMenuOpen(false)}
          >
            {siteConfig.shortName}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#book"
              className="rounded-full bg-ink px-4 py-1.5 text-[13px] font-medium text-linen transition-colors hover:bg-azure"
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu, Apple-style */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-linen transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-ink px-7 py-3 text-sm font-medium text-linen"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  );
}
