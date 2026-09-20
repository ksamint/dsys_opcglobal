import React from "react";

const SIZES = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" };

/** Square icon-only button. `label` is required and becomes the aria-label. */
export function IconButton({ label, variant = "ghost", size = "md", disabled = false, selected = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const h = hover && !disabled, a = active && !disabled;
  let p;
  if (variant === "primary") p = { background: a ? "var(--opc-navy-active)" : h ? "var(--opc-navy-hover)" : "var(--opc-navy)", color: "#fff", border: "1px solid transparent" };
  else if (variant === "secondary") p = { background: a ? "var(--opc-surface-2)" : h ? "var(--opc-surface)" : "var(--opc-paper)", color: "var(--opc-navy)", border: "1px solid " + (h ? "var(--opc-line-strong)" : "var(--opc-line)") };
  else if (variant === "inverse") p = { background: a ? "rgba(255,255,255,0.24)" : h ? "rgba(255,255,255,0.16)" : "transparent", color: "#fff", border: "1px solid transparent" };
  else p = { background: selected ? "var(--opc-navy-tint)" : a ? "var(--opc-surface-2)" : h ? "var(--opc-surface)" : "transparent", color: selected ? "var(--opc-navy)" : "var(--opc-muted)", border: "1px solid transparent" };
  if (variant === "ghost" && h) p.color = "var(--opc-navy)";
  const dim = SIZES[size] || SIZES.md;
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={selected || undefined} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }} onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim, padding: 0, boxSizing: "border-box", borderRadius: "var(--radius-md)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, transition: "background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)", ...p, ...style }} {...rest}>
      {children}
    </button>
  );
}
