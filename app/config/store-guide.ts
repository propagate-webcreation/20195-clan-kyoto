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

function published(id: "osaka" | "kobe" | "kyoto") {
  const studio = STUDIOS.find((item) => item.id === id);
  if (!studio) {
    throw new Error(`Studio ${id} is missing from studios.ts`);
  }
  return studio;
}

const osaka = published("osaka");
const kobe = published("kobe");
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
    id: kobe.id,
    city: kobe.city,
    jp: kobe.jp,
    nav: "神戸",
    name: kobe.name,
    area: kobe.area,
    hours: "11:00 — 21:00",
    hoursNote:
      "料金は当日見積もりのみです。詳細住所は公式LINEでご案内します。",
    address: "詳細住所は公式LINEでご案内します。",
    description: kobe.description,
    services: [
      "予約なしで来店できます",
      "桜・龍・波・漢字を中心に、肌の曲線に合わせて構図を提案します",
      "英語の同意書とアフターケアシートがあります",
      "ワンポイントなど、短時間の施術も相談できます",
      kobe.payments,
    ],
    hero: kobe.hero,
    logo: "",
    contacts: [
      {
        channel: "LINE",
        href: kobe.contact,
        label: "LINEで予約・来店相談",
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
    id: "amemura",
    city: "AMEMURA",
    jp: "アメ村",
    nav: "アメ村",
    name: "DOMY TATTOO STUDIO（アメ村店）",
    area: "大阪・アメリカ村 / 北堀江",
    hours: "11:00 — 21:00",
    hoursNote: "料金は当日見積もりのみです。",
    address:
      "〒550-0014 大阪府大阪市西区北堀江1丁目2−16 おおきにサイタ サイタビルヂング 902",
    description: "アメリカ村、北堀江の DOMY TATTOO STUDIO です。",
    services: [],
    hero: "/images/amemura-studio.webp",
    heroNote: "写真は仮のイメージです。",
    logo: "/images/amemura-logo.png",
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
    logo: "/images/shinjuku-logo.png",
    contacts: [],
    opening: "11月15日オープン予定",
  },
];
