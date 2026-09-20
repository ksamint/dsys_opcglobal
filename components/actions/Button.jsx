import React from "react";

const SIZES = {
  sm: { height: "var(--control-sm)", padding: "0 12px", fontSize: "var(--text-sm)", gap: 6 },
  md: { height: "var(--control-md)", padding: "0 16px", fontSize: "var(--text-base)", gap: 8 },
  lg: { height: "var(--control-lg)", padding: "0 20px", fontSize: "var(--text-base)", gap: 8 },
};

function palette(variant, hover, active) {
  switch (variant) {
    case "secondary":
      return { background: active ? "var(--opc-surface-2)" : hover ? "var(--opc-surface)" : "var(--opc-paper)", color: "var(--opc-navy)", border: "1px solid " + (hover || active ? "var(--opc-line-strong)" : "var(--opc-line)") };
    case "ghost":
      return { background: active ? "var(--opc-surface-2)" : hover ? "var(--opc-surface)" : "transparent", color: "var(--opc-navy)", border: "1px solid transparent" };
    case "danger":
      return { background: active ? "#7E2F2F" : hover ? "#8F3636" : "var(--opc-red)", color: "#fff", border: "1px solid transparent" };
    case "inverse":
      return { background: active ? "var(--opc-surface-2)" : hover ? "var(--opc-surface)" : "#fff", color: "var(--opc-navy)", border: "1px solid transparent" };
    case "gold":
      return { background: active ? "#94794A" : hover ? "var(--opc-gold-deep)" : "var(--opc-gold)", color: "#fff", border: "1px solid transparent" };
    default:
      return { background: active ? "var(--opc-navy-active)" : hover ? "var(--opc-navy-hover)" : "var(--opc-navy)", color: "#fff", border: "1px solid transparent" };
  }
}

/** Primary action control. Sentence-case label, optional leading/trailing icon. */
export function Button({ variant = "primary", size = "md", leading, trailing, fullWidth = false, disabled = false, href, type = "button", style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const p = palette(variant, hover && !disabled, active && !disabled);
  const styles = {
    display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined, alignItems: "center", justifyContent: "center", gap: s.gap,
    height: s.height, padding: s.padding, boxSizing: "border-box", borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-sans)", fontSize: s.fontSize, fontWeight: 600, lineHeight: 1, letterSpacing: 0, whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, textDecoration: "none", userSelect: "none",
    transition: "background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
    ...p, ...style,
  };
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true), onMouseUp: () => setActive(false),
  };
  const content = <>{leading}<span>{children}</span>{trailing}</>;
  if (href && !disabled) return <a href={href} style={styles} {...handlers} {...rest}>{content}</a>;
  return <button type={type} disabled={disabled} style={styles} {...handlers} {...rest}>{content}</button>;
}
