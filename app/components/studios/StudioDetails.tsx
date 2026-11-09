import Image from "next/image";
import Link from "next/link";
import { STUDIOS } from "../../config/studios";
import { SectionRail, SectionHeading } from "../shared/Editorial";
import { SocialIcon } from "../shared/SocialIcon";

export function StudioDetails() {
  return (
    <>
      <section>
        <SectionRail number="01" title="Find Your Studio" label="Compare" />
        <div className="site-width py-16 sm:py-24">
          <SectionHeading jp="立ち寄る街、営業時間、設備から選ぶ。">
            AT A GLANCE<span className="text-[#c8102e]">.</span>
          </SectionHeading>
          <div className="grid md:grid-cols-3 mt-12 border-t border-l border-white/15">
            {STUDIOS.map((s) => (
              <div
                key={s.id}
                className="p-6 sm:p-8 border-b border-r border-white/15"
              >
                <Link
                  href={`#${s.id}`}
                  className="display text-5xl hover:text-[#c8102e]"
                >
                  {s.city} <span className="text-[#c8102e]">↘</span>
                </Link>
                <p className="text-sm mt-4 text-white/55">
                  {s.jp} / {s.id === "kobe" ? "DOMY" : "WALK-IN"}
                </p>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="eyebrow text-white/45">Hours</dt>
                    <dd className="mt-2 text-base">{s.hours}</dd>
                    <dd className="text-sm text-white/60 mt-2 leading-relaxed">
                      {s.holidays}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/45">Facilities</dt>
                    <dd className="mt-2 text-sm leading-[1.9]">
                      {s.facilities}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/45">Contact</dt>
                    <dd className="mt-2 text-base flex items-center gap-2">
                      <SocialIcon channel={s.channel} />
                      {s.channel}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
      {STUDIOS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={s.id === "kobe" ? "bg-black" : ""}
        >
          <SectionRail
            number={`0${i + 2}`}
            title={`${s.city} / ${s.jp}`}
            label={s.id === "kobe" ? "DOMY" : "Walk-in"}
          />
          <div className="site-width py-20 sm:py-28">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-start">
              <div>
                <p className="eyebrow text-[#c8102e] mb-6">{s.name}</p>
                <SectionHeading jp={s.area}>
                  {s.city}
                  <span className="text-[#c8102e]">.</span>
                </SectionHeading>
                <p className="font-jp text-base text-white/70 leading-[2] mt-7 max-w-xl">
                  {s.description}
                </p>
                <p className="text-sm text-white/50 leading-[1.9] mt-4 max-w-xl">
                  {s.descriptionEn}
                </p>
                <div className="relative aspect-[4/3] mt-10">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="eyebrow text-white/45 mt-4">
                  — Studio floor / {s.city}
                </p>
              </div>
              <div className="lg:pt-12">
                <dl>
                  {[
                    ["Location / 所在地", s.area, s.address, s.addressEn],
                    ["Hours / 営業時間", s.hours, s.holidays, s.hoursNoteEn],
                    ["Facilities / 設備", s.facilities, s.facilitiesEn, ""],
                    [
                      "Language / 言語",
                      "日本語 / English",
                      s.id === "kobe"
                        ? "英語版の同意書・アフターケアシートをご用意"
                        : "英語でのご相談に対応",
                      "",
                    ],
                    ["Payments / お支払い", s.payments, "", ""],
                  ].map(([label, main, sub, en]) => (
                    <div key={label} className="border-t border-white/15 py-6">
                      <dt className="eyebrow text-white/45 mb-3">{label}</dt>
                      <dd className="text-base leading-[1.85]">{main}</dd>
                      {sub && (
                        <dd className="text-sm leading-[1.85] text-white/60 mt-2">
                          {sub}
                        </dd>
                      )}
                      {en && (
                        <dd className="text-sm leading-[1.85] text-white/50 mt-2">
                          {en}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
                <div className="border-t border-white/15 pt-7">
                  <h3 className="text-lg mb-4">Access / ご来店前に</h3>
                  <p className="text-white/65 text-sm leading-[1.9]">
                    {s.hoursNote}{" "}
                    詳細な所在地・最寄り駅からの道順を店舗へご確認のうえ、お越しください。
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      href={`/?studio=${s.id}#contact`}
                      className="btn-square btn-blood"
                    >
                      {s.jp}店に相談する ↗
                    </Link>
                    <a
                      href={s.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-square"
                    >
                      <SocialIcon channel={s.channel} />
                      {s.channel} / Access ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
