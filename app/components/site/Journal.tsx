"use client";

import Image from "next/image";
import { ScrollReveal } from "../animation/ScrollReveal";

const POSTS = [
  {
    cat: "Culture",
    date: "Coming Soon",
    title: "The meaning of sakura in Japanese tattoo",
    excerpt:
      "Cherry blossoms are gone before you can hold them. That's exactly why they belong on skin.",
    img: "/images/journal-sakura.webp",
  },
  {
    cat: "Studio",
    date: "Coming Soon",
    title: "Inside our six booths in central Osaka",
    excerpt:
      "What it actually feels like to walk into the studio for the first time, with no Japanese.",
    img: "/images/journal-studio.webp",
  },
  {
    cat: "Travel",
    date: "Coming Soon",
    title: "Half a day in Osaka after your appointment",
    excerpt:
      "Where to eat, where to walk, and how to keep your fresh tattoo happy in the summer heat.",
    img: "/images/journal-osaka.webp",
  },
];

export function Journal() {
  return (
    <section
      id="journal"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">08</span>
            <span>Notes from the Studio</span>
          </div>
          <span>—— Journal</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-y-8 mb-14 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92] tracking-[-0.018em]">
              JOURNAL
              <span className="text-[#c8102e]">.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <p className="text-white/55 text-sm leading-[1.85]">
              Notes on Japanese tattoo culture, studio updates, and short
              guides for your trip to Osaka.
            </p>
            <p className="font-jp text-white/40 text-sm leading-[2.0] mt-3 tracking-[0.04em]">
              スタジオからの手記。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-12">
          {POSTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08} className="group">
              <a href="#contact" className="block">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#161616]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.28em] uppercase text-white/85">
                    <span>— 0{i + 1} / {p.cat}</span>
                    <span>{p.date}</span>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-white text-xl sm:text-2xl leading-[1.3] tracking-[-0.005em] font-medium group-hover:text-[#c8102e] transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-[1.7] mt-3">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.28em] uppercase text-white/65 group-hover:text-[#c8102e] transition-colors duration-500">
                    Read more
                    <span className="block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
