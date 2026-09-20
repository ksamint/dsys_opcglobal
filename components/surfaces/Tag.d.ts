import * as React from "react";

/** Filter/topic chip: navy-tint pill, solid navy when selected, optional remove control. */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  selected?: boolean;
  /** Makes the chip a toggle button. */
  onSelect?: () => void;
  /** Adds an × control that calls this. */
  onRemove?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
