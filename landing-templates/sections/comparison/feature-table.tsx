"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "comparison",
  variant: "feature-table",
  purpose: "Feature-by-feature comparison table with highlighted product column",
  tone: ["competitive", "analytical", "clear"],
  density: "high",
  geometry: "grid",
  industries: ["developer-tools", "b2b-saas", "ai-saas", "operations"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["pricing/table", "comparison/cost-stacker"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface Competitor {
  name: string;
  logo?: string;
}

interface Feature {
  name: string;
  description?: string;
  /** Values per competitor in same order as competitors array, plus your product last */
  values: (boolean | string)[];
}

interface FeatureTableProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  yourProductName: string;
  yourProductLogo?: string;
  competitors: Competitor[];
  features: Feature[];
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <XIcon />;
  }
  return <span className="text-sm text-[var(--color-fg)]">{value}</span>;
}

export function FeatureTable({
  id,
  eyebrow,
  heading,
  intro,
  yourProductName,
  yourProductLogo,
  competitors,
  features,
}: FeatureTableProps) {
  const allProducts = [...competitors, { name: yourProductName, logo: yourProductLogo }];
  const yourProductIndex = allProducts.length - 1;

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro && (
              <p className="text-base leading-7 text-[var(--color-muted)]">{intro}</p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="w-1/3 border-b border-[var(--color-border)] p-4 text-left text-sm font-medium text-[var(--color-muted)]">
                    Feature
                  </th>
                  {allProducts.map((product, index) => (
                    <th
                      key={product.name}
                      className={`border-b p-4 text-center ${
                        index === yourProductIndex
                          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                          : "border-[var(--color-border)]"
                      }`}
                    >
                      {product.logo ? (
                        <img
                          src={product.logo}
                          alt={product.name}
                          className={`mx-auto h-6 w-auto ${
                            index !== yourProductIndex ? "opacity-60 grayscale" : ""
                          }`}
                        />
                      ) : (
                        <span
                          className={`text-sm font-semibold ${
                            index === yourProductIndex
                              ? "text-[var(--color-accent)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          {product.name}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={feature.name}>
                    <td className="border-b border-[var(--color-border-subtle)] p-4">
                      <p className="text-sm font-medium text-[var(--color-fg)]">{feature.name}</p>
                      {feature.description && (
                        <p className="mt-1 text-xs text-[var(--color-muted)]">
                          {feature.description}
                        </p>
                      )}
                    </td>
                    {feature.values.map((value, index) => (
                      <td
                        key={index}
                        className={`border-b p-4 text-center ${
                          index === yourProductIndex
                            ? "border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]"
                            : "border-[var(--color-border-subtle)]"
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <CellValue value={value} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
