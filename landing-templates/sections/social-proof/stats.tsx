"use client";

import { Container } from "../shared/primitives/Container";
import { GridOverlay } from "../shared/primitives/GridOverlay";
import { MetricRail } from "../shared/primitives/MetricRail";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "social-proof",
  variant: "stats",
  purpose: "Compact credibility bar built from product or customer metrics",
  tone: ["measured", "credible", "concise"],
  density: "low",
  geometry: "grid",
  industries: ["fintech", "ai-saas", "operations", "developer-tools"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["hero/stat-led", "pricing/cards"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface StatItem {
  value: string;
  label: string;
}

interface SocialProofStatsProps {
  label?: string;
  items: StatItem[];
}

export function SocialProofStats({ label, items }: SocialProofStatsProps) {
  return (
    <Section className="relative overflow-hidden border-y border-[var(--color-border-subtle)] bg-[var(--color-panel-solid)] text-[var(--color-fg)]">
      <GridOverlay size={44} />
      <NoiseOverlay blend="screen" opacity={0.018} />
      <Container className="relative z-10">
        <div className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {label ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{label}</p>
            ) : <span />}
            <div className="w-full max-w-xl">
              <TraceLine duration={3.6} delay={0.1} />
            </div>
          </div>
          <MetricRail metrics={items} />
        </div>
      </Container>
    </Section>
  );
}
