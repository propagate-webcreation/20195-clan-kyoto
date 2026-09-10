"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { STUDIOS, MOTIFS, type StudioId } from "../../config/studios";
import { SectionRail, SectionHeading } from "../shared/Editorial";
import { ImageDialog } from "../shared/ImageDialog";

const WORKS = [
  {
    src: "/images/work-dragon.webp",
    title: "Ryū",
    motif: "Dragon / 龍",
    number: "01",
    studios: ["osaka", "kyoto"],
    description:
      "龍の流れを、肌の曲線に合わせて。大きさや部位に合わせて構図をご相談いただけます。",
  },
  {
    src: "/images/work-sakura.webp",
    title: "Sakura",
    motif: "Sakura / 桜",
    number: "02",
    studios: ["osaka", "kyoto"],
    description:
      "一輪の桜から広がる構図まで。繊細な線と余白で、日本の季節を肌に残します。",
  },
  {
    src: "/images/work-wave.webp",
    title: "Nami",
    motif: "Wave / 波",
    number: "03",
    studios: ["osaka", "kyoto"],
    description:
      "波のうねりと墨の濃淡。身体のラインに合わせた和のモチーフです。",
  },
  {
    src: "/images/work-kanji.webp",
    title: "Kanji",
    motif: "Kanji / 漢字",
    number: "04",
    studios: ["osaka", "kyoto"],
    description:
      "大切な言葉を、一文字に。意味と書体を相談しながらデザインを決めていきます。",
  },
  {
    src: "/images/work-tiger.webp",
    title: "Tora",
    motif: "Tiger / 虎",
    number: "05",
    studios: ["osaka", "kyoto"],
    description:
      "力強い虎の表情と動きを描くモチーフ。ご希望のサイズと雰囲気をお聞かせください。",
  },
  {
    src: "/images/work-mask.webp",
    title: "Hannya",
    motif: "Hannya / 般若",
    number: "06",
    studios: ["osaka", "kyoto"],
    description:
      "日本の伝統的な面をタトゥーに。繊細な表情を、陰影と線で表現するデザインです。",
  },
  {
    src: "/images/kobe-sakura.webp",
    title: "Sakura",
    motif: "Sakura / 桜",
    number: "07",
    studios: ["kobe"],
    description:
      "散りぎわの一片に、旅の記憶を重ねる。余白を生かして、日本の季節を肌に残します。",
  },
  {
    src: "/images/kobe-dragon.webp",
    title: "Ryū",
    motif: "Dragon / 龍",
    number: "08",
    studios: ["kobe"],
    description:
      "鱗の流れと曲線の重なり。身体のラインに合わせた、力強い構図へ。",
  },
  {
    src: "/images/kobe-wave.webp",
    title: "Nami",
    motif: "Wave / 波",
    number: "09",
    studios: ["kobe"],
    description:
      "墨の濃淡で距離と深さを描く。神戸の港から続く、波のモチーフです。",
  },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<"all" | StudioId>("all");
  const [selected, setSelected] = useState<(typeof WORKS)[number] | null>(null);
  const works = compact
    ? [WORKS[0], WORKS[6], WORKS[2]]
    : WORKS.filter((w) => filter === "all" || w.studios.includes(filter));
  const layout = [
    "col-span-7 lg:col-span-4",
    "col-span-5 lg:col-span-3 lg:mt-24",
    "col-span-12 sm:col-span-7 lg:col-span-5",
    "col-span-6 lg:col-span-4 lg:mt-12",
    "col-span-6 lg:col-span-5",
    "col-span-12 lg:col-span-3 lg:mt-24",
  ];
  return (
    <section id="works">
      <SectionRail
        number={compact ? "03" : "01"}
        title="Works · Motifs"
        label="Gallery"
      />
      <div className="site-width py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 mb-12 items-end">
          <SectionHeading>
            MOTIFS
            <br />
            <span className="text-white/35">FROM</span>{" "}
            <span className="text-[#c8102e]">JAPAN.</span>
          </SectionHeading>
          <div>
            <p className="text-white/65 text-base leading-[1.9]">
              モチーフから、あなたの一筆を。桜・龍・波・漢字など、日本のモチーフをご紹介します。作品を選ぶと、同じモチーフで相談できます。
            </p>
            <p className="text-white/50 text-sm leading-[1.85] mt-4">
              Explore Japanese motifs and find your inspiration. Each piece is a
              starting point for your own design. Ask each studio for its latest
              work and artist availability.
            </p>
          </div>
        </div>
        {!compact && (
          <div
            className="flex flex-wrap border-y border-white/15 mb-10"
            role="group"
            aria-label="店舗でモチーフを絞り込む"
          >
            {[{ id: "all", city: "ALL", jp: "すべて" }, ...STUDIOS].map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={filter === s.id}
                onClick={() => setFilter(s.id as "all" | StudioId)}
                className={`px-5 sm:px-8 py-5 text-xs tracking-[0.14em] border-b-2 transition-colors ${filter === s.id ? "border-[#c8102e] text-white bg-white/5" : "border-transparent text-white/50 hover:text-white"}`}
              >
                {s.city} <span className="ml-2">{s.jp}</span>
              </button>
            ))}
          </div>
        )}
        {!compact && (
          <p className="eyebrow text-white/50 mb-6" role="status">
            {works.length} DESIGNS /{" "}
            {filter === "all" ? "ALL STUDIOS" : filter.toUpperCase()}
          </p>
        )}
        <div className="grid grid-cols-12 gap-3 sm:gap-5">
          {works.map((w, i) => (
            <div key={w.number} className={layout[i % layout.length]}>
              <button
                type="button"
                onClick={() => setSelected(w)}
                aria-label={`${w.title} ${w.number}のデザインを見る`}
                className="group block w-full text-left relative bg-[#161616] overflow-hidden"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={w.src}
                    alt={`${w.motif} — ${w.studios.map((id) => getCity(id)).join("・")}のモチーフ`}
                    fill
                    sizes="(max-width: 640px) 70vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                </div>
                <div className="absolute inset-x-3 top-4 flex justify-between gap-2 text-[10px] tracking-[0.15em] uppercase">
                  <span>— {w.number}</span>
                  <span>{w.motif.split(" / ")[0]}</span>
                </div>
                <div className="absolute inset-x-4 bottom-5">
                  <p className="text-[10px] text-white/65 tracking-[0.15em] mb-2">
                    {w.studios.map((id) => id.toUpperCase()).join(" / ")}
                  </p>
                  <div className="flex justify-between items-end gap-3">
                    <h3 className="display text-3xl sm:text-4xl">{w.title}</h3>
                    <span className="text-[10px] tracking-[0.15em]">
                      VIEW ↗
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-white/15 pt-7 flex flex-col sm:flex-row justify-between gap-6">
          <p className="text-sm text-white/55 leading-[1.9]">
            サイズ・部位・担当彫師によって仕上がりは異なります。
            <br />
            最新の施術事例・担当者は各店へお問い合わせください。
          </p>
          <Link
            className="btn-square self-start"
            href={compact ? "/works" : "#artists"}
          >
            {compact
              ? "Works & Artists / 作品・彫師"
              : "Meet the artists / 彫師について"}{" "}
            ↗
          </Link>
        </div>
      </div>
      <ImageDialog
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.title}のデザイン` : "デザイン"}
      >
        {selected && (
          <div className="grid md:grid-cols-2 gap-7 pt-8">
            <div className="relative aspect-[3/4] max-h-[65vh]">
              <Image
                src={selected.src}
                alt={selected.motif}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center py-4">
              <p className="eyebrow text-[#c8102e] mb-5">
                {selected.studios[0] === "kobe"
                  ? "Motif inspiration"
                  : "Design"}{" "}
                / {selected.number}
              </p>
              <h2 className="display text-5xl">{selected.title}</h2>
              <p className="mt-5 text-white/65 text-sm leading-[2]">
                {selected.description}
              </p>
              <p className="eyebrow mt-6 text-white/50">
                Studio /{" "}
                {selected.studios.map((id) => id.toUpperCase()).join(" · ")}
              </p>
              <p className="text-sm leading-[1.9] text-white/60 mt-5">
                このモチーフをもとに、ご希望の店舗へご相談ください。サイズと施術部位は相談時に決められます。
              </p>
              <Link
                onClick={() => setSelected(null)}
                href={`/contact?motif=${encodeURIComponent(MOTIFS.find((m) => m === selected.motif) ?? "")}${selected.studios.length === 1 ? `&studio=${selected.studios[0]}` : filter !== "all" ? `&studio=${filter}` : ""}`}
                className="btn-square btn-blood mt-8 self-start"
              >
                このモチーフで相談する ↗
              </Link>
            </div>
          </div>
        )}
      </ImageDialog>
    </section>
  );
}

function getCity(id: string) {
  return STUDIOS.find((s) => s.id === id)?.jp ?? id;
}
