import { Hero } from "./components/site/Hero";
import { StoreGuide } from "./components/home/StoreGuide";
import { Gallery } from "./components/works/Gallery";
import { Artists } from "./components/works/Artists";
import { Recruit } from "./components/site/Recruit";
import { PriceGuide } from "./components/guide/PriceGuide";
import { VisitGuide } from "./components/guide/VisitGuide";
import { WhyUs } from "./components/site/WhyUs";
import { Concept } from "./components/site/Concept";
import { TravelExperience } from "./components/inbound/TravelExperience";
import {
  ConsultationForm,
  DirectContacts,
} from "./components/contact/ConsultationForm";
import { LatestPosts } from "./components/home/LatestPosts";
import { MOTIFS } from "./config/studios";
import { STORE_GUIDE } from "./config/store-guide";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const studio =
    typeof params.studio === "string" &&
    STORE_GUIDE.some((item) => item.id === params.studio)
      ? params.studio
      : "";
  const motif =
    typeof params.motif === "string" &&
    (MOTIFS as readonly string[]).includes(params.motif)
      ? params.motif
      : "";
  const purpose =
    params.purpose === "artist" || params.purpose === "aftercare"
      ? params.purpose
      : "";

  return (
    <>
      <Hero />
      <StoreGuide />
      <Gallery />
      <Artists />
      <Recruit />
      <PriceGuide />
      <VisitGuide />
      <WhyUs />
      <Concept />
      <TravelExperience />
      <LatestPosts />
      <div id="contact">
        <ConsultationForm
          key={`${studio}-${motif}-${purpose}`}
          initialStudio={studio ?? ""}
          initialMotif={motif}
          purpose={purpose}
        />
        <DirectContacts />
      </div>
    </>
  );
}
