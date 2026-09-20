import React from "react";

const CDN = "https://media.apuch.art/public/opcglobal/";
const FILES = {
  navy: ["opcglobal-primary-blue.png", CDN + "opcglobal-hero-primary-blue-c970696e04ab/c970696e04ab2859dd66c7b85c2c1b461d06ede4e2d65ec6a97d9c11db1396b3/original.png"],
  white: ["opcglobal-white.png", CDN + "opcglobal-logo-white-transparent-f1f76209c767/f1f76209c76744d1e9f7b4b692ab6f3b01e4df4e0e3b2a3cbb6e310be02dc8fe/original.png"],
  gold: ["opcglobal-yellow.png", CDN + "opcglobal-logo-yellow-transparent-9f71f58faaf3/9f71f58faaf3a693e9777af9cd6401cf46d927e7f78effd5b0a4d1eb1a9ba87d/original.png"],
  black: ["opcglobal-black.png", CDN + "opcglobal-logo-black-transparent-ca9f06b66f58/ca9f06b66f583a3c3eb8261316dfd299790f1f614fdcdf7a7d3965f3fd8000ed/original.png"],
  mono: ["opcglobal-vector.svg", CDN + "opcglobal-logo-vector-b58c3be7390a/b58c3be7390a1b625de8ad7d5c953fe8b95d1467692977c338c9b255f266502c/original.svg"],
};

/** Official OPC Global wave wordmark in one of the four sanctioned colourways. */
export function Logo({ variant = "navy", height = 40, withName = false, bilingual = false, assetsBase, style, ...rest }) {
  const [file, cdn] = FILES[variant] || FILES.navy;
  const src = assetsBase ? assetsBase.replace(/\/$/, "") + "/" + file : cdn;
  const onDark = variant === "white" || variant === "gold";
  const nameColor = onDark ? "#FFFFFF" : "var(--text-heading)";
  const subColor = onDark ? "rgba(255,255,255,0.72)" : "var(--text-muted)";
  const img = <img src={src} alt={withName ? "" : "OPC Global"} style={{ height, width: "auto", display: "block", flex: "none" }} />;
  if (!withName) return <span style={{ display: "inline-flex", alignItems: "center", ...style }} {...rest}>{img}</span>;
  const nameSize = Math.max(14, Math.round(height * 0.42));
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: Math.round(height * 0.3), ...style }} {...rest}>
      {img}
      <span style={{ display: "flex", flexDirection: "column", gap: 2, borderLeft: "1px solid var(--opc-line-gold)", paddingLeft: Math.round(height * 0.3), lineHeight: 1.15 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: nameSize, color: nameColor, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>OPC Global</span>
        {bilingual && <span style={{ fontFamily: "var(--font-sans)", fontSize: Math.max(11, Math.round(nameSize * 0.72)), color: subColor, whiteSpace: "nowrap" }}>欧匹赛全球联盟</span>}
      </span>
    </span>
  );
}
