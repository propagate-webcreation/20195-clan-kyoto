import Image from "next/image";
import Link from "next/link";
import { STUDIOS } from "../../config/studios";
import { SectionHeading, SectionRail } from "./Editorial";

export function StudioDirectory({ compact = false }: { compact?: boolean }) {
  return (
    <section id="studio">
      <SectionRail
        number="02"
        title="Three Cities · One Journey"
        label="Studios"
      />
      <div className="site-width py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:items-end mb-14">
          <SectionHeading jp="あなたの旅に合う、一軒を。">
            THREE CITIES.
            <br />
            <span className="text-white/35">ONE CRAFT.</span>
          </SectionHeading>
          <p className="max-w-md text-white/60 text-base leading-[1.85]">
            Osaka, Kobe and Kyoto. Find your studio, meet the artist, and take a
            piece of Japan with you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {STUDIOS.map((studio, i) => (
            <article key={studio.id} className="group min-w-0">
              <Link
                href={`/studios#${studio.id}`}
                className="block relative aspect-[3/4] overflow-hidden bg-[#161616]"
                aria-label={`${studio.jp}店の情報を見る`}
              >
                <Image
                  src={studio.hero}
                  alt={`${studio.jp}店のメインビジュアル`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/30" />
                <div className="absolute inset-x-5 top-5 flex justify-between eyebrow">
                  <span>0{i + 1}</span>
                  <span>{studio.jp} / Japan</span>
                </div>
                <div className="absolute inset-x-5 bottom-6">
                  <h3 className="display text-[clamp(3.3rem,5.6vw,6rem)]">
                    {studio.city}
                    <span className="text-[#c8102e]">.</span>
                  </h3>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-white/75 mt-4">
                    {studio.id === "kobe"
                      ? "tattoo studio domy"
                      : "Walk-in Tattoo Studio"}
                  </p>
                </div>
              </Link>
              <div className="py-6 border-b border-white/15">
                <p className="font-jp text-base">{studio.area}</p>
                <p className="text-white/60 text-sm mt-2 tabular">
                  {studio.hours}
                </p>
                {!compact && (
                  <p className="text-sm leading-[1.9] text-white/60 mt-4">
                    {studio.description}
                  </p>
                )}
                <Link
                  href={`/studios#${studio.id}`}
                  className="inline-flex items-center justify-between w-full mt-6 text-xs tracking-[0.12em] uppercase hover:text-[#c8102e]"
                >
                  店舗・アクセス / View studio <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
