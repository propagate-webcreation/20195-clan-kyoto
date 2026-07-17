"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background image — main subject */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kyoto.webp"
          alt="京都の桜と和柄タトゥーのクローズアップ"
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
        <p>N 35.0116° / E 135.7681°</p>
        <p className="mt-1">Walk-in Tattoo Studio · Kyoto, Japan</p>
      </div>

      {/* meta corner top-right */}
      <div className="absolute top-[164px] sm:top-28 right-5 sm:right-8 lg:right-16 z-20 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/70 text-right leading-relaxed">
        <p>Est. 2025</p>
        <p className="mt-1">Three booths · Daily 11:00–21:00</p>
      </div>

      {/* main headline — bottom-anchored */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-36 sm:pb-48 px-5 sm:px-8 max-w-[1600px] mx-auto">
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
                IN <span className="text-[#c8102e]">KYOTO</span>,
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

          <div className="col-span-12 lg:col-span-3 lg:pl-0 lg:-ml-6 flex flex-col justify-end gap-6 items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-jp text-sm sm:text-base text-white/80 leading-[1.9] tracking-[0.04em] max-w-xs"
            >
              日本のタトゥーで、
              <br />
              旅の思い出を一生に刻む。
              <br />
              <span className="text-white/50 text-xs tracking-[0.04em]">
                A Japanese tattoo as your souvenir from Kyoto.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-nowrap items-center gap-2 sm:gap-3 -ml-1 sm:-ml-2 lg:-ml-4"
            >
              <a
                href="https://www.instagram.com/kyoto_walkin_tattoo_studio?igsh=MTZuZGNyNWZhNHJsNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-square text-white shrink-0"
              >
                <span className="relative shrink-0 w-5 h-5 overflow-hidden">
                  <Image
                    src="/images/2227.png"
                    alt=""
                    fill
                    sizes="20px"
                    className="object-cover scale-[1.35]"
                    aria-hidden
                  />
                </span>
                Instagram
              </a>
            </motion.div>
          </div>
        </div>

        {/* bottom rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex items-end justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/50"
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 sm:w-12 h-px bg-white/40" />
            <span>Scroll</span>
          </div>
          <p className="text-right whitespace-nowrap">
            © 株式会社 Clan③ / 2025
          </p>
        </motion.div>
      </div>

      {/* side vertical text — desktop only */}
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <p className="vert text-[10px] tracking-[0.4em] uppercase text-white/45 select-none">
          Three booths · Japanese artists daily · Walk-in welcome
        </p>
      </div>
    </section>
  );
}
