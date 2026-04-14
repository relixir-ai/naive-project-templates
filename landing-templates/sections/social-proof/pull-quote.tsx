"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "social-proof",
  variant: "pull-quote",
  purpose: "Single customer quote used as qualitative proof between denser sections",
  tone: ["human", "specific", "grounded"],
  density: "low",
  geometry: "split",
  industries: ["publishing", "wellness", "creator-tools", "b2b-saas"],
  artDirections: ["editorial", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: ["hero/product-demo", "cta/full-bleed"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface PullQuoteProps {
  id?: string;
  quote: string;
  speaker: string;
  role: string;
  company?: string;
  /** Optional avatar image URL */
  avatar?: string;
}

export function SocialProofPullQuote({
  id,
  quote,
  speaker,
  role,
  company,
  avatar,
}: PullQuoteProps) {
  return (
    <Section id={id} className="relative overflow-hidden bg-[var(--color-surface)] text-[var(--color-fg)]">
      <NoiseOverlay blend="multiply" opacity={0.018} />
      <Container narrow>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 grid gap-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel-solid)] px-8 py-10 shadow-[var(--shadow-2)] md:grid-cols-[auto_1fr] md:items-start"
        >
          <div className="space-y-4">
            {avatar ? (
              <img
                src={avatar}
                alt={speaker}
                className="h-14 w-14 rounded-[var(--radius-md)] border-2 border-[var(--color-border)] object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-[var(--color-accent-soft)] font-heading text-xl font-bold text-[var(--color-accent)]">
                {speaker.charAt(0)}
              </div>
            )}
            <div className="w-16">
              <TraceLine duration={3.6} />
            </div>
          </div>
          <div className="space-y-5">
            {/* Large quotation mark as visual anchor */}
            <svg
              aria-hidden
              className="h-8 w-8 text-[var(--color-accent)] opacity-60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-heading text-2xl font-medium leading-snug tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              {quote}
            </blockquote>
            <div className="border-t border-[var(--color-border-subtle)] pt-5">
              <p className="font-semibold text-[var(--color-fg)]">{speaker}</p>
              <p className="text-sm text-[var(--color-muted)]">
                {role}
                {company ? ` at ${company}` : ""}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
