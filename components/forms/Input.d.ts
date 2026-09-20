import * as React from "react";

export type InputSize = "sm" | "md" | "lg";

/** Text field: 1px hairline, 4px radius, navy border + gold ring on focus, red border and message on error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  /** Helper text under the field; replaced by `error` when present. */
  hint?: string;
  /** Error message; sets aria-invalid and red styling. */
  error?: string;
  /** sm 32px · md 40px · lg 48px */
  size?: InputSize;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  /** Default true. */
  fullWidth?: boolean;
  /** Styles for the outer wrapper. */
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
