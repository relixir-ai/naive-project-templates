import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--duration-base)]";
  const tone =
    variant === "primary"
      ? "border border-[color-mix(in_srgb,var(--color-accent)_28%,transparent)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] shadow-[var(--shadow-2)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_84%,transparent)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:bg-[color-mix(in_srgb,var(--color-surface-2)_92%,transparent)]";

  return (
    <a href={href} className={`${base} ${tone} ${className}`.trim()}>
      {children}
    </a>
  );
}
