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

export interface SectionMeta {
  family: SectionFamily;
  variant: string;
  purpose: string;
  tone: string[];
  density: SectionDensity;
  geometry: SectionGeometry;
  industries: string[];
  artDirections: ArtDirection[];
  requiresProofType?: string;
  disallowedAdjacencies: string[];
  tokensRequired: string[];
  estimatedHeight: EstimatedHeight;
}
