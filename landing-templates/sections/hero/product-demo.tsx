"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "hero",
  variant: "product-demo",
  purpose: "Product-forward hero with a live-surface panel and compact proof bar",
  tone: ["direct", "technical", "product-led"],
  density: "high",
  geometry: "split",
  industries: ["developer-tools", "ai-saas", "operations", "open-source"],
  artDirections: ["product-demo", "enterprise-trust"],
  requiresProofType: "stats",
  disallowedAdjacencies: ["social-proof/pull-quote"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface ProductSurfaceItem {
  label: string;
  value: string;
}

interface HeroProductDemoProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  surfaceTitle: string;
  surfaceItems: ProductSurfaceItem[];
  proofLine?: string;
}

export function HeroProductDemo({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  surfaceTitle,
  surfaceItems,
  proofLine,
}: HeroProductDemoProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
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
            {proofLine ? (
              <p className="text-sm text-[color-mix(in_srgb,var(--color-fg)_64%,white)]">{proofLine}</p>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <div className="border-b border-[var(--color-border)] px-6 py-4">
              <p className="text-sm font-medium text-[color-mix(in_srgb,var(--color-fg)_82%,white)]">
                {surfaceTitle}
              </p>
            </div>
            <div className="space-y-3 p-6">
              {surfaceItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-3xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_72%,black)] px-4 py-3"
                >
                  <span className="text-sm text-[color-mix(in_srgb,var(--color-fg)_70%,white)]">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-fg)]">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
