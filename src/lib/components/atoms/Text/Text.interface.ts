import { TypographyPrimitives, ColorsPrimitives } from "../../../theme";
import { SpacingStylesProps } from "../../../types/components";
import { ReactNode } from "react";

interface TextStylesProps {
  weight?: keyof TypographyPrimitives["weight"];
  size?: keyof TypographyPrimitives["size"];
  lineHeight?: keyof TypographyPrimitives["line-height"];
}

export interface TextProps extends TextStylesProps, SpacingStylesProps {
  color?: ColorsPrimitives;
  underline?: boolean;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode | ReactNode[];
  lg?: TextStylesProps & SpacingStylesProps;
}
