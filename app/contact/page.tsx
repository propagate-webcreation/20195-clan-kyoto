import type { Metadata } from "next";
import { PageIntro } from "../components/shared/Editorial";
import {
  ConsultationForm,
  DirectContacts,
} from "../components/contact/ConsultationForm";
import { getStudio, MOTIFS } from "../config/studios";

export const metadata: Metadata = {
  title: "Contact / ご相談・予約",
  description:
    "店舗、デザイン、サイズを選んで相談。大阪のWhatsApp、神戸のLINE、京都のInstagramから、来店予定やタトゥーのご希望をお聞かせください。",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const studio =
    typeof params.studio === "string" ? getStudio(params.studio)?.id : "";
  const motif =
    typeof params.motif === "string" && MOTIFS.includes(params.motif)
      ? params.motif
      : "";
  const purpose =
    params.purpose === "artist" || params.purpose === "aftercare"
      ? params.purpose
      : "";
  return (
    <>
      <PageIntro
        number="6"
        label="Contact"
        lines={["LET’S MAKE", "YOUR MARK."]}
        jp="デザインが決まっていなくても大丈夫。旅先、サイズ、ご予算から一緒に考えていきましょう。"
        en="An idea, a reference, or just a feeling. Start a conversation with your studio in Japanese or English."
      />
      <ConsultationForm
        key={`${studio}-${motif}-${purpose}`}
        initialStudio={studio}
        initialMotif={motif}
        purpose={purpose}
      />
      <DirectContacts />
    </>
  );
}
