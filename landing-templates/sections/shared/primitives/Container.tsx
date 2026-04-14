import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}

export function Container({ children, narrow = false, className = "" }: ContainerProps) {
  const width = narrow ? "max-w-3xl" : "max-w-6xl";
  return <div className={`mx-auto w-full px-6 ${width} ${className}`.trim()}>{children}</div>;
}
