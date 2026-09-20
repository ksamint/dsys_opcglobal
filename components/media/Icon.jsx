import React from "react";

const LUCIDE_SRC = "https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js";
let lucidePromise = null;
export function ensureLucide() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.lucide && window.lucide.icons) return Promise.resolve(window.lucide);
  if (!lucidePromise) {
    lucidePromise = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = LUCIDE_SRC;
      s.async = true;
      s.onload = () => resolve(window.lucide || null);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    });
  }
  return lucidePromise;
}

const toPascal = (n) => String(n || "").split(/[-_\s]+/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
const SIZES = { sm: 16, md: 20, lg: 24, xl: 32 };

/** Lucide icon rendered with the brand stroke (1.5) — substitute icon set, see readme Iconography. */
export function Icon({ name, size = "md", strokeWidth = 1.5, color = "currentColor", label, style, ...rest }) {
  const [lib, setLib] = React.useState(() => (typeof window !== "undefined" && window.lucide && window.lucide.icons ? window.lucide : null));
  React.useEffect(() => { if (!lib) ensureLucide().then((l) => l && setLib(l)); }, [lib]);
  const px = typeof size === "number" ? size : SIZES[size] || 20;
  let node = lib && lib.icons ? lib.icons[toPascal(name)] : null;
  if (node && node[0] === "svg") node = node[2]; // legacy ['svg', attrs, children] shape
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  const base = { display: "inline-block", flex: "none", verticalAlign: "middle", ...style };
  if (!node) return <span style={{ ...base, width: px, height: px }} {...a11y} />;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={px} height={px} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={base} {...a11y} {...rest}>
      {node.map(([tag, attrs], i) => React.createElement(tag, { ...attrs, key: i }))}
    </svg>
  );
}
