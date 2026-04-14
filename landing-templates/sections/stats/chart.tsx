"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "stats",
  variant: "chart",
  purpose: "Stats section with simple animated bar or line chart visualization",
  tone: ["analytical", "data-driven", "visual"],
  density: "medium",
  geometry: "split",
  industries: ["fintech", "ai-saas", "operations", "b2b-saas"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["social-proof/stats", "stats/count-up"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface DataPoint {
  label: string;
  value: number;
}

interface ChartStatsProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  chartType?: "bar" | "horizontal-bar";
  data: DataPoint[];
  /** Accent color for highlighted bars */
  highlightLast?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
}

export function ChartStats({
  id,
  eyebrow,
  heading,
  intro,
  chartType = "bar",
  data,
  highlightLast = true,
  valuePrefix = "",
  valueSuffix = "",
}: ChartStatsProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxValue = Math.max(...data.map((d) => d.value));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const getBarHeight = (value: number) => {
    const percentage = (value / maxValue) * 100;
    return hasAnimated || prefersReducedMotion ? `${percentage}%` : "0%";
  };

  const getBarWidth = (value: number) => {
    const percentage = (value / maxValue) * 100;
    return hasAnimated || prefersReducedMotion ? `${percentage}%` : "0%";
  };

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-3">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro && (
              <p className="text-base leading-7 text-[var(--color-muted)]">{intro}</p>
            )}
          </div>

          <div ref={containerRef}>
            {chartType === "bar" && (
              <div className="flex h-64 items-end justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                {data.map((point, index) => {
                  const isHighlighted = highlightLast && index === data.length - 1;
                  return (
                    <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
                      <motion.div
                        className={`w-full rounded-t-md ${
                          isHighlighted
                            ? "bg-[var(--color-accent)]"
                            : "bg-[var(--color-accent-soft)]"
                        }`}
                        style={{ height: getBarHeight(point.value) }}
                        initial={{ height: 0 }}
                        animate={{ height: getBarHeight(point.value) }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.8,
                          delay: prefersReducedMotion ? 0 : index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                      <div className="text-center">
                        <p
                          className={`text-xs font-semibold ${
                            isHighlighted
                              ? "text-[var(--color-accent)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          {valuePrefix}
                          {point.value.toLocaleString()}
                          {valueSuffix}
                        </p>
                        <p className="mt-0.5 text-xs text-[var(--color-subtle)]">{point.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {chartType === "horizontal-bar" && (
              <div className="space-y-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                {data.map((point, index) => {
                  const isHighlighted = highlightLast && index === data.length - 1;
                  return (
                    <div key={point.label} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--color-fg)]">{point.label}</span>
                        <span
                          className={`font-semibold ${
                            isHighlighted
                              ? "text-[var(--color-accent)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          {valuePrefix}
                          {point.value.toLocaleString()}
                          {valueSuffix}
                        </span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-[var(--color-surface-2)]">
                        <motion.div
                          className={`h-full rounded-full ${
                            isHighlighted
                              ? "bg-[var(--color-accent)]"
                              : "bg-[var(--color-accent-soft)]"
                          }`}
                          style={{ width: getBarWidth(point.value) }}
                          initial={{ width: 0 }}
                          animate={{ width: getBarWidth(point.value) }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.8,
                            delay: prefersReducedMotion ? 0 : index * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
