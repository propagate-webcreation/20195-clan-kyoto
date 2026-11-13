import Link from "next/link";
import { CUSTOM_PRICE, PRICE_NOTE, PRICE_ROWS } from "../../config/studios";
import { STORE_GUIDE } from "../../config/store-guide";
import { SectionHeading, SectionRail } from "../shared/Editorial";

export function PriceGuide() {
  return (
    <section id="pricing" className="bg-[#f5f5f3] text-[#0a0a0a]">
      <SectionRail number="01" title="Tattoo Menu" label="Price" />
      <div className="site-width py-[50px] md:py-[100px]">
        <p className="eyebrow mb-6 text-[#c8102e]">— {PRICE_NOTE}</p>
        <SectionHeading subtitle="One menu for Osaka, Kyoto, Shibuya and Shinjuku.">
          PRICE
          <br />
          <span className="text-black/40">LIST</span>
          <span className="text-[#c8102e]">.</span>
        </SectionHeading>
        <p className="mt-7 max-w-2xl text-left text-[14px] leading-relaxed text-black/80 md:text-[16px]">
          Osaka, Kyoto, Shibuya and Shinjuku share this menu. Prices include
          tax. Custom and large projects are priced upon consultation. Every
          studio is open 11:00–21:00.
        </p>
        <ul className="mt-10">
          {PRICE_ROWS.map((row, index) => (
            <li
              key={row.name}
              className="grid gap-1 border-t border-black/15 py-5 md:grid-cols-[auto_1.4fr_1fr_auto] md:items-baseline md:gap-6"
            >
              <p className="text-[13px] font-bold text-[#c8102e] md:text-[16px]">
                0{index + 1}
              </p>
              <p className="text-[18px] font-bold leading-snug md:text-[26px]">
                {row.name}
              </p>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                {row.size}
              </p>
              <p className="text-[16px] font-bold tabular-nums leading-relaxed md:text-[20px]">
                {row.price}
              </p>
            </li>
          ))}
          <li className="border-t border-black/15 py-5">
            <div>
              <p className="text-[18px] font-bold leading-snug md:text-[26px]">
                {CUSTOM_PRICE.name}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed md:text-[16px]">
                {CUSTOM_PRICE.note}
              </p>
            </div>
          </li>
        </ul>
        <ul className="mt-4 border-t border-black/15">
          {STORE_GUIDE.map((store) => (
            <li key={store.id} className="border-b border-black/15 py-5">
              <p className="text-[18px] font-bold leading-snug md:text-[26px]">
                {store.nav}
                {store.jp !== store.nav ? ` · ${store.jp}` : ""}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed md:text-[16px]">
                {store.hours}
              </p>
              {store.opening ? (
                <p className="mt-1 text-[14px] leading-relaxed text-black/70 md:text-[16px]">
                  {store.opening}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <Link href="#stores" className="btn-square mt-8 inline-flex min-h-12 font-bold">
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2.5 4.5 20.5l7.5-3.2 7.5 3.2L12 2.5Z"
            />
          </svg>
          Choose a studio
        </Link>
      </div>
    </section>
  );
}
