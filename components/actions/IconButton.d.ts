import * as React from "react";

export type IconButtonVariant = "ghost" | "secondary" | "primary" | "inverse";
export type IconButtonSize = "sm" | "md" | "lg";

/** Square icon-only button (32/40/48). Always labelled. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible name; also used as the tooltip title. */
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  /** Toggle state for ghost buttons (renders navy tint). */
  selected?: boolean;
  /** The icon, normally <Icon name="…" />. */
  children: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
