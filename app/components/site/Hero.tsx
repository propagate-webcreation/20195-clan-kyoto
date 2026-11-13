"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const height = `${Math.max(window.innerHeight, 500)}px`;
    if (sectionRef.current) sectionRef.current.style.minHeight = height;
    if (contentRef.current) contentRef.current.style.minHeight = height;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[500px] md:min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background image — main subject */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kyoto.webp"
          alt="Close-up of a Japanese-motif tattoo with cherry blossom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* darken left side for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* film grain */}
      <div className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none mix-blend-screen"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>\")",
           }}
      />

      {/* meta corner top-left */}
      <div className="absolute top-28 sm:top-28 left-5 sm:left-8 z-20 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/70 leading-relaxed">
        <p>OSAKA · KYOTO · SHIBUYA · SHINJUKU</p>
        <p className="mt-1">Walk-in Tattoo Studio · Japan</p>
      </div>

      {/* meta corner top-right */}
      <div className="absolute top-[164px] sm:top-28 right-5 sm:right-8 lg:right-16 z-20 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/70 text-right leading-relaxed">
        <p>Choose a studio.</p>
        <p className="mt-1">Japanese motifs · English welcome</p>
      </div>

      {/* main headline — bottom-anchored */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-[700px] md:min-h-screen flex flex-col justify-end pt-64 pb-20 sm:pb-28 px-5 sm:px-8 max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <p className="text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#c8102e] mb-3 sm:mb-4">
                — Walk-in welcome / No appointment needed
              </p>
            </motion.div>

            <h1 className="display text-white text-[clamp(3.4rem,11vw,11.5rem)] leading-[0.84] tracking-[-0.02em]">
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                TATTOO
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.30, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                IN <span className="text-[#c8102e]">KANSAI</span>,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                MADE IN JAPAN.
              </motion.span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-3 flex flex-col justify-end gap-6 items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm sm:text-base text-white/80 leading-[1.9] tracking-[0.04em] max-w-xs"
            >
              A Japanese tattoo, kept for the rest of the trip.
              <br />
              <span className="text-white/70 text-[13px] tracking-[0.04em] md:text-[14px]">
                Osaka, Kyoto and Shibuya. Shinjuku is scheduled to open on 15
                November 2026.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="#stores" className="btn-square btn-blood min-h-12 font-bold">
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2.5 4.5 20.5l7.5-3.2 7.5 3.2L12 2.5Z"
                  />
                </svg>
                Choose a studio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* bottom rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex items-end justify-between gap-3 min-w-0 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/50"
        >
          <div className="flex items-center gap-3 shrink-0">
            <span className="block w-8 sm:w-12 h-px bg-white/40" />
            <span>Scroll</span>
          </div>
          <p className="text-right text-[9px] sm:text-[10px] leading-tight min-w-0">
            Osaka / Kyoto / Shibuya / Shinjuku — Japan
          </p>
        </motion.div>
      </div>

      {/* side vertical text — desktop only */}
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <p className="vert text-[10px] tracking-[0.4em] uppercase text-white/45 select-none">
          Osaka · Kyoto · Shibuya · Shinjuku · Walk-in welcome
        </p>
      </div>
    </section>
  );
}
