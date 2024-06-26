import { AriaAttributes, ReactNode, MouseEvent } from "react";

export type ButtonVariants = "primary" | "secondary" | "tertiary" | "danger";

export interface ButtonProps extends AriaAttributes {
  children: ReactNode | ReactNode[];
  variant?: ButtonVariants;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
