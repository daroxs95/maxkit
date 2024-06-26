import { AriaAttributes, ReactNode } from "react";

export interface HeadingProps extends AriaAttributes {
  children: ReactNode | ReactNode[];
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
}
