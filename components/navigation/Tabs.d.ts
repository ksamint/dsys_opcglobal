import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count pill. */
  count?: number | string;
  icon?: React.ReactNode;
  disabled?: boolean;
  /** id of the panel this tab controls (aria-controls). */
  panelId?: string;
}

/** Tab list with arrow-key navigation. Underline variant carries a 2px gold rule; segmented variant is a pill group on a surface track. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  /** Controlled active id. */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  variant?: "underline" | "segmented";
  size?: "sm" | "md";
  fullWidth?: boolean;
}

export declare function Tabs(props: TabsProps): JSX.Element;
