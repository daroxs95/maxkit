import { AriaAttributes } from "react";

export type BadgeVariants =
  | "info"
  | "error"
  | "warning"
  | "success"
  | "neutral";

export interface BadgeProps extends AriaAttributes {
  variant?: BadgeVariants;
  text: string;
}
