"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";
import { Parallax } from "../animation/Parallax";

const STATS = [
  { num: "6", label: "BOOTHS", sub: "Private rooms" },
  { num: "10h", label: "DAILY", sub: "11:00 — 21:00" },
  { num: "365", label: "DAYS OPEN", sub: "Year-round" },
  { num: "EN", label: "LANGUAGE", sub: "English spoken" },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">03</span>
            <span>Inside the Studio</span>
          </div>
          <span>—— Studio</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92] tracking-[-0.018em]">
              PRIVATE BOOTHS,
              <br />
              <span className="text-white/30">ONE</span>{" "}
              <span className="text-[#c8102e]">CRAFT.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <p className="font-jp text-white/70 text-base leading-[1.95] tracking-[0.04em]">
              京都に構えるウォークイン対応のタトゥースタジオ。
              <br />
              6つのブースを完備し、選別された日本人彫師が毎日出勤。
              <br className="hidden sm:block" />
              短時間の小さな一筆から、
              <br className="hidden sm:block" />
              一日かけて仕上げる和柄まで。
            </p>
            <p className="text-white/50 text-sm mt-4 leading-[1.75]">
              A walk-in tattoo studio in Kyoto. Six private booths with
              selected Japanese artists on duty every day — from quick
              fine-line pieces to full-day traditional irezumi work.
            </p>
          </div>
        </div>
      </div>

      {/* Big editorial image with parallax */}
      <div className="mt-16 sm:mt-20 relative w-full">
        <div className="relative w-full h-[70vh] sm:h-[90vh] min-h-[480px] overflow-hidden">
          <Parallax speed={0.18} className="absolute inset-0">
            <div className="relative h-[120%] w-full -translate-y-[10%]">
              <Image
                src="/images/journal-studio.webp"
                alt="プライベートブースと温かい照明のタトゥースタジオ内観"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

          <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none px-6">
            <div className="relative w-[min(58vw,240px)] sm:w-[min(32vw,300px)] aspect-square">
              <Image
                src="/1783674409896_622171488207765896.jpg"
                alt="KYOTO Walk-in Tattoo Studio Japan ロゴ"
                fill
                sizes="(max-width: 640px) 58vw, 300px"
                className="object-contain -rotate-90"
              />
            </div>
          </div>

          {/* corner caption */}
          <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-10 right-5 sm:right-10 flex flex-wrap items-end justify-between gap-6 z-10">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/70">
                — Fig. 01 / Studio Floor, Kyoto
              </p>
              <p className="display text-white text-3xl sm:text-5xl leading-[1] mt-2">
                Light · Ink
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-jp text-white/80 text-sm tracking-[0.1em] sm:text-right">
                スポット照明のなかで。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* stats row — editorial 8px grid, full-word labels */}
      <div className="border-t border-b border-white/10 mt-0">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="py-12 sm:py-16 px-5 sm:px-8 flex flex-col"
            >
              {/* index marker */}
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] tabular mb-6">
                — Fact
              </p>
              {/* big number */}
              <p className="display tabular text-[clamp(2.75rem,5.2vw,4.75rem)] leading-[0.95] text-white">
                {s.num}
              </p>
              {/* hairline rule on 8px grid */}
              <span className="block w-8 h-px bg-white/30 mt-6 mb-4" />
              {/* full-word uppercase label */}
              <p className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-white font-medium leading-[1.2]">
                {s.label}
              </p>
              {/* whisper sub */}
              <p className="text-[11px] tracking-[0.04em] text-white/45 mt-2 leading-[1.4]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Three editorial image strip */}
      <div className="grid grid-cols-12 gap-px bg-white/10">
        <div className="col-span-12 sm:col-span-7 bg-[#0a0a0a]">
          <div className="relative w-full aspect-[7/5] overflow-hidden">
            <Image
              src="/images/artist-hands.webp"
              alt="Artist hands at workstation"
              fill
              sizes="(max-width: 640px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.28em] uppercase text-white/80">
              — 02 / The Hands
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-5 bg-[#0a0a0a]">
          <div className="relative w-full aspect-[5/5] sm:aspect-[5/7] overflow-hidden">
            <Image
              src="/images/artist-portrait.webp"
              alt="Artist at work in profile"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.28em] uppercase text-white/80">
              — 03 / The Maker
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
