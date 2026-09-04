"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
} from "lucide-react";
import { reviews, type Review } from "./reviews-data";

/* -------------------------------------------------------------------------- */
/*  TYPES                                                                      */
/* -------------------------------------------------------------------------- */

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** controls masonry sizing – tall images look great mixed with square/wide ones */
  aspect?: "square" | "portrait" | "wide";
}

interface GalleryVideo {
  /** path to the video file, e.g. "/videos/gallery/birthday-tour.mp4" */
  src: string;
  /** poster/thumbnail shown before playback, e.g. "/images/gallery/video-thumbs/birthday-tour.jpg" */
  poster: string;
  caption: string;
  aspect?: "square" | "portrait" | "wide";
}

/* -------------------------------------------------------------------------- */
/*  DATA — add more photos/videos by appending objects here.                  */
/*  Review data now lives in ./reviews-data.ts, shared with the static,       */
/*  server-rendered review list in page.tsx.                                  */
/* -------------------------------------------------------------------------- */

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/birthday-celebration.jpg",
    alt: "Birthday celebration setup at Cozy Spot Azure Staycation",
    caption: "Birthday Celebration at Cozy Spot 🎉",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/couple-staycation.jpg",
    alt: "Couple enjoying a private staycation in Parañaque",
    caption: "A Quiet Couple Staycation",
    aspect: "square",
  },
  {
    src: "/images/gallery/anniversary-setup.jpg",
    alt: "Romantic anniversary room decoration",
    caption: "Anniversary Room Setup",
    aspect: "wide",
  },
  {
    src: "/images/gallery/room-surprise.jpg",
    alt: "Surprise room decoration for a guest celebration",
    caption: "A Little Surprise, Just for Them",
    aspect: "square",
  },
  {
    src: "/images/gallery/family-bonding.jpg",
    alt: "Family bonding moment during a staycation",
    caption: "Family Bonding Weekend",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/movie-night.jpg",
    alt: "Cozy movie night set up in the living room",
    caption: "Movie Nights In",
    aspect: "square",
  },
  {
    src: "/images/gallery/cozy-room.jpg",
    alt: "Cozy and clean staycation room interior",
    caption: "Cozy Corners, Everywhere",
    aspect: "wide",
  },
  {
    src: "/images/gallery/guest-celebration.jpg",
    alt: "Guests celebrating together at Cozy Spot Azure",
    caption: "Celebrating Life's Little Wins",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/azure-resort-view.jpg",
    alt: "View of Azure Urban Resort Residences amenities",
    caption: "The Azure Resort Experience",
    aspect: "square",
  },
];

/**
 * Guest video gallery — room tours, celebration clips, guest reactions.
 * Add a new video by appending an object here — the video grid and
 * lightbox pick it up automatically.
 */
const galleryVideos: GalleryVideo[] = [
  {
    src: "/videos/gallery/room-tour.mp4",
    poster: "/images/gallery/video-thumbs/room-tour.jpg",
    caption: "A Quick Tour of the Cozy Spot Unit",
    aspect: "wide",
  },
  {
    src: "/videos/gallery/birthday-surprise.mp4",
    poster: "/images/gallery/video-thumbs/birthday-surprise.jpg",
    caption: "Birthday Surprise Set-Up",
    aspect: "portrait",
  },
  {
    src: "/videos/gallery/guest-reaction.mp4",
    poster: "/images/gallery/video-thumbs/guest-reaction.jpg",
    caption: "Guests Arriving to Their Room",
    aspect: "square",
  },
  {
    src: "/videos/gallery/night-view.mp4",
    poster: "/images/gallery/video-thumbs/night-view.jpg",
    caption: "City Lights at Azure, After Dark",
    aspect: "wide",
  },
];

/* -------------------------------------------------------------------------- */
/*  STAR RATING                                                                */
/* -------------------------------------------------------------------------- */

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-amber-400/30"
          }
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  REVIEW CARD                                                                */
/* -------------------------------------------------------------------------- */

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="relative flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-[#FBF9F4] p-6 shadow-[0_10px_30px_-15px_rgba(11,30,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(11,30,61,0.45)] sm:p-8">
      <Quote
        className="absolute right-6 top-6 h-9 w-9 text-[#0B1E3D]/10"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div>
        <span className="inline-block rounded-full bg-[#0B1E3D]/5 px-3 py-1 text-xs font-medium tracking-wide text-[#0B1E3D]">
          {review.stayType}
        </span>

        <p className="mt-4 text-[15px] leading-relaxed text-[#1F2A3C] sm:text-base">
          “{review.review}”
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-[#0B1E3D]/10 pt-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
          <Image
            src={review.image}
            alt={`${review.name} — guest at Cozy Spot Azure Staycation`}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-[#0B1E3D]">{review.name}</p>
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} />
            <span className="text-xs text-[#1F2A3C]/60">{review.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  REVIEWS CAROUSEL                                                           */
/* -------------------------------------------------------------------------- */

const AUTOPLAY_MS = 6000;

/** 1 card on mobile, 2 on tablet, 3 on desktop — matches the design brief. */
function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1280px)");

    const update = () => {
      if (lgQuery.matches) setCardsPerView(3);
      else if (mdQuery.matches) setCardsPerView(2);
      else setCardsPerView(1);
    };

    update();
    mdQuery.addEventListener("change", update);
    lgQuery.addEventListener("change", update);
    return () => {
      mdQuery.removeEventListener("change", update);
      lgQuery.removeEventListener("change", update);
    };
  }, []);

  return cardsPerView;
}

function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const cardsPerView = useCardsPerView();
  const pageCount = Math.max(1, Math.ceil(reviews.length / cardsPerView));
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = useCallback(
    (index: number) => {
      setPage(((index % pageCount) + pageCount) % pageCount);
    },
    [pageCount]
  );

  const next = useCallback(() => goTo(page + 1), [goTo, page]);
  const prev = useCallback(() => goTo(page - 1), [goTo, page]);

  useEffect(() => {
    if (isPaused || pageCount <= 1) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, pageCount]);

  const pause = () => setIsPaused(true);

  const start = page * cardsPerView;
  const visibleReviews = reviews.slice(start, start + cardsPerView);

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [page, cardsPerView]);

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onTouchStart={pause}
      onFocus={pause}
    >
      <div
        className={`grid grid-cols-1 gap-6 transition-opacity duration-500 ease-out md:grid-cols-2 xl:grid-cols-3 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        {visibleReviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.date}`} review={review} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => {
              pause();
              prev();
            }}
            aria-label="Previous reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1E3D]/15 bg-white text-[#0B1E3D] shadow-sm transition hover:bg-[#0B1E3D] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  pause();
                  goTo(i);
                }}
                aria-label={`Go to review page ${i + 1}`}
                aria-current={i === page}
                className={`h-2.5 rounded-full transition-all ${
                  i === page
                    ? "w-6 bg-[#0B1E3D]"
                    : "w-2.5 bg-[#0B1E3D]/20 hover:bg-[#0B1E3D]/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              pause();
              next();
            }}
            aria-label="Next reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1E3D]/15 bg-white text-[#0B1E3D] shadow-sm transition hover:bg-[#0B1E3D] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LIGHTBOX                                                                   */
/* -------------------------------------------------------------------------- */

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % images.length),
    [activeIndex, images.length, onNavigate]
  );
  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + images.length) % images.length),
    [activeIndex, images.length, onNavigate]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const image = images[activeIndex];
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1E3D]/95 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        className="relative flex max-h-[80vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="rounded-xl object-contain"
            priority
          />
        </div>
        {image.caption && (
          <p className="mt-4 text-center text-sm text-white/80 sm:text-base">
            {image.caption}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  GALLERY GRID                                                               */
/* -------------------------------------------------------------------------- */

const aspectClass: Record<NonNullable<GalleryImage["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[4/3]",
};

function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative block w-full break-inside-avoid overflow-hidden rounded-2xl ${
              aspectClass[image.aspect ?? "square"]
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0B1E3D]/70 via-[#0B1E3D]/0 to-[#0B1E3D]/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-left text-sm font-medium text-white">
                {image.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  VIDEO LIGHTBOX                                                             */
/* -------------------------------------------------------------------------- */

interface VideoLightboxProps {
  videos: GalleryVideo[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function VideoLightbox({
  videos,
  activeIndex,
  onClose,
  onNavigate,
}: VideoLightboxProps) {
  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % videos.length),
    [activeIndex, videos.length, onNavigate]
  );
  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + videos.length) % videos.length),
    [activeIndex, videos.length, onNavigate]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const video = videos[activeIndex];
  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.caption}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1E3D]/95 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous video"
        className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        className="relative flex max-h-[80vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* key forces the <video> to remount when switching clips, so it doesn't keep playing the old source */}
        <video
          key={video.src}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          className="max-h-[70vh] w-full rounded-xl bg-black"
        >
          Your browser does not support embedded video.
        </video>
        {video.caption && (
          <p className="mt-4 text-center text-sm text-white/80 sm:text-base">
            {video.caption}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next video"
        className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  VIDEO GRID                                                                 */
/* -------------------------------------------------------------------------- */

function VideoGrid({ videos }: { videos: GalleryVideo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {videos.map((video, index) => (
          <button
            key={video.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Play video: ${video.caption}`}
            className={`group relative block w-full break-inside-avoid overflow-hidden rounded-2xl ${
              aspectClass[video.aspect ?? "square"]
            }`}
          >
            <Image
              src={video.poster}
              alt={video.caption}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* dark scrim so the play icon and caption stay readable on any thumbnail */}
            <div className="absolute inset-0 bg-[#0B1E3D]/25 transition-colors duration-300 group-hover:bg-[#0B1E3D]/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0B1E3D] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={22} className="ml-0.5 fill-current" />
              </span>
            </div>

            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-left text-sm font-medium text-white">
                {video.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <VideoLightbox
          videos={videos}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}



function ReviewsCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0B1E3D] px-6 py-14 text-center sm:px-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.15),_transparent_60%)]"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Your Next Cozy Escape Starts Here
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-base">
          From romantic weekends and family bonding to birthdays and special
          celebrations, Cozy Spot Azure offers a private and comfortable
          staycation experience in Azure Urban Resort Residences, Parañaque.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#book"
            className="w-full rounded-full bg-[#C9A227] px-8 py-3 text-sm font-semibold text-[#0B1E3D] transition hover:bg-[#dab646] sm:w-auto"
          >
            Book Your Stay
          </Link>
          <Link
            href="/amenities"
            className="w-full rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            View Our Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export function ReviewsPageClient() {
  return (
    <main>
      {/* HERO / PAGE HEADER */}
      <section className="bg-[#0B1E3D] px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Guest Stories
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            What Our Guests Say About Us
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            Real experiences, happy memories, and special moments shared by
            guests who chose Cozy Spot Azure for their staycation in
            Parañaque.
          </p>
        </div>
      </section>

      {/* SECTION 1 — GUEST REVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
            Loved by Guests Across Metro Manila
          </h2>
          <p className="mt-3 text-sm text-[#1F2A3C]/70 sm:text-base">
            From couple staycations to family celebrations, here&apos;s what
            guests have to say about their stay at Cozy Spot Azure Staycation.
          </p>
        </div>

        <ReviewsCarousel reviews={reviews} />
      </section>

      {/*
        All Guest Reviews — a plain, always-rendered list of every review.
        The carousel above only puts its *current* slide's text into the
        initial HTML (it's driven by React state), so this section makes
        sure all reviews are present for search engines and AI crawlers,
        not just whichever one the carousel happens to show first.
      */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
          All Guest Reviews
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#1F2A3C]/70 sm:text-base">
          Every review shared by guests who stayed at Cozy Spot Azure inside
          Azure Urban Resort Residences, Parañaque.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.date}-all`}
              className="rounded-2xl border border-[#0B1E3D]/10 bg-[#FBF9F4] px-6 py-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block rounded-full bg-[#0B1E3D]/5 px-3 py-1 text-xs font-medium text-[#0B1E3D]">
                  {review.stayType}
                </span>
                <span
                  aria-label={`${review.rating} out of 5 stars`}
                  className="text-sm tracking-[0.15em] text-[#C9A227]"
                >
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-[#1F2A3C]/85">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#0B1E3D]/10 pt-4">
                <span className="text-sm font-medium text-[#0B1E3D]">
                  {review.name}
                </span>
                <span className="text-xs text-[#1F2A3C]/50">{review.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 3 — TRUST + CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ReviewsCTA />
      </section>
    </main>
  );
}
