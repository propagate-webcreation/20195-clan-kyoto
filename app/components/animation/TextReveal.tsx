"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo, type ElementType } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  mode?: "char" | "word" | "line";
  staggerDelay?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function TextReveal({
  children,
  as: Tag = "p",
  mode = "char",
  staggerDelay = 0.03,
  delay = 0,
  duration = 0.6,
  once = true,
  className,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const segments = useMemo(() => {
    if (mode === "char") return children.split("");
    if (mode === "word") return children.split(/(\s+)/);
    // line mode: split by newline or treat as single segment
    return children.split("\n");
  }, [children, mode]);

  const MotionTag = motion.create(Tag as ElementType);

  return (
    <MotionTag ref={ref} className={className} aria-label={children}>
      {segments.map((segment, i) => (
        <motion.span
          key={`${i}-${segment}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: mode === "line" ? "block" : "inline-block" }}
          aria-hidden
        >
          {segment === " " ? "\u00A0" : segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}
