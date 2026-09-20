# OPC Global Design System

**OPC Global** (欧匹赛全球联盟) — *One Person Company Alliance*. Tagline: **AI for Freedom.**

OPC Global is a global alliance IP for collaboration, standards, and resource connection. Its work runs on three tracks: **Global alliance**, **Standards**, and **Cross-region collaboration**. Its audiences are international partners, alliance institutions, and standards teams. Primary language is English; the Chinese name 欧匹赛全球联盟 appears as a secondary name. Brand keywords from the source: *deep blue, graphite, gold, global alliance, standards*.

The brand's visual register is institutional and calm: deep navy, graphite neutrals, and a restrained gold accent, with a single hero image of a cool blue-grey studio scene (acrylic blocks, dotted world map, gold threads).

## Sources

- GitHub (primary): https://github.com/ksamint/dsys_opcglobal — `data/theme.json` (palette), `data/brand.json` (profile, asset manifest), `data/assets.json`, `README.md`. Explore this repository, and its upstream `ksamint/tableai_designaha` (folder `OPCGLOBAL/`), to build designs that follow this brand more closely.
- Published brand page / API: https://apuch.art/brand?brand=opcglobal · https://apuch.art/api/brands/opcglobal.json
- Official site: https://opcglobal.ai — a JavaScript-rendered app; only its title ("OPC Global - One Person Company Alliance") could be read. **No page layouts, copy, or components were recoverable from it.**
- Logo set and hero image: hosted at `media.apuch.art` (URLs in `data/brand.json`), copied into `assets/`.

What the sources do **not** define: typography, spacing, radii, shadows, iconography, components, or any UI screens. The brand record's own status is `placeholder` with empty `guides` and `tokens`. Everything beyond the palette and logos in this system is authored here as a proposal, flagged where it matters.

## Content fundamentals

- **Voice:** institutional, plain, matter-of-fact. Third person for the organisation ("OPC Global is a global alliance IP for collaboration, standards, and resource connection."). "We" is acceptable in member-facing copy; avoid "I".
- **Address:** "you" for partners and members; never chummy. No exclamation marks, no emoji, no slang.
- **Casing:** sentence case for headings, labels, and buttons ("Apply for membership", not "Apply For Membership"). Proper nouns keep their casing (OPC Global, One Person Company). Eyebrow labels are the one exception: uppercase, letterspaced, gold.
- **Vocabulary:** alliance, members, partners, institutions, standards, working groups, collaboration, resource connection, cross-region. Prefer "standard" and "framework" over "product" or "solution".
- **Bilingual pairing:** English first, Chinese second, separated by a middle dot or on the next line: `OPC Global · 欧匹赛全球联盟`. Use the CJK fallback fonts already in the stacks.
- **Numbers and IDs:** standards and documents carry mono identifiers (`OPC-STD-001`, `v1.2`). Dates ISO-style in tables (`2026-09-19`), spelled out in prose.
- **Length:** short declarative sentences. Headlines 3–8 words ("AI for Freedom." / "Standards for the one-person company."). Body paragraphs 1–3 sentences.
- **Examples:** "OPC Global is a global alliance IP for collaboration, standards, and resource connection." · "Global alliance, standards, and cross-region collaboration." · "AI for Freedom."

## Visual foundations

- **Colour:** navy `#1D3557` is the primary and the heading colour; deep navy `#0A1626` (sampled from the official logo) is the darkest surface. Gold `#B79B63` is an *accent*, used for eyebrows, hairlines, and highlights, never as a large fill. Red `#A23E3E` is the secondary/danger colour, reserved for warnings and one emphasis per view. Neutrals: paper `#FFFFFF`, surface `#F3F5F6`, ink `#162130`, muted `#596776`, line `rgba(29,53,87,.16)`. Light mode only — the source declares `mode: light`; no dark theme exists.
- **Type (substituted — see Caveats):** Libre Caslon Text for display and headings (regular weight, tight leading), Manrope for UI and body (15px/1.65), IBM Plex Mono for identifiers. CJK fallbacks: Noto Serif SC / Noto Sans SC. Headings are never bold serif; hierarchy comes from size and colour.
- **Spacing:** 4px base scale; sections 80px vertical; 1200px container with 24px gutters; 12-column grid; narrow reading measure 760px.
- **Backgrounds:** flat paper, with alternating `surface` bands. Navy bands for statements and the footer. Photography only in the hero, cool-toned, with a navy protection gradient from the bottom (`rgba(10,22,38,.95)` at the base → `.88` at 50% → `.35` at 80% → transparent at the top) so the whole text block sits on ≥ 85% navy and white text and the gold eyebrow clear 4.5:1. No patterns, textures, or hand-drawn illustration. Decorative gradients are not used.
- **Motifs:** hairlines (1px line, occasionally gold), numbered eyebrows (`01 — Standards`), dotted-world-map imagery, glass/acrylic objects, gold thread-like connectors.
- **Radii:** 2px small (chips, inputs inner), 4px default (buttons, inputs, cards), 8px large (dialogs, image frames), pill for badges and tags only.
- **Borders:** 1px `line` on cards, inputs, tables. Strong line `rgba(29,53,87,.32)` on hover/focus borders. A 2px gold rule marks the active tab.
- **Shadows:** cards have none; elevation is carried by borders. Floating layers only: `shadow-2` (0 8px 24px) for menus/toasts/tooltips, `shadow-3` for dialogs.
- **Cards:** paper background, 1px line border, 4px radius, 24px padding, no shadow. Hover: border goes strong; nothing moves.
- **Hover / press:** buttons darken (`#1D3557 → #16294A → #112039`); links turn gold-deep with a gold underline; no scale transforms, no lift.
- **Motion:** 160ms ease-out for colour/border; 240ms for overlays (fade + 4px rise). No bounces, no springs. Respect `prefers-reduced-motion`.
- **Transparency & blur:** only the sticky nav (`rgba(255,255,255,.85)` + 12px blur) when it sits over content. Scrim `rgba(10,22,38,.56)` behind dialogs.
- **Focus:** 3px gold ring at 45% (`--focus-ring`), no outline.
- **Imagery:** cool, desaturated blue-grey; gold as the only warm note; studio stills of objects, maps, documents. Avoid warm, saturated, or people-heavy stock.
- **Iconography:** see below.

## Iconography

The brand source contains no icon font, sprite, or SVG icon set; the only vector asset is the logo. This system uses **Lucide** (CDN, 1.5px stroke, 20px default) as a substitute: its light, geometric stroke sits well with the hairline motif. Icons are always paired with a label or an `aria-label`; never decorative clusters. No emoji, no unicode glyphs as icons (arrows in links use the Lucide `arrow-right`, not `→`). See `components/media/Icon.jsx`.

Logos: `assets/logo/` holds the official "opc" wave wordmark in navy (`opcglobal-primary-blue.png`, the primary asset), gold (`opcglobal-yellow.png`), black, white, and a monochrome SVG (`opcglobal-vector.svg`). Do not redraw or recolour beyond these colourways. Minimum height 24px; clear space equal to the mark's height on all sides. On navy or deep-navy surfaces use the white mark; on paper use navy; gold is for print/ceremonial use.

## Components

No source defines a component inventory, so this system carries a standard set sized to the brand: **Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip.** Grouped under `components/actions`, `components/forms`, `components/surfaces`, `components/navigation`, `components/feedback`.

### Intentional additions
- `Logo` (`components/media`) — wraps the official asset so colourway and size are consistent.
- `Icon` (`components/media`) — Lucide wrapper with the brand stroke weight and size scale.

## UI kits

- `ui_kits/website/` — a three-screen web presence (Home, Standards, Membership) composed from the brand data and these components. **It is not a recreation of opcglobal.ai**, which could not be read; treat it as a brand-consistent starting point and replace with the real layouts once the site source is available.

## Index

- `styles.css` — the single global entry; imports `tokens/*.css`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css`, `tokens/base.css`.
- `guidelines/` — 21 foundation specimen cards: Colors (6), Type (6), Spacing (5), Brand (4).
- `assets/logo/` — official logo set (`opcglobal-primary-blue.png`, `-white.png`, `-yellow.png`, `-black.png`, `-vector.svg`). `assets/brand/opcglobal-brand-hero.jpg` — hero image (re-encoded from the 1.9 MB PNG).
- `components/actions/` — Button, IconButton · `components/forms/` — Input, Select, Checkbox, Radio, Switch · `components/surfaces/` — Card, Badge, Tag · `components/navigation/` — Tabs · `components/feedback/` — Dialog, Toast (+ ToastViewport), Tooltip · `components/media/` — Logo, Icon. Each folder: `.jsx`, `.d.ts`, `.prompt.md`, and a `*.card.html`.
- `ui_kits/website/` — Home, Standards, Membership screens + `index.html` + `README.md`.
- `thumbnail.html`, `github.md` (source association), `SKILL.md` (agent skill entry).
- Runtime namespace for cards and kits: `window.OPCGlobalDesignSystem_c086b9` (from the compiled `_ds_bundle.js`).

## Caveats

- **Fonts are substitutes.** The source ships no typography. Libre Caslon Text + Manrope + IBM Plex Mono (Google Fonts) were chosen here; swap in the licensed brand fonts when available and update `tokens/fonts.css` + `tokens/typography.css`. The CJK fallbacks (Noto Serif SC / Noto Sans SC) are named in the stacks but not loaded from Google Fonts — system CJK fonts render 欧匹赛全球联盟; add the Noto families to `tokens/fonts.css` if guaranteed glyphs matter more than payload.
- **Icons are substitutes** (Lucide).
- **The website kit is a proposal**, not a recreation; the live site was not readable.
- The master logo artwork (`master-ai.ai`) is private in the source and was not imported.
