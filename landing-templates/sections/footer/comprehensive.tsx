import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "footer",
  variant: "comprehensive",
  purpose: "Multi-column footer for products that need nav depth, legal links, or contact paths",
  tone: ["structured", "grounded", "complete"],
  density: "medium",
  geometry: "grid",
  industries: ["developer-tools", "fintech", "ai-saas", "operations"],
  artDirections: ["product-demo", "enterprise-trust", "editorial"],
  disallowedAdjacencies: ["cta/full-bleed"],
  tokensRequired: ["color-fg", "color-bg", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

interface ComprehensiveFooterProps {
  brand: string;
  description: string;
  groups: FooterGroup[];
  legalLinks?: FooterLink[];
}

export function ComprehensiveFooter({
  brand,
  description,
  groups,
  legalLinks = [],
}: ComprehensiveFooterProps) {
  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-4">
            <p className="font-heading text-2xl font-semibold tracking-[-0.03em]">{brand}</p>
            <p className="max-w-sm text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_70%,white)]">
              {description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {group.title}
                </p>
                <ul className="space-y-3 text-sm text-[color-mix(in_srgb,var(--color-fg)_76%,white)]">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a href={link.href} className="transition-opacity hover:opacity-70">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {legalLinks.length > 0 ? (
          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[color-mix(in_srgb,var(--color-fg)_64%,white)] sm:flex-row sm:flex-wrap">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
