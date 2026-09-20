Topic and filter chips (regions, tracks, standard categories). Badge is for status; Tag is for things the user picks.

```jsx
<Tag>Asia-Pacific</Tag>
<Tag selected onSelect={() => toggle('standards')}>Standards</Tag>
<Tag onRemove={() => remove('europe')}>Europe</Tag>
```
