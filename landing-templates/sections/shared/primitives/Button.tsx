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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const tone =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
      : "border border-[var(--color-border)] text-[var(--color-fg)]";

  return (
    <a href={href} className={`${base} ${tone} ${className}`.trim()}>
      {children}
    </a>
  );
}
