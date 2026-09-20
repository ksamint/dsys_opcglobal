import * as React from "react";

export type ToastTone = "neutral" | "success" | "warning" | "danger";

/** Notification card (360px): tone icon, title, description, optional inline action and dismiss. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: ToastTone;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: { label: string; onClick: () => void };
  onDismiss?: () => void;
  dismissLabel?: string;
  /** Auto-dismiss after this many ms (requires onDismiss). */
  duration?: number;
}

export interface ToastViewportProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
export declare function ToastViewport(props: ToastViewportProps): JSX.Element;
