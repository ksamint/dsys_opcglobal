import React from "react";

/** Hover/focus tooltip: deep navy, 13px white text, 4px radius, no arrow. */
export function Tooltip({ content, placement = "top", delay = 120, style, children }) {
  const [open, setOpen] = React.useState(false);
  const [vis, setVis] = React.useState(false);
  const timer = React.useRef(null);
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => { setOpen(true); setTimeout(() => setVis(true), 16); }, delay); };
  const hide = () => { clearTimeout(timer.current); setVis(false); timer.current = setTimeout(() => setOpen(false), 160); };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const pos = placement === "bottom" ? { top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%) translateY(" + (vis ? 0 : -4) + "px)" }
    : placement === "left" ? { right: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%) translateX(" + (vis ? 0 : 4) + "px)" }
    : placement === "right" ? { left: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%) translateX(" + (vis ? 0 : -4) + "px)" }
    : { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%) translateY(" + (vis ? 0 : 4) + "px)" };
  return (
    <span onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} style={{ position: "relative", display: "inline-flex", ...style }}>
      {children}
      {open && (
        <span role="tooltip" style={{ position: "absolute", zIndex: 1200, pointerEvents: "none", padding: "6px 10px", background: "var(--opc-navy-deep)", color: "#fff", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-2)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.4, whiteSpace: "nowrap", opacity: vis ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)", ...pos }}>
          {content}
        </span>
      )}
    </span>
  );
}
