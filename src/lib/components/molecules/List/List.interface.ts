import { AriaAttributes, ReactNode } from "react";

export interface ListProps extends AriaAttributes {
  children: ReactNode | ReactNode[];
  ordered?: boolean;
}

export interface ListItemProps extends AriaAttributes {
  children: ReactNode | ReactNode[];
  ordered?: boolean;
}
