// lib/gallery-data.ts
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
  icon: string;
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
