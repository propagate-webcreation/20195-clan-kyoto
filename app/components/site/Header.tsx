"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "Concept", href: "#concept" },
  { label: "Studio", href: "#studio" },
  { label: "Works", href: "#works" },
  { label: "Why Us", href: "#why" },
  { label: "Price", href: "#pricing" },
  { label: "Flow", href: "#flow" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 px-5 sm:px-8 py-5 sm:py-6 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "mix-blend-difference"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link
            href="#top"
            className="text-white tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold leading-tight"
          >
            <span className="block">KYOTO WALK-IN</span>
            <span className="block">TATTOO STUDIO / JAPAN</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-white">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] tracking-[0.16em] uppercase font-medium hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-white text-white px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-white hover:text-black transition-colors"
            >
              Walk-in
              <span className="block w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            >
              <span className={`block w-6 h-px bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-px bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:hidden ${
          open 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col px-6 pt-32 pb-10 overflow-y-auto">
          <nav className="flex-1 flex flex-col gap-2">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display text-5xl text-white border-b border-white/10 py-5 flex items-baseline gap-4"
              >
                <span className="tabular text-xs text-[#c8102e] tracking-[0.16em]">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="text-white/60 text-xs tracking-[0.2em] uppercase pt-8 border-t border-white/10 mt-auto">
            <p>11:00 — 21:00 / Open Every Day</p>
            <p className="mt-2">Kyoto, Japan</p>
          </div>
        </div>
      </div>
    </>
  );
}
