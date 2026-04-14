"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import { BrowserFrame } from "../shared/primitives/BrowserFrame";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "demo",
  variant: "browser-frame",
  purpose: "Product demo with browser chrome mockup and step-based navigation",
  tone: ["product-led", "interactive", "visual"],
  density: "high",
  geometry: "split",
  industries: ["developer-tools", "ai-saas", "b2b-saas", "operations"],
  artDirections: ["product-demo"],
  disallowedAdjacencies: ["demo/screenshot-carousel", "hero/product-demo"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface DemoStep {
  title: string;
  description: string;
  screenshot: string;
  /** Optional annotation callouts */
  annotations?: {
    x: string;
    y: string;
    text: string;
  }[];
}

interface BrowserFrameDemoProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  url?: string;
  steps: DemoStep[];
}

export function BrowserFrameDemo({
  id,
  eyebrow,
  heading,
  intro,
  url = "app.example.com",
  steps,
}: BrowserFrameDemoProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
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

          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
            {/* Step tabs */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-[var(--radius-md)] border p-4 text-left transition-all ${
                    index === activeStep
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                        index === activeStep
                          ? "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]"
                          : "bg-[var(--color-surface-2)] text-[var(--color-muted)]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        index === activeStep
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-fg)]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <p className="mt-2 pl-9 text-sm text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Browser frame with screenshot */}
            <div>
              <BrowserFrame url={url}>
                <div className="relative aspect-[16/10] bg-[var(--color-surface-2)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={steps[activeStep].screenshot}
                        alt={steps[activeStep].title}
                        className="h-full w-full object-cover"
                      />
                      {/* Annotations */}
                      {steps[activeStep].annotations?.map((annotation, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="absolute flex items-center gap-2"
                          style={{ left: annotation.x, top: annotation.y }}
                        >
                          <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                          </span>
                          <span className="rounded-md bg-[var(--color-panel-solid)] border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-fg)] shadow-[var(--shadow-2)]">
                            {annotation.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
