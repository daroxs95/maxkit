import { AriaAttributes } from "react";

export interface HelpLabelProps extends AriaAttributes {
  text: string;
  error?: boolean;
}
