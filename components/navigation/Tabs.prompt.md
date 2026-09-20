Switch between peer views on one page (Overview / Standards / Members). Underline for page sections; segmented for compact filters.

```jsx
<Tabs items={[{id:'all',label:'All standards',count:24},{id:'draft',label:'Draft',count:6},{id:'ratified',label:'Ratified',count:18}]} value={tab} onChange={setTab} />
<Tabs variant="segmented" size="sm" items={[{id:'list',label:'List'},{id:'map',label:'Map'}]} defaultValue="list" />
```
