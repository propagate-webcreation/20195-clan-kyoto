"use client";

import { Check, Clock } from "lucide-react";
import { ScrollReveal } from "../animation/ScrollReveal";
import { SITE_CONFIG } from "../../config/site.config";
import { SocialIcon } from "../shared/SocialIcon";

const BENEFITS = [
  {
    num: "01",
    title: "Guests come to the studio",
    body: "The studio handles guests and promotion, so you can focus on tattooing.",
  },
  {
    num: "02",
    title: "50% of sales",
    body: "You keep 50% of sales.",
  },
  {
    num: "03",
    title: "Choose your days",
    body: "One day or many. Work at your own pace.",
  },
  {
    num: "04",
    title: "A studio built for work",
    body: "Tattoo in a studio set up for the work.",
  },
];

const REQUIREMENTS = [
  "Confident in your tattooing",
  "Comfortable talking with guests",
  "Clean and reliable",
  "Willing to follow hygiene and safety standards",
];

export function Recruit() {
  return (
    <section
      id="recruit"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between gap-3 min-w-0 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4 min-w-0">
            <span className="tabular text-[#c8102e] shrink-0">03</span>
            <span className="min-w-0">Artist Recruitment</span>
          </div>
          <span className="shrink-0 hidden sm:inline">—— Recruit</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-32">
        {/* Intro — Flow-style 7 / 5 */}
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
          <div className="col-span-12 lg:col-span-7 min-w-0">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-6">
              — Tattoo artists wanted
            </p>
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92] tracking-[-0.018em]">
              ARTIST
              <br />
              <span className="text-white/30">RECRUIT</span>
              <br />
              <span className="text-[#c8102e]">IN KYOTO.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6 min-w-0">
            <p className="text-white text-[18px] font-bold leading-snug tracking-[0.04em] md:text-[26px]">
              Work in Kyoto.
            </p>
            <div className="mt-5 sm:mt-6 border border-white/20 bg-black px-5 sm:px-6 py-3 sm:py-4 inline-block">
              <p className="text-white text-[16px] font-bold leading-snug tracking-[0.06em] md:text-[20px]">
                Tattoo artists wanted
              </p>
            </div>
            <p className="text-white/70 text-[13px] leading-relaxed mt-6 tracking-[0.04em] flex items-start gap-3 md:text-[16px]">
              <Clock
                size={20}
                className="shrink-0 mt-[2px] text-[#c8102e]"
                strokeWidth={1.5}
                aria-hidden
              />
              <span>
                <span className="font-bold text-white">One day or many.</span>{" "}
                Choose your days and work at your own pace.
              </span>
            </p>
          </div>
        </div>

        {/* Benefits — 2×2 grid like Flow columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mt-16 sm:mt-20 border-y border-white/10">
          {BENEFITS.map((item, i) => (
            <ScrollReveal
              key={item.num}
              delay={i * 0.05}
              className="bg-[#0a0a0a] p-8 sm:p-10 lg:p-12 min-h-[200px] flex flex-col"
            >
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] tabular mb-5">
                — {item.num}
              </p>
              <h3 className="text-white text-[18px] font-bold leading-snug md:text-[26px]">
                {item.title}
              </h3>
              <p className="text-white/60 text-[13px] leading-relaxed mt-4 flex-1 md:text-[16px]">
                {item.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Requirements + CTA — balanced 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 mt-px border-b border-white/10">
          <div className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-5">
              — Who we want
            </p>
            <h3 className="text-white text-[18px] font-bold leading-snug md:text-[26px]">
              Who we are looking for
            </h3>
            <ul className="mt-8 sm:mt-10 space-y-4">
              {REQUIREMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 min-w-0">
                  <Check
                    size={18}
                    className="shrink-0 mt-[3px] text-[#c8102e]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <p className="text-white/75 text-[13px] leading-relaxed md:text-[16px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10 border border-white/20 bg-white/[0.03] px-5 sm:px-6 py-4 sm:py-5 inline-block">
              <p className="text-white text-[13px] font-bold leading-relaxed md:text-[16px]">
                Experience and nationality are open
              </p>
              <p className="text-white/55 text-[10px] mt-1 md:text-[14px]">
                Visa support can be discussed
              </p>
            </div>
          </div>

          <ScrollReveal className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-5">
                — Apply
              </p>
              <p className="text-white text-[16px] font-bold leading-snug md:text-[20px]">
                Send a message on Instagram.
              </p>
              <p className="text-white/55 text-[13px] leading-relaxed mt-6 md:text-[16px]">
                Tattoo with us from Kyoto.
              </p>
            </div>
            <div className="mt-10 sm:mt-12">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-[#c8102e] px-8 py-4 text-[13px] font-bold text-white hover:opacity-90 md:text-[20px]"
              >
                <SocialIcon channel="Instagram" />
                Apply on Instagram
              </a>
              <p className="text-white/45 text-[10px] md:text-[14px] tracking-[0.12em] mt-4">
                {SITE_CONFIG.instagramHandle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
