import { STUDIOS } from "./studios";

export type ContactChannel = "Instagram" | "LINE" | "WhatsApp" | "TikTok";

export type StoreContact = {
  channel: ContactChannel;
  href: string;
  label: string;
};

export type StoreProfile = {
  id: string;
  city: string;
  jp: string;
  nav: string;
  name: string;
  area: string;
  hours: string;
  hoursNote: string;
  address: string;
  mapUrl: string;
  description: string;
  services: string[];
  hero: string;
  heroNote?: string;
  logo: string;
  contacts: StoreContact[];
  opening: string;
};

function published(id: "osaka" | "kyoto") {
  const studio = STUDIOS.find((item) => item.id === id);
  if (!studio) {
    throw new Error(`Studio ${id} is missing from studios.ts`);
  }
  return studio;
}

const osaka = published("osaka");
const kyoto = published("kyoto");

const KYOTO_MAP = "https://maps.app.goo.gl/dqEMfHR8qTAhAppv5";
const SHINJUKU_MAP =
  "https://www.google.com/maps/search/?api=1&query=%E3%80%92160-0021%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA2%E4%B8%81%E7%9B%AE45-7%20%E5%A4%A7%E5%96%9C%E3%83%93%E3%83%AB2%E9%9A%8E";
const SHIBUYA_MAP =
  "https://www.google.com/maps/search/?api=1&query=%E3%80%92150-0002%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E6%B8%8B%E8%B0%B71%E4%B8%81%E7%9B%AE8-5%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%AA%E3%82%A2%E5%AE%AE%E7%9B%8A%E5%9D%82403";

export const STORE_GUIDE: StoreProfile[] = [
  {
    id: osaka.id,
    city: osaka.city,
    jp: "Inbound",
    nav: "Osaka",
    name: osaka.name,
    area: osaka.area,
    hours: osaka.hours,
    hoursNote: osaka.hoursNote,
    address: "The exact address is sent by WhatsApp or Instagram DM.",
    mapUrl: "",
    description: osaka.description,
    services: [
      "Walk-ins are welcome",
      "Private booths, with Japanese artists on duty daily",
      "Japanese motifs, including sakura, dragon, wave and kanji",
      "From a short one-point piece to a full-day session",
      "Consultations in English",
      osaka.payments,
    ],
    hero: osaka.hero,
    logo: "/images/logo.jpg",
    contacts: [
      {
        channel: "Instagram",
        href: osaka.instagram,
        label: "Message on Instagram",
      },
      {
        channel: "WhatsApp",
        href: osaka.contact,
        label: "Message on WhatsApp",
      },
    ],
    opening: "",
  },
  {
    id: kyoto.id,
    city: kyoto.city,
    jp: "Kyoto",
    nav: "Kyoto",
    name: kyoto.name,
    area: kyoto.area,
    hours: kyoto.hours,
    hoursNote: "",
    address: kyoto.address,
    mapUrl: KYOTO_MAP,
    description: kyoto.description,
    services: [
      "Three booths, with Japanese artists on duty daily",
      "Japanese motifs, including sakura, dragon, wave and kanji",
      "From a one-point piece to a size that fits your trip",
      "Open daily, 11:00–21:00",
      kyoto.payments,
    ],
    hero: kyoto.hero,
    logo: "/images/studio-logo.png",
    contacts: [
      {
        channel: "Instagram",
        href: kyoto.contact,
        label: "Message on Instagram",
      },
    ],
    opening: "",
  },
  {
    id: "shibuya",
    city: "SHIBUYA",
    jp: "Shibuya",
    nav: "Shibuya",
    name: "TOKYO SHIBUYA WALK-IN TATTOO STUDIO",
    area: "Shibuya, Tokyo",
    hours: "11:00 — 21:00",
    hoursNote: "",
    address:
      "Gloria Miyamasuzaka 303, 1-8-5 Shibuya, Shibuya-ku, Tokyo 150-0002",
    mapUrl: SHIBUYA_MAP,
    description: "WALK-IN TATTOO STUDIO in Shibuya.",
    services: [],
    hero: "/images/shibuya-studio-v8.webp",
    heroNote: "This photo is a placeholder.",
    logo: "",
    contacts: [],
    opening: "",
  },
  {
    id: "shinjuku",
    city: "SHINJUKU",
    jp: "Shinjuku",
    nav: "Shinjuku",
    name: "",
    area: "Kabukicho, Shinjuku",
    hours: "11:00 — 21:00",
    hoursNote: "",
    address:
      "2F, 大喜ビル, 2-45-7 Kabukicho, Shinjuku-ku, Tokyo 160-0021",
    mapUrl: SHINJUKU_MAP,
    description: "",
    services: [],
    hero: "/images/shinjuku-studio.webp",
    heroNote: "This photo is a placeholder.",
    logo: "",
    contacts: [
      {
        channel: "Instagram",
        href: "https://www.instagram.com/tokyo_shinjuku_walkin_tattoo",
        label: "Message on Instagram",
      },
      {
        channel: "TikTok",
        href: "https://www.tiktok.com/@walkin.tattoo.shinjuku",
        label: "TikTok",
      },
    ],
    opening: "Scheduled to open on 15 November 2026",
  },
];
