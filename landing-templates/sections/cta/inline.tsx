import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "cta",
  variant: "inline",
  purpose: "Compact call-to-action row that closes a page without full-bleed theatrics",
  tone: ["direct", "measured", "practical"],
  density: "low",
  geometry: "split",
  industries: ["fintech", "operations", "publishing", "services"],
  artDirections: ["editorial", "enterprise-trust", "product-demo"],
  disallowedAdjacencies: ["social-proof/pull-quote", "footer/minimal"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface InlineCtaProps {
  eyebrow?: string;
  heading: string;
  supportingText?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function InlineCta({
  eyebrow,
  heading,
  supportingText,
  primaryCta,
  secondaryCta,
}: InlineCtaProps) {
  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {supportingText ? (
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                {supportingText}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.text}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
