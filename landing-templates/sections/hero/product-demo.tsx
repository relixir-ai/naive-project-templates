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
  family: "hero",
  variant: "product-demo",
  purpose: "Product-forward hero with ambient surface panel and single CTA",
  tone: ["direct", "technical", "product-led"],
  density: "high",
  geometry: "split",
  industries: ["developer-tools", "ai-saas", "operations", "open-source"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["social-proof/pull-quote"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

type HeroProductDemoMedia =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "ui-mock"; caption?: string }
  | { type: "ambient"; caption?: string };

interface HeroProductDemoProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  proofLine?: string;
  /**
   * Right-panel content. Defaults to `{ type: "ui-mock" }` so the panel is
   * never empty. Pass `{ type: "image", src, alt }` for real artwork, or
   * `{ type: "ambient" }` to explicitly opt in to the atmospheric-only look.
   */
  media?: HeroProductDemoMedia;
}

export function HeroProductDemo({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  proofLine,
  media = { type: "ui-mock" },
}: HeroProductDemoProps) {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 78% 18%, var(--color-accent-soft) 0, transparent 34%), radial-gradient(circle at 18% 82%, rgba(125, 232, 255, 0.05) 0, transparent 28%)",
        }}
      />
      <GridOverlay size={40} />
      <NoiseOverlay blend="screen" opacity={0.024} />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-accent)]">
                  {eyebrow}
                </p>
              ) : null}
              <div className="max-w-xs">
                <TraceLine duration={3.4} />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-heading text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                {headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {subhead}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.text}
                </ButtonLink>
              ) : null}
            </div>
            {proofLine ? (
              <p className="text-sm text-[var(--color-subtle)]">{proofLine}</p>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute inset-8 rounded-full blur-3xl"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, rgba(125, 232, 255, 0.14) 0%, rgba(125, 232, 255, 0.02) 50%, transparent 72%)",
              }}
            />
            <div
              data-placeholder={media.type !== "image" ? "true" : undefined}
              className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel-solid)] shadow-[var(--shadow-3)]"
            >
              <GlowEdge edge="top" />
              <GridOverlay size={28} />
              <NoiseOverlay blend="screen" opacity={0.02} />

              {media.type === "image" ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {media.caption ? (
                    <figcaption className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-white">
                      {media.caption}
                    </figcaption>
                  ) : null}
                </>
              ) : media.type === "ambient" ? (
                <>
                  {/* Accent glow center */}
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="h-48 w-48 rounded-full blur-[80px]"
                      style={{ background: "var(--color-accent-soft)" }}
                    />
                  </div>

                  {/* Horizontal trace lines */}
                  <div className="absolute inset-x-0 top-[38%] z-10 px-8">
                    <TraceLine duration={3.1} delay={0.2} />
                  </div>
                  <div className="absolute inset-x-0 top-[58%] z-10 px-8">
                    <TraceLine duration={4.2} delay={1.1} />
                  </div>
                  {media.caption ? (
                    <figcaption
                      data-placeholder="true"
                      className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-white"
                    >
                      {media.caption}
                    </figcaption>
                  ) : null}
                </>
              ) : (
                <>
                  {/* ui-mock: abstract bars and accent shapes. No fake numbers or text. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="h-40 w-40 rounded-full blur-[72px]"
                      style={{ background: "var(--color-accent-soft)" }}
                    />
                  </div>
                  <div className="absolute inset-x-0 top-10 z-10 space-y-3 px-8">
                    <div className="h-2 w-1/3 rounded-full bg-[var(--color-border)]" />
                    <div className="h-2 w-1/2 rounded-full bg-[var(--color-border)]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-10 z-10 space-y-3 px-8">
                    <div className="h-2 w-2/3 rounded-full bg-[var(--color-border)]" />
                    <div className="h-2 w-1/4 rounded-full bg-[var(--color-accent)] opacity-70" />
                  </div>
                  <div className="absolute inset-x-0 top-[46%] z-10 px-8">
                    <TraceLine duration={3.1} delay={0.2} />
                  </div>
                  <figcaption
                    data-placeholder="true"
                    className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-white"
                  >
                    {media.caption ?? "REPLACE: product UI mock"}
                  </figcaption>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
