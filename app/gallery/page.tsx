import type { Metadata } from "next";
import { ImageIcon, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Cozy Spot Azure Staycation, Parañaque",
  description:
    "Browse photos and videos from Cozy Spot Azure Staycation — a private staycation in Azure Urban Resort Residences, Parañaque.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* HERO / PAGE HEADER */}
      <section className="bg-[#0B1E3D] px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            See It For Yourself
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Gallery
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            Photos and videos from Cozy Spot Azure Staycation — coming soon.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY — placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
            Photo Gallery
          </h2>
          <p className="mt-3 text-sm text-[#1F2A3C]/70 sm:text-base">
            Photos will appear here.
          </p>
        </div>

        <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-[#0B1E3D]/15 bg-[#FBF9F4] p-10 text-center">
          <ImageIcon className="h-8 w-8 text-[#0B1E3D]/30" strokeWidth={1.5} />
          <p className="text-sm text-[#1F2A3C]/50">
            Photo gallery placeholder — content coming soon.
          </p>
        </div>
      </section>

      {/* VIDEO GALLERY — placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
            Video Gallery
          </h2>
          <p className="mt-3 text-sm text-[#1F2A3C]/70 sm:text-base">
            Videos will appear here.
          </p>
        </div>

        <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-[#0B1E3D]/15 bg-[#FBF9F4] p-10 text-center">
          <Video className="h-8 w-8 text-[#0B1E3D]/30" strokeWidth={1.5} />
          <p className="text-sm text-[#1F2A3C]/50">
            Video gallery placeholder — content coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
