"use client";

import { motion } from "@/lib/motion";
import { Container } from "../shared/primitives/Container";
import { Section } from "../shared/primitives/Section";
import type { SectionMeta } from "../shared/tokens";

export const meta = {
  family: "team",
  variant: "grid",
  purpose: "Team photo grid with hover details and social links",
  tone: ["personal", "human", "trustworthy"],
  density: "medium",
  geometry: "grid",
  industries: ["services", "b2b-saas", "fintech", "operations"],
  artDirections: ["editorial", "enterprise-trust"],
  disallowedAdjacencies: ["team/featured"],
  tokensRequired: ["color-fg", "color-bg", "color-surface", "color-border", "color-accent", "font-heading", "font-body"],
  estimatedHeight: "medium",
} as const satisfies SectionMeta;

interface SocialLink {
  platform: "twitter" | "linkedin" | "github";
  href: string;
}

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  social?: SocialLink[];
}

interface TeamGridProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  members: TeamMember[];
  columns?: 3 | 4;
}

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  switch (platform) {
    case "twitter":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      );
    case "github":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
  }
}

export function TeamGrid({
  id,
  eyebrow,
  heading,
  intro,
  members,
  columns = 4,
}: TeamGridProps) {
  const colsClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

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

          <div className={`grid gap-6 ${colsClass}`}>
            {members.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {member.bio && (
                      <p className="text-sm text-white/90 line-clamp-3">{member.bio}</p>
                    )}
                    {member.social && member.social.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {member.social.map((link) => (
                          <a
                            key={link.platform}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                          >
                            <SocialIcon platform={link.platform} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-fg)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)]">{member.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
