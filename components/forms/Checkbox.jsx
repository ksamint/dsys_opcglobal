import React from "react";
import { Icon } from "../media/Icon.jsx";

/** 18px square checkbox with label and optional description. */
export function Checkbox({ label, description, checked, defaultChecked = false, indeterminate = false, disabled = false, onChange, id, style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = controlled ? checked : inner;
  const [hover, setHover] = React.useState(false);
  const uid = React.useId ? React.useId() : undefined;
  const cid = id || (uid ? "opc-cb-" + uid.replace(/:/g, "") : undefined);
  const filled = on || indeterminate;
  return (
    <label htmlFor={cid} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", ...style }}>
      <span style={{ position: "relative", flex: "none", width: 18, height: 18, marginTop: 1 }}>
        <input id={cid} type="checkbox" disabled={disabled} checked={on} aria-checked={indeterminate ? "mixed" : on}
          onChange={(e) => { if (!controlled) setInner(e.target.checked); onChange && onChange(e); }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "inherit" }} {...rest} />
        <span aria-hidden="true" style={{ position: "absolute", inset: 0, boxSizing: "border-box", borderRadius: "var(--radius-sm)", border: "1px solid " + (filled ? "var(--opc-navy)" : hover ? "var(--opc-line-strong)" : "var(--opc-line-strong)"), background: filled ? "var(--opc-navy)" : hover ? "var(--opc-surface)" : "var(--opc-paper)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)" }}>
          {indeterminate ? <span style={{ width: 10, height: 2, background: "#fff", borderRadius: 1 }} /> : on ? <Icon name="check" size={14} strokeWidth={2.5} color="#fff" /> : null}
        </span>
      </span>
      {(label || description) && (
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {label && <span style={{ fontSize: "var(--text-base)", lineHeight: 1.35, color: "var(--text-body)" }}>{label}</span>}
          {description && <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.4, color: "var(--text-muted)" }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
