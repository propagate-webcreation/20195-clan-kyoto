"use client";

import { ScrollReveal } from "../animation/ScrollReveal";

const FLOW_DROPIN = [
  { num: "01", t: "Walk in", d: "Open every day, 11:00 — 24:00. Just step into the studio. No appointment." },
  { num: "02", t: "Pick a motif", d: "Browse our portfolio with the artist. Sakura, dragon, kanji, or your own idea." },
  { num: "03", t: "Get inked", d: "Comfortable booth, English explanation, sterile setup. Short or full-day work." },
  { num: "04", t: "Polaroid + tour", d: "Take a polaroid, get tour suggestions, and walk back into Osaka with a new story." },
];

const FLOW_PRIOR = [
  { num: "01", t: "Message us", d: "Reach out via WhatsApp or Instagram DM with a reference image or your idea." },
  { num: "02", t: "Quick chat", d: "We confirm motif, size and a rough time-slot. Reply in English or Japanese." },
  { num: "03", t: "Walk in on the day", d: "Arrive at the studio at the agreed time — your booth is ready." },
  { num: "04", t: "Same finish", d: "Polaroid, tour suggestions and after-care, just like our walk-in flow." },
];

export function Flow() {
  return (
    <section
      id="flow"
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55">
          <div className="flex items-center gap-4">
            <span className="tabular text-[#c8102e]">07</span>
            <span>Two Ways In</span>
          </div>
          <span>—— Flow</span>
        </div>
        <div className="hairline" />
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display text-[clamp(2.6rem,8vw,8rem)] leading-[0.92] tracking-[-0.018em]">
              TWO DOORS,
              <br />
              <span className="text-white/30">ONE</span>{" "}
              <span className="text-[#c8102e]">STUDIO.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <p className="text-white/65 text-sm sm:text-base leading-[1.85]">
              Walk straight in, or message us first if you'd rather plan. Both
              paths land in the same chair, with the same artist and the same
              polaroid at the end.
            </p>
            <p className="font-jp text-white/45 text-sm leading-[2.0] mt-3 tracking-[0.04em]">
              飛び込みも、事前相談も、結末は同じ —
              <br />
              一枚のチェキで終わる、忘れられない一日。
            </p>
          </div>
        </div>

        {/* two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 mt-16 sm:mt-20 border-y border-white/10">
          {/* Walk-in column */}
          <div className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16">
            <div className="flex items-baseline justify-between mb-8">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] tabular">
                — A / Walk-in
              </p>
              <p className="font-jp text-white/45 text-xs tracking-[0.06em]">
                飛び込み来店
              </p>
            </div>
            <h3 className="display text-4xl sm:text-5xl leading-[0.95] mb-10">
              Just show up.
            </h3>
            <ol className="space-y-0">
              {FLOW_DROPIN.map((s, i) => (
                <li
                  key={s.num}
                  className={`grid grid-cols-12 gap-3 items-baseline border-b border-white/10 py-5 ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="tabular text-[10px] sm:text-xs tracking-[0.16em] text-white/45 col-span-2">
                    {s.num}
                  </span>
                  <div className="col-span-10">
                    <h4 className="text-white text-base sm:text-lg font-medium tracking-[-0.005em]">
                      {s.t}
                    </h4>
                    <p className="text-white/55 text-sm leading-[1.7] mt-2">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Prior chat column */}
          <div className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16">
            <div className="flex items-baseline justify-between mb-8">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c8102e] tabular">
                — B / WhatsApp
              </p>
              <p className="font-jp text-white/45 text-xs tracking-[0.06em]">
                事前相談あり
              </p>
            </div>
            <h3 className="display text-4xl sm:text-5xl leading-[0.95] mb-10">
              Message first.
            </h3>
            <ol className="space-y-0">
              {FLOW_PRIOR.map((s, i) => (
                <li
                  key={s.num}
                  className={`grid grid-cols-12 gap-3 items-baseline border-b border-white/10 py-5 ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="tabular text-[10px] sm:text-xs tracking-[0.16em] text-white/45 col-span-2">
                    {s.num}
                  </span>
                  <div className="col-span-10">
                    <h4 className="text-white text-base sm:text-lg font-medium tracking-[-0.005em]">
                      {s.t}
                    </h4>
                    <p className="text-white/55 text-sm leading-[1.7] mt-2">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ScrollReveal>
          <p className="text-white/45 text-xs sm:text-sm leading-[1.75] mt-10 max-w-2xl">
            <span className="text-[#c8102e]">●</span> Note · We do not tattoo
            anyone under 18. Please come well-rested, hydrated, and avoid heavy
            alcohol the night before.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
