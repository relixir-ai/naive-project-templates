"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const FEATURES = [
  {
    title: "Intuitive Boards",
    description:
      "Drag-and-drop task management that adapts to how your team thinks. Kanban, list, and timeline views — switch instantly.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    tint: "feature-tint-blue",
    size: "large" as const,
  },
  {
    title: "Smart Automations",
    description:
      "Set rules once, let the system handle the rest. Save hours every week on repetitive work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    tint: "feature-tint-purple",
    size: "small" as const,
  },
  {
    title: "Team Insights",
    description:
      "Understand where time goes with clear reports and trend analysis. No vanity metrics.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    tint: "feature-tint-green",
    size: "small" as const,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect with GitHub, Slack, Figma, and 50+ tools your team already uses. Two-way sync keeps everything current.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    tint: "feature-tint-blue",
    size: "large" as const,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Create a workspace",
    description: "Invite your team and organize projects in seconds.",
  },
  {
    number: "02",
    title: "Add your tasks",
    description: "Import from existing tools or start fresh with templates.",
  },
  {
    number: "03",
    title: "Track and deliver",
    description: "Use boards, timelines, and reports to ship on time.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We replaced three different tools with Streamline. Our team meetings are actually productive now.",
    name: "Emily Zhang",
    role: "Product Lead",
    company: "Clearpath",
  },
  {
    quote:
      "The simplicity is what sold us. Five minutes to set up, and the whole team adopted it immediately.",
    name: "James Okafor",
    role: "Engineering Manager",
    company: "Buildkit",
  },
  {
    quote:
      "Finally, a project tool that doesn't need a manual. Clean, fast, and stays out of the way.",
    name: "Laura Kim",
    role: "Head of Design",
    company: "Pixelcraft",
  },
];

const STATS = [
  { value: "12k+", label: "Teams" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Rating" },
  { value: "2M+", label: "Tasks completed" },
];

const LOGOS = ["Linear", "Notion", "Vercel", "Stripe", "Figma", "Raycast", "Supabase", "Resend"];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen dot-pattern">
      {/* ─── Navigation ─── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="glass-nav max-w-5xl mx-auto mt-3 mx-4 sm:mx-6 rounded-2xl border border-border px-6 py-2.5 flex items-center justify-between">
          <a href="#" className="font-heading text-lg font-bold tracking-[-0.02em] text-primary">
            Streamline
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">
              Log in
            </a>
            <a
              href="#cta"
              className="bg-accent btn-shine text-white text-[13px] font-medium px-4 py-1.5 rounded-lg"
            >
              Get Started
            </a>
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav mx-4 mt-2 rounded-2xl border border-border p-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden">
        <div className="hero-glow-light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="opacity-0-start animate-fade-up">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-accent mb-8 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Now in Public Beta
            </span>
          </div>
          <h1 className="opacity-0-start animate-fade-up-d1 font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.95] text-primary">
            Plan, track, and
            <br />
            deliver{" "}
            <span className="text-accent">with clarity</span>
          </h1>
          <p className="opacity-0-start animate-fade-up-d2 mt-6 text-base sm:text-lg text-secondary max-w-xl mx-auto leading-relaxed">
            The project management tool that gets out of your way. Simple enough
            for small teams, powerful enough for enterprises.
          </p>
          <div className="opacity-0-start animate-fade-up-d3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cta"
              className="bg-accent btn-shine text-white font-medium px-8 py-3 rounded-lg text-sm"
            >
              Start Free Trial →
            </a>
            <a
              href="#how-it-works"
              className="group text-secondary hover:text-primary text-sm px-6 py-3 rounded-lg border border-border hover:border-border-bright transition-all flex items-center gap-2"
            >
              See how it works
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Browser Frame Mockup */}
          <div className="opacity-0-start animate-fade-up-d4 mt-16 sm:mt-20 relative mx-auto max-w-3xl">
            <div className="browser-mockup rounded-xl border border-border bg-surface overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#F5F5F5]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-5 rounded-md bg-border max-w-[220px] mx-auto flex items-center justify-center">
                    <span className="text-[10px] text-muted">app.streamline.dev</span>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-surface">
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-44 shrink-0 space-y-3 hidden sm:block">
                    <div className="h-3.5 rounded bg-primary/10 w-24" />
                    <div className="space-y-1.5 mt-4">
                      <div className="h-7 rounded-md bg-accent/8 border border-accent/15 px-2 flex items-center">
                        <div className="w-3 h-3 rounded bg-accent/20 mr-2" />
                        <div className="h-2.5 rounded bg-accent/30 w-14" />
                      </div>
                      {[0.7, 0.5, 0.6].map((w, i) => (
                        <div key={i} className="h-7 rounded-md px-2 flex items-center">
                          <div className="w-3 h-3 rounded bg-border mr-2" />
                          <div className="h-2.5 rounded bg-border" style={{ width: `${w * 100}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 rounded bg-primary/10 w-32" />
                      <div className="h-6 rounded-md bg-accent/10 border border-accent/20 w-20" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "In Progress", count: 8, color: "bg-accent" },
                        { label: "Review", count: 3, color: "bg-yellow-500" },
                        { label: "Done", count: 14, color: "bg-green-500" },
                      ].map((col) => (
                        <div key={col.label} className="space-y-2">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${col.color}/60`} />
                            <div className="h-2 rounded bg-secondary/20 w-12" />
                            <span className="text-[9px] text-muted ml-auto">{col.count}</span>
                          </div>
                          {Array.from({ length: Math.min(col.count, 3) }).map((_, i) => (
                            <div key={i} className="rounded-md border border-border bg-surface p-2 space-y-1.5">
                              <div className="h-2 rounded bg-primary/8 w-full" />
                              <div className="h-2 rounded bg-primary/5 w-3/4" />
                              <div className="flex gap-1 mt-1">
                                <div className="h-3.5 rounded bg-border px-1 w-10" />
                                <div className="w-3.5 h-3.5 rounded-full bg-accent/15 ml-auto" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 inset-x-12 h-8 bg-accent/5 rounded-b-xl blur-xl" />
          </div>
        </div>
      </section>

      {/* ─── Social Proof (Logos) ─── */}
      <section className="py-12 border-y border-border overflow-hidden bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] text-muted mb-6 tracking-[0.2em] uppercase font-medium">
            Trusted by teams at
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span key={i} className="mx-8 sm:mx-12 font-heading text-base font-semibold text-muted/40 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-border rounded-2xl p-6 text-center card-lift"
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features (Bento Grid) ─── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Platform
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-primary">
              Built for how teams
              <br className="hidden sm:block" /> actually work
            </h2>
            <p className="mt-4 text-secondary text-base max-w-md mx-auto">
              No bloat, no complexity. Just the features your team needs to ship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.size === "large" ? "md:col-span-2" : "md:col-span-1"} ${feature.tint} rounded-2xl border border-border hover:border-border-bright p-7 card-lift bg-surface`}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 sm:py-32 border-y border-border bg-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Workflow
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-primary">
              Up and running in minutes
            </h2>
            <p className="mt-4 text-secondary text-base">
              No onboarding calls. No complex setup.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" />
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface border-2 border-border text-accent font-heading font-bold text-sm mb-6 relative z-10 card-shadow">
                  {step.number}
                </div>
                <h3 className="font-heading text-base font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-primary">
              Teams love Streamline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-surface rounded-2xl border border-border hover:border-border-bright p-7 card-lift"
              >
                <div className="text-accent/20 text-4xl font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <blockquote className="text-primary/90 text-sm leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/15 flex items-center justify-center text-accent text-xs font-bold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="cta" className="py-24 sm:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white">
            Ready to streamline?
          </h2>
          <p className="mt-3 text-white/60 text-base">
            Free for teams up to 10. No credit card required.
          </p>
          <a
            href="#"
            className="inline-block mt-8 bg-white text-primary font-medium px-10 py-3.5 rounded-lg text-sm hover:bg-white/90 transition-colors"
          >
            Start Free Trial →
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-background border-t border-border py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-lg font-bold text-primary">
                Streamline
              </span>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                Project management for modern teams.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Integrations"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold text-primary text-xs tracking-wide uppercase mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Streamline Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
