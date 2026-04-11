"use client";

import { motion } from "@/lib/motion";

export function TraceLine({
  delay = 0,
  duration = 2.5,
  direction = 'ltr',
}: {
  delay?: number;
  duration?: number;
  direction?: 'ltr' | 'rtl';
}) {
  const initialX = direction === "ltr" ? "-140%" : "140%";
  const animateX = direction === "ltr" ? "340%" : "-340%";

  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-border-subtle)]" />
      <motion.div
        className="absolute inset-y-0 w-1/3"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          duration,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.45,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          background: `linear-gradient(to right, transparent, var(--color-accent), transparent)`,
        }}
      />
    </div>
  );
}
