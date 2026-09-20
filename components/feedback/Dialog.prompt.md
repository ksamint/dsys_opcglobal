Modal for confirmations and short forms (submit application, withdraw, sign in). One primary action, ghost cancel.

```jsx
<Dialog open={open} onClose={() => setOpen(false)} title="Submit application?" description="The standards team reviews applications within five working days."
  footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={submit}>Submit</Button></>}>
  <Checkbox label="I agree to the membership charter" />
</Dialog>
```
