"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "asymmetric-grid",
  purpose: "Offset feature grid with mixed card widths to break repetitive three-column rhythms",
  tone: ["expressive", "specific", "modern"],
  density: "medium",
  geometry: "grid",
  industries: ["developer-tools", "marketplaces", "ai-saas", "publishing"],
  artDirections: ["editorial", "product-demo", "neubrutalist"],
  disallowedAdjacencies: ["features/bento", "social-proof/stats"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface GridFeature {
  title: string;
  description: string;
  eyebrow?: string;
  size?: "large" | "small";
  /** Optional icon or emoji for visual anchor */
  icon?: string;
}

interface FeaturesAsymmetricGridProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: GridFeature[];
}

export function FeaturesAsymmetricGrid({
  id,
  eyebrow,
  heading,
  intro,
  items,
}: FeaturesAsymmetricGridProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-12">
          <div className="max-w-2xl space-y-3">
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
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            {items.map((item, index) => {
              const large = item.size === "large" || index === 0 || index === 3;
              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] transition-shadow hover:shadow-[var(--shadow-2)] ${
                    large
                      ? "bg-[var(--color-surface)] md:col-span-4"
                      : "bg-[var(--color-bg)] md:col-span-2"
                  } p-6`}
                >
                  {/* Visual accent bar for large cards */}
                  {large && (
                    <div
                      aria-hidden
                      className="absolute left-0 top-0 h-1 w-full bg-[var(--color-accent)]"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {item.icon && (
                      <span
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-accent-soft)] text-xl"
                        aria-hidden
                      >
                        {item.icon}
                      </span>
                    )}
                    <div className="flex-1">
                      {item.eyebrow ? (
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          {item.eyebrow}
                        </p>
                      ) : null}
                      <h3 className={`${item.eyebrow ? "mt-2" : ""} font-heading text-xl font-semibold tracking-[-0.03em] sm:text-2xl`}>
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-sm leading-7 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle hover indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute bottom-4 right-4 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
