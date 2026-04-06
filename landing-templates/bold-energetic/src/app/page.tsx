"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const FEATURES = [
  {
    title: "AI Content Engine",
    description:
      "Generate copy, captions, and hashtags that match your brand voice perfectly. Trained on top-performing content.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    size: "large" as const,
    bg: "bento-orange",
    accentColor: "from-accent to-orange-400",
  },
  {
    title: "Smart Templates",
    description:
      "500+ layouts for social, email, and web — always on-brand.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    size: "small" as const,
    bg: "bento-purple",
    accentColor: "from-accent-secondary to-purple-400",
  },
  {
    title: "One-Click Publish",
    description:
      "Schedule and publish to every platform simultaneously.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
      </svg>
    ),
    size: "small" as const,
    bg: "bento-yellow",
    accentColor: "from-accent to-yellow-500",
  },
  {
    title: "Performance Analytics",
    description:
      "Track engagement, reach, and conversions across all channels in one unified dashboard. Know what works.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    size: "large" as const,
    bg: "bento-pink",
    accentColor: "from-accent-secondary to-pink-500",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Describe your idea",
    description: "Type a brief or pick a template to get started.",
    color: "bg-accent",
  },
  {
    number: "02",
    title: "Customize & refine",
    description: "Tweak the design, copy, and branding until it's perfect.",
    color: "bg-accent-secondary",
  },
  {
    number: "03",
    title: "Publish everywhere",
    description: "Export or auto-publish to all your channels.",
    color: "bg-accent",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our social engagement went up 300% in the first month. The AI actually understands our brand.",
    name: "Maria Santos",
    role: "Marketing Director",
    company: "GrowthLab",
    rating: 5,
  },
  {
    quote:
      "I used to spend 4 hours on a single post. Now I create a week's worth of content in 30 minutes.",
    name: "Devon Clarke",
    role: "Content Creator",
    company: "Independent",
    rating: 5,
  },
  {
    quote:
      "The templates are genuinely good — not the generic stuff you see elsewhere. Real designer quality.",
    name: "Yuki Tanaka",
    role: "Brand Manager",
    company: "NeonWave",
    rating: 5,
  },
];

const LOGOS = ["Shopify", "TikTok", "Discord", "Notion", "Webflow", "Framer", "Figma", "Arc"];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="decorative-blob w-[500px] h-[500px] bg-accent/10 -top-48 -right-48 fixed animate-float-slow" />
      <div className="decorative-blob w-[400px] h-[400px] bg-accent-secondary/8 top-[60%] -left-48 fixed animate-float" />
      <div className="decorative-blob w-[300px] h-[300px] bg-pink-400/6 top-[30%] right-[-10%] fixed animate-float-slow" />

      {/* ─── Navigation ─── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="glass-nav max-w-5xl mx-auto mt-3 mx-4 sm:mx-6 rounded-2xl border border-border px-6 py-2.5 flex items-center justify-between">
          <a href="#" className="font-heading text-xl font-extrabold tracking-tight">
            <span className="gradient-text">Spark</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-[13px] font-medium text-secondary hover:text-primary transition-colors"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="gradient-btn text-white text-[13px] font-semibold px-5 py-1.5 rounded-xl"
            >
              Try Free
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
                className="text-secondary hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="gradient-btn text-white text-sm font-semibold px-6 py-3 rounded-xl text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Free
            </a>
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 mesh-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="opacity-0-start animate-fade-up">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-accent mb-8 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
              AI-Powered Content Creation
            </span>
          </div>
          <h1 className="opacity-0-start animate-fade-up-d1 font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.95]">
            Create stunning content
            <br />
            <span className="gradient-text">in minutes, not hours</span>
          </h1>
          <p className="opacity-0-start animate-fade-up-d2 mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            AI-powered design and copy that matches your brand.
            Templates, scheduling, and analytics — all in one place.
          </p>
          <div className="opacity-0-start animate-fade-up-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="gradient-btn text-white font-semibold px-8 py-4 rounded-2xl text-base"
            >
              Start Creating Free →
            </a>
            <a
              href="#how-it-works"
              className="text-secondary hover:text-primary border-2 border-border hover:border-accent-secondary/30 font-medium px-8 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-2 group"
            >
              Watch Demo
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </a>
          </div>

          {/* Hero visual: gradient orb */}
          <div className="opacity-0-start animate-fade-up-d4 mt-16 sm:mt-20 relative mx-auto max-w-lg">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-secondary to-pink-500 opacity-20 blur-3xl animate-float" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/30 via-accent-secondary/20 to-pink-400/10 backdrop-blur-sm border border-white/30 animate-float-slow" />
              <div className="absolute inset-12 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof (Logos Marquee) ─── */}
      <section className="py-12 border-y border-border bg-surface/50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] font-semibold text-muted mb-6 tracking-[0.2em] uppercase">
            Trusted by creative teams at
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span key={i} className="mx-8 sm:mx-12 font-heading text-base font-bold text-secondary/30 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features (Colorful Bento Grid) ─── */}
      <section id="features" className="py-24 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-bold tracking-wide uppercase mb-3">
              Features
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em]">
              Everything to{" "}
              <span className="gradient-text">create & grow</span>
            </h2>
            <p className="mt-4 text-secondary text-lg max-w-xl mx-auto">
              Professional tools that feel simple. No design degree needed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.size === "large" ? "md:col-span-2" : "md:col-span-1"} bento-card ${feature.bg}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center text-white mb-5`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
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
      <section id="how-it-works" className="py-24 sm:py-32 bg-surface border-y border-border relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent-secondary text-[13px] font-bold tracking-wide uppercase mb-3">
              Workflow
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em]">
              Idea to published in{" "}
              <span className="gradient-text-reverse">3 steps</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              No learning curve. Start creating in under a minute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[32px] left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-accent via-accent-secondary to-accent opacity-15" />
            {STEPS.map((step) => (
              <div key={step.number} className="relative text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} text-white font-heading font-extrabold text-lg mb-6 relative z-10 shadow-lg`}
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
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
      <section id="testimonials" className="py-24 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-[13px] font-bold tracking-wide uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.03em]">
              Creators{" "}
              <span className="gradient-text">love Spark</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bento-card bg-white">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-primary text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-xs font-bold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">
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
      <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-cta" />
        <div className="decorative-blob w-[300px] h-[300px] bg-accent/10 top-[-10%] left-[-5%]" />
        <div className="decorative-blob w-[250px] h-[250px] bg-accent-secondary/8 bottom-[-10%] right-[-5%]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-accent-secondary text-[13px] font-bold tracking-wide uppercase mb-3">
            Get Started
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em]">
            Ready to{" "}
            <span className="gradient-text">create something?</span>
          </h2>
          <p className="mt-4 text-secondary text-lg">
            Free forever for individuals. Upgrade when you grow.
          </p>
          <a
            href="#"
            className="inline-block mt-8 gradient-btn text-white font-semibold px-10 py-4 rounded-2xl text-lg"
          >
            Start Creating Free →
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-primary text-white/80 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-2xl font-extrabold text-white">
                Spark
              </span>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                AI-powered content creation for modern creators.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Templates"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-bold text-white text-xs tracking-wide uppercase mb-3">
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
              &copy; {new Date().getFullYear()} Spark Inc. All rights reserved.
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
              <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
