import { AriaAttributes, ReactNode } from "react";

export interface ParagraphProps extends AriaAttributes {
  children: ReactNode | ReactNode[];
  bold?: boolean;
  small?: boolean;
  inline?: boolean;
}
