import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "how-it-works",
  variant: "numbered-steps",
  purpose: "Three-step process explanation with explicit sequence and action cues",
  tone: ["direct", "structured", "practical"],
  density: "medium",
  geometry: "stack",
  industries: ["ai-saas", "developer-tools", "operations", "services"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["features/alternating-rows", "pricing/cards"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface StepItem {
  title: string;
  description: string;
}

interface NumberedStepsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: StepItem[];
}

export function NumberedSteps({
  eyebrow,
  heading,
  intro,
  steps,
}: NumberedStepsProps) {
  return (
    <Section className="bg-[var(--color-surface)] text-[var(--color-fg)]">
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

          <ol className="grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
