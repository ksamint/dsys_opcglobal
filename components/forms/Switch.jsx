import React from "react";

/** 36×20 toggle. Navy when on. */
export function Switch({ label, description, checked, defaultChecked = false, disabled = false, onChange, id, labelPosition = "end", style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = controlled ? checked : inner;
  const uid = React.useId ? React.useId() : undefined;
  const sid = id || (uid ? "opc-sw-" + uid.replace(/:/g, "") : undefined);
  const track = (
    <span style={{ position: "relative", flex: "none", width: 36, height: 20 }}>
      <input id={sid} type="checkbox" role="switch" aria-checked={on} disabled={disabled} checked={on}
        onChange={(e) => { if (!controlled) setInner(e.target.checked); onChange && onChange(e); }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "inherit" }} {...rest} />
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, boxSizing: "border-box", borderRadius: "var(--radius-pill)", background: on ? "var(--opc-navy)" : "var(--opc-surface-2)", border: "1px solid " + (on ? "var(--opc-navy)" : "var(--opc-line-strong)"), transition: "background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
        <span style={{ position: "absolute", top: 1, left: on ? 17 : 1, width: 16, height: 16, borderRadius: "50%", background: "#fff", boxShadow: "var(--shadow-1)", transition: "left var(--dur-base) var(--ease-out)" }} />
      </span>
    </span>
  );
  const text = (label || description) && (
    <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {label && <span style={{ fontSize: "var(--text-base)", lineHeight: 1.35, color: "var(--text-body)" }}>{label}</span>}
      {description && <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.4, color: "var(--text-muted)" }}>{description}</span>}
    </span>
  );
  return (
    <label htmlFor={sid} style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", ...style }}>
      {labelPosition === "start" ? <>{text}{track}</> : <>{track}{text}</>}
    </label>
  );
}
