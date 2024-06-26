import { TypographyPrimitives } from "../../../theme";
import { ReactNode } from "react";

export interface TextProps {
  underline?: boolean;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: keyof TypographyPrimitives["weight"];
  size?: keyof TypographyPrimitives["size"];
  lineHeight?: keyof TypographyPrimitives["line-height"];
  children: ReactNode | ReactNode[];
}
