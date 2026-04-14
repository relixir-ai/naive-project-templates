"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
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
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
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

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-end">
            {/* Competitors stack */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Without {yourProductName}
              </p>
              <div className="space-y-2">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between rounded-[var(--radius-md)] border border-red-900/30 bg-red-950/20 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--color-fg)]">{competitor.name}</p>
                      {competitor.note && (
                        <p className="text-xs text-[var(--color-muted)]">{competitor.note}</p>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-red-400 line-through">
                      ${competitor.price.toLocaleString()}
                      <span className="text-xs font-normal">{competitor.period || "/mo"}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: competitors.length * 0.1 }}
                className="flex justify-end border-t border-[var(--color-border)] pt-3"
              >
                <p className="text-sm text-[var(--color-muted)]">
                  Total:{" "}
                  <span className="font-semibold text-red-400 line-through">
                    ${competitorTotal.toLocaleString()}/mo
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Your product */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[var(--radius-card)] border-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-8 shadow-[var(--shadow-3)]"
            >
              {/* Savings badge */}
              <div className="absolute -top-3 left-6 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                {savingsLabel} {savingsPercent}%
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                With {yourProductName}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <p className="font-heading text-5xl font-bold text-[var(--color-fg)] sm:text-6xl">
                  ${yourPrice.toLocaleString()}
                </p>
                <p className="pb-2 text-lg text-[var(--color-muted)]">{yourPeriod}</p>
              </div>
              {yourNote && (
                <p className="mt-3 text-sm text-[var(--color-muted)]">{yourNote}</p>
              )}
              <div className="mt-6 flex items-center gap-2 text-green-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Save ${savings.toLocaleString()}/mo
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
