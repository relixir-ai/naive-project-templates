"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Stories", href: "#testimonials" },
];

const FEATURES = [
  {
    title: "Beautiful Newsletters",
    description:
      "Write and send newsletters that feel personal, not promotional. Rich formatting, custom templates, and deliverability built in.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    bg: "bg-amber-50",
  },
  {
    title: "Community Spaces",
    description:
      "Create discussion forums, Q&A boards, and member directories. Your community, your rules — no algorithms.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM6.75 9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    bg: "bg-orange-50",
  },
  {
    title: "Digital Products",
    description:
      "Sell courses, guides, and memberships with zero friction. Stripe payments, instant access, automatic delivery.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    bg: "bg-yellow-50",
  },
  {
    title: "Subscriber Analytics",
    description:
      "Understand your audience with thoughtful metrics. Open rates, growth trends, and engagement — no vanity numbers.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    bg: "bg-amber-50",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Tell your story",
    description:
      "Set up your page and write your first post in minutes. Import existing content or start fresh.",
  },
  {
    number: "2",
    title: "Grow your audience",
    description:
      "Share with your existing network — we handle the rest. Built-in SEO, social sharing, and referral tools.",
  },
  {
    number: "3",
    title: "Build a business",
    description:
      "Add paid tiers when you're ready. We take zero cut of your revenue. You keep everything.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I migrated 8,000 subscribers from Substack and haven't looked back. The community features changed everything for my readers.",
    name: "Rachel Nguyen",
    role: "Author & Newsletter Writer",
  },
  {
    quote:
      "My course revenue tripled when I moved to Gather. The reading experience is so much better that people actually finish the content.",
    name: "Tom Ashworth",
    role: "Educator & Coach",
  },
  {
    quote:
      "The simplicity is what I needed. No distractions, no clutter — just my words and my readers. It feels like home.",
    name: "Priya Sharma",
    role: "Independent Journalist",
  },
];

const FEATURED_QUOTE = {
  quote:
    "Gather gave me back the joy of writing. No algorithms, no noise — just genuine connection with people who care about the work.",
  name: "Sarah Mitchell",
  role: "Author of 'Creative Mornings' — 45,000 subscribers",
};

const STATS = [
  { value: "25k+", label: "Creators" },
  { value: "2M+", label: "Subscribers" },
  { value: "$8M+", label: "Creator earnings" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ─── Navigation ─── */}
      <header className="fixed top-0 inset-x-0 z-50 warm-glass border-b border-border">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-2xl font-semibold text-primary tracking-tight">
            Gather
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-secondary underline-link hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-base text-secondary hover:text-primary transition-colors duration-200">
              Sign in
            </a>
            <a
              href="#cta"
              className="bg-accent text-white text-base font-medium px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Start Writing
            </a>
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-accent text-white font-medium px-5 py-2.5 rounded-lg text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Writing
            </a>
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="reading-width mx-auto px-6 text-center">
          <div className="opacity-0-start animate-fade-up">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-accent mb-8 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              For writers & creators
            </span>
          </div>
          <h1 className="opacity-0-start animate-fade-up-d1 font-heading text-5xl sm:text-7xl lg:text-[5rem] font-semibold tracking-[-0.04em] leading-[1.05] text-primary">
            Build a community
            <br />
            around your words
          </h1>
          <p className="opacity-0-start animate-fade-up-d2 mt-8 text-lg sm:text-xl text-secondary leading-relaxed reading-width mx-auto">
            The platform for writers, educators, and creators who want real relationships with their audience — not just followers.
          </p>
          <div className="opacity-0-start animate-fade-up-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cta"
              className="bg-accent text-white font-medium px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors duration-200 text-base"
            >
              Start Writing — It&apos;s Free
            </a>
            <a
              href="#how-it-works"
              className="text-secondary hover:text-primary transition-colors duration-200 text-base underline-link py-3.5 px-4 flex items-center gap-1.5"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <hr className="section-divider mb-12" />
          <div className="flex items-center justify-center gap-10 sm:gap-16 text-center">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10 sm:gap-16">
                {i > 0 && <div className="w-px h-12 bg-border -ml-10 sm:-ml-16" />}
                <div>
                  <p className="font-heading text-3xl sm:text-4xl font-semibold text-primary tracking-[-0.02em]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="section-divider mt-12" />
        </div>
      </section>

      {/* ─── Featured Testimonial (Big Pull Quote) ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="pull-quote pl-2 sm:pl-6">
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-primary leading-[1.35] italic tracking-[-0.01em]">
              &ldquo;{FEATURED_QUOTE.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center text-accent font-heading font-semibold text-sm">
                {FEATURED_QUOTE.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-body font-semibold text-primary text-base">
                  {FEATURED_QUOTE.name}
                </p>
                <p className="text-muted text-sm">{FEATURED_QUOTE.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Platform
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.02em] text-primary">
              Everything a creator needs
            </h2>
            <p className="mt-4 text-secondary text-lg reading-width mx-auto">
              Tools that respect your craft and your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border rounded-2xl p-7 card-warm"
              >
                <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center text-accent mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <hr className="section-divider-wide mb-20" />
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Getting Started
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.02em] text-primary">
              Simple by design
            </h2>
            <p className="mt-4 text-secondary text-lg">
              No complicated setup. Just start writing.
            </p>
          </div>
          <div className="step-connector space-y-12 pl-2">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex items-start gap-6 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white font-heading font-semibold text-lg flex items-center justify-center relative z-10">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-[15px] leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <hr className="section-divider-wide mb-20" />
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Stories
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-primary">
              Creator stories
            </h2>
          </div>
          <div className="space-y-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-surface border border-border rounded-2xl p-8 warm-shadow card-warm"
              >
                <blockquote className="font-heading text-lg sm:text-xl text-primary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center text-accent text-xs font-bold font-heading">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-primary text-[15px]">
                      {t.name}
                    </p>
                    <p className="text-muted text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="cta" className="py-24 sm:py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white leading-tight">
            Your audience is waiting
          </h2>
          <p className="mt-4 text-white/75 text-lg leading-relaxed">
            Free to start. No credit card required. No platform cut — ever.
          </p>
          <a
            href="#"
            className="inline-block mt-8 bg-white text-accent font-semibold px-10 py-4 rounded-lg hover:bg-white/90 transition-colors duration-200 text-base"
          >
            Start Writing Today
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-primary text-white/70 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-xl font-semibold text-white">
                Gather
              </span>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                The community platform for thoughtful creators.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Examples"] },
              { title: "Resources", links: ["Blog", "Help Center", "Guides"] },
              { title: "Legal", links: ["Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold text-white text-xs tracking-wide uppercase mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Gather. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
