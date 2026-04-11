"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "hero",
  variant: "stat-led",
  purpose: "Proof-first hero with concise copy and a structured metrics rail",
  tone: ["calm", "credible", "proof-forward"],
  density: "medium",
  geometry: "split",
  industries: ["fintech", "operations", "b2b-saas", "local-services"],
  artDirections: ["enterprise-trust", "product-demo"],
  requiresProofType: "stats",
  disallowedAdjacencies: ["social-proof/stats"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface StatItem {
  value: string;
  label: string;
}

interface HeroStatLedProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  stats: StatItem[];
}

export function HeroStatLed({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  stats,
}: HeroStatLedProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            ) : null}
            <div className="space-y-5">
              <h1 className="max-w-3xl font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                {headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                {subhead}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.text}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <p className="font-heading text-4xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_68%,white)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
