import { SpacingPrimitives } from "../theme";

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
