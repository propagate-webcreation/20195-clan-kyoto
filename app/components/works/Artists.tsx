import Image from "next/image";
import Link from "next/link";
import { STUDIOS } from "../../config/studios";
import { SectionHeading, SectionRail } from "../shared/Editorial";

export function Artists() {
  return (
    <section id="artists">
      <SectionRail
        number="02"
        title="The Hands Behind the Ink"
        label="Artists"
      />
      <div className="site-width py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end mb-14">
          <SectionHeading>
            JAPANESE HANDS.
            <br />
            <span className="text-white/35">YOUR STORY.</span>
          </SectionHeading>
          <div>
            <p className="text-base leading-[1.95] text-white/70">
              Tell the studio your motif and travel dates. Ask who is working,
              and look at recent work before you choose.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STUDIOS.map((s) => (
            <article key={s.id}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.artistImage}
                  alt={`An artist at work in ${s.city}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow mt-6 text-[#c8102e]">
                Studio team
              </p>
              <h3 className="display text-4xl mt-4">
                {s.city} ARTISTS
              </h3>
              <p className="text-white/65 text-sm leading-[2] mt-5">
                {s.artistEn}
              </p>
              <Link
                href={`/?studio=${s.id}&purpose=artist#contact`}
                className="inline-block border-b border-white/50 pb-2 mt-6 text-sm hover:text-[#c8102e]"
              >
                Ask about artists and recent work ↗
              </Link>
            </article>
          ))}
        </div>
        <p className="border-t border-white/15 mt-12 pt-6 text-sm text-white/55 leading-[1.9]">
          Each studio confirms who is working and whether you can request an artist. If you have someone in mind, send their name and a photo of their work.
        </p>
      </div>
    </section>
  );
}
