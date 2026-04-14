"use client";

import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "hero",
  variant: "custom",
  purpose: "Loose hero scaffold for brand-shaped compositions when preset heroes feel too formulaic",
  tone: ["distinctive", "brand-shaped", "flexible"],
  density: "medium",
  geometry: "split",
  industries: ["publishing", "developer-tools", "fintech", "b2b-saas", "consumer", "wellness"],
  artDirections: ["editorial", "product-demo", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: [],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-accent", "color-border", "color-subtle", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface HeroCustomProps {
  eyebrow?: string;
  kicker?: string;
  headline: string;
  highlight?: string;
  subhead: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  supportingPoints?: string[];
  layout?: "auto" | "single-column" | "split";
  motionProfile?:
    | "minimal-fade"
    | "staggered-entrance"
    | "trace-draw"
    | "media-reveal"
    | "proof-rise";
  media?: {
    type: "image" | "placeholder";
    src?: string;
    alt?: string;
    caption?: string;
  };
  aside?: {
    label?: string;
    title?: string;
    body?: string;
    proof?: string[];
  };
}

export function HeroCustom({
  eyebrow,
  kicker,
  headline,
  highlight,
  subhead,
  primaryCta,
  secondaryCta,
  supportingPoints = [],
  layout = "auto",
  motionProfile = "staggered-entrance",
  media,
  aside,
}: HeroCustomProps) {
  const hasAside = Boolean(aside?.label || aside?.title || aside?.body || aside?.proof?.length);
  const hasMedia = Boolean(media?.type);
  const useSplit = layout === "split" || (layout === "auto" && (hasAside || hasMedia));
  const heroMotion = getHeroMotion(motionProfile);
  const mediaMotion = motionProfile === "media-reveal" ? heroMotion.media : heroMotion.card;
  const asideMotion = motionProfile === "proof-rise" ? heroMotion.proof : heroMotion.card;

  return (
    <Section className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <NoiseOverlay blend="multiply" opacity={0.018} />
      <Container className="relative z-10">
        <div
          className={
            useSplit
              ? "grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end"
              : "max-w-5xl"
          }
        >
          <div className="space-y-8">
            {eyebrow ? (
              <motion.p
                initial={heroMotion.eyebrow.initial}
                whileInView={heroMotion.eyebrow.whileInView}
                viewport={{ once: true, amount: 0.5 }}
                transition={heroMotion.eyebrow.transition}
                className="text-xs uppercase tracking-[0.26em] text-[var(--color-accent)]"
              >
                {eyebrow}
              </motion.p>
            ) : null}

            <div className="space-y-5">
              {kicker ? (
                <p className="max-w-md text-sm uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  {kicker}
                </p>
              ) : null}
              <motion.h1
                initial={heroMotion.headline.initial}
                whileInView={heroMotion.headline.whileInView}
                viewport={{ once: true, amount: 0.3 }}
                transition={heroMotion.headline.transition}
                className="max-w-5xl font-heading text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.95]"
              >
                {headline}
                {highlight ? (
                  <>
                    {" "}
                    <span className="text-[var(--color-accent)]">{highlight}</span>
                  </>
                ) : null}
              </motion.h1>
              <motion.p
                initial={heroMotion.subhead.initial}
                whileInView={heroMotion.subhead.whileInView}
                viewport={{ once: true, amount: 0.4 }}
                transition={heroMotion.subhead.transition}
                className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
              >
                {subhead}
              </motion.p>
            </div>

            <motion.div
              initial={heroMotion.cta.initial}
              whileInView={heroMotion.cta.whileInView}
              viewport={{ once: true, amount: 0.5 }}
              transition={heroMotion.cta.transition}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <ButtonLink href={primaryCta.href}>{primaryCta.text}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.text}
                </ButtonLink>
              ) : null}
            </motion.div>

            {supportingPoints.length ? (
              <motion.ul
                initial={heroMotion.support.initial}
                whileInView={heroMotion.support.whileInView}
                viewport={{ once: true, amount: 0.5 }}
                transition={heroMotion.support.transition}
                className={`grid gap-3 pt-2 text-sm text-[var(--color-subtle)] sm:grid-cols-2 ${useSplit ? "" : "max-w-3xl"}`}
              >
                {supportingPoints.slice(0, 4).map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </div>

          {useSplit ? (
            <motion.aside
              initial={asideMotion.initial}
              whileInView={asideMotion.whileInView}
              viewport={{ once: true, amount: 0.35 }}
              transition={asideMotion.transition}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-2)] lg:p-8"
            >
              <div className="space-y-5">
                <div className="max-w-28">
                  <TraceLine
                    delay={motionProfile === "trace-draw" ? 0.22 : 0.12}
                    duration={motionProfile === "trace-draw" ? 4.2 : 3.4}
                  />
                </div>

                {media?.type === "image" && media.src ? (
                  <motion.figure
                    initial={mediaMotion.initial}
                    whileInView={mediaMotion.whileInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={mediaMotion.transition}
                    className="space-y-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={media.src}
                      alt={media.alt ?? ""}
                      className="aspect-[4/3] w-full rounded-[calc(var(--radius-card)-0.5rem)] object-cover"
                    />
                    {media.caption ? (
                      <figcaption className="text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                        {media.caption}
                      </figcaption>
                    ) : null}
                  </motion.figure>
                ) : media?.type === "placeholder" ? (
                  <motion.figure
                    data-placeholder="true"
                    initial={mediaMotion.initial}
                    whileInView={mediaMotion.whileInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={mediaMotion.transition}
                    className="space-y-3 rounded-[calc(var(--radius-card)-0.5rem)] border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4"
                  >
                    <div className="aspect-[4/3] rounded-[calc(var(--radius-card)-0.75rem)] bg-[var(--color-surface)]" />
                    <figcaption className="text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                      {media.caption ?? "REPLACE: hero visual"}
                    </figcaption>
                  </motion.figure>
                ) : null}

                {aside?.label ? (
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    {aside.label}
                  </p>
                ) : null}

                {aside?.title ? (
                  <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em]">
                    {aside.title}
                  </h2>
                ) : null}

                {aside?.body ? (
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {aside.body}
                  </p>
                ) : null}

                {aside?.proof?.length ? (
                  <motion.div
                    initial={heroMotion.proof.initial}
                    whileInView={heroMotion.proof.whileInView}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={heroMotion.proof.transition}
                    className="grid gap-3 border-t border-[var(--color-border)] pt-5 text-sm"
                  >
                    {aside.proof.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                        />
                        <span className="text-[var(--color-subtle)]">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                ) : null}
              </div>
            </motion.aside>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

function getHeroMotion(
  motionProfile: NonNullable<HeroCustomProps["motionProfile"]>,
) {
  const ease = [0.16, 1, 0.3, 1] as const;
  const base = {
    eyebrow: {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.42, ease: "easeOut" as const },
    },
    headline: {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.64, ease },
    },
    subhead: {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.54, ease, delay: 0.08 },
    },
    cta: {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.52, ease, delay: 0.14 },
    },
    support: {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.18 },
    },
    card: {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.58, ease, delay: 0.12 },
    },
    media: {
      initial: { opacity: 0, scale: 0.98, y: 12 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.62, ease, delay: 0.12 },
    },
    proof: {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease, delay: 0.18 },
    },
  };

  if (motionProfile === "minimal-fade") {
    return {
      ...base,
      eyebrow: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3, ease: "easeOut" as const },
      },
      headline: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.42, ease: "easeOut" as const },
      },
      subhead: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.38, ease: "easeOut" as const, delay: 0.05 },
      },
      cta: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.34, ease: "easeOut" as const, delay: 0.08 },
      },
      support: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.32, ease: "easeOut" as const, delay: 0.1 },
      },
      card: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.36, ease: "easeOut" as const, delay: 0.08 },
      },
      media: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.08 },
      },
      proof: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.34, ease: "easeOut" as const, delay: 0.1 },
      },
    };
  }

  if (motionProfile === "trace-draw") {
    return {
      ...base,
      eyebrow: {
        initial: { opacity: 0, x: -8 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.38, ease: "easeOut" as const },
      },
      headline: {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.56, ease },
      },
      proof: {
        initial: { opacity: 0, x: 10 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.46, ease, delay: 0.2 },
      },
    };
  }

  if (motionProfile === "media-reveal") {
    return {
      ...base,
      card: {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.58, ease, delay: 0.14 },
      },
      media: {
        initial: { opacity: 0, scale: 0.94, clipPath: "inset(8% 8% 8% 8% round 1.5rem)" },
        whileInView: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" },
        transition: { duration: 0.7, ease, delay: 0.14 },
      },
    };
  }

  if (motionProfile === "proof-rise") {
    return {
      ...base,
      card: {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.54, ease, delay: 0.12 },
      },
      proof: {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.48, ease, delay: 0.22 },
      },
    };
  }

  return base;
}
