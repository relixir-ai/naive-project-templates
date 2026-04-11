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
  artDirections: ["editorial", "enterprise-trust"],
  disallowedAdjacencies: ["hero/product-demo", "cta/full-bleed"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface PullQuoteProps {
  quote: string;
  speaker: string;
  role: string;
  company?: string;
}

export function SocialProofPullQuote({
  quote,
  speaker,
  role,
  company,
}: PullQuoteProps) {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-surface)] text-[var(--color-fg)]">
      <NoiseOverlay blend="multiply" opacity={0.018} />
      <Container narrow>
        <div className="relative z-10 grid gap-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel-solid)] px-8 py-10 shadow-[var(--shadow-2)] md:grid-cols-[auto_1fr] md:items-start">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]" />
            <div className="w-16">
              <TraceLine duration={3.6} />
            </div>
          </div>
          <div className="space-y-5">
            <blockquote className="font-heading text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              "{quote}"
            </blockquote>
            <p className="border-t border-[var(--color-border-subtle)] pt-5 text-sm leading-6 text-[var(--color-muted)]">
              {speaker}
              {" "}
              <span className="text-[var(--color-fg)]">{role}</span>
              {company ? `, ${company}` : ""}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
