"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";

const WORKS = [
  { src: "/images/work-dragon.webp", title: "Ryū", motif: "Dragon", num: "01" },
  { src: "/images/work-sakura.webp", title: "Sakura", motif: "Cherry Blossom", num: "02" },
  { src: "/images/work-wave.webp", title: "Nami", motif: "Wave", num: "03" },
  { src: "/images/work-kanji.webp", title: "Kanji", motif: "Calligraphy", num: "04" },
  { src: "/images/work-tiger.webp", title: "Tora", motif: "Tiger", num: "05" },
  { src: "/images/work-mask.webp", title: "Hannya", motif: "Mask", num: "06" },
];

export function Works() {
  return (
    <section id="works" className="relative bg-[#0a0a0a] text-white">
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">03</span>
            <span>Works · Motifs</span>
          </div>
          <span>—— Gallery</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92] tracking-[-0.018em]">
              MOTIFS
              <br />
              <span className="text-white/30">FROM</span>{" "}
              <span className="text-[#c8102e]">JAPAN.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:pt-6">
            <p className="text-white/60 text-sm leading-[1.85]">
              Pick a motif. Bring a memory. Take it home —
              <br />
              under your skin.
            </p>
            <p className="font-jp text-white/45 text-sm leading-[2.0] mt-4 tracking-[0.04em]">
              モチーフを選び、想い出を描き、肌に刻む。
            </p>
          </div>
        </div>
      </div>

      {/* gallery — staggered, varied heights for editorial rhythm */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pb-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-3 sm:gap-5">
          {WORKS.map((w, i) => {
            // varied column spans / vertical offsets for editorial layout
            const layout = [
              "col-span-7 lg:col-span-4",                 // 0
              "col-span-5 lg:col-span-3 lg:mt-24",        // 1
              "col-span-12 sm:col-span-7 lg:col-span-5",  // 2
              "col-span-6 lg:col-span-4 lg:mt-12",        // 3
              "col-span-6 lg:col-span-5",                 // 4
              "col-span-12 sm:col-span-12 lg:col-span-3 lg:mt-32", // 5
            ];
            return (
              <ScrollReveal
                key={w.num}
                delay={(i % 3) * 0.08}
                className={`group ${layout[i]}`}
              >
                <a href="#contact" className="block relative overflow-hidden bg-[#161616]">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={w.src}
                      alt={`${w.title} — ${w.motif} tattoo`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-100 transition-opacity duration-700" />
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-[#c8102e]/0 group-hover:bg-[#c8102e]/15 transition-colors duration-700" />
                  </div>
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between text-[10px] tracking-[0.28em] uppercase text-white/75">
                    <span>— {w.num}</span>
                    <span>{w.motif}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    <h3 className="display text-white text-3xl sm:text-4xl leading-none">
                      {w.title}
                    </h3>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-white/70 transition-transform duration-500 translate-x-0 group-hover:-translate-x-1">
                      View →
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="font-jp text-white/55 text-sm leading-[1.85] max-w-md">
            龍・桜・波・漢字・虎・般若 —
            <br />
            ご希望のモチーフは Instagram DM にて気軽にご相談ください。
          </p>
          <a
            href="https://www.instagram.com/osaka_walkin_tattoo_studio?igsh=MTJ6Mm5ydDJ1Z3ViYg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square text-white"
          >
            See more on Instagram
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
