import Link from "next/link";
import Image from "next/image";
import { SectionHeading, SectionRail } from "../shared/Editorial";

const STEPS = [
  [
    "WALK IN / MESSAGE",
    "来店・事前相談",
    "ご希望の店舗へ。予約なしでもご相談いただけます。住所と受付状況をご確認のうえお越しください。",
    "Walk in or message your studio first. Confirm the address and availability before visiting.",
  ],
  [
    "COUNSEL",
    "カウンセリング",
    "モチーフ、サイズ、部位、予算、滞在予定をうかがいます。料金と所要時間もここでご案内します。",
    "Discuss the motif, size, placement, budget and travel schedule, along with the price and session time.",
  ],
  [
    "DESIGN",
    "デザイン・位置の確認",
    "持ち込み画像やお好みをもとに構図をご提案。肌に合わせた位置とデザインを確認します。",
    "Bring your own reference or choose a motif. Confirm the design and its placement with your artist.",
  ],
  [
    "TATTOO",
    "施術",
    "デザインと位置の最終確認後に施術へ。休憩の希望や、観光などの予定は担当者へお伝えください。",
    "Your session begins after the final check. Let your artist know if you need a break or have travel plans.",
  ],
  [
    "AFTERCARE",
    "お手入れの説明",
    "施術後の保護・洗浄・保湿など、担当者からケア方法をご案内。帰宅・帰国後の相談先も確認できます。",
    "Your artist explains protection, cleaning and moisturising, and how to contact the studio after you return home.",
  ],
];

export function VisitGuide() {
  return (
    <>
      <section id="flow">
        <SectionRail number="02" title="From Walk-in to Skin" label="Flow" />
        <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <SectionHeading jp="ご来店から、肌に残るまで。">
              WALK IN.
              <br />
              <span className="text-white/35">LEAVE WITH</span>
              <br />A STORY.
            </SectionHeading>
            <div className="relative aspect-[4/5] mt-10">
              <Image
                src="/images/artist-hands.webp"
                alt="タトゥーの施術風景"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol>
            {STEPS.map(([en, jp, text, body], i) => (
              <li
                key={en}
                className="border-t border-white/15 py-7 grid grid-cols-[32px_1fr] gap-4"
              >
                <span className="eyebrow text-[#c8102e] mt-1">0{i + 1}</span>
                <div>
                  <h3 className="text-xl tracking-wide">{en}</h3>
                  <p className="font-jp text-white/85 text-base mt-2">{jp}</p>
                  <p className="font-jp text-white/60 text-sm leading-[1.95] mt-4">
                    {text}
                  </p>
                  <p className="text-white/50 text-sm leading-[1.85] mt-3">
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
              所要時間は、デザイン・サイズ・部位を見て、来店当日に店舗でご案内します。営業時間は全店舗 11:00–21:00 です。
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70 md:text-[16px]">
              Session length is confirmed at the studio on the day. Every studio is open 11:00–21:00.
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
    "本当に予約なしで相談できますか？",
    "Can I walk in without a booking?",
    "はい。全店舗ウォークインに対応しています。営業時間は11:00–21:00、料金は当日見積もりのみです。混雑時はお待ちいただく場合があります。",
    "All studios welcome walk-ins from 11:00 to 21:00. Pricing is quoted on the day, and you may need to wait if the studio is busy.",
  ],
  [
    "初めてのタトゥーでも大丈夫ですか？",
    "Is it OK if this is my first tattoo?",
    "小さなワンポイントからご相談いただけます。デザインや施術の流れ、不安な点をカウンセリングでお聞かせください。",
    "Small, one-point tattoos are welcome. Talk through your design, the process and any concerns with the studio.",
  ],
  [
    "英語で相談できますか？",
    "Can I have my consultation in English?",
    "大阪と京都は、日本語と英語で相談できます。渋谷と新宿の対応言語は、決まり次第ご案内します。",
    "Osaka and Kyoto can consult in English and Japanese. Language support for Shibuya and Shinjuku will be added when it is confirmed.",
  ],
  [
    "画像の持ち込みやオリジナル制作はできますか？",
    "Can I bring a reference or ask for a custom design?",
    "可能です。希望するモチーフ・サイズ・部位と一緒に、参考画像を店舗の相談窓口へお送りください。施術の可否や調整内容は担当者がご案内します。",
    "Share your reference, size and placement with your studio. Your artist will discuss the design and any adjustments.",
  ],
  [
    "支払い方法は何がありますか？",
    "Which payment methods are accepted?",
    "大阪と京都は、クレジットカードと各種電子決済に対応しています。使えるブランドは店舗により異なります。渋谷と新宿の支払い方法は、決まり次第ご案内します。",
    "Osaka and Kyoto accept cards and electronic payments. Available brands vary. Payment methods for Shibuya and Shinjuku will be added when they are confirmed.",
  ],
  [
    "当日中に完成しますか？",
    "Can my tattoo be finished in one visit?",
    "小さな作品は短時間で完成する場合があります。大きさや細かさによっては一日、または複数回の来店が必要です。帰国日・移動予定も含めて事前にご相談ください。",
    "Small designs may take one short session. Larger pieces can need a full day or several visits. Discuss your departure date with the artist.",
  ],
  [
    "年齢などの利用条件はありますか？",
    "Are there age requirements?",
    "大阪と京都では、18歳未満への施術は行っていません。渋谷と新宿の年齢条件は、このページではご案内していません。",
    "Osaka and Kyoto do not tattoo anyone under 18. Age requirements for Shibuya and Shinjuku are not published on this page.",
  ],
];

function FAQ() {
  return (
    <section id="faq">
      <SectionRail number="03" title="Before You Ink" label="FAQ" />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1fr_1.7fr] gap-12">
        <SectionHeading jp="彫る前に、知っておきたいこと。">
          BEFORE
          <br />
          YOU INK<span className="text-[#c8102e]">.</span>
        </SectionHeading>
        <div>
          {QUESTIONS.map(([jp, en, answer, answerEn], i) => (
            <details
              key={jp}
              className="faq-row border-t border-white/15"
              open={i === 0}
            >
              <summary className="flex gap-4 items-start py-6 cursor-pointer">
                <span className="eyebrow text-[#c8102e] pt-1">Q.0{i + 1}</span>
                <span className="flex-1">
                  <span className="block text-base leading-relaxed">{jp}</span>
                  <span className="block text-white/50 text-xs leading-relaxed mt-2">
                    {en}
                  </span>
                </span>
                <span className="faq-plus text-xl text-white/60" aria-hidden>
                  +
                </span>
              </summary>
              <div className="pb-7 pl-12">
                <p className="text-white/65 text-sm leading-[2]">{answer}</p>
                <p className="text-white/50 text-sm leading-[1.9] mt-4">
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
        <SectionHeading jp="帰宅・帰国後も、相談できるように。">
          AFTER
          <br />
          <span className="text-white/35">THE INK.</span>
        </SectionHeading>
        <div>
          <p className="font-jp text-base leading-[2] text-white/75">
            施術後は、担当彫師から保護・洗浄・保湿などのお手入れ方法をご説明します。使用する保護材や施術内容により案内が異なるため、店舗で受け取る指示に沿ってケアしてください。
          </p>
          <p className="text-white/55 text-sm leading-[1.9] mt-5">
            Your artist will explain how to look after your tattoo. Follow the
            instructions provided for your session and dressing. Ask about
            travel plans, bathing and activities before leaving.
          </p>
          <div className="border-t border-white/15 mt-8 pt-6">
            <h3 className="text-lg">
              来店時に確認しておくこと / Before you leave
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65 leading-[1.9]">
              <li>
                01 — 保護材の扱いと、お手入れの方法 / Dressing and daily care
              </li>
              <li>
                02 — シャワー・入浴・旅行中の過ごし方 / Bathing and travel plans
              </li>
              <li>03 — 帰宅・帰国後の相談先 / Follow-up contact</li>
            </ul>
            <Link className="btn-square mt-8" href="/?purpose=aftercare#contact">
              施術後の相談 / Aftercare question ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
