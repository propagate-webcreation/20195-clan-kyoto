"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { STUDIOS, PRICE_ROWS, type StudioId } from "../../config/studios";
import { SectionHeading, SectionRail } from "../shared/Editorial";
import { ImageDialog } from "../shared/ImageDialog";

export function PriceGuide() {
  const [studio, setStudio] = useState<StudioId>("osaka");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuImage =
    studio === "osaka"
      ? "/images/1781095781563_617845264254239028.jpg"
      : "/images/menu-kyoto.jpg";
  const current = STUDIOS.find((s) => s.id === studio)!;
  return (
    <section id="pricing" className="bg-[#f5f5f3] text-[#0a0a0a]">
      <SectionRail number="01" title="Tattoo Menu" label="Price" />
      <div className="site-width py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-12 lg:gap-20">
          <div>
            <p className="eyebrow text-[#c8102e] mb-6">
              — Walk-ins Welcome · Tourist Friendly
            </p>
            <SectionHeading jp="表示価格はすべて税込みです。">
              TATTOO
              <br />
              <span className="text-black/40">MENU</span>
              <span className="text-[#c8102e]">.</span>
            </SectionHeading>
            <p className="text-black/55 text-sm mt-2">Prices include tax.</p>
            <p className="text-black/60 text-sm leading-[1.9] mt-7 max-w-sm">
              店舗を選んで料金をご確認ください。デザインの細かさ・色・部位により金額と所要時間は異なります。最終料金は施術前のご相談でご案内します。
            </p>
            <p className="text-black/55 text-sm leading-[1.85] mt-4 max-w-sm">
              Select a studio for its price guide. Final pricing and session
              length depend on the design, colour and placement. Confirm the
              quote before your session.
            </p>
            {studio !== "kobe" && (
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="block mt-8 text-left max-w-[220px]"
                aria-label={`${current.jp}店の料金表画像を拡大`}
              >
                <div className="relative w-[200px] h-[230px]">
                  <Image
                    src={menuImage}
                    alt={`${current.jp}店の料金表`}
                    fill
                    sizes="200px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="block text-xs text-black/60 mt-3">
                  料金表を拡大 / Enlarge menu ↗
                </span>
              </button>
            )}
          </div>
          <div>
            <div
              role="group"
              aria-label="料金を確認する店舗"
              className="grid grid-cols-3 border-b border-black/20 mb-7"
            >
              {STUDIOS.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  aria-pressed={studio === s.id}
                  onClick={() => setStudio(s.id)}
                  className={`py-5 text-xs tracking-[0.1em] border-b-2 ${studio === s.id ? "border-[#c8102e] text-[#c8102e]" : "border-transparent text-black/50"}`}
                >
                  {s.city}
                  <span className="block mt-2">{s.jp}</span>
                </button>
              ))}
            </div>
            <div aria-live="polite">
              <p className="eyebrow text-black/50 mb-4">
                {current.city} / Price guide
              </p>
              {studio === "kobe" ? (
                <div className="py-12 border-y border-black/15">
                  <h3 className="display text-4xl sm:text-5xl">
                    LET’S TALK
                    <br />
                    ABOUT YOUR DESIGN.
                  </h3>
                  <p className="text-base leading-[1.9] text-black/65 mt-6">
                    神戸店の料金は、デザイン・サイズ・部位をうかがってLINEにてご案内します。
                  </p>
                  <p className="text-sm leading-[1.85] text-black/55 mt-3">
                    Kobe pricing is provided via LINE after discussing your
                    design, size and placement.
                  </p>
                  <Link href="/contact?studio=kobe" className="btn-square mt-7">
                    神戸店に見積もりを相談する ↗
                  </Link>
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <caption className="sr-only">
                    {current.jp}店 タトゥー料金（税込）
                  </caption>
                  <thead>
                    <tr className="border-b border-black/20 text-xs tracking-[0.15em] text-black/50">
                      <th scope="col" className="py-4 font-normal">
                        MENU / SIZE
                      </th>
                      <th scope="col" className="py-4 text-right font-normal">
                        PRICE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_ROWS.map((r, i) => (
                      <tr key={r.name} className="border-b border-black/15">
                        <th scope="row" className="py-6 pr-3 font-normal">
                          <span className="block text-[11px] text-[#c8102e] mb-2">
                            0{i + 1}
                          </span>
                          <span className="block text-base sm:text-xl font-semibold">
                            {r.name}
                          </span>
                          <span className="block text-xs sm:text-sm text-black/55 mt-2">
                            {r.size}
                          </span>
                        </th>
                        <td className="py-6 text-right text-sm sm:text-xl tabular">
                          {r[studio]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="border-t border-black/20 mt-10 pt-7">
              <p className="eyebrow text-[#c8102e]">Custom / Large projects</p>
              <h3 className="text-xl mt-4">
                オリジナル・大型作品はご相談ください。
              </h3>
              <p className="text-sm text-black/60 mt-3">
                Price upon consultation. Let’s create something unique together.
              </p>
              <Link
                href={`/contact?studio=${studio}`}
                className="btn-square mt-7"
              >
                料金・デザインを相談する ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ImageDialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title={`${current.jp}店の料金表`}
      >
        <div className="relative h-[78vh]">
          <Image
            src={menuImage}
            alt={`${current.jp}店の料金表（拡大）`}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
      </ImageDialog>
    </section>
  );
}
