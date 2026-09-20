import React from "react";

export const fieldLabelStyle = { display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-body)", marginBottom: 6 };
export const fieldHintStyle = { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 6, lineHeight: 1.4 };

/** Text input with label, hint, error, and optional adornments. */
export function Input({ label, hint, error, size = "md", leading, trailing, disabled = false, required = false, fullWidth = true, id, style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const uid = React.useId ? React.useId() : undefined;
  const inputId = id || (uid ? "opc-input-" + uid.replace(/:/g, "") : undefined);
  const height = size === "sm" ? "var(--control-sm)" : size === "lg" ? "var(--control-lg)" : "var(--control-md)";
  const border = error ? "var(--opc-red)" : focus ? "var(--opc-navy)" : hover ? "var(--opc-line-strong)" : "var(--opc-line)";
  return (
    <div style={{ width: fullWidth ? "100%" : undefined, ...style }}>
      {label && <label htmlFor={inputId} style={fieldLabelStyle}>{label}{required && <span style={{ color: "var(--opc-red)", marginLeft: 4 }}>*</span>}</label>}
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: "flex", alignItems: "center", gap: 8, height, padding: "0 12px", boxSizing: "border-box", background: disabled ? "var(--opc-surface)" : "var(--opc-paper)", border: "1px solid " + border, borderRadius: "var(--radius-md)", boxShadow: focus ? "var(--focus-ring)" : "none", color: "var(--text-body)", opacity: disabled ? 0.7 : 1, transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
        {leading && <span style={{ display: "inline-flex", color: "var(--text-muted)", flex: "none" }}>{leading}</span>}
        <input id={inputId} disabled={disabled} required={required} aria-invalid={!!error || undefined} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, height: "100%", border: 0, outline: "none", background: "transparent", boxShadow: "none", padding: 0, fontFamily: "var(--font-sans)", fontSize: size === "sm" ? "var(--text-sm)" : "var(--text-base)", color: "inherit", ...inputStyle }} {...rest} />
        {trailing && <span style={{ display: "inline-flex", color: "var(--text-muted)", flex: "none" }}>{trailing}</span>}
      </div>
      {error ? <div role="alert" style={{ ...fieldHintStyle, color: "var(--opc-red)" }}>{error}</div> : hint ? <div style={fieldHintStyle}>{hint}</div> : null}
    </div>
  );
}
