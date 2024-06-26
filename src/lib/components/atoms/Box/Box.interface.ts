import {
  CornerPrimitives,
  DesignTokens,
  SpacingPrimitives,
  SurfaceTokens,
} from "../../../theme";
import { AriaAttributes, CSSProperties, MouseEvent, ReactNode } from "react";
import { SpacingStylesProps } from "../../../types/components.ts";

interface HoverStylesProps {
  bg?: keyof SurfaceTokens;
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
  hoverStyles?: HoverStylesProps;
  disabledStyles?: DisabledStylesProps;
  disabled?: boolean;
  // TODO: Fix this type inferring the type based on as prop
  onClick?: (e: MouseEvent<never>) => void;
  activeStyles?: HoverStylesProps;
  // TODO: Fix this type inferring the type based on as prop
  type?: "button" | "submit" | "reset";
}
