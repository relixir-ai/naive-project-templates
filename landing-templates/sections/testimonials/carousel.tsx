"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "../shared/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "testimonials",
  variant: "carousel",
  purpose: "Refined testimonial carousel with elegant transitions and trace line",
  tone: ["professional", "trustworthy", "calm"],
  density: "medium",
  geometry: "split",
  industries: ["b2b-saas", "fintech", "enterprise", "developer-tools"],
  artDirections: ["enterprise-trust", "product-demo", "editorial"],
  disallowedAdjacencies: ["testimonials/wall-of-love"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

export function TestimonialCarousel({
  id,
  eyebrow = "Real voices",
  heading = "Don't take our word for it",
  testimonials,
  autoplayInterval = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplayInterval === 0 || testimonials.length <= 1) return;
    const timer = setInterval(next, autoplayInterval);
    return () => clearInterval(timer);
  }, [next, autoplayInterval, testimonials.length]);

  return (
    <Section id={id} className="bg-[var(--color-bg)] relative py-24">
      <TraceLine />
      
      <Container>
        <div className="max-w-3xl mx-auto">
          {eyebrow && (
            <p className="uppercase tracking-[0.125em] text-xs text-[var(--color-accent)] mb-3 text-center">
              {eyebrow}
            </p>
          )}

          <h2 className="font-heading text-5xl sm:text-6xl font-semibold tracking-[-0.04em] text-center mb-16">
            {heading}
          </h2>

          <div className="relative h-[380px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.23, 1.0, 0.32, 1.0] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <blockquote className="text-2xl sm:text-3xl leading-tight font-light text-balance max-w-2xl text-[var(--color-fg)] mb-12">
                  “{testimonials[activeIndex].quote}”
                </blockquote>

                <div className="flex items-center gap-4">
                  {testimonials[activeIndex].avatar && (
                    <div className="w-11 h-11 rounded-2xl overflow-hidden ring-1 ring-[var(--color-border)]">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-[var(--color-muted)]">
                      {testimonials[activeIndex].role}
                      {testimonials[activeIndex].company && ` • ${testimonials[activeIndex].company}`}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-700 ${
                  idx === activeIndex 
                    ? "w-8 bg-[var(--color-accent)]" 
                    : "w-3 bg-[var(--color-border)]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
