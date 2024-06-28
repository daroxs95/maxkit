import { StyledBox } from "./Box.styled.ts";
import { BoxProps } from "./Box.interface.ts";

export function Box({
  padding = "space-0",
  margin = "space-0",
  children,
  as,
  borderWidth = "space-0",
  buttonType,
  inputType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  ...rest
}: BoxProps) {
  return (
    <StyledBox
      padding={padding}
      margin={margin}
      borderWidth={borderWidth}
      as={as}
      type={as === "button" ? buttonType : inputType}
      {...rest}
    >
      {children}
    </StyledBox>
  );
}
