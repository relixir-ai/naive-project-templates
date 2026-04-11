export type SectionFamily =
  | "hero"
  | "social-proof"
  | "features"
  | "how-it-works"
  | "pricing"
  | "cta"
  | "footer";

export type SectionDensity = "low" | "medium" | "high";
export type SectionGeometry = "open" | "grid" | "split" | "stack" | "list";
export type EstimatedHeight = "small" | "medium" | "large";
export type ArtDirection = "editorial" | "product-demo" | "enterprise-trust";

export type TokenKey =
  | "color-fg" | "color-bg" | "color-surface" | "color-surface-2" | "color-panel-solid"
  | "color-muted" | "color-subtle"
  | "color-accent" | "color-accent-soft" | "color-accent-strong" | "color-accent-foreground"
  | "color-border" | "color-border-subtle"
  | "line-opacity" | "grid-opacity" | "texture-opacity"
  | "shadow-1" | "shadow-2" | "shadow-3" | "shadow-inset"
  | "radius-sm" | "radius-md" | "radius-lg" | "radius-card"
  | "duration-fast" | "duration-base" | "duration-slow" | "ease-spring"
  | "font-display" | "font-body";

export interface SectionMeta {
  family: SectionFamily;
  variant: string;
  purpose: string;
  tone: string[];
  density: SectionDensity;
  geometry: SectionGeometry;
  industries: string[];
  artDirections: ArtDirection[];
  requiresProofType?: "logos" | "stats";
  disallowedAdjacencies: string[];
  tokensRequired: string[];
  estimatedHeight: EstimatedHeight;
}
