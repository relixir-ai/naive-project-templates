"use client";

import { useState } from "react";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
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
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-display", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface TabItem {
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

interface FeaturesTabbedProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  tabs: TabItem[];
}

export function FeaturesTabbed({
  eyebrow,
  heading,
  intro,
  tabs,
}: FeaturesTabbedProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex] ?? tabs[0];

  return (
    <Section className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {heading}
            </h2>
            {intro ? (
              <p className="text-base leading-7 text-[color-mix(in_srgb,var(--color-fg)_74%,white)]">
                {intro}
              </p>
            ) : null}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-2">
              {tabs.map((tab, index) => {
                const activeTab = index === activeIndex;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-[var(--radius-card)] border px-5 py-4 text-left transition-colors ${
                      activeTab
                        ? "border-[var(--color-accent)] bg-[var(--color-surface)]"
                        : "border-[var(--color-border)] bg-transparent"
                    }`}
                  >
                    <p className="font-heading text-xl font-semibold tracking-[-0.03em]">{tab.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_68%,white)]">
                      {tab.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{active.label}</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em]">
                {active.title}
              </h3>
              <p className="mt-4 max-w-prose text-sm leading-7 text-[color-mix(in_srgb,var(--color-fg)_72%,white)]">
                {active.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[color-mix(in_srgb,var(--color-fg)_78%,white)]">
                {active.bullets.map((bullet) => (
                  <li key={`${active.label}-${bullet}`} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
