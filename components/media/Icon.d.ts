import * as React from "react";

export type IconSize = "sm" | "md" | "lg" | "xl" | number;

/**
 * Lucide icon with the OPC Global stroke weight (1.5) and size scale (16/20/24/32).
 * Loads the Lucide UMD build on demand; renders an empty box of the right size until it arrives.
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  /** Lucide icon name in kebab-case or PascalCase, e.g. "arrow-right", "Globe". */
  name: string;
  /** sm 16 · md 20 · lg 24 · xl 32, or a pixel number. */
  size?: IconSize;
  /** Default 1.5 — the brand hairline weight. */
  strokeWidth?: number;
  /** Any CSS colour; defaults to currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  label?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
