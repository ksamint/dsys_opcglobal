Standard action button; one primary per view, secondary for the alternative, ghost for tertiary actions in toolbars and cards.

```jsx
<Button>Apply for membership</Button>
<Button variant="secondary" trailing={<Icon name="arrow-right" />}>Read the standard</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="inverse">Join the alliance</Button>   // on navy bands
<Button variant="danger">Withdraw application</Button>
<Button href="/standards" fullWidth>Browse standards</Button>
```

- Labels are sentence case, verbs first, no trailing punctuation.
- Hover darkens, press darkens further; no scale or lift. Disabled = 45% opacity.
