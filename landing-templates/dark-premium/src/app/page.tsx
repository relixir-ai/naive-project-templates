"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const FEATURES = [
  {
    title: "Lightning Deploys",
    description: "Push to production in under 30 seconds with zero-downtime rolling deployments and instant rollbacks.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    gradient: "feature-gradient-1",
    size: "large",
  },
  {
    title: "Real-time Collaboration",
    description: "See every change as it happens across your entire team.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM6.75 9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    gradient: "feature-gradient-2",
    size: "small",
  },
  {
    title: "Built-in Observability",
    description: "Performance metrics, error tracking, and logs in one dashboard.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    gradient: "feature-gradient-3",
    size: "small",
  },
  {
    title: "Edge-First Architecture",
    description: "Run your code at the edge, close to your users. Sub-50ms response times across 300+ global locations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    gradient: "feature-gradient-1",
    size: "large",
  },
];

const STEPS = [
  { number: "01", title: "Connect your repo", description: "Link your GitHub, GitLab, or Bitbucket repository in one click." },
  { number: "02", title: "Push your code", description: "Every push triggers an instant preview deployment automatically." },
  { number: "03", title: "Ship to production", description: "Promote any preview to production with a single click." },
];

const TESTIMONIALS = [
  {
    quote: "We cut our deployment time from 15 minutes to 20 seconds. The team ships twice as many features now.",
    name: "Sarah Chen",
    role: "VP Engineering, Dataflow",
  },
  {
    quote: "The analytics dashboard alone saved us from three production incidents last quarter. Essential tooling.",
    name: "Marcus Rodriguez",
    role: "Lead Developer, Stackwise",
  },
  {
    quote: "Finally a platform that doesn't get in the way. It just works, exactly how you'd expect.",
    name: "Aisha Patel",
    role: "CTO, NovaBuild",
  },
];

const LOGOS = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Supabase", "Raycast", "Resend"];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen grid-pattern">
      {/* ─── Navigation ─── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="glass max-w-5xl mx-auto mt-3 mx-4 sm:mx-6 rounded-full px-6 py-2.5 flex items-center justify-between">
          <a href="#" className="font-heading text-lg font-bold tracking-tight text-white">
            Acme
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[13px] text-secondary hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Sign in</a>
            <a href="#cta" className="accent-gradient btn-shine text-background text-[13px] font-medium px-4 py-1.5 rounded-full">
              Get Started
            </a>
          </div>
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
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
          <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-secondary hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
            <a href="#cta" className="accent-gradient text-background text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </div>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden">
        <div className="hero-glow" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="motion-preset-slide-from-bottom motion-duration-500">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-accent/90 mb-8 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now in Public Beta
            </span>
          </div>
          <h1 className="motion-preset-slide-from-bottom motion-duration-700 motion-delay-100 font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-gradient">
            Ship code without
            <br />
            breaking prod
          </h1>
          <p className="motion-preset-slide-from-bottom motion-duration-700 motion-delay-200 mt-6 text-base sm:text-lg text-secondary max-w-xl mx-auto leading-relaxed">
            Instant previews, zero-downtime deploys, and built-in
            observability — the modern deployment platform for teams that ship fast.
          </p>
          <div className="motion-preset-slide-from-bottom motion-duration-700 motion-delay-300 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className="accent-gradient btn-shine text-background font-medium px-8 py-3 rounded-full text-sm">
              Start Building Free →
            </a>
            <a href="#how-it-works" className="group text-secondary hover:text-primary text-sm px-6 py-3 rounded-full border border-border hover:border-border-bright transition-all flex items-center gap-2">
              See how it works
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>

          {/* Dashboard Mockup */}
          <div className="motion-preset-slide-from-bottom motion-duration-700 motion-delay-500 mt-16 sm:mt-20 relative mx-auto max-w-3xl">
            <div className="mockup-glow rounded-xl border border-border bg-surface overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-bright/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-5 rounded-md bg-border/50 max-w-[200px] mx-auto" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/3 space-y-3">
                    <div className="h-3 rounded bg-border-bright w-3/4" />
                    <div className="h-3 rounded bg-border w-full" />
                    <div className="h-3 rounded bg-border w-5/6" />
                  </div>
                  <div className="flex-1 rounded-lg border border-border bg-background p-4 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/20" />
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="h-3 rounded bg-border-bright w-1/2" />
                        <div className="h-3 rounded bg-border w-3/4" />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {[40, 65, 50, 80, 35, 70, 55, 90, 45, 75].map((h, i) => (
                        <div key={i} className="flex-1 flex items-end">
                          <div className="w-full rounded-sm bg-accent/20" style={{ height: `${h}%`, minHeight: 8 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-accent/5 rounded-b-xl blur-xl" />
          </div>
        </div>
      </section>

      {/* ─── Social Proof (Marquee) ─── */}
      <section className="py-12 border-t border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] text-muted mb-6 tracking-[0.2em] uppercase font-medium">
            Trusted by engineers at
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span key={i} className="mx-8 sm:mx-12 font-heading text-base font-semibold text-muted/50 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features (Bento Grid) ─── */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">Platform</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-gradient">
              Everything you need to ship
            </h2>
            <p className="mt-4 text-secondary text-base max-w-md mx-auto">
              A complete platform for modern engineering teams. No duct tape required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.size === "large" ? "md:col-span-2" : "md:col-span-1"} ${feature.gradient} card-glow rounded-2xl border border-border hover:border-border-bright p-7 transition-all duration-300`}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1.5">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">Workflow</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-gradient">
              Three steps to production
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            {STEPS.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-bold text-xs mb-5 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-heading text-base font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-[13px] font-medium tracking-wide uppercase mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-gradient">
              Loved by developers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border hover:border-border-bright p-7 card-glow transition-all duration-300">
                <div className="text-accent/30 text-4xl font-serif leading-none mb-3">&ldquo;</div>
                <blockquote className="text-primary/90 text-sm leading-relaxed mb-5">{t.quote}</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">{t.name}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="cta" className="py-24 sm:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-gradient">
            Start shipping today
          </h2>
          <p className="mt-3 text-secondary text-base">Free for individuals. No credit card required.</p>
          <a href="#" className="inline-block mt-8 accent-gradient btn-shine text-background font-medium px-10 py-3.5 rounded-full text-sm">
            Get Started Free →
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-lg font-bold text-white">Acme</span>
              <p className="mt-2 text-sm text-muted leading-relaxed">The modern platform for shipping production-ready software.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold text-primary text-xs tracking-wide uppercase mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-sm text-muted hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
