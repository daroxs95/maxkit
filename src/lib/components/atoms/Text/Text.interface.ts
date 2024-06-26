import { SpacingPrimitives, TypographyPrimitives } from "../../../theme";
import { ReactNode } from "react";

interface TextStylesProps {
  weight?: keyof TypographyPrimitives["weight"];
  size?: keyof TypographyPrimitives["size"];
  lineHeight?: keyof TypographyPrimitives["line-height"];
  margin?: keyof SpacingPrimitives;
  marginTop?: keyof SpacingPrimitives;
  marginBottom?: keyof SpacingPrimitives;
  marginLeft?: keyof SpacingPrimitives;
  marginRight?: keyof SpacingPrimitives;
  padding?: keyof SpacingPrimitives;
  paddingTop?: keyof SpacingPrimitives;
  paddingBottom?: keyof SpacingPrimitives;
  paddingLeft?: keyof SpacingPrimitives;
  paddingRight?: keyof SpacingPrimitives;
}

export interface TextProps extends TextStylesProps {
  underline?: boolean;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode | ReactNode[];
  lg?: TextStylesProps;
}
