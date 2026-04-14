"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "integrations",
  variant: "logo-grid",
  purpose: "Static grid of integration or partner logos",
  tone: ["credible", "connected", "comprehensive"],
  density: "medium",
  geometry: "grid",
  industries: ["developer-tools", "ai-saas", "b2b-saas", "operations", "fintech"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["social-proof/logos", "integrations/filterable"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface Integration {
  name: string;
  logo: string;
  category?: string;
  href?: string;
}

interface LogoGridProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  integrations: Integration[];
  columns?: 3 | 4 | 5 | 6;
}

export function LogoGrid({
  id,
  eyebrow,
  heading,
  intro,
  integrations,
  columns = 4,
}: LogoGridProps) {
  const colsClass = {
    3: "sm:grid-cols-2 md:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  }[columns];

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3 mx-auto text-center">
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

          <div className={`grid gap-4 ${colsClass}`}>
            {integrations.map((integration, index) => {
              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-2)]"
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-10 w-auto grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <p className="mt-3 text-sm font-medium text-[var(--color-muted)] group-hover:text-[var(--color-fg)]">
                    {integration.name}
                  </p>
                  {integration.category && (
                    <p className="mt-1 text-xs text-[var(--color-subtle)]">
                      {integration.category}
                    </p>
                  )}
                </motion.div>
              );

              if (integration.href) {
                return (
                  <a
                    key={integration.name}
                    href={integration.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={integration.name}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
