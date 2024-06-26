import styled from "../../../utils/styled";
import { BoxProps } from "./Box.interface.ts";
import { theme as defaultTheme, WithTheme } from "../../../theme";

export const StyledBox = styled.div(
  ({
    theme: {
      spacing = defaultTheme.spacing,
      corners = defaultTheme.corners,
      surfaceColors = defaultTheme.surfaceColors,
      colors = defaultTheme.colors,
    } = defaultTheme,
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
    borderRadius,
    width,
    justifyContent,
    height,
    alignItems,
    flexDirection,
    display,
    gap,
    borderColor,
    borderWidth,
    bg,
    cursor,
    hover,
    disabledStyles,
  }: WithTheme<Omit<BoxProps, "as" | "children">>) => {
    return {
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
      borderRadius: borderRadius ? corners[borderRadius] : undefined,
      width: width ? width : undefined,
      justifyContent: justifyContent ? justifyContent : undefined,
      height: height ? height : undefined,
      alignItems: alignItems ? alignItems : undefined,
      flexDirection: flexDirection ? flexDirection : undefined,
      display: display ? display : undefined,
      gap: gap ? gap : undefined,
      borderColor: borderColor ? borderColor : undefined,
      borderWidth: borderWidth ? spacing[borderWidth] : undefined,
      backgroundColor: bg
        ? colors[surfaceColors[bg] as keyof typeof colors]
        : undefined,
      cursor: cursor ? cursor : undefined,
      "&:hover:not(disabled)": {
        backgroundColor: hover?.bg
          ? colors[surfaceColors[hover?.bg] as keyof typeof colors]
          : undefined,
      },
      "&:disabled": {
        backgroundColor: disabledStyles?.bg
          ? colors[surfaceColors[disabledStyles?.bg] as keyof typeof colors]
          : undefined,
        cursor: disabledStyles?.cursor ? disabledStyles.cursor : undefined,
      },
      // boxSizing: "border-box",
      "@media (min-width: 425px) ": {
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
        display: lg?.display ? lg.display : undefined,
        flexDirection: lg?.flexDirection ? lg.flexDirection : undefined,
        alignItems: lg?.alignItems ? lg.alignItems : undefined,
        justifyContent: lg?.justifyContent ? lg.justifyContent : undefined,
        gap: lg?.gap ? lg.gap : undefined,
        width: lg?.width ? lg.width : undefined,
        height: lg?.height ? lg.height : undefined,
      },
    };
  },
);
