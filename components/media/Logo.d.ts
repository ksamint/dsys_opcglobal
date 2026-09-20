import * as React from "react";

export type LogoVariant = "navy" | "white" | "gold" | "black" | "mono";

/**
 * The official OPC Global wordmark. Navy on paper, white on navy, gold on deep navy, black for mono print.
 * Points at the hosted brand asset by default; pass `assetsBase` to serve the local copies in assets/logo.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: LogoVariant;
  /** Mark height in px. Never below 24. Default 40. */
  height?: number;
  /** Adds "OPC Global" beside the mark, separated by a gold hairline. */
  withName?: boolean;
  /** With `withName`, adds the Chinese name 欧匹赛全球联盟 underneath. */
  bilingual?: boolean;
  /** Directory holding the logo files, e.g. "../../assets/logo". Defaults to the hosted brand CDN. */
  assetsBase?: string;
}

export declare function Logo(props: LogoProps): JSX.Element;
