import Link from "next/link";
import { NAVIGATION, STUDIOS } from "../../config/studios";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/15">
      <div className="border-b border-white/15">
        <div className="site-width py-16 sm:py-24">
          <p className="eyebrow text-[#c8102e] mb-8">
            — Osaka · Kobe · Kyoto / Japan
          </p>
          <h2 className="display text-[clamp(3rem,12vw,11rem)] leading-[0.88]">
            WALK-IN
            <br />
            TATTOO STUDIO
            <br />
            <span className="text-white/30">
              JAPAN<span className="text-[#c8102e]">.</span>
            </span>
          </h2>
        </div>
      </div>
      <div className="site-width py-14 sm:py-20 grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-2 lg:col-span-4">
          <p className="eyebrow text-white/45 mb-5">— Our studios</p>
          <p className="text-base leading-[1.85] max-w-sm">
            Three cities. A shared love of Japanese tattoo. A memory to carry
            home.
          </p>
          <p className="font-jp text-sm leading-[1.95] text-white/55 mt-5">
            大阪・神戸・京都。
            <br />
            日本のタトゥーで、旅の思い出を一生に刻む。
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <p className="eyebrow text-white/45 mb-5">— Sitemap</p>
          <ul className="space-y-4">
            {NAVIGATION.map((n) => (
              <li key={n.href}>
                <Link className="text-sm hover:text-[#c8102e]" href={n.href}>
                  {n.label}
                  <span className="ml-3 text-xs text-white/45">{n.jp}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <p className="eyebrow text-white/45 mb-5">— Reach us</p>
          <ul className="space-y-6">
            {STUDIOS.map((s) => (
              <li key={s.id}>
                <a
                  href={s.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-[#c8102e]"
                >
                  <SocialIcon channel={s.channel} />
                  {s.city} / {s.channel} ↗
                </a>
                <p className="text-xs text-white/50 leading-[1.85] mt-2">
                  {s.hours}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-12 border-t border-white/15 pt-9 grid md:grid-cols-3 gap-8">
          {STUDIOS.map((s) => (
            <div key={s.id}>
              <p className="eyebrow text-white/45 mb-3">{s.city}</p>
              <p className="text-sm">{s.name}</p>
              <p className="text-xs text-white/50 mt-2">{s.company}</p>
              <Link
                href={`/studios#${s.id}`}
                className="text-xs text-white/60 inline-block border-b border-white/25 pb-1 mt-4"
              >
                店舗情報 / Studio information ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="site-width py-9 text-center eyebrow text-white/55">
          <span className="text-[#c8102e]">★</span> Made for travellers · 大阪 /
          神戸 / 京都 · Japan <span className="text-[#c8102e]">★</span>
        </div>
      </div>
      <div className="border-t border-white/10 site-width py-6 flex flex-wrap justify-between gap-3 text-[10px] tracking-[0.15em] uppercase text-white/40">
        <p>© 2026 WALK-IN TATTOO STUDIO JAPAN</p>
        <Link href="#main-content" className="hover:text-white">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
