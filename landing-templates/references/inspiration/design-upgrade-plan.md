# Landing Page Design Upgrade Plan

## Goal

Make generated landing pages feel designed, specific, and brand-shaped rather than structurally correct but visually generic.

## House Rules

- Every art direction needs its own surface hierarchy, not just a different accent color.
- Every page should use at least one open-layout section and no more than one card-heavy section.
- Motion should reinforce hierarchy or product behavior. Default fade-up on every block is a failure.
- One memorable visual moment per page is enough. Repeating “special” effects makes the output look generated.

## Repos To Harvest

- `ibelick/motion-primitives`
  - Use for reveal timing, panel choreography, stagger patterns, and line/signal motion.
- `imskyleen/animate-ui`
  - Use for refined interaction behavior in tabs, accordions, nav, and small control surfaces.
- `nolly-studio/cult-ui`
  - Use for geometry, framing, panel layout, and denser design-engineering style composition.
- `DavidHDev/react-bits`
  - Use selectively for one background, text, or atmospheric primitive per page.
- `ruucm/shadergradient`
  - Use only for premium hero backplates or masked atmosphere, never floating orb filler.
- `darkroomengineering/satus`
  - Use as an architectural reference for separating section primitives, art direction, and optional advanced motion.

## Components To Demote Immediately

- `features/bento`
  - Too close to the default AI SaaS pattern.
- `social-proof/stats`
  - Keep only after the new rail treatment; do not use the old flat strip.
- `footer/minimal`
  - Fine as fallback, weak as default.
- `hero/stat-led`
  - Useful for trust-heavy pages, but currently too plain to carry an enterprise page.

## Wave 1

- Expand shared tokens and atmosphere primitives.
- Rebuild the `product-demo` path:
  - `hero/product-demo`
  - `social-proof/stats`
  - `cta/full-bleed`
  - `footer/comprehensive`
- Remove `features/bento` from `product-demo` section bias.

## Wave 2

- Rebuild:
  - `features/tabbed`
  - `features/list`
  - `pricing/cards`
  - `social-proof/logos`
- Add one stronger product-demo feature variant that feels like an operator console, not cards.

## Wave 3

- Rebuild the `enterprise-trust` path:
  - `hero/stat-led`
  - `features/alternating-rows`
  - `pricing/table`
  - `footer/comprehensive`
- Add a document/table/ops visual grammar instead of dark-card carryover.

## Wave 4

- Rebuild the `editorial` path:
  - `hero/editorial`
  - `features/list`
  - `social-proof/pull-quote`
  - `cta/inline`
- Add image crops, rules, whitespace tension, and warmer paper-like depth.

## Review Checklist

- Does the page have depth beyond `bg + border + accent`?
- Are there at least two clearly different section geometries?
- Is the accent color used as a highlight instead of a blanket theme wash?
- Does motion describe system behavior or visual hierarchy?
- Would this still look specific if the logo and copy were removed?
