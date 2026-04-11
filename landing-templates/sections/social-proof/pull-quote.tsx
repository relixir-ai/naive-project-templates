import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
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
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container narrow>
        <div className="grid gap-8 rounded-[var(--radius-card)] border border-[var(--color-border)] px-8 py-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="h-12 w-12 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]" />
          <div className="space-y-5">
            <blockquote className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              "{quote}"
            </blockquote>
            <p className="text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_68%,white)]">
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
