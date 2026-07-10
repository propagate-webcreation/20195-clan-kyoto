"use client";

import { motion, useInView } from "framer-motion";
import { useRef, Children, type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export function StaggerChildren({
  children,
  stagger = 0.1,
  duration = 0.6,
  delay = 0,
  once = true,
  className,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
