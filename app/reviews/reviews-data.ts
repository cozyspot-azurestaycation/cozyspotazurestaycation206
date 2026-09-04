export interface Review {
  name: string;
  rating: number; // 1-5
  review: string;
  stayType:
    | "Couple Staycation"
    | "Birthday Celebration"
    | "Anniversary"
    | "Family Staycation"
    | "Weekend Escape";
  date: string;
  image: string;
}

export const reviews: Review[] = [
  {
    name: "Andrea & Miguel",
    rating: 5,
    review:
      "Our anniversary staycation at Cozy Spot Azure was beyond perfect. The room was spotless, the view of the city lights was romantic, and the little touches made it feel truly special. We'll definitely book again.",
    stayType: "Anniversary",
    date: "July 2026",
    image: "/images/guests/guest-1.jpg",
  },
  {
    name: "Karla Santos",
    rating: 5,
    review:
      "Perfect birthday staycation in Parañaque! The unit was cozy, well-maintained, and so close to NAIA which made travel easy for out-of-town guests. Highly recommend Cozy Spot Azure for celebrations.",
    stayType: "Birthday Celebration",
    date: "June 2026",
    image: "/images/guests/guest-2.jpg",
  },
  {
    name: "The Reyes Family",
    rating: 5,
    review:
      "We needed a private staycation for a family bonding weekend and this exceeded expectations. Clean, spacious, and quiet. The kids loved movie night in the living room. Will be back!",
    stayType: "Family Staycation",
    date: "May 2026",
    image: "/images/guests/guest-3.jpg",
  },
  {
    name: "Joshua Tan",
    rating: 5,
    review:
      "Booked a weekend escape here to unwind after a stressful month. The Azure Urban Resort Residences amenities plus a beautifully designed unit made it feel like a mini vacation without leaving Metro Manila.",
    stayType: "Weekend Escape",
    date: "May 2026",
    image: "/images/guests/guest-4.jpg",
  },
  {
    name: "Bea & Louie",
    rating: 5,
    review:
      "A dreamy couple staycation from start to finish. Communication with the host was excellent, check-in was smooth, and the room was styled beautifully for our little celebration.",
    stayType: "Couple Staycation",
    date: "April 2026",
    image: "/images/guests/guest-5.jpg",
  },
  {
    name: "Marielle Cruz",
    rating: 5,
    review:
      "This is now our go-to short-term stay in Metro Manila. Cozy Spot Azure feels private, secure, and genuinely comfortable — like a home away from home for our celebrations.",
    stayType: "Birthday Celebration",
    date: "March 2026",
    image: "/images/guests/guest-6.jpg",
  },
];
