export const NAVIGATION = [
  { href: "/#top", label: "Home" },
  { href: "/#stores", label: "Studios" },
  { href: "/#works", label: "Works" },
  { href: "/#pricing", label: "Price" },
  { href: "/#flow", label: "Guide" },
  { href: "/blog", label: "Journal" },
  { href: "/#contact", label: "Contact" },
] as const;

export type StudioId = "osaka" | "kyoto";

// Public information checked against the materials supplied on 2026-11-13.
// Do not infer a street address for Osaka. Company and personal names stay unpublished.
export const STUDIOS = [
  {
    id: "osaka",
    city: "OSAKA",
    jp: "Inbound",
    name: "OSAKA WALK-IN TATTOO STUDIO JAPAN",
    area: "Shinsaibashi area, Osaka",
    areaEn: "Shinsaibashi area, Osaka",
    hours: "11:00 — 21:00",
    holidays: "Open daily",
    hoursNote:
      "Ask on WhatsApp or Instagram about last admission and same-day availability.",
    hoursNoteEn:
      "Ask on WhatsApp or Instagram about last admission and same-day availability.",
    address: "The exact address is sent by WhatsApp or Instagram DM.",
    addressEn: "The exact address is sent by WhatsApp or Instagram DM.",
    facilities: "Private booths, with Japanese artists on duty daily",
    facilitiesEn: "Private booths, with Japanese artists on duty daily",
    description:
      "From a small piece between sights to a full-day Japanese motif, in the Shinsaibashi area.",
    descriptionEn:
      "From a small piece between sights to a full-day Japanese motif, in the Shinsaibashi area.",
    hero: "/images/hero-main.webp",
    image: "/images/studio-interior.webp",
    imageAlt: "Studio interior in warm light",
    artistImage: "/images/artist-hands.webp",
    artistText:
      "Japanese artists are on duty daily. Talk with the studio about fine line or traditional Japanese work.",
    artistEn:
      "Japanese artists are on duty daily. Talk with the studio about fine line or traditional Japanese work.",
    channel: "WhatsApp",
    contact: "https://wa.me/818025184492",
    instagram:
      "https://www.instagram.com/osaka_walkin_tattoo_studio?igsh=MTJ6Mm5ydDJ1Z3ViYg%3D%3D&utm_source=qr",
    source: "https://tattoo-studio-osaka.com/",
    payments: "Visa, Mastercard, AMEX and electronic payments",
  },
  {
    id: "kyoto",
    city: "KYOTO",
    jp: "Kyoto",
    name: "KYOTO WALK-IN TATTOO STUDIO JAPAN",
    area: "Shimogyo-ku, Kyoto",
    areaEn: "Shimogyo-ku, Kyoto",
    hours: "11:00 — 21:00",
    holidays: "Open daily",
    hoursNote: "Open daily, 11:00–21:00.",
    hoursNoteEn: "Open daily, 11:00–21:00.",
    address:
      "401, Kawaramachi Kaikan, 253-1 Ichinomachi, Shimogyo-ku, Kyoto 600-8018",
    addressEn:
      "401, Kawaramachi Kaikan, 253-1 Ichinomachi, Shimogyo-ku, Kyoto 600-8018",
    facilities: "Three booths, with Japanese artists on duty daily",
    facilitiesEn: "Three booths, with Japanese artists on duty daily",
    description:
      "Sakura, dragon, wave and kanji. A Japanese tattoo as a souvenir from Kyoto, with three booths.",
    descriptionEn:
      "Sakura, dragon, wave and kanji. A Japanese tattoo as a souvenir from Kyoto, with three booths.",
    hero: "/images/hero-kyoto.webp",
    image: "/images/studio-interior.webp",
    imageAlt: "A private studio booth",
    artistImage: "/images/artist-portrait.webp",
    artistText:
      "Selected Japanese artists work daily, from one-point designs to Japanese motifs, with your travel plans in mind.",
    artistEn:
      "Selected Japanese artists work daily, from one-point designs to Japanese motifs, with your travel plans in mind.",
    channel: "Instagram",
    contact:
      "https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr",
    instagram:
      "https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr",
    source: "https://20195-clan-kyoto.vercel.app/",
    payments: "Visa, Mastercard, AMEX and electronic payments",
  },
] as const;

export function getStudio(id: string | undefined) {
  return STUDIOS.find((studio) => studio.id === id);
}

export const MOTIFS = [
  "Sakura",
  "Dragon",
  "Wave",
  "Kanji",
  "Tiger",
  "Hannya",
  "Original design",
  "Not sure yet",
] as const;

export const SIZES = [
  "One point / up to 3 cm",
  "Card size / approx. 8 × 5 cm",
  "Postcard size / approx. 10 × 15 cm",
  "B5 size / approx. 18 × 25 cm",
  "A4 size / approx. 21 × 30 cm",
  "Custom / large project",
  "Not sure yet",
] as const;

export const PRICE_NOTE = "Prices include tax.";

export const PRICE_ROWS = [
  {
    name: "One point",
    size: "up to 3 cm",
    price: "¥10,000 – ¥20,000",
  },
  {
    name: "Card size",
    size: "approx. 8 × 5 cm",
    price: "¥25,000 – ¥45,000",
  },
  {
    name: "Postcard size",
    size: "approx. 10 × 15 cm",
    price: "¥50,000 – ¥85,000",
  },
  {
    name: "B5 size",
    size: "approx. 18 × 25 cm",
    price: "¥90,000 – ¥145,000",
  },
  {
    name: "A4 size",
    size: "approx. 21 × 30 cm",
    price: "¥150,000 and up",
  },
] as const;

export const CUSTOM_PRICE = {
  name: "Custom / large projects",
  note: "Price upon consultation",
} as const;
