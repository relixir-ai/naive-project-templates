"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { GlowEdge } from "../shared/primitives/GlowEdge";
import { GridOverlay } from "../shared/primitives/GridOverlay";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
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
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
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
  const highlights = surfaceItems.slice(0, 3);

  return (
    <Section className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 78% 18%, var(--color-accent-soft) 0, transparent 34%), radial-gradient(circle at 18% 82%, rgba(125, 232, 255, 0.05) 0, transparent 28%)",
        }}
      />
      <GridOverlay size={40} />
      <NoiseOverlay blend="screen" opacity={0.024} />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-accent)]">
                  {eyebrow}
                </p>
              ) : null}
              <div className="max-w-xs">
                <TraceLine duration={3.4} />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                {headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
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
            <div className="space-y-5">
              {proofLine ? (
                <p className="text-sm text-[var(--color-subtle)]">{proofLine}</p>
              ) : null}
              {highlights.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item.label}
                      className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-solid)_78%,transparent)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] shadow-[var(--shadow-1)]"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute inset-8 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(125, 232, 255, 0.14) 0%, rgba(125, 232, 255, 0.02) 50%, transparent 72%)",
              }}
            />
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel-solid)] shadow-[var(--shadow-3)]">
              <GlowEdge edge="top" />
              <GridOverlay size={28} />
              <NoiseOverlay blend="screen" opacity={0.02} />

              <div className="relative z-10 border-b border-[var(--color-border-subtle)] px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                      Live routing view
                    </p>
                    <p className="text-sm font-medium text-[var(--color-fg)]">{surfaceTitle}</p>
                  </div>
                  <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg)]">
                    Active
                  </div>
                </div>
                <div className="mt-5">
                  <TraceLine delay={0.2} duration={3.1} />
                </div>
              </div>

              <div className="relative z-10 space-y-3 p-6">
                {surfaceItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface)_92%,transparent)] shadow-[var(--shadow-1)]"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-px bg-[var(--color-accent)]"
                      style={{ opacity: 0.72 - index * 0.08 }}
                    />
                    <div className="flex items-start justify-between gap-4 px-5 py-4">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                          {item.label}
                        </p>
                      </div>
                      <span className="font-heading text-xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {proofLine ? (
                <div className="relative z-10 border-t border-[var(--color-border-subtle)] px-6 py-4">
                  <p className="text-sm leading-6 text-[var(--color-subtle)]">{proofLine}</p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
