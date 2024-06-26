import { StyledText } from "./Text.styled.ts";
import { TextProps } from "./Text.interface";

export function Text({
  as,
  underline,
  weight,
  lineHeight,
  size,
  children,
}: TextProps) {
  return (
    <StyledText
      as={as}
      underline={underline}
      weight={weight}
      lineHeight={lineHeight}
      size={size}
    >
      {children}
    </StyledText>
  );
}
