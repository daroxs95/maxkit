import { CardProps } from "./Card.interface.ts";
import { Box } from "../../atoms";

export function Card({
  children,
  withPadding,
  canHover,
  onClick,
  inverted,
  ...aria
}: CardProps) {
  return (
    <Box
      bg={inverted ? "background-invert" : "background-overlay"}
      borderRadius="radius-10"
      paddingLeft={withPadding ? "space-70" : "space-0"}
      paddingRight={withPadding ? "space-70" : "space-0"}
      paddingTop={withPadding ? "space-80" : "space-0"}
      paddingBottom={withPadding ? "space-80" : "space-0"}
      borderWidth="space-10"
      onClick={onClick}
      hoverStyles={
        canHover
          ? {
              bg: inverted
                ? "background-invert-strongest"
                : "background-overlay-hover",
            }
          : undefined
      }
      focusStyles={
        canHover
          ? {
              bg: inverted
                ? "background-invert-strongest"
                : "background-overlay-hover",
              borderColor: "invert",
            }
          : undefined
      }
      activeStyles={
        canHover
          ? {
              bg: inverted
                ? "background-invert-strongest"
                : "background-overlay",
              borderColor: "invert",
            }
          : undefined
      }
      tabIndex={canHover ? 0 : undefined}
      {...aria}
    >
      {children}
    </Box>
  );
}
