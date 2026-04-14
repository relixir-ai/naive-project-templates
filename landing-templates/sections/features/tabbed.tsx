"use client";

import { useState } from "react";
import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { GlowEdge } from "../shared/primitives/GlowEdge";
import { GridOverlay } from "../shared/primitives/GridOverlay";
import { NoiseOverlay } from "../shared/primitives/NoiseOverlay";
import { Section } from "../shared/primitives/Section";
import { TraceLine } from "../shared/primitives/TraceLine";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "features",
  variant: "tabbed",
  purpose: "Tabbed feature narrative for products with a few distinct workflows or user jobs",
  tone: ["structured", "product-led", "focused"],
  density: "high",
  geometry: "split",
  industries: ["operations", "fintech", "ai-saas", "developer-tools"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["how-it-works/timeline", "pricing/table"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface TabItem {
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

interface FeaturesTabbedProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  tabs: TabItem[];
}

export function FeaturesTabbed({
  id,
  eyebrow,
  heading,
  intro,
  tabs,
}: FeaturesTabbedProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex] ?? tabs[0];

  return (
    <Section id={id} className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container className="relative z-10">
        <div className="space-y-10">
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

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-3">
              {tabs.map((tab, index) => {
                const activeTab = index === activeIndex;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group w-full overflow-hidden rounded-[var(--radius-lg)] border px-5 py-4 text-left transition-[border-color,background-color,transform,box-shadow] duration-[var(--duration-base)] ${
                      activeTab
                        ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-surface)_90%,transparent)] shadow-[var(--shadow-2)]"
                        : "border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-panel-solid)_56%,transparent)] hover:border-[var(--color-border)] hover:bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="font-heading text-xl font-semibold tracking-[-0.03em]">{tab.label}</p>
                        <p className="text-sm leading-6 text-[var(--color-muted)]">{tab.description}</p>
                      </div>
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full transition-colors ${
                          activeTab ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)] group-hover:bg-[var(--color-accent-soft)]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={active.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel-solid)] shadow-[var(--shadow-3)]"
            >
              <GridOverlay size={30} />
              <NoiseOverlay blend="screen" opacity={0.02} />
              <GlowEdge edge="top" />

              <div className="relative z-10 border-b border-[var(--color-border-subtle)] px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{active.label}</p>
                    <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em]">{active.title}</h3>
                  </div>
                  <div className="min-w-28 text-right">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">Current mode</p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-fg)]">Live</p>
                  </div>
                </div>
                <div className="mt-5">
                  <TraceLine delay={0.12} duration={3.1} />
                </div>
              </div>

              <div className="relative z-10 grid gap-8 px-6 py-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <p className="max-w-prose text-sm leading-7 text-[var(--color-muted)]">{active.description}</p>
                  <ul className="space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                    {active.bullets.map((bullet) => (
                      <li key={`${active.label}-${bullet}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] p-5 shadow-[var(--shadow-1)]">
                  {active.bullets.slice(0, 3).map((bullet, index) => (
                    <div
                      key={bullet}
                      className="flex items-start justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                          Step {index + 1}
                        </p>
                        <p className="text-sm text-[var(--color-fg)]">{bullet}</p>
                      </div>
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
