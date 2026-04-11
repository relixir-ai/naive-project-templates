import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "how-it-works",
  variant: "timeline",
  purpose: "Sequential process timeline for onboarding, implementation, or delivery flows",
  tone: ["calm", "structured", "practical"],
  density: "medium",
  geometry: "split",
  industries: ["services", "operations", "fintech", "local-services"],
  artDirections: ["enterprise-trust", "editorial"],
  disallowedAdjacencies: ["features/tabbed", "pricing/table"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface TimelineItem {
  phase: string;
  title: string;
  description: string;
}

interface TimelineProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: TimelineItem[];
}

export function Timeline({ eyebrow, heading, intro, items }: TimelineProps) {
  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl space-y-3">
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

          <ol className="space-y-6 border-l border-[var(--color-border)] pl-6">
            {items.map((item) => (
              <li key={item.phase} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{item.phase}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 max-w-prose text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
