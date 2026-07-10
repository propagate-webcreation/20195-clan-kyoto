"use client";

import Image from "next/image";

const NAV = [
  { label: "Concept", href: "#concept" },
  { label: "Why Us", href: "#why" },
  { label: "Studio", href: "#studio" },
  { label: "Works", href: "#works" },
  { label: "Offer", href: "#offer" },
  { label: "Flow", href: "#flow" },
  { label: "Price", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white border-t border-white/15">
      {/* GIANT brand wordmark (NHA-style logo block) */}
      <div className="relative overflow-hidden border-b border-white/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-12 sm:py-24">
          <p className="text-[10px] sm:text-xs tracking-[0.32em] uppercase text-[#c8102e] mb-5 sm:mb-10">
            — Walk-in tattoo studio · Kyoto · Japan
          </p>
          <h2 className="display text-white text-[clamp(2.2rem,12vw,11rem)] leading-[0.86] tracking-[-0.022em]">
            <span className="block">KYOTO WALK-IN</span>
            <span className="block">TATTOO STUDIO</span>
            <span className="block text-white/30">JAPAN<span className="text-[#c8102e]">.</span></span>
          </h2>
        </div>
      </div>

      {/* main grid */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-12 sm:py-20 grid grid-cols-12 gap-y-10 gap-x-6">
        {/* Brand */}
        <div className="col-span-12 lg:col-span-4">
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
            — Studio
          </p>
          <p className="text-white text-base leading-[1.8] max-w-sm">
            A walk-in tattoo studio in Kyoto, specialising in modern
            and traditional Japanese motifs for international travellers.
          </p>
          <p className="font-jp text-white/55 text-sm mt-3 leading-[1.95] tracking-[0.04em]">
            京都の飛び込み歓迎タトゥースタジオ。
            <br />
            日本モチーフ・和テイスト専門。
          </p>
        </div>

        {/* Sitemap */}
        <div className="col-span-6 lg:col-span-3 lg:col-start-6">
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
            — Sitemap
          </p>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-white/85 text-sm hover:text-[#c8102e] transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="col-span-6 lg:col-span-3">
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
            — Reach Us
          </p>
          <ul className="space-y-2.5">
            <li>
              <a
                href="https://www.instagram.com/osaka_walkin_tattoo_studio?igsh=MTJ6Mm5ydDJ1Z3ViYg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/85 text-sm hover:text-[#c8102e] transition-colors"
              >
                <span className="relative shrink-0 w-[18px] h-[18px] overflow-hidden">
                  <Image
                    src="/images/2227.png"
                    alt=""
                    fill
                    sizes="18px"
                    className="object-cover scale-[1.45]"
                    aria-hidden
                  />
                </span>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/818025184492"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/85 text-sm hover:text-[#c8102e] transition-colors"
              >
                <span className="relative shrink-0 w-[18px] h-[18px] overflow-hidden">
                  <Image
                    src="/images/1781500391229_618524089186779494.png"
                    alt=""
                    fill
                    sizes="18px"
                    className="object-cover"
                    aria-hidden
                  />
                </span>
                WhatsApp DM
              </a>
            </li>
            <li className="text-white/85 text-sm pt-2 tabular">
              11:00 — 21:00
            </li>
            <li className="text-white/55 text-xs">
              年中無休 / Open daily
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-12 border-t border-white/10 pt-8 sm:pt-10 mt-2 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 sm:gap-x-8">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-2">
              Company
            </p>
            <p className="text-white text-sm">株式会社 Clan③</p>
            <p className="text-white/55 text-xs mt-1">Clan③ Inc.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-2">
              Rep.
            </p>
            <p className="text-white text-sm">近藤 悠介</p>
            <p className="text-white/55 text-xs mt-1">Yusuke Kondo</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-2">
              Head Office
            </p>
            <p className="text-white text-sm leading-tight">兵庫県芦屋市春日町12-4 106</p>
            <p className="text-white/55 text-xs mt-1 leading-tight">
              12-4 Kasuga-cho 106, Ashiya, Hyogo
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-2">
              Founded
            </p>
            <p className="text-white text-sm tabular">2025年12月1日</p>
            <p className="text-white/55 text-xs mt-1 tabular">Dec 1, 2025</p>
          </div>
        </div>
      </div>

      {/* final type-mark band — closing editorial signature */}
      <div className="border-t border-white/15 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-10 sm:py-14 flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs tracking-[0.32em] uppercase text-white/55 text-center flex-wrap">
          <span className="text-[#c8102e]">★</span>
          <span>Made for travellers</span>
          <span className="hidden sm:inline-block w-6 h-px bg-white/30" />
          <span className="font-jp tracking-[0.18em]">京都</span>
          <span className="hidden sm:inline-block w-6 h-px bg-white/30" />
          <span>Japan</span>
          <span className="text-[#c8102e]">★</span>
        </div>
      </div>

      {/* bottom rail */}
      <div className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.24em] uppercase text-white/40">
          <p className="leading-tight">© 2026 株式会社 Clan③ / KYOTO WALK-IN TATTOO STUDIO JAPAN</p>
          <p className="tabular leading-tight">EST. 2025 · KYOTO</p>
        </div>
      </div>
    </footer>
  );
}
