import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactBanner } from "../components/shared/Editorial";
import { PriceGuide } from "../components/guide/PriceGuide";
import { VisitGuide } from "../components/guide/VisitGuide";

export const metadata: Metadata = {
  title: "Price & Guide / 料金・ご利用ガイド",
  description:
    "大阪・京都のサイズ別料金と神戸店への見積もり相談、ご利用の流れ、所要時間、FAQ、アフターケアのご案内。",
  alternates: { canonical: "/guide" },
};

export default function GuidePage() {
  return (
    <>
      <PageIntro
        number="5"
        label="Price & Guide"
        lines={["BEFORE", "YOUR FIRST INK."]}
        jp="料金も、当日の流れも、その後のケアも。初めての一歩を、安心して選べるように。"
        en="Prices, the studio visit, session times and aftercare. Everything to discuss before your first tattoo."
      />
      <nav
        aria-label="ご利用ガイドの目次"
        className="site-width flex flex-wrap gap-x-8 gap-y-4 pb-12 text-sm text-white/65"
      >
        {[
          ["pricing", "料金 / Price"],
          ["flow", "流れ / Flow"],
          ["time", "時間 / Time"],
          ["faq", "FAQ"],
          ["aftercare", "アフターケア / Aftercare"],
        ].map(([id, label]) => (
          <Link
            key={id}
            href={`#${id}`}
            className="border-b border-white/30 pb-2 hover:text-[#c8102e]"
          >
            {label} ↓
          </Link>
        ))}
      </nav>
      <PriceGuide />
      <VisitGuide />
      <ContactBanner />
    </>
  );
}
