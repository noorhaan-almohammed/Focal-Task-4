import type { ReactNode } from "react";

export interface HeroFrame {
  icon: string;
  lable: string;
  description: string;
}

export interface HeroData {
  title: string;
  pref: string;
  frames: HeroFrame[];
}

export type sectionData = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};
export type DreamHouseProps = {
  title: string;
  description: string;
};
export type TrendingCardData = {
  img: string;
  price: number;
  title: string;
  location: string;
  index: number
};
export interface GallaryData {
  id: number;
  name: string;
  img: Array<string>;
}
type link = { tag: string; path: string };
export type FooterList = {
  title: string;
  items: link[];
};

export type FooterLocation = {
  title: string;
  location: string;
  social_media_icons: {
    icon: string;
    path: string;
  }[];
};

export type FooterType = {
  logo: string;
  description: string;
  list_1: FooterList;
  list_2: FooterList;
  list_3: FooterLocation;
  copyRight: link;
  term: link;
  policy: link;
};
