"use client";

import { Container } from "../shared/primitives/Container";
import { TraceLine } from "../shared/primitives/TraceLine";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "footer",
  variant: "minimal",
  purpose: "Compact footer with company note and a small link set",
  tone: ["restrained", "clean"],
  density: "low",
  geometry: "split",
  industries: ["developer-tools", "fintech", "publishing", "services"],
  artDirections: ["editorial", "product-demo", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: [],
  tokensRequired: ["color-bg", "color-fg", "color-border", "font-body"],
  estimatedHeight: "small",
} as const satisfies SectionMeta;

interface FooterLink {
  label: string;
  href: string;
}

interface MinimalFooterProps {
  companyName: string;
  description: string;
  links: FooterLink[];
}

export function MinimalFooter({ companyName, description, links }: MinimalFooterProps) {
  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-8">
          <div className="max-w-40">
            <TraceLine duration={3.6} delay={0.15} />
          </div>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-2">
            <p className="font-heading text-lg font-semibold">{companyName}</p>
            <p className="max-w-md text-sm leading-6 text-[var(--color-muted)]">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
