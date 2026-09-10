import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export function SectionRail({
  number,
  title,
  label,
}: {
  number: string;
  title: string;
  label: string;
}) {
  return (
    <div className="border-y border-current/15">
      <div className="site-width flex items-center justify-between gap-4 py-6 text-[11px] tracking-[0.24em] uppercase">
        <span className="flex gap-5">
          <span className="text-[#c8102e]">{number}</span>
          <span className="opacity-60">{title}</span>
        </span>
        <span className="hidden sm:block opacity-60">—— {label}</span>
      </div>
    </div>
  );
}

export function PageIntro({
  number,
  label,
  lines,
  jp,
  en,
  image,
  alt,
}: {
  number: string;
  label: string;
  lines: string[];
  jp?: string;
  en: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section
      className={`page-intro relative overflow-hidden ${image ? "with-photo" : ""}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/35" />
        </>
      )}
      <div className="site-width relative z-10 w-full">
        <div className="flex justify-between gap-4 mb-14 sm:mb-20 text-[11px] uppercase tracking-[0.25em] text-white/60">
          <Link href="/" className="hover:text-white">
            Home / {label}
          </Link>
          <span className="text-[#c8102e]">0{number} / 06</span>
        </div>
        <div className="grid lg:grid-cols-[1.65fr_1fr] gap-10 items-end">
          <h1 className="display text-[clamp(3.6rem,9vw,9rem)] leading-[0.92]">
            {lines.map((line, i) => (
              <span
                key={line}
                className={`block ${i === lines.length - 1 ? "text-[#c8102e]" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className="max-w-md lg:pb-2">
            {jp && (
              <p className="font-jp text-base leading-[1.95] text-white/85">
                {jp}
              </p>
            )}
            <p
              className={
                jp
                  ? "text-sm text-white/60 leading-[1.85] mt-4"
                  : "text-base leading-[1.95] text-white/85"
              }
              lang="en"
            >
              {en}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  children,
  jp,
  subtitle,
}: {
  children: ReactNode;
  jp?: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="display text-[clamp(2.8rem,7vw,7rem)] leading-[0.94]">
        {children}
      </h2>
      {(jp || subtitle) && (
        <p
          className={`${jp ? "font-jp " : ""}mt-6 text-base leading-relaxed opacity-65`}
        >
          {jp || subtitle}
        </p>
      )}
    </div>
  );
}

export function ContactBanner({
  englishOnly = false,
}: {
  englishOnly?: boolean;
}) {
  return (
    <section className="border-t border-white/15">
      <div className="site-width py-20 sm:py-28 grid lg:grid-cols-[1.7fr_1fr] gap-10 items-end">
        <div>
          <p className="eyebrow mb-8 text-[#c8102e]">
            — Walk in or message / JP · EN
          </p>
          <h2 className="display text-[clamp(3rem,7vw,7rem)] leading-[0.94]">
            COME GET INKED.
            <br />
            <span className="text-white/35">MAKE IT YOURS.</span>
          </h2>
        </div>
        <div>
          <p
            className={`${englishOnly ? "" : "font-jp "}text-white/65 text-base leading-[1.9] mb-7`}
          >
            {englishOnly
              ? "Osaka, Kobe or Kyoto. Talk to your preferred studio about a tattoo that fits your journey and your style."
              : "大阪・神戸・京都。旅先やデザインに合わせて、ご希望の店舗へご相談ください。"}
          </p>
          <Link className="btn-square btn-blood" href="/contact">
            {englishOnly
              ? "Start a conversation"
              : "相談する / Start a conversation"}{" "}
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
