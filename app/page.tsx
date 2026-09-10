import { Hero } from "./components/site/Hero";
import { BrandIntro } from "./components/home/BrandIntro";
import { StudioDirectory } from "./components/shared/StudioDirectory";
import { Gallery } from "./components/works/Gallery";
import { ContactBanner } from "./components/shared/Editorial";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <StudioDirectory compact />
      <Gallery compact />
      <ContactBanner />
    </>
  );
}
