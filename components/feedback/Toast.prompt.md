Confirmation and error notices after an action (application submitted, draft saved). Stack them in a ToastViewport.

```jsx
<ToastViewport>
  {toasts.map(t => <Toast key={t.id} tone="success" title="Application submitted" description="Reference OPC-APP-2041." onDismiss={() => remove(t.id)} duration={6000} />)}
</ToastViewport>
<Toast tone="danger" title="Could not save" action={{label:'Retry', onClick: retry}} onDismiss={close} />
```
