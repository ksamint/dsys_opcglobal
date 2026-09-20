The official OPC Global wordmark; use wherever the brand mark appears (nav, footer, slides, documents).

```jsx
<Logo />                                   // navy mark, 40px
<Logo variant="white" height={32} withName />
<Logo variant="gold" height={64} withName bilingual />
<Logo assetsBase="../../assets/logo" />    // local files instead of the CDN
```

- Variants: `navy` (paper backgrounds), `white` (navy backgrounds), `gold` (deep navy / ceremonial), `black` (mono print), `mono` (SVG).
- Minimum height 24px; keep clear space equal to the mark height.
