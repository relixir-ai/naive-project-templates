"use client";
import type { ReactNode } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "testimonials",
  variant: "carousel",
  purpose: "Classic testimonial carousel with navigation dots and autoplay",
  tone: ["professional", "focused", "narrative"],
  density: "medium",
  geometry: "split",
  industries: ["b2b-saas", "services", "fintech", "operations"],
  artDirections: ["enterprise-trust", "editorial"],
  disallowedAdjacencies: ["testimonials/wall-of-love", "social-proof/pull-quote"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  logo?: string;
}

interface TestimonialCarouselProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  testimonials: Testimonial[];
  /** Autoplay interval in ms, 0 to disable */
  autoplayInterval?: number;
}

export function TestimonialCarousel({
  id,
  eyebrow,
  heading = "What our customers say",
  testimonials,
  autoplayInterval = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goTo = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || autoplayInterval === 0 || testimonials.length <= 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(next, autoplayInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [next, isAutoPlaying, autoplayInterval, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (testimonials.length === 0) return null;

  return (
    <Section id={id} className="bg-[var(--color-bg)] py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-5xl font-semibold tracking-[-0.04em] mb-12">
            {heading}
          </h2>

          <div 
            className="relative h-[380px] flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              >
                <div className="max-w-2xl">
                  <p className="text-2xl leading-relaxed text-[var(--color-fg)] mb-10 font-light">
                    “{testimonials[activeIndex].quote}”
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    {testimonials[activeIndex].avatar && (
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        className="w-12 h-12 rounded-full object-cover border border-[var(--color-border)]"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-[var(--color-fg)]">
                        {testimonials[activeIndex].author}
                      </p>
                      {(testimonials[activeIndex].role || testimonials[activeIndex].company) && (
                        <p className="text-sm text-[var(--color-muted)]">
                          {testimonials[activeIndex].role}
                          {testimonials[activeIndex].role && testimonials[activeIndex].company && " • "}
                          {testimonials[activeIndex].company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[var(--color-accent)] scale-125" 
                    : "bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
