import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { TraceLine } from "../shared/primitives/TraceLine";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "pricing",
  variant: "table",
  purpose: "Comparison table for products where plan differences need explicit side-by-side visibility",
  tone: ["structured", "transparent", "commercial"],
  density: "high",
  geometry: "grid",
  industries: ["developer-tools", "operations", "fintech", "b2b-saas"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["features/tabbed", "how-it-works/timeline"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface PricingColumn {
  name: string;
  price: string;
  cadence?: string;
  cta: { text: string; href: string };
}

interface PricingRow {
  label: string;
  values: string[];
}

interface PricingTableProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  columns: PricingColumn[];
  rows: PricingRow[];
}

export function PricingTable({
  eyebrow,
  heading,
  intro,
  columns,
  rows,
}: PricingTableProps) {
  const gridTemplateColumns = `1.2fr repeat(${columns.length}, minmax(0, 1fr))`;

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
              <p className="text-base leading-7 text-[var(--color-muted)]">
                {intro}
              </p>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
            <div className="grid bg-[var(--color-surface)]" style={{ gridTemplateColumns }}>
              <div className="border-r border-[var(--color-border)] px-5 py-6" />
              {columns.map((column) => (
                <div key={column.name} className="border-r border-[var(--color-border)] px-5 py-6 last:border-r-0">
                  <p className="font-heading text-2xl font-semibold tracking-[-0.03em]">{column.name}</p>
                  <div className="mt-3 max-w-28">
                    <TraceLine delay={columns.indexOf(column) * 0.08} duration={3.2} />
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <p className="font-heading text-3xl font-semibold tracking-[-0.04em]">{column.price}</p>
                    {column.cadence ? (
                      <p className="pb-1 text-sm text-[var(--color-subtle)]">
                        {column.cadence}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <ButtonLink href={column.cta.href} variant="secondary" className="w-full">
                      {column.cta.text}
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>

            {rows.map((row, rowIndex) => (
              <div
                key={row.label}
                className={`grid ${rowIndex > 0 ? "border-t border-[var(--color-border)]" : ""}`}
                style={{ gridTemplateColumns }}
              >
                <div className="border-r border-[var(--color-border)] px-5 py-4 text-sm font-medium text-[var(--color-fg)]">
                  {row.label}
                </div>
                {row.values.map((value, valueIndex) => (
                <div
                  key={`${row.label}-${valueIndex}`}
                  className="border-r border-[var(--color-border)] px-5 py-4 text-sm text-[var(--color-muted)] last:border-r-0"
                >
                    <span className="inline-flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-soft)]" />
                      <span>{value}</span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
