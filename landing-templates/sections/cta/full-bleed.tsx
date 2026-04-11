import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { ButtonLink } from "../shared/primitives/Button";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "cta",
  variant: "full-bleed",
  purpose: "Single decisive closing action with one dominant button",
  tone: ["focused", "high-contrast"],
  density: "medium",
  geometry: "split",
  industries: ["developer-tools", "fintech", "b2b-saas", "publishing"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["cta/inline"],
  tokensRequired: ["color-bg", "color-surface", "color-fg", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface FullBleedCtaProps {
  headline: string;
  subhead?: string;
  action: { text: string; href: string };
}

export function FullBleedCta({ headline, subhead, action }: FullBleedCtaProps) {
  return (
    <Section className="bg-[var(--color-accent)] text-[var(--color-bg)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.7fr_0.9fr] md:items-end">
          <div className="space-y-4">
            <h2 className="max-w-3xl font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {headline}
            </h2>
            {subhead ? (
              <p className="max-w-xl text-base leading-7 text-[color-mix(in_srgb,var(--color-bg)_88%,black)]">
                {subhead}
              </p>
            ) : null}
          </div>
          <div className="md:justify-self-end">
            <ButtonLink
              href={action.href}
              className="bg-[var(--color-bg)] text-[var(--color-fg)]"
            >
              {action.text}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
