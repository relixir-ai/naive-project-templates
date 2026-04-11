import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "asymmetric-grid",
  purpose: "Offset feature grid with mixed card widths to break repetitive three-column rhythms",
  tone: ["expressive", "specific", "modern"],
  density: "medium",
  geometry: "grid",
  industries: ["developer-tools", "marketplaces", "ai-saas", "publishing"],
  artDirections: ["editorial", "product-demo"],
  disallowedAdjacencies: ["features/bento", "social-proof/stats"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface GridFeature {
  title: string;
  description: string;
  eyebrow?: string;
  size?: "large" | "small";
}

interface FeaturesAsymmetricGridProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: GridFeature[];
}

export function FeaturesAsymmetricGrid({
  eyebrow,
  heading,
  intro,
  items,
}: FeaturesAsymmetricGridProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro ? (
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                {intro}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            {items.map((item, index) => {
              const large = item.size === "large" || index === 0 || index === 3;
              return (
                <article
                  key={`${item.title}-${index}`}
                  className={`rounded-[var(--radius-card)] border border-[var(--color-border)] ${
                    large ? "bg-[var(--color-surface)] md:col-span-4" : "bg-[color-mix(in_srgb,var(--color-bg)_90%,white)] md:col-span-2"
                  } p-6`}
                >
                  {item.eyebrow ? (
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      {item.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
