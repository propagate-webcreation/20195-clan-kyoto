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
    motif: "Dragon",
    number: "01",
    studios: ["osaka", "kyoto"],
    description:
      "A dragon drawn along the curve of the skin. Size and placement are decided with the studio.",
  },
  {
    src: "/images/work-sakura.webp",
    title: "Sakura",
    motif: "Sakura",
    number: "02",
    studios: ["osaka", "kyoto"],
    description:
      "From a single blossom to a wider composition. Fine line and open space, kept on the skin.",
  },
  {
    src: "/images/work-wave.webp",
    title: "Nami",
    motif: "Wave",
    number: "03",
    studios: ["osaka", "kyoto"],
    description:
      "The swell of a wave in black and grey, placed along the line of the body.",
  },
  {
    src: "/images/work-kanji.webp",
    title: "Kanji",
    motif: "Kanji",
    number: "04",
    studios: ["osaka", "kyoto"],
    description:
      "A word you want to keep, set in one character. Meaning and lettering are decided together.",
  },
  {
    src: "/images/work-tiger.webp",
    title: "Tora",
    motif: "Tiger",
    number: "05",
    studios: ["osaka", "kyoto"],
    description:
      "A tiger in motion. Tell the studio the size and the mood you want.",
  },
  {
    src: "/images/work-mask.webp",
    title: "Hannya",
    motif: "Hannya",
    number: "06",
    studios: ["osaka", "kyoto"],
    description:
      "A traditional Japanese mask, drawn with line and shadow.",
  },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<"all" | StudioId>("all");
  const [selected, setSelected] = useState<(typeof WORKS)[number] | null>(null);
  const works = compact
    ? [WORKS[0], WORKS[1], WORKS[2]]
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
              Explore Japanese motifs and find a starting point for your own
              design. Choose a piece to ask about the same motif. Ask each
              studio for its latest work and who is working that day.
            </p>
          </div>
        </div>
        {!compact && (
          <div
            className="flex flex-wrap border-y border-white/15 mb-10"
            role="group"
            aria-label="Filter motifs by studio"
          >
            {[{ id: "all", city: "ALL" }, ...STUDIOS].map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={filter === s.id}
                onClick={() => setFilter(s.id as "all" | StudioId)}
                className={`px-5 sm:px-8 py-5 text-xs tracking-[0.14em] border-b-2 transition-colors ${filter === s.id ? "border-[#c8102e] text-white bg-white/5" : "border-transparent text-white/50 hover:text-white"}`}
              >
                {s.city}
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
                aria-label={`View the ${w.title} design`}
                className="group block w-full text-left relative bg-[#161616] overflow-hidden"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={w.src}
                    alt={`${w.motif} motif for ${w.studios.map((id) => getCity(id)).join(" and ")}`}
                    fill
                    sizes="(max-width: 640px) 70vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                </div>
                <div className="absolute inset-x-3 top-4 flex justify-between gap-2 text-[10px] tracking-[0.15em] uppercase">
                  <span>— {w.number}</span>
                  <span>{w.motif}</span>
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
            The result depends on size, placement and the artist.
            <br />
            Ask the studio for recent work and who is available.
          </p>
          <Link
            className="btn-square self-start"
            href="#artists"
          >
            {compact ? "Works and artists" : "Meet the artists"}{" "}
            ↗
          </Link>
        </div>
      </div>
      <ImageDialog
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.title} design` : "Design"}
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
                Design{" "}
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
                Ask your studio about this motif. Size and placement are decided in the consultation.
              </p>
              <Link
                onClick={() => setSelected(null)}
                href={`/?motif=${encodeURIComponent(MOTIFS.find((m) => m === selected.motif) ?? "")}${selected.studios.length === 1 ? `&studio=${selected.studios[0]}` : filter !== "all" ? `&studio=${filter}` : ""}#contact`}
                className="btn-square btn-blood mt-8 self-start"
              >
                Ask about this motif ↗
              </Link>
            </div>
          </div>
        )}
      </ImageDialog>
    </section>
  );
}

function getCity(id: string) {
  return STUDIOS.find((s) => s.id === id)?.city ?? id;
}
