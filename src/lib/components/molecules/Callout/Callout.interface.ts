import { AriaAttributes } from "react";

export type BadgeVariants = "info" | "error" | "warning" | "success";

export interface CalloutProps extends AriaAttributes {
  variant?: BadgeVariants;
  title: string;
  text: string;
}
