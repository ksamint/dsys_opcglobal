import React from "react";

/** Paper card with hairline border, 4px radius, 24px padding. No shadow. */
export function Card({ eyebrow, title, description, media, footer, tone = "paper", padding = 24, interactive = false, href, onClick, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === "navy";
  const bg = tone === "surface" ? "var(--opc-surface)" : dark ? "var(--opc-navy)" : "var(--opc-paper)";
  const border = dark ? "1px solid transparent" : "1px solid " + (interactive && hover ? "var(--opc-line-strong)" : "var(--opc-line)");
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", background: bg, border, borderRadius: "var(--radius-md)", overflow: "hidden", color: dark ? "#fff" : "var(--text-body)", textDecoration: "none", cursor: interactive || href || onClick ? "pointer" : "default", transition: "border-color var(--dur-base) var(--ease-out)", fontFamily: "var(--font-sans)", ...style }} {...rest}>
      {media && <div style={{ display: "block", lineHeight: 0, borderBottom: dark ? "none" : "1px solid var(--opc-line)" }}>{media}</div>}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding, flex: 1 }}>
        {eyebrow && <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: dark ? "var(--opc-gold)" : "var(--opc-gold-deep)" }}>{eyebrow}</div>}
        {title && <div style={{ font: "var(--type-h3)", color: dark ? "#fff" : "var(--text-heading)" }}>{title}</div>}
        {description && <div style={{ font: "var(--type-body)", color: dark ? "rgba(255,255,255,0.78)" : "var(--text-muted)" }}>{description}</div>}
        {children}
      </div>
      {footer && <div style={{ padding: "0 " + padding + "px " + padding + "px", display: "flex", alignItems: "center", gap: 12 }}>{footer}</div>}
    </Tag>
  );
}
