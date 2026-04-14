"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion";

interface Metric {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}

interface MetricRailProps {
  metrics: Metric[];
  className?: string;
}

export function MetricRail({ metrics, className }: MetricRailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`grid gap-5 border-t border-b border-[var(--color-border-subtle)] py-6 lg:grid-cols-4 ${className ?? ""}`}
    >
      {metrics.map((m, i) => (
        <motion.article
          key={m.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex flex-col gap-3 pl-5 ${i > 0 ? "lg:border-l lg:border-[var(--color-border-subtle)]" : ""}`}
        >
          <span className="absolute left-0 top-1 h-8 w-px bg-[var(--color-accent)] opacity-80" />
          <span className="font-heading text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)]">
            {m.value}
            {m.unit}
          </span>
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {m.label}
            </span>
            {m.note ? (
              <p className="text-sm leading-6 text-[var(--color-subtle)]">{m.note}</p>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
