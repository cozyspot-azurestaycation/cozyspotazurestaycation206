// lib/gallery-data.ts
export type GalleryCategory =
  | "room-amenities"
  | "celebrations"
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
  { label: "Family", value: "family" },
  { label: "Azure Resort", value: "azure-resort" },
];
export const galleryItems: GalleryItem[] = [
  { id: 3, src: "/images/gallery/cozy-room-01.png", alt: "Cozy Spot Azure bedroom view 1", title: "Cozy Room", icon: "🛏️", category: "room-amenities", size: "small" },
  { id: 31, src: "/images/gallery/cozy-room-02.png", alt: "Cozy Spot Azure bedroom view 2", title: "Cozy Room", icon: "🛏️", category: "room-amenities", size: "small" },
  { id: 32, src: "/images/gallery/cozy-room-03.png", alt: "Cozy Spot Azure bedroom view 3", title: "Cozy Room", icon: "🛏️", category: "room-amenities", size: "small" },
  { id: 33, src: "/images/gallery/cozy-room-04.png", alt: "Cozy Spot Azure bedroom view 4", title: "Cozy Room", icon: "🛏️", category: "room-amenities", size: "small" },
  { id: 4, src: "/images/gallery/movie-night.jpg", alt: "Guests enjoying a movie night set up", title: "Movie Night", icon: "🍿", category: "family", size: "medium" },
  { id: 7, src: "/images/gallery/family-bonding.jpg", alt: "Family spending time together in the living room", title: "Family Bonding", icon: "👨‍👩‍👧", category: "family", size: "large" },
  { id: 34, src: "/images/gallery/Azure-beach-view-01.png", alt: "Azure Resort beach view", title: "Azure Beach View", icon: "🌴", category: "azure-resort", size: "medium" },
  { id: 35, src: "/images/gallery/Azure-kids-playground.png", alt: "Azure Resort kids playground", title: "Kids Playground", icon: "🛝", category: "azure-resort", size: "small" },
  { id: 36, src: "/images/gallery/Azure-beach-night-view-balcony-01.png", alt: "Night view of Azure Resort beach from the balcony", title: "Night View from Balcony", icon: "🌙", category: "azure-resort", size: "small" },
  { id: 37, src: "/images/gallery/Azure-beach-morning-view-balcony-02.png", alt: "Morning view of Azure Resort beach from the balcony", title: "Morning View from Balcony", icon: "🌅", category: "azure-resort", size: "small" },
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
  { id: 27, src: "/images/gallery/Karaoke.jpg", alt: "Karaoke setup in the unit", title: "Karaoke Night", icon: "🎤", category: "room-amenities", size: "small" },
  { id: 28, src: "/images/gallery/Board-games.jpg", alt: "Board games available for guests", title: "Board Games", icon: "🎲", category: "room-amenities", size: "small" },
  { id: 29, src: "/images/gallery/PS4.jpg", alt: "PS4 console and controllers for guests", title: "PS4 Gaming", icon: "🎮", category: "room-amenities", size: "small" },
  { id: 30, src: "/images/gallery/Board-games-01.jpg", alt: "Board games available for guests", title: "Board Games", icon: "🎯", category: "room-amenities", size: "small" },
];
export const videoItems: VideoItem[] = [
  { id: 1, thumbnail: "/videos/Anniversary-01.png", video: "/videos/Anniversary-01.mp4", title: "Anniversary", duration: "00:29" },
  { id: 2, thumbnail: "/videos/Anniversary-02.png", video: "/videos/Anniversary-02.mp4", title: "Anniversary Surprise", duration: "00:30" },
  { id: 3, thumbnail: "/videos/Will-you-be-my-girlfriend-01.png", video: "/videos/Will-you-be-my-girlfriend-01.mp4", title: "Will You Be My Girlfriend", duration: "00:30" },
  { id: 4, thumbnail: "/videos/Will-you-be-my-girlfriend-02.png", video: "/videos/Will-you-be-my-girlfriend-02.mp4", title: "Will You Be My Girlfriend — Part 2", duration: "00:30" },
  { id: 5, thumbnail: "/videos/Bridal-Shower-01.png", video: "/videos/Bridal-Shower-01.mp4", title: "Bridal Shower", duration: "00:30" },
];
