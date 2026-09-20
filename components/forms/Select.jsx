import React from "react";
import { Icon } from "../media/Icon.jsx";
import { fieldLabelStyle, fieldHintStyle } from "./Input.jsx";

/** Native select styled as an Input, with a Lucide chevron. */
export function Select({ label, hint, error, options = [], placeholder, size = "md", disabled = false, required = false, fullWidth = true, id, value, defaultValue, onChange, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const uid = React.useId ? React.useId() : undefined;
  const selectId = id || (uid ? "opc-select-" + uid.replace(/:/g, "") : undefined);
  const height = size === "sm" ? "var(--control-sm)" : size === "lg" ? "var(--control-lg)" : "var(--control-md)";
  const border = error ? "var(--opc-red)" : focus ? "var(--opc-navy)" : hover ? "var(--opc-line-strong)" : "var(--opc-line)";
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue === undefined ? "" : defaultValue);
  const current = controlled ? value : inner;
  return (
    <div style={{ width: fullWidth ? "100%" : undefined, ...style }}>
      {label && <label htmlFor={selectId} style={fieldLabelStyle}>{label}{required && <span style={{ color: "var(--opc-red)", marginLeft: 4 }}>*</span>}</label>}
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ position: "relative", display: "flex", alignItems: "center", height, boxSizing: "border-box", background: disabled ? "var(--opc-surface)" : "var(--opc-paper)", border: "1px solid " + border, borderRadius: "var(--radius-md)", boxShadow: focus ? "var(--focus-ring)" : "none", opacity: disabled ? 0.7 : 1, transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
        <select id={selectId} disabled={disabled} required={required} aria-invalid={!!error || undefined} value={current} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onChange={(e) => { if (!controlled) setInner(e.target.value); onChange && onChange(e); }}
          style={{ appearance: "none", WebkitAppearance: "none", width: "100%", height: "100%", border: 0, outline: "none", background: "transparent", padding: "0 36px 0 12px", fontFamily: "var(--font-sans)", fontSize: size === "sm" ? "var(--text-sm)" : "var(--text-base)", color: current === "" ? "var(--text-faint)" : "var(--text-body)", cursor: disabled ? "not-allowed" : "pointer" }} {...rest}>
          {placeholder !== undefined && <option value="">{placeholder}</option>}
          {options.map((o) => (typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>))}
        </select>
        <span style={{ position: "absolute", right: 10, top: 0, bottom: 0, display: "flex", alignItems: "center", pointerEvents: "none", color: "var(--text-muted)" }}><Icon name="chevron-down" size={size === "sm" ? "sm" : "md"} /></span>
      </div>
      {error ? <div role="alert" style={{ ...fieldHintStyle, color: "var(--opc-red)" }}>{error}</div> : hint ? <div style={fieldHintStyle}>{hint}</div> : null}
    </div>
  );
}
