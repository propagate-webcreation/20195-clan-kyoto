import type { Metadata } from "next";
import { PageIntro, ContactBanner } from "../components/shared/Editorial";
import { StudioDetails } from "../components/studios/StudioDetails";

export const metadata: Metadata = {
  title: "Studios / 大阪・神戸・京都の店舗",
  description:
    "大阪・神戸・京都のタトゥースタジオを比較。所在地の確認方法、営業時間、設備、英語対応、アクセスと相談先をご案内します。",
  alternates: { canonical: "/studios" },
};

export default function StudiosPage() {
  return (
    <>
      <PageIntro
        number="3"
        label="Studios"
        lines={["OSAKA. KOBE.", "KYOTO."]}
        jp="大阪・心斎橋、神戸・三宮〜元町、そして京都。旅先とご希望に合う店舗をお選びください。"
        en="Three cities, three studios. Compare opening hours, facilities and contact options, then check the exact location with your chosen studio."
        image="/images/kobe-studio.webp"
        alt="神戸・domyのスタジオ内観"
      />
      <StudioDetails />
      <ContactBanner />
    </>
  );
}
