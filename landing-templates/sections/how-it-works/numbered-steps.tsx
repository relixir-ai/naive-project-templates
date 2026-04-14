"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "how-it-works",
  variant: "numbered-steps",
  purpose: "Three-step process explanation with explicit sequence and action cues",
  tone: ["direct", "structured", "practical"],
  density: "medium",
  geometry: "stack",
  industries: ["ai-saas", "developer-tools", "operations", "services"],
  artDirections: ["product-demo", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: ["features/alternating-rows", "pricing/cards"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface StepItem {
  title: string;
  description: string;
}

interface NumberedStepsProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: StepItem[];
}

export function NumberedSteps({
  id,
  eyebrow,
  heading,
  intro,
  steps,
}: NumberedStepsProps) {
  return (
    <Section id={id} className="bg-[var(--color-surface)] text-[var(--color-fg)]">
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

          <ol className="relative grid gap-6 lg:grid-cols-3 lg:gap-4">
            {/* Connector line on desktop */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-16 hidden h-px bg-[var(--color-border)] lg:block"
            />
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-[var(--shadow-1)] transition-shadow hover:shadow-[var(--shadow-2)]"
              >
                {/* Large step number as visual anchor */}
                <div className="relative mb-6 flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-[var(--color-accent)] font-heading text-xl font-bold text-[var(--color-accent-foreground)] transition-transform group-hover:scale-105"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-border)]" />
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
                {/* Step indicator for flow */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-3 top-16 hidden h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] lg:flex"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
