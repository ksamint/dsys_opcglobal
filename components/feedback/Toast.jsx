import React from "react";
import { Icon } from "../media/Icon.jsx";
import { IconButton } from "../actions/IconButton.jsx";

const TONES = {
  neutral: { icon: "info", color: "var(--opc-navy)" },
  success: { icon: "check-circle-2", color: "var(--opc-success)" },
  warning: { icon: "alert-triangle", color: "#8A6F3B" },
  danger: { icon: "alert-circle", color: "var(--opc-danger)" },
};

/** Transient notification: paper, hairline, shadow-2, tone icon (never a coloured edge). */
export function Toast({ tone = "neutral", title, description, action, onDismiss, dismissLabel = "Dismiss", duration, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const dismissRef = React.useRef(onDismiss);
  dismissRef.current = onDismiss;
  React.useEffect(() => {
    if (!duration) return;
    const id = setTimeout(() => dismissRef.current && dismissRef.current(), duration);
    return () => clearTimeout(id);
  }, [duration]);
  return (
    <div role="status" aria-live="polite" style={{ display: "flex", alignItems: "flex-start", gap: 12, width: 360, maxWidth: "100%", boxSizing: "border-box", padding: 16, background: "var(--opc-paper)", border: "1px solid var(--opc-line)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-2)", fontFamily: "var(--font-sans)", color: "var(--text-body)", ...style }} {...rest}>
      <span style={{ display: "inline-flex", color: t.color, flex: "none", marginTop: 1 }}><Icon name={t.icon} /></span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: "var(--text-base)", fontWeight: 600, lineHeight: 1.35 }}>{title}</div>}
        {description && <div style={{ fontSize: "var(--text-sm)", lineHeight: 1.45, color: "var(--text-muted)" }}>{description}</div>}
        {action && <button type="button" onClick={action.onClick} style={{ alignSelf: "flex-start", marginTop: 4, padding: 0, border: 0, background: "none", color: "var(--opc-navy)", fontFamily: "inherit", fontSize: "var(--text-sm)", fontWeight: 600, cursor: "pointer", textDecoration: "underline", textDecorationColor: "var(--opc-gold)", textUnderlineOffset: 3 }}>{action.label}</button>}
      </div>
      {onDismiss && <IconButton label={dismissLabel} size="sm" onClick={onDismiss} style={{ margin: "-6px -6px -6px 0" }}><Icon name="x" size="sm" /></IconButton>}
    </div>
  );
}

/** Fixed stack for toasts, bottom-right by default. */
export function ToastViewport({ position = "bottom-right", children, style }) {
  const [v, h] = position.split("-");
  return (
    <div style={{ position: "fixed", zIndex: 1100, [v]: 24, [h]: 24, display: "flex", flexDirection: v === "bottom" ? "column-reverse" : "column", gap: 8, pointerEvents: "none", ...style }}>
      {React.Children.map(children, (c) => <div style={{ pointerEvents: "auto" }}>{c}</div>)}
    </div>
  );
}
