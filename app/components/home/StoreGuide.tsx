import Image from "next/image";
import { STORE_GUIDE, type ContactChannel } from "../../config/store-guide";
import { SocialIcon } from "../shared/SocialIcon";

const contactClass: Record<ContactChannel, string> = {
  Instagram:
    "bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white hover:opacity-90",
  LINE: "bg-[#06C755] text-white hover:opacity-90",
  WhatsApp: "bg-[#128C7E] text-white hover:opacity-90",
};

export function StoreGuide() {
  return (
    <div id="stores">
      <nav
        aria-label="店舗へ移動"
        className="sticky top-[88px] z-30 border-y border-white/15 bg-[#0a0a0a] md:top-[100px]"
      >
        <ul className="mx-auto grid max-w-[1600px] grid-cols-4">
          {STORE_GUIDE.map((store) => (
            <li key={store.id} className="min-w-0">
              <a
                href={`#${store.id}`}
                className="flex min-h-12 items-center justify-center px-1 text-center text-[13px] font-bold leading-tight text-white md:text-[16px]"
              >
                {store.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {STORE_GUIDE.map((store, index) => (
        <section
          key={store.id}
          id={store.id}
          aria-label={store.name}
          className={`scroll-mt-[140px] py-[50px] md:scroll-mt-[156px] md:py-[100px] ${index % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}
        >
          <div className="site-width grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 min-w-0 md:order-1">
              {store.hero ? (
                <>
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={store.hero}
                      alt={`${store.jp}店の店内と施術の様子`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {store.heroNote ? (
                    <p className="mt-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                      {store.heroNote}
                    </p>
                  ) : null}
                </>
              ) : (
                <div className="flex aspect-[4/5] w-full items-end border border-white/15 bg-[#161616] p-6">
                  <p className="text-[14px] leading-relaxed text-white/80 md:text-[16px]">
                    {store.opening
                      ? "写真は、お客様から届き次第こちらに掲載します。"
                      : "店舗写真は、共有いただき次第こちらに掲載します。"}
                  </p>
                </div>
              )}
            </div>

            <div className="order-1 min-w-0 md:order-2">
              {store.logo ? (
                <Image
                  src={store.logo}
                  alt={`${store.jp}店のロゴ`}
                  width={280}
                  height={280}
                  className="mb-6 h-auto w-[140px] md:w-[180px]"
                />
              ) : null}
              <h2 className="display text-[40px] leading-none text-white md:text-[72px]">
                {store.city}
                <span className="text-[#c8102e]">.</span>
              </h2>
              <p className="mt-4 text-[16px] font-bold leading-snug text-white md:text-[20px]">
                {store.name}
              </p>
              {store.opening ? (
                <p className="mt-5 text-[18px] font-bold leading-snug text-[#c8102e] md:text-[26px]">
                  {store.opening}
                </p>
              ) : null}

              <dl className="mt-8 border-t border-white/15">
                {store.area ? (
                  <div className="border-b border-white/15 py-4">
                    <dt className="text-[13px] text-white/60 md:text-[14px]">
                      エリア
                    </dt>
                    <dd className="mt-1 text-[14px] leading-relaxed text-white md:text-[16px]">
                      {store.area}
                    </dd>
                  </div>
                ) : null}
                <div className="border-b border-white/15 py-4">
                  <dt className="text-[13px] text-white/60 md:text-[14px]">
                    営業時間
                  </dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-white md:text-[16px]">
                    {store.hours || "営業時間は決まり次第掲載します。"}
                  </dd>
                  {store.hoursNote ? (
                    <dd className="mt-2 text-[14px] leading-relaxed text-white/75 md:text-[16px]">
                      {store.hoursNote}
                    </dd>
                  ) : null}
                </div>
                <div className="border-b border-white/15 py-4">
                  <dt className="text-[13px] text-white/60 md:text-[14px]">
                    料金
                  </dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-white md:text-[16px]">
                    当日見積もりのみ
                  </dd>
                </div>
                <div className="border-b border-white/15 py-4">
                  <dt className="text-[13px] text-white/60 md:text-[14px]">
                    住所
                  </dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-white md:text-[16px]">
                    {store.address || "住所は決まり次第掲載します。"}
                  </dd>
                </div>
              </dl>

              {store.contacts.length > 0 ? (
                <div className="mt-6 flex flex-col gap-3">
                  {store.contacts.map((contact) => (
                    <a
                      key={contact.href}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-3 px-5 text-[14px] font-bold transition-opacity md:text-[16px] ${contactClass[contact.channel]}`}
                    >
                      <SocialIcon channel={contact.channel} />
                      {contact.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-[14px] leading-relaxed text-white/75 md:text-[16px]">
                  {store.opening
                    ? "問い合わせ先は、オープン情報と一緒に追加します。"
                    : "問い合わせ先は、分かり次第この場所に掲載します。"}
                </p>
              )}

              {store.description ? (
                <p className="mt-8 text-left text-[14px] leading-relaxed text-white/85 md:text-[16px]">
                  {store.description}
                </p>
              ) : null}
              {store.services.length > 0 ? (
                <ul className="mt-6 space-y-3">
                  {store.services.map((service) => (
                    <li
                      key={service}
                      className="border-l border-[#c8102e] pl-4 text-[14px] leading-relaxed text-white md:text-[16px]"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
