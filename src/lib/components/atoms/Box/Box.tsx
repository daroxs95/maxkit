import { StyledBox } from "./Box.styled.ts";
import { BoxProps } from "./Box.interface.ts";

export function Box({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingRight,
  paddingTop,
  paddingLeft,
  paddingBottom,
  padding = "space-0",
  margin = "space-0",
  lg,
  children,
  as,
  display,
  borderColor,
  borderRadius,
  borderWidth = "space-0",
  flexDirection,
  alignItems,
  height,
  bg,
  justifyContent,
  gap,
  width,
  hoverStyles,
  disabledStyles,
  cursor,
  disabled,
  onClick,
  activeStyles,
  type,
  focusStyles,
  placeholder,
  value,
  required,
  onChange,
  ...aria
}: BoxProps) {
  return (
    <StyledBox
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={paddingBottom}
      padding={padding}
      margin={margin}
      as={as}
      display={display}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      flexDirection={flexDirection}
      alignItems={alignItems}
      height={height}
      bg={bg}
      justifyContent={justifyContent}
      gap={gap}
      width={width}
      hoverStyles={hoverStyles}
      disabledStyles={disabledStyles}
      lg={lg}
      cursor={cursor}
      disabled={disabled}
      onClick={onClick}
      activeStyles={activeStyles}
      type={type}
      focusStyles={focusStyles}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
      {...aria}
    >
      {children}
    </StyledBox>
  );
}
