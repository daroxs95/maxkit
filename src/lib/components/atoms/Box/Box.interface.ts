import {
  CornerPrimitives,
  DesignTokens,
  SpacingPrimitives,
} from "../../../theme";
import { AriaAttributes, CSSProperties, ReactNode } from "react";
import { SpacingStylesProps } from "../../../types/components.ts";

interface HoverStylesProps {
  bg?: keyof DesignTokens["surface"];
}

interface DisabledStylesProps
  extends Pick<CSSProperties, "cursor">,
    HoverStylesProps {}

interface BoxStylesProps
  extends Pick<
    CSSProperties,
    | "display"
    | "flexDirection"
    | "gap"
    | "width"
    | "height"
    | "alignItems"
    | "justifyContent"
  > {}

export interface BoxProps
  extends BoxStylesProps,
    SpacingStylesProps,
    AriaAttributes,
    HoverStylesProps,
    DisabledStylesProps {
  borderRadius?: keyof CornerPrimitives;
  borderColor?: keyof DesignTokens["border"];
  borderWidth?: keyof SpacingPrimitives;
  children: ReactNode | ReactNode[];
  as?:
    | "div"
    | "section"
    | "article"
    | "aside"
    | "main"
    | "header"
    | "footer"
    | "button"
    | "a";
  lg?: BoxStylesProps & SpacingStylesProps;
  hover?: HoverStylesProps;
  disabledStyles?: DisabledStylesProps;
  disabled?: boolean;
}
