import * as React from "react";

/** Deep-navy tooltip on hover/focus, 6px from the trigger, 160ms fade + 4px slide. */
export interface TooltipProps {
  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  /** Show delay in ms. Default 120. */
  delay?: number;
  style?: React.CSSProperties;
  /** A single focusable trigger. */
  children: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
