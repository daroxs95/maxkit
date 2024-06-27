import { AriaAttributes, ReactNode } from "react";

export interface CardProps extends AriaAttributes {
  withPadding?: boolean;
  children: ReactNode | ReactNode[];
  onClick?: () => void;
  canHover?: boolean;
  inverted?: boolean;
}
