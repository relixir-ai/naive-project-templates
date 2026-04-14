"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { GlowEdge } from "../shared/primitives/GlowEdge";
import { GridOverlay } from "../shared/primitives/GridOverlay";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "pricing",
  variant: "cards",
  purpose: "Tiered plan cards with a single recommended option and scoped feature lists",
  tone: ["commercial", "clear", "structured"],
  density: "medium",
  geometry: "grid",
  industries: ["ai-saas", "developer-tools", "operations", "b2b-saas"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["social-proof/stats", "how-it-works/numbered-steps"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface PricingPlan {
  name: string;
  price: string;
  cadence?: string;
  summary: string;
  features: string[];
  cta: { text: string; href: string };
  featured?: boolean;
}

interface PricingCardsProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  plans: PricingPlan[];
}

export function PricingCards({ id, eyebrow, heading, intro, plans }: PricingCardsProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-12">
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

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden flex h-full flex-col rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-2)] transition-shadow hover:shadow-[var(--shadow-3)] ${
                  plan.featured
                    ? "border-[var(--color-accent)] bg-[var(--color-panel-solid)] lg:-my-4 lg:py-10"
                    : "border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)]"
                }`}
              >
                <GridOverlay size={36} />
                <NoiseOverlay blend="screen" opacity={plan.featured ? 0.02 : 0.012} />
                {plan.featured ? <GlowEdge edge="top" /> : null}

                <div className="relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                      {plan.name}
                    </h3>
                    {plan.featured ? (
                      <span className="rounded-full bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="font-heading text-4xl font-semibold tracking-[-0.04em]">{plan.price}</p>
                    {plan.cadence ? (
                      <p className="pb-1 text-sm text-[var(--color-subtle)]">
                        {plan.cadence}
                      </p>
                    ) : null}
                  </div>
                  <div className="max-w-[12rem]">
                    <TraceLine delay={0.1} duration={3 + plans.indexOf(plan) * 0.3} />
                  </div>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {plan.summary}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                  {plan.features.map((feature) => (
                    <li key={`${plan.name}-${feature}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink
                    href={plan.cta.href}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta.text}
                  </ButtonLink>
                </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
