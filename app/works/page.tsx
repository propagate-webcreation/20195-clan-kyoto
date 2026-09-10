import type { Metadata } from "next";
import { PageIntro, ContactBanner } from "../components/shared/Editorial";
import { Gallery } from "../components/works/Gallery";
import { Artists } from "../components/works/Artists";
import { Recruit } from "../components/site/Recruit";

export const metadata: Metadata = {
  title: "Works & Artists / 作品・アーティスト",
  description:
    "大阪・神戸・京都のタトゥーのモチーフと彫師のご案内。桜、龍、波、漢字など、気になるデザインからご相談いただけます。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        number="4"
        label="Works & Artists"
        lines={["THE INK.", "THE ARTISTS."]}
        jp="一輪の桜から、大きな和柄まで。デザインと、その一筆を担う彫師に出会う。"
        en="Find a motif that speaks to you, then talk to the studio team about making it your own."
      />
      <Gallery />
      <Artists />
      <Recruit />
      <ContactBanner />
    </>
  );
}
