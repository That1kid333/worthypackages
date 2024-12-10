export interface Package {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  pricing: string;
  bookingLink: string;
}

export const packages: Package[] = [
  {
    title: "PLATINUM",
    description: "Our most comprehensive package for the ultimate luxury experience.",
    backgroundColor: "bg-[#172014]",
    textColor: "text-[#f2f1ea]",
    pricing: "$7,000-$9,500 / 10% of Event Budget",
    bookingLink: "https://book.stripe.com/9AQ2bh0oO7Qo7E43ce"
  },
  {
    title: "GOLD",
    description: "A premium package for those seeking an elevated experience.",
    backgroundColor: "bg-[#253320]",
    textColor: "text-[#f2f1ea]",
    pricing: "$5,000-$6,500 / 8% of Event Budget",
    bookingLink: "https://buy.stripe.com/cN23flgnMb2A3nO9AD"
  },
  {
    title: "SILVER",
    description: "A balanced package offering quality service at great value.",
    backgroundColor: "bg-[#586353]",
    textColor: "text-[#f2f1ea]",
    pricing: "$4,000-$4,500 / 6% of Event Budget",
    bookingLink: "https://buy.stripe.com/aEU8zF6Nc0nWcYodQU"
  },
  {
    title: "BRONZE",
    description: "An excellent entry-level package for smaller events.",
    backgroundColor: "bg-[#8c9285]",
    textColor: "text-[#172014]",
    pricing: "$2,500-$3,000",
    bookingLink: "https://buy.stripe.com/aEUcPVfjI2w4cYocMR"
  },
  {
    title: "COPPER",
    description: "A streamlined package focusing on essential services.",
    backgroundColor: "bg-[#bdc0b6]",
    textColor: "text-[#172014]",
    pricing: "$2,000-$2,500",
    bookingLink: "https://buy.stripe.com/fZe2bh8Vk9Yw7E4dQW"
  },
  {
    title: "NICKEL",
    description: "Our basic package, perfect for intimate gatherings and simple needs.",
    backgroundColor: "bg-[#f2f1ea]",
    textColor: "text-[#172014]",
    pricing: "$1,500",
    bookingLink: "https://buy.stripe.com/cN2bLR5J8daI2jK28f"
  }
];

export const packageDetails = [
  { service: "Couple's Interview", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE"] },
  { service: "Comprehensive Planning Guidebook", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COPPER", "NICKEL"] },
  { service: "Custom Venue/ Vendor Recommendations", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE"] },
  { service: "Design Pitches", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE"] },
  { service: "Venue Selection", packages: ["PLATINUM", "GOLD", "BRONZE"] },
  { service: "Caterer Selection & Menu Planning", packages: ["PLATINUM", "GOLD", "BRONZE"] },
  { service: "Attire Guidance & Selection", packages: ["PLATINUM", "GOLD", "BRONZE"] },
  { service: "Photographer Selection", packages: ["PLATINUM", "GOLD", "BRONZE"] },
  { service: "Videographer Selection", packages: ["PLATINUM", "GOLD"] },
  { service: "Officiant Selection, Ceremony Formatting", packages: ["PLATINUM", "GOLD"] },
  { service: "Musicians/ DJ Selection, Song Suggestions", packages: ["PLATINUM", "GOLD"] },
  { service: "Bakery Selection", packages: ["PLATINUM", "GOLD"] },
  { service: "Florals & Décor Ideas & Sourcing", packages: ["PLATINUM", "GOLD", "SILVER"] },
  { service: "Linen Rental Sourcing", packages: ["PLATINUM", "GOLD", "SILVER"] },
  { service: "Rental Supplies", packages: ["PLATINUM", "GOLD", "SILVER"] },
  { service: "Lighting Installations", packages: ["PLATINUM", "GOLD", "SILVER"] },
  { service: "Audio/Visuals Coordination & Installation", packages: ["PLATINUM", "GOLD", "SILVER"] },
  { service: "Invitations & Signage Sourcing & Drafting", packages: ["PLATINUM", "GOLD"] },
  { service: "Hair & Make-up Artists", packages: ["PLATINUM", "GOLD"] },
  { service: "Transportation", packages: ["PLATINUM", "GOLD"] },
  { service: "Guest Accommodations", packages: ["PLATINUM"] },
  { service: "Invitation Addressing, Stuffing, Tracking", packages: ["PLATINUM"] },
  { service: "Gifting for Couple, Bridal Party & Favors", packages: ["PLATINUM"] },
  { service: "Extra-Curricular Event Activities", packages: ["PLATINUM"] },
  { service: "Budget Tracking", packages: ["PLATINUM"] },
  { service: "Final Numbers Contract Refresher", packages: ["PLATINUM", "GOLD", "COPPER"] },
  { service: "Errand Running", packages: ["PLATINUM", "GOLD", "COPPER"] },
  { service: "Floorplans", packages: ["PLATINUM", "GOLD", "SILVER", "COPPER"] },
  { service: "2 Week Brain Dump Meeting", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COPPER", "NICKEL"] },
  { service: "Rehearsal Coordination", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COPPER", "NICKEL"] },
  { service: "Wedding Day Coordination", packages: ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COPPER", "NICKEL"] },
  { service: "Post Wedding Errands", packages: ["PLATINUM", "GOLD", "SILVER"] },
];