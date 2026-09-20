import * as React from "react";

export interface SelectOption { value: string; label: string; disabled?: boolean }

/** Native select with the Input chrome and a Lucide chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings or {value,label} objects. */
  options: Array<string | SelectOption>;
  /** Shown as a disabled first option while nothing is selected. */
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export declare function Select(props: SelectProps): JSX.Element;
