"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "hero",
  variant: "custom",
  purpose: "Loose hero scaffold for brand-shaped compositions when preset heroes feel too formulaic",
  tone: ["distinctive", "brand-shaped", "flexible"],
  density: "medium",
  geometry: "split",
  industries: ["publishing", "developer-tools", "fintech", "b2b-saas", "consumer", "wellness"],
  artDirections: ["editorial", "product-demo", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: [],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-accent", "color-border", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface HeroCustomProps {
  eyebrow?: string;
  kicker?: string;
  headline: string;
  highlight?: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  supportingPoints?: string[];
  aside?: {
    label?: string;
    title?: string;
    body?: string;
    proof?: string[];
  };
}

export function HeroCustom({
  eyebrow,
  kicker,
  headline,
  highlight,
  subhead,
  primaryCta,
  secondaryCta,
  supportingPoints = [],
  aside,
}: HeroCustomProps) {
  return (
    <Section className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <NoiseOverlay blend="multiply" opacity={0.018} />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end">
          <div className="space-y-8">
            {eyebrow ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-xs uppercase tracking-[0.26em] text-[var(--color-accent)]"
              >
                {eyebrow}
              </motion.p>
            ) : null}

            <div className="space-y-5">
              {kicker ? (
                <p className="max-w-md text-sm uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  {kicker}
                </p>
              ) : null}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl font-heading text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.95]"
              >
                {headline}
                {highlight ? (
                  <>
                    {" "}
                    <span className="text-[var(--color-accent)]">{highlight}</span>
                  </>
                ) : null}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
              >
                {subhead}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.text}
                </ButtonLink>
              ) : null}
            </motion.div>

            {supportingPoints.length ? (
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
                className="grid gap-3 pt-2 text-sm text-[var(--color-subtle)] sm:grid-cols-2"
              >
                {supportingPoints.slice(0, 4).map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-2)] lg:p-8"
          >
            <div className="space-y-5">
              <div className="max-w-28">
                <TraceLine delay={0.12} duration={3.4} />
              </div>

              {aside?.label ? (
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {aside.label}
                </p>
              ) : null}

              {aside?.title ? (
                <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                  {aside.title}
                </h2>
              ) : null}

              {aside?.body ? (
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  {aside.body}
                </p>
              ) : null}

              {aside?.proof?.length ? (
                <div className="grid gap-3 border-t border-[var(--color-border)] pt-5 text-sm">
                  {aside.proof.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      <span className="text-[var(--color-subtle)]">{item}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.aside>
        </div>
      </Container>
    </Section>
  );
}
