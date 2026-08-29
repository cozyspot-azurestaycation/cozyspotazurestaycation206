// lib/gallery-data.ts
//
// Central source of truth for the Gallery page. To add a new photo or
// video, just add a new object to the arrays below — no other files
// need to change.

export type GalleryCategory =
  | "room-amenities"
  | "celebrations"
  | "couples"
  | "family"
  | "azure-resort";

export type GallerySize = "large" | "medium" | "small";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  icon: string; // small emoji shown on the overlay
  category: GalleryCategory;
  size: GallerySize;
}

export interface VideoItem {
  id: number;
  thumbnail: string;
  video: string;
  title: string;
  duration: string;
}

export type FilterValue = "all" | GalleryCategory;

export const filterCategories: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Room & Amenities", value: "room-amenities" },
  { label: "Celebrations", value: "celebrations" },
  { label: "Couples", value: "couples" },
  { label: "Family", value: "family" },
  { label: "Azure Resort", value: "azure-resort" },
];

// Replace `src` with real photos in /public/images/gallery/
// Keep the same file naming pattern so this list stays easy to scan.
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/birthday-surprise.jpg",
    alt: "Birthday surprise setup in the living room",
    title: "Birthday Surprise",
    icon: "🎂",
    category: "celebrations",
    size: "large",
  },
  {
    id: 2,
    src: "/images/gallery/azure-beach-view.jpg",
    alt: "View of Azure Resort's beach and pool area",
    title: "Azure Beach View",
    icon: "🌴",
    category: "azure-resort",
    size: "medium",
  },
  {
    id: 3,
    src:
