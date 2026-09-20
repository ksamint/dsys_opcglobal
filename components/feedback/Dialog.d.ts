import * as React from "react";

/** Modal dialog (480/600/760). Serif title, muted description, right-aligned footer actions. Esc, scrim click, and the × close it. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Action row, e.g. <Button variant="ghost">Cancel</Button><Button>Confirm</Button>. */
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  closeLabel?: string;
  hideClose?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
