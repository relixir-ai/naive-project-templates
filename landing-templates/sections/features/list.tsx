"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
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
  requiresProofType: undefined,
  disallowedAdjacencies: ["features/bento", "features/asymmetric-grid"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface ListItem {
  title: string;
  description: string;
}

interface FeaturesListProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: ListItem[]; // 3–6 items
}

export function FeaturesList({ eyebrow, heading, intro, items }: FeaturesListProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-12">
          {/* Section header */}
          <div className="max-w-2xl space-y-3">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro ? (
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                {intro}
              </p>
            ) : null}
          </div>

          {/* Numbered list */}
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
                  className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 py-10 sm:grid-cols-[6rem_1fr] sm:gap-x-12"
                >
                  {/* Large accent number */}
                  <span
                    className="font-heading text-7xl font-bold leading-none text-[var(--color-accent)] opacity-90 select-none"
                    aria-hidden="true"
                  >
                    {displayNumber}
                  </span>

                  {/* Title + description */}
                  <div className="space-y-2 pt-1">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="max-w-prose text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                      {item.description}
                    </p>
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
