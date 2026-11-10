import { STUDIOS } from "./studios";

export type ContactChannel = "Instagram" | "LINE" | "WhatsApp";

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

export const STORE_GUIDE: StoreProfile[] = [
  {
    id: osaka.id,
    city: osaka.city,
    jp: "大阪インバウンド",
    nav: "大阪",
    name: osaka.name,
    area: osaka.area,
    hours: osaka.hours,
    hoursNote:
      "料金は当日見積もりのみです。最終受付と当日の空きは、WhatsAppかInstagramで確認できます。",
    address: "詳細住所はWhatsAppまたはInstagramのDMでご案内します。",
    description: osaka.description,
    services: [
      "予約なしで来店できます",
      "プライベートブースで、日本人彫師が毎日常駐しています",
      "桜・龍・波・漢字などの日本モチーフに対応します",
      "短時間のワンポイントから、一日がけの施術まで相談できます",
      "英語での案内に対応しています",
      osaka.payments,
    ],
    hero: osaka.hero,
    logo: "/images/logo.jpg",
    contacts: [
      {
        channel: "Instagram",
        href: osaka.instagram,
        label: "Instagramで相談する",
      },
      {
        channel: "WhatsApp",
        href: osaka.contact,
        label: "WhatsAppで相談する",
      },
    ],
    opening: "",
  },
  {
    id: kyoto.id,
    city: kyoto.city,
    jp: kyoto.jp,
    nav: "京都",
    name: kyoto.name,
    area: kyoto.area,
    hours: kyoto.hours,
    hoursNote: "料金は当日見積もりのみです。来店場所はInstagramのDMでご案内します。",
    address: kyoto.address,
    description: kyoto.description,
    services: [
      "ブースは3つ。日本人彫師が毎日出勤しています",
      "桜・龍・波・漢字など、日本のモチーフを相談できます",
      "ワンポイントから、旅程に合わせたサイズまで提案します",
      "年中無休。11:00–21:00",
      kyoto.payments,
    ],
    hero: kyoto.hero,
    logo: "/images/studio-logo.png",
    contacts: [
      {
        channel: "Instagram",
        href: kyoto.contact,
        label: "Instagramで来店案内を受け取る",
      },
    ],
    opening: "",
  },
  {
    id: "shibuya",
    city: "SHIBUYA",
    jp: "渋谷",
    nav: "渋谷",
    name: "TOKYO SHIBUYA WALK-IN TATTOO STUDIO",
    area: "東京・渋谷",
    hours: "11:00 — 21:00",
    hoursNote: "料金は来店当日に店頭で見積もりします。",
    address: "〒150-0002 東京都渋谷区渋谷1丁目8−5 グローリア宮益坂 303",
    description: "渋谷の WALK-IN TATTOO STUDIO です。",
    services: [],
    hero: "/images/shibuya-studio-v8.webp",
    heroNote: "写真は仮のイメージです。",
    logo: "",
    contacts: [],
    opening: "",
  },
  {
    id: "shinjuku",
    city: "SHINJUKU",
    jp: "新宿",
    nav: "新宿",
    name: "新宿店",
    area: "",
    hours: "11:00 — 21:00",
    hoursNote: "料金は当日見積もりのみです。",
    address: "",
    description: "",
    services: [],
    hero: "/images/shinjuku-studio.webp",
    heroNote: "写真は仮のイメージです。",
    logo: "",
    contacts: [],
    opening: "11月15日オープン予定",
  },
];
