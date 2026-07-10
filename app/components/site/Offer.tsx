"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";

export function Offer() {
  return (
    <section
      id="offer"
      className="relative bg-[#f5f5f3] text-[#0a0a0a] overflow-hidden"
    >
      <div className="border-t border-black/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-black/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">05</span>
            <span>The Souvenir</span>
          </div>
          <span>—— Offer</span>
        </div>
        <div className="h-px bg-black/15" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-32">
        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          {/* heading */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-6">
              — Tattoo × Japan × Travel
            </p>
            <h2 className="display text-[clamp(2.6rem,7.5vw,7.5rem)] leading-[0.92] tracking-[-0.018em]">
              MORE THAN
              <br />
              <span className="text-black/40">A</span> TATTOO
              <span className="text-[#c8102e]">.</span>
            </h2>
            <p className="font-jp text-black/65 text-sm sm:text-base leading-[2.0] mt-8 tracking-[0.04em] max-w-md">
              彫るだけじゃない。
              <br />
              日本のタトゥーの背景や意味も学べる体験を。
              <br />
              施術後のチェキ・写真のプレゼントに加え、
              <br />
              現地ガイドや提携企業との連携で
              <br />
              観光ツアーのご紹介も可能です。
              <br />
              <span className="text-black/45 text-sm">
                Not just ink — learn the culture behind the design.
                <br />
                A polaroid in your hand. A guide for your journey.
                <br />
                Tattoo + Japan + travel, all at once.
              </span>
            </p>
          </div>

          {/* big image */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] bg-[#161616] overflow-hidden">
              <Image
                src="/images/polaroid-traveler-kyoto-soft.webp"
                alt="淡いトーンでチェキを手にした日本人女性のタトゥー旅行者"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-5 left-5 text-[10px] tracking-[0.28em] uppercase text-white/85">
                — Fig. 02 / Polaroid Souvenir
              </div>
              <div className="absolute bottom-5 right-5 text-[10px] tracking-[0.28em] uppercase text-white/85 text-right">
                Kyoto · Japan
              </div>
            </div>
          </div>

          {/* three benefits */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-black/15 mt-10 sm:mt-16">
            {[
              {
                tag: "01 / Learn",
                title: "Culture & Meaning",
                jp: "背景や意味も学べる体験",
                body:
                  "We share the story behind Japanese motifs — not just the design on skin, but the culture and meaning travellers remember.",
              },
              {
                tag: "02 / Polaroid",
                title: "Polaroid Gift",
                jp: "施術後のチェキ・写真プレゼント",
                body:
                  "Every guest leaves with a fresh polaroid or photo of their new tattoo — a real, tangible souvenir of your time in Japan.",
              },
            ].map((b) => (
              <ScrollReveal
                key={b.tag}
                className="bg-[#f5f5f3] p-8 sm:p-10 flex flex-col gap-4 min-h-[260px]"
              >
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e]">
                  — {b.tag}
                </p>
                <h3 className="display text-3xl sm:text-4xl leading-[0.95] mt-2">
                  {b.title}
                </h3>
                <p className="font-jp text-black/55 text-sm tracking-[0.05em]">
                  {b.jp}
                </p>
                <p className="text-black/70 text-sm leading-[1.75] mt-auto">
                  {b.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
