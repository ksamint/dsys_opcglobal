import React from "react";

/** Tab list. `underline` (default): hairline with a 2px gold rule under the active tab. `segmented`: pill group on a surface track. */
export function Tabs({ items = [], value, defaultValue, onChange, variant = "underline", size = "md", fullWidth = false, style, ...rest }) {
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : items[0] && items[0].id);
  const current = controlled ? value : inner;
  const [hover, setHover] = React.useState(null);
  const select = (id) => { if (!controlled) setInner(id); onChange && onChange(id); };
  const onKey = (e, idx) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    let n = idx;
    for (let i = 0; i < items.length; i++) { n = (n + dir + items.length) % items.length; if (!items[n].disabled) break; }
    select(items[n].id);
    const btn = e.currentTarget.parentElement.querySelectorAll("[role=tab]")[n];
    btn && btn.focus();
  };
  const seg = variant === "segmented";
  const h = size === "sm" ? 32 : 40;
  return (
    <div role="tablist" style={{ display: "flex", alignItems: "stretch", gap: seg ? 4 : 0, padding: seg ? 4 : 0, boxSizing: "border-box", width: fullWidth ? "100%" : undefined, borderBottom: seg ? "none" : "1px solid var(--opc-line)", background: seg ? "var(--opc-surface)" : "transparent", borderRadius: seg ? "var(--radius-md)" : 0, fontFamily: "var(--font-sans)", ...style }} {...rest}>
      {items.map((it, idx) => {
        const active = it.id === current;
        const hov = hover === it.id && !it.disabled;
        const color = it.disabled ? "var(--text-faint)" : active || hov ? "var(--opc-navy)" : "var(--text-muted)";
        return (
          <button key={it.id} type="button" role="tab" aria-selected={active} aria-controls={it.panelId} tabIndex={active ? 0 : -1} disabled={it.disabled}
            onClick={() => !it.disabled && select(it.id)} onKeyDown={(e) => onKey(e, idx)} onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
            style={{ position: "relative", flex: fullWidth ? 1 : "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, height: seg ? h - 8 : h, padding: seg ? "0 14px" : "0 4px", marginRight: seg ? 0 : 24, marginBottom: seg ? 0 : -1, border: 0, borderRadius: seg ? "var(--radius-sm)" : 0, background: seg ? (active ? "var(--opc-paper)" : hov ? "var(--opc-surface-2)" : "transparent") : "transparent", boxShadow: seg && active ? "var(--shadow-1)" : "none", color, fontSize: size === "sm" ? "var(--text-sm)" : "var(--text-base)", fontWeight: 600, lineHeight: 1, cursor: it.disabled ? "not-allowed" : "pointer", whiteSpace: "nowrap", transition: "color var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out)" }}>
            {it.icon}
            <span>{it.label}</span>
            {it.count !== undefined && <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, padding: "1px 6px", borderRadius: "var(--radius-pill)", background: active ? "var(--opc-navy-tint)" : "var(--opc-surface-2)", color: active ? "var(--opc-navy)" : "var(--text-muted)" }}>{it.count}</span>}
            {!seg && <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: active ? "var(--opc-gold)" : hov ? "var(--opc-line-strong)" : "transparent", transition: "background-color var(--dur-base) var(--ease-out)" }} />}
          </button>
        );
      })}
    </div>
  );
}
