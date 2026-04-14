"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "social-proof",
  variant: "tags",
  purpose: "Horizontal tag strip showing integrations, categories, or tech stack — no logo assets required",
  tone: ["neutral", "credible", "specific"],
  density: "low",
  geometry: "list",
  industries: ["developer-tools", "ai-saas", "b2b-saas", "operations", "fintech"],
  artDirections: ["product-demo", "editorial", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: ["social-proof/logos"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface TagsProofProps {
  id?: string;
  label: string;
  tags: string[];
}

export function TagsProof({ id, label, tags }: TagsProofProps) {
  return (
    <Section id={id} className="border-y border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="shrink-0 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {label}
            </p>
            <div className="w-full max-w-xl">
              <TraceLine duration={3.8} delay={0.15} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2" role="list" aria-label={label}>
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                role="listitem"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm font-medium text-[var(--color-fg)] shadow-[var(--shadow-1)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
