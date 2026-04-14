"use client";

import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { CountUp } from "../shared/primitives/CountUp";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "stats",
  variant: "count-up",
  purpose: "Large animated metrics that count up on scroll entry",
  tone: ["impressive", "data-driven", "credible"],
  density: "medium",
  geometry: "grid",
  industries: ["ai-saas", "fintech", "developer-tools", "b2b-saas", "operations"],
  artDirections: ["product-demo", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: ["social-proof/stats", "hero/stat-led"],
  tokensRequired: ["color-fg", "color-bg", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  decimals?: number;
}

interface CountUpStatsProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  stats: Stat[];
  /** Duration of count animation in ms */
  duration?: number;
}

export function CountUpStats({
  id,
  eyebrow,
  heading,
  intro,
  stats,
  duration = 2000,
}: CountUpStatsProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          {(eyebrow || heading || intro) && (
            <div className="max-w-2xl space-y-3 mx-auto text-center">
              {eyebrow && (
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {heading}
                </h2>
              )}
              {intro && (
                <p className="text-base leading-7 text-[var(--color-muted)]">{intro}</p>
              )}
            </div>
          )}

          <div
            className={`grid gap-8 ${
              stats.length === 2
                ? "sm:grid-cols-2"
                : stats.length === 3
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <p className="font-heading text-5xl font-bold tracking-[-0.04em] text-[var(--color-fg)] sm:text-6xl lg:text-7xl">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={duration}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
