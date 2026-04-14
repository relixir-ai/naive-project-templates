"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "faq",
  variant: "categorized",
  purpose: "FAQ section with category tabs and expandable questions",
  tone: ["comprehensive", "organized", "helpful"],
  density: "high",
  geometry: "stack",
  industries: ["b2b-saas", "services", "fintech", "operations"],
  artDirections: ["enterprise-trust", "product-demo"],
  disallowedAdjacencies: ["faq/accordion"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  faqs: FAQ[];
}

interface CategorizedFAQProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  categories: FAQCategory[];
}

export function CategorizedFAQ({
  id,
  eyebrow,
  heading,
  intro,
  categories,
}: CategorizedFAQProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenIndices(new Set());
  };

  const currentFaqs = categories[activeCategory]?.faqs || [];

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

          <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Category tabs - vertical on desktop, horizontal on mobile */}
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {categories.map((category, index) => (
                <button
                  type="button"
                  key={category.name}
                  onClick={() => handleCategoryChange(index)}
                  className={`rounded-[var(--radius-md)] px-4 py-2.5 text-left text-sm font-medium transition-all lg:w-full ${
                    index === activeCategory
                      ? "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]"
                      : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-fg)]"
                  }`}
                >
                  {category.name}
                  <span
                    className={`ml-2 text-xs ${
                      index === activeCategory
                        ? "text-[var(--color-accent-foreground)]/70"
                        : "text-[var(--color-subtle)]"
                    }`}
                  >
                    ({category.faqs.length})
                  </span>
                </button>
              ))}
            </div>

            {/* FAQ list */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="divide-y divide-[var(--color-border)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  {currentFaqs.map((faq, index) => {
                    const isOpen = openIndices.has(index);
                    return (
                      <div key={index} className="p-5">
                        <button
                          type="button"
                          onClick={() => toggle(index)}
                          className="flex w-full items-center justify-between gap-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-heading text-base font-semibold text-[var(--color-fg)]">
                            {faq.question}
                          </h3>
                          <motion.svg
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="h-5 w-5 flex-shrink-0 text-[var(--color-muted)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="pt-3 text-sm leading-7 text-[var(--color-muted)]">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
