import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { PhotoGallery } from "@/components/gallery/photo-gallery";
import { VideoGallery } from "@/components/gallery/video-gallery";
import { GalleryCTA } from "@/components/gallery/gallery-cta";

export const metadata: Metadata = {
  title: "Gallery | Cozy Spot Azure Staycation, Parañaque",
  description:
    "Browse photos and videos from Cozy Spot Azure Staycation — a private staycation in Azure Urban Resort Residences, Parañaque.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <PhotoGallery />
      <VideoGallery />
      <GalleryCTA />
    </main>
  );
}
