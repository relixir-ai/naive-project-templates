import { Container } from "../shared/primitives/Container";
import { TraceLine } from "../shared/primitives/TraceLine";
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
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface FeatureRow {
  title: string;
  description: string;
  bullets: string[];
  panelLabel: string;
}

interface FeaturesAlternatingRowsProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  rows: FeatureRow[];
}

export function FeaturesAlternatingRows({
  id,
  eyebrow,
  heading,
  intro,
  rows,
}: FeaturesAlternatingRowsProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
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

          <div className="space-y-8">
            {rows.map((row, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={row.title}
                  className={`grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-2)] lg:grid-cols-[1fr_0.85fr] lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="space-y-4">
                    <div className="max-w-48">
                      <TraceLine delay={index * 0.08} duration={3.2} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">{row.title}</h3>
                    <p className="max-w-prose text-sm leading-7 text-[var(--color-muted)]">
                      {row.description}
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                      {row.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)] border border-[var(--color-border-subtle)] bg-[var(--color-panel-solid)] p-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                            Evidence block {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-2 text-sm font-medium text-[var(--color-fg)]">{row.panelLabel}</p>
                        </div>
                        <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                          Verified
                        </span>
                      </div>
                      <div className="space-y-3">
                        {row.bullets.slice(0, 3).map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface-2)_72%,white)] px-4 py-3"
                          >
                            <span className="text-sm text-[var(--color-muted)]">{bullet}</span>
                            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                          </div>
                        ))}
                      </div>
                    </div>
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
