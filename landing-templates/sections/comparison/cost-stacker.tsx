"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "comparison",
  variant: "cost-stacker",
  purpose: "Visual comparison stacking competitor costs against your single price",
  tone: ["competitive", "value-focused", "persuasive"],
  density: "medium",
  geometry: "split",
  industries: ["developer-tools", "b2b-saas", "ai-saas", "operations", "fintech"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["pricing/cards", "comparison/feature-table"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface Competitor {
  name: string;
  price: number;
  period?: string;
  note?: string;
}

interface CostStackerProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  competitors: Competitor[];
  yourProductName: string;
  yourPrice: number;
  yourPeriod?: string;
  yourNote?: string;
  savingsLabel?: string;
}

export function CostStacker({
  id,
  eyebrow,
  heading,
  intro,
  competitors,
  yourProductName,
  yourPrice,
  yourPeriod = "/mo",
  yourNote,
  savingsLabel = "Save",
}: CostStackerProps) {
  const competitorTotal = competitors.reduce((sum, c) => sum + c.price, 0);
  const savings = competitorTotal - yourPrice;
  const savingsPercent = Math.round((savings / competitorTotal) * 100);

  return (
    <Section id={id} className="bg-[var(--color-bg)] relative py-20 text-[var(--color-fg)]">
      <TraceLine />

      <Container>
        <div className="mx-auto max-w-4xl">
          {eyebrow && (
            <p className="mb-3 text-center text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          )}
          <h2 className="mb-12 text-center font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {heading}
          </h2>
          {intro && (
            <p className="mx-auto mb-16 max-w-md text-center text-[var(--color-muted)]">{intro}</p>
          )}

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="pl-1 text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Without {yourProductName}
              </p>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between rounded-2xl border border-[color-mix(in_srgb,var(--color-border)_80%,#7f1d1d)] bg-[color-mix(in_srgb,var(--color-surface)_92%,#450a0a_8%)] px-6 py-5"
                  >
                    <div>
                      <p className="font-medium text-[var(--color-fg)]">{competitor.name}</p>
                      {competitor.note && (
                        <p className="mt-0.5 text-xs text-[var(--color-muted)]">{competitor.note}</p>
                      )}
                    </div>
                    <p className="text-right">
                      <span className="text-xl font-semibold text-[color-mix(in_srgb,var(--color-muted)_40%,#f87171)] line-through">
                        ${competitor.price.toLocaleString()}
                      </span>
                      <span className="ml-1 text-xs text-[var(--color-muted)]">
                        {competitor.period || "/mo"}
                      </span>
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-[var(--color-border)] pt-4 pl-6">
                <p className="text-sm text-[var(--color-muted)]">
                  Total:{" "}
                  <span className="font-semibold text-[color-mix(in_srgb,var(--color-muted)_35%,#f87171)] line-through">
                    ${competitorTotal.toLocaleString()}/mo
                  </span>
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[var(--radius-card)] border-2 border-[var(--color-accent)] bg-[var(--color-surface)] p-10 shadow-[var(--shadow-3)]"
            >
              <div className="absolute -top-4 right-8 rounded-full bg-[color-mix(in_srgb,#10b981_92%,var(--color-accent)_8%)] px-5 py-1 text-sm font-semibold text-white shadow-md">
                {savingsLabel} {savingsPercent}%
              </div>

              <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                With {yourProductName}
              </p>

              <div className="mb-8 mt-6 flex items-baseline gap-3">
                <span className="font-heading text-6xl font-bold text-[var(--color-fg)] sm:text-7xl">
                  ${yourPrice.toLocaleString()}
                </span>
                <span className="text-2xl text-[var(--color-muted)]">{yourPeriod}</span>
              </div>

              {yourNote && <p className="mb-8 text-[var(--color-muted)]">{yourNote}</p>}

              <div className="flex items-center gap-3 text-[color-mix(in_srgb,#10b981_85%,var(--color-accent)_15%)]">
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Save ${savings.toLocaleString()}/mo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
