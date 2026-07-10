"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";
import { TextReveal } from "../animation/TextReveal";

export function Concept() {
  return (
    <section
      id="concept"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* section header rail */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">01</span>
            <span>The Principles of Ink</span>
          </div>
          <span>—— Concept</span>
        </div>
        <div className="hairline" />
      </div>

      {/* hero text band */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-16 sm:pb-24">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-2 lg:pt-3">
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/50">
              [ Concept ]
            </p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="display text-[clamp(2.4rem,7vw,7rem)] leading-[0.92] tracking-[-0.015em]">
              <TextReveal as="span" mode="word" staggerDelay={0.05} className="block">
                {"INK THAT REMEMBERS"}
              </TextReveal>
              <TextReveal
                as="span"
                mode="word"
                staggerDelay={0.05}
                delay={0.3}
                className="block text-white/40"
              >
                {"WHERE YOU'VE BEEN."}
              </TextReveal>
            </h2>
          </div>
        </div>
      </div>

      {/* image with overlay quote — like NHA "Landscape First" */}
      <div className="relative w-full">
        <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[420px]">
          <Image
            src="/images/journal-sakura.webp"
            alt="京都の桜と和の情景"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

          {/* overlay copy */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <ScrollReveal delay={0.1}>
              <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[#c8102e] mb-5">
                — 01 / Tradition
              </p>
              <h3 className="display text-white text-[clamp(2.2rem,7vw,6rem)] leading-[0.92]">
                Sakura. Dragon.
                <br />
                Wave. Kanji.
              </h3>
              <p className="font-jp text-white/85 text-sm sm:text-base mt-5 sm:mt-7 tracking-[0.05em] leading-[1.9] max-w-md mx-auto">
                桜・龍・波・漢字 —
                <br className="sm:hidden" />
                日本のモチーフは、世界中の旅人に
                <br />
                それぞれの意味と物語を運ぶ。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* dual-language paragraph block */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-20 sm:py-32 grid grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-1">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] tabular">02</p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ScrollReveal>
            <p className="text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.45] tracking-[-0.005em] font-light">
              We started with a simple wish — to make a special experience in
              Japan feel easy and approachable. For travellers, we wanted a
              place you can step into on impulse, leave with a memory under
              your skin, and understand the culture behind the design — not
              just the ink.
            </p>
          </ScrollReveal>
        </div>
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:pt-6">
          <ScrollReveal delay={0.15}>
            <p className="font-jp text-white/65 text-sm sm:text-base leading-[2.0] tracking-[0.04em]">
              当スタジオは、日本での特別な体験をより気軽に提供したいという想いからスタートしました。観光で訪れる海外のお客様にとって、「その場で体験できる」「思い出として残せる」場所を作りたいと考えています。タトゥーをただ彫るだけでなく、日本の文化やデザインの意味も含めて体験できる空間を提供し、旅の一部として記憶に残るサービスを目指しています。
            </p>
            <div className="mt-8 flex items-center gap-4 text-[11px] tracking-[0.28em] uppercase text-white/50">
              <span className="block w-8 h-px bg-white/40" />
              <span>KYOTO WALK-IN TATTOO STUDIO JAPAN</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* sumi-ink texture closing band — Plate 03 */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-16 sm:py-24 grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-5 tabular">
                — 03 / Plate · Sumi & Vermilion
              </p>
              <h3 className="display text-white text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[0.95] tracking-[-0.012em]">
                Black ink. <br />Red mark. <br />
                <span className="text-white/35">A signature of Japan.</span>
              </h3>
              <p className="font-jp text-white/55 text-sm leading-[2.0] mt-7 tracking-[0.04em] max-w-md">
                墨と朱 — 千年続く日本のしるし。
                <br />
                その美意識を、現代のタトゥーへ。
              </p>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ScrollReveal delay={0.12}>
              <div className="relative w-full aspect-[21/9] overflow-hidden bg-black">
                <Image
                  src="/images/texture-sumi.webp"
                  alt="Sumi ink brushstroke and vermilion red splatter on washi paper"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-4 left-5 text-[10px] tracking-[0.28em] uppercase text-white/80">
                  — Pl. 03 / Sumi · Vermilion
                </div>
                <div className="absolute bottom-4 right-5 text-[10px] tracking-[0.28em] uppercase text-white/65 tabular">
                  Edo · Now
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
