import Link from "next/link";
import { SectionRail, SectionHeading } from "../shared/Editorial";

export function BrandIntro() {
  return (
    <section id="concept">
      <SectionRail number="01" title="The Principles of Ink" label="Concept" />
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1.6fr_1fr] gap-12 items-end">
        <SectionHeading>
          INK THAT
          <br />
          REMEMBERS
          <br />
          <span className="text-white/35">WHERE YOU’VE BEEN.</span>
        </SectionHeading>
        <div>
          <p className="text-white/85 font-jp text-lg leading-[2]">
            日本のタトゥーで、
            <br />
            旅の思い出を一生に刻む。
          </p>
          <p className="font-jp text-white/60 text-base leading-[2] mt-7">
            大阪、神戸、京都。桜・龍・波・漢字に込められた文化と、その土地で過ごした時間を肌に残す。3つの街で、ふらりと立ち寄れるタトゥー体験をお届けします。
          </p>
          <p className="text-white/50 text-sm leading-[1.9] mt-5">
            Three cities, a shared love of Japanese tattoo. Walk in with an
            idea. Leave with a memory that travels with you.
          </p>
          <Link href="/inbound" className="btn-square mt-8">
            For travellers / 旅する方へ ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
