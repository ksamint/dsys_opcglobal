import React from "react";
import { Icon } from "../media/Icon.jsx";

/** Interactive chip for filters and topics; selectable and/or removable. */
export function Tag({ selected = false, onSelect, onRemove, disabled = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onSelect && !disabled;
  const bg = selected ? "var(--opc-navy)" : hover && clickable ? "var(--opc-surface-2)" : "var(--opc-navy-tint)";
  const fg = selected ? "#fff" : "var(--opc-navy)";
  const Root = clickable ? "button" : "span";
  return (
    <Root type={clickable ? "button" : undefined} onClick={clickable ? onSelect : undefined} aria-pressed={clickable ? selected : undefined} disabled={clickable ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 28, padding: onRemove ? "0 6px 0 12px" : "0 12px", boxSizing: "border-box", borderRadius: "var(--radius-pill)", border: 0, background: bg, color: fg, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 600, lineHeight: 1, whiteSpace: "nowrap", cursor: clickable ? "pointer" : "default", opacity: disabled ? 0.5 : 1, transition: "background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)", ...style }} {...rest}>
      {children}
      {onRemove && (
        <span role="button" tabIndex={0} aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(); }} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRemove(); } }}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", color: "inherit", opacity: 0.8, cursor: "pointer" }}>
          <Icon name="x" size={12} strokeWidth={2} />
        </span>
      )}
    </Root>
  );
}
