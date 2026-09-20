Lucide icon wrapper with the brand's 1.5px stroke; use for every glyph in UI (never emoji or unicode arrows).

```jsx
<Icon name="globe" />
<Icon name="arrow-right" size="sm" />
<Icon name="check" size={14} strokeWidth={2.5} color="#fff" />
<Icon name="alert-triangle" label="Warning" color="var(--opc-red)" />
```

- `size`: `sm` 16 · `md` 20 (default) · `lg` 24 · `xl` 32 · or a number.
- Always pair with a text label or pass `label` for standalone icons.
- Common names: globe, users, file-text, shield-check, arrow-right, chevron-down, check, x, search, menu, mail, map-pin, layers, handshake.
