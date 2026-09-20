import * as React from "react";

export type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger" | "navy" | "gold";

/** Read-only status pill. Tints for statuses; solid navy/gold for counts and labels on paper. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  /** Leading 6px dot in the tone colour. */
  dot?: boolean;
  size?: "sm" | "md";
  children: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
