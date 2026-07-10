import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Marquee } from "./components/site/Marquee";
import { Concept } from "./components/site/Concept";
import { WhyUs } from "./components/site/WhyUs";
import { Studio } from "./components/site/Studio";
import { Works } from "./components/site/Works";
import { Offer } from "./components/site/Offer";
import { Flow } from "./components/site/Flow";
import { Pricing } from "./components/site/Pricing";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <Marquee />
      <Concept />
      <WhyUs />
      <Studio />
      <Works />
      <Offer />
      <Flow />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
