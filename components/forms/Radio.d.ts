import * as React from "react";

/** Radio: 18px circle, 2px navy ring and 8px dot when selected. Share `name` across a group. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  name: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export declare function Radio(props: RadioProps): JSX.Element;
