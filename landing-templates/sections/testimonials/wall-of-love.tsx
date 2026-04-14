"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "testimonials",
  variant: "wall-of-love",
  purpose: "Masonry grid of diverse testimonial cards showing social proof density",
  tone: ["social", "credible", "organic"],
  density: "high",
  geometry: "grid",
  industries: ["ai-saas", "developer-tools", "b2b-saas", "marketplaces"],
  artDirections: ["product-demo", "editorial", "enterprise-trust", "neubrutalist"],
  disallowedAdjacencies: ["social-proof/pull-quote", "testimonials/carousel"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-body"],
  estimatedHeight: "large",
} as const satisfies SectionMeta;

type TestimonialType = "quote" | "metric" | "tweet";

interface TestimonialQuote {
  type: "quote";
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialMetric {
  type: "metric";
  value: string;
  label: string;
  context?: string;
}

interface TestimonialTweet {
  type: "tweet";
  content: string;
  author: string;
  handle: string;
  avatar?: string;
  verified?: boolean;
}

type Testimonial = TestimonialQuote | TestimonialMetric | TestimonialTweet;

interface WallOfLoveProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? "text-yellow-400" : "text-[var(--color-border)]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteCard({ testimonial }: { testimonial: TestimonialQuote }) {
  return (
    <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-1)]">
      {testimonial.rating && (
        <div className="mb-3">
          <StarRating rating={testimonial.rating} />
        </div>
      )}
      <p className="text-sm leading-relaxed text-[var(--color-fg)]">
        "{testimonial.quote}"
      </p>
      <div className="mt-4 flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
            {testimonial.author.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-[var(--color-fg)]">{testimonial.author}</p>
          {(testimonial.role || testimonial.company) && (
            <p className="text-xs text-[var(--color-muted)]">
              {[testimonial.role, testimonial.company].filter(Boolean).join(" at ")}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function MetricCard({ testimonial }: { testimonial: TestimonialMetric }) {
  return (
    <article className="rounded-[var(--radius-card)] border border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-5 shadow-[var(--shadow-1)]">
      <p className="font-heading text-3xl font-bold text-[var(--color-accent)]">
        {testimonial.value}
      </p>
      <p className="mt-1 text-sm font-medium text-[var(--color-fg)]">{testimonial.label}</p>
      {testimonial.context && (
        <p className="mt-2 text-xs text-[var(--color-muted)]">{testimonial.context}</p>
      )}
    </article>
  );
}

function TweetCard({ testimonial }: { testimonial: TestimonialTweet }) {
  return (
    <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-1)]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-2)] text-sm font-semibold text-[var(--color-muted)]">
              {testimonial.author.charAt(0)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold text-[var(--color-fg)]">{testimonial.author}</p>
              {testimonial.verified && (
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-xs text-[var(--color-muted)]">@{testimonial.handle}</p>
          </div>
        </div>
        <svg className="h-5 w-5 text-[var(--color-muted)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg)]">{testimonial.content}</p>
    </article>
  );
}

export function WallOfLove({ id, eyebrow, heading, intro, testimonials }: WallOfLoveProps) {
  return (
    <Section id={id} className="bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3 text-center mx-auto">
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

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="mb-4 break-inside-avoid"
              >
                {testimonial.type === "quote" && <QuoteCard testimonial={testimonial} />}
                {testimonial.type === "metric" && <MetricCard testimonial={testimonial} />}
                {testimonial.type === "tweet" && <TweetCard testimonial={testimonial} />}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
