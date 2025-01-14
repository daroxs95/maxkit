import {
  CornerPrimitives,
  DesignTokens,
  SpacingPrimitives,
  SurfaceTokens,
} from "../../../theme";
import {
  AriaAttributes,
  ChangeEvent,
  CSSProperties,
  MouseEvent,
  ReactNode,
} from "react";
import {
  SpacingStylesProps,
  TextStylesProps,
} from "../../../types/components.ts";

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
    | "width"
    | "height"
    | "alignItems"
    | "justifyContent"
    | "flexWrap"
    | "flex"
    | "minWidth"
    | "maxWidth"
    | "minHeight"
    | "maxHeight"
    | "gridTemplateColumns"
    | "gridColumn"
    | "gridRow"
  > {
  gap?: keyof SpacingPrimitives;
}

interface BorderStyleProps {
  borderRadius?: keyof CornerPrimitives;
  borderColor?: keyof DesignTokens["border"];
  borderWidth?: keyof SpacingPrimitives;
}

interface InputProps {
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType?: "text" | "password" | "email" | "number";
}

interface ButtonProps {
  onClick?: (e: MouseEvent<never>) => void;
  buttonType?: "button" | "submit" | "reset";
  activeStyles?: HoverStylesProps & BorderStyleProps;
}

export interface BoxProps
  extends BoxStylesProps,
    SpacingStylesProps,
    AriaAttributes,
    HoverStylesProps,
    DisabledStylesProps,
    BorderStyleProps,
    // TODO: Fix this type inferring the type based on as prop
    InputProps,
    ButtonProps,
    TextStylesProps {
  children?: ReactNode | ReactNode[];
  as?:
    | "div"
    | "section"
    | "article"
    | "aside"
    | "main"
    | "header"
    | "footer"
    | "button"
    | "a"
    | "input"
    | "ol"
    | "ul"
    | "form";
  lg?: BoxStylesProps & SpacingStylesProps;
  hoverStyles?: HoverStylesProps & BorderStyleProps;
  disabledStyles?: DisabledStylesProps;
  disabled?: boolean;
  focusStyles?: HoverStylesProps & BorderStyleProps;
  id?: string;
  tabIndex?: number;
  type?: unknown;
}
