export const NAVIGATION = [
  { href: "/#top", label: "Home", jp: "トップ" },
  { href: "/#stores", label: "Studios", jp: "店舗" },
  { href: "/#works", label: "Works", jp: "作品" },
  { href: "/#pricing", label: "Price", jp: "料金" },
  { href: "/#flow", label: "Guide", jp: "ご案内" },
  { href: "/#contact", label: "Contact", jp: "相談" },
] as const;

export type StudioId = "osaka" | "kyoto";

// Public information and existing contact destinations checked on 2026-09-10.
// Headquarters addresses are not studio addresses. Do not infer missing details.
export const STUDIOS = [
  {
    id: "osaka",
    city: "OSAKA",
    jp: "大阪",
    name: "OSAKA WALK-IN TATTOO STUDIO JAPAN",
    area: "大阪・心斎橋エリア",
    areaEn: "Shinsaibashi area, Osaka",
    hours: "11:00 — 21:00",
    holidays: "年中無休 / Open daily",
    hoursNote:
      "料金は当日見積もりのみです。最終受付と当日の空きはお問い合わせください。",
    hoursNoteEn:
      "Pricing is quoted on the day. Contact the studio for last admission and availability.",
    address: "詳細住所は WhatsApp / Instagram DM にてご案内",
    addressEn: "Message us for the exact address before visiting.",
    facilities: "プライベートブース・日本人彫師が毎日常駐",
    facilitiesEn: "Private booths · Japanese artists on duty daily",
    description:
      "観光の合間のワンポイントから、一日かけて仕上げる和柄まで。心斎橋エリアで、日本のモチーフを旅の記憶に。",
    descriptionEn:
      "Japanese motifs in central Osaka, from a small keepsake during your sightseeing to a full-day piece.",
    hero: "/images/hero-main.webp",
    image: "/images/studio-interior.webp",
    imageAlt: "温かな照明のスタジオ内観",
    artistImage: "/images/artist-hands.webp",
    artistText:
      "日本人彫師が毎日常駐。ファインラインから和柄まで、ご希望のデザインに合わせてご相談いただけます。",
    artistEn:
      "Japanese artists on duty daily. Talk to the studio about fine-line or traditional Japanese work.",
    channel: "WhatsApp",
    contact: "https://wa.me/818025184492",
    instagram:
      "https://www.instagram.com/osaka_walkin_tattoo_studio?igsh=MTJ6Mm5ydDJ1Z3ViYg%3D%3D&utm_source=qr",
    source: "https://tattoo-studio-osaka.com/",
    company: "株式会社 Clan②",
    payments: "Visa / Mastercard / AMEX・各種電子決済",
  },
  {
    id: "kyoto",
    city: "KYOTO",
    jp: "京都",
    name: "KYOTO WALK-IN TATTOO STUDIO JAPAN",
    area: "京都",
    areaEn: "Kyoto, Japan",
    hours: "11:00 — 21:00",
    holidays: "年中無休 / Open daily",
    hoursNote:
      "料金は当日見積もりのみです。来店場所はInstagram DMでご案内します。",
    hoursNoteEn:
      "Pricing is quoted on the day. Message us on Instagram for directions.",
    address: "詳細住所は Instagram DM にてご案内",
    addressEn: "Message us on Instagram for the exact address before visiting.",
    facilities: "3ブース完備・日本人彫師が毎日出勤",
    facilitiesEn: "Three private booths · Japanese artists on duty daily",
    description:
      "桜・龍・波・漢字。京都で出会った日本の美意識を、一生残る思い出に。3つのブースでお迎えします。",
    descriptionEn:
      "Sakura, dragon, wave and kanji. A Japanese tattoo as your souvenir from Kyoto, with three private booths.",
    hero: "/images/hero-kyoto.webp",
    image: "/images/studio-interior.webp",
    imageAlt: "プライベートブースの内観",
    artistImage: "/images/artist-portrait.webp",
    artistText:
      "選別された日本人彫師が毎日出勤。ワンポイントから日本モチーフ・和テイストまで、旅程とご希望をうかがってご提案します。",
    artistEn:
      "Selected Japanese artists work daily, from one-point designs to Japanese motifs, with your travel plans in mind.",
    channel: "Instagram",
    contact:
      "https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr",
    instagram:
      "https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr",
    source: "https://20195-clan-kyoto.vercel.app/",
    company: "株式会社 Clan③",
    payments: "Visa / Mastercard / AMEX・各種電子決済",
  },
] as const;

export function getStudio(id: string | undefined) {
  return STUDIOS.find((studio) => studio.id === id);
}

export const MOTIFS = [
  "Sakura / 桜",
  "Dragon / 龍",
  "Wave / 波",
  "Kanji / 漢字",
  "Tiger / 虎",
  "Hannya / 般若",
  "Original / 持ち込み・オリジナル",
  "Undecided / 相談して決めたい",
];
export const SIZES = [
  "One point / 3cmまで",
  "Card / 約8 × 5cm",
  "Postcard / 約10 × 15cm",
  "B5 / 約18 × 25cm",
  "A4 / 約21 × 30cm以上",
  "Undecided / 相談して決めたい",
];

export const PRICE_ROWS = [
  {
    name: "ONE POINT",
    size: "up to 3cm",
    osaka: "¥8,000 – ¥15,000",
    kyoto: "¥10,000 – ¥18,000",
  },
  {
    name: "CARD SIZE",
    size: "approx. 8 × 5cm",
    osaka: "¥20,000 – ¥25,000",
    kyoto: "¥25,000 – ¥35,000",
  },
  {
    name: "POSTCARD SIZE",
    size: "approx. 10 × 15cm",
    osaka: "¥60,000 – ¥65,000",
    kyoto: "¥65,000 – ¥75,000",
  },
  {
    name: "B5 SIZE",
    size: "approx. 18 × 25cm",
    osaka: "¥85,000 – ¥90,000",
    kyoto: "¥90,000 – ¥100,000",
  },
  {
    name: "A4 SIZE",
    size: "approx. 21 × 30cm",
    osaka: "¥100,000〜",
    kyoto: "¥120,000〜",
  },
] as const;
