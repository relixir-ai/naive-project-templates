"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "demo",
  variant: "screenshot-carousel",
  purpose: "Annotated screenshot carousel with navigation dots and tooltips",
  tone: ["product-led", "visual", "descriptive"],
  density: "medium",
  geometry: "open",
  industries: ["developer-tools", "ai-saas", "b2b-saas", "operations", "marketplaces"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["demo/browser-frame"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
  tooltips?: {
    x: string;
    y: string;
    text: string;
  }[];
}

interface ScreenshotCarouselProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  screenshots: Screenshot[];
  /** Autoplay interval in ms, 0 to disable */
  autoplayInterval?: number;
}

export function ScreenshotCarousel({
  id,
  eyebrow,
  heading,
  intro,
  screenshots,
  autoplayInterval = 0,
}: ScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (autoplayInterval > 0 && !prefersReducedMotion) {
      autoplayRef.current = setInterval(goNext, autoplayInterval);
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }
  }, [autoplayInterval, goNext, prefersReducedMotion]);

  const current = screenshots[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3 mx-auto text-center">
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
          </div>

          {/* Screenshot viewer */}
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-3)]">
            <div className="relative aspect-[16/9]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={prefersReducedMotion ? {} : variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="h-full w-full object-cover"
                  />
                  {/* Tooltips */}
                  {current.tooltips?.map((tooltip, i) => (
                    <div
                      key={i}
                      className="group absolute"
                      style={{ left: tooltip.x, top: tooltip.y }}
                    >
                      <div className="relative flex h-5 w-5 cursor-pointer items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-50" />
                        <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-[var(--color-accent-foreground)]">
                          {i + 1}
                        </span>
                      </div>
                      <div className="pointer-events-none absolute left-6 top-0 z-20 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="whitespace-nowrap rounded-md bg-[var(--color-panel-solid)] border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-fg)] shadow-[var(--shadow-2)]">
                          {tooltip.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            {current.caption && (
              <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] px-6 py-4">
                <p className="text-sm text-[var(--color-muted)]">{current.caption}</p>
              </div>
            )}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[var(--color-accent)]"
                    : "w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
