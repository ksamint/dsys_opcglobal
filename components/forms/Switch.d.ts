import * as React from "react";

/** Switch: 36×20 pill track, navy when on, 16px white thumb, 160ms slide. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "onChange"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Put the text before the track (settings rows). Default "end". */
  labelPosition?: "start" | "end";
}

export declare function Switch(props: SwitchProps): JSX.Element;
