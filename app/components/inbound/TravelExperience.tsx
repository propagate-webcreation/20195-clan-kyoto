import Image from "next/image";
import Link from "next/link";
import { SectionHeading, SectionRail } from "../shared/Editorial";

export function TravelExperience() {
  const experiences = [
    {
      city: "OSAKA",
      title: "Japanese motifs, between sights.",
      alt: "温かな照明の大阪店の内観",
      image: "/images/studio-interior.webp",
      text: "From a small piece during your sightseeing to a full day of work. The Osaka studio is in the Shinsaibashi area.",
      body: "The studio is open 11:00–21:00, and the price is quoted on the day.",
      id: "osaka",
    },
    {
      city: "KOBE",
      title: "Mark your journey.",
      alt: "Tattoo artist at work",
      image: "/images/kobe-hero.webp",
      text: "A small studio near Sannomiya and Motomachi. English consultation, consent and aftercare sheets help you feel at ease throughout your visit.",
      body: "Fit your visit around your time in Sannomiya and Motomachi. The studio is open 11:00–21:00, and the price is quoted on the day.",
      id: "kobe",
    },
    {
      city: "KYOTO",
      title: "Discover the story behind the ink.",
      alt: "Sakura blossoms on a dark surface",
      image: "/images/journal-sakura.webp",
      text: "Discover the culture and meaning behind Japanese motifs. Ask the Kyoto studio about local guides and partner travel experiences.",
      body: "Connect the design you choose with the places you explore, and make Japanese culture part of your own story.",
      id: "kyoto",
    },
  ];
  return (
    <section className="bg-[#f5f5f3] text-[#0a0a0a]" id="offer">
      <SectionRail
        number="03"
        title="Tattoo × Japan × Travel"
        label="Experience"
      />
      <div className="site-width py-20 sm:py-28">
        <SectionHeading subtitle="An experience that becomes part of your journey.">
          MORE THAN
          <br />
          <span className="text-black/40">A TATTOO</span>
          <span className="text-[#c8102e]">.</span>
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {experiences.map((e) => (
            <article key={e.id}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={e.image}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow text-[#c8102e] mt-6">
                {e.city} / Experience
              </p>
              <h3 className="text-lg leading-relaxed mt-4">{e.title}</h3>
              <p
                className="text-base leading-[1.85] text-black/70 mt-4"
                lang="en"
              >
                {e.text}
              </p>
              <p className="text-sm leading-[1.95] text-black/55 mt-4">
                {e.body}
              </p>
              <Link
                href={`#${e.id}`}
                className="inline-block text-sm border-b border-black/40 pb-2 mt-6"
              >
                Visit {e.city} ↗
              </Link>
            </article>
          ))}
        </div>
        <div className="border-t border-black/15 mt-14 pt-8 flex flex-col sm:flex-row justify-between gap-6">
          <p className="text-sm leading-[1.9] text-black/60">
            Contact your studio for availability and the details of each
            experience.
          </p>
          <Link href="#flow" className="btn-square self-start">
            Plan your visit ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
