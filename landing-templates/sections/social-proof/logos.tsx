import { Container } from "../shared/primitives/Container";
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
    <Section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-6">
          <p className="text-center text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {label}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) =>
              logo.src ? (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.alt ?? logo.name}
                  className="h-6 w-auto opacity-60 grayscale transition-opacity hover:opacity-100"
                />
              ) : (
                <span
                  key={logo.name}
                  className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]"
                >
                  {logo.name}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
