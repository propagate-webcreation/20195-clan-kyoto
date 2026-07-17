"use client";

import { Check, Clock, Send } from "lucide-react";
import { ScrollReveal } from "../animation/ScrollReveal";
import { SITE_CONFIG } from "../../config/site.config";

const BENEFITS = [
  {
    num: "01",
    title: "集客はお任せ",
    body: "スタジオが集客・マーケティングを行うので、施術に集中できます。",
  },
  {
    num: "02",
    title: "売上の50%還元",
    body: "頑張った分はしっかり還元。高収入が目指せます。",
  },
  {
    num: "03",
    title: "自由シフト制",
    body: "1日〜何日でもOK! 自分のペースで働けます。",
  },
  {
    num: "04",
    title: "働きやすい環境",
    body: "おしゃれなスタジオで快適に施術ができます。",
  },
];

const REQUIREMENTS = [
  "タトゥーの技術に自信がある方",
  "お客様への接客・対応が得意な方",
  "清潔感があり、責任感を持てる方",
  "衛生管理・安全基準を守れる方",
];

export function Recruit() {
  return (
    <section
      id="recruit"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">08</span>
            <span>Artist Recruitment</span>
          </div>
          <span>—— Recruit</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-32">
        {/* Intro — Flow-style 7 / 5 */}
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
          <div className="col-span-12 lg:col-span-7 min-w-0">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-6">
              — タトゥーアーティスト募集
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
            <p className="font-jp text-white text-[18px] md:text-[26px] font-bold leading-snug tracking-[0.04em]">
              京都で働きませんか？
            </p>
            <div className="mt-5 sm:mt-6 border border-white/20 bg-black px-5 sm:px-6 py-3 sm:py-4 inline-block">
              <p className="font-jp text-white text-[16px] md:text-[20px] font-bold leading-snug tracking-[0.06em]">
                タトゥーアーティスト募集
              </p>
            </div>
            <p className="font-jp text-white/70 text-[13px] md:text-[16px] leading-relaxed mt-6 tracking-[0.04em] flex items-start gap-3">
              <Clock
                size={20}
                className="shrink-0 mt-[2px] text-[#c8102e]"
                strokeWidth={1.5}
                aria-hidden
              />
              <span>
                <span className="font-bold text-white">1日〜何日でもOK!</span>
                {" "}自由シフト制 / あなたのペースで働けます。
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
              <h3 className="font-jp text-white text-[18px] md:text-[26px] font-bold leading-snug">
                {item.title}
              </h3>
              <p className="font-jp text-white/60 text-[13px] md:text-[16px] leading-relaxed mt-4 flex-1">
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
            <h3 className="font-jp text-white text-[18px] md:text-[26px] font-bold leading-snug">
              こんな方を求めています！
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
                  <p className="font-jp text-white/75 text-[13px] md:text-[16px] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10 border border-white/20 bg-white/[0.03] px-5 sm:px-6 py-4 sm:py-5 inline-block">
              <p className="font-jp text-white text-[13px] md:text-[16px] font-bold leading-relaxed">
                経験不問 / 国籍不問
              </p>
              <p className="font-jp text-white/55 text-[10px] md:text-[14px] mt-1">
                （ビザサポート相談可能）
              </p>
            </div>
          </div>

          <ScrollReveal className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] mb-5">
                — Apply
              </p>
              <p className="font-jp text-white text-[16px] md:text-[20px] font-bold leading-snug">
                DMまたはInstagramメッセージで
                <br />
                お気軽にお問い合わせください！
              </p>
              <p className="font-jp text-white/55 text-[13px] md:text-[16px] leading-relaxed mt-6">
                一緒に京都から、タトゥーの文化を広げていきましょう！
              </p>
            </div>
            <div className="mt-10 sm:mt-12">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c8102e] text-white px-8 py-4 rounded-2xl text-[13px] md:text-[20px] font-bold hover:opacity-90 hover:shadow-md transition min-h-12"
              >
                <Send size={18} aria-hidden />
                Instagram DMで応募する
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
