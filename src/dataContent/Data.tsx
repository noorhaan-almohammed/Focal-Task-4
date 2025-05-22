import type {
  HeroData,
  sectionData,
  HeroFrame,
  DreamHouseProps,
  GallaryData,
  FooterType,
} from "../types/types.ts";

export const NavBarData: Array<{ label: string; path: string }> = [
  { label: "Home", path: "" },
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  { label: "New Property", path: "new-property" },
  { label: "Contact", path: "contact" },
];

export const heroData: HeroData = {
  title: "Discover a place \n you will love to live",
  pref: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Imperdiet tempus felis vitae sit est quisque.",
  frames: [
    {
      icon: "/icons/hero_location.svg",
      lable: "Location",
      description: "Ahmedabad, India",
    },
    {
      icon: "/icons/dollar_circle.svg",
      lable: "Price",
      description: "$1000 - $10,000",
    },
    {
      icon: "/icons/house.svg",
      lable: "Type of Property",
      description: "Apartment",
    },
  ],
};
export const Workcards: Array<HeroFrame> = [
  {
    icon: "/icons/search_house.svg",
    lable: "Search Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: "/icons/point_house.svg",
    lable: "Select Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: "/icons/check_house.svg",
    lable: "Confirm Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];
export const worksData: Omit<sectionData, "children"> = {
  title: "How it Works",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
};
export const DreamHouseData: DreamHouseProps = {
  title: "Find Dream Home",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
};
export const TrendCards: Array<{
  img: string;
  price: number;
  title: string;
  location: string;
}> = [
  {
    img: "/images/trend_1.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    img: "/images/trend_2.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    img: "/images/trend_3.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    img: "/images/trend_4.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    img: "/images/trend_5.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    img: "/images/trend_6.png",
    price: 3000000,
    title: "Luxury Apartment in California",
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
];

export const TrendingData: Omit<sectionData, "children"> = {
  title: "Most Trending",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
};

export const GallaryRawData: GallaryData[] = [
  {
    id: 1,
    name: "Residential Property",
    img: ["/images/img_1.jpg", "/images/img_2.jpg", "/images/img_3.jpg"],
  },
  {
    id: 2,
    name: "Commercial Property",
    img: ["/images/img_3.jpg", "/images/img_1.jpg", "/images/img_2.jpg"],
  },
  {
    id: 3,
    name: "Agriculture Property",
    img: ["/images/img_2.jpg", "/images/img_3.jpg", "/images/img_1.jpg"],
  },
  {
    id: 4,
    name: "Industrial Property",
    img: ["/images/img_3.jpg", "/images/img_2.jpg", "/images/img_1.jpg"],
  },
];

export const GalluryData: Omit<sectionData, "children"> = {
  title: "Best Real Estate Deals",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
};

export const FooterData: FooterType = {
  logo: "/logo.svg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imperdiet tempus felis vitae sit est quisque.",
  list_1: {
    title: "Service",
    items: [
      { tag: "Payment & Tax", path: "payment" },
      { tag: "Features", path: "features" },
      { tag: "View Booking", path: "view" },
      { tag: "Support", path: "support" },
    ],
  },
  list_2: {
    title: "About",
    items: [
      { tag: "About us", path: "about" },
      { tag: "News", path: "news" },
      { tag: "Pricing", path: "price" },
      { tag: "New Property", path: "property" },
    ],
  },
  list_3: {
    title: "Our Location",
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    social_media_icons: [
      { icon: "/icons/facebook.svg", path: "" },
      { icon: "/icons/twitter.svg", path: "" },
      { icon: "/icons/linkedin.svg", path: "" },
    ],
  },
  copyRight: { tag: "Copyright 2024 flora. All Rights Reserved", path: "" },
  term: { tag: "Terms & Conditions", path: "" },
  policy: { tag: "Privacy Policy", path: "" },
};
