"use client";

const ITEMS = [
  "WALK-IN WELCOME",
  "OPEN EVERY DAY",
  "11:00 — 21:00",
  "PRIVATE BOOTHS",
  "JAPANESE ARTISTS",
  "ENGLISH OK",
  "CARD & E-PAY",
  "POLAROID GIFT",
];

export function Marquee() {
  // duplicate to make seamless loop
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section
      aria-hidden
      className="relative bg-[#c8102e] text-white overflow-hidden border-y border-[#c8102e]"
    >
      <div className="marquee-track flex whitespace-nowrap py-4 sm:py-5">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase font-medium"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-white/80" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
