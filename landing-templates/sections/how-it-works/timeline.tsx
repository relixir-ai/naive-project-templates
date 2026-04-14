"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "how-it-works",
  variant: "timeline",
  purpose: "Sequential process timeline for onboarding, implementation, or delivery flows",
  tone: ["calm", "structured", "practical"],
  density: "medium",
  geometry: "split",
  industries: ["services", "operations", "fintech", "local-services"],
  artDirections: ["enterprise-trust", "editorial", "neubrutalist"],
  disallowedAdjacencies: ["features/tabbed", "pricing/table"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface TimelineItem {
  phase: string;
  title: string;
  description: string;
  /** Optional duration or time estimate */
  duration?: string;
}

interface TimelineProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: TimelineItem[];
}

export function Timeline({ id, eyebrow, heading, intro, items }: TimelineProps) {
  return (
    <Section id={id} className="bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl space-y-3"
          >
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro ? (
              <p className="text-base leading-7 text-[var(--color-muted)]">
                {intro}
              </p>
            ) : null}
          </motion.div>

          <ol className="relative space-y-0 border-l-2 border-[var(--color-border)] pl-8">
            {items.map((item, index) => (
              <motion.li
                key={item.phase}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative pb-10 last:pb-0"
              >
                {/* Timeline node */}
                <span
                  className="absolute -left-[2.56rem] top-0 flex h-5 w-5 items-center justify-center rounded-[var(--radius-sm)] border-2 border-[var(--color-border)] bg-[var(--color-accent)] transition-transform group-hover:scale-110"
                  aria-hidden
                />
                {/* Connector dot to next item */}
                {index < items.length - 1 && (
                  <span
                    className="absolute -left-[1.81rem] top-8 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-30"
                    aria-hidden
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    {item.phase}
                  </p>
                  {item.duration && (
                    <span className="rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-2 py-0.5 text-xs text-[var(--color-muted)]">
                      {item.duration}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
