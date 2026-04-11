import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[var(--space-section-y)] ${className}`.trim()}
    >
      {children}
    </section>
  );
}
