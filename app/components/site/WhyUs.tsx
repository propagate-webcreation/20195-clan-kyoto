"use client";

import { ScrollReveal } from "../animation/ScrollReveal";

const REASONS = [
  {
    num: "01",
    en: "Walk-in Welcome",
    subtitle: "No appointment needed",
    body: "Drop in during your sightseeing. Every studio is open 11:00–21:00. Menu prices include tax.",
  },
  {
    num: "02",
    en: "Japanese Motifs",
    subtitle: "Inspired by Japanese tradition",
    body: "Sakura, dragon, wave, kanji, koi — traditional Japanese motifs reinterpreted in modern fine-line and bold irezumi work, loved by international guests.",
  },
  {
    num: "03",
    en: "English Welcome",
    subtitle: "Consultations in your language",
    body: "Osaka and Kyoto can discuss your design and travel plans in English or Japanese.",
  },
  {
    num: "04",
    en: "Short Sessions",
    subtitle: "Made to fit your itinerary",
    body: "Many designs can be completed in a short session — perfect for travellers who want a tattoo without reshaping their entire itinerary.",
  },
  {
    num: "05",
    en: "Card & E-Pay",
    subtitle: "Flexible payment options",
    body: "Cards and electronic payments are accepted. Available payment brands vary by studio — check your preferred method before visiting.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between gap-3 min-w-0 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4 min-w-0">
            <span className="tabular text-[#c8102e] shrink-0">01</span>
            <span className="min-w-0">Why Travellers Choose Us</span>
          </div>
          <span className="shrink-0 hidden sm:inline">—— Why Us</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          {/* sticky title rail */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-6">
                — 5 Reasons
              </p>
              <h2 className="display text-[clamp(2.4rem,6vw,6rem)] leading-[0.92] tracking-[-0.018em]">
                WHY
                <br />
                TRAVELLERS
                <br />
                <span className="text-white/35">CHOOSE</span>
                <br />
                US.
              </h2>
              <p className="text-white/55 text-sm leading-[1.95] mt-8 max-w-sm">
                Drop in between your adventures. Our walk-in studios welcome
                travellers from around the world, with an experience that feels
                easy and approachable.
              </p>
            </div>
          </div>

          {/* numbered list — NHA Expertise style */}
          <div className="col-span-12 lg:col-span-8 lg:pl-8">
            <ul>
              {REASONS.map((r, i) => (
                <li
                  key={r.num}
                  className={`group ${i === 0 ? "border-t" : ""} border-b border-white/15 py-7 sm:py-8`}
                >
                  <ScrollReveal delay={i * 0.04}>
                    <div className="grid grid-cols-12 gap-x-3 sm:gap-x-6 items-baseline">
                      <span className="col-span-2 sm:col-span-1 tabular text-[10px] sm:text-xs tracking-[0.16em] text-white/50">
                        {r.num}
                      </span>
                      <div className="col-span-10 sm:col-span-5">
                        <h3 className="text-white text-xl sm:text-2xl tracking-[-0.005em] font-medium">
                          {r.en}
                        </h3>
                        <p className="text-white/45 text-xs sm:text-sm mt-1 tracking-[0.06em]">
                          {r.subtitle}
                        </p>
                      </div>
                      <p className="col-span-12 sm:col-span-6 text-white/55 text-sm leading-[1.75] mt-4 sm:mt-0">
                        {r.body}
                      </p>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>

            {/* payment badges row */}
            <div className="mt-12 sm:mt-14 flex flex-wrap items-center gap-3 sm:gap-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mr-2">
                Pay how you usually pay —
              </p>
              {[
                "VISA",
                "MASTERCARD",
                "AMEX",
                "APPLE PAY",
                "GOOGLE PAY",
                "PAYPAY",
                "ALIPAY",
                "WECHAT",
              ].map((p) => (
                <span
                  key={p}
                  className="border border-white/15 px-3 py-1.5 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-white/70"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
