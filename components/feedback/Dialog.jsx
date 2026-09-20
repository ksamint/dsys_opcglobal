import React from "react";
import { Icon } from "../media/Icon.jsx";
import { IconButton } from "../actions/IconButton.jsx";

const WIDTHS = { sm: 480, md: 600, lg: 760 };

/** Modal dialog: navy scrim, paper panel, 8px radius, shadow-3, 240ms fade + 4px rise. Esc and scrim click close. */
export function Dialog({ open, onClose, title, description, footer, size = "md", closeLabel = "Close", hideClose = false, style, children }) {
  const [shown, setShown] = React.useState(false);
  const [entered, setEntered] = React.useState(false);
  const panelRef = React.useRef(null);
  const rawId = React.useId ? React.useId() : "dlg";
  const uid = rawId.replace(/:/g, "");
  React.useEffect(() => {
    let t;
    if (open) { setShown(true); t = setTimeout(() => setEntered(true), 16); }
    else { setEntered(false); t = setTimeout(() => setShown(false), 240); }
    return () => clearTimeout(t);
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = panelRef.current && panelRef.current.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    focusable && focusable.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);
  if (!shown) return null;
  return (
    <div onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "var(--overlay-scrim)", opacity: entered ? 1 : 0, transition: "opacity var(--dur-slow) var(--ease-out)" }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={title ? "dlg-t-" + uid : undefined} aria-describedby={description ? "dlg-d-" + uid : undefined}
        style={{ position: "relative", width: "100%", maxWidth: WIDTHS[size] || WIDTHS.md, maxHeight: "calc(100vh - 48px)", display: "flex", flexDirection: "column", boxSizing: "border-box", background: "var(--opc-paper)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-3)", fontFamily: "var(--font-sans)", color: "var(--text-body)", transform: entered ? "translateY(0)" : "translateY(4px)", opacity: entered ? 1 : 0, transition: "transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)", ...style }}>
        {!hideClose && <span style={{ position: "absolute", top: 16, right: 16 }}><IconButton label={closeLabel} onClick={onClose}><Icon name="x" /></IconButton></span>}
        {(title || description) && (
          <div style={{ padding: "32px 32px 0", paddingRight: hideClose ? 32 : 64, display: "flex", flexDirection: "column", gap: 8 }}>
            {title && <h2 id={"dlg-t-" + uid} style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-xl)", lineHeight: 1.25, color: "var(--text-heading)" }}>{title}</h2>}
            {description && <p id={"dlg-d-" + uid} style={{ margin: 0, font: "var(--type-body)", color: "var(--text-muted)" }}>{description}</p>}
          </div>
        )}
        {children && <div style={{ padding: "24px 32px 0", overflowY: "auto", font: "var(--type-body)" }}>{children}</div>}
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: 32, paddingTop: 24 }}>{footer}</div>}
        {!footer && <div style={{ height: 32 }} />}
      </div>
    </div>
  );
}
