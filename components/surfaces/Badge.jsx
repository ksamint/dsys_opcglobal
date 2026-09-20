import React from "react";

const TONES = {
  neutral: { bg: "var(--opc-surface-2)", fg: "var(--opc-muted)" },
  info: { bg: "var(--opc-info-tint)", fg: "var(--opc-info)" },
  success: { bg: "var(--opc-success-tint)", fg: "var(--opc-success)" },
  warning: { bg: "var(--opc-warning-tint)", fg: "#8A6F3B" },
  danger: { bg: "var(--opc-danger-tint)", fg: "var(--opc-danger)" },
  navy: { bg: "var(--opc-navy)", fg: "#fff" },
  gold: { bg: "var(--opc-gold)", fg: "#fff" },
};

/** Status pill: 12px semibold, tint background, optional leading dot. */
export function Badge({ tone = "neutral", dot = false, size = "md", style, children, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === "sm";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: sm ? "2px 8px" : "3px 10px", borderRadius: "var(--radius-pill)", background: t.bg, color: t.fg, fontFamily: "var(--font-sans)", fontSize: sm ? 11 : "var(--text-xs)", fontWeight: 600, lineHeight: 1.4, whiteSpace: "nowrap", letterSpacing: "0.01em", ...style }} {...rest}>
      {dot && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", flex: "none" }} />}
      {children}
    </span>
  );
}
