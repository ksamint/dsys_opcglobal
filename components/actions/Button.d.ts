import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "inverse" | "gold";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * OPC Global button. Navy primary, hairline secondary, ghost, red danger, white inverse for navy bands, gold for ceremonial emphasis.
 * @startingPoint section="Actions" subtitle="Buttons in every variant and size" viewport="700x300"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  /** sm 32px · md 40px · lg 48px */
  size?: ButtonSize;
  /** Icon or node before the label (use <Icon size="sm"/> for sm, "md" otherwise). */
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
