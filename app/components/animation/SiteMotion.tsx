"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

export function SiteMotion({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <MotionEffects />
      {children}
    </MotionConfig>
  );
}

function MotionEffects() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (reducedMotion) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.page-intro):not(#top), main > div[lang] > section:not(.page-intro)",
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("section-motion-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.06 },
    );

    sections.forEach((section) => {
      section.classList.add("section-motion");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-[#c8102e]"
      style={{ scaleX: progress }}
    />
  );
}
