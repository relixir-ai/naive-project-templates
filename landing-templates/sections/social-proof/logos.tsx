import { Container } from "../shared/primitives/Container";
import { TraceLine } from "../shared/primitives/TraceLine";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "social-proof",
  variant: "logos",
  purpose: "Low-noise proof strip for trusted logos or named customers",
  tone: ["credible", "calm"],
  density: "low",
  geometry: "open",
  industries: ["developer-tools", "fintech", "b2b-saas", "services"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  requiresProofType: "logos",
  disallowedAdjacencies: ["social-proof/stats"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface LogoItem {
  name: string;
  /** Optional image URL. When provided, renders as <img>. Falls back to styled text. */
  src?: string;
  alt?: string;
}

interface LogosProofProps {
  label: string;
  logos: LogoItem[];
}

export function LogosProof({ label, logos }: LogosProofProps) {
  return (
    <Section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {label}
            </p>
            <div className="w-full max-w-xl">
              <TraceLine duration={3.4} delay={0.1} />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {logos.map((logo) =>
              logo.src ? (
                <div key={logo.name} className="flex min-h-20 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-panel-solid)_78%,transparent)] px-5 py-4 shadow-[var(--shadow-1)]">
                  <img
                    src={logo.src}
                    alt={logo.alt ?? logo.name}
                    className="h-6 w-auto opacity-60 grayscale transition-opacity hover:opacity-100"
                  />
                </div>
              ) : (
                <div
                  key={logo.name}
                  className="flex min-h-20 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-panel-solid)_78%,transparent)] px-5 py-4 text-center text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-muted)] shadow-[var(--shadow-1)]"
                >
                  {logo.name}
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
