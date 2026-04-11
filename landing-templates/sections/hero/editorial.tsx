"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { ButtonLink } from "../shared/primitives/Button";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "hero",
  variant: "editorial",
  purpose: "Magazine-cover editorial hero with oversized stacked display type and offset body column",
  tone: ["editorial", "confident", "specific"],
  density: "medium",
  geometry: "open",
  industries: ["publishing", "developer-tools", "fintech", "b2b-saas"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  requiresProofType: "logos",
  disallowedAdjacencies: ["hero/stat-led"],
  tokensRequired: ["color-fg", "color-bg", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface HeroEditorialProps {
  eyebrow?: string;
  /** First line of the oversized stacked display headline */
  headlineTop: string;
  /** Second line rendered in accent color. Optional — omit for single-line headlines. */
  headlineBottom?: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function HeroEditorial({
  eyebrow,
  headlineTop,
  headlineBottom,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroEditorialProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)] overflow-hidden">
      <Container>
        <div className="relative">
          {/* Eyebrow */}
          {eyebrow ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]"
            >
              {eyebrow}
            </motion.p>
          ) : null}

          {/* Oversized stacked display headline */}
          <div className="space-y-0 leading-none" aria-label={`${headlineTop} ${headlineBottom}`}>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-8xl font-bold tracking-[-0.05em] sm:text-[10rem] sm:leading-none"
            >
              {headlineTop}
            </motion.h1>
            {headlineBottom ? (
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                className="font-heading text-8xl font-bold tracking-[-0.05em] text-[var(--color-accent)] sm:text-[10rem] sm:leading-none"
                aria-hidden="true"
              >
                {headlineBottom}
              </motion.h1>
            ) : null}
          </div>

          {/* Thin horizontal rule */}
          <motion.hr
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="mt-10 border-t border-[var(--color-fg)] opacity-20"
          />

          {/* Narrow body column — offset right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
            className="mt-10 ml-auto max-w-sm sm:max-w-md lg:max-w-lg space-y-6"
          >
            <p className="text-base leading-8 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
              {subhead}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.text}
                </ButtonLink>
              ) : null}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
