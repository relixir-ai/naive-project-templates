"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion";

interface Metric { label: string; value: string; unit?: string }
interface MetricRailProps { metrics: Metric[]; className?: string }

export function MetricRail({ metrics, className }: MetricRailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className={`flex flex-wrap items-start gap-8 border-t border-b border-[var(--color-border-subtle)] py-6 md:gap-16 ${className ?? ''}`}>
      {metrics.map((m, i) => (
        <div key={m.label} className="flex flex-col gap-1">
          <span className="font-mono text-3xl font-bold tracking-tight text-[var(--color-fg)]" style={{ opacity: inView ? 1 : 0, transition: `opacity ${200 + i * 80}ms ease` }}>
            {m.value}{m.unit}
          </span>
          <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
