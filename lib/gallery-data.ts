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
export const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/gallery/birthday-surprise.jpg", alt: "Birthday surprise setup in the living room", title: "Birthday Surprise", icon: "🎂", category: "celebrations", size: "large" },
  { id: 2, src: "/images/gallery/azure-beach-view.jpg", alt: "View of Azure Resort's beach and pool area", title: "Azure Beach View", icon: "🌴", category: "azure-resort", size: "medium" },
  { id: 3, src: "/images/gallery/cozy-room.jpg", alt: "Cozy Spot Azure bedroom", title: "Cozy Room", icon: "🛏️", category: "room-amenities", size: "small" },
  { id: 4, src: "/images/gallery/movie-night.jpg", alt: "Guests enjoying a movie night set up", title: "Movie Night", icon: "🍿", category: "family", size: "medium" },
  { id: 5, src: "/images/gallery/romantic-getaway.jpg", alt: "Romantic room setup for couples", title: "Romantic Getaway", icon: "❤️", category: "couples", size: "small" },
  { id: 6, src: "/images/gallery/anniversary-setup.jpg", alt: "Anniversary celebration decor", title: "Anniversary Setup", icon: "🥂", category: "celebrations", size: "small" },
  { id: 7, src: "/images/gallery/family-bonding.jpg", alt: "Family spending time together in the living room", title: "Family Bonding", icon: "👨‍👩‍👧", category: "family", size: "large" },
  { id: 8, src: "/images/gallery/morning-coffee.jpg", alt: "Morning coffee by the window", title: "Morning Coffee", icon: "☕", category: "room-amenities", size: "small" },
  { id: 9, src: "/images/gallery/azure-resort.jpg", alt: "Azure Urban Resort Residences grounds", title: "Azure Resort", icon: "🏊", category: "azure-resort", size: "medium" },
  { id: 10, src: "/images/gallery/sweet-celebration.jpg", alt: "Sweet celebration table setup", title: "Sweet Celebration", icon: "🎉", category: "celebrations", size: "small" },
  { id: 11, src: "/images/gallery/night-view.jpg", alt: "Night view from the unit", title: "Night View", icon: "🌙", category: "couples", size: "medium" },
  { id: 12, src: "/images/gallery/Anniversary-decor-01.png", alt: "Anniversary celebration decoration setup", title: "Anniversary Decor", icon: "🥂", category: "celebrations", size: "small" },
  { id: 13, src: "/images/gallery/Anniversary-decor-02.png", alt: "Anniversary celebration decoration setup", title: "Anniversary Decor", icon: "💐", category: "celebrations", size: "small" },
  { id: 14, src: "/images/gallery/Anniversary-decor-03.png", alt: "Anniversary celebration decoration setup", title: "Anniversary Decor", icon: "🕯️", category: "celebrations", size: "small" },
  { id: 15, src: "/images/gallery/Birthday-decor-01.png", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🎂", category: "celebrations", size: "medium" },
  { id: 16, src: "/images/gallery/Birthday-decor-02.png", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🎈", category: "celebrations", size: "small" },
  { id: 17, src: "/images/gallery/Birthday-decor-03.png", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🎉", category: "celebrations", size: "small" },
  { id: 18, src: "/images/gallery/Birthday-decor-04.png", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🎁", category: "celebrations", size: "small" },
  { id: 19, src: "/images/gallery/Birthday-decor-05.png", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🎊", category: "celebrations", size: "small" },
  { id: 20, src: "/images/gallery/Birthday-decor-06.jpeg", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🥳", category: "celebrations", size: "small" },
  { id: 21, src: "/images/gallery/Birthday-decor-07.jpeg", alt: "Birthday celebration decoration setup", title: "Birthday Decor", icon: "🍰", category: "celebrations", size: "small" },
  { id: 22, src: "/images/gallery/Bridal-Shower-decor-01.png", alt: "Bridal shower celebration decoration setup", title: "Bridal Shower Decor", icon: "👰", category: "celebrations", size: "medium" },
];
export const videoItems: VideoItem[] = [
  { id: 1, thumbnail: "/videos/Anniversary-01.png", video: "/videos/Anniversary-01.mp4", title: "Anniversary", duration: "00:29" },
  { id: 2, thumbnail: "/videos/Anniversary-02.png", video: "/videos/Anniversary-02.mp4", title: "Anniversary Surprise", duration: "00:30" },
  { id: 3, thumbnail: "/videos/Will-you-be-my-girlfriend-01.png", video: "/videos/Will-you-be-my-girlfriend-01.mp4", title: "Will You Be My Girlfriend", duration: "00:30" },
  { id: 4, thumbnail: "/videos/Will-you-be-my-girlfriend-02.png", video: "/videos/Will-you-be-my-girlfriend-02.mp4", title: "Will You Be My Girlfriend — Part 2", duration: "00:30" },
  { id: 5, thumbnail: "/videos/Bridal-Shower-01.png", video: "/videos/Bridal-Shower-01.mp4", title: "Bridal Shower", duration: "00:30" },
];
