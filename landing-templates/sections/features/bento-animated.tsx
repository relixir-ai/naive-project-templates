"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { TiltCard } from "../shared/primitives/TiltCard";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "bento-animated",
  purpose: "Animated bento grid with Framer Motion stagger effects and optional 3D tilt",
  tone: ["modern", "product-led", "impressive"],
  density: "high",
  geometry: "grid",
  industries: ["developer-tools", "ai-saas", "operations", "marketplaces"],
  artDirections: ["product-demo", "editorial"],
  disallowedAdjacencies: ["features/bento", "features/asymmetric-grid"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

type GridSpan = "1x1" | "2x1" | "1x2" | "2x2";

interface FeatureCell {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  span?: GridSpan;
}

interface BentoAnimatedProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: FeatureCell[];
  /** Enable 3D tilt on hover (desktop only) */
  enableTilt?: boolean;
}

function getSpanClasses(span: GridSpan = "1x1"): string {
  switch (span) {
    case "2x1":
      return "md:col-span-2";
    case "1x2":
      return "md:row-span-2";
    case "2x2":
      return "md:col-span-2 md:row-span-2";
    default:
      return "";
  }
}

function FeatureCard({
  item,
  index,
  enableTilt,
}: {
  item: FeatureCell;
  index: number;
  enableTilt: boolean;
}) {
  const content = (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-[var(--shadow-2)] ${getSpanClasses(
        item.span
      )}`}
    >
      {/* Background image if present */}
      {item.image && (
        <div className="absolute inset-0">
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover opacity-20 transition-opacity group-hover:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        {item.icon && (
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-xl">
            {item.icon}
          </div>
        )}

        {/* Accent bar */}
        {!item.icon && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
            className="mb-4 h-1.5 rounded-full bg-[var(--color-accent)]"
          />
        )}

        <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[var(--color-fg)] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {item.description}
        </p>

        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.08 }}
          className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
        >
          Learn more
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.article>
  );

  if (enableTilt) {
    return (
      <TiltCard maxTilt={8} glare maxGlare={0.15} className={getSpanClasses(item.span)}>
        {content}
      </TiltCard>
    );
  }

  return content;
}

export function FeaturesBentoAnimated({
  id,
  eyebrow,
  heading,
  intro,
  items,
  enableTilt = false,
}: BentoAnimatedProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3"
          >
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro && (
              <p className="text-base leading-7 text-[var(--color-muted)]">{intro}</p>
            )}
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 auto-rows-fr">
            {items.map((item, index) => (
              <FeatureCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                enableTilt={enableTilt}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
