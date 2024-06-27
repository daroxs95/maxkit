import styled from "../../../utils/styled";
import { TextProps } from "./Text.interface";
import { theme as defaultTheme, WithTheme } from "../../../theme";

export const StyledText = styled.p(
  ({
    theme: {
      typography = defaultTheme.typography,
      spacing = defaultTheme.spacing,
      colors = defaultTheme.colors,
      text = defaultTheme.text,
    } = defaultTheme,
    weight = "500",
    lineHeight = "md",
    size = "md",
    underline,
    margin,
    marginLeft,
    marginTop,
    marginRight,
    marginBottom,
    padding,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    lg,
    color,
    transform,
  }: WithTheme<Omit<TextProps, "as" | "children">>) => {
    return {
      fontFamily: typography.font.family,
      fontSize: typography.size[size],
      lineHeight: typography["line-height"][lineHeight] + "px",
      fontWeight: typography.weight[weight],
      textDecoration: underline ? "underline" : "none",
      margin: margin ? spacing[margin] : undefined,
      marginLeft: marginLeft ? spacing[marginLeft] : undefined,
      marginTop: marginTop ? spacing[marginTop] : undefined,
      marginRight: marginRight ? spacing[marginRight] : undefined,
      marginBottom: marginBottom ? spacing[marginBottom] : undefined,
      padding: padding ? spacing[padding] : undefined,
      paddingLeft: paddingLeft ? spacing[paddingLeft] : undefined,
      paddingTop: paddingTop ? spacing[paddingTop] : undefined,
      paddingRight: paddingRight ? spacing[paddingRight] : undefined,
      paddingBottom: paddingBottom ? spacing[paddingBottom] : undefined,
      color:
        color && colors
          ? colors[text[color] as keyof typeof colors]
          : undefined,
      textTransform: transform,
      "@media (min-width: 425px) ": {
        fontSize: lg?.size ? typography.size[lg.size] : undefined,
        lineHeight: lg?.lineHeight
          ? typography["line-height"][lg.lineHeight] + "px"
          : undefined,
        fontWeight: lg?.weight
          ? typography.weight[lg.weight]
          : typography.weight[weight],
        margin: lg?.margin ? spacing[lg.margin] : undefined,
        marginLeft: lg?.marginLeft ? spacing[lg.marginLeft] : undefined,
        marginTop: lg?.marginTop ? spacing[lg.marginTop] : undefined,
        marginRight: lg?.marginRight ? spacing[lg.marginRight] : undefined,
        marginBottom: lg?.marginBottom ? spacing[lg.marginBottom] : undefined,
        padding: lg?.padding ? spacing[lg.padding] : undefined,
        paddingLeft: lg?.paddingLeft ? spacing[lg.paddingLeft] : undefined,
        paddingTop: lg?.paddingTop ? spacing[lg.paddingTop] : undefined,
        paddingRight: lg?.paddingRight ? spacing[lg.paddingRight] : undefined,
        paddingBottom: lg?.paddingBottom
          ? spacing[lg.paddingBottom]
          : undefined,
      },
    };
  },
);
