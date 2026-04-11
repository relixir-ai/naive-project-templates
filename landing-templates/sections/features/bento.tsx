import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "bento",
  purpose: "Asymmetric feature presentation with two dominant tiles and support cards",
  tone: ["specific", "product-led"],
  density: "medium",
  geometry: "grid",
  industries: ["developer-tools", "ai-saas", "operations", "marketplaces"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["features/asymmetric-grid"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface FeatureItem {
  title: string;
  description: string;
  emphasis?: "high" | "low";
}

interface FeaturesBentoProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: FeatureItem[];
}

export function FeaturesBento({ eyebrow, heading, intro, items }: FeaturesBentoProps) {
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
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_75%,white)]">
                {intro}
              </p>
            ) : null}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item, index) => {
              const large = item.emphasis === "high" || index === 0 || index === 3;
              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
                  className={large ? "md:col-span-2" : "md:col-span-1"}
                >
                  <article
                    className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                  >
                    <div className="mb-6 h-1.5 w-16 rounded-full bg-[var(--color-accent)]" />
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                      {item.description}
                    </p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
