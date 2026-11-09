import Image from "next/image";
import Link from "next/link";
import { STUDIOS } from "../../config/studios";
import { SectionHeading, SectionRail } from "../shared/Editorial";

export function Artists() {
  return (
    <section id="artists">
      <SectionRail
        number="02"
        title="The Hands Behind the Ink"
        label="Artists"
      />
      <div className="site-width py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end mb-14">
          <SectionHeading>
            JAPANESE HANDS.
            <br />
            <span className="text-white/35">YOUR STORY.</span>
          </SectionHeading>
          <div>
            <p className="font-jp text-base leading-[1.95] text-white/70">
              希望のモチーフと滞在日程をお聞かせください。店舗ごとの彫師に相談しながら、あなたに合うデザインを見つけていきます。
            </p>
            <p className="text-sm text-white/50 leading-[1.85] mt-4">
              Meet the studio team. Ask about the artist working on your
              preferred day and view their latest portfolio before choosing.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STUDIOS.map((s) => (
            <article key={s.id}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.artistImage}
                  alt={`${s.jp}の彫師の施術風景`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow mt-6 text-[#c8102e]">
                {s.jp} / Studio team
              </p>
              <h3 className="display text-4xl mt-4">
                {s.city} {s.id === "kobe" ? "DOMY" : "ARTISTS"}
              </h3>
              <p className="text-white/65 text-sm leading-[2] mt-5">
                {s.artistText}
              </p>
              <p className="text-white/50 text-sm leading-[1.85] mt-3">
                {s.artistEn}
              </p>
              <Link
                href={`/?studio=${s.id}&purpose=artist#contact`}
                className="inline-block border-b border-white/50 pb-2 mt-6 text-sm hover:text-[#c8102e]"
              >
                担当彫師・作品を問い合わせる ↗
              </Link>
            </article>
          ))}
        </div>
        <p className="border-t border-white/15 mt-12 pt-6 text-sm text-white/55 leading-[1.9]">
          アーティストの出勤・指名可否は店舗ごとにご案内します。ご希望のアーティストがいる方は、お名前や作品画像を添えてご相談ください。
        </p>
      </div>
    </section>
  );
}
