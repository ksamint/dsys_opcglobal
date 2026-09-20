---
name: opc-global-design
description: Use this skill to generate well-branded interfaces and assets for OPC Global (欧匹赛全球联盟, One Person Company Alliance — "AI for Freedom."), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` → imports `tokens/*.css` (colours, type, spacing, fonts, base). Link this one file.
- Navy `#1D3557` primary, gold `#B79B63` accent (hairlines, eyebrows), red `#A23E3E` secondary/danger, paper/surface neutrals. Light mode only.
- Serif display (Libre Caslon Text) + sans UI (Manrope) + mono IDs (IBM Plex Mono) — Google Fonts substitutes; the brand ships no fonts.
- Logo files in `assets/logo/`; hero image in `assets/brand/`. Never redraw the mark.
- Components in `components/<group>/` with `.prompt.md` usage notes; website screens in `ui_kits/website/`.
- Voice: institutional, plain, sentence case, no emoji; English first, Chinese second.
