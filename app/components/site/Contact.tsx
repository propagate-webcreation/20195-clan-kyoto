"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";
import { TextReveal } from "../animation/TextReveal";

const INSTAGRAM =
  "https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">09</span>
            <span>Walk in or Message</span>
          </div>
          <span>—— Contact</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-16 sm:pt-32 pb-10 sm:pb-16">
        <p className="text-[10px] sm:text-xs tracking-[0.32em] uppercase text-[#c8102e] mb-5 sm:mb-10">
          — Open every day · 11:00 — 21:00
        </p>
        <h2 className="display text-white text-[clamp(2.8rem,12vw,12rem)] leading-[0.84] tracking-[-0.02em]">
          <TextReveal as="span" mode="word" staggerDelay={0.06} className="block">
            {"COME GET"}
          </TextReveal>
          <TextReveal
            as="span"
            mode="word"
            staggerDelay={0.06}
            delay={0.25}
            className="block"
          >
            {"INKED IN KYOTO."}
          </TextReveal>
        </h2>
        <p className="font-jp text-white/65 text-sm sm:text-lg leading-[1.95] mt-6 sm:mt-12 tracking-[0.04em] max-w-xl">
          飛び込み歓迎・予約不要・年中無休 11:00〜21:00。
          <br />
          ご不安な方は Instagram DM で事前にご相談ください。
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          <div className="bg-[#0a0a0a] p-4 sm:p-10">
            <p className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/45 mb-2 sm:mb-3">
              Hours
            </p>
            <p className="text-white text-sm sm:text-xl tracking-[-0.005em] tabular leading-tight">
              11:00<span className="hidden sm:inline"> — 21:00</span>
              <span className="block sm:hidden text-[11px] mt-0.5">— 21:00</span>
            </p>
            <p className="hidden sm:block text-white/55 text-sm mt-1">Open every day · 年中無休</p>
          </div>
          <div className="bg-[#0a0a0a] p-4 sm:p-10">
            <p className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/45 mb-2 sm:mb-3">
              Location
            </p>
            <p className="text-white text-sm sm:text-xl tracking-[-0.005em]">Kyoto, JP</p>
            <p className="hidden sm:block text-white/55 text-sm mt-1">
              詳細住所はDMにてご案内
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-4 sm:p-10">
            <p className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/45 mb-2 sm:mb-3">
              Lang.
            </p>
            <p className="text-white text-sm sm:text-xl tracking-[-0.005em]">JP / EN</p>
            <p className="hidden sm:block text-white/55 text-sm mt-1">日本語・English</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-px pb-12 sm:pb-24">
        <ScrollReveal className="bg-[#c8102e] text-white">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 sm:p-12 lg:p-16 group min-h-[220px] sm:min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/85 mb-5 sm:mb-6">
                — Portfolio · DM · Pre-arrival chat
              </p>
              <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                <span className="relative shrink-0 w-8 h-8 sm:w-12 sm:h-12 overflow-hidden">
                  <Image
                    src="/images/2227.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 32px, 48px"
                    className="object-cover scale-[1.45]"
                    aria-hidden
                  />
                </span>
                <h3 className="display text-4xl sm:text-7xl leading-[0.95] min-w-0">
                  Instagram
                </h3>
              </div>
              <p className="font-jp text-white/85 text-sm sm:text-base mt-4 sm:mt-5 tracking-[0.05em] leading-[1.85]">
                作品事例・最新情報・事前相談はInstagram DMへ。
                <br />
                英語・日本語どちらでもOK。
              </p>
            </div>
            <div className="mt-8 sm:mt-10 flex items-center justify-between gap-4 min-w-0">
              <span className="text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase min-w-0">
                @kyoto_walkin_tattoo_studio
              </span>
              <span className="block shrink-0 transition-transform duration-500 group-hover:translate-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
