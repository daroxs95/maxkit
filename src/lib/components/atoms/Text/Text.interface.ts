import { SpacingStylesProps, TextStylesProps } from "../../../types/components";
import { CSSProperties, ReactNode } from "react";

export interface TextProps extends TextStylesProps, SpacingStylesProps {
  underline?: boolean;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "li";
  children: ReactNode | ReactNode[];
  transform?: CSSProperties["textTransform"];
  lg?: TextStylesProps & SpacingStylesProps;
  htmlFor?: string;
  id?: string;
}
