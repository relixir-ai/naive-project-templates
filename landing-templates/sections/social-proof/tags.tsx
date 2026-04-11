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
  artDirections: ["product-demo", "editorial", "enterprise-trust"],
  requiresProofType: null,
  disallowedAdjacencies: ["social-proof/logos"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface TagsProofProps {
  label: string;
  tags: string[];
}

export function TagsProof({ label, tags }: TagsProofProps) {
  return (
    <Section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="shrink-0 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {label}
            </p>
            <div className="w-full max-w-xl">
              <TraceLine duration={3.8} delay={0.15} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-fg)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
