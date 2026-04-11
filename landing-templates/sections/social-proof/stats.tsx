import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
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
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-display", "font-body"],
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
    <Section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-6">
          {label ? (
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{label}</p>
          ) : null}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <article key={item.label} className="space-y-2">
                <p className="font-heading text-4xl font-semibold tracking-[-0.04em]">{item.value}</p>
                <p className="text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_66%,white)]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
