import * as React from "react";

export type CardTone = "paper" | "surface" | "navy";

/**
 * Content card: paper, 1px hairline, 4px radius, 24px padding, no shadow. Hover only strengthens the border.
 * @startingPoint section="Surfaces" subtitle="Cards with eyebrow, title, media, footer" viewport="700x320"
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Small gold uppercase label, e.g. "01 — Standards". */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Full-bleed top slot for an image. */
  media?: React.ReactNode;
  /** Bottom row for actions or metadata. */
  footer?: React.ReactNode;
  /** paper (default) · surface (grey band) · navy (inverse statement card). */
  tone?: CardTone;
  /** Inner padding in px. Default 24. */
  padding?: number;
  /** Strengthens the border on hover and shows a pointer. */
  interactive?: boolean;
  /** Renders as an anchor. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
