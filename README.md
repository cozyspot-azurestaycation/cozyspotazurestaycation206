# Cozy Spot Azure Staycation — website

A Next.js 14 (App Router) site, styled with Tailwind CSS, built for a
private staycation business. Airbnb-style storytelling, an Apple-style
condensing nav, a full-bleed hero video, and SEO/GEO (AI answer engine)
groundwork baked in.

## What's already set up

- **Hero video section** — `components/hero.tsx`. Ships with a poster +
  gradient fallback so it looks intentional before you add a real clip.
- **Apple-style nav** — `components/nav.tsx`. Fixed, blurred, condenses on
  scroll, full-screen mobile menu.
- **SEO**
  - Per-page `<title>`/description via Next's Metadata API
    (`app/layout.tsx`, `app/faq/page.tsx`)
  - Auto-generated `sitemap.xml` (`app/sitemap.ts`)
  - Auto-generated `robots.txt` (`app/robots.ts`) — also explicitly
    allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
  - Auto-generated favicon + Open Graph share image, no image files
    needed (`app/icon.tsx`, `app/opengraph-image.tsx`)
- **GEO / LLM-friendliness**
  - `LodgingBusiness` JSON-LD structured data on every page
    (`components/json-ld.tsx`)
  - `FAQPage` JSON-LD on `/faq`
  - `/llms.txt` — a plain-text summary for AI assistants/answer engines
    (`app/llms.txt/route.ts`), auto-generated from `lib/site-config.ts`
- **One config file** — `lib/site-config.ts` holds the business name,
  address, contact info, and nav links. Everything else reads from it.

## Before you launch — replace the placeholders

1. **`lib/site-config.ts`** — real address, phone, email, Messenger URL,
   Facebook/Instagram links, exact geo coordinates.
2. **Hero video** — add `/public/videos/hero.mp4` and
   `/public/images/hero-poster.jpg` (see the comment in
   `components/hero.tsx`).
3. **Photos** — `components/space-showcase.tsx` currently uses gradient
   placeholders instead of real photos so the layout works with zero
   assets. Swap each `<PhotoTile>` for a real `next/image`.
4. **Reviews** — `components/reviews.tsx` is placeholder copy, clearly
   marked. Replace with real, verifiable guest quotes before launch —
   and only then add `aggregateRating` back into `components/json-ld.tsx`.
5. **Map** — `components/location.tsx` has a placeholder box; swap in a
   real Google Maps embed once your exact address is finalized.
6. **Booking form** — `components/booking-cta.tsx` currently sends a
   pre-filled email via `mailto:` (works with zero setup). If you want
   inquiries to land in an inbox/spreadsheet automatically, swap the
   `handleSubmit` function for a POST to Formspree, Getform, or a Vercel
   API route.

## Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy via GitHub + Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
   Vercel auto-detects Next.js — no config needed. Click **Deploy**.
3. You'll get a `*.vercel.app` URL immediately. The site already works
   at that URL.
4. **Once you buy your domain:**
   - In Vercel: Project → Settings → Domains → add it, follow the DNS
     instructions.
   - In Vercel: Project → Settings → Environment Variables → add
     `NEXT_PUBLIC_SITE_URL` set to your real domain (e.g.
     `https://cozyspotazure.com`) → redeploy. This single variable
     updates the sitemap, canonical URLs, JSON-LD, and `/llms.txt`
     everywhere at once.

## Launch checklist (SEO + GEO)

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel
- [ ] Submit `/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Set up a free **Google Business Profile** for local map pack results
- [ ] Fill in real address + geo coordinates in `lib/site-config.ts`
- [ ] Replace placeholder reviews with real ones; only then add `aggregateRating`
- [ ] Add real photos (with descriptive `alt` text — it's also what lets
      AI answer engines "see" the space from the HTML)
- [ ] Double-check `/llms.txt` and `/faq` read correctly — these are what
      AI assistants are most likely to summarize when someone asks
      "is there a good staycation near X"
