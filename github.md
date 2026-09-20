repo: ksamint/dsys_opcglobal
branch: main

## Last sync
date: 2026-09-20T04:38:15Z

### Updated in this project
- Palette tokens from `data/theme.json` (primary, accent, secondary, surface, paper, ink, muted, line)
- Brand profile, names, tracks, and audiences from `data/brand.json` / `data/config.json`
- Official logo set and brand hero copied from the `media.apuch.art` URLs listed in `data/brand.json`
- Upstream `ksamint/tableai_designaha` (`OPCGLOBAL/`) checked: holds only `adobe-assets/opcglobal-logo.json`

## Screen map
| Screen / file | Repo files |
| --- | --- |
| tokens/colors.css | data/theme.json, data/brand.json (theme) |
| readme.md (context, content, foundations) | README.md, data/brand.json, data/config.json, data/ip.json |
| assets/logo/*, assets/brand/opcglobal-brand-hero.jpg | data/brand.json (images / assetManifest mediaUrl) |
| components/media/Logo.jsx | data/brand.json (images) |
| ui_kits/website/* | data/brand.json (intro, business, tracks, audiences) — layouts are proposals, not from the repo |
