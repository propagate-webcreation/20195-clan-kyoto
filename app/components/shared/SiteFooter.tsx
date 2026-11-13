import Link from "next/link";
import { NAVIGATION } from "../../config/studios";
import { STORE_GUIDE } from "../../config/store-guide";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/15">
      <div className="border-b border-white/15">
        <div className="site-width py-16 sm:py-24">
          <p className="eyebrow text-[#c8102e] mb-8">
            — Osaka · Kyoto · Shibuya · Shinjuku / Japan
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
          <p className="text-[14px] leading-relaxed max-w-sm md:text-[16px]">
            Osaka, Kyoto and Shibuya are open for walk-ins. Contact the studio
            you want to visit.
          </p>
          <p className="text-[14px] leading-relaxed text-white/75 mt-5 md:text-[16px]">
            Shinjuku is scheduled to open on 15 November 2026.
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <p className="eyebrow text-white/45 mb-5">— Sitemap</p>
          <ul className="space-y-4">
            {NAVIGATION.map((n) => (
              <li key={n.href}>
                <Link className="text-sm hover:text-[#c8102e]" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <p className="eyebrow text-white/45 mb-5">— Reach us</p>
          <ul className="space-y-6">
            {STORE_GUIDE.map((store) => (
              <li key={store.id}>
                <Link
                  href={`/#${store.id}`}
                  className="text-[14px] font-bold hover:text-[#c8102e] md:text-[16px]"
                >
                  {store.nav}
                </Link>
                {store.opening ? (
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                    {store.opening}
                  </p>
                ) : null}
                <div className="mt-2 flex flex-col gap-2">
                  {store.contacts.map((contact) => (
                    <a
                      key={contact.href}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] leading-relaxed hover:text-[#c8102e]"
                    >
                      <SocialIcon channel={contact.channel} />
                      {contact.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-12 border-t border-white/15 pt-9 grid md:grid-cols-3 gap-8">
          {STORE_GUIDE.map((store) => (
            <div key={store.id}>
              <p className="eyebrow text-white/45 mb-3">{store.city}</p>
              {store.name ? (
                <p className="text-[14px] md:text-[16px]">{store.name}</p>
              ) : (
                <p className="text-[14px] md:text-[16px]">{store.opening}</p>
              )}
              <Link
                href={`/#${store.id}`}
                className="text-[14px] text-white/75 inline-block border-b border-white/25 pb-1 mt-4"
              >
                Studio details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="site-width py-9 text-center eyebrow text-white/55">
          Made for travellers · Osaka / Kyoto / Shibuya / Shinjuku · Japan
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
