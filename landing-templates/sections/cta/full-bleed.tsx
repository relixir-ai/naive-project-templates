import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { GlowEdge } from "../shared/primitives/GlowEdge";
import { GridOverlay } from "../shared/primitives/GridOverlay";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { ButtonLink } from "../shared/primitives/Button";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "cta",
  variant: "full-bleed",
  purpose: "Single decisive closing action with one dominant button",
  tone: ["focused", "high-contrast"],
  density: "medium",
  geometry: "split",
  industries: ["developer-tools", "fintech", "b2b-saas", "publishing"],
  artDirections: ["editorial", "product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["cta/inline"],
  tokensRequired: ["color-bg", "color-surface", "color-fg", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface FullBleedCtaProps {
  headline: string;
  subhead?: string;
  action: { text: string; href: string };
}

export function FullBleedCta({ headline, subhead, action }: FullBleedCtaProps) {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[calc(var(--radius-card)+4px)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-3)]"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 82% 18%, var(--color-accent-soft) 0, transparent 42%), linear-gradient(135deg, rgba(125, 232, 255, 0.03), transparent 46%)",
            }}
          />
          <GridOverlay size={42} />
          <NoiseOverlay blend="screen" opacity={0.02} />
          <GlowEdge edge="top" />

          <div className="relative z-10 grid gap-8 px-7 py-8 md:grid-cols-[1.5fr_0.85fr] md:items-end md:px-10 md:py-10">
            <div className="space-y-5">
              <div className="max-w-xs">
                <TraceLine delay={0.15} duration={3.2} />
              </div>
              <h2 className="max-w-3xl font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {headline}
              </h2>
              {subhead ? (
                <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">{subhead}</p>
              ) : null}
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-panel-solid)_82%,transparent)] p-3 shadow-[var(--shadow-1)]">
                <ButtonLink href={action.href}>{action.text}</ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
