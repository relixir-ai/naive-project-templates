"use client";

import { useState, useMemo } from "react";
import { motion } from "@/lib/motion";
import { ButtonLink } from "../shared/primitives/Button";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "pricing",
  variant: "slider",
  purpose: "Interactive pricing with draggable slider for seat/volume-based pricing",
  tone: ["interactive", "transparent", "personalized"],
  density: "medium",
  geometry: "split",
  industries: ["ai-saas", "developer-tools", "b2b-saas", "operations"],
  artDirections: ["product-demo", "enterprise-trust"],
  disallowedAdjacencies: ["pricing/cards", "pricing/table"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface PricingTier {
  minUnits: number;
  maxUnits: number;
  pricePerUnit: number;
}

interface PricingSliderProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  /** Label for the unit (e.g., "seats", "users", "API calls") */
  unitLabel: string;
  /** Minimum value on slider */
  min: number;
  /** Maximum value on slider */
  max: number;
  /** Default value */
  defaultValue?: number;
  /** Step increment */
  step?: number;
  /** Tiered pricing (optional - if not provided, uses flat rate) */
  tiers?: PricingTier[];
  /** Flat price per unit (used if no tiers) */
  pricePerUnit?: number;
  /** Features included at all levels */
  features?: string[];
  /** CTA button */
  cta: { text: string; href: string };
  /** Show annual discount toggle */
  showAnnualToggle?: boolean;
  /** Annual discount percentage */
  annualDiscount?: number;
}

export function PricingSlider({
  id,
  eyebrow,
  heading,
  intro,
  unitLabel,
  min,
  max,
  defaultValue,
  step = 1,
  tiers,
  pricePerUnit = 10,
  features,
  cta,
  showAnnualToggle = true,
  annualDiscount = 20,
}: PricingSliderProps) {
  const [value, setValue] = useState(defaultValue ?? Math.floor((min + max) / 2));
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = useMemo(() => {
    let basePrice: number;

    if (tiers && tiers.length > 0) {
      // Find the appropriate tier
      const tier = tiers.find((t) => value >= t.minUnits && value <= t.maxUnits);
      basePrice = tier ? value * tier.pricePerUnit : value * pricePerUnit;
    } else {
      basePrice = value * pricePerUnit;
    }

    if (isAnnual) {
      return basePrice * (1 - annualDiscount / 100);
    }
    return basePrice;
  }, [value, tiers, pricePerUnit, isAnnual, annualDiscount]);

  const sliderPercentage = ((value - min) / (max - min)) * 100;

  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container narrow>
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

          <div className="mx-auto max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-2)]">
            {/* Annual toggle */}
            {showAnnualToggle && (
              <div className="mb-8 flex items-center justify-center gap-4">
                <span
                  className={`text-sm ${
                    !isAnnual ? "font-semibold text-[var(--color-fg)]" : "text-[var(--color-muted)]"
                  }`}
                >
                  Monthly
                </span>
                <button
                  type="button"
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative h-6 w-12 rounded-full transition-colors ${
                    isAnnual ? "bg-[var(--color-accent)]" : "bg-[var(--color-surface-2)]"
                  }`}
                  aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
                >
                  <motion.span
                    layout
                    className="absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm"
                    style={{ left: isAnnual ? "calc(100% - 20px)" : "4px" }}
                  />
                </button>
                <span
                  className={`text-sm ${
                    isAnnual ? "font-semibold text-[var(--color-fg)]" : "text-[var(--color-muted)]"
                  }`}
                >
                  Annual
                  <span className="ml-1 text-xs text-green-500">Save {annualDiscount}%</span>
                </span>
              </div>
            )}

            {/* Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-muted)]">
                  How many {unitLabel}?
                </span>
                <span className="font-semibold text-[var(--color-fg)]">
                  {value.toLocaleString()} {unitLabel}
                </span>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="relative z-10 h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-20 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[var(--color-accent)] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--color-accent)] [&::-moz-range-thumb]:shadow-md"
                  style={{
                    background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${sliderPercentage}%, var(--color-surface-2) ${sliderPercentage}%, var(--color-surface-2) 100%)`,
                  }}
                />
              </div>

              <div className="flex justify-between text-xs text-[var(--color-subtle)]">
                <span>{min.toLocaleString()}</span>
                <span>{max.toLocaleString()}</span>
              </div>
            </div>

            {/* Price display */}
            <motion.div
              key={calculatePrice}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-8 text-center"
            >
              <p className="font-heading text-5xl font-bold text-[var(--color-fg)] sm:text-6xl">
                ${Math.round(calculatePrice).toLocaleString()}
                <span className="text-xl font-normal text-[var(--color-muted)]">
                  /{isAnnual ? "year" : "mo"}
                </span>
              </p>
              {tiers && (
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  ${(calculatePrice / value).toFixed(2)} per {unitLabel.slice(0, -1)}
                </p>
              )}
            </motion.div>

            {/* Features */}
            {features && features.length > 0 && (
              <ul className="mt-8 space-y-3 border-t border-[var(--color-border-subtle)] pt-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="mt-8">
              <ButtonLink href={cta.href} variant="primary" className="w-full">
                {cta.text}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
