"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "integrations",
  variant: "filterable",
  purpose: "Searchable and categorized integration grid",
  tone: ["comprehensive", "organized", "interactive"],
  density: "high",
  geometry: "grid",
  industries: ["developer-tools", "ai-saas", "b2b-saas", "operations"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["integrations/logo-grid"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

interface Integration {
  name: string;
  logo: string;
  category: string;
  description?: string;
  href?: string;
}

interface FilterableIntegrationsProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  integrations: Integration[];
  searchPlaceholder?: string;
}

export function FilterableIntegrations({
  id,
  eyebrow,
  heading,
  intro,
  integrations,
  searchPlaceholder = "Search integrations...",
}: FilterableIntegrationsProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(integrations.map((i) => i.category));
    return Array.from(cats).sort();
  }, [integrations]);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch =
        !search ||
        integration.name.toLowerCase().includes(search.toLowerCase()) ||
        integration.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        !activeCategory || integration.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [integrations, search, activeCategory]);

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

          {/* Search and filters */}
          <div className="space-y-4">
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] py-3 pl-12 pr-4 text-sm text-[var(--color-fg)] placeholder-[var(--color-muted)] outline-none transition-colors focus:border-[var(--color-accent)]"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  !activeCategory
                    ? "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]"
                      : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredIntegrations.map((integration) => {
                const Card = (
                  <motion.div
                    key={integration.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-2)]"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-surface-2)]">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[var(--color-fg)] truncate">
                        {integration.name}
                      </p>
                      <p className="text-xs text-[var(--color-accent)]">
                        {integration.category}
                      </p>
                      {integration.description && (
                        <p className="mt-1 text-sm text-[var(--color-muted)] line-clamp-2">
                          {integration.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );

                if (integration.href) {
                  return (
                    <a
                      key={integration.name}
                      href={integration.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {Card}
                    </a>
                  );
                }

                return Card;
              })}
            </AnimatePresence>
          </div>

          {filteredIntegrations.length === 0 && (
            <p className="text-center text-[var(--color-muted)]">
              No integrations found matching your criteria.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
