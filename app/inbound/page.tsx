import type { Metadata } from "next";
import { PageIntro, ContactBanner } from "../components/shared/Editorial";
import { WhyUs } from "../components/site/WhyUs";
import { Concept } from "../components/site/Concept";
import { TravelExperience } from "../components/inbound/TravelExperience";

export const metadata: Metadata = {
  title: "For Travellers",
  description:
    "Walk-in tattoos in Osaka, Kobe and Kyoto. English-friendly consultations, Japanese motifs and a tattoo experience that fits your journey.",
  alternates: { canonical: "/inbound" },
};

export default function InboundPage() {
  return (
    <div lang="en">
      <PageIntro
        number="2"
        label="For Travellers"
        lines={["YOUR JOURNEY.", "MADE IN JAPAN."]}
        en="Your journey through Japan, remembered in ink. Explore walk-in studios in Osaka, Kobe and Kyoto, with English-friendly consultations and Japanese designs."
        image="/images/hero-main.webp"
        alt="Close-up of a Japanese-style tattoo"
      />
      <WhyUs />
      <Concept />
      <TravelExperience />
      <ContactBanner englishOnly />
    </div>
  );
}
