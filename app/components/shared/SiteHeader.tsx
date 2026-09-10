"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "../../config/studios";

export function SiteHeader() {
  const pathname = usePathname();
  return <HeaderContents key={pathname} pathname={pathname} />;
}

function HeaderContents({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() =>
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const links = Array.from(
        menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
      );
      const first = buttonRef.current;
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = oldOverflow;
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        本文へ移動 / Skip to content
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 px-5 sm:px-8 py-5 sm:py-6 transition-[background-color,padding] duration-300 ${scrolled || open || pathname !== "/" ? "bg-[#0a0a0a]/95 backdrop-blur-md" : "mix-blend-difference"}`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-5">
          <Link
            href="/"
            className="text-white tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold leading-tight shrink-0"
          >
            <span className="block">WALK-IN</span>
            <span className="block">TATTOO STUDIO / JAPAN</span>
          </Link>
          <nav
            aria-label="メインナビゲーション"
            className="hidden xl:flex items-center gap-7 text-white"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`site-nav-link text-[11px] tracking-[0.12em] uppercase hover:text-[#c8102e] transition-colors ${pathname === item.href ? "is-current text-[#c8102e]" : ""}`}
              >
                <span className="block">{item.label}</span>
                <span className="block text-[10px] tracking-[0.04em] mt-1.5 text-white/50">
                  {item.jp}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 border border-white text-white px-4 py-2 text-[11px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors"
            >
              Walk-in
              <span className="block w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            </Link>
            <button
              ref={buttonRef}
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="xl:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block w-6 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>
      <div
        ref={menuRef}
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-40 bg-[#0a0a0a] xl:hidden transition-[transform,visibility] duration-300 ${open ? "translate-y-0 visible" : "-translate-y-full invisible"}`}
      >
        <div className="h-full overflow-y-auto px-6 pt-28 pb-10">
          <nav aria-label="モバイルナビゲーション">
            {NAVIGATION.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${100 + i * 55}ms` : "0ms",
                }}
                className={`border-b border-white/15 py-4 flex items-center gap-4 transition-[opacity,transform] duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <span className="text-xs text-[#c8102e]">0{i + 1}</span>
                <span>
                  <span
                    className={`display block text-[clamp(1.9rem,6vw,3rem)] ${pathname === item.href ? "text-[#c8102e]" : ""}`}
                  >
                    {item.label.toUpperCase()}
                  </span>
                  <span className="text-white/50 text-xs block mt-2">
                    {item.jp}
                  </span>
                </span>
              </Link>
            ))}
          </nav>
          <p className="eyebrow text-white/50 mt-8">
            Osaka · Kobe · Kyoto / JP · EN
          </p>
        </div>
      </div>
    </>
  );
}
