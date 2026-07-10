"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";

const PRICE_MENU_IMAGE = "/images/1781095781563_617845264254239028.jpg";

const PRICE_ROWS = [
  {
    num: "01",
    en: "ONE POINT",
    size: "up to 3cm",
    price: "¥8,000 – ¥15,000",
  },
  {
    num: "02",
    en: "CARD SIZE",
    size: "approx. 8 × 5cm",
    price: "¥20,000 – ¥25,000",
  },
  {
    num: "03",
    en: "POSTCARD SIZE",
    size: "approx. 10 × 15cm",
    price: "¥60,000 – ¥65,000",
  },
  {
    num: "04",
    en: "B5 SIZE",
    size: "approx. 18 × 25cm",
    price: "¥85,000 – ¥90,000",
  },
  {
    num: "05",
    en: "A4 SIZE",
    size: "approx. 21 × 30cm",
    price: "¥100,000〜",
  },
];

export function Pricing() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <section
      id="pricing"
      className="relative bg-[#f5f5f3] text-[#0a0a0a] overflow-hidden"
    >
      <div className="border-t border-black/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-black/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">05</span>
            <span>Tattoo Menu</span>
          </div>
          <span>—— Price</span>
        </div>
        <div className="h-px bg-black/15" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-32">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-6">
              — Walk-ins Welcome · Tourist Friendly
            </p>
            <h2 className="display text-[clamp(2.6rem,7.5vw,7.5rem)] leading-[0.92] tracking-[-0.018em]">
              TATTOO
              <br />
              <span className="text-black/40">MENU</span>
              <span className="text-[#c8102e]">.</span>
            </h2>
            <p className="font-jp text-black/65 text-[13px] md:text-[16px] leading-relaxed mt-5 tracking-[0.04em] max-w-md">
              表示価格はすべて税込みです。
            </p>
            <p className="text-black/45 text-[13px] md:text-[16px] leading-relaxed mt-1">
              Prices include tax.
            </p>
            <p className="text-[10px] tracking-[0.24em] uppercase text-black/45 mt-4">
              Osaka, Japan
            </p>
            <p className="text-[13px] md:text-[16px] text-black/55 mt-1 leading-relaxed">
              We look forward to seeing you!
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="mt-4 block max-w-[220px] w-full text-left"
              aria-label="料金表メニュー画像を拡大表示"
            >
              <div className="relative w-full h-[200px] md:h-[240px] bg-[#161616]">
                <Image
                  src={PRICE_MENU_IMAGE}
                  alt="大阪店タトゥーメニュー料金表"
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
              <p className="text-[10px] md:text-[14px] text-black/45 mt-2 tracking-[0.06em]">
                Tap to enlarge menu
              </p>
              <p className="text-[10px] md:text-[14px] text-black/45 mt-1 tracking-[0.06em]">
                タップで料金表を拡大
              </p>
            </button>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-4">
            <ScrollReveal>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-black/20">
                      <th className="py-4 pr-4 text-[10px] tracking-[0.24em] uppercase text-black/45 font-medium">
                        Menu
                      </th>
                      <th className="py-4 pr-4 text-[10px] tracking-[0.24em] uppercase text-black/45 font-medium hidden sm:table-cell">
                        Size
                      </th>
                      <th className="py-4 text-[10px] tracking-[0.24em] uppercase text-black/45 font-medium text-right">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_ROWS.map((row) => (
                      <tr
                        key={row.num}
                        className="border-b border-black/10 align-top"
                      >
                        <td className="py-5 pr-4 min-w-0">
                          <p className="tabular text-[10px] tracking-[0.16em] text-[#c8102e]">
                            {row.num}
                          </p>
                          <p className="text-[16px] md:text-[20px] font-bold leading-snug mt-1">
                            {row.en}
                          </p>
                          <p className="text-black/55 text-[13px] md:text-[16px] leading-relaxed mt-2 sm:hidden tabular">
                            {row.size}
                          </p>
                        </td>
                        <td className="py-5 pr-4 text-[13px] md:text-[16px] text-black/70 hidden sm:table-cell tabular">
                          {row.size}
                        </td>
                        <td className="py-5 text-right tabular text-[16px] md:text-[20px] font-bold text-[#c8102e]">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 border border-black/15 p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.24em] uppercase text-[#c8102e]">
                  — Custom / Large Projects
                </p>
                <h3 className="text-[18px] md:text-[26px] font-bold leading-snug mt-3">
                  CUSTOM / LARGE PROJECTS
                </h3>
                <p className="text-[16px] md:text-[20px] font-bold text-[#c8102e] mt-4 tabular">
                  Price upon consultation
                </p>
                <p className="text-[13px] md:text-[16px] text-black/70 leading-relaxed mt-3">
                  Let&apos;s create something unique together.
                </p>
                <p className="font-jp text-[13px] md:text-[16px] text-black/55 leading-relaxed mt-2 tracking-[0.04em]">
                  オリジナルデザイン・大型作品はご相談ください。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="料金表メニュー"
          onClick={() => setMenuOpen(false)}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 min-w-[44px] min-h-[44px] flex items-center justify-center text-white text-[13px] tracking-[0.18em] uppercase z-10"
            aria-label="閉じる"
          >
            Close
          </button>
          <Image
            src={PRICE_MENU_IMAGE}
            alt="大阪店タトゥーメニュー料金表（拡大）"
            width={1086}
            height={1448}
            className="max-w-[min(900px,calc(100vw-40px))] max-h-[85dvh] w-auto h-auto object-contain"
            priority
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
