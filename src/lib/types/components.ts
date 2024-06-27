import {
  DesignTokens,
  SpacingPrimitives,
  TypographyPrimitives,
} from "../theme";

export interface TextStylesProps {
  weight?: keyof TypographyPrimitives["weight"];
  size?: keyof TypographyPrimitives["size"];
  lineHeight?: keyof TypographyPrimitives["line-height"];
  color?: keyof DesignTokens["text"];
}

export interface SpacingStylesProps {
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
