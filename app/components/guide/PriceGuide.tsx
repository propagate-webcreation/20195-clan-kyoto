import Link from "next/link";
import { STORE_GUIDE } from "../../config/store-guide";
import { SectionHeading, SectionRail } from "../shared/Editorial";

export function PriceGuide() {
  return (
    <section id="pricing" className="bg-[#f5f5f3] text-[#0a0a0a]">
      <SectionRail number="01" title="Tattoo Menu" label="Price" />
      <div className="site-width py-[50px] md:py-[100px]">
        <p className="eyebrow mb-6 text-[#c8102e]">
          — Same-day quote only
        </p>
        <SectionHeading jp="全店舗、当日見積もりのみです。">
          QUOTE ON
          <br />
          <span className="text-black/40">THE DAY</span>
          <span className="text-[#c8102e]">.</span>
        </SectionHeading>
        <p className="mt-7 max-w-2xl text-left text-[14px] leading-relaxed text-black/80 md:text-[16px]">
          大阪、神戸、京都、アメ村、新宿。
          <br />
          料金はデザイン・サイズ・部位を見て、当日にご案内します。
          <br />
          事前のサイズ別料金表はありません。
          <br />
          営業時間は全店舗 11:00–21:00 です。
        </p>
        <p className="mt-4 max-w-2xl text-left text-[14px] leading-relaxed text-black/70 md:text-[16px]">
          Every studio quotes on the day. There is no published size menu. All studios are open 11:00–21:00.
        </p>
        <ul className="mt-10">
          {STORE_GUIDE.map((store) => (
            <li key={store.id} className="border-t border-black/15 py-5">
              <p className="text-[18px] font-bold leading-snug md:text-[26px]">
                {store.jp}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed md:text-[16px]">
                {store.hours}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-black/70 md:text-[16px]">
                当日見積もりのみ
              </p>
            </li>
          ))}
        </ul>
        <Link href="#stores" className="btn-square mt-8 inline-flex min-h-12">
          店舗を選んで相談する
        </Link>
      </div>
    </section>
  );
}
