"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { TraceLine } from "../shared/primitives/TraceLine";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "list",
  purpose: "Numbered feature list with large accent numerals as visual anchors, open layout, no cards",
  tone: ["editorial", "structured", "clear"],
  density: "medium",
  geometry: "list",
  industries: ["publishing", "developer-tools", "fintech", "b2b-saas", "operations"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["features/bento", "features/asymmetric-grid"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface ListItem {
  title: string;
  description: string;
}

interface FeaturesListProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: ListItem[]; // 3–6 items
}

export function FeaturesList({ id, eyebrow, heading, intro, items }: FeaturesListProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="max-w-2xl space-y-3">
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
              ) : null}
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {heading}
              </h2>
            </div>
            <div className="space-y-4">
              <div className="max-w-sm">
                <TraceLine delay={0.15} duration={3.4} />
              </div>
              {intro ? (
                <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">{intro}</p>
              ) : null}
            </div>
          </div>

          <ol className="divide-y divide-[var(--color-border)]">
            {items.map((item, index) => {
              const displayNumber = String(index + 1).padStart(2, "0");
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.08,
                  }}
                  className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 py-10 sm:grid-cols-[6rem_1fr_18rem] sm:gap-x-12"
                >
                  <span
                    className="font-heading text-7xl font-bold leading-none text-[var(--color-accent)] opacity-90 select-none"
                    aria-hidden="true"
                  >
                    {displayNumber}
                  </span>

                  <div className="space-y-2 pt-1">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="max-w-prose text-base leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="col-span-full sm:col-span-1 sm:pl-4">
                    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface)_82%,transparent)] px-5 py-4 shadow-[var(--shadow-1)]">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                        Sequence
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                          {displayNumber}
                        </span>
                        <div className="w-20">
                          <TraceLine delay={index * 0.08} duration={3.2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
