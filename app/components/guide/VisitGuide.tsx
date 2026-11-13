import Link from "next/link";
import Image from "next/image";
import { SectionHeading, SectionRail } from "../shared/Editorial";

const STEPS = [
  [
    "WALK IN / MESSAGE",
    "Walk in or message your studio first. Confirm the address and availability before visiting.",
  ],
  [
    "COUNSEL",
    "Discuss the motif, size, placement and travel schedule, along with the price and session time.",
  ],
  [
    "DESIGN",
    "Bring a reference or choose a motif. Confirm the design and its placement with your artist.",
  ],
  [
    "TATTOO",
    "Your session begins after the final check. Let your artist know if you need a break or have travel plans.",
  ],
  [
    "AFTERCARE",
    "Your artist explains protection, cleaning and moisturising, and how to contact the studio after you leave.",
  ],
];

export function VisitGuide() {
  return (
    <>
      <section id="flow">
        <SectionRail number="02" title="From Walk-in to Skin" label="Flow" />
        <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <SectionHeading subtitle="From the door to the skin.">
              WALK IN.
              <br />
              <span className="text-white/35">LEAVE WITH</span>
              <br />A STORY.
            </SectionHeading>
            <div className="relative aspect-[4/5] mt-10">
              <Image
                src="/images/artist-hands.webp"
                alt="A tattoo session in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol>
            {STEPS.map(([en, body], i) => (
              <li
                key={en}
                className="border-t border-white/15 py-7 grid grid-cols-[32px_1fr] gap-4"
              >
                <span className="eyebrow text-[#c8102e] mt-1">0{i + 1}</span>
                <div>
                  <h3 className="text-xl tracking-wide">{en}</h3>
                  <p className="text-white/70 text-sm leading-[1.85] mt-4">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="time" className="border-y border-white/15">
        <div className="site-width py-16 grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="eyebrow text-[#c8102e] mb-5">Plan your time</p>
            <h2 className="display text-4xl sm:text-5xl">
              TIME FOR
              <br />
              YOUR TATTOO.
            </h2>
          </div>
          <div>
            <p className="text-[14px] leading-relaxed text-white md:text-[16px]">
              Session length is confirmed at the studio, from the design, size and placement. Every studio is open 11:00–21:00.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
      <Aftercare />
    </>
  );
}

const QUESTIONS = [
  [
    "Can I walk in without a booking?",
    "All studios welcome walk-ins from 11:00 to 21:00. Menu prices include tax. Custom and large projects are priced upon consultation. You may need to wait if the studio is busy.",
  ],
  [
    "Is it OK if this is my first tattoo?",
    "Small, one-point tattoos are welcome. Talk through your design, the process and any concerns with the studio.",
  ],
  [
    "Can I have my consultation in English?",
    "Osaka and Kyoto can consult in English and Japanese. Language support for Shibuya and Shinjuku will be added when it is confirmed.",
  ],
  [
    "Can I bring a reference or ask for a custom design?",
    "Share your reference, size and placement with your studio. Your artist will discuss the design and any adjustments.",
  ],
  [
    "Which payment methods are accepted?",
    "Osaka and Kyoto accept cards and electronic payments. Available brands vary. Payment methods for Shibuya and Shinjuku will be added when they are confirmed.",
  ],
  [
    "Can my tattoo be finished in one visit?",
    "Small designs may take one short session. Larger pieces can need a full day or several visits. Discuss your departure date with the artist.",
  ],
  [
    "Are there age requirements?",
    "Osaka and Kyoto do not tattoo anyone under 18. Age requirements for Shibuya and Shinjuku are not published on this page.",
  ],
];

function FAQ() {
  return (
    <section id="faq">
      <SectionRail number="03" title="Before You Ink" label="FAQ" />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1fr_1.7fr] gap-12">
        <SectionHeading subtitle="Before you sit down.">
          BEFORE
          <br />
          YOU INK<span className="text-[#c8102e]">.</span>
        </SectionHeading>
        <div>
          {QUESTIONS.map(([en, answerEn], i) => (
            <details
              key={en}
              className="faq-row border-t border-white/15"
              open={i === 0}
            >
              <summary className="flex gap-4 items-start py-6 cursor-pointer">
                <span className="eyebrow text-[#c8102e] pt-1">Q.0{i + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base leading-relaxed">{en}</span>
                </span>
                <span className="faq-plus text-xl text-white/60" aria-hidden>
                  +
                </span>
              </summary>
              <div className="pb-7 pl-12">
                <p className="text-white/70 text-sm leading-[1.9]">
                  {answerEn}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Aftercare() {
  return (
    <section id="aftercare" className="bg-[#161616]">
      <SectionRail
        number="04"
        title="Take Care of Your Ink"
        label="Aftercare"
      />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <SectionHeading subtitle="A way to ask after you leave.">
          AFTER
          <br />
          <span className="text-white/35">THE INK.</span>
        </SectionHeading>
        <div>
          <p className="text-base leading-[2] text-white/75">
            Your artist will explain how to look after your tattoo. Follow the
            instructions for your session and dressing. Ask about travel,
            bathing and activity before you leave.
          </p>
          <div className="border-t border-white/15 mt-8 pt-6">
            <h3 className="text-lg">
              Before you leave
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65 leading-[1.9]">
              <li>01 — Dressing and daily care</li>
              <li>02 — Bathing and travel plans</li>
              <li>03 — Who to contact after you leave</li>
            </ul>
            <Link className="btn-square mt-8" href="/?purpose=aftercare#contact">
              Ask about aftercare ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
