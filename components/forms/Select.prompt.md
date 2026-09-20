Dropdown for short, known option lists (region, membership tier, standard category).

```jsx
<Select label="Region" placeholder="Select a region" options={["Asia-Pacific","Europe","Americas","Middle East & Africa"]} />
<Select label="Membership tier" options={[{value:"inst",label:"Alliance institution"},{value:"partner",label:"International partner"}]} defaultValue="inst" />
```
