import React from "react";

/** 18px radio with label and optional description. Group radios with the same `name`. */
export function Radio({ label, description, name, value, checked, defaultChecked = false, disabled = false, onChange, id, style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = controlled ? checked : inner;
  const [hover, setHover] = React.useState(false);
  const uid = React.useId ? React.useId() : undefined;
  const rid = id || (uid ? "opc-radio-" + uid.replace(/:/g, "") : undefined);
  return (
    <label htmlFor={rid} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", ...style }}>
      <span style={{ position: "relative", flex: "none", width: 18, height: 18, marginTop: 1 }}>
        <input id={rid} type="radio" name={name} value={value} disabled={disabled} checked={on}
          onChange={(e) => { if (!controlled) setInner(e.target.checked); onChange && onChange(e); }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "inherit" }} {...rest} />
        <span aria-hidden="true" style={{ position: "absolute", inset: 0, boxSizing: "border-box", borderRadius: "50%", border: (on ? "2px" : "1px") + " solid " + (on ? "var(--opc-navy)" : "var(--opc-line-strong)"), background: hover && !on ? "var(--opc-surface)" : "var(--opc-paper)", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color var(--dur-fast) var(--ease-out)" }}>
          {on && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--opc-navy)" }} />}
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
