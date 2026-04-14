"use client";

import { motion } from "@/lib/motion";
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
  artDirections: ["editorial", "product-demo", "enterprise-trust", "neubrutalist"],
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
  href?: string;
}

interface LogosProofProps {
  id?: string;
  label: string;
  logos: LogoItem[];
}

export function LogosProof({ id, label, logos }: LogosProofProps) {
  return (
    <Section id={id} className="border-y border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {label}
            </p>
            <div className="w-full max-w-xl">
              <TraceLine duration={3.4} delay={0.1} />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label={label}>
            {logos.map((logo, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex min-h-20 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 shadow-[var(--shadow-1)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]"
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.alt ?? logo.name}
                      className="h-7 w-auto opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-fg)]">
                      {logo.name}
                    </span>
                  )}
                </motion.div>
              );

              if (logo.href) {
                return (
                  <a
                    key={logo.name}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={logo.name} role="listitem">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
