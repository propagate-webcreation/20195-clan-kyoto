"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

const clipPaths = {
  left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" },
  right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0%)" },
  up: { hidden: "inset(100% 0 0 0)", visible: "inset(0% 0 0 0)" },
  down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0% 0)" },
};

export function ImageReveal({
  src,
  alt,
  width,
  height,
  direction = "left",
  duration = 1.2,
  delay = 0,
  once = true,
  className,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const clip = clipPaths[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clip.hidden }}
      animate={isInView ? { clipPath: clip.visible } : undefined}
      transition={{ duration, delay, ease: [0.77, 0, 0.175, 1] }}
      className={className}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : undefined}
        transition={{ duration: duration + 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
      </motion.div>
    </motion.div>
  );
}
