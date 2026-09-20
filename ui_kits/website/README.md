# Website kit — opcglobal.ai

Three interactive screens composed from the brand data in `ksamint/dsys_opcglobal` and this system's components. **Not a recreation of the live site**: opcglobal.ai is JavaScript-rendered and only its title ("OPC Global - One Person Company Alliance") could be read. Replace these layouts with the real ones once the site source or screenshots are available.

- `index.html` — entry; sticky nav switches between screens (hash routed), EN/中文 toggle swaps the nav and hero copy.
- `Chrome.jsx` — `Container`, `Eyebrow`, `PageHeader`, `SiteNav`, `SiteFooter`.
- `Home.jsx` — hero on the brand image with navy protection gradient, three tracks, bilingual statement band, latest standards, membership call.
- `Standards.jsx` — library with status Tabs (counts), search, track Tags, row list opening a detail Dialog, notification Switches.
- `Membership.jsx` — tier Radio cards and a validated application form (Input, Select, Checkbox, Switch) → confirm Dialog → success Toast.
- `data.js` — sample content. Standard titles are placeholders derived from the three tracks; copy marked as brand text comes verbatim from the source.

Components come from `window.OPCGlobalDesignSystem_c086b9` (the compiled bundle); nothing here re-implements a primitive.
