import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "alternating-rows",
  purpose: "Feature explainer rows that alternate copy and supporting evidence panels",
  tone: ["specific", "clear", "structured"],
  density: "medium",
  geometry: "split",
  industries: ["fintech", "operations", "b2b-saas", "publishing"],
  artDirections: ["editorial", "enterprise-trust", "product-demo"],
  disallowedAdjacencies: ["features/bento", "how-it-works/numbered-steps"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface FeatureRow {
  title: string;
  description: string;
  bullets: string[];
  panelLabel: string;
}

interface FeaturesAlternatingRowsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  rows: FeatureRow[];
}

export function FeaturesAlternatingRows({
  eyebrow,
  heading,
  intro,
  rows,
}: FeaturesAlternatingRowsProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
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
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                {intro}
              </p>
            ) : null}
          </div>

          <div className="space-y-8">
            {rows.map((row, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={row.title}
                  className={`grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">{row.title}</h3>
                    <p className="max-w-prose text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                      {row.description}
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_78%,white)]">
                      {row.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)] border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
                    {/* Large ghost number for visual weight */}
                    <span
                      className="absolute inset-0 flex items-center justify-center font-heading text-8xl font-bold leading-none text-[var(--color-fg)] opacity-[0.07] select-none"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {/* Feature title overlay */}
                    <p className="relative z-10 text-center font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--color-fg)]">
                      {row.title}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
