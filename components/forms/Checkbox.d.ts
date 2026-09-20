import * as React from "react";

/** Checkbox: 18px, 2px radius, navy fill when checked, white Lucide check. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  /** Renders a dash; aria-checked="mixed". */
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
