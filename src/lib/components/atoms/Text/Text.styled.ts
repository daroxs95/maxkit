import styled from "../../../utils/styled";
import { TextProps } from "./Text.interface";
import { theme as defaultTheme, WithTheme } from "../../../theme";

export const StyledText = styled.span(
  ({
    theme: { typography = defaultTheme.typography } = defaultTheme,
    weight = "500",
    lineHeight = "md",
    size = "md",
    underline,
  }: WithTheme<Omit<TextProps, "as" | "children">>) => {
    return {
      fontFamily: typography.font.family,
      fontWeight: typography.weight[weight],
      fontSize: typography.size[size],
      lineHeight: typography["line-height"][lineHeight] + "px",
      textDecoration: underline ? "underline" : "none",
    };
  },
);
